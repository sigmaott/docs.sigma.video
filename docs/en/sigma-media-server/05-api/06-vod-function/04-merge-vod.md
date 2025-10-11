---
id: sigma-media-server-api-vod-function-merge-multiple-vod-files
title: Gộp nhiều tệp VOD
order: 4
---

# Gộp nhiều tệp VOD

join: [đối tượng], cấu hình trong target

- callback: [chuỗi], URL gọi lại
- maxSpeed: [số thực], tốc độ tối đa, mặc định 100
- clean: [số nguyên], dọn dẹp các tệp con sau khi gộp

* Tải lên callback ở định dạng json, nếu có lỗi status = error

```
{
  "path": "/mnt/ramdisk/record/",
  "callback": "http://localhost:8888/callback.txt",
  "speed": "50.00",
  "clean": 0,
  "status": "success",
  "joined": "/mnt/ramdisk/record/joined.mp4",
  "info": [
    {
      "id": "0",
      "type": "audio",
      "codec": "aac",
      "bitrate": 128527,
      "duration": 30.551333,
      "channel": "stereo",
      "sampleRate": 48000,
      "Profile": "LC"
    },
    {
      "id": "1",
      "type": "video",
      "codec": "h264",
      "bitrate": 2733013,
      "duration": 30.666667,
      "startTime": 0.066667,
      "width": 1920,
      "height": 1080,
      "fps": "30",
      "pixelFormat": "yuv420p",
      "bframe": 2,
      "profile": "high",
      "level": "4.1"
    }
  ],
  "segments": [
    {
      "name": "tmp.mp4",
      "duration": 0.0,
      "used": 0,
      "reason": "Không thể đọc thông tin"
    },
    {
      "name": "20211025103819.mp4",
      "duration": 30.733334,
      "used": 1
    }
  ]
}
```
