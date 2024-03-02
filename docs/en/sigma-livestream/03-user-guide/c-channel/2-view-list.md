---
title: Danh sách kênh Livestream
order: 2
---

# Danh sách kênh Livestream

Để quản lí kênh và hiển thị các thông tin cơ bản của kênh, hệ thống hiển thị dưới dạng danh sách giúp người dùng lọc thông tin, tìm kiếm kênh mong muốn và cho phép thực hiện các thao tác khác cho phép.

Tại màn hình chính hệ thống chọn **Danh sách kênh**

Màn hình chính hệ thống hiển thị:

![Danh sách kênh](/images/livestream/list-channel.png)

Các thông tin được hiển thị trong giao diện:

- - **ID**: Sau khi người dùng tạo mới kênh, hệ thống sinh ra ID riêng cho kênh với mục đích nhận diện.
- **Tên**: Nhấp vào tên, hiển thị trang chi tiết
- **Thẻ**: Thông tin không bắt buộc, do người dùng CMS cấu hình mô tả ngắn gọn các đặc điểm của kênh.
- **Trạng thái**:
  - IDLE: trạng thái khởi tạo của kênh- không có session nào đang được chạy( trường hợp session trạng thái `ended` -> kênh về `IDLE`).
  - Active: Đang sử dụng session
  - Stop: người dùng chủ động dừng kênh

Thứ tự: IDLE → Active -> Stop

- **Kiểu**: do người dùng cấu hình
- **Thời gian tạo**: thời gian hệ thống ghi nhận tạo mới kênh, định dạng YYYY/MM/DD HH:mm:ss.
- **Thời gian cập nhật**: sắp xếp mặc định- kênh được khởi tạo/ cập nhật mới nhất hiển thị lên đầu trang.
- **Hành động**:
  - **Mở danh sách session**: điều hướng tới danh sách, hiển thị các session có ID kênh bạn chọn.
  - **Chỉnh sửa**: Chỉnh sửa các thông tin của kênh.
  - **Xoá**: xoá kênh không cần thiết.
  - **Bắt đầu**:  bắt đầu phát lại kênh
  - **Dừng lại**: chủ động dừng kênh trước thời gian timeout.
