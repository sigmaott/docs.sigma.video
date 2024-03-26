---
title: Begin
order: 1
---

# Start working with the Sigma Media Server API

Sigma Media Server's API system provides methods to interact with Sigma Media Server services. These methods include methods for creating, updating, deleting, and retrieving information of resources. Sigma Media Server resources include:

Sigma Media Server jobs include types such as:

- **vod**: Job performs video related tasks on demand
- **live**: Job performs tasks related to Live channel

## Basic steps to start working with the Sigma Media Server API

### Basic statement syntax

The following is the basic statement syntax for communicating with the Sigma Media Server API:

```bash
curl -X POST "http://{$sigma-media-server-ip}:9999" \ 
     -d '{"type":"$function","mode":"vod", ... data}' \
     -H "accept: application/json"
```

Where:

- **{$sigma-media-server-ip}** is the IP address of Sigma Media Server.
- **$function** is the method of the API, e.g. **dump**, **start** ...
- **mode**: is the type of Job, can be **live** or **vod**
- **... data** is the remaining data of the function to send to the server

Example:

Sigma Media Server provides the basic data dump function of the system by calling GET to the IP address of Sigma Media Server through the default port of **9999**.

- Get **dump** with **GET** method

```bash
curl -X GET "https://localhost:9999"\ 
     -H "accept: application/json"
```

- Get **dump** with **POST** method

```bash
curl -X POST "https://localhost:9999" \ 
     -d '{"type":"dump"}' \
     -H "accept: application/json"
```

- Response sample:

```json
{
    "name": "sigma-server-01",
    "version": "3.0.12",
    "branch": "Commercial",
    "speed": 1,
    "build": "2024-02-29T06:30:09.650Z",
    "start": "2024-03-01T07:22:30.669Z",
    "local": "2024-03-02T16:53:51.624Z",
    "timezone": "Asia/Ho_Chi_Minh",
    "hostname": "sigma-media-server-01",
    "port": 9999,
    "queue": 0,
    "total": 6,
    "task": {
        "started": 6
    },
    "supported": [
        {
            "name": "NVIDIA A10",
            "Encoder": [
                "h264@yuv420p",
                "h264@yuv444p",
                "hevc@yuv420p",
                "hevc@yuv444p",
                "hevc@yuv420p10le",
                "hevc@yuv444p10le",
                "h264@bframe",
                "hevc@bframe"
            ],
            "decoder": [
                "h264@yuv420p",
                "hevc@yuv420p",
                "hevc@yuv420p10le"
            ]
        }
    ],
    "System": {
        "os": "Ubuntu 22.04.4 LTS",
        "cores": 64,
        "cpu": 0,
        "thread": 39,
        "ramTotal": 128347,
        "ramUsed": 13564,
        "swapTotal": 16383,
        "swapUsed": 0,
        "updateTime": "2024-03-02T16:53:51.000Z",
        "network": [
            {
                "name": "bond1.901",
                "ip": "172.16.10.15",
                "netmask": "172.16.10.0/24"
            },
            {
                "name": "bond2.35",
                "ip": "172.16.35.15",
                "netmask": "172.16.35.0/24"
            }
        ],
        "Storage": [
            {
                "name": "0",
                "folder": [
                    "/data/mediahub"
                ],
                "skip": [],
                "time": 604800,
                "delay": 360
            }
        ],
        "log": {
            "folder": "/var/log/sigma-machine/",
            "used": 255
        },
        "gpu": [
            {
                "index": 0,
                "name": "NVIDIA A10",
                "total": 22731,
                "used": 705,
                "gpu": 2,
                "soft": 3,
                "enc": 8,
                "dec": 2,
                "temp": 42,
                "speed": 1,
                "percent": 25,
                "count": 3
            }
        ],
        "process": {
            "pid": 1466498,
            "CPU": "59.3%",
            "ram": "3302MB",
            "Child": 14
        }
    },
    "APPS": [                                                        
        {
      
