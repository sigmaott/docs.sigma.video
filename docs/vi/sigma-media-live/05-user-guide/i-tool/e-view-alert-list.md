---
title: Xem danh sách cảnh báo
order: 2
---

# Xem danh sách cảnh báo

Giao diện danh sách cảnh báo  là một phần quan trọng trong việc quản lý về các sự cố (về sóng, phần cứng, đầu ra) khi kênh gặp sự cố. Giao diện trong danh sách bao gồm các thông tin cơ bản về cảnh báo như thời gian bắt đầu, mức độ cảnh báo, loại cảnh báo,... và cho phép tìm kiếm nhanh, giúp người quản trị viên quản lý các sự cố và khắc phục kịp thời.

Trên màn hình chính của Media Live, người dùng lựa chọn **Alerts** ở tab header.

Màn hình chính hệ thống hiển thị giao diện màn hình danh sách cảnh báo.

![Xem danh sách cảnh báo](/images/media-live/event-channel/view-alerts-list1.png)

Các thông tin chính bao gồm:

| Tên cột         | Chức năng                                                    |
| --------------- | ------------------------------------------------------------ |
| **Start**       | Thời gian cảnh báo xuất hiện                                 |
| **End**         | Thời gian cảnh báo đã được giải quyết                        |
| **Level**       | Các mức độ nghiêm trọng của một sự cố (cảnh báo) <br />Có 3 mức độ:<br />- **Critical (Quan trọng)**: Mức độ nghiêm trọng cao nhất, cần xử lý ngay lập tức để khắc phục vấn đề và khôi phục tính ổn định. <br />- **Major (Chính)**: Mức độ nghiêm trọng ở mức độ thấp hơn so với Critical, nhưng vẫn đòi hỏi sự can thiệp ngay lập tức để ngăn chặn tác động tiêu cực đối với hoạt động hệ thống.<br />- **Warning (Cảnh báo)**:  mức độ nghiêm trọng thấp nhất, cảnh báo thường chỉ ra rằng có một vấn đề nhỏ hoặc một tình trạng có thể dẫn đến sự cố nếu không được giải quyết. |
| **Type**        | Lỗi được cảnh báo                                            |
| **Description** | Mô tả thông tin chi tiết về cảnh báo                         |
| **Machine**     | Máy đang gặp sự cố                                           |
| **Channel**     | Kênh đang gặp sự cố                                          |
| **Job**         | Trạng thái xử lý của cảnh báo<br />- **Active (hoạt động):** Sự cố chưa được khắc phục<br />- **Resolved (đã giải quyết):** sự cố đã được giải quyết |

- Các nút khác

| Tên nút             | Chức năng                                                    |
| ------------------- | ------------------------------------------------------------ |
| **Icon đồng bộ**    | Góc phải bên dưới giao diện, luôn thực hiện đồng bộ hệ thống liên tục trong 10s |
| Icon **Phân trang** | Bao gồm các thông tin: Tổng số trang, lựa chọn số items/1 trang (mặc định 10 items/1 trang), trang hiện tại, nhảy tới trang mong muốn tìm kiếm. |
| **Quick filter**    | Bộ lọc nhanh hỗ trợ tìm kiếm thông tin: Mức độ cảnh báo      |
| Nút **Lọc***        | Thực hiện lọc các thông tin chi tiết hơn.                    |