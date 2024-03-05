---
title: Xoá nhóm
order: 4
---
# Xóa nhóm
**Điều kiện**: Nhóm đã được tạo trước đó và đã hiển thị trong danh sách nhóm.
 
Sau khi đã tạo và thêm thành viên nhóm, quá trình xoá các nhóm không cần thiết có thể được thực hiện như sau:

**Bước 1** : 

Tại giao diện màn hình chính, chọn trường cần xoá. Hệ thống sẽ hiển thị dòng **Xoá bỏ** khi di chuyển chuột vào biểu tượng `Xoá` ở cột hành động.
 
Người dùng nhấp vào biểu tượng `Xoá`, hệ thống sẽ mở một cửa sổ pop-up xác nhận ở trung tâm màn hình
 
![Xoá nhóm](/images/streaming-platform/app-management/03-group/pop-up/delete.png)

*Pop-up xoá nhóm*

 * Tiêu đề: Toàn bộ thành viên nhóm sẽ bị xoá. Bạn có chắc chắn muốn xoá nhóm không?
 * Nút Huỷ bỏ: Không thực hiện thay đổi, quay lại màn hình Danh sách nhóm.
 * Nút Xác nhận: trở về danh sách, thực hiện xoá group. Thành viên đang được gán theo group sẽ không còn quyền truy cập.

 **Bước 2** : 
 
Người dùng nhấp vào nút **Xác nhận** để xác nhận việc xoá thông tin nhóm. Hệ thống sẽ hiển thị một cửa sổ pop-up thông báo phía trên của màn hình.
 
 <!-- ![]() -->

 *Thông báo Xoá nhóm thành công!*
 
- Khi một nhóm phân quyền truy cập được xoá, tất cả thành viên trong nhóm đó sẽ mất quyền truy cập vào các tính năng đã được gán cho nhóm.

- Sau khi xoá một nhóm phân quyền truy cập, các quyền truy cập của nhóm đó sẽ không còn có hiệu lực và không thể khôi phục lại.

- Việc xoá nhóm phân quyền truy cập không ảnh hưởng đến các nhóm khác và quyền truy cập của chúng.

## Thành viên nhóm
Sau khi chỉnh sửa nhóm, các thành viên được gán vào nhóm sẽ mất quyền truy cập vào hệ thống. Trong trường hợp này, một trang lỗi UI 403 sẽ được hiển thị để thông báo về việc không có quyền truy cập. 

![Lỗi 403](/images/streaming-platform/app-management/03-group/error-403.png)

Người dùng có thể nhấp vào nút `Về tổng quan` để trở lại danh sách ứng dụng và sidebar chỉ hiển thị các sản phẩm có quyền truy cập.
