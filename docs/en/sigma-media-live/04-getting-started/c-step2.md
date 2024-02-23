---
title: "B2: Tạo mới đầu vào"
order: 4
---

# Bước 2: Tạo mới đầu vào

Bạn phải tạo một đầu vào. Đầu vào xác định luồng dữ liệu media mà hệ thống Sigma Transcode Live sử dụng để chuyển mã hoặc đóng gói.

Hệ thống Sigma Streaming Platform hỗ trợ các chuẩn đầu vào sau:

- MPEG-TS over multicast UDP
- RTMP push
- RTMP pull
- RTP
- RTCP
- SRT push
- SRT pull

**Ví dụ về tạo 1 đầu vào UDP multi cast**

1. Đăng nhập vào Sigma Streaming portal và mở Transcode Live

2. Nhấn nút **Add** ở menu **Input** trong mục **Transcode**. Giao diện khởi tạo Input sẽ hiện lên

3. Nhập các thông tin cần thiết
   1. **Tên** của input
   2. **Redundancy** chọn **single**
   3. **Type** chọn **UDP**
   4. **Primary Source** điền thông tin về luồng đã chuẩn bị ở bước 1 [Cài đặt luồng đầu vào](./b-step1.md)
   5. **Primary Interface Network** vui lòng chọn 1 card mạng nhận luồng udp multicast này bỏ qua

![Tạo Input](/images/media-live/um-create-input.png)

_Lưu ý: Nếu không điền thông tin về card mạng thì hệ thống sẽ tự lấy ở card mạng mặc định của máy_

### Chi tiết cấu hình đầu vào

Vui lòng xem tại:

1. [Cấu hình đầu vào cho kênh Transcode](../05-resource-input/01-transcode-input.md)
2. [Cấu hình đầu vào cho kênh Package](../05-resource-input/02-package-input.md)
