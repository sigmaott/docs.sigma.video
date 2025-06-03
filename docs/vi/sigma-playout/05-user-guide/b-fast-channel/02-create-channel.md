---
title: 'Tạo kênh FAST'
order: 2
---

# Tạo kênh FAST

FAST (Free Ad-supported Streaming TV) là xu hướng phát triển mạnh trong ngành truyền thông OTT, giúp các nhà cung cấp nội dung tối ưu hóa nội dung đã có, mở rộng tiếp cận và tăng nguồn thu mà không cần thuê bao trả phí. Kênh FAST được thiết kế để phát nội dung liên tục theo lịch trình, hỗ trợ quảng cáo và tối ưu hóa trải nghiệm người xem.


## Tổng quan về chức năng

Cho phép người dùng xây dựng và vận hành các kênh truyền hình trực tuyến theo mô hình **FAST (Free Ad-Supported Streaming TV)** – một hình thức phát sóng nội dung liên tục, miễn phí cho người xem, và được hỗ trợ doanh thu qua quảng cáo.

- **Khởi tạo một kênh phát sóng liên tục** với lịch trình cụ thể, không yêu cầu người xem lựa chọn nội dung theo yêu cầu (non-VOD).

- **Tự động hóa phát sóng nội dung** từ thư viện media có sẵn: phim, chương trình, show, trailer,...

- **Tích hợp chèn quảng cáo** theo lịch, hoặc sử dụng giải pháp server-side ad insertion (SSAI) để tối ưu doanh thu.

- **Phát sóng đa nền tảng** qua các giao thức như HLS hoặc RTMP, hỗ trợ CDN để mở rộng phân phối.

- **Hỗ trợ mô hình vận hành theo kênh truyền hình số**, phục vụ nhu cầu:

  - Truyền thông sự kiện

  - Phát sóng nội dung giải trí 24/7

  - Tái sử dụng nội dung VOD dưới dạng phát tuyến tính

  
## Lưu ý

Sử dụng máy chủ và không sử dụng dịch vụ đám mây (cloud).

## Luồng

Quá trình tạo job người dùng cần thực hiện

![Ảnh](/docs/public/images/playout/create-channel-flow.png)

## Tạo mới kênh FAST 

Để tạo mới một kênh FAST, người dùng cần thực hiện theo các bước sau:

1. Truy cập vào sản phẩm Playout và chọn tab `FAST Channels`
2. Hiển thị trang danh sách các kênh.
3. Nhấp vào nút `Thêm` để bắt đầu tạo kênh.
4. Chuyển đến trang Tạo kênh

### Bước 1: Điền thông tin cho mục Information

Nhập đầy đủ các trường thông tin sau:

- **Tên kênh**: Tên kênh
- **Name modifier**: Tên thay thế (là duy nhất trong hệ thống)

- **Timezone**: múi giờ liên quan đến hiển thị thông tin thời gian của kênh

- **Daily and Endless**: chọn chế độ biên tập nội dung của kênh

  - **Daily mode:** các chương trình trong kênh chỉ được phép phát trong phạm vi **cùng một ngày** (thời lượng chương trình sẽ **không được chuyển sang ngày hôm sau**)
  - **Endless mode**: các chương trình trong kênh **có thể được tiếp tục phát sang ngày kế tiếp** nếu chưa kết thúc.

### Bước 2: Điền thông tin cho mục Cấu hình máy chủ

Thiết lập cấu hình cho máy chủ:

- **Chế độ kênh**: Chế độ xử lý của server được kênh sử dụng. Hiện có 2 chế độ kênh: **Active-Standby** và **Active-Active**
  - **Active-Standby:** Là trạng thái một máy chủ chịu tải trọng công việc trong khi các nút khác ở trạng thái chờ và không tham gia vào việc xử lý yêu cầu. Khi máy chủ chính bị trục trặc, máy chủ backup sẽ hoạt động và đảm nhận vai trò của máy chủ chính
  - **Active-Active**: Là trạng thái hai máy chủ hoạt động song song trong một kênh. Có thể cấu hình active-acitve cho kênh sử dụng đầu vào (Input) là cluster dạng 1+1 hoặc dạng 2 máy độc lập (2 máy độc lập này có thể dạng cluster hoặc dạng sigma server tùy ý)
- **Loại máy chủ:** lựa chọn loại máy chủ Sigma Media Server, Sigma Cluster Server
- **Máy chủ**: Chỉ đích danh server hoặc cluster cho hoạt động của kênh
- **Encoder mode**: Lựa chọn chế độ mã hóa cho kênh - dùng phần mềm (CPU) hay phần cứng (GPU).

### Bước 3: Thiết lập cấu hình

Hệ thống hiển thị các thông tin Target (mục tiêu) và Profile (hồ sơ) mặc định

Tại đây người dùng có thể thực hiện submit tạo kênh ngay lập tức

Hoặc, có thể tùy chỉnh thiết cấu hình riêng(cấu hình nâng cao)

[Thiết lập cấu hình kênh](/docs/vi/sigma-playout/05-user-guide/b-fast-channel/03-advanced-config/a-channel-config.md)

[Thiết lập cấu hình Profile](/docs/vi/sigma-playout/05-user-guide/b-fast-channel/03-advanced-config/a-profiles-config.md)

[Thiết lập cấu hình Target](/docs/vi/sigma-playout/05-user-guide/b-fast-channel/03-advanced-config/a-target-config.md)

Sau khi đã thực hiện tùy chỉnh thiết lập, người dùng submit tạo kênh

Kênh mới vừa được tạo sẽ được hiển thị ở đầu trang tại màn hình danh sách để dễ dàng theo dõi và quản lý.

