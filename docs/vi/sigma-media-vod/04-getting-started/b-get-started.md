---
title: Bắt đầu với Media Video On Demand (Media VOD)
order: 2
---



# Bắt đầu với Media Video On Demand (Media VOD)

## Thiết lập công việc (job)

Để thiết lập job, bạn cần chuẩn bị các tác vụ sau:
* Thiết lập hoạt động của máy chủ
* Chuẩn bị luồng đầu vào
* Xác định điểm đến của luồng đầu ra
* Thiết lập cấu hình job theo mong muốn 
* Tạo công việc (job)

Sau khi hoàn tất, bạn có thể tạo job thành công trong Sigma Media VOD. Bên cạnh đó, bạn có thể thực hiện lưu lại cấu hình của job thành **bản mẫu** để tiết kiệm thời gian cho lần tiếp theo.

## Chuẩn bị

Trước khi bắt đầu, bạn cần chuẩn bị các tác vụ sau:
- Có tài khoản truy cập hệ thống quản lý của **Sigma Streaming Platform** `https://portal.sigmaott.com`
- Tài khoản có quyền truy cập app được phân quyền với Media VOD




## Bước 1: Truy cập vào hệ thống Sigma Media VOD

Để sử dụng , bạn cần có tài khoản và quyền truy cập, xem và thực hiện các hành động được phép.
1. Truy cập vào đường link `https://portal.sigmaott.com/app`
2. Hiển thị Danh sách App, **chọn ứng dụng** cần truy cập.
3. Hiển thị mặc định vào trang **tổng quan ứng dụng.**
4. Ở sidebar, chọn sản phẩm Media VOD.
5. Hiển thị trang mặc định ở Trang Dashboard (cung cấp cái nhìn tổng quan về tình trạng hoạt động, thống kê, và thông tin quan trọng khác khi sử dụng sản phẩm).


## Bước 2: Chuẩn bị máy chủ

Đảm bảo rằng trong quá trình bạn sử dụng, máy chủ phải đang trong trạng thái hoạt động

Nếu bạn chưa kích hoạt cho hoạt động của máy chủ, bạn nên thực hiện cài đặt máy trên máy của bạn (local)
1. Tại sidebar, chọn mục Server
2. Chọn tab trên header mục **Sigma VOD Server**
3. Hiển thị danh sách máy chủ VOD, **chọn thêm máy chủ**
4. Hiển thị thông tin cài đặt máy, trong đó bao gồm Registation Token
5. Sao chép `Registation Token` và thực hiện cài máy trên máy của bạn (local)
6. Máy được cài đặt thành công hiển thị lên đầu danh sách máy

## Bước 3: Chuẩn bị luồng đầu vào

Hệ thống cho phép hỗ trợ các luồng đầu vào, bao gồm
* File từ máy của bạn
* Trên Thư viện (Library) của hệ thống
* Đường dẫn từ bên thứ 3
* Video mẫu có trên hệ thống

### File đầu vào từ máy của bạn

Hệ thống cho phép lựa chọn file đầu vào từ máy của bạn, chấp nhận với các định dạng file media live như `tệp âm thanh (MP3)` , `tệp video (MP4)` ` HLS (HTTP Live Streaming)`hoặc `DASH (Dynamic Adaptive Streaming over HTTP)`.

Hệ thống hiển thị thông tin liên quan về file như tên file, định dạng, kích thước, và thời gian tạo hoặc chỉnh sửa gần nhất.


### Trên Thư viện (Library) của hệ thống

Hệ thống cung cấp Thư viện (Library) có sẵn, bạn có thể lựa chọn **asset audio và video**

Các thông tin về mỗi asset như tên, định dạng, thời lượng và hình ảnh đại diện được hiển thị. 

Cho phép bạn xem trước các asset audio và video trước khi chọn làm đầu vào, giúp đảm bảo rằng bạn chọn đúng asset phù hợp với nhu cầu.


### Đường dẫn từ bên thứ 3

Nếu những file đầu vào từ máy hoặc những video trên thư viện của hệ thống chưa phù hợp với nhu cầu của bạn, bạn có thể sử dụng đường dẫn video từ bên thứ 3.

Hệ thống chỉ hỗ trợ **đường dẫn URL http hoặc http(s)**

Ví dụ:

```
http://example.com/video.mp4
```

### Video mẫu có trên hệ thống

Ngoài những lựa chọn trên, hệ thống cung cấp cho bạn những video mẫu, hiển thị những thông tin liên quan đến video (như tên video, độ phân giải, thời lượng,...) giúp bạn có thể có thể đưa ra lựa chọn dễ dàng và phù hợp hơn.
Ví dụ:
```
pexels-yaroslav-shuraev-6985325 (2160p).mp4
Resolution: 3840x2160
Duration: 00:00:14
Type: video
Format: mp4
Codec: h265
FPS: 23.98
```
## Bước 4: Xác định điểm đến của luồng đầu ra

Sau quá trình xử lý chuyển mã luồng đầu vào (video), bạn nên xác định điểm đến để lưu trữ luồng đầu ra (video đã được chuyển mã), hệ thống hỗ trợ điểm đến luồng đầu ra:
* Lưu tại folder tại máy của bạn
* Lưu tại Thư viện (Library) của hệ thống
* Lưu tại bên thứ 3

