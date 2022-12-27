---
title: Basic Configuration
order: 2
---

# Basic Configuration Guide
## Import Action
A few notes, as well as the general description information when the user is adding additional action, edit the data in form:

In a form that will include multiple data fields, each data field will consist of 2 components: *Title and Automotive/select data*.

Section *header* displays information .Some note the display rules of the program/system:
- Màn hình với các nội dung bắt buộc có dấu **đỏ phía trước**-  trường dữ liệu không được bỏ trống, bắt buộc người dùng phải nhập dữ liệu trước khi lưu thông tin.
- The date is known as YYYY/MM/DD HH:mm:ss.

Section *The data/select* data allows the user to enter/select the desired data.

Hiển thị **giới hạn ký tự** cho phép ở một số trường, ví dụ giới hạn 0/35, không hiển thị ký tự thứ 36.

 ![](..\image\Limit_field.png)

User data can sometimes be authenticated to make sure valid, when the user input is not valid for **, the** red error message is shown below.

![](..\image\error-field1.png)

The error message content depends on each specific case. The following examples include a few other types of notifications:

![](..\image\special_charater.png)

*Hình 1. Lỗi bỏ trống trường*

![](..\image\error_field2.png)

*Hình 2. Lỗi nhập ký tự không hợp lệ*

![](..\image\error_field3.png)

*Hình 3. Lỗi nhập không đúng định dạng*

## Data Submit
When a user performs a confirmation of the stored data in the form by pressing the **Save**. The task execution system and then return the message to the user.

If the task is successful, there will be a notification of the upper end of the browser screen.

![](..\image\notice-create-success.png)

* Title: specify a command + statement (not required)
* Background:
* Icon :white_check_mark:
* Hiển thị lên trong 5s và tự động tắt: Thực hiện lệnh vừa tạo.

If the execs failed, there will be a red message, with a bug content showing the top of the browser screen. Depending on the error case, it is shown with different content.

![](..\image\data-invalid.png)

*Hình 4. Nhập thông tin không hợp lệ*


* Title: We need to specify a reason not to be valid.
* Background: Red
* Icon :x:
* Hiển thị lên trong 5s và tự động tắt: không thực hiện lệnh.

