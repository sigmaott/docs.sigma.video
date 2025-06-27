---
title: Đăng ký máy chủ
order: 5
---

# Hướng dẫn Đăng ký Sigma Media Server

## Yêu cầu

Hệ thống Sigma Media Server yêu cầu máy chủ phải được đăng ký trước khi sử dụng. Để đăng ký máy chủ, bạn cần có tài khoản trên hệ thống [Sigma Video](https://sigma.video/). Nếu chưa có tài khoản, hãy đăng ký tại [đây](https://portal.sigmaott.com/auth/login).

Sau khi đăng nhập, bạn sẽ thấy màn hình chính của hệ thống quản lý Sigma Streaming Platform, chọn App mong muốn. Chọn mục **Server** và chọn **Thêm máy chủ**.

## Lấy token để đăng ký máy

Truy cập vào ứng dụng mong muốn sử dụng máy. Tại mục quản lý máy, nhấp vào "Thêm máy mới"

Hệ thống sẽ trả về cho người dùng thông tin cài đặt máy, bao gồm:

- Mã đăng ký: Dùng để đăng ký máy chủ

Ngoài ra, người dùng có thể thực hiện thao tác "Đổi mã đăng ký"

![Thêm máy chủ](/images/media-server/getstarted/add-server.png)

## Thực hiện đăng ký máy

### Đăng ký máy chủ qua Script

Sử dụng mã đăng ký để đăng ký máy chủ qua script sau:

```bash
/etc/sigma-machine/script/register.sh --server-name=live-server-83 --enable-origin=true --enable-ingest=true --server-token=xamBWB0CZpXgI9VXkP68c --server-data-dir=/data/transcode
```

Trong đó:

```bash
Cách dùng: /etc/sigma-machine/script/register.sh [TÙY CHỌN]

Tùy chọn:
  -sn, --server-name=VALUE Tên máy chủ của bạn (bắt buộc)
  -st, --server-token=VALUE Token lấy từ trang thêm máy chủ trên portal (bắt buộc)
  -eo, --enable-origin=VALUE Bật hoặc tắt máy chủ origin (cổng 8080 cho streaming http hls, dash) (mặc định là true)
  -ei, --enable-ingest=VALUE Bật hoặc tắt máy chủ ingest cho luồng vào (cổng 1935 cho rtmp, rtsp, srt) (mặc định là true)
  -sd, --server-data-dir=VALUE Đặt thư mục lưu dữ liệu của bạn (mặc định /data/transcode)
  -ae, --api-endpoint=VALUE API endpoint để đăng ký máy chủ (mặc định https://api.sigma.video)

Ví dụ:
  /etc/sigma-machine/script/.sh --server-name=live-server-01 --enable-origin=true --enable-ingest=true --server-token=kKLyAqeQlcWImVciTrWW- --server-data-dir=/data/transcode
```

## Thêm giấy phép vào máy chủ

Sau khi đăng ký máy chủ, bạn cần thêm giấy phép vào máy chủ. Bạn có thể làm điều này bằng cách làm theo hướng dẫn tại đây [giấy phép](../04-user-guide/01-add-license.md#way-2-access-to-server-management).

## Khởi động lại dịch vụ

Sau khi đăng ký máy chủ, bạn cần khởi động lại dịch vụ Sigma Media Server:

```bash
sudo systemctl restart sigma-media-server
```

Chúc bạn may mắn trong việc cài đặt và sử dụng Sigma Media Server! Nếu bạn gặp bất kỳ vấn đề gì, đừng ngần ngại liên hệ với chúng tôi để được hỗ trợ. Chúng tôi luôn sẵn lòng giúp bạn.

Truy cập portal của dịch vụ để thực hiện các thao tác liên quan đến máy chủ [Portal Sigma Streaming Platform](https://portal.sigmaott.com/auth/login)
