---
title: Xem danh sách đầu vào
order: 2
---


# Xem danh sách đầu vào

Giao diện danh sách đầu vào là một phần quan trọng trong việc quản lí đầu vào trên hệ thống. Giao diện trong danh sách bao gồm các thông tin cơ bản về đầu vào loại Transcode và đầu vào loại Package như ID, tên, loại,... và cho phép tìm kếm, giúp người quản trị viên quản lý đầu vào có cái nhìn tổng quan.

Trên màn hình chính của hệ thống, người dùng lựa chọn Inputs ở tab header.

Màn hình chính hệ thống hiển thị mặc định tab Transcode, với giao diện màn hình danh sách đầu vào loại Transcode. Người dùng có thể chọn tab Package để xem danh sách đầu vào với loại là Package.

![danh sách đầu vào](../images//images/view-transcode-input-list.png)

Các thông tin chính bao gồm:

| Tên cột                | Chức năng                                                    |
| ---------------------- | ------------------------------------------------------------ |
| **ID**                 | Sau khi người dùng tạo mới đầu vào (Transcode/Package, hệ thống sinh ra ID riêng cho mỗi đầu vào với mục đích nhận diện. |
| **Tên**                | Tên của đầu vào (do người dùng CMS cấu hình)                 |
| **Loại**               | Loại của đầu vào                                             |
| **Lớp**                | Chế độ nguồn đầu vào: single, redundancy                     |
| **Máy**                | Bấm vào để hiển thị thông tin chi tiết của Máy được gán đầu vào |
| **Nguồn**              | Thông tin nguồn của đầu vào                                  |
| **Mô tả**              | Mô tả của đầu vào                                            |
| **Thời gian tạo**      | Thời gian thêm thành công đầu vào                            |
| **Thời gian cập nhật** | Thời gian cập nhật gần nhất của đầu vào (được sắp xếp mặc định hiển thị lên đầu trang với đầu vào được cập nhật mới nhất) |
| **Hành động**          | ***Tạo bản sao:*** Tạo nhanh 1 bản sao với thông tin bắt buộc được cấu hình sẵn.<br/>***Chỉnh sửa:*** Cho phép người dùng chỉnh sửa các thông tin của đầu vào đã tạo (Transcode/Package)<br/>***Xoá:*** Cho phép người dùng CMS thực hiện xoá đầu vào (Transcode/Package) |

- Các nút khác

| Tên nút                | Chức năng                                                    |
| ---------------------- | ------------------------------------------------------------ |
| **Icon đồng bộ**       | Góc phải bên dưới giao diện, luôn thực hiện đồng bộ hệ thống liên tục trong 10s |
| Icon **Phân trang**    | Bao gồm các thông tin: Tổng số trang, lựa chọn số items/1 trang (mặc định 10 items/1 trang), trang hiện tại, nhảy tới trang mong muốn tìm kiếm. |
| **Quick filter**       | Bộ lọc nhanh hỗ trợ tìm kiếm thông tin gồm: Máy và Tên (đầu vào) |
| Nút **Lọc**            | Thực hiện lọc các thông tin chi tiết hơn.                    |
