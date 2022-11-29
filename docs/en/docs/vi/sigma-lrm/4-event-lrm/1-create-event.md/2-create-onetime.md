---
title: Sự kiện một khoảng
order: 2
---

# Biên tập sự kiện một khoảng
**Bước 1:** Chọn Kiểu xuất bản **Một khoảng**

**Bước 2:** Người dùng nhập các thông tin, người dùng click nút **Lưu** ở cuối Pop-up Thực hiện tạo mới sự kiện, hiển thị thông báo bên góc phải màn hình ![](../../images/Notice_success_create_event.png)

* **Tiêu đề**:  Tạo sự kiện thành công!
* Icon check

Đồng thời **hiển thị thông tin lên dòng thời gian** với Tên sự kiện + khoảng thời gian tương ứng (Nhận biết trạng thái xem tại góc phải dòng thời gian) ![](/images/Status_Event.png)

* **Chuẩn bị**: Thời gian thực hiện tại bé hơn thời gian bắt đầu chạy của sự kiện.
* **Sẵn sàng:** Sự kiện đang trong thời gian chạy.
* **Hoàn thành:** Thời gian thực hiện tại lớn hơn thời gian kết thúc chạy của sự kiện.
* **Lỗi:** Trong quá trình hệ thống kiểm tra sự kiện gặp vấn đề( mất tín hiệu, gián đoạn,...).

 Bảng mô tả các thông tin loại sự kiện


<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky" style="font-weight:bold" >Loại sự kiện</th>
    <th class="tg-0pky" style="font-weight:bold" >Nội dung đa phương tiện</th>
    <th class="tg-0pky" style="font-weight:bold" >Asset</th>
    <th class="tg-0pky" style="font-weight:bold">Hình thức</th>
    <th class="tg-0pky" style="font-weight:bold">Chế độ</th>
    <th class="tg-0pky" style="font-weight:bold">Mô tả</th>
    <th class="tg-0pky" style="font-weight:bold">Các quy định</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">SCTE35</td>
    <td class="tg-0pky">Không</td>
    <td class="tg-0pky"> Video, image</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">Sử dụng để báo hiệu tất cả các loại sự kiện chương trình và quảng cáo trong các luồng vận chuyển tuyến tính và ở các định dạng phân phối ABR mới hơn như HLS và Dash</td>
    <td class="tg-0pky" rowspan="2" >Chỉ được phép tạo với StopTime lớn hơn thời điểm hiện tại 1 phút Stop Time > current time + 1 minute</td>
  </tr>
  <tr>
    <td class="tg-0pky">Live</td>
    <td class="tg-0pky">Có</td>
    <td class="tg-0pky">Video, image</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">Luồng thay thế nội dung trực tuyến</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="6">VOD</td>
    <td class="tg-0pky" rowspan="6">Có</td>
    <td class="tg-0pky" rowspan="6">Video</td>
    <td class="tg-0pky" colspan="3">Luồng thay thế nội dung video theo yêu cầu, thay thế bản phác thảo,khi luồng kết thúc, có thể replay lại, thực hiện sửa, xoá event</td>
    <td class="tg-0pky" rowspan="6">Được phép tạo event với khoảng thời gian (Start Date+ Start Time), (Stop date + Stop Time) trong quá khứ</td>
  </tr>
  <tr>
    <td class="tg-0pky">Cắt</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">Xoá luôn luồng gốc, không chọn nội dung thay thế( người dùng gọi không thấy được nội dung gốc)</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="4">Nội dung thay thế</td>
    <td class="tg-0pky" colspan="2">Video thay thế đoạn cần thay thế Ví dụ trường hợp: Video thay thế( 15 phút) ngắn hơn đoạn cần thay thế(60 phút)</td>
  </tr>
  <tr>
    <td class="tg-0pky">Thay thế</td>
    <td class="tg-0pky">Thay thế đoạn người dùng cms cấu hình thời gian của event( thay thế 15 phút đầu) và giữ nguyên nội dung còn lại( 45 phút) của đoạn gốc</td>
  </tr>
  <tr>
    <td class="tg-0pky">Lặp lại</td>
    <td class="tg-0pky">video refill phù hợp với thời gian của đoạn cần thay thế, lặp đi lặp lại nếu chưa đủ thời lượng( lặp đi lặp lại video thay thế 15 phút cho đến khi đủ thời lượng cần thay thế của đoạn gốc 60 phút)</td>
  </tr>
  <tr>
    <td class="tg-0pky">Thay thế và cắt</td>
    <td class="tg-0pky">Điều chỉnh để phù hợp vs thời gian, phần còn lại bị bỏ đi ( bỏ đoạn gốc, đoạn có sẵn) video chạy 15 phút đầu, 45 phút còn lại của đoạn gốc bị bỏ đi -> không hiển thị</td>
  </tr>
</tbody>
</table>

