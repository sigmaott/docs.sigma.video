---
title: 'Quick Start'
order: 1
---

# {{ $frontmatter.title }}

<!-- ## Connect to the Controller

1. Mở trình duyệt web.

2. Nhập đường dẫn truy cập, và nhấn **Enter**.

    

    Ví dụ: Http: **http://[IP-Address]:80/portal**

    **Kết quả**: Trang **đăng nhập** hiện ra, người dùng nhập thông tin đăng nhập vào hệ thống

![login](../images/um-login/main.png){ width=400px }


Sau đó, hệ thống sẽ xử lý thao tác đăng nhập.

- Nếu thành công, điều hướng người dùng về trang **Quản trị** hoặc trang người dùng đã truy cập trước khi bị điều hướng sang trang Đăng nhập.

- Nếu thất bại, hệ thống sẽ hiển thị thông báo lỗi và giữ nguyên giao diện hiện tại của người dùng.


## Thay đổi mật khẩu

Cho phép thực hiện thao tác đổi mật khẩu tài khoản người dùng.

Giao diện form thay đổi mật khẩu

![Change Password](../images/um-change-pwd/main.png)

Thực hiện đổi mật khẩu theo các bước:

1. Nhập giá trị mật khẩu mới vào ô `Password`.
2. Nhập lại giá trị mật khẩu mới một lần nữa vào ô `Re-password` để đảm bảo người dùng không nhập sai mật khẩu mới.

---

::: tip NOTE

Giá trị mật khẩu mới chỉ **hợp lệ** khi thỏa mãn **toàn bộ** những tiêu chí sau:

- Mật khẩu mới phải có độ dài tối thiểu 8 ký tự, chứa các chữ cái a-z, A-Z, chữ số 0-9 và ký tự đặc biệt.
- Giá trị mật khẩu trong hai trường `Password` và `Repassword` phải trùng khớp nhau.

Nếu chỉ một trong các tiêu chí trên không hợp lệ thì sẽ hiển thị thông báo lỗi.

![Message Change Password](../images/um-change-pwd/validation-msg.jpg){ width=400px }

:::

---

Người dùng xác nhận việc thay đổi mật khẩu mới bằng cách nhấn nút `Submit`.

![Submit Button](../images/um-change-pwd/submit-btn.png){ width=300px }

Sau đó, hệ thống sẽ hiện thị thông báo đổi mật khẩu thành công hay thất bại.

- Nếu thành công, hệ thống hiển thị thông báo thành công và điều hướng người dùng về trang **Đăng nhập**.

  ![Success Message](../images/um-change-pwd/success-msg.jpg)

- Nếu thất bại, hệ thống sẽ hiển thị thông báo lỗi và giữ nguyên giao diện hiện tại của người dùng.

  ![Error Message](../images/um-change-pwd/error-msg.jpg) -->


## Cấu hình dịch vụ cơ bản

Đây là hướng dẫn cấu hình dịch vụ ở mức cơ bản nhất không bao gồm các cấu hình nâng cao

Các bước cơ bản:

Bước 1: [Cài đặt luồng tín hiệu](./b-step1.md)

Bước 2: [Tạo mới đầu vào](./c-step2.md)

Bước 3(optional): [Tạo DRM Credential](./d-step3-drm.md)

Bước 4:  [Tạo kênh và chạy kênh mong muốn](./e-step4.md)

Bước 5:  [Quản lý và giám sát kênh](./f-step5.md)

Bước 6:  [Xoá kênh.](./g-step6.md)