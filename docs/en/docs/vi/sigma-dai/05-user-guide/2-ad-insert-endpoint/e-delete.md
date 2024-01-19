---
title: Xoá ad insert endpoint
order: 5
---

# Xóa ad insert endpoint

**Điều kiện**: Để thực hiện chức năng này, cần phải có ít nhất một ad insert endpoint đã được tạo trước đó và hiển thị trong danh sách ad insert endpoint.

Thực hiện chức năng này khi người dùng CMS không muốn phát lại quảng cáo, thực hiện xoá một ad insert endpoint không khả dụng.

## Để xoá ad insert endpoint

**Bước 1** :
Trên màn hình chính, tại ad insert endpoint mà bạn muốn xoá, di chuột vào biểu tượng **Xoá** ở cột Hành động, và sau đó nhấn vào biểu tượng **Xoá**.

Hệ thống sẽ hiển thị một cửa sổ pop-up xác nhận ở trung tâm màn hình với các chi tiết sau:

<center>

![](/images/dai/pop-up-delete-endpoint.png)

_Hình 1: Pop-up xoá endpoint_

</center>

- Tiêu đề: Xoá ad insert endpoint
- Nội dung: ad insert endpoint có thể đang chạy, bạn có chắc chắn xóa ad insert endpoint này không?
- Nút **Huỷ bỏ**: Không thực hiện thay đổi, quay lại màn hình Danh sách ad insert endpoint.
- Nút **Xác nhận**: Hệ thống thực hiện việc xoá toàn bộ thông tin của ad insert endpoint.

**Bước 2** : Người dùng nhấn nút **Xác nhận** để xoá thông tin ad insert endpoint
Hệ thống hiển thị một cửa sổ pop-up thông báo **Xoá ad insert endpoint thành công** ở góc phải màn hình và tự động đóng thông báo sau 5 giây.

<center>

![](/images/dai/success-delete.png)

_Hình 2: Thông báo xoá bản sao ad insert endpoint thành công!_

</center>

Đồng thời, hệ thống thực hiện **xoá toàn bộ sự kiện**( kể cả sự kiện đang diễn ra), sự kiện lập lịch tương lai trong ad insert endpoint.
