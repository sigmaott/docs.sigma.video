---
title: Delete Channel
order: 5
---

# Delete Channel
 **Điều kiện**: Kênh đã được tạo ra trước đó và có hiển thị tại danh sách kênh Thực hiện chức năng này khi người dùng CMS không muốn phát lại quảng cáo, thực hiện xoá một kênh không khả dụng.
## Để xoá kênh
**Bước 1** : Tại giao diện màn hình chính, tại trường mong muốn xoá, hiển thị dòng **Xoá bỏ** khi di chuyển chuột vào icon **Xoá** ở cột Hành động.

Người dùng click icon **Xoá**

Hệ thống hiển thị Pop-up xác nhận ở chính giữa màn hình:

 * Title: Delete
 * Content: The channel may be running, are you sure to delete this channel?
 * Cancel button: Do not execute change, return to the Channel List view.
 * Confirmation button: A system that removes the entire channel's information.

**Bước 2** : Người dùng click vào nút **Xác nhận** để xoá thông tin kênh Hệ thống hiển thị Pop-up thông báo **Xoá kênh thành công** bên góc phải màn hình

 ![](../image/notice-delete-success.png)

 * Title: Clear the channel!
 * Icon X: Click to close the notification.
 * Icon Check: Notice.

At the same time, the **implementation system erased the**event (including the ongoing event), the future scheduling event in the channel.