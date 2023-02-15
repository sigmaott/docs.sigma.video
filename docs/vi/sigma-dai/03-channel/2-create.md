---
title: Tạo mới kênh
order: 2
---
# Tạo mới kênh
Chức năng này cho phép CMS tạo mới kênh để chạy và chứa quảng cáo

 **Bước 1**: Tại giao diện màn hình chính Danh sách kênh, người dùng click vào nút **Tạo kênh**

Hệ thống hiển thị Pop-up Thêm kênh mới bên phải giao diện
![](../image/pop-up-create-channel.png)

Với các thông tin chính:

* Cài đặt bắt buộc:

| Tên      | Chức năng                                                    |
| -------------- | ------------------------------------------------------------ |
| **Tên**         | Tên kênh do nguời dùng tự cấu hình. |
| **Thẻ**        | Một thẻ giúp phân biệt và dễ dàng tìm kiếm kênh khi cần.                          |
| **Nguồn nội dung video(video content source)**      | Link Origin gốc. |
| **Máy chủ quảng cáo(AdDecisionServer)** | là 1 link vastID do bên quảng cáo cung cấp.               |


* Cài đặt nâng cao( không bắt buộc): với người xem, không thể yêu cầu thẳng tới origin, **để xem được quảng cáo cần có thêm link CDN**( có thể xem CDN là bên thứ 3), sử dụng CDN để gửi yêu cầu phát lại tới SSAI, tại đây CDN sẽ chuyển đổi link để có thể gọi Origin tới người dùng.

*2 link CDN này có sự khác nhau giữa các segment
→ Phần đuôi gán vào link để xem quảng cáo do người dùng tự cấu hình.*

 | Tên        | Chức năng                                                    |
| -------------- | ------------------------------------------------------------ |
| **Phân đoạn nội dung CDN(CDN content segment prefix)**         | Link gốc đã được chuyển đổi. |
| **Phân đoạn quảng cáo CDN( CDN ad segment prefix)**        | Link gốc đã được chuyển đổi                          |
| **Giữ lại đánh dấu quảng cáo(Ad martket passthrough)**      | Không cho phép/ Cho phép |
| **Bumpers chèn trước quảng cáo** | Bumpers chèn vào trước quảng cáo               |
| **Bumpers chèn sau quảng cáo** | Bumpers chèn vào sau quảng cáo |
| **Ad slate** | Nội dung đa phương tiện chèn vào quảng cáo thay thế trường hợp gặp lỗi. |


* **Nút "Huỷ"**: Không thực hiện tạo mới, trở lại giao diện màn hình chính.
* **Nút "Lưu"**: Lưu thông tin tạo mới, trở về giao diện màn hình chính.


**Bước 2**: Người dùng nhập các thông tin .

**Bước 3**:  Click nút **Lưu** ở cuối Pop-up

Hệ thống thực hiện tạo mới kênh với lưu các thông tin vừa được nhập, hiển thị Pop-up thông báo **Tạo kênh thành công** tại góc phải màn hình.

![](../image/notice-create-success.png)