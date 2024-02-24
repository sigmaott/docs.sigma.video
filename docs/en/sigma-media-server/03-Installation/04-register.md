---
title: Server registration
order: 4
---

# Sigma Media Server Registration Guide

## Request

The Sigma Media Server system requires the server to be registered before use. To register the server, you need to have an account on the [Sigma Video](https://sigma.video/) system. If you do not have an account, register for one at [here](https://portal.sigmaott.com/auth/login).

After logging in, you will see the main screen of the Sigma Streaming Platform management system, select the desired App. Select the item **Server** and select **Add server**.

## Get the token to register the machine

Make access to the desired application using the machine. At the machine management section, click "Add new machine"

The system will return to the user machine installation information for the user, including:

- Registration code: Used in registering the server

Alternatively, the user can perform the operation "Redeem registration code"

! [Add Server] (/images/media-server/getstarted/add-server.png)

## Perform machine registration

### Server registration via Script

Use the registration code to register the server via the following script:

```bash
/etc/sigma-machine/script/register.sh --server-name=live-server-83 --enable-origin=true --enable-ingest=true --server-token=xamBWB0CZpXgI9VXkP68c --server-data-dir=/data/transcode
```

Where:

```bash
Usage: /etc/sigma-machine/script/register.sh [OPTIONS]

Options:
  -sn, --server-name=VALUE       Your server name (required)
  -st, --server-token=VALUE      Token get from portal server add page (required)
  -eo, --enable-origin=VALUE     Enable or disable origin server (port 8080 for http streaming hls, dash) (default true)
  -ei, --enable-ingest=VALUE     Enable or disable ingest server for incomming streaming(port 1935 for rtmp, rtsp, srt) (default true)
  -sd, --server-data-dir=VALUE   Set your data dir save data (default /data/transcode)
  -ae, --api-endpoint=VALUE      API endpoint for register server (default https://api.sigma.video)

Example:
  /etc/sigma-machine/script/.sh --server-name=live-server-01 --enable-origin=true --enable-ingest=true --server-token=kKLyAqeQlcWImVciTrWW- --server-data-dir=/data/transcode
```

## Thêm giấy phép cho máy chủ

Sau khi đăng kí máy chủ, bạn cần thêm giấy phép cho máy chủ. Bạn có thể thực hiện việc này bằng cách theo hướng dẫn tại đây [license](../04-getting-started/05-add-license.md#cách-2-truy-cập-vào-phần-quản-lý-máy-chủ)
