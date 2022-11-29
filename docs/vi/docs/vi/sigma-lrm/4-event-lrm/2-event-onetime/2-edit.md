---
title: Chỉnh sửa
order: 2
---

# Chỉnh sửa sự kiện một khoảng
Cho phép chỉnh sửa sự kiện một khoảng tại Tab Sự kiện. **Điều kiện**: Sự kiện đã được tạo trước đó.

 **Bước 1**:

 *Cách 1:* Tại Dòng thời gian sự kiện click vào **sự kiện một khoảng hiển thị không có đồng hồ đính** kèm ![](../../images/Event_Onetime.png)

 *Cách 2:* tại danh sách sự kiện, hiển thị dòng **Chỉnh sửa"** khi **di chuyển chuột** vào icon **Sửa** tại cột hành động

  ![](../../images/Action_edit_event_list.png)

 **Bước 2:** Người dùng click icon **chỉnh sửa**

 Hệ thống hiển thị Pop-up Cập nhật chỉnh sửa sự kiện góc phải màn hình với các thông tin được nhập trước đó

 ![](../../images/Popup_edit_event_Onetime.png)

* **Disable các trường không cho phép sửa:**
    * Kiểu sự kiện
    * Nội dung đa phương tiện ( ngoại trừ trường hợp **VOD và SCTE35/Live trạng thái chuẩn bị cho phép sửa**)
    * Kiểu xuất bản
    * Phạm vi thời gian
* **Các nội dung cho phép chỉnh sửa:**
   * Tên
   * Mô tả
   * Loại trừ
   * Khoảng thời gian


## Bảng mô tả các quy định xoá sự kiện lập lịch


<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky"><span style="font-weight:bold">Loại sự kiện</span></th>
    <th class="tg-0pky"><span style="font-weight:bold">Trạng thái</span></th>
    <th class="tg-0pky"><span style="font-weight:bold">Được phép chỉnh sửa</span></th>
    <th class="tg-0pky"><span style="font-weight:bold">Được phép xoá</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky" rowspan="4">SCTE35</td>
    <td class="tg-0pky">Hoàn thành</td>
    <td class="tg-0pky">Không</td>
    <td class="tg-0pky">Chỉ xoá ScheduleID</td>
  </tr>
  <tr>
    <td class="tg-0pky">Sẵn sàng</td>
    <td class="tg-0pky">không</td>
    <td class="tg-0pky">Chỉ xoá ScheduleID</td>
  </tr>
  <tr>
    <td class="tg-0pky">Lỗi</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">Không thay đổi</td>
  </tr>
  <tr>
    <td class="tg-0pky">Chuẩn bị</td>
    <td class="tg-0pky">Có</td>
    <td class="tg-0pky">Cho phép sửa, xoá tất cả</td>
  </tr>
  <tr>
    <td class="tg-0pky">VOD</td>
    <td class="tg-0pky">Sẵn sàng</td>
    <td class="tg-0pky">Có</td>
    <td class="tg-0pky">Cho phép sửa,xoá tất cả</td>
  </tr>
</tbody>
</table>

 **Bước 3:** Người dùng thực hiện chỉnh sửa và bấm nút **Lưu**

  Hệ thống thực hiện lưu các thông tin mới vừa được cập nhật, hiển thị thông báo cập nhật thành công ở góc phải màn hình và tự động đóng trong 5s

  ![](../../images/Notice_success_edit_schedule.png)

 * **Tiêu đề:** Cập nhật thành công!
 * Icon Check: Nhận biết thông báo.