### Lưu tại folder tại máy của bạn

Sau quá trình xử lý chuyển mã luồng đầu vào (video), bạn có thể lưu tại thư mục trên máy của bạn. 

### Lưu tại bên thứ 3

Hệ thống hỗ trợ lưu tại bên thứ 3 như **FTP(S)** và **Generic S3**

Đối với bên thứ 3 là **FPT(S)**, bạn nên chuẩn bị những thông tin liên quan như:
* ***Host***: Địa chỉ IP

Ví dụ:
```
192.168.1.100
```

* ***Port***: với máy sử dụng nhiều dịch vụ, port để phân biệt.

Ví dụ:
```
8080
```

* ***Username***: Tên tài khoản đăng nhập

Ví dụ:
```
testvod@example.com
```
* ***Password***: mật khẩu đăng nhập

Ví dụ:
```
1234567890
```

Đối với bên thứ 3 là **Generic S3**, bạn nên chuẩn bị những thông tin liên quan như:

- ***Bucket name***: Tên của thùng( bucket) chứa các tệp.

Ví dụ:
```
default-app
```

- ***Endpoint***: URL endpoint để truy cập vào S3

Ví dụ:
```
http://172.16.20.89:9000
```

- ***Access key ID***: ID Khóa truy cập (tên người dùng) cho phép truy cập vào S3.

Ví dụ:
```
jpPANVUDd9
```

- ***Secret access key***: Mật khẩu được liên kết với ID khóa truy cập (Access key ID) cho phép truy cập vào S3.

Ví dụ:
```
GInrJ4Tn9RcD1aHS3zxMsVpqXoP6Jaa0t8Y7Ai3Q
```

- ***Public permission*** (không bắt buộc)


## Bước 5: Thiết lập cấu hình job

Bạn có thể chọn template cấu hình có sẵn, hoặc tùy chỉnh cấu hình. Bạn cần chuẩn bị những thông tin sau để có thể hoàn thành bước thiết lập cấu hình job nhanh chóng và dễ dàng hơn

- Các thông tin liên quan đến profile: [Xem thêm](../../sigma-media-live/05-user-guide/h-profile/1-create-profile.md)

- Các thông tin liên quan đến target: [Xem thêm](../05-user-guide/b-job-management/1-create-job#tuỳ-chỉnh-cấu-hình)


### Các thông tin liên quan đến profile

Hệ thống hiển thị mặc định 6 profile gồm **1080, 720, 480, 360, 240, 144**

Bạn có thể thêm profile bằng cách chọn nút `Thêm profile`, hệ thống sẽ hiển thị popup bao gồm những thông tin để bạn thiết lập profile bao gồm: thông tin kĩ thuật về **Video, Audio, Watermark**

Xem thêm [mối quan hệ giữa profile và watermark](../05-user-guide/b-job-management/1-create-job#tuỳ-chỉnh-cấu-hình).

### Các thông tin liên quan đến target

1. Chọn định dạng đầu ra: HLS
2. Cấu hình HLS
- Thông tin:
    - **Tên**: hls-0p trong đó
        - hls- định dạng
        - 0p-hệ thống random kí tự
    - **Định dạng**: hHLS
    - **Container**: mpeg-ts
    - **Counter**: 4
    - **TS**: 6
    - **Thời gian**: tắt.
    - **Danh sách phát**: tắt.

- DRM: bật chế độ DRM
    - **Key provider**: sigma-drm
    - **Asset ID**: 
    - **Environment**: product
    - **DRM Credentials**: chọn DRM-test

- Trick play: bật chế độ trick play, người dùng được phép cấu hình các thông tin hiển thị thumbnail:
    - **Width**: 50
    - **Delay**: 2
    - **Col( column)**: 2
    - **Row**: 2

- **Subtitle**: Không cấu hình

- Chọn profile: chọn profile tất cả trong danh sách profile đã cấu hình. 

[Xem thông tin target](../05-user-guide/b-job-management/1-create-job#tuỳ-chỉnh-cấu-hình)

## Bước 6: Tạo công việc (job)

Sau khi hoàn thành các bước trên, bạn có thể chọn nút **“Tạo job”** để hệ thống chuyển mã video của bạn. Bên cạnh đó, Sigma Media VOD còn hỗ trợ bạn có thể **lưu Bản mẫu** bao gồm các thông tin cấu hình job, để bạn có thể tiết kiệm thời gian cho lần tiếp theo.

## Bước 7: Xoá công việc (job)

Khi bạn đã tạo và khởi chạy công việc (job). Sau đó, job hoàn thành( trạng thái Complete) hoặc quá trình xảy ra lỗi( trạng thái Error) để đóng các job không cần thiết, bạn cần thực hiện thao tác xoá job như sau:

1. Trên giao diện danh sách job, hãy chọn công việc (job) mà bạn muốn xoá, và sau đó nhấp vào icon ``Xoá``.
2. Một hộp thoại xác nhận sẽ xuất hiện. Hãy chọn nút **Xác nhận** để tiếp tục.
3. Hệ thống sẽ thực hiện xoá công việc (job) và bạn sẽ trở về giao diện danh sách công việc (job) sau khi hoàn thành quá trình xoá.