---
title: Quản lý Webhook
order: 1
---

# Webhook

Webhook là một cơ chế giúp các ứng dụng giao tiếp với nhau theo thời gian thực thông qua HTTP callback. Thay vì phải liên tục gửi yêu cầu để kiểm tra dữ liệu mới, webhook cho phép hệ thống tự động gửi thông báo khi có sự kiện xảy ra. Điều này giúp giảm tải tài nguyên máy chủ và cải thiện hiệu suất.



## Xem danh sách quản lý Webhook

Danh sách quản lý Webhook là  giao diện giúp bạn theo dõi, quản lý và kiểm soát tất cả các webhook đang hoạt động trong hệ thống của mình. Nó cung cấp cái nhìn tổng quan về các webhook đã được đăng ký, trạng thái hoạt động, lịch sử gửi dữ liệu và cho phép thực hiện các thao tác như chỉnh sửa, tắt/bật hoặc xóa webhook.

Nếu hệ thống của bạn sử dụng nhiều webhook để tích hợp với các nền tảng khác nhau, việc có một danh sách quản lý giúp dễ dàng kiểm soát và duy trì sự ổn định trong quá trình trao đổi dữ liệu.


> [!NOTE]
> Chỉ cho phép **người dùng có quyền Admin** trong ứng dụng truy cập quản lý Webhook

**Bước 1:** Tại sidebar menu bên tay trái, người dùng di chuyển con trỏ chuột vào `Quản lý App`

Màn hình chính hệ thống hiển thị giao diện thông tin cơ bản của ứng dụng  [Xem chi tiết tại đây](/docs/vi/sigma-streaming-platform/03-app-management/01-general.md)

**Bước 2:** Người dùng lựa chọn tab `Webhook`

Màn hình chính hệ thống hiển thị giao diện màn hình danh sách webhook với các thông tin chính bao gồm:

![màn hình danh sách webhook](/images/streaming-platform/webhook/webhook-list.png)

