---
title: Tạo công việc (job)
order: 1
---

# Tạo mới job VOD

Để tạo mới một video VOD, người dùng cần khởi tạo một công việc mới (job) theo các bước sau:

1. Truy cập vào trang quản lý Video on Demand (VOD).
2. Hiển thị trang danh sách các công việc mặc định.
3. Click vào nút "Thêm mới" để bắt đầu tạo công việc.
4. Chuyển đến trang Tạo mới Job.

## Bước 1: Chọn máy chủ

Trong phạm vi sử dụng máy chủ và không sử dụng dịch vụ đám mây (cloud). Người dùng cần chọn máy chủ để thực hiện công việc.

![Step1](/images/media-vod/job-management/create-step-1.png)

Sau khi chọn máy chủ, đánh dấu máy chủ được chọn và hiển thị bước thứ 2.

## Bước 2: Tạo đầu vào
Trong quy trình chuyển mã video của luồng tạo mới một công việc (job) để xử lý video, đầu vào (video VOD) là nguồn video gốc cần xử lý. Định dạng của đầu vào có thể là MP4 (MPEG-4), MP3 (MPEG-3), HLS (HTTP Live Streaming) hoặc DASH (Dynamic Adaptive Streaming over HTTP).

![Step2](/images/media-vod/job-management/create-step-2.png)

Các tùy chọn đầu vào được hỗ trợ bao gồm:

![input-machine](/images/media-vod/job-management/input-machine.png)

- Chọn file từ máy khách (local): hiển thị pop-up các file trong máy khách (local) khi click vào lựa chọn
    - Hiển thị thông tin liên quan về file như tên file, định dạng, kích thước, và thời gian tạo hoặc chỉnh sửa gần nhất.
    - Không giới hạn kích thước file.
    - Chỉ chọn 1 file với các định dạng phổ biến như tệp âm thanh (MP3) hoặc tệp video (MP4). Và đánh dấu file đang chọn.

![input-library](/images/media-vod/job-management/input-library.png)

- Chọn asset từ thư viện: hiển thị cửa sổ lựa chọn asset từ thư viện của hệ thống.
    - **Loại asset**: audio và video
    - **Thông tin cơ bản**: tên, định dạng, thời lượng và hình ảnh đại diện được hiển thị.
    - Có thể tìm kiếm và lọc
    - Người dùng có thể xem trước asset trước khi chọn làm đầu vào giúp người dùng đảm bảo rằng họ chọn đúng asset phù hợp với nhu cầu của mình.

![input-video-url](/images/media-vod/job-management/input-video-url.png)

- Cung cấp một đường dẫn từ bên thứ ba: sau khi nhập đưỡng dẫn hợp lệ, hiển thị đường dẫn, hover hiển thị thông tin cơ bản: 
    - **Type**: Video/audio
    - **Media container formats**: MPEG-4 (MP4), QuickTime Movie (MOV),…
    - **Codec**: H265, H264, AV1, VP9, VP8
    - **Bitrate**: tốc độ dữ liệu của một luồng âm thanh hoặc video.
    - **Resulotion**: Width x Height
    - **FPS**: số lượng khung hình (frames) được hiển thị trong mỗi giây khi phát lại một video.

- Sử dụng video mẫu có sẵn trong hệ thống: mặc định mặc định VOD đầu tiên. Các thông tin của video mẫu:
    - **Tên video**
    - **Resulotion**: Width x Height
    - **FPS**: số lượng khung hình (frames) được hiển thị trong mỗi giây khi phát lại một video.
    - **Codec**: H265, H264, AV1, VP9, VP8

Sau khi người dùng đã lựa chọn đầu vào, hệ thống quay trở lại màn hình tạo mới để thực hiện các bước tiếp theo. Hệ thống đánh dấu loại đầu vào, các tùy chọn không được chọn sẽ tự động ẩn đi.

## Bước 3: Chọn đầu ra( destination)

Tiếp theo, người dùng sẽ được dẫn sang bước tiếp theo trong quá trình, chọn điểm đích (destination) để lưu trữ job VOD. 

![Step3](/images/media-vod/job-management/create-step-3.png)

Hỗ trợ các luồng đầu ra:

- Lưu vào folder ở máy chủ
    - Hiển thị thông tin về folder như tên folder, định dạng, kích thước, và thời gian chỉnh sửa gần nhất.
    - Không giới hạn kích thước folder.

- Lưu tại thư viện

- Lưu vào bên thứ 3: hỗ trợ FTP, Generic S3
    - Mặc định hiển thị ở FTP với các thông tin:
        - **Host**: địa chỉ IP.
        - **Port**: với máy sử dụng nhiều dịch vụ, port để phân biệt chúng.
        - **Username**: Tên tài khoản đăng nhập.
        - **Password**: mật khẩu đăng nhập.
    - Chuyển tab sang Generic S3:
        - **Bucket name**: Tên của thùng( bucket) chứa các tệp.
        - **Endpoint**: URL endpoint để truy cập vào S3.
        - **Access key ID**: ID Khóa truy cập (tên người dùng) cho phép truy cập vào S3
        - **Secret access key**: Mật khẩu được liên kết với ID khóa truy cập( Access key ID) cho phép truy cập vào S3.
        - **Region**: vị trí lưu trữ trung tâm dữ liệu.
        - **Public permission**.

Sau khi người dùng đã lựa chọn đầu ra, hệ thống quay trở lại màn hình tạo mới để thực hiện các bước tiếp theo. Hệ thống đánh dấu loại đầu ra. Cho phép chỉnh sửa hoặc xoá lựa chọn.

## Bước 4: Cấu hình job

Tiếp theo, người dùng sẽ được dẫn sang bước cuối cùng trong quá trình, cấu hình thông tin job. 

Hiển thị mặc định là danh sách các profile với trạng thái chưa áp dụng bất kỳ mẫu (template) nào. Nút Tạo công việc (Create job) không thể sử dụng.

Để tiết kiệm thời gian, người dùng có thể lựa chọn một trong những mẫu cấu hình có sẵn hoặc tùy chỉnh và tạo mới thông tin cho chính họ. Điều này giúp tối ưu hóa quy trình và tạo ra các công việc hoặc tác vụ dễ dàng và hiệu quả hơn.



