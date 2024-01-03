---
title: Kiểm duyệt quảng cáo
order: 2
---

# Kiểm duyệt
Sau khi quảng cáo được transcode và đủ điều kiện chèn, quảng cáo được chèn. Mong muốn quản lý chặt hơn tính năng chèn quảng cáo nên hệ thống hỗ tính năng kiểm duyệt, được quản lí theo 2 tính năng:

## Kiểm duyệt theo app

**Điều kiện**:
* Mặc định khi truy cập vào app lần đầu tiên: đang tắt tính năng kiểm duyệt( auto approval).
* Đã có ad insert endpoint được tạo và chứa nó.
* Đã có ít nhất 1 quảng cáo được tạo ra.

Mô tả chức năng:

* Not-approve:

    * Chức năng: Ẩn toàn bộ switch tính năng kiểm duyệt của danh sách quảng cáo.
    * Mặc định tất cả quảng cáo được chèn, không phụ thuộc vào tính năng kiểm duyệt.
    * Quảng cáo mới được tạo →  mặc định trạng thái khởi tạo là được bật = approval( dưới BE) nhưng ẩn( phía UI).

* Approve:
    * Chức năng: Cho phép active tính năng kiểm duyệt của tất cả quảng cáo.
    * Chèn quảng cáo phụ thuộc vào trạng thái kiểm duyệt của app.

### Để bật tính năng kiểm duyệt theo app

**Giao diện mặc định** :

![](//images/dai/list-ad-default-off.PNG)

Tính năng kiểm duyệt theo app mặc định đang tắt( auto approval)

Tất cả tính năng kiểm duyệt ad đang ẩn. **Bước 1** :  Người dùng bật tính năng kiểm duyệt theo app.

**Bước 2**: Hệ thống sẽ hiển thị một cửa sổ pop-up xác nhận ở trung tâm màn hình với các chi tiết sau:

<center>

![](//images/dai/pop-up-confirm-approval-app.PNG)

</center>

* Tiêu đề: Kiểm duyệt cho ứng dụng?

* Nội dung: Áp dụng cho ứng dụng, chèn quảng cáo phụ thuộc vào trạng thái kiểm duyệt.Thực hiện hành động?

* Nút **Huỷ bỏ**: Không thực hiện thay đổi, ở lại màn hình Danh sách quảng cáo.
 * Nút **Xác nhận**: Hệ thống thực hiện việc hành động.

**Bước 3** : Người dùng nhấn nút **Xác nhận** để bật tính năng kiểm duyệt theo app.

Hệ thống vẫn ở Danh sách quảng cáo.

* Cho phép active tính năng kiểm duyệt của tất cả quảng cáo.

* Chèn quảng cáo phụ thuộc vào trạng thái kiểm duyệt.

## Kiểm duyệt theo quảng cáo

**Điều kiện**: Bắt buộc thực hiện action tính năng kiểm duyệt theo app trước.

Mô tả nghiệp vụ:

* Quảng cáo mới được tạo → mặc định trạng thái khởi tạo là được bật = approval( dưới BE) nhưng ẩn( phía UI).

* Quảng cáo tổng tắt → ẩn action kiểm duyệt của từng quảng cáo.

* Trạng thái quảng cáo ban đầu not-approve → quảng cáo cho phép chèn.

### Để bật tính năng kiểm duyệt theo quảng cáo

**Giao diện mặc định** :

![](//images/dai/list-ad-default-off.PNG)

Trạng thái mặc định- tính năng kiểm duyệt theo app đang tắt.

Mặc định quảng cáo được chèn, không phụ thuộc vào tính năng kiểm duyệt.

**Bước 1** :  Người dùng bật tính năng kiểm duyệt từng quảng cáo.

**Bước 2**: Hệ thống sẽ hiển thị một cửa sổ pop-up xác nhận ở trung tâm màn hình với các chi tiết sau:

<center>

![](//images/dai/pop-up-confirm-approval-ad.PNG)

*Hình 1: Pop-up xác nhận kiểm duyệt theo quảng cáo*

</center>

* Tiêu đề: Kiểm duyệt cho quảng cáo?

* Nội dung: Điều kiện đủ để chèn quảng cáo. Thực hiện hành động?


* Nút **Huỷ bỏ**: Không thực hiện thay đổi, quay lại màn hình Danh sách quảng cáo.
* Nút **Xác nhận**: Hệ thống thực hiện việc hành động.

**Bước 3** : Người dùng nhấn nút **Xác nhận** để bật tính năng kiểm duyệt theo app. Hệ thống vẫn ở Danh sách quảng cáo.

![](//images/dai/list-ad-approval.PNG)

<center>

  *Hình 2: Bật tính năng kiểm duyệt theo quảng cáo*

  </center>

* Hiển thị chuyển switch: approve, thông báo đã chuyển thành công.

* Cho phép chèn quảng cáo.

