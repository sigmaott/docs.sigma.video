---
title: Tạo kênh Livestream
order: 1
---

# Tạo mới kênh livestream
Cho phép người dùng tạo kênh live stream chuyên nghiệp từ các video đã biên tập sẵn. Bằng cách hỗ trợ livestream từ nhiều nguồn video khác nhau và phát trực tiếp trên nhiều nền tảng cùng một lúc, người dùng có thể mở rộng đối tượng khán giả trên các trang thương mại điện tử một cách dễ dàng và hiệu quả.

Sau khi cấu hình ứng dụng, chuẩn bị đầu vào. Bạn có thể tạo mới kênh theo hướng dẫn sau:

### Bước 1
Tại giao diện màn hình chính Danh sách kênh, người dùng click vào nút **Thêm kênh**
Hệ thống hiển thị **Pop-up thêm kênh mới** giữa giao diện:

<!-- ![]() -->
 
Các thông tin hiển thị:

| Tên trường        | Mô tả                                                        | Bắt buộc | Giá trị                                            | Mặc định                 |
| ----------------- | ------------------------------------------------------------ | -------- | -------------------------------------------------- | ------------------------ |
| Tên               | Tên kênh của bạn                                             | Có       | Textbox                                            | placeholder "Nhập tên"   |
| Mô tả             | Mục đích đánh dấu, không hiển thị lên video đầu ra, mô tả ngắn gọn nội dung chính của kênh. | Không    | Textbox                                            | placeholder "Nhập mô tả" |
| Tag               | Một thẻ được sử dụng để đánh dấu, liên quan đến nhau để giúp người đọc dễ dàng tìm kiếm và theo dõi nội dung. | Không    | Tag                                                | Thẻ mới                  |
| Kiểu              | Các loại chuyển mã.                                          | Có       | Transcode/ Forward/  Hybrid                          | Transcode                |
| Cách thức         | Khoảng cách thời gian khi một khung hình video được ghi lại và hiển thị để phát lại. | Có       | Normal/  Low-latency/  Ultra-low-latency             | Normal                   |
| Định dạng đầu ra  | Một giao thức để streaming video trên toàn internet, người dùng có thể lựa chọn đuôi link. | Có       | DASH HLS                                           | HLS                      |
| Lựa chọn          | Các tính năng khác hỗ trợ thêm cho người dùng.               | Không    | Interaction/  Catchup/ Record                        | tắt cả 3 option      |
| Transcode profile | Chất lượng hiển thị video tới người xem. Trường hợp  chọn **type forward → không hiển thị Transcode profile** | Có       | **select all** 360p 480p 720p 1080p 1440p          | 480p 720p                |
| Stop Timeout      | Thời gian tối đa cho 1 session.                              | Có       | Textbox                                            | 30                       |
| Cấu hình máy chủ  | Máy chủ thiết lập cho kênh, người dùng không cấu hình, hệ thống mặc định sử dụng máy chủ ở cấu hình ứng dụng. | Không    | Hiển thị thêm loại máy và máy chủ khi bật cấu hình | Tắt                      |

- **Nút "Huỷ"**: Không thực hiện tạo mới, trở lại giao diện màn hình chính.

- **Nút "lưu"**: Lưu thông tin tạo mới, trở về giao diện màn hình chính.

### Bước 2
Người dùng nhập các thông tin hợp lệ.

Nhấp vào nút **Lưu** ở cuối Pop-up.

Hệ thống thực hiện tạo mới kênh với các thông tin vừa được nhập, mở giao diện chi tiết kênh và hiển thị Pop-up thông báo **Tạo mới thành công** ở phía trên giao diện. Đồng thời, kện vừa được tạo hiển thị lên đầu trang.