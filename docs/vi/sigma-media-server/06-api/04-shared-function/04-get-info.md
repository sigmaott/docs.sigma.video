---
title: Lấy thông tin của đầu vào
order: 3
---

# Lấy thông tin của đầu vào

Hàm này dùng để lấy thông tin của đầu vào, thông tin này bao gồm thông tin codec, bitrate, kích thước, fps, keyframe, ...

::: info
Với chế độ **detectKeyframe**: 1, hệ thống sẽ đo keyframe của đầu vào và trả về thông tin keyframe sau khoảng thời gian **timeout**

Ví dụ:

```
{
    "kf": "0,2000,4000"  
}
```

Key frame ở frame 0, 2000, 4000 milisecond
:::

## Request

- timeout: số giây
- detectKeyframe: [0, 1], bật chế độ đo keyframe

```json
{
 "type": "info",
 "timeout": 20,
 "detectKeyframe": 1,
 "input": "udp://225.2.100.228:5000"
}
```

## Response

```json
"ec": 0,
  "result": {
    "rtmp://localhost/live/test": [
      {
        "type": "data",
        "codec": "none",
        "bitrate": 0
      },
      {
        "type": "audio",
        "codec": "aac",
        "bitrate": 128696,
        "channel": 2,
        "sampleRate": 48000,
        "profile": "LC"
      },
      {
        "type": "video",
        "codec": "h264",
        "bitrate": 2402563,
        "width": 1280,
        "height": 720,
        "fps": "25",
        "interlaced": 0,
        "pixelFormat": "yuv420p",
        "profile": "High",
        "level": "3.1",
        "kf": "0,2000,4000"
      }
    ]
  },
  "dt": 1605
```