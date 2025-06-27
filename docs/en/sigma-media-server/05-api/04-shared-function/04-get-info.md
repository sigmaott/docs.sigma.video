---
id: sigma-media-server-api-shared-function-get-the-information-of-the-input
title: Get the information of the input
order: 4
---

# Get the information of the input

This function is used to get the information of the input, this information includes codec information, bitrate, size, fps, keyframe, ...

::: info
With **detectKeyframe** mode: 1, the system will measure the keyframe of the input and return the keyframe information after the **timeout** period

Example:

```
{
    "Kf": "0.2000,4000"  
}
```

Key frame at frame 0, 2000, 4000 milliseconds
:::

## Request

- Timeout: seconds
- detectKeyframe: [0, 1], enable keyframe measurement mode

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
{
"ec": 0,
  "result": {
    "rtmp://localhost/live/test": [
      {
        "type": "data",
        "codecs": "none",
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
        "Kf": "0.2000,4000"
      }
    ]
  },
  "Tel": 1605
```
