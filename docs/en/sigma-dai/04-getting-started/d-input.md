---
title: Thao tác nhập liệu
order: 4
---

# Hướng dẫn cấu hình cơ bản

Xem mô tả các thao tác nhập liệu và submit dữ liệu.

## Thao tác nhập liệu

Có một số lưu ý và thông tin tổng quan khi người dùng tương tác với việc thêm hoặc chỉnh sửa dữ liệu trong một biểu mẫu:

Mỗi biểu mẫu sẽ bao gồm nhiều trường dữ liệu, và mỗi trường dữ liệu sẽ có hai phần chính: **Tiêu đề** và **Ô nhập/chọn dữ liệu**.

Phần **Tiêu đề** hiển thị thông tin về tên của trường dữ liệu. Dưới đây là một số quy tắc hiển thị chung của chương trình/hệ thống:

- Các trường dữ liệu bắt buộc sẽ được đánh dấu bằng **dấu sao đỏ phía sau**. Trường dữ liệu không được bỏ trống, người dùng phải nhập dữ liệu trước khi có thể lưu thông tin.
- Định dạng ngày giờ sẽ theo mẫu YYYY/MM/DD HH:mm:ss.

Phần **Ô nhập/chọn dữ liệu** cho phép người dùng nhập hoặc chọn dữ liệu theo mong muốn của họ.

Ngoài ra, một số trường sẽ có **giới hạn ký tự**, và chỉ cho phép một số ký tự nhất định.

Ví dụ, một trường có thể giới hạn là 0/50, nghĩa là người dùng không thể nhập thêm ký tự thứ 51 và sau đó.

![](/images/dai/limit-text.png)

Dữ liệu người dùng đôi khi cần được xác thực để đảm bảo hợp lệ, khi dữ liệu người dùng nhập không hợp lệ sẽ có **thông báo lỗi màu đỏ** hiển thị ngay phía dưới.

Việc xác thực dữ liệu người dùng là cần thiết để đảm bảo tính hợp lệ. Trong trường hợp dữ liệu người dùng nhập không hợp lệ, hệ thống sẽ hiển thị **thông báo lỗi màu đỏ** ngay bên dưới.

Nội dung của thông báo lỗi sẽ thay đổi tùy thuộc vào từng trường hợp cụ thể. Dưới đây là ví dụ về một số loại thông báo khác:

![](/images/dai/error-empty.png)

_Hình 1. Lỗi bỏ trống trường_

![](/images/dai/error-invalid.png)

_Hình 2. Lỗi nhập ký tự không hợp lệ_

![](/images/dai/error-invalid-link.png)

_Hình 3. Lỗi nhập không đúng định dạng_

## Submit dữ liệu

### Thực hiện tác vụ thành công

Khi người dùng xác nhận lưu trữ dữ liệu trong biểu mẫu bằng cách nhấn nút **Lưu**, hệ thống sẽ thực hiện tác vụ và sau đó thông báo kết quả cho người dùng.

Nếu tác vụ được thực hiện thành công, sẽ hiển thị một thông báo ở phía trên của màn hình trình duyệt với các đặc điểm sau:

- Tiêu đề: Hiển thị câu lệnh và chi tiết (không bắt buộc).
- Nền màu: màu xanh lá
- Biểu tượng:
  - Icon dấu tick màu xanh lá - phía trước: đánh dấu thông báo.
  - Biểu tượng X: Nhấp vào đây để đóng thông báo ngay lập tức.

Hiển thị trong vòng 5 giây và tự động biến mất sau khi đã **thực hiện lệnh**.

### Thực hiện tác vụ không thành công

Nếu tác vụ không thành công, sẽ hiển thị một thông báo màu đỏ, kèm theo nội dung lỗi ở phía trên của màn hình trình duyệt. Nội dung lỗi sẽ thay đổi tùy theo từng trường hợp lỗi cụ thể.

![](/images/dai/error-500.png)

_Hình 4. Lỗi hệ thống_

- Tiêu đề: ghi rõ lí do không hợp lệ.
- Nền màu: màu đỏ
- Biểu tượng:
  - Biểu tượng X:- phía trước: đánh dấu thông báo.
  - Biểu tượng X: Nhấp vào đây để đóng thông báo ngay lập tức.

Hiển thị trong vòng 5 giây và tự động biến mất- hệ thống **không thực hiện lệnh**.
