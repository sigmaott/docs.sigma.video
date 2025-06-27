---
title: Khởi tạo Job
order: 1
---

# Khởi tạo Job

Hàm Khởi tạo Job được sử dụng cho cả hai trường hợp: tạo một kênh mới và cập nhật một kênh đang chạy.

- **Nếu **name** khớp với một Job hiện có, Job sẽ được cập nhật.
- **Nếu **name** không khớp với Job hiện có, Job sẽ được tạo.

::: info

- **Các tham số cấu hình của Job sẽ không được lưu khi máy chủ tắt.
- **Sử dụng trường **mode** để tạo một job cho Kênh Live hoặc Nội dung VOD.
- **Trường **name** là một định danh duy nhất cho job và được sử dụng để cập nhật hoặc vô hiệu hóa job.
:::

## Yêu cầu

mẫu

```json
{
  "type": "start",
  "name": "VTV3",
  "mode": "live",
  "gpu": -1,
  "input": {
    "main": "udp://234.5.6.7:8888",
    "backup": "udp://234.5.6.7:7777"
  },
  "target": [
    {
      "enable": 0,
      "format": "rtmp",
      "URL": "rtmp://localhost/app/stream",
      "select": [
        "128k",
        "360"
      ]
    },
    {
      "enable": 1,
      "format": "hls",
      "url": "/mnt/ramdisk/origin04/source/",
      "select": [
        "128k",
        "360"
      ]
    },
    {
      "enable": 0,
      "format": "dash",
      "url": "/mnt/ramdisk/origin04/360/",
      "select": [
        "128k",
        "360",
        "source"
      ],
      "manifest":{
      },
      "DRM:{
      }
    }
  ],
  "profile": [
    {
      "enable": 0,
      "id": "data",
      "type": "data",
      "codec": "copy",
      "streamIndex": 0,
      "sourceIndex": 0,
      "iframe": 50
    },
    {
      "ID": "96K",
      "type": "audio",
      "codec": "aac",
      "bitrate": 96000
    },
    {
      "id": "360",
      "type": "video",
      "codec": "h264",
      "width": 640,
      "height": 360,
      "bitrate": 500000,
      "CBR": 1,
      "pixelFormat": "yuv420p",
      "watermark": [
        {
          "enable": 1,
          "x": 10,
          "Y": 20,
          "URL": "wm.png"
        }
      ]
    }
  ]
}
```
