---
title: Thêm mới Webhook
order: 2
---

# Thêm mới Webhook

Chức năng “Thêm mới webhook” cho phép người dùng thực hiện thêm mới webhook với cấu hình mong muốn phù hợp với nhu cầu lắng nghe sự kiện của người dùng. Khi cấu hình webhook người dùng có thể thiết lập endpoint webhook để được thông báo về những sự kiện đã cấu hình.



## Tổng quan về chức năng

Webhook giúp hệ thống hoạt động hiệu quả hơn bằng cách tự động hóa luồng dữ liệu giữa các dịch vụ. Việc triển khai webhook đúng cách giúp tối ưu hóa hiệu suất và cải thiện trải nghiệm người dùng.

✅ **Tự động hóa quy trình** – Không cần kiểm tra thủ công, dữ liệu được cập nhật tự động.
✅ **Cập nhật thời gian thực** – Hệ thống có thể phản ứng ngay khi sự kiện xảy ra.
✅ **Giảm tải cho máy chủ** – Không cần polling (kiểm tra liên tục), tiết kiệm tài nguyên.
✅ **Dễ dàng tích hợp với các dịch vụ khác**



## Lưu ý

- Giới hạn mỗi ứng dụng được phép thêm **tối đa** **10 Webhook** 
- Mỗi webhook **tối thiểu** phải được cấu hình lắng nghe **1 sự kiện** cho sản phẩm



## Luồng

Quá trình thêm mới webhook người dùng cần thực hiện:

![Ảnh](/images/streaming-platform/webhook/create-webhook-flow.png)

## Thêm mới Webhook

Để tạo mới một webhook, người dùng cần thực hiện theo các bước sau:

**Bước 1:** Truy cập vào trang `Quản lý App`

Màn hình chính hệ thống hiển thị giao diện thông tin cơ bản của ứng dụng  [Xem chi tiết tại đây](/docs/vi/sigma-streaming-platform/03-app-management/01-general.md)

**Bước 2:** Người dùng lựa chọn tab `Webhook`. Màn hình hiển thị danh sách webhook

**Bước 3:** Nhấp vào nút `Thêm mới` để bắt đầu thêm mới webhook

Màn hình chuyển đến trang Thêm mới webhook

![Ảnh](/images/streaming-platform/webhook/pop-up-add.png)


Người dùng cần phải cung cấp các thông tin sau:

- **Tên:** Tên của webhook (tên của webhook không được trùng nhau)
- **URL:** URL Webhook đại diện cho điểm cuối mà webhook sẽ được gửi tới (URL bắt đầu bằng "http://" hoặc "https://")
- **HTTP Header:** Có thể thêm các cặp Key-value hoặc không. Bấm nút "Thêm" để thêm cặp Key-Value (Tối đa được add **10 cặp Key-value**)
  - ***Key:*** Cho phép người dùng nhập header key
  - ***Value***: Cho phép người dùng nhập header value (nhập số)
- **Sự kiện cần gửi:** Lựa chọn cụ thể các event mong muốn trigger của các product

Các loại sự kiện thuộc mỗi sản phẩm

| Sản phẩm       | **Loại sự kiện**           | **Mô tả**                                                    |
| :------------- | :------------------------- | :----------------------------------------------------------- |
| **Livestream** |                            |                                                              |
| 1              | livestream.session.created | Event khi session được tạo ra                                |
| 2              | livestream.channel.live    | Event khi kênh bắt đầu live                                  |
| 3              | livestream.channel.end     | Event khi kênh kết thúc                                      |
| **DAI**        |                            |                                                              |
| 1              | dai.ads.transcode.complete | Event khi có ads được transcode thành công                   |
| 2              | dai.ads.transcode.failed   | Event khi có ads transcode thất bại                          |
| **Media VOD**  |                            |                                                              |
| 1              | mediaVOD.job.created       | Event khi có job bắt đầu transcode, process created và **queued** |
| 2              | mediaVOD.job.encoding      | Event khi có job đang encoding                               |
| 3              | mediaVOD.job.complete      | Event khi có job hoàn thành transcode, trả về kết quả với process complete và **error** |

- **Automatic Retry:** Bật/tắt chế độ tự động thử lại khi webhook gặp lỗi/ timeout. 

**Bước 4:** Người dùng điền đầy đủ các thông tin bắt buộc và bấm nút **Submit**

Hệ thống hiển thị thông báo thành công "**Tạo webhook thành công**", đồng thời chuyển sang màn hình danh sách webhook với webhook vừa tạo ở đầu danh sách

