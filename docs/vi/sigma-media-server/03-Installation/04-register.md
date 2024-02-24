---
title: Đăng kí máy chủ
order: 4
---

# Hướng dẫn đăng kí máy chủ Sigma Media Server

## Yêu cầu

Hệ thống Sigma Media Server yêu cầu máy chủ phải được đăng kí trước khi sử dụng. Để đăng kí máy chủ, bạn cần có tài khoản trên hệ thống [Sigma Video](https://sigma.video/). Nếu bạn chưa có tài khoản, hãy đăng kí tài khoản tại [đây](https://portal.sigmaott.com/auth/login).

Sau khi đăng nhập, bạn sẽ thấy màn hình chính của hệ thống quản lý Sigma Streaming Platform, thực hiện chọn **App** mong muốn cài đặt . Bạn chọn mục **Máy chủ** và chọn **Thêm máy chủ**.


## Lấy mã token để thực hiện đăng kí máy

Thực hiện truy cập vào ứng dụng mong muốn sử dụng máy. Tại phần quản lý máy, nhấp "Thêm máy mới"


Hệ thống sẽ trả về cho người dùng thông tin cài đặt máy cho người dùng, bao gồm:

- Mã đăng ký: Sử dụng trong việc đăng kí máy chủ

Ngoài ra, người dùng có thể thực hiện thao tác "Đổi mã đăng ký"

![Add Server](/images/media-server/getstarted/add-server.png)

## Thực hiện đăng kí máy

### Đăng kí máy chủ qua Script

Sử dụng mã đăng ký để thực hiện đăng kí máy chủ qua script sau:

```bash
/etc/sigma-machine/script/register.sh --server-name=live-server-83 --enable-origin=true --enable-ingest=true --server-token=xamBWB0CZpXgI9VXkP68c --server-data-dir=/data/transcode --api-endpoint=https://dev-streaming.gviet.vn:8783
```

Trong đó: 

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
  /etc/sigma-machine/script/.sh --server-name=live-server-01 --enable-origin=true --enable-ingest=true --server-token=kKLyAqeQlcWImVciTrWW- --server-data-dir=/data/transcode --api-endpoint=https://dev-streaming.gviet.vn:8783
```

