---
title: Lấy thông tin Job
order: 3
---

# Lấy thông tin Job

Lệnh này dùng để lấy thông tin của một Job, trạng thái của job đang chạy

::: tip
Bạn có thể sử dụng wildcard `*` để lấy thông tin của tất cả các job đang chạy
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
      "life": "1h41m18s",
      "pts": "1h41m19s",
      "error": [
        "[08-13 11:48:24] Input timeout (code: INPUT_TIMEOUT)"
      ],
      "input": [
        {
          "url": "udp://234.5.6.7:8888",
          "profile": [
            "aac stereo@48000 137Kbps lc",
            "h264 1280x720p@25 vbr yuv420p high 3.1"
          ],
          "bitrate": 2390646
        }
      ],
      "profile": [
        {
          "id": "128k",
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
  "dt": 2
}
```
