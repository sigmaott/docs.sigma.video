---
id: sigma-media-server-api-shared-function-get-job-information
title: Lấy thông tin Job
order: 3
---

# Lấy thông tin Job

Lệnh này được sử dụng để lấy thông tin của một Job, trạng thái của job đang chạy

:::tip
Trường hợp không có `jobid` thì server sẽ trả về thông tin của tất cả các job đang chạy trên hệ thống
:::

## Yêu cầu

{
  "type": "progress",
  "name": "$job_name"
}
```

## Phản hồi

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
