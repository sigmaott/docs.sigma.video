---
title: 'Quản lý kênh FAST'
order: 1
---

# Quản lý kênh FAST

Sigma Playout cho phép các đơn vị truyền thông, đài truyền hình hoặc nền tảng OTT quản lý và vận hành các kênh truyền hình kỹ thuật số (FAST - Free Ad-supported Streaming TV) một cách linh hoạt, tự động và tối ưu. Đây là công cụ cốt lõi trong việc lập lịch phát sóng, điều phối nội dung và giám sát kênh 24/7.


## Xem danh sách các kênh FAST

Giao diện danh sách kênh FAST  là một phần quan trọng trong việc quản lý và vận hành. Giao diện trong danh sách bao gồm các thông tin cơ bản về kênh như ID, tên, trạng thái, tình trạng,... và cho phép tìm kếm, giúp biên tập viên có cái nhìn tổng quan.


**Bước 1:** Tại sidebar menu bên tay trái, người dùng di chuyển con trỏ chuột vào **Product** và chọn **Playout**

Màn hình chính hệ thống hiển thị giao diện Dashboard (theo dõi được tổng quan những thông tin chỉ số liên quan đến Sigma Playout) [Xem chi tiết tại đây](../b-dashboard.md)

**Bước 2:** Người dùng chọn tab `FAST Channels`

Màn hình hiển thị danh sách kênh FAST mặc định với kiểu **xem "List"** với các thông tin chính bao gồm:

![Danh sách](/images/playout/play-channel-list.png)

| Tên cột                       | Chức năng                                                    |
| :---------------------------- | :----------------------------------------------------------- |
| **1. ID**                     | Sau khi người dùng tạo mới kênh, hệ thống sinh ra ID riêng cho mỗi kênh với mục đích nhận diện. |
| **2. Tên**                    | Tên của kênh FAST                                            |
| **3. Trạng thái**             | Trạng thái của kênh, bao gồm: ***Live, Error, Maintenance, Stop, AlternateContent*** |
| **4. Tên máy chủ**            | Hiển thị tên máy chủ (server) được chỉ đích danh để phục vụ cho kênh |
| **5. Thẻ**                    | Các thẻ được gán với kênh                                    |
| **6. Chế độ kênh**            | Chế độ xử lý của server được kênh sử dụng. Hiện có 2 chế độ kênh: **Active-Standby** và **Active-Active**<br/>**Active-Standby:** Là trạng thái một server chịu tải trọng công việc trong khi các nút khác ở trạng thái chờ và không tham gia vào việc xử lý yêu cầu. Khi server chính bị trục trặc, server backup sẽ hoạt động và đảm nhận vai trò của server chính.<br/> **Active-Active**: Là trạng thái hai server hoạt động song song trong một kênh. Có thể cấu hình active-acitve cho kênh sử dụng input là cluster dạng 1+1 hoặc dạng 2 máy độc lập ( 2 máy độc lập này có thể dạng cluster hoặc dạng sigma server tùy ý) |
| **7.  Jobs**                  | Thông tin chi tiết của jobs                                  |
| *6.1. JobID*                  | Sau khi người dùng tạo mới job, hệ thống sinh ra ID riêng cho mỗi job với mục đích nhận diện. |
| *6.2. Loại job*               | Loại job của kênh bao gồm: Transcode, Package, Catchup       |
| *6.3. Trạng thái job*         | Trạng thái của job                                           |
| *6.4. Loại đầu ra*            | Loại đầu ra của job                                          |
| *6.5. Tên đầu ra*             | Tên của đầu ra                                               |
| *6.6. Tin nhắn*               | Thông báo lỗi và mã lỗi của job tương ứng                    |
| *6.7. Đầu vào*                | Đầu vào của job                                              |
| *6.8. Đầu ra*                 | Đầu vào của job                                              |
| *6.9. Tên máy*                | Tên máy được gán                                             |
| *6.10. Tốc độ*                | Tốc độ truyền                                                |
| *6.11. Xem trước*             | Cho phép thực hiện xem trước đối với loại job là Package và loại đầu ra là HLS hoặc DASH |
| *6.12. Hành động đối với job* | Các hành động được phép thực hiện với job tương ứng, bao gồm: **Bắt đầu, Dừng lại, Khởi động lại, Xem nhật ký máy chủ** |
| **Thời gian cập nhật**        | Thời gian cập nhật gần nhất của kênh (được sắp xếp mặc định hiển thị lên đầu trang với đầu vào được cập nhật mới nhất) |
| **Hành động**                 | ***Xem chi tiết chương trình***: Quản lý và vận hành các chương trình của kênh<br/>***Bắt đầu***: cho phép chuyển trạng thái kênh từ **Stop** sang **Live**<br/>**Dừng lại**: cho phép chuyển trạng thái kênh từ **Live** sang **Stop**<br/>Khởi động lại: cho phép chuyển trạng thái kênh từ **Start/Stop/Error** sang **Live**<br/>***Tạo bản sao:*** Tạo nhanh 1 bản sao với thông tin bắt buộc được cấu hình sẵn.<br/>***Chỉnh sửa:*** Cho phép người dùng chỉnh sửa các thông tin của kênh đã tạo<br/>***Xoá:*** Cho phép người dùng CMS thực hiện xoá kênh<br/>***Xem nhật ký máy chủ**:* Xem nhật ký các sự kiện của máy chủ khi được chỉ định đích danh ở kênh |

- Các nút khác

| Tên nút             | Chức năng                                                    |
| :------------------ | :----------------------------------------------------------- |
| **Icon đồng bộ**    | Góc phải bên dưới giao diện, luôn thực hiện đồng bộ hệ thống liên tục trong 10s |
| Icon **Phân trang** | Bao gồm các thông tin: Tổng số trang, lựa chọn số items/1 trang (mặc định 10 items/1 trang), trang hiện tại, nhảy tới trang mong muốn tìm kiếm. |
| **Quick filter**    | Bộ lọc nhanh hỗ trợ tìm kiếm thông tin gồm: Tên (kênh)       |
| Nút **Lọc**         | Thực hiện lọc các thông tin chi tiết hơn.                    |


**Bước 3 (không bắt buộc)**: Chuyển kiểu xem "Grid"

![Ảnh](/images/playout/grid-list.png)

Hệ thống hiển thị màn hình danh sách kênh theo dạng thẻ: Hiển thị các thông tin sau của kênh:

- Hình ảnh thumnail của kênh 
- Trạng thái của kênh
- Tên của kênh
- Và các hành động tác động đến kênh

## Các hành động

### Tạo kênh FAST

Cho phép người dùng khởi tạo một kênh FAST mới với các thông tin cơ bản như tên kênh, mô tả, logo, thông số kỹ thuật và thiết lập ban đầu về lịch phát sóng hoặc nội dung mặc định

[Xem chi tiết tại đây](/docs/vi/sigma-playout/05-user-guide/b-fast-channel/02-create-channel.md)

### Xem thông tin chương trình của kênh FAST

Hiển thị màn hình quản lý và vận hành danh sách các chương trình (nội dung) đã, đang và sắp phát trong lịch trình của kênh (bản biên tập chính thức)

[Xem chi tiết tại đây](/docs/vi/sigma-playout/05-user-guide/c-program-details)

### Xem chi tiết kênh FAST

> [!NOTE]
> Để thực hiện quá trình này, cần phải có ít nhất một kênh đã được tạo trước đó và hiển thị trong danh sách.

1. Tại giao diện Danh sách kênh FAST, nhấn vào `[Tên kênh]` mong muốn xem thông tin chi tiết

2. Hiển thị giao diện chi tiết kênh

![Ảnh](/images/playout/detail-channel.png)

bao gồm: 
- Biểu đồ hoạt động của input (job)
- Thông tin của media: quản lý lịch phát sóng của kênh, thông tin máy chủ phục vụ hoạt động kênh
- Processing: Thông tin của job transcode 
- Mục tiêu (Target): Thông tin của job được tạo ra

[Xem chi tiết tại đây]()

### Chỉnh sửa kênh FAST

Người dùng muốn chỉnh sửa thông tin của kênh với thông tin đã có trước đó 

> [!NOTE]
> Để thực hiện quá trình này, cần phải có ít nhất một kênh đã được tạo trước đó và hiển thị trong danh sách.

**Bước 1:** Tại màn hình danh sách kênh, di chuột vào biểu tượng **ba chấm** ở cột Hành động và chọn **Chỉnh sửa** tại kênh bạn muốn chỉnh sửa

Sau đó hiển thị màn hình thông tin cấu hình kênh với thông tin đã được thiết lập trước đó. **Cho phép** chỉnh sửa tất cả các trường.

**Bước 2:** Người dùng nhập thông tin cần thiết và người dùng nhấn nút **Xác nhận** và chọn 1 trong 2 lựa chọn 

- **Submit:** Chỉ thực hiện chỉnh sửa thông tin kênh, không thực hiện restart kênh
- **Submit & restart:** Thực hiện chỉnh sửa thông tin kênh, đồng thời thực hiện restart kênh

Hệ thống hiển thị thông báo thực hiện **Cập nhật kênh thành công!** ở trên màn hình và tự động đóng thông báo sau 5 giây.

### Nhân bản kênh FAST

Người dùng muốn tạo một bản sao với thông tin đã có trước đó, giữ các cài đặt bắt buộc và thông tin của kênh.

\> [!NOTE]

\> Để thực hiện quá trình này, cần phải có ít nhất một kênh đã được tạo trước đó và hiển thị trong danh sách.

**Bước 1:** Tại màn hình danh sách kênh, di chuột vào biểu tượng **ba chấm** ở cột Hành động và chọn **Nhân bản** tại kênh bạn muốn tạo bản sao

Sau đó hiển thị màn hình thông tin cấu hình kênh với thông tin đã được thiết lập trước đó. **Cho phép** chỉnh sửa tất cả các trường.

**Bước 2:**Người dùng nhập thông tin cần thiết và người dùng nhấn nút **Xác nhận** và chọn 1 trong 2 lựa chọn 

- **Submit:** Chỉ thực hiện chỉnh sửa thông tin kênh, không thực hiện restart kênh
- **Submit & restart:** Thực hiện chỉnh sửa thông tin kênh, đồng thời thực hiện restart kênh

Hệ thống hiển thị thông báo thực hiện **Sao chép kênh thành công** ở góc phải màn hình và tự động đóng thông báo sau 5 giây.

### Xóa kênh FAST

> [!NOTE]
> Để thực hiện quá trình này, cần phải có ít nhất một job đã được tạo trước đó và hiển thị trong danh sách.
>
> Chỉ thực hiện được khi kênh đang ở trạng thái **Stop hoặc Error**

**Bước 1** : Trên màn hình danh sách kênh sự kiện, tại kênh mà bạn muốn xoá, di chuột vào biểu tượng **ba chấm** ở cột Hành động và chọn **Xóa**

Hệ thống sẽ hiển thị một cửa sổ pop-up xác nhận ở trung tâm màn hình

**Bước 2** : Người dùng nhấn nút **Xác nhận** để xoá thông tin kênh FAST

Hệ thống hiển thị một thông báo **Xóa kênh thành công** ở góc phải màn hình và tự động đóng thông báo sau 5 giây.

Đồng thời, hệ thống thực hiện **Xoá toàn bộ thông tin kênh tương ứng**


### Thực hiện Bắt đầu kênh FAST

> [!NOTE]
> Để thực hiện quá trình này, cần phải có ít nhất một kênh đã được tạo trước đó và hiển thị trong danh sách.
>
> Chỉ thực hiện được khi kênh đang ở trạng thái **Stop hoặc Error**

**Bước 1**: Người dùng có 2 lựa chọn để bắt đầu:

- Tại ***màn hình danh sách kênh FAST***, di chuột vào biểu tượng **ba chấm** ở cột Hành động và chọn **Bắt đầu** của kênh muốn thực hiện bắt đầu khởi động
- Tại ***màn hình chi tiết kênh FAST***, bấm vào biểu tượng **Bắt đầu** của kênh muốn thực hiện bắt đầu khởi động

**Bước 2**: Hệ thống sẽ hiển thị một cửa sổ pop-up xác nhận ở trung tâm màn hình

Bước 3: Người dùng nhấn nút **Đồng ý** để thực hiện bắt đầu khởi động kênh

Hệ thống hiển thị một thông báo **Bắt đầu kênh thành công** ở góc phải màn hình và tự động đóng thông báo sau 5 giây.

Đồng thời, hệ thống thực hiện **Bắt đầu kênh FAST** chuyển trạng thái kênh sự kiện thành là **Live**

### Thực hiện Dừng kênh FAST

> [!NOTE]
> Để thực hiện quá trình này, cần phải có ít nhất một kênh đã được tạo trước đó và hiển thị trong danh sách.
>
> Chỉ thực hiện được khi kênh đang ở trạng thái **Live**

**Bước 1**: Người dùng có 2 lựa chọn để bắt đầu:

- Tại ***màn hình danh sách kênh FAST***, di chuột vào biểu tượng **ba chấm** ở cột Hành động và chọn **Dừng** của kênh muốn thực hiện bắt đầu khởi động
- Tại ***màn hình chi tiết kênh FAST***, bấm vào biểu tượng **Dừng** của kênh muốn thực hiện bắt đầu khởi động

**Bước 2**: Hệ thống sẽ hiển thị một cửa sổ pop-up xác nhận ở trung tâm màn hình 

Bước 3: Người dùng nhấn nút **Đồng ý** để thực hiện bắt đầu khởi động kênh

Hệ thống hiển thị một thông báo **Dừng kênh thành công** ở góc phải màn hình và tự động đóng thông báo sau 5 giây.

Đồng thời, hệ thống thực hiện **Dừng kênh FAST** chuyển trạng thái kênh sự kiện thành là **Live**

### Thực hiện Khởi động lại kênh FAST


> [!NOTE]
> Để thực hiện quá trình này, cần phải có ít nhất một kênh đã được tạo trước đó và hiển thị trong danh sách.
>
> Chỉ thực hiện được khi kênh đang ở trạng thái **Live, Stop, Error**

**Bước 1**: Người dùng có 2 lựa chọn để bắt đầu:

- Tại ***màn hình danh sách kênh FAST***, di chuột vào biểu tượng **ba chấm** ở cột Hành động và chọn **Khởi động lại** của kênh muốn thực hiện bắt đầu khởi động
- Tại ***màn hình chi tiết kênh FAST***, bấm vào biểu tượng **Khởi động lại** của kênh muốn thực hiện bắt đầu khởi động

**Bước 2**: Hệ thống sẽ hiển thị một cửa sổ pop-up xác nhận ở trung tâm màn hình 

Bước 3: Người dùng nhấn nút **Đồng ý** để thực hiện bắt đầu khởi động kênh

Hệ thống hiển thị một thông báo **Khởi động lại kênh thành công** ở góc phải màn hình và tự động đóng thông báo sau 5 giây.

Đồng thời, hệ thống thực hiện **Khởi động lại kênh FAST** chuyển trạng thái kênh sự kiện thành là **Live**

