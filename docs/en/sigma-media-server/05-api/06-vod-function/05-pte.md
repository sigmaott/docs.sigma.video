---
id: sigma-media-server-api-vod-function-per-title-encoding
title: Per-title encoding
order: 5
---

# Per-title encoding

What does Per-title Encoding do? In short: It introduces an additional step during the encoding process, analyzing the video asset. The findings are used to calculate the optimal bitrate ladder for every single asset and thus achieve higher perceptual quality.

## Usage

To use Per-title Encoding, you need to initialize the VOD Job with the **'vmaf'** parameter in each **'video'** profile where you want to use PTE

:::Tip
**'vmaf'** is a numerical parameter that will be used to calculate the ladder bitrate for each profile.

It is recommended to use the value **'91'** for best results.

You can simply use for the highest profiles (1080p, 720p) to reduce processing time.
:::

```json
{
  "type": "VOD",
  "name": "VTV3",
  "profiles": [
    {
      "id": "360",
      "type": "video",
      "codec": "h264",
      "width": 640,
      "height": 360,
      "vmaf": 91, // [!code warning]      
      "pixelFormat": "yuv420p",
    },
    {
      "id": "480",
      "type": "video",
      "codec": "h264",
      "width": 854,
      "height": 480,
      "vmaf": 91, // [!code warning]      
      "pixelFormat": "yuv420p",
    },
    {
      "ID": "720",
      "type": "video",
      "codec": "h264",
      "width": 1280,
      "height": 720,
      "vmaf": 91, // [!code warning]      
      "pixelFormat": "yuv420p",
    },
    {
      "id": "1080",
      "type": "video",
      "codec": "h264",
      "width": 1920,
      "height": 1080,
      "vmaf": 91, // [!code warning]      
      "pixelFormat": "yuv420p",
    }
  ],
  ...
}
```
