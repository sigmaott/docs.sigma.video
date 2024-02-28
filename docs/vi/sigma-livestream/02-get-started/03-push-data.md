---
title: 'Đẩy luồng dữ liệu'
order: 3
---

## Đẩy luồng dữ liệu

Người dùng không sử dụng hệ thống Sigma Livestream để đẩy dữ liệu đầu vào, họ có thể sử dụng bên thứ ba để thực hiện. Dưới đây là hướng dẫn cách tạo session bằng phần mềm OBS Studio:
**Bước 1:** Cài đặt phần mềm OBS Studio vào thiết bị PC/laptop (Nếu chưa được cài đặt).

**Bước 2:** Truy cập vào menu chọn file| Setting| Stream, thiết lập các thông tin sau:
- **Service**: chọn  Custom
- **Server**: là link Stream URL được lấy từ giao diện chi tiết kênh.
- **Stream Key**: là Stream token được lấy từ giao diện chi tiết kênh.

Sau đó, nhấn nút `Apply` và `OK` để lưu cài đặt.

**Bước 3:** Bấm vào menu Start Streaming để bắt đầu phiên livestream.

Việc này cho phép người dùng sử dụng OBS Studio truyền dữ liệu đầu vào mà vẫn sử dụng cơ sở hạ tầng của họ, hệ thống nhận được thông tin có luồng đầu vào được đẩy vào kênh. Thực hiện tạo session gán vào kênh với trạng thái `init`.

→ Kênh chuyển trạng thái kênh từ `IDLE` sang `Active`, hiển thị tên session liên kết tại chi tiết kênh.

Xem và quản lý session một cách thuận tiện tại danh sách session.