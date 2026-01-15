---
title: 'Config Transcode Channel with VPU' 
order: 1 
---

# {{ $frontmatter.title }}

## Bước 1: Truy cập hệ thống

1.  Đăng nhập vào **Sigma Media Live Dashboard**.
2.  Trên thanh menu, chọn **Channels** > **Transcode Channels**.

## Bước 2: Khởi tạo kênh

1.  Nhấn nút **+ Add** (màu xanh lá) ở góc trên bên phải màn hình.
2.  Tại phần **Select Creation Method**, chọn **Manual**.


## Bước 3: Cấu hình thông tin (Tab Config)

Tại tab **Config**, điền các thông tin định danh bắt buộc:

* **Name**: Nhập tên kênh (Ví dụ: `VPU_Channel`).
* **Name modifier**: Nhập tên phụ để phân biệt (Ví dụ: `VPU`).

## Bước 4: Cấu hình đầu vào (Tab Inputs)

Chuyển sang tab **Inputs**, nhấn **Add input**, và cấu hình theo một trong hai trường hợp sau:

### Trường hợp 1: Tạo Input mới
* Nhập **Name** và **Type**.
* Tại mục **Server Type**, chọn **Sigma Media Server**.
* Tại mục **Server**, chọn **VPU**.

### Trường hợp 2: Sử dụng Input có sẵn
* Chọn một **Input** từ danh sách đang chạy trên server VPU.

::: warning Lưu ý quan trọng
Sau khi chọn hoặc tạo Input (đối với cả hai trường hợp), bạn **bắt buộc** phải thiết lập các tham số sau:
* **Encoder mode**: Chọn **MANUAL**.
* **Video Encoder**: Chọn **QuadraT1U#0**.
:::


## Bước 5: Cấu hình Profile mã hóa (Tab Profiles)

1.  Chọn **+ Add** > **New Profile**.
2.  Nhập **Name** cho profile.
3.  Tại mục **Encoder**: Chọn **NETINT**.

::: tip
Hệ thống sẽ tự động cập nhật **Codec/Preset/Profile** phù hợp khi chọn NETINT.
:::

4.  Nhấn **Submit**.

## Bước 6: Cấu hình đầu ra (Tab Targets)

1.  Chọn **+ Add**, chọn giao thức đầu ra mong muốn (Ví dụ: Hls, Dash...).
2.  Nhấn **Submit**.
3.  Nhập **Name** cho Target.
4.  Tại phần **Profile**, tích chọn vào ô Profile đã tạo ở **Bước 5**.

## Bước 7: Hoàn tất và Kiểm tra

1.  Nhấn nút **Submit** ở góc dưới bên phải màn hình để lưu cấu hình kênh.
2.  Quay lại danh sách **Transcode Channels** và tìm kênh vừa tạo.

> **Kết quả thành công:** Cột **Status** hiển thị trạng thái **Live** (màu xanh lá).