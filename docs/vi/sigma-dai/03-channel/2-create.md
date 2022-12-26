---
title: Tạo mới kênh
order: 2
---
# Tạo mới kênh
Chức năng này cho phép CMS tạo mới kênh để chạy và chứa quảng cáo

 **Bước 1**: Tại giao diện màn hình chính Danh sách kênh, người dùng click vào nút **Tạo kênh**

Hệ thống hiển thị Pop-up Thêm kênh mới bên phải giao diện
![]()

 Với các thông tin chính:
 * Cài đặt bắt buộc:
    * Tên: Tên kênh do nguời dùng tự đặt.
    * Thẻ: Một thẻ giúp phân biệt và dễ dàng tìm kiếm kênh khi cần.
    * **Nguồn nội dung video(video content source): Link Origin gốc.**
    * **Máy chủ quảng cáo(AdDecisionServer): là 1 link vastID do bên quảng cáo cung cấp.**
* Cài đặt nâng cao( không bắt buộc): với người xem, không thể yêu cầu thẳng tới origin, **để xem được quảng cáo cần có thêm link CDN**( có thể xem CDN là bên thứ 3), sử dụng CDN để gửi yêu cầu phát lại tới SSAI, tại đây CDN sẽ chuyển đổi link để có thể gọi Origin tới người dùng.
 <br> *2 link CDN này có sự khác nhau giữa các segment
→ Phần đuôi gán vào link để xem quảng cáo do người dùng tự config.* </br>

    * **Phân đoạn nội dung CDN(CDN content segment prefix): Link gốc đã được chuyển đổi.**
    * **Phân đoạn quảng cáo CDN( CDN ad segment prefix): Link gốc đã được chuyển đổi**
    * **Giữ lại đánh dấu quảng cáo(Ad martket passthrough): Bật/ tắt.**
    * **Bumper start : Bumpers chèn vào trước quảng cáo**
    * **Bumper end : Bumpers chèn vào sau quảng cáo.**
* **Nút "Huỷ"**: Không thực hiện tạo mới, trở lại giao diện màn hình chính.
* **Nút "Lưu"**: Lưu thông tin tạo mới, trở về giao diện màn hình chính.

**Bước 2**: Người dùng nhập các thông tin .

**Bước 3**:  Click nút **Lưu** ở cuối Pop-up

Hệ thống thực hiện tạo mới kênh với lưu các thông tin vừa được nhập, hiển thị Pop-up thông báo **Tạo mới thành công** tại góc phải màn hình.
## Thông tin về Bumpers ad
Bumpers là **video ngắn, không thể bỏ qua** video được chèn vào đầu hoặc cuối trước khi kết thúc điểm quảng cáo nếu đủ thời gian.
<br> Để sử dụng Bumpers, người dùng chọn asset được cấu hình sẵn từ server ThudoJSC hoặc người dùng upload file video trực tiếp lên hệ thống Sigma.
### Điều kiện
Các điều kiện sau áp dụng để chèn bumpers:
* Loại Video
* Giới hạn thời lượng bumpers ad là **10 giây hoặc ít hơn.**
* Bumpers có thể được chèn vào **điểm đầu hoặc kết thúc** của quảng cáo( ad break) hoặc **cả hai**. 
* Bumpers **được chuyển mã** để phù hợp với nội dung nguồn.
