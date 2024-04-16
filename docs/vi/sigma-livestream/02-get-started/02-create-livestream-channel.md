---
title: 'Tạo kênh Livestream'
order: 2
---

# Bắt đầu với Sigma Livestream

## Thiết lập kênh Livestream

Để thiết lập kênh Livestream bạn cần thực hiện các tác vụ sau:
- [Chuẩn bị](01-prepare.md): Chuẩn bị máy chủ.
- [cấu hình ứng dụng](../03-user-guide/a-app-config.md): Chuẩn bị máy chủ.
- [Tạo kênh](../03-user-guide/c-channel/1-create.md):Tạo cấu hình kênh Livestream.
- [Đẩy đầu vào](./03-push-data.md): Sử dụng đường dẫn kênh Livestream sinh ra để đẩy luồng dữ liệu từ bên thứ 3.
- [Xem lại](./04-playback.md): Thu thập, theo dõi các thông số cần thiết.
- [Đóng session](./05-close-session.md): Thu thập, theo dõi các thông số cần thiết.

Khi hoàn tất, bạn sẽ có thể gửi yêu cầu phát lại tới Sigma Livestream cho nội dung kênh được cá nhân hóa trong luồng của mình.

## Bước 2: Để tạo mới kênh livestream

1. Tại mục danh sách kênh, nhấp vào nút **Thêm kênh**
2. Hệ thống hiển thị Pop-up Tạo kênh.
3. Người dùng nhập các thông tin theo yêu cầu.
4. Thực hiện tạo mới.

Ví dụ cấu hình: 
- **Cấu hình cơ bản**
    - Tên kênh: Tên ể phân biệy
    Ví dụ: `test-channel`
- **Cấu hình nâng cao**: 
    - Kiểu: `Transcode`
    - Cách thức: `Normal`
    - Định dạng đầu ra: `HLS`
    - Transcode profile: `480p`, `720p`
    - Timeout: `300`
    - Cấu hình máy chủ: `Tắt`
    - Catchup:
        - Destination: `FTP(s)`
        - host: `192.168.0.10`
        - port: `21`
        - username: `admin`
        - password: `123456`
    - Record:
        - Destination: `Server`

Khi hoàn tất, bạn mở trình duyệt có cài tiện ích **HLS player - m3u8 streaming**, nhập Livestream URL của mình và xem luồng phát trình duyệt theo hướng dẫn [tại đây](./03-push-data.md).

## Bước 3: Kiểm tra cấu hình

Kiểm tra luồng bằng URL ở định dạng thích hợp cho giao thức phát trực tuyến của bạn. 
### Để xem chi tiết kênh livestream

1. Tại giao diện danh sách kênh livestream, người dùng click vào **tên kênh livestream** để xem thông tin chi tiết.
2. Hệ thống hiển thị thông tin chi tiết kênh livestream.
3. Người dùng xem các thông tin chi tiết kênh livestream và có thể **sử dụng các URL** để chạy kênh livestream mong muốn.

*Sau khi người dùng cấu hình kênh livestream, sigma livestream trả về thông tin cài đặt gồm:*

- Ví dụ link Stream ID: mã định danh của kênh

```
1e89fbf6-c64e-4477-b1ba-10caa7fab3b3
```

- Stream token: là token để chạy

```
a85e8-463282bafd2b28f1fc7d-08b26
```
- Stream URL: link URI, rtmp để người dùng push luồng live lên

```
rtmp://192.168.80.2:1935/live/livestream
```
- Livestream URL: link http để người dùng xem stream. Định dạng đầu ra cấu hình là `HLS` nên livestream URL có đuôi **.m3u8**

```
http://192.168.80.2:8080/manifest/a85e8b80-7a3c-46d4-bbd0-4c0bfbe08b26/master.m3u8
```
## Bước 4: Dọn dẹp (Xoá kênh livestream)

Khi bạn đã tạo và khởi kênh livestream, sau đó đến thời gian kênh tự động ngừng hoạt động. Trong trường hợp bạn cần xoá kênh không cần thiết, bạn có thể thực hiện thao tác xoá kênh livestream như sau:

1. Trên giao diện danh sách kênh livestream, hãy chọn kênh mà bạn muốn xoá, và nhấp vào biểu tượng **Xoá.**
2. Một hộp thoại xác nhận sẽ xuất hiện. Hãy chọn nút **Xoá** để tiếp tục.
3. Hệ thống sẽ thực hiện xoá kênh livestream, xoá tất cả video, nội dung, phiên và thông tin trong kênh này. Giao diện trở về giao diện Danh sách kênh livestream đồng thời hiển thị thông báo xoá thành công.
