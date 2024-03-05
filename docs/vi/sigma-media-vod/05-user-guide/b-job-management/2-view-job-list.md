---
title: Xem danh sách công việc (job)
order: 2
---

# Xem danh sách công việc (job)

Giao diện danh sách công việc (job) là một phần quan trọng trong việc quản lý nội dung. Giao diện trong danh sách bao gồm các thông tin cơ bản về kênh như ID, tên, trạng thái, tình trạng,... và cho phép tìm kếm, giúp người quản trị viên có cái nhìn tổng quan.

Trên màn hình chính của hệ thống, người dùng di chuyển con trỏ chuột vào **VOD** trên tab sidebar

Màn hình chính hệ thống hiển thị giao diện màn hình danh sách công việc (job), với các thông tin chính bao gồm:

![Danh sách công việc](/images/media-vod/job-management/view-job-list.png)

| Tên cột                         | Chức năng                                                    |
| ------------------------------- | ------------------------------------------------------------ |
| **ID**                          | Sau khi người dùng tạo mới job, hệ thống sinh ra ID riêng cho mỗi job với mục đích nhận diện. <br/>Hiển thị dưới dạng nút, cho phép hover để xem ID và bấm vào để sao chép |
| **Tên**                         | Tên của tệp đầu vào                                          |
| **Tiến độ mã hóa**              | Tiến độ thực hiện của quá trình chuyển mã                    |
| **Trạng thái**                  | Trạng thái của job, bao gồm: ***Created, Queued, Encoding, Completed, Error***<br/>- Created: Job sẽ ở trạng thái này ngay sau khi bấm nút "Tạo job"<br/>- Queued: sau đó job sẽ chuyển sang trạng thái chờ quá trình chuyển mã<br/>- Encoding: job đang ở trạng thái chuyển mã<br/>- Completed: kết thúc quá trình chuyển mã, hoàn thành quá trình tạo job<br/>- Error: Phát sinh lỗi trong quá trình chuyển mã |
| **Thời gian chuyển mã**         | Tổng thời gian chuyển mã của tệp đầu vào                     |
| **Thời gian chuyển mã còn lại** | Thời gian chuyển mã còn lại của tệp đầu vào                  |
| **Kích cỡ**                     | Kích cỡ của tệp đầu vào                                      |
| **Máy**                         | Máy đang được chỉ định thực hiện job                         |
| **Thời gian tạo**               | Thời gian khởi tạo job                                       |
| **Hành động**                   | ***Thử lại job:*** Cho phép người dùng khởi động lại quá trình chuyển mã khi job có lỗi .<br/>***Nhân bản job:*** Cho phép người dùng tạo ra một bản sao job mới<br/>***Xoá job:*** Cho phép người dùng CMS thực hiện xoá job |

- Các nút khác

| Tên nút             | Chức năng                                                    |
| ------------------- | ------------------------------------------------------------ |
| **Icon đồng bộ**    | Góc phải bên dưới giao diện, luôn thực hiện đồng bộ hệ thống liên tục trong 10s |
| Icon **Phân trang** | Bao gồm các thông tin: Tổng số trang, lựa chọn số items/1 trang (mặc định 10 items/1 trang), trang hiện tại, nhảy tới trang mong muốn tìm kiếm. |
| **Quick filter**    | Bộ lọc nhanh hỗ trợ tìm kiếm thông tin gồm: Máy, Trạng thái, JobID, Tên |
| Nút **Lọc**         | Thực hiện lọc các thông tin chi tiết hơn.                    |