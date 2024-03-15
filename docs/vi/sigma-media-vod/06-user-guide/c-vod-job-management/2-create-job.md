---
title: Tạo công việc (job)
order: 2
---

# Tạo công việc (job)
Tạo một công việc (job) từ video thành Video on Demand (VOD) là quá trình transcode video để tối ưu hóa cho streaming trực tuyến, thiết bị di động, bảo mật, quản lý nội dung, đa nền tảng, hoặc quảng cáo. 
## Tổng quan về chức năng
Chức năng tạo một công việc (job) cho phép bạn: 
- Quản lý và tổ chức nội dung video từ nhiều nguồn khác nhau.
- Bật Per-Title Encoding- một tính năng nâng cao giúp tối ưu hóa tốc độ bit của video dựa trên nội dung của từng tiêu đề mang lại chất lượng video tốt hơn và giảm mức sử dụng băng thông, nâng cao trải nghiệm của người xem, đặc biệt đối với các nền tảng có nội dung video đa dạng. 
- Cấu hình chung cho tất cả profile trong video on demand giúp bảo vệ bản quyền, tăng tính chuyên nghiệp và giá trị thương hiệu của video, cũng như ngăn chặn việc sửa đổi hoặc sao chép không được phép.
- Chuyển mã âm thanh và video nguồn thành định dạng **DASH, HLS, Multiple-mp4, Mp4, Mp3** để phát lại trên nhiều loại thiết bị. 
- Điều chỉnh tốc độ bit đầu ra cho phù hợp với các băng thông mạng khác nhau.
- Tùy chỉnh các mẫu chuyển mã, chẳng hạn như loại chuyển mã, tốc độ bit video, độ phân giải, tốc độ khung hình. 

## Lưu ý
Sử dụng máy chủ và không sử dụng dịch vụ đám mây (cloud). 

## Luồng
Quá trình tạo job người dùng cần thực hiện

![flow-create-job](/images/media-vod/job-management/flow-create-job.png)

## Tạo mới công việc (job)
Để tạo mới một video VOD, người dùng cần khởi tạo một công việc mới (job) theo các bước sau:

1. Truy cập vào trang quản lý sigma VOD (Video on Demand).
2. Hiển thị trang danh sách các công việc.
3. Nhấp vào nút ``Thêm mới`` để bắt đầu tạo công việc.
4. Chuyển đến trang Tạo mới Job.

### Bước 1: Chọn máy chủ

Sử dụng máy chủ và không sử dụng dịch vụ đám mây (cloud). Người dùng cần chọn máy chủ để thực hiện công việc.

![Step1](/images/media-vod/job-management/create-step-1.png)

Sau khi chọn máy chủ, đánh dấu máy chủ được chọn và hiển thị bước 2.

### Bước 2: Chọn đầu vào
Trong quy trình chuyển mã video của luồng tạo mới một công việc (job) để xử lý video, đầu vào (video VOD) là nguồn video gốc cần xử lý. Định dạng của đầu vào là MP4 (MPEG-4), MP3 (MPEG-3), HLS (HTTP Live Streaming) hoặc DASH (Dynamic Adaptive Streaming over HTTP).
1. Nhập vào thẻ đầu vào 
Hỗ trợ các loại đầu vào:
- Asset từ thư viện
- File trong máy khách
- Cung cấp một đường dẫn từ bên thứ ba
- Sử dụng video mẫu có sẵn trong hệ thống
2. Hiển thị pop-up tương ứng.
3. Hệ thống quay trở lại màn hình tạo mới để thực hiện các bước tiếp theo. Hệ thống đánh dấu loại đầu vào, các tùy chọn không được chọn sẽ tự động ẩn đi.

### Bước 3: Chọn đầu ra( destination)
Tiếp theo, người dùng sẽ được dẫn sang bước tiếp theo trong quá trình, chọn điểm đích (destination) để lưu trữ job VOD.

Hỗ trợ các loại đầu ra:
- Lưu vào folder ở máy chủ
- Lưu vào bên thứ 3: hỗ trợ FTP, Generic S3

Sau khi người dùng đã lựa chọn đầu ra, hệ thống quay trở lại màn hình tạo mới để thực hiện các bước tiếp theo. Hệ thống đánh dấu loại đầu ra. Cho phép chỉnh sửa hoặc xoá lựa chọn.

## Bước 4: Cấu hình job
Tiếp theo, người dùng sẽ được dẫn sang bước cuối cùng trong quá trình, cấu hình thông tin job. 
Hiển thị mặc định là danh sách các profile với trạng thái chưa áp dụng bất kỳ mẫu (template) nào. Nút Tạo công việc (Create job) không thể sử dụng.

![default](/images/media-vod/job-management/config-default.png)

- Cấu hình profile chung: Chưa có dữ liệu.
- Per-Title Encoding: đang tắt,  tính năng làm giảm kích thước tệp bằng cách tối ưu hóa từng khung hình mà không làm giảm chất lượng video, giúp cải thiện 70% thời gian tải cũng như giảm chi phí lưu trữ và băng thông.
- Nút ``cấu hình mặc định``: xoá data do người dùng cấu hình profile, hiển thị prodile mặc định
- Danh sách profile mặc định gồm: 1080, 720, 480, 360, 240, 144
( cho phép sửa, xoá.)
- Cấu hình mục tiêu

Lựa chọn thao tác:
- Chọn cấu hình mẫu
- Tuỳ chỉnh cấu hình 

### Thiết lập cấu hình chung profile( không bắt buộc)

Đây là thao tác không bắt buộc phải thực hiện, giới hạn 5 Watermark được thêm tại cấu hình chung và cấu hình mỗi profile. 

Chọn cấu hình chung profile ở đầu mục, hiển thị cửa sổ:

![general-profile-config](/images/media-vod/job-management/general-profile-config.png)

- **cấu hình Watermark** (mục bắt buộc)
-  **cấu hình Audio Watermark** (không bắt buộc)

Sau khi thiết lập cấu hình chung của profile, mỗi profile được người dùng lựa chọn **mặc định** sẽ áp dụng cấu hình chung đã được thiết lập.

- Đối với mỗi profile, người dùng **Bật watermark** thì khi tạo job hệ thống sẽ ghi nhận xử lí **[cấu hình chung profile + cấu hình riêng của profile]**
- Đối với trường hợp người dùng disable watermark trong cấu hình mỗi profile, thì khi tạo job hệ thống sẽ chỉ ghi nhận **cấu hình chung của profile**

## Bước 5: Tạo job
Khi đã hoàn tất cấu hình các bước trước đó, người dùng nhấn vào nút ``Tạo job``. Hệ thống sẽ tiến hành tạo job và sau đó hiển thị người dùng trở lại danh sách các job. 

![flow-transcode](/images/media-vod/job-management/flow-transcode.png)

Job mới vừa được tạo sẽ được hiển thị ở đầu trang để dễ dàng theo dõi và quản lý.