---
title: Merge multiple VOD files
order: 3
---

# Merge multiple VOD files

join\*\*\*: [object], configure in target

- callback\*\*\*: [string], callback URL
- maxSpeed\*\*\*: [double], maximum speed, default 100
- clean\*\*\*: [int], clean subfiles after joining

* Callback upload in json format, if there is an error status = error

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
      "reason": "Can't read info"
    },
    {
      "name": "20211025103819.mp4",
      "duration": 30.733334,
      "used": 1
    }
  ]
}
```