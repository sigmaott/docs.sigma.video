---
title: Danh sách hàm
order: 2
---

# Danh sách các hàm API được cung cấp bởi Sigma Media Server

Chúng tôi cung cấp các cách để tương tác với các dịch vụ của Sigma Media Server. Các phương thức này bao gồm các phương thức tạo, cập nhật, xóa và truy xuất thông tin của tài nguyên. Tài nguyên của Sigma Media Server bao gồm các công việc.

:::tip
Với các hàm loại hệ thống, bạn không cần truyền giá trị `mode` vào phần thân của yêu cầu.
:::

| **Tên** | **Mô tả** | **Chế độ** | **Liên kết Tham khảo** |
| --- | --- | --- | --- |
| **info** | Lấy thông tin đầu vào | **system** | [Tài liệu](#) |
| **Dump** | Lấy thông tin Sigma Media Server | **system** | [Tài liệu](#) |
| **Apps** | Chạy các ứng dụng tích hợp (nginx, rtmp, ứng dụng tùy chỉnh) | **system** | [Tài liệu](#) |
| **Log** | Xem nhật ký hệ thống hoặc nhật ký ứng dụng | **system** | [Tài liệu](#) |
| **File** | Ghi tệp văn bản với nội dung | **system** | [Tài liệu](#) |
| **read/write** | Đọc/ghi tệp | **system** | [Tài liệu](#) |
| **start** | Bắt đầu một Tác vụ Công việc | **live/VOD** | [Tài liệu](#) |
| **Stop** | Dừng một hoặc nhiều Tác vụ Công việc | **live/VOD** | [Tài liệu](#) |
| **Progress** | Lấy thông tin tiến trình của Tác vụ Công việc | **live/VOD** | [Tài liệu](#) |
| **awt** | Đóng dấu âm thanh | **live/VOD** | [Tài liệu](#) |
| **Pin ID3** | Ghim gói ID3 cho tất cả các phân đoạn | **live/VOD** | [Tài liệu](#) |
| **preload** | Tạo nội dung từ hình ảnh (hoặc video) và nhạc | **live/VOD** | [Tài liệu](#) |
| **Update** | Thay đổi cấu hình cho âm lượng, lớp phủ, drm, tiêu đề của Tác vụ Công việc | **Live** | [Tài liệu](#) |
| **event** | Đẩy sự kiện vào luồng ID3 | **Live** | [Tài liệu](#) |
| **ads** | Hiển thị logo + quảng cáo văn bản chạy (marquee) một cách linh hoạt | **Live** | [Tài liệu](#) |
| **scte35** | Chèn tín hiệu chèn quảng cáo | **Live** | [Tài liệu](#) |
| **Mixer** | Trộn các luồng đầu vào | **Live** | [Tài liệu](#) |
| **Stream** | Phát danh sách video | **Live** | [Tài liệu](#) |
| **Queue** | Nối hàng đợi đầu vào | **Live** | [Tài liệu](#) |
| **decklink** | API cho các thiết bị Decklink | **Live** | [Tài liệu](#) |
| **Subtitle** | Chuyển mã phụ đề | **Vod** | [Tài liệu](#) |
| **Trick** | Chế độ Trick Play | **Vod** | [Tài liệu](#) |
| **Cc** | Phụ đề chi tiết | **Vod** | [Tài liệu](#) |
| **Pte** | Bật dịch vụ PTE | **Vod** | [Tài liệu](#) |
| **join** | Hợp nhất các Video VOD đã ghi | **Vod** | [Tài liệu](#) |
