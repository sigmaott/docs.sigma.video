---
title: Xoá tư cách thành viên
order: 5
---

# Xoá tư cách thành viên
**Điều kiện**: Phải có ít nhất một thành viên khác và được hiển thị trong danh sách thành viên.
**Actor**: Thành viên đc phân quyền vào quản lý ứng dụng.
 
Sau khi tạo ứng dụng và thêm thành viên hoặc khi các thành viên không còn cần tham gia, quản trị viên thực hiện việc xoá các thành viên không cần thiết như sau:

**Bước 1** : 

Tại màn hình chính, quản trị viên chọn thành viên cần xoá. Hệ thống sẽ hiển thị tooltip **Xoá** khi di chuyển chuột vào biểu tượng `Xoá` trong cột hành động.

Lưu ý: Nút `Xoá` sẽ bị vô hiệu hóa, không cho phép xoá tài khoản của chính mình.

Người dùng nhấp vào biểu tượng `Xoá`, hệ thống sẽ mở một cửa sổ pop-up xác nhận ở trung tâm màn hình.

![Xoá thành viên](/images/streaming-platform/app-management/02-member/pop-up/delete.png)

 *Pop-up xoá thành viên*

 * Tiêu đề: Bạn có chắc chắn muốn xoá thành viên?
 * Nút Huỷ bỏ: Không thực hiện thay đổi, quay lại màn hình danh sách thành viên.
 * Nút Xác nhận: Hệ thống sẽ thực hiện việc xoá tư cách thành viên.

 **Bước 2** : 
 
Người dùng nhấp vào nút **Xác nhận** để xác nhận việc xoá tư cách thành viên khác. Hệ thống sẽ hiển thị một cửa sổ pop-up thông báo phía trên của màn hình.
 
 ![Xoá thành viên](/images/streaming-platform/app-management/02-member/message/delete.png)

 *Thông báo Xoá thành viên thành công!*
 
Thành viên sẽ bị **xoá tư cách** thành viên khỏi ứng dụng, nhưng tài khoản của họ vẫn được giữ nguyên và không hiển thị trong danh sách thành viên.

Tuy nhiên, trong trường hợp cần thiết, quản trị viên vẫn có thể mời thành viên đã bị xoá tư cách thành viên để họ tham gia lại.

## Tài khoản bị xoá tư cách
Nếu thành viên đang trong ứng dụng và bị người khác xoá tư cách thành viên, hệ thống sẽ kiểm tra và thực hiện các bước sau:

1. Hiển thị thông báo 403 với nội dung: 

> Xin lỗi, bạn không có quyền truy cập trang này.

Người dùng có thể nhấp vào nút `Về tổng quan` để trở về danh sách ứng dụng. Ứng dụng không hiển thị trong danh sách ứng dụng của người dùng do không có quyền truy cập.