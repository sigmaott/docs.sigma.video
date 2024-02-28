---
title: Xoá kênh Livestream
order: 5

---

# Xóa kênh
**Điều kiện**: 
Kênh đã được tạo ra trước đó và có hiển thị tại danh sách kênh.
Các session ở trạng thái init, processing, error, live gán vào kênh trạng thái Active đều tính là kênh đang được phát, không cho phép Xoá kênh.
 
Sau khi đã tạo và kích hoạt kênh, xoá các kênh **không phải trạng thái Live** không cần thiết theo các bước sau:

**Bước 1** : 

Tại giao diện màn hình chính, chọn trường cần xoá. Hệ thống sẽ hiển thị dòng **Xoá bỏ** khi di chuyển chuột vào biểu tượng `Xoá` ở cột hành động.
 
Người dùng nhấp vào biểu tượng `Xoá`, hệ thống sẽ mở một cửa sổ pop-up xác nhận ở trung tâm màn hình.

<!-- ![]() -->
 
 *Pop-up xoá kênh*

 * Tiêu đề: Bạn sẽ mất tất cả video, nội dung, phiên và thông tin trong kênh này.
 * Nút Huỷ bỏ: Không thực hiện thay đổi, quay lại màn hình Danh sách kênh.
 * Nút Xác nhận: Hệ thống sẽ thực hiện việc xoá toàn bộ thông tin của kênh.

 **Bước 2** : 
 
 Người dùng nhấp vào nút `Xoá` để xác nhận việc xoá thông tin kênh. Hệ thống sẽ hiển thị một cửa sổ pop-up thông báo phía trên của màn hình.

*Thông báo Xoá kênh thành công!*

Hệ thống thực hiện xoá tất cả các thông tin kênh bao gồm cả danh sách session trạng thái **END**, kênh không còn hiển thị trong danh sách kênh khi người dùng thực hiện tải lại.

