---
title: Xem nhật ký sự kiện của Webhook
order: 3
---

# Xem nhật ký sự kiện của Webhook

Chức năng "View Event Logs" cung cấp cho người dùng khả năng xem, tra cứu các nhật ký sự kiện được 1  Webhook cụ thể lắng nghe hoặc toàn bộ sự kiện của tất cả các webhook mà người dùng đã cấu hình.

Nhật ký sự kiện giúp **giám sát**, **kiểm tra lỗi** và **tối ưu hóa** quá trình hoạt động của webhook để đảm bảo dữ liệu được gửi đi và xử lý chính xác.

✅ **Giám sát trạng thái webhook** – Xem webhook nào đã kích hoạt, khi nào và dữ liệu gì được gửi đi.
✅ **Phát hiện và xử lý lỗi** – Nếu có lỗi trong quá trình gửi dữ liệu, người dùng có thể kiểm tra mã phản hồi HTTP để khắc phục.
✅ **Cải thiện hiệu suất** – Xác định nguyên nhân chậm trễ hoặc thất bại của webhook và tối ưu hóa.
✅ **Ghi log lịch sử sự kiện** – Lưu trữ thông tin webhook để phục vụ việc kiểm tra và báo cáo sau này.




> [!NOTE]
> Chỉ cho phép **người dùng có quyền Admin** trong ứng dụng truy cập quản lý Webhook

Để xem nhật ký sự kiện của Webhook, người dùng cần thực hiện theo các bước sau

**Bước 1:** Tại sidebar menu bên tay trái, người dùng di chuyển con trỏ chuột vào `Quản lý App`

Màn hình chính hệ thống hiển thị giao diện thông tin cơ bản của ứng dụng  [Xem chi tiết tại đây](/docs/vi/sigma-streaming-platform/03-app-management/01-general.md)

**Bước 2:** Người dùng di chuyển con trỏ chuột vào **Webhook** và lựa chọn tab `Event log` 

Màn hình chính hệ thống hiển thị giao diện màn hình danh sách tất cả sự kiện với các thông tin chính bao gồm:

![Ảnh](/images/streaming-platform/webhook/view-event-logs.png)

| Tên cột           | Chức năng                                                    |
| ----------------- | ------------------------------------------------------------ |
| **ID**            | Hệ thống sinh ra ID riêng cho mỗi sự kiện với mục đích nhận diện. <br/>Hiển thị dưới dạng nút, cho phép hover để xem ID và bấm vào để sao chép. |
| **Trạng thái**        | Trạng thái trả về của sự kiện, bao gồm:<br/>- **Successful**: trạng thái thành công<br/>- **Failure**: trạng thái lỗi |
| **Tên webhook**  | Tên của webhook                                              |
| **Webhook URL**   | Hiển thị URL Webhook đại diện cho điểm cuối mà webhook sẽ được gửi tới |
| **Loại sự kiện**    | Loại sự kiện của sản phẩm                                    |
| **Thông báo lỗi** | Hiển thị thông tin chi tiết về trạng thái lỗi                |
| **Số lần thử lại**  | Số lần mà webhook thực hiện thử lại                          |
| **Thời gian gửi**       | Thời gian hệ thống trả về event                              |

Các nút khác

| Tên nút          | Chức năng                                                    |
| ---------------- | ------------------------------------------------------------ |
| **Bộ lọc**       | Bộ lọc nhanh hỗ trợ tìm kiếm thông tin gồm: ***ID, Status, Webhook Name, Event Type, Time Range*** |
| **Phân trang**   | Góc trái bên dưới giao diện<br/>Bao gồm các thông tin: Tổng số trang, lựa chọn số items/1 trang (mặc định 10 items/1 trang), trang hiện tại, nhảy tới trang mong muốn tìm kiếm. |
| **Icon đồng bộ** | Góc phải bên dưới giao diện, thực hiện thiết lập đồng bộ cho hệ thống:<br/>- Các thiết lập để hệ thống tự động đồng bộ (***mặc định:*** tắt tự động)<br/>- Chủ động đồng bộ cho hệ thống (bằng cách nhấn vào biểu tượng)<br/>- Thời gian hệ thống đồng bộ gần nhất |

