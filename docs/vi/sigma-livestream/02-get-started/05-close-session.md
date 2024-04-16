---
title: 'Đóng session'
order: 5
---

Session được tạo ra liên tục, tuỳ thuộc vào cập nhật của kênh. Sau khi session về trạng thái `ended`, session không thể chạy lại, sử dụng session mới. Có thể đóng session bằng 2 cách:
## Tự động dừng session
Kênh tự động dừng khi timeout hoặc do người dùng chủ động dừng kênh( sớm hơn thời gian chạy).
### Chủ động dừng session
**Điều kiện**: Kênh ở trạng thái `Active`.

**Bước 1** : 

Tại giao diện danh sách session, session không phải trạng thái `ended`. Hệ thống sẽ hiển thị dòng **Kết thúc session** khi di chuyển chuột vào biểu tượng `dừng` ở cột hành động.
 
Người dùng nhấp vào biểu tượng `dừng`, hệ thống sẽ mở một cửa sổ pop-up cảnh báo ở trung tâm màn hình.

![kết thúc session](/images/livestream/stop-session.png)

*Pop-up kết thúc session*

- Tiêu đề: Bạn có chắc chắn để kết thúc session?
- Nút Huỷ bỏ: Không thực hiện thay đổi, quay lại màn hình Danh sách session.
- Nút Đồng ý: Thực hiện lênh.

**Bước 2** : 
 
Người dùng nhấp vào nút **Đồng ý** để xác nhận việc kết thúc session. Hệ thống sẽ hiển thị một cửa sổ pop-up thông báo phía trên của màn hình.

*Thông báo kết thúc session thành công!*
 
Session vừa được dừng hiển thị với trạng thái `ended`, ẩn icon `dừng`. Đồng thời hiển thị với thời lượng tương ứng.