---
title: Hướng dẫn cập nhật Sigma Media Server trên Ubuntu
order: 1
---
# Hướng Dẫn Cập Nhật Sigma Media Server trên Ubuntu
Tài liệu này hướng dẫn cách cập nhật **Sigma Media Server** lên phiên bản mới trên các máy đã cài phiên bản cũ, bao gồm:

- Cập nhật thông qua `apt-get`
- Nâng cấp cấu hình qua giao diện web
- Cập nhật cấu hình qua API (`curl`)

> 🔒 Lưu ý: Luôn backup dữ liệu và cấu hình trước khi cập nhật để tránh mất mát thông tin.
> 



## 1. Kiểm Tra Phiên Bản Hiện Tại

Trước khi cập nhật, kiểm tra phiên bản hiện tại:

```bash
sigma-media-server --version

```

📝 **Note:** Ghi lại phiên bản để so sánh sau khi nâng cấp. Điều này giúp xác nhận cập nhật thành công.



## 2. Backup Trước Khi Nâng Cấp

Trước khi cập nhật, nên sao lưu:

```bash
# Backup cấu hình
sudo cp -r /etc/sigma-machine /backup/config_$(date +%F)

```



## 3. Cập Nhật Phiên Bản Mới

Giả sử muốn cập nhật lên phiên bản **5.1.5.rc5.beta**:

```bash
# Cập nhật danh sách gói từ repository
sudo apt-get update

# Cập nhật Sigma Media Server lên phiên bản cụ thể
sudo apt-get install -y sigma-media-server=5.1.5.rc5.beta

```

> 🔍 Lưu ý:
> 
> - Thêm `y` để tự động xác nhận cài đặt.
> - Nếu phiên bản không có sẵn, kiểm tra repository và cấu hình APT.



## 4. Kiểm Tra Sau Khi Nâng Cấp

```bash
# Kiểm tra phiên bản
sigma-media-server --version

# Khởi động lại Sigma Media Server
sudo systemctl restart sigma-media-server

# Kiểm tra trạng thái dịch vụ
sudo systemctl status sigma-media-server

```

- Phiên bản mới phải trùng với phiên bản vừa cập nhật.



## 5. Nâng Cấp Cấu Hình Qua Giao Diện Web

1. Truy cập giao diện web:
    
    ```
    http://<ip-của-bạn>:8019
    
    ```
  ![image.png](/images/media-server/maintenance/portal.png)
2. Nhấn **Edit** để chỉnh sửa cấu hình:
    - Cập nhật các thông tin mới nếu cần
    - Giữ mặc định nếu không muốn thay đổi
   ![image.png](/images/media-server/maintenance/update-config.png)
3. Nhấn **Save** để lưu và áp dụng nâng cấp.


## 6. Cập Nhật Cấu Hình Qua API (`curl`)

Bạn có thể cập nhật cấu hình máy qua API:

```bash
curl 'http://localhost:9081/api/machine-client/machine' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "name": "local-dev-server",
    "configuration": {
      "ingest": true,
      "origin": true
    },
    "log": {
      "path": "/var/log/sigma-machine",
      "expire": 7,
      "numberOfFileRotation": 10,
      "logFileSize": 50
    },
    "data": {
      "path": "/data/transcode/live",
      "expire": 300,
      "clearTimeInterval": 300
    },
    "catchup": {
      "path": "/data/transcode/catchup",
      "expire": 604800,
      "clearTimeInterval": 1800
    },
    "cache": {
      "path": "/data/transcode/cache",
      "expire": 604800,
      "clearTimeInterval": 1800
    },
    "metric": {
      "path": "/etc/sigma-machine/apps/victoria-metrics/victoria-metrics-data",
      "retention": 7
    },
    "manifest": {
      "path": "/data/transcode/manifest",
      "expire": 604800,
      "clearTimeInterval": 1800
    }
  }'

```

---

## 7. Giải Thích Các Tham Số Quan Trọng

| Trường | Mô tả | Đơn vị |
| --- | --- | --- |
| `log.expire` | Thời gian giữ log trước khi xoá | Ngày |
| `log.numberOfFileRotation` | Số lượng file log xoay vòng | Số nguyên |
| `log.logFileSize` | Kích thước tối đa mỗi file log | MB |
| `data.expire` | Thời gian giữ dữ liệu đầu ra | Giây |
| `data.clearTimeInterval` | Khoảng thời gian kiểm tra để xoá dữ liệu hết hạn | Giây |
| `catchup.expire` | Thời gian giữ nội dung Catchup | Giây |
| `cache.expire` | Thời gian giữ cache trước khi tự xoá | Giây |
| `manifest.expire` | Thời gian giữ file manifest | Giây |
| `metric.retention` | Thời gian giữ dữ liệu metrics trong VictoriaMetrics | Ngày |
