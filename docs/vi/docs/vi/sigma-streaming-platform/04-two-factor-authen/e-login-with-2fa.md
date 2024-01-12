---
title: Đăng nhập hệ thống khi bật xác thực hai yếu tố
order: 5
---

# Đăng nhập hệ thống khi bật xác thực hai yếu tố

Chức năng này cho phép người dùng CMS đăng nhập hệ thống khi bật xác thực hai yếu tố. Hệ thống bổ sung thêm một bước xác thực sau khi người dùng đăng nhập chính xác tài khoản và mật khẩu của mình.

**Điều kiện**:

- Có tài khoản và mật khẩu dùng để đăng nhập thành công
- Tài khoản người dùng **BẬT** xác thực hai yếu tố

**Bước 1**: Người dùng ở màn hình đăng nhập của hệ thống gồm các thông tin:

![](../images/../../../images/login-1.png)

- Email: Tên email của người dùng (bắt buộc nhập)
- Mật khẩu: Mật khẩu của tài khoản người dùng (bắt buộc nhập)
- Nút **Đăng nhập**: Hệ thống kiểm tra tài khoản và mật khẩu có trùng khớp thông tin để cho phép người dùng truy cập hệ thống
- Nút **Quên mật khẩu**: khi người dùng bấm nút này, hệ thống chuyển sang màn hình **Quên mật khẩu**
- Nút **Tạo tài khoản mới**: khi người dùng chưa có tài khoản trên hệ thống, bấm vào nút này, hệ thống chuyển sang màn hình **Tạo tài khoản mới**

**Bước 2**: Người dùng nhập email và mật khẩu của tài khoản đã được đăng kí trên hệ thống

**Bước 3**: Người dùng bấm nút **Đăng nhập**, hệ thống kiểm tra thực hiện thông tin người dùng vừa nhập

- Nếu sai thông tin đăng nhập, người dùng cần thực hiện lại bước 2
- Nếu đúng thông tin đăng nhập, chuyển sang bước 4

**Bước 4**: Hệ thống hiển thị màn hình Xác nhận mã đăng nhập

![](../images/../../../images/login-2.png)

yêu cầu người dùng nhập _**mã đăng nhập**_ để hệ thống xác thực tài khoản, cho phép đăng nhập

- **Mã đăng nhập:** là mã xác thực ở ứng dụng xác thực của người dùng hoặc có thể sử dụng mã khôi phục (còn khả dụng)
- Nút **Gửi mã**: hệ thống thực hiện kiểm tra sự chính xác của mã xác thực

**Bước 5**: Người dùng sử dụng mã xác thực hoặc mã khôi phục để nhập

- **Mã xác thực:** người dùng kiểm tra mã đăng nhập được hiển thị ở ứng dụng xác thực.
- **Mã khôi phục:** người dùng thu thập được ở danh sách mã khôi phục.

**Bước 6**: Sau khi hoàn thành, người dùng bấm nút **Gửi mã**, hệ thống thực hiện kiểm tra sự chính xác của mã xác thực.

Nếu đúng, hệ thống cho phép người dùng truy cập hệ thống, hiển thị màn hình danh sách ứng dụng.
