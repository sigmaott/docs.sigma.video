---
title: 'Chuẩn bị'
order: 1
---

# Chuẩn bị

## Truy cập

Trước khi bắt đầu, bạn cần chuẩn bị các tác vụ sau:
- Có tài khoản truy cập hệ thống quản lý của **Sigma Streaming Platform** `https://portal.sigma.video`
- Tài khoản có quyền truy cập app được phân quyền với Livestream.

## Bước 1: Cách thức truy cập vào hệ thống Sigma Livestream

Để sử dụng Sigma Livestream, bạn cần có tài khoản và quyền truy cập, xem và thực hiện các hành động được phép.
1. Truy cập vào đường link `https://portal.sigma.video/auth/login`
2. Thực hiện các bước đăng nhập và quá trình onboarding (bắt buộc đối với tàu khoản mới).
3. Hiển thị Danh sách App, **chọn ứng dụng** cần truy cập.
4. Hiển thị mặc định vào trang **tổng quan ứng dụng.**
5. Ở sidebar, chọn sản phẩm Livestream.
6. Hiển thị trang mặc định **cấu hình ứng dụng** với tài khoản lần đầu truy cập.

## Bước 2:Chuẩn bị luồng
Các bước chuẩn bị để có thể khởi tạo 1 kênh livestream bạn có thể tham khảo sau đây:

1. Đầu tiên cần chuẩn bị 1 máy chủ **Sigma Media Server Pro** để có thể làm các tác vụ đầy đủ liên quan đến việc xử lý nội dung video. **Sigma Media Server Pro** cung cấp các component xử lý các bước như sau: 
   -  **Ingest Server**: Nhận tín hiệu đầu vào từ RTMP hoặc WebRTC qua giao thức WHIP
   -  **Encoding**: Chuyển mã và xử lý dữ liệu media data
   -  **Packaging**: Đóng gói nội dung thành HLS hoặc DASH
   -  **Origin**: Lưu trữ nội dung đóng gói và làm nguồn cấp phân phối nội dung đến cho người dùng

2. Cấu hình máy chủ **Sigma Media Server Pro** phục vụ cho livestream.

Xem và thực hiện theo hướng dẫn tại [đây](../../sigma-media-server/05-user-guide/02-sigma-live-server.md).