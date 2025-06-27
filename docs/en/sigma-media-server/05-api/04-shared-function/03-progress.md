---
title: Get Job Information
order: 3
---

# Get Job Information

This command is used to get the information of a Job, the status of the running job

:::tip
You can use the wildcard '\*' to get the information of all running jobs
:::

## Request

```json
{
  "type": "progress",
  "name": "$job_name"
}
```

## Response

```json
{
  "total": 1,
  "ec": 0,
  "result": {
    "$job_name": {
      "speed": 1.0,
      "created": "2020-08-13 11:23:39",
      "startup": "2020-08-13 11:50:05",
      "state": "started",
      "Life": "1h41m18s",
      "PTS": "1h41m19s",
      "error": [
        "[08-13 11:48:24] Input timeout (code: INPUT_TIMEOUT)"
      ],
      "input": [
        {
          "URL": "udp://234.5.6.7:8888",
          "profile": [
            "aac stereo@48000 137Kbps lc",
            "H264 1280x720p@25 VBR Yuv420P High 3.1"
          ],
          "bitrate": 2390646
        }
      ],
      "profile": [
        {
          "ID": "128K",
          "bitrate": 128760
        }
        {
          "id": "480",
          "bitrate": 962192
        }
      ],
      "target": [
        {
          "format": "hls",
          "url": "/mnt/ramdisk/origin04/source/",
          "select": [
            "128k",
            "480"
          ],
          "bitrate": 5211223
        }
      ],
      "weight": 1,
      "_id": ""
    }
  },
  "Tel": 2
}
```
