---
id: sigma-media-server-api-shared-function-job-initialization
title: Job Initialization
order: 1
---

# Job Initialization

The Initialize Job function is used for both cases: creating a new channel and updating a running channel.

- **If **name** matches an existing Job, the Job will be updated.
- **If **name** does not match the existing Job, the Job will be created.

::: info

- **Job's configuration parameters will not be saved when the server is turned off.
- **Use the **mode** field to create a job for Live Channel or VOD Content.
- **The **name** field is a unique identifier for the job and is used to update or disable the job.
:::

## Request

sample

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
    },
    {
      "id": "source",
      "type": "video",
      "Codec": "copy"
    }
  ],
  "option": {
    "syncCopy": 1,
    "blackout": {
      "input": "blackout.jpg"
    }
  },
  "watermark":
  {
    "enable": 1,
    "x": 10,
    "Y": 20,
    "URL": "wm.png"
  },
  "thumb": {
    "enable": 1,
    "width": 300,
    "delay": 6,
    "name":"%d.jpg",
    "URL": "/mnt/ramdisk/origin05/trial/thumb/"
  }
}
```

Where:

- **Struct**: basic structure
  - **name**: channel identifier to toggle on and off
  - **GPU**: GPU chip order, GPU list taken at dump command (NVIDIA only supported), -1 is CPU usage
  - **input**: input list
  - **Profile**: List of profiles
  - **target**: target list
  - **Watermark**: Common watermark for channel, if multiple use array
  - **thumb**: create thumnail for the channel, if multiple use array
  - **Option**: additional settings
  - **input**: can be 1 string, string array (multiple inputs), or 1 object for the channel with backup

### Ingredients in detail

- **profile**
  - **id**: the identifier of the profile, if in the form of hex[0x10->0x1ffe] will be used as stream_id in the output video
  - **streamIndex**: the order of the original stream in the input, for example, the input has 2 audios, you can set the audio to 0, 1
  - **sourceIndex**: the order of input
  - **type**: [video, audio, data]
  - **Audio**:
    - **sampleRate**: [44100(default), 48000]
    - **channel**: [1, 2(default), 6(5.1)]
    - **Codec**: [Copy, AAC(Default), AC3, EAC3, MP2]
    - **profile**(AAC only): [aac_low(default), aac_he, aac_he_v2, aac_main, aac_ld, aac_eld]
    - **volume**: change volume from original stream
      - **"+5dB", "-10dB": change by 1 amount)
      - **0.5, 2 : 1 halving, double
      - **"loudnorm": automatic according to EBU R128 standard
    - **language**: [2 characters string] en, vi, fr...
    - **group**: [string] group id
    - **label**: [string] display in player
  - **Video**:
    - **fps**: [20, 25(default), 30, 29.97, 59.94, 60]
    - **codec**: [H264(default), HEVC]
    - **pixelFormat**: [yuv420p(default), yuv444p, yuv420p10le, yuv444p10le]
    - **width, height**: [0, height],
