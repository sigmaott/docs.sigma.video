---
title: 'Xem danh sách nhà phân phối'
order: 2
---



# Xem danh sách nhà phân phối

Đối tượng sử dụng chức năng: Tài khoản CMS được cấp quyền Quản trị viên VTVhub.

Giao diện danh sách nhà phân phối là một phần quan trọng trong hệ thống để quản lý thông tin nhà phân phối và phân quyền của họ với kênh. Giao diện trong danh sách bao gồm các thông tin cơ bản về nhà phân phối như ID, tên nhà phân phối, email của nhà phân phối,... và cho phép tìm kếm giúp Admin VTVhub có cái nhìn tổng quan về từng nhà phân phối.

Truy cập CMS, tại sidebar chọn VTVhub, giao diện danh sách nhà phân phối hiển thị:

![Xem danh sách nhà phân phối](/images/application-vtvhub/view-distributor-list.png)

Trong màn hình chính của hệ thống, bạn sẽ thấy các thông tin được hiển thị trên giao diện bao gồm:


| Tên cột        | Chức năng                                                    |
| -------------- | ------------------------------------------------------------ |
| **ID**         | Sau khi người dùng tạo mới nhà phân phối, hệ thống sinh ra ID riêng cho nhà phân phối với mục đích nhận diện, có thể click để sao chép link. |
| **Secret key** | Mã kết nối bí mật của nhà phân phối, giúp nhà phân phối có thể kết nối với đơn vị sở hữu nội dung (VTV), có thể click để sao chép link. Hệ thống sinh ra mã kết nối bí mật nhằm đảm bảo sự bảo mật khi thực hiện kết nối. |
| **Tên**   | Tên của nhà phân phối. |
| **Email** | Email của nhà phân phối. |
| **Kênh kết nối** | Hiển thị số lượng kênh được kết nối với nhà phân phối. |
| **Khởi tạo** | Thời gian tạo nhà phân phối thành công. |
| **Cập nhật** | (sắp xếp mặc định) hiển thị lên đầu trang với nhà phân phối được cập nhật mới nhất. |
| **Hành động      | **_Chỉnh sửa_**: Cho phép người dùng chỉnh sửa các thông tin của nhà phân phối. <br />**_Xoá_**: Cho phép người dùng thực hiện xoá nhà phân phối. |


* Các nút khác

| Tên nút                | Chức năng                                                    |
| ---------------------- | ------------------------------------------------------------ |
| **Icon đồng bộ**       | Góc phải bên dưới giao diện, luôn thực hiện đồng bộ hệ thống liên tục trong 10s |
| **Footer- chân trang** | 2023@ By Sigma Streaming                                     |
| Icon **Phân trang**           | Bao gồm các thông tin: Tổng số trang, lựa chọn số items/1 trang (mặc định 10 items/1 trang), trang hiện tại, nhảy tới trang mong muốn tìm kiếm. |
| **Quick filter**       | Bộ lọc nhanh hỗ trợ tìm kiếm thông tin gồm: Tên và email. |
| Nút **Lọc**      | Thực hiện lọc theo các trường thông tin: ID, Tên, Email, Khởi tạo và Cập nhật. |
| Nút **Mở rộng** | Khi click nút này, hiển thị kênh kết nối chi tiết bao gồm:  <br />* Kênh LRM   <br />* Luồng kênh |
