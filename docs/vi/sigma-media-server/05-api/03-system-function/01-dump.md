---
id: sigma-media-server-api-system-function-get-server-information
title: Lấy thông tin máy chủ
order: 1
---

# Lấy thông tin máy chủ

Hàm truy xuất thông tin qua Sigma Media Server

## Yêu cầu

```
{
  "type":"dump"
}
```

## Phản hồi

```json
{
    "name": "sigma-server-01",
    "version": "3.0.12",
    "branch": "Commercial",
    "speed": 1,
    "build": "2024-02-29T06:30:09.650Z",
    "start": "2024-03-01T07:22:30.669Z",
    "local": "2024-03-02T16:53:51.624Z",
    "timezone": "Asia/Ho_Chi_Minh",
    "hostname": "sigma-media-server-01",
    "port": 9999,
    "queue": 0,
    "total": 6,
    "task": {
        "started": 6
    },
    "supported": [
        {
            "name": "NVIDIA A10",
            "Encoder": [
                "h264@yuv420p",
                "h264@yuv444p",
                "hevc@yuv420p",
                "hevc@yuv444p",
                "hevc@yuv420p10le",
                "hevc@yuv444p10le",
                "h264@bframe",
                "hevc@bframe"
            ],
            "decoder": [
                "h264@yuv420p",
                "hevc@yuv420p",
                "hevc@yuv420p10le"
            ]
        }
    ],
    "System": {
        "os": "Ubuntu 22.04.4 LTS",
        "cores": 64,
        "cpu": 0,
        "thread": 39,
        "ramTotal": 128347,
        "ramUsed": 13564,
        "swapTotal": 16383,
        "swapUsed": 0,
        "updateTime": "2024-03-02T16:53:51.000Z",
        "network": [
            {
                "name": "bond1.901",
                "ip": "172.16.10.15",
                "netmask": "172.16.10.0/24"
            },
            {
                "name": "bond2.35",
                "ip": "172.16.35.15",
                "netmask": "172.16.35.0/24"
            }
        ],
        "Storage": [
            {
                "name": "0",
                "folder": [
                    "/data/mediahub"
                ],
                "skip": [],
                "time": 604800,
                "delay": 360
            }
        ],
        "log": {
            "folder": "/var/log/sigma-machine/",
            "used": 255
        },
        "gpu": [
            {
                "index": 0,
                "name": "NVIDIA A10",
                "total": 22731,
                "used": 705,
                "gpu": 2
            }
        ]
    }
}
```
