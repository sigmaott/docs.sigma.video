---
id: sigma-media-server-api-begin
title: Bắt đầu
order: 1
---

# Bắt đầu làm việc với API của Sigma Media Server

Hệ thống API của Sigma Media Server cung cấp các phương thức để tương tác với các dịch vụ của Sigma Media Server. Các phương thức này bao gồm các phương thức để tạo, cập nhật, xóa và truy xuất thông tin của các tài nguyên. Tài nguyên của Sigma Media Server bao gồm:

Các công việc của Sigma Media Server bao gồm các loại như:

- **vod**: Công việc thực hiện các tác vụ liên quan đến video theo yêu cầu
- **live**: Công việc thực hiện các tác vụ liên quan đến kênh Live

## Các bước cơ bản để bắt đầu làm việc với API của Sigma Media Server

### Cú pháp câu lệnh cơ bản

Sau đây là cú pháp câu lệnh cơ bản để giao tiếp với API của Sigma Media Server:

```bash
curl -X POST "http://{$sigma-media-server-ip}:9999" \
     -d '{"type":"$function","mode":"vod", ... data}' \
     -H "accept: application/json"
```

Trong đó:

- **{$sigma-media-server-ip}** là địa chỉ IP của Sigma Media Server.
- **$function** là phương thức của API, ví dụ: **dump**, **start** ...
- **mode**: là loại Công việc, có thể là **live** hoặc **vod**
- **... data** là dữ liệu còn lại của hàm để gửi đến máy chủ

**Ví dụ:**

Sigma Media Server cung cấp chức năng kết xuất dữ liệu cơ bản của hệ thống bằng cách gọi GET đến địa chỉ IP của Sigma Media Server thông qua cổng mặc định là **9999**.

- Lấy **dump** bằng phương thức **GET**

```bash
curl -X GET "https://localhost:9999"\
     -H "accept: application/json"
```

- Lấy **dump** bằng phương thức **POST**

```bash
curl -X POST "https://localhost:9999" \
     -d '{"type":"dump"}' \
     -H "accept: application/json"
```

- Phản hồi mẫu:

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
        "swapUsed": 0
    }
}
```
