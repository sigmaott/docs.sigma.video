---
title: Xem Danh sách quảng cáo
order: 1
---
# Xem Danh sách quảng cáo

**Điều kiện**: 
* Đã có ad insert endpoint được tạo và chứa nó.
* Đã có ít nhất 1 quảng cáo được tạo ra.

Các thông tin hiển thị ở đây giúp người dùng theo dõi các quảng cáo đã được cấu hình, hiển thị lên luồng trực tuyến.

*Giao diện mặc định hiển thị đang ở Dashboard.*

 Tại sidebar, chọn Danh sách quảng cáo.

Hệ thống hiển thị giao diện Danh sách quảng cáo gồm các thông tin sau:

![](//images/dai/list-ad-default-off.PNG)

<center>

  *Hình 1: Danh sách quảng cáo mặc định*

  </center>

* **Tiêu đề**: Danh sách quảng cáo.
* **Kiểm duyệt theo ứng dụng**: mặc định đang tắt.
* **Nút bộ lọc tìm kiếm nhanh**: tiêu đề( ALl)/ vastID( All)/ trạng thái( All).
* **Icon làm mới dữ liệu**: mặc định tự động cập nhật dữ liệu với thời lượng 10 giây, người dùng có thể click vào làm mới **thủ công**.
* **Phân trang**

### Bảng thông tin quảng cáo

| Tên cột        | Chức năng                                                    |
| -------------- | ------------------------------------------------------------ |
| **ID**         | Một mã định danh của quảng cáo(adID) mục đích nhận diện |
| **Xem trước**        | Một video MP4 đầy đủ thời lượng hiển thị của quảng cáo tới người xem, người dùng có thể thực hiện thao tác xem trước tại đây.                          |
| **Tiêu đề**      | Tên quảng cáo  |
| **VastID** | Một mã định danh của quảng cáo (adID) trong **file vast trả về.**               |
| **Thời lượng**   | Thời lượng hiển thị của quảng cáo  |
| **Trạng thái**   | có 2 loại trạng thái: có sẵn và không có sẵn |
| **Lần đầu tiên xuất hiện**  | Điểm đánh dấu quảng cáo(cue-tone) đầu tiên trên luồng trực tuyến. |


## Quick filter( Không bắt buộc) 
Người dùng thực hiện tìm kiếm nhanh bằng bộ lọc quick filter.

Quick filter: Bộ lọc hiển thị ngay trên giao diện hỗ trợ người dùng tìm kiếm nhanh, tại giao diện Danh sách quảng cáo bao gồm:
   * Tiêu đề: **Hiển thị tất cả giá trị nào có chứa keyword ở bất kỳ vị trí nào.**
   * VastID
   * Trạng thái: Có sẵn/ không có sẵn.

## Xem trước( Không bắt buộc) 
Người dùng thực hiện thao tác xem trước quảng cáo

Tại giao diện Danh sách quảng cáo, người dùng click vào xem trước.

Hệ thống hiển thị **video mp4 của quảng cáo**.

Các hành động hiển thị:


| Tên cột        | Chức năng                                                    |
| -------------- | ------------------------------------------------------------ |
| **Icon chạy(play)**         | Hiển thị khi vừa truy cập vào, click vào để chạy video. |
| **Icon phát lại**        | Hiển thị sau khi video chạy xong, click vào để phát lại nếu người xem có nhu cầu.                          |
| **Phân đoạn nội dung:**      | Tối đa là thời lượng quảng cáo. |
| **Tỷ lệ phát lại (playback rate)** | 0,5x/ 0,75x/ 1x( mặc định)/ 1,5x/ 2x.               |
| **Trình phát playing in picture-in-picture:**   | Phát video linh động ra khỏi Tab hiện tại. Bấm **Back to Tab** để trở về trang web SSAI.  |