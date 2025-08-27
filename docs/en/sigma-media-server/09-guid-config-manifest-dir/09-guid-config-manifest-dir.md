---
id: sigma-media-server-manifest-dir-guide-en
title: Sigma media server manifest dir configuration guide
order: 1
---

# Sigma Media Server Manifest Dir Configuration Guide

## 1. Introduction

`Manifest Dir` is where Sigma Media Server **reads and writes manifest files** for streaming services (HLS/DASH).

The system supports multiple storage types, allowing flexible selection based on your needs:

- **Local**: Read and write directly on the server's disk.
- **S3**: Read and write on object storage services (Amazon S3, MinIO, Ceph).
- **HTTP**: Read and write from an HTTP/HTTPS server.
- **Redis (Single/Cluster/Sentinel)**: Read and write on Redis with low latency, supporting scale and HA.

---

## 2. Accessing the Configuration Page

1. *Open your browser and navigate to:*
    
    `http://<your-ip>:8019`
    
    ![image.png](../../../vi/sigma-media-server/image/09-guid-config-manifest-dir/dashbroad.png)

2. Select Manifest Dir storage type

    In the **Update registration Info** window, scroll down to the **Manifest Dir** section.

    In the dropdown box, you will see 2 options:

- **Default (local path)**:
    - Manifests will be stored directly on the **local disk** of Sigma Media Server.
    - Commonly used for **dev/test** environments or when distribution is not needed.
- **Third-party storage**:
    - Allows configuration of external storage like **S3, HTTP, Redis (single, cluster, sentinel)**.
    - Suitable for **production** environments when **HA, scalability** is needed.


![image.png](../../../vi/sigma-media-server/image/09-guid-config-manifest-dir/update-register.png)

3. After finishing your edits, click **Save** to save the configuration and apply the upgrade.

---

## 3. Configuration by Storage Type

### 3.1. Local Storage

- **Purpose**: Read and write manifests directly on server disk.

**JSON Example:**

```json
{
  "type": "fs",
  "fs": {
    "data_dir": "/data/transcode"
  }
}
```

**Parameter explanation**:

- `type`: storage type, here it's `fs`.
- `fs.data_dir`: directory path on server disk to store manifests.

### 3.2. S3 Storage

- **Purpose**: Read and write manifests on object storage services.

**JSON Example:**

```json
{
  "type": "s3",
  "s3": {
    "bucket": "my-manifest-bucket",
    "region": "ap-southeast-1",
    "access_key": "AKIAEXAMPLE",
    "secret_key": "abcd1234example",
    "host": "s3.example.com",
    "port": 9000,
    "use_ssl": true
  }
}
```

**Parameter explanation**:

- `type`: storage type is `s3`.
- `s3.bucket`: bucket name containing manifests.
- `s3.region`: geographical region of the bucket.
- `s3.access_key`: access key (API key) for connection.
- `s3.secret_key`: corresponding secret key.
- `s3.host`: S3 endpoint (AWS or S3-compatible).
- `s3.port`: S3 service port (usually `443` with SSL, `80` without SSL).
- `s3.use_ssl`: `true/false`, enable HTTPS or not.

### 3.3. HTTP Storage

- **Purpose**: Read and write manifests on an HTTP/HTTPS server.

**JSON Example:**

```json
{
  "type": "http",
  "http": {
    "base_path": "https://cdn.example.com/manifests/"
  }
}
```

**Parameter explanation**:

- `type`: storage type is `http`.
- `http.base_path`: base URL where manifests are stored.

### 3.4. Redis (Single Node)

- **Purpose**: Read and write manifests in Redis key-value store.

**JSON Example:**

```json
{
  "type": "redis",
  "redis": {
    "uri": "localhost:6379"
  }
}
```

**Parameter explanation**:

- `type`: storage type is `redis`.
- `redis.uri`: Redis server address (host:port).

### 3.5. Redis Cluster

- **Purpose**: Distribute manifest data across multiple Redis Cluster nodes.

**JSON Example:**

```json
{
  "type": "redis",
  "redis": {
    "clusters": [
      { "host": "10.0.1.1", "port": 6379 },
      { "host": "10.0.1.2", "port": 6379 },
      { "host": "10.0.1.3", "port": 6379 }
    ],
    "user_name": "clusterUser",
    "password": "clusterPass",
    "pool_size": 30,
    "use_pipeline": false
  }
}
```

**Parameter explanation**:

- `redis.clusters`: list of nodes in Redis Cluster.
- `redis.user_name`: user for cluster authentication (if ACL is enabled).
- `redis.password`: password for authentication.
- `redis.pool_size`: number of connections in the pool.
- `redis.use_pipeline`: enable/disable pipeline (multiple commands in one round-trip).

### 3.6. Redis Sentinel

- **Purpose**: Read and write on Redis Sentinel.

**JSON Example:**

```json
{
  "type": "redis",
  "redis": {
    "sentinels": [
      { "host": "10.0.0.1", "port": 26379 },
      { "host": "10.0.0.2", "port": 26379 },
      { "host": "10.0.0.3", "port": 26379 }
    ],
    "sentinel_username": "sentinelUser",
    "sentinel_password": "sentinelPass",
    "name": "mymaster",
    "user_name": "appUser",
    "password": "redisPass",
    "pool_size": 20
  }
}
```

**Parameter explanation**:

- `redis.sentinels`: list of Sentinels (host:port).
- `redis.name`: master group name (e.g., `mymaster`).
- `redis.sentinel_username`: user for Sentinel authentication.
- `redis.sentinel_password`: password for Sentinel authentication.
- `redis.user_name`: user for connecting to Redis Master/Slave.
- `redis.password`: password for Redis user.
- `redis.pool_size`: number of connections in connection pool.
- `redis.use_pipeline`: enable pipeline to speed up reading/writing multiple commands.

## 4. Testing

Send a master HLS file with basic content (`#EXTM3U`, `#EXT-X-VERSION:4`) to the server via API.

```bash
# PUT master.m3u8 file to server
curl -X PUT "http://127.0.0.1:8081/manifest/test/master.m3u8" \
  -H "Content-Type: application/vnd.apple.mpegurl" \
  --data-binary $'#EXTM3U\n#EXT-X-VERSION:4\n'

# Response from server
{"message":"ok"}
```
