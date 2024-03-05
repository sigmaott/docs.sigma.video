---
title: Lấy thông tin máy chủ
order: 1
---

# Lấy thông tin máy chủ

Function lấy thông máy chủ Sigma Media Server

## Request

```
{
  "type":"dump"
}
```

## Response

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
            "encoder": [
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
    "system": {
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
        "storage": [
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
                "gpu": 2,
                "mem": 3,
                "enc": 8,
                "dec": 2,
                "temp": 42,
                "speed": 1,
                "percent": 25,
                "count": 3
            }
        ],
        "process": {
            "pid": 1466498,
            "cpu": "59.3%",
            "ram": "3302MB",
            "child": 14
        }
    },
    "apps": [                                                        
        {
            "name": "portal-local",
            "state": "running",
            "life": "1d09h31m20s",
            "process": {
                "pid": 1467337,
                "cpu": "0.0%",
                "ram": "28MB"
            }
        },
        {
            "name": "nginx",
            "state": "running",
            "life": "7h00m50s",
            "process": {
                "pid": 1945814,
                "cpu": "0.0%",
                "ram": "346MB",
                "child": 64
            }
        },
        {
            "name": "prometheus-nginxlog-exporter",
            "state": "running",
            "life": "1d09h31m20s",
            "process": {
                "pid": 1467321,
                "cpu": "0.1%",
                "ram": "22MB"
            }
        },
        {
            "name": "origin",
            "state": "running",
            "life": "1d09h31m20s",
            "process": {
                "pid": 1467340,
                "cpu": "0.5%",
                "ram": "38MB"
            }
        },
        {
            "name": "plugin-manager",
            "state": "running",
            "life": "1d09h31m20s",
            "process": {
                "pid": 1467328,
                "cpu": "0.0%",
                "ram": "30MB"
            }
        },
        {
            "name": "victoria-metrics",
            "state": "running",
            "life": "1d09h31m20s",
            "process": {
                "pid": 1467323,
                "cpu": "0.3%",
                "ram": "110MB"
            }
        }
    ],
    "nats": {
        "id": "e3971ec5-460d-4fb7-b957-7120a37421bc.sigma-server-gpu-15-a5c8f624-651f-403b-9294-1610c83249b1",
        "license": "Y7KI4-HHQX5-0N9QN-X8TLN-VOPE7",
        "hook": 5000,
        "startup": "2024-03-01T07:22:30.805Z",
        "connected": 1
    },
    "licenseStatus": "VALID",
    "ec": 0,
    "result": {},
    "dt": 0,
    "now": "2024-03-02T16:53:51.624Z"
}
```

