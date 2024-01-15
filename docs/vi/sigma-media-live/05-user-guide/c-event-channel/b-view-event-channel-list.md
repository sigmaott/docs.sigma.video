---
title: Xem danh sách kênh sự kiện
order: 2

---

# Xem danh sách kênh sự kiện

Giao diện danh sách sự kiện là một phần quan trọng trong việc thiết lập kênh Transcode dưới dạng sự kiện (lịch trình, phát sóng từ nguồn trực tiếp hoặc từ VOD). Giao diện trong danh sách bao gồm các thông tin cơ bản về kênh như ID, tên, trạng thái, tình trạng,... và cho phép tìm kếm, giúp người quản trị viên có cái nhìn tổng quan.

Trên màn hình chính của hệ thống, người dùng di chuyển con trỏ chuột vào **Channel** và chọn tab ***Event Channel***

Màn hình chính hệ thống hiển thị giao diện màn hình danh sách kênh sự kiện, với các thông tin chính bao gồm:

![Danh sách kênh sự kiện](/images/media-live/event-channel/event-list.png)

| Tên cột                | Chức năng                                                    |
| ---------------------- | ------------------------------------------------------------ |
| **1. ID**              | Sau khi người dùng tạo mới kênh, hệ thống sinh ra ID riêng cho mỗi kênh với mục đích nhận diện. |
| **2. Tên**             | Tên của kênh sự kiện                                         |
| **3. Trạng thái**      | Trạng thái của kênh, bao gồm: ***Live, Stop, Done, Error***  |
| **4. Tình trạng**      | Tình trạng tức thời của kênh, bao gồm: ***Schedule, Pre, Main, Post, Finished*** |
| **5. Thẻ**             | Các thẻ được gán với kênh                                    |
| **6. Jobs**            | Thông tin chi tiết của jobs                                  |
| *6.1. JobID*           | Sau khi người dùng tạo mới job, hệ thống sinh ra ID riêng cho mỗi job với mục đích nhận diện. |
| *6.2. Loại job*        | Loại job của kênh bao gồm: Transcode, Package                |
| *6.3. Trạng thái job*  | Trạng thái của job                                           |
| *6.4. Loại đầu ra*     | Loại đầu ra của job                                          |
| *6.5. Tên đầu ra*      | Tên của đầu ra                                               |
| *6.6. Tin nhắn*        | Tin nhắn thông báo của job                                   |
| *6.7. Đầu vào*         | Đầu vào của job                                              |
| *6.8. Đầu ra*          | Đầu vào của job                                              |
| *6.9. Tên máy*         | Tên máy được gán                                             |
| *6.10. Tốc độ*         | Tốc độ truyền                                                |
| *6.11. Xem trước*      | Cho phép thực hiện xem trước đối với loại job là Package và loại đầu ra là HLS hoặc DASH |
| **Thời gian tạo**      | Thời gian thêm thành công kênh                               |
| **Thời gian cập nhật** | Thời gian cập nhật gần nhất của kênh (được sắp xếp mặc định hiển thị lên đầu trang với đầu vào được cập nhật mới nhất) |
| **Hành động**          | ***Tạo bản sao:*** Tạo nhanh 1 bản sao với thông tin bắt buộc được cấu hình sẵn.<br/>***Chỉnh sửa:*** Cho phép người dùng chỉnh sửa các thông tin của kênh đã tạo <br/>***Xoá:*** Cho phép người dùng CMS thực hiện xoá kênh<br/>***Bắt đầu***: cho phép chuyển trạng thái kênh từ **Stop** sang **Live**<br/>Dừng lại: cho phép chuyển trạng thái kênh từ **Live** sang **Stop**<br/>Khởi động lại: cho phép chuyển trạng thái kênh từ **Start/Stop/Error** sang **Live**<br/>Tải xuống MP4: Cho phép tải dữ liệu kênh dưới dạng MP4 |

- Các nút khác

| Tên nút             | Chức năng                                                    |
| ------------------- | ------------------------------------------------------------ |
| **Icon đồng bộ**    | Góc phải bên dưới giao diện, luôn thực hiện đồng bộ hệ thống liên tục trong 10s |
| Icon **Phân trang** | Bao gồm các thông tin: Tổng số trang, lựa chọn số items/1 trang (mặc định 10 items/1 trang), trang hiện tại, nhảy tới trang mong muốn tìm kiếm. |
| **Quick filter**    | Bộ lọc nhanh hỗ trợ tìm kiếm thông tin gồm: Trạng thái và Tên (kênh) |
| Nút **Lọc**         | Thực hiện lọc các thông tin chi tiết hơn.                    |