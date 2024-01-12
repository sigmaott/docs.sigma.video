---
title: Bật xác thực hai yếu tố cho tài khoản người dùng
order: 1
---

# Bật xác thực hai yếu tố cho tài khoản người dùng

Chức năng này cho phép người dùng CMS bật xác thực hai yếu tố cho tài khoản người dùng, giúp bổ sung thêm một lớp bảo vệ chống lại việc truy cập trái phép và giúp ngăn chặn các hình thức tấn công mạng khác nhau, như lừa đảo và trộm mật khẩu.

**Điều kiện**: 

- Tài khoản người dùng đang **Tắt** xác thực hai yếu tố 
- Người dùng đã cài đặt và có tài khoản của ứng dụng xác thực (Authentication App)

**Bước 1**: Tại sidebar, người dùng nhấn vào tài khoản gmail đăng nhập. Hệ thống hiển thị màn hình **Thông tin người dùng**, người dùng nhấn chuyển sang tab `Cài đặt`

**Bước 2**: Người dùng thực hiện **Bật** xác thực hai yếu tố. Hệ thống hiển thị pop-up **Thiết lập thông qua trình xác thực của bên thứ ba** bao gồm các thông tin:

![Pop-up xác thực](/images/streaming-platform/2-factor-authen/pop-up-verify-config.png)

- **Mã QR code**: mục đích để người dùng quét mã bằng ứng dụng xác thực
- **Mã code**: mục đích để người dùng nhập mã code vào ứng dụng xác thực
- **Nhập mã xác nhận**: người dùng nhập mã xác thực (thấy trên ứng dụng xác thực) vào mục này để hoàn thành việc cấu hình
- Nút **Hủy**: hủy bỏ thực hiện hành động, quay lại màn hình trước đó
- Nút **Hoàn thành**: Xác nhận hoàn thành bước cấu hình

**Bước 3**: Người dùng sử dụng ứng dụng xác thực của mình để **quét mã QR code** hoặc **nhập mã code (ở pop-up)** 

**Bước 4**: Sau khi hoàn thành, tại ứng dụng xác thực hiển thị `Mã xác thực`

Người dùng sử dụng `Mã xác thực` này để nhập vào phần **Nhập mã xác nhận** ở popup 

![Pop-up xác nhận](/images/streaming-platform/2-factor-authen/pop-up-enter-verify-code.png)

**Bước 5**: Sau khi nhập hoàn thành, người dùng nhấn nút **"Hoàn thành"**

Hệ thống sẽ kiểm tra sự đúng đắn của mã xác nhận với ứng dụng xác thực

Nếu kiểm tra mã xác thực đúng, hệ thống sẽ hiển thị thông báo **Chúc mừng! Bạn đã kích hoạt xác thực hai yếu tố!** đồng thời hiển thị pop-up **Mã khôi phục** dành cho tài khoản người dùng 

![Kích hoạt thành công](/images/streaming-platform/2-factor-authen/enable-2FA-user-successful.png)

Với các thông tin chính:

- Danh sách mã khôi phục gồm 10 mã khôi phục. Mỗi 1 mã đều thực hiện được hành động sao chép
- Nút **Sao chép mã**: thực hiện sao chép toàn bộ danh sách mã khôi phục
- Nút **Tạo lại mã khôi phục**: thực hiện tạo danh sách mã khôi phục mới

***<u>Note</u>***: Sau khi bật thành công xác thực hai yếu tố, hệ thống sẽ yêu cầu người dùng xác thực hai yếu tố để có thể đăng nhập thành công ở những lần đăng nhập.