| Tên cột            | Chức năng                                                    |
| ------------------ | ------------------------------------------------------------ |
| **ID**             | Sau khi người dùng thêm mới webhook, hệ thống sinh ra ID riêng cho mỗi webhook với mục đích nhận diện. <br/>Hiển thị dưới dạng nút, cho phép hover để xem ID và bấm vào để sao chép. |
| **Tên**           | Tên của webhook                                              |
| **Trạng thái**         | Trạng thái của webhook, bao gồm: <br/>- **Enable:** Webhook sẽ ở trạng thái này ngay sau khi bấm nút `Thêm mới webhook`. Ở trạng thái này, webhook sẽ lắng nghe sự kiện và sẽ gửi thông báo khi có sự kiện xảy ra.<br/>- **Disable:** Ở trạng thái này, webhook sẽ dừng hoạt động. |
| **URL**            | Hiển thị URL Webhook đại diện cho điểm cuối mà webhook sẽ được gửi tới |
| **Sự kiện cần gửi** | Cho phép người dùng bấm và mở hiển thị những sự kiện được chọn để lắng nghe của từng Product |
| **Thời gian tạo**     | Thời gian khởi tạo webhook                                   |
| **Thời gian chỉnh sửa**     | Thời gian chỉnh sửa thông tin của webhook                    |
| **Hành động**         | Các action tác động lên từng Webhook, bao gồm:<br/>- **Chỉnh sửa webhook**: cho phép người dùng thực hiện thay đổi cấu hình cho Webhook đã thêm thành công [Xem chi tiết tại đây](#chỉnh-sửa-webhook)<br/>- **Kiểm thử webhook:** cho phép người dùng thực hiện kiểm tra webhook có đang hoạt động bình thường không [Xem chi tiết tại đây](#kiểm-thử-webhook)<br/>- **Bật webhook**: cho phép người dùng thực hiện bật webhook để hoạt động [Xem chi tiết tại đây](#bật-webhook)<br/>- **Tắt webhook**: cho phép người dùng thực hiện tắt webhook để tạm dừng hoạt động [Xem chi tiết tại đây](#tắt-webhook)<br/>- **Xóa webhook:** cho phép người dùng thực hiện xóa webhook khi không còn nhu cầu sử dụng [Xem chi tiết tại đây](#xóa-webhook)<br/>- **Xem nhật ký sự kiện**: cho phép người dùng xem, tra cứu các nhật ký sự kiện được một webhook cụ thể lắng nghe hoặc toàn bộ sự kiện của tất cả các webhook mà người dùng đã cấu hình.[Xem chi tiết tại đây](#xem-nhật-ký-sự-kiện) |

Các nút khác

| Tên nút                | Chức năng                                                    |
| ---------------------- | ------------------------------------------------------------ |
| Nút **"Thêm webhook"** | Thực hiện tạo mới webhook [Xem chi tiết tại đây](/docs/vi/sigma-streaming-platform/07-webhook/b-add-webhook.md)           |
| **Phân trang**         | Góc trái bên dưới giao diện<br/>Bao gồm các thông tin: Tổng số trang, lựa chọn số items/1 trang (mặc định 10 items/1 trang), trang hiện tại, nhảy tới trang mong muốn tìm kiếm. |
| **Icon đồng bộ**       | Góc phải bên dưới giao diện, thực hiện thiết lập đồng bộ cho hệ thống:<br/>- Các thiết lập để hệ thống tự động đồng bộ (***mặc định:*** tắt tự động)<br/>- Chủ động đồng bộ cho hệ thống (bằng cách nhấn vào biểu tượng)<br/>- Thời gian hệ thống đồng bộ gần nhất |



## Các hành động



### Thêm mới webhook

Thêm mới Webhook là quá trình thiết lập một webhook trong hệ thống để lắng nghe các sự kiện. Khi một sự kiện xảy ra, dữ liệu sẽ được tự động gửi đến URL webhook đã đăng ký.

Quá trình này giúp các hệ thống có thể **giao tiếp theo thời gian thực**, tự động cập nhật dữ liệu mà không cần kiểm tra liên tục.

[Xem chi tiết tại đây](/docs/vi/sigma-streaming-platform/07-webhook/b-add-webhook.md)



### Chỉnh sửa webhook

> [!NOTE]
> Để thực hiện quá trình này, cần phải có ít nhất một webhook đã được tạo ra trước đó và hiển thị tại danh sách webhook

**Bước 1:** Tại màn hình danh sách webhook, người dùng di chuyển con trỏ chuột vào biểu tượng 3 chấm và bấm vào ***Chỉnh sửa*** ở cột Hành động đối với webhook cần chỉnh sửa

![Ảnh](/images/streaming-platform/webhook/edit-icon.png)

Hệ thống sẽ mở pop-up **Chỉnh sửa webhook** với các thông tin đã được nhập trước đó, **cho phép chỉnh sửa tất cả các trường**

![Ảnh](/images/streaming-platform/webhook/edit-webhook.png)

**Bước 2**: Người dùng thực hiện chỉnh sửa thông tin và sau đó nhấn nút `Cập nhật webhook`

Hệ thống sẽ lưu lại thông tin mới và hiển thị thông báo **Đã cập nhật webhook thành công** ở giữa màn hình, sau đó tự động đóng trong vòng 5 giây.




### Bật webhook

> [!NOTE]
> Để thực hiện quá trình này, cần phải có ít nhất một webhook đã được tạo ra trước đó và hiển thị tại danh sách webhook
>
> Trạng thái của webhook là **Disable** (không hoạt động)

**Bước 1** : Tại màn hình danh sách webhook, người dùng di chuyển con trỏ chuột vào biểu tượng 3 chấm và bấm vào ***Bật webhook*** ở cột Hành động đối với webhook cần chỉnh sửa

![Ảnh](/images/streaming-platform/webhook/enable-icon.png)

Hệ thống sẽ hiển thị một cửa sổ pop-up xác nhận ở trung tâm màn hình

**Bước 2** : Người dùng nhấn nút **Xác nhận** để tiếp tục theo dõi thư mục

Hệ thống hiển thị một cửa sổ pop-up thông báo **Đã bật webhook thành công!** ở góc phải màn hình và tự động đóng thông báo sau 5 giây.

Đồng thời, hệ thống thực hiện việc tiếp tục theo dõi thư mục, **webhook chuyển về trạng thái hoạt động**



### Tắt webhook

> [!NOTE]
> Để thực hiện quá trình này, cần phải có ít nhất một webhook đã được tạo ra trước đó và hiển thị tại danh sách webhook
>
> Trạng thái của webhook là **Enable** (hoạt động)

**Bước 1** : Tại màn hình danh sách webhook, người dùng di chuyển con trỏ chuột vào biểu tượng 3 chấm và bấm vào ***Tắt webhook*** ở cột Hành động đối với webhook cần chỉnh sửa

![Ảnh](/images/streaming-platform/webhook/disable-icon.png)

Hệ thống sẽ hiển thị một cửa sổ pop-up xác nhận ở trung tâm màn hình

**Bước 2** : Người dùng nhấn nút **Xác nhận** để tiếp tục theo dõi thư mục

Hệ thống hiển thị một cửa sổ pop-up thông báo **Đã tắt webhook thành công!** ở góc phải màn hình và tự động đóng thông báo sau 5 giây.

Đồng thời, hệ thống thực hiện việc tiếp tục theo dõi thư mục, **webhook chuyển về trạng thái không hoạt động**



### Kiểm thử webhook

> [!NOTE]
> Để thực hiện quá trình này, cần phải có ít nhất một webhook đã được tạo ra trước đó và hiển thị tại danh sách webhook
>
> Trạng thái của webhook là **Enable** (hoạt động)

**Bước 1** : Tại màn hình danh sách webhook, người dùng di chuyển con trỏ chuột vào biểu tượng 3 chấm và bấm vào ***Kiểm thử webhook*** ở cột Hành động đối với webhook cần kiểm thử.

![Ảnh](/images/streaming-platform/webhook/test-icon.png)

Hệ thống sẽ hiển thị một cửa sổ pop-up **Kiểm tra URL Webhook của bạn**

![Ảnh](/images/streaming-platform/webhook/test-webhook.png)

**Bước 2** : Người dùng lựa chọn **Sự kiện** của sản phẩm muốn kiểm thử, và bấm vào nút `Kiểm thử webhook` 

Hệ thống ghi nhận thông tin và thực hiện kiểm thử đối với sự kiện mà người dùng đã lựa chọn. Sau đó hiển thị trả về kết quả gồm trạng thái và request sent 

![Ảnh](/images/streaming-platform/webhook/test-result.png)


> [!IMPORTANT]
> Khi thực hiện kiểm thử, nếu có sự kiện xảy ra thì sự kiện đó vẫn được ghi nhận trong nhật ký sự kiện nếu trạng thái phản hồi 2XX
>
> Trường hợp kiểm thử trả về trạng thái ngoài 2xx, webhook sẽ tự động thực hiện lại



### Xóa webhook

> [!NOTE]
> Để thực hiện quá trình này, cần phải có ít nhất một webhook đã được tạo ra trước đó và hiển thị tại danh sách webhook

**Bước 1** : Tại màn hình danh sách webhook, người dùng di chuyển con trỏ chuột vào biểu tượng 3 chấm và bấm vào ***Xóa*** ở cột Hành động đối với webhook cần xóa.

![Ảnh](/images/streaming-platform/webhook/delete-icon.png)

Hệ thống sẽ hiển thị một cửa sổ pop-up xác nhận ở trung tâm màn hình

**Bước 2** : Người dùng nhấn nút **Xác nhận** để xoá thông tin quy tắc thư mục

Hệ thống hiển thị một cửa sổ pop-up thông báo **Đã xoá thành công!** ở góc phải màn hình và tự động đóng thông báo sau 5 giây.

Đồng thời, hệ thống thực hiện **Xóa toàn bộ thông tin của webhook**, không còn hiển thị thông tin tại danh sách.



### Xem nhật ký sự kiện

**Event Log (Nhật ký sự kiện)** của Webhook là một bảng ghi lại chi tiết tất cả các sự kiện đã kích hoạt webhook. Nhật ký sự kiện giúp theo dõi, kiểm tra và xử lý lỗi khi cần thiết, đảm bảo hệ thống webhook hoạt động trơn tru.

Mục đích của **Nhật ký sự kiện** trong Webhook

- Giám sát hoạt động Webhook – Xem webhook nào đã được gọi, khi nào và dữ liệu gì được gửi.
- Phát hiện lỗi nhanh chóng – Nếu webhook không hoạt động, Nhật ký sự kiện giúp xác định nguyên nhân (lỗi HTTP, server down, sai cấu trúc dữ liệu, v.v.).
- Đảm bảo tính toàn vẹn của dữ liệu – Kiểm tra xem tất cả sự kiện quan trọng có được gửi và nhận đúng cách không.
- Hỗ trợ debugging – Khi phát triển và thử nghiệm webhook, Nhật ký sự kiện giúp xác nhận xem dữ liệu có đúng định dạng và đến đúng địa chỉ hay không.



Tại màn hình danh sách webhook, người dùng di chuyển con trỏ chuột vào biểu tượng 3 chấm và bấm vào ***Xem nhật ký sự kiện*** ở cột Hành động đối với webhook cần xem.

[Ảnh]

Hệ thống sẽ chuyển sang màn hình danh sách Nhật ký sự kiện tương ứng với webhook đã chọn 

[Xem chi tiết tại đây](/docs/vi/sigma-streaming-platform/07-webhook/c-event-logs.md)

