---
title: Tạo mới kênh LRM
order: 2
---
# Tạo mới kênh LRM

Quá trình cập nhật và đồng bộ thông tin lịch phát sóng giữa các nguồn dữ liệu khác nhau, đảm bảo thông tin về lịch phát sóng của các kênh truyền hình hoặc đài phát thanh trực tuyến là chính xác và đúng lịch trình.  

Sau khi chuẩn bị sẵn nguồn, mã chương trình, khoá API sử dụng để cấu hình kênh riêng của mình. Bạn có thể tạo mới kênh theo hướng dẫn sau:

## Bước 1: Tạo kênh
 
Tại giao diện màn hình chính Danh sách kênh, người dùng click vào nút **Thêm kênh**

Hệ thống hiển thị **Pop-up thêm kênh mới** giữa giao diện:

![](/images/lrm/pop-up/create-channel.png)
 
 Các thông tin hiển thị:

 | Tên trường       | Mô tả                                                        | Bắt buộc | Kiểu dữ liệu     | Placeholder                                 | Rule                                                         |
| ---------------- | ------------------------------------------------------------ | -------- | ------------- | ------------------------------------------- | ------------------------------------------------------------ |
| Tên              | Tên kênh để chứa các chương trình sự kiện, mục đích phân biệt. | Có       | Textbox       | Vui lòng nhập tên kênh                      | Cho phép nhập các ký tự hợp lệ: A-Z, a-z, 0-9 và ”-”, “_”    |
| Mô tả            | Phần mô tả hiển thị với người dùng CMS, không hiển thị tới người xem với mục đích nhận biết. Vui lòng nhập mô tả dễ hiểu, ngắn gọn nội dung chính của kênh và dễ dàng tìm kiếm. | Không    | Textbox       | Vui lòng nhập mô tả kênh                    | Hỗ trợ tất cả ngôn ngữ, ký tự, số, dấu cách, khoảng trắng và tất cả ký tự đặc biệt. |
| Kênh media live  | Là danh sách kênh media live đang có trong hệ thống, danh sách thay đổi theo thời gian thực. | Có       | Select        | Chọn tối thiểu 1 kênh media live            | Cho phép chọn tất cả kênh trong hệ thống                     |
| Múi giờ          | Theo tiêu chuẩn múi giờ UTC.                                 | Có       | Single select | Mặc định: múi giờ theo tài khoản người dùng | Theo tiêu chuẩn quy định.                                    |
| Đồng bộ hoá kênh | Cấu hình đồng bộ kênh                                        | Không    | Switch        | Mặc định: Bật                               | **Enable**: hiển thị các group bên dưới tương ứng <br />**Disable:** disable các button và thông tin liên quan sau khi tạo kênh. |

### Bật cấu hình đồng bộ kênh
 
Việc duy trì lịch phát sóng đồng bộ là rất quan trọng để cung cấp trải nghiệm xem tốt nhất cho người xem. Chúng tôi khuyên bạn bật cấu hình đồng bộ kênh để có thể chủ động đồng bộ khi cần.
Xem hướng dẫn [chủ động đồng bộ](../b-detail-channel/2-epg/2.7-manual-sync.md)

Bật cấu hình đồng bộ, hiển thị các trường:

| Tên trường      | Mô tả                                       | Bắt buộc | Kiểu dữ liệu | Placeholder                 | Rule                                                         |
| --------------- | ------------------------------------------- | -------- | ------------ | --------------------------- | ------------------------------------------------------------ |
| Nguồn           | Nguồn dữ liệu để lấy lịch phát sóng         | Có       | Textbox      | Mặc định: VTV               | Không cho phép sửa                                           |
| Endpoint        | Địa chỉ nguồn dữ liệu để lấy lịch phát sóng | Không    | Textbox      | http://example-endpoint.com | Hỗ trợ hỗ trợ ký tự đặc biệt, có dấu,…<br />Bắt buộc đúng format |
| ID chương trình | ID chương trình để lấy lịch phát sóng       | Có       | Textbox      | Vui lòng nhập ID cấu hình   | N/A<br />( Do bên vtv cung cấp)                              |
| Khoá API        | Token để truy cập              | Có       | Textbox      | Vui lòng nhập khoá API      | N/A<br />( Do bên vtv cung cấp)                              |

### Bật cấu hình tự động đồng bộ

Việc chủ động đồng bộ có thể làm mất thời gian của người dùng. Vì vậy, chúng tôi khuyên bạn bật cấu hình khung giờ tự động đồng bộ để tối ưu thời gian của bạn.

Bật tự động đồng bộ, hiển thị các trường:
| Tên trường                 | Mô tả                                                        | Bắt buộc | Kiểu dữ liệu | Placeholder    | Rule                                                         |
| -------------------------- | ------------------------------------------------------------ | -------- | ------------ | -------------- | ------------------------------------------------------------ |
| Thời gian được đồng bộ hóa | Các mốc thời gian tự động đồng bộ trong ngày để lấy lịch phát sóng. | Có       | Select       | Chọn thời gian | Giới hạn tối đa 10 mốc thời gian.                            |
| **Số ngày đồng bộ**        | Là số ngày hệ thống sẽ tiến hành quá trình đồng bộ lịch phát sóng tính từ thời điểm tự động đồng bộ. | Không    | Textbox      | Mặc định: 3    | Nhập số nguyên<br />Giá trị nhỏ nhất=1( chỉ ngày thực hiện đồng bộ) và lớn nhất =14 |

### Các button

- **Nút "Huỷ"**: Không thực hiện tạo mới, trở lại giao diện màn hình chính.

- **Nút "lưu"**: Lưu thông tin tạo mới, trở về giao diện màn hình chính.


## Bước 2: Lưu cấu hình
 Người dùng nhập các thông tin hợp lệ.

Nhấp vào nút **Xác nhận** ở cuối Pop-up.

Hệ thống thực hiện tạo mới kênh với các thông tin vừa được nhập, hiển thị Pop-up thông báo **Tạo mới thành công** ở phía trên giao diện.

- Kênh bật cấu hình đồng bộ.

- Hiển thị đầy đủ các thông tin liên quan ở chi tiết kênh.

- Cho phép thực hiện các thao tác chủ động đồng bộ.

## Bước 3: Tự động đồng bộ

**Điều kiện**: Kênh đã được bật tự động đồng bộ và đến mốc thời gian được cấu hình tự động đồng bộ.

1. Hệ thống tự động đồng bộ lịch phát sóng.
2. Sau khi đồng bộ
  - Hiển thị các lịch phát sóng mới trên dòng thời gian và danh sách chương trình
  - Thay đổi thông tin lần đồng bộ gần nhất và lần đồng bộ tiếp theo( nếu có).
