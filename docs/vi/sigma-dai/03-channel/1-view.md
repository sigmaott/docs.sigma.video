---
title: Xem giao diện biên tập kênh
order: 1
---
#  Xem giao diện biên tập kênh
Chức năng này hiển thị danh sách các kênh và cho phép CMS User tìm kiếm kênh mong muốn  

 Tại màn hình chính hệ thống chọn **Danh sách kênh**


Màn hình chính hệ thống hiển thị:

* Các thông tin được hiển thị trong giao diện:
  
     
| Tên cột        | Chức năng                                                    |
| -------------- | ------------------------------------------------------------ |
| **ID**         | Sau khi người dùng tạo mới kênh, hệ thống sinh ra ID riêng cho kênh với mục đích nhận diện. |
| **Tên**        | Do người dùng CMS cấu hình tên kênh                          |
| **Phát lại HLS**      | Do hệ thống sinh ra sau khi cấu hình kênh,có thể click để sao chép link |
| **Phát lại DASH** | Do hệ thống sinh ra sau khi cấu hình kênh, có thể click để sao chép link                      |
| **Máy chủ quảng cáo**   | Một máy chủ cung cấp thông số kỹ thuật của điểm quảng cáo dựa trên các tiêu chí bao gồm các chiến dịch quảng cáo hiện tại và sở thích của người xem, có thể click để sao chép link.  |
| **Cập nhật**   | (sắp xếp mặc định) hiển thị lên đầu trang với kênh được cập nhật mới nhất |
| **Hành động**  | Thống kê: Điều hướng tới các lựa chọn xem thống kê liên quan với filtr tên kênh tương ứng. <br /> Chỉnh sửa: Cho phép người dùng chỉnh sửa các thông tin của kênh. <br />Xoá: Cho phép người dùng CMS thực hiện xoá kênh. <br /> Tạo bản sao: Tạo nhanh 1 bản sao với thông tin bắt buộc được cấu hình sẵn. |

* Các nút khác

| Tên nút                | Chức năng                                                    | Hình ảnh |
| ---------------------- | ------------------------------------------------------------ | -------- |
| **Icon đồng bộ**       | Góc phải bên dưới giao diện, luôn thực hiện đồng bộ hệ thống liên tục trong 10s | ![](../../images/icon_sync.png)         |
| **Footer- chân trang** | 2022@ By Sigma Streaming                                     |          |
| Icon **Phân trang**           | Bao gồm các thông tin: Tổng số trang, lựa chọn số items/1 trang( mặc định 10 items/1 trang), trang hiện tại, nhảy tới trang mong muốn tìm kiếm |     |
| **Quick filter**       | Bộ lọc nhanh hỗ trợ tìm kiếm thông tin gồm: Tên và thẻ |          |
| Nút **Lọc**      | Thực hiện lọc các thông tin chi tiết hơn |          |

## Xem chi tiết kênh
**Bước 1:** Tại giao diện Danh sách Kênh

→ Click vào **Tên trường** mong muốn xem thông tin chi tiết kênh.
<br> **Bước 2:** Hiển thị giao diện chi tiết kênh với các thông tin sau:
* Tên kênh: Tên kênh vừa chọn
* Thẻ
* Icon **back** → Click quay trở lại giao diện Danh sách kênh.
* Bảng hiển thị:
 * **Playback Endpoint Prefixes:**  HLS playback prefix/ DASH playback prefix/ **link Session initalization playback prefix( link khởi tạo- sau khi người dùng cấu hình kênh, SSAI trả về).**
 * **Cài đặt bắt buộc:** Máy chủ quảng cáo (Ad decision server)/ Video content source.
 * **Cài đặt nâng cao:** Phân đoạn nội dung CDN/ Phân đoạn quảng cáo CDN/ Giữ lại đánh dấu quảng cáo/ Bumpers start/ Bumpers end.
 <br> *icon copy kế bên mỗi link.* </br>

