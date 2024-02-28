---
id: docs-guideline-livestream
title: Xem danh sách session
order: 1
---

## Session là gì?

Sau khi kênh được khởi tạo, người dùng có thể đẩy luồng đầu vào và session tự động được gán vào với trạng thái init, kết thúc khi session chạy hết thời lượng( timeout) hoặc người dùng chủ động dừng kênh. Việc duy trì session chạy liên tục có thể giúp tạo ra sự liên tục trong trải nghiệm xem và giữ cho khán giả liên tục quan tâm đến nội dung và tránh tình trạng quá tải.

Một kênh livestream có nhiều session được gán. Các thay đổi về thông tin kênh của mỗi session có thể khác nhau, tuỳ thuộc vào lịch sử cập nhật chỉnh sửa của kênh.

## Khởi tạo kênh

Không chủ động tạo mới session ở hệ thống Livestream, người dùng sử dụng bên thứ 3.

**Bước 1:** Tại phần mềm bên thứ 3, thực hiện copy/paste thông tin chi tiết kênh cần sử dụng → đẩy luồng đầu vào.

**Bước 2:** Trở về hệ thống livestream, hệ thống nhận được thông tin có luồng đầu vào được đẩy vào kênh. Thực hiện tạo session gán vào kênh với trạng thái `init`.

→ Kênh chuyển trạng thái kênh từ `IDLE` sang `Active`, hiển thị tên session liên kết tại chi tiết kênh.

## Danh sách session

Danh sách tất cả session hiện có trong hệ thống Sigma Livestream, mỗi session được gán với link play và kênh tương ứng, có thể nhấp vào để điều hướng sang các trang liên quan khác một cách nhanh chóng hơn.

Sau khi khởi tạo kênh, người dùng có thể xem danh sách session mong muốn.

### Cách 1: Xem session được gán theo kênh

Tại danh sách kênh Livestream, người dùng nhấp vào biểu tưởng `mở danh sách session` cột action kênh mong muốn

Hệ thống điều hướng tới danh sách, hiển thị các session có ID kênh bạn chọn.

### Cách 2: Xem danh sách session

Để xem danh sách các session, bạn cần thực hiện hai bước sau:

Bước 1: Chuyển sang tab **"Session"**.
Bước 2: Hiển thị giao diện danh sách session các thông tin sau đây:

- SessionID
- Session Name: Click để mở trang chi tiết của session.
- Channel: Nhấp vào điều hướng đến chi tiết của kênh mà session thực hiện tác vụ.
- Trạng thái (Status):
  - Init: trạng thái khởi tạo
  - Processing: kênh tự động chuyển
  - Preparing: xuất hiện khi đường truyền không ổn định
  - Error: các trường hợp không ổn định, không thể bắt sóng, hoặc quá trình xử lý lỗi
  - Live: kênh ổn định
  - Ended: kênh dừng phát sóng
- Hành động (Action):
  - Dừng session - tắt tính năng này khi trạng thái của session là `Ended`.
  - Xoá session: Chỉ cho phép xoá session trạng thái `Ended`

Việc này giúp quản lý và điều chỉnh các session một cách thuận tiện, đồng thời giúp người dùng dễ dàng theo dõi trạng thái và tiến độ của từng session.
