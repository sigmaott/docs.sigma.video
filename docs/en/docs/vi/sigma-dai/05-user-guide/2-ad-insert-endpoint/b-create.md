---
title: Tạo mới ad insert endpoint
order: 2
---

# Tạo mới ad insert endpoint
Chức năng này cho phép CMS tạo mới ad insert endpoint để chạy và chứa quảng cáo

 **Bước 1**: Tại giao diện màn hình chính Danh sách ad insert endpoint, người dùng click vào nút **Tạo ad insert endpoint**

Hệ thống hiển thị Pop-up Thêm ad insert endpoint mới bên phải giao diện

![](/11-image/pop-up-create-endpoint.PNG)

<center>
  *Hình 1: Pop-up tạo mới endpoint*
</center>

Với các thông tin chính:

* Cài đặt bắt buộc:

| Tên                                            | Chức năng                                                              |
| ---------------------------------------------- | ---------------------------------------------------------------------- |
| **Tên**                                        | Tên ad insert endpoint do nguời dùng tự cấu hình.                      |
| **Thẻ**                                        | Một thẻ giúp phân biệt và dễ dàng tìm kiếm ad insert endpoint khi cần. |
| **Nguồn nội dung video(video content source)** | Link Origin gốc.                                                       |
| **Máy chủ quảng cáo(AdDecisionServer)**        | là 1 link vastID do bên quảng cáo cung cấp .                           |


* Cài đặt nâng cao( không bắt buộc): với người xem, không thể yêu cầu thẳng tới origin, **để xem được quảng cáo cần có thêm link CDN**( có thể xem CDN là bên thứ 3), sử dụng CDN để gửi yêu cầu phát lại tới SSAI, tại đây CDN sẽ chuyển đổi link để có thể gọi Origin tới người dùng.

*2 link CDN này có sự khác nhau giữa các segment → Phần đuôi gán vào link để xem quảng cáo do người dùng tự cấu hình.*

 | Tên                                                                    | Chức năng                                                               |
 | ---------------------------------------------------------------------- | ----------------------------------------------------------------------- |
 | **Phân đoạn nội dung CDN(CDN content segment prefix)**                 | Link gốc đã được chuyển đổi.                                            |
 | **Phân đoạn quảng cáo CDN( CDN ad segment prefix)**                    | Link gốc đã được chuyển đổi.                                            |
 | **Giữ lại đánh dấu quảng cáo(Ad martket passthrough)**                 | Không cho phép( bỏ)/ Cho phép( giữ) điểm đánh dấu chèn quảng cáo.       |
 | [Bumpers chèn trước quảng cáo](../2-ad-insert-endpoint/f-bumper-ad.md) | Bumpers chèn vào trước quảng cáo.                                       |
 | [Bumpers chèn sau quảng cáo](../2-ad-insert-endpoint/f-bumper-ad.md)   | Bumpers chèn vào sau quảng cáo.                                         |
 | [Ad slate](../2-ad-insert-endpoint/g-ad-slate.md)                      | Nội dung đa phương tiện chèn vào quảng cáo thay thế trường hợp gặp lỗi. |
 | [Delay ad](../2-ad-insert-endpoint/h-delay.md)                         | Cấu hình thời gian chờ để chèn sau khi có tín hiệu chèn quảng cáo.      |


* **Nút Huỷ**: Hủy bỏ quá trình tạo mới và trở lại giao diện màn hình chính.
* **Nút Lưu**: Hệ thống sẽ thực hiện việc tạo mới kênh và lưu lại các thông tin được nhập.


**Bước 2**: Người dùng cung cấp thông tin cần thiết.

**Bước 3**:  Sau khi hoàn tất, nhấn vào nút **Lưu** tại cuối cửa sổ pop-up.

Hệ thống thực hiện tạo mới ad insert endpoint với lưu các thông tin vừa được nhập, hiển thị Pop-up thông báo **Tạo ad insert endpoint thành công** ở giữa màn hình để thông báo quá trình tạo kênh đã được thực hiện thành công.

<center>

 ![](/11-image/success-create.PNG)

*Hình 2: Thông báo tạo mới ad insert endpoint thành công!*

</center>