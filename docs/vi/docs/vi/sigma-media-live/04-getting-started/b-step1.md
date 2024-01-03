---
title: 'B1: Cài đặt luồng tín hiệu'
order: 3
---

## Cách thức truy cập

1. Kết nối đến hệ thống giao diện biện tập của Sigma Media Live
2. Trên **Sidebar Menu** chọn **Media live** rồi chọn ** Transcode Channel**. Giao diện danh sách kênh sẽ mở ra
3. Nhấn **Add** để mở giao diện tạo kênh mới. Trong giao diện tuỳ chọn tạo kênh vui lòng chọn **manual** => **package** để vào màn hình tạo kênh đóng gói
4. Tại màn hình cấu hình kênh đóng gói. Cấu hình đầu vào (**Input**) mong muốn đóng gói. Bạn có thêm 1 hoặc nhiều **Input** mong muốn
5. Chọn đầu ra (**Target**) muốn đóng gói và cấu hình các tham số cơ bản
6. Tạo kênh và chạy kênh mong muốn

## Bước 1: Cài đặt luồng tín hiệu

Hệ thống **tín hiệu đầu vào** là hệ thống truyền tải các nội dung đa phương tiện tới Sigma Machine (Máy xử lý nội dung). Bạn phải thực hiện một số thiết lập hệ thống tín hiệu đầu vào của mình trước khi bắt đầu làm việc với **Sigma Media Live**.

Có 2 phương thức truyền tín hiệu đầu vào là :

* Phương thức đẩy
* Phương thức kéo

Trong hướng dẫn này sẽ ví dụ việc thiết lập tín hiệu đầu vào đối với dạng tín hiệu là **MPEG-TS** truyền qua giao thức **multicast UDP**.

Với giao thức lấy tín hiệu từ multicast UDP, cần sẵn sàng luồng tín hiệu có thể kéo được từ máy đóng gói (Sigma Packager) đã được chuẩn bị sẵn cho tín hiệu này qua một card mạng đã được định sẵn.

Ghi lại các địa chỉ IP của luồng UDP và card mạng chứa tín hiệu đó để có thể thiết lập ở bước tiếp theo.
