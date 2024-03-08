---
title: Tạo cơ chế theo dõi thư mục
order: 1
---

# Tạo cơ chế theo dõi thư mục (watch folder rule)

Chức năng này cho phép người dùng tạo những điều kiện để theo dõi thư mục. Bất kì tập tin nào được tải lên đúng với những điều kiện được mô tả của thư mục này sẽ tự động kích hoạt quy trình chuyển mã

Mỗi máy chỉ được tạo tối đa 10 cơ chế theo dõi thư mục

Để tạo một cơ chế theo dõi thư mục, ta thực hiện các bước sau:

## **Bước 1:** Truy cập sản phẩm Media VOD

Truy cập sản phẩm Media VOD, người dùng lựa chọn **Watch folder** trên thanh tab menu

Hệ thống hiển thị giao diện màn hình **Danh sách quy tắc thư mục** hiện có

## **Bước 2:** Điền thông tin chung của watch folder rule

Tại giao diện màn hình danh sách quy tắc thư mục, người dùng bấm nút **"Thêm"**

Hệ thống hiển thị cửa sổ pop-up Tạo mới watch folder rule, với các thông tin sau:

- **Tên**: Tên của quy tắc thư mục (bắt buộc điền)
- Nút **"Hủy bỏ"**: khi người dùng bấm nút này, hệ thống sẽ quay trở lại màn hình Danh sách quy tắc thư mục

- Nút **"Xác nhận"**: khi người dùng bấm nút này, hệ thống sẽ hiển thị màn hình Tạo mới watch folder rule

Người dùng thực hiện điền thông tin bắt buộc tại pop-up, sau đó nhấn vào nút **"Xác nhận"** tại cuối cửa sổ pop-up

Hệ thống hiển thị màn hình Tạo mới watch folder rule với bước lựa chọn đầu vào 

## **Bước 3:** Lựa chọn máy và thư mục

Người dùng nhấn vào lựa chọn đầu vào, hệ thống hiển thị cửa sổ pop-up, với thông tin sau:

- **Máy:** lựa chọn máy để thực hiện chọn tập tin
- **Thư mục:** Sau khi lựa chọn máy, hệ thống hiển thị các thư mục tương ứng với máy (chỉ cho phép lựa chọn thư mục)

## **Bước 4 (không bắt buộc):** Mô tả điều kiện theo dõi thư mục

Sau khi hoàn tất thực hiện lựa chọn máy và thư mục cần theo dõi, hệ thống hiển thị các mục để lựa chọn

Mục lựa chọn điều kiện (mô tả điều kiện để theo dõi thư mục), khi bấm vào hệ thống hiển thị cửa sổ pop-up với các thông tin sau:

| **Tên cột**                         | **Mô tả**                                                    | **Yêu cầu**                                                  |
| ----------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Biểu thức chính quy (regex pattern)** | Cung cấp khả năng tìm kiếm, so khớp, trích xuất và thay thế các chuỗi ký tự dựa trên một quy tắc mô tả (điều kiện) để tìm được định dạng của tập tin sau đó kích hoạt tự động để tạo ra job | Không bắt buộc điền, nhập các kí tự được cho phép của regrex |
| **Bitrate (mpbs)**                      | Dùng để đo lường tốc độ truyền dữ liệu hoặc tốc độ bit trong một luồng dữ liệu | Không bắt buộc, chỉ cho phép nhập  kí tự số                  |
| **Width (px)**                          | Chiều rộng của khung hình video                              | Không bắt buộc, chỉ cho phép nhập  kí tự số                  |
| **Height (px)**                        | Chiều cao của khung hình video                               | Không bắt buộc, chỉ cho phép nhập  kí tự số                  |
| **FPS (fps)**                           | Tốc độ khung hình mỗi giây                                   | Không bắt buộc, chỉ cho phép nhập  kí tự số                  |
| **Size (byte)**                         | Kích thước của video                                         | Không bắt buộc, chỉ cho phép nhập  kí tự số                  |
| **Duration (s)**                        | Thời lượng mã hóa video                                      | Không bắt buộc, chỉ cho phép nhập  kí tự số                  |
| **Codec**                               | Bộ chuyển mã                                                 | Không bắt buộc, cho phép các lựa chọn sau: **H264, H265, AV1, VP9, VP8** |

- Nút **"Tiếp theo"**: hệ thống chuyển sang màn hình lựa chọn điều kiện tiếp theo
- Nút **"Trước"**: hệ thống quay lại màn hình điền biểu thức chính quy
- Nút **"Áp dụng"**: Hệ thống lưu thông tin, hiển thị màn hình tạo mới

## Bước 5: Lựa chọn điểm đến (destination)

Hệ thống hỗ trợ các nơi để lưu trữ các tập tin đầu ra, bao gồm: Lưu trữ tại thư viện, lưu trữ thư mục, bộ nhớ bên thứ ba

Xem thêm tại: 

## Bước 6: Cấu hình job

Hệ thống hỗ trợ chọn bản mẫu có sẵn hoặc có thể tạo cấu hình theo mong muốn

Xem thêm tại: 

## Bước 7: Hoàn thành tạo quy tắc thư mục

Tại bước cuối cùng, người dùng có thể chỉnh sửa tên của quy tắc

- Nút **"Tạo quy tắc"**: Hệ thống thực hiện tạo cơ chế theo dõi thư mục, hiển thị đầu tiên trên đầu danh sách quy tắc thư mục

- Nút **"Lưu mẫu"**: Hệ thống thực hiện lưu lại thông tin mẫu của cấu hình job. Xem thêm tại: 

Người dùng nhấn nút "Tạo quy tắc", hệ thống thực hiện tạo mới quy tắc, hiển thị thông báo **Đã tạo quy tắc thành công!** ở giữa màn hình để thông báo quá trình tạo đã được thực hiện thành công.
