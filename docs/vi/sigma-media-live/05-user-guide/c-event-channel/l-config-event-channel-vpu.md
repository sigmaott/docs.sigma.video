---
title: 'Config Event Channel with VPU' 
order: 2 
---

# {{ $frontmatter.title }}

## 1. Khởi tạo kênh

1.  Từ **Dashboard**, truy cập menu và chọn **Channels** > **Event Channels**.
2.  Tại trang Event Channel, nhấn nút **+ Add** (màu xanh dương) ở góc trên bên phải.

![Thêm kênh Event](/images/sigma-vpu/add-event-channel.png)

## 2. Thiết lập thông tin và Lịch trình (Main Event)

* **Information**: Nhập **Name** (Tên kênh).
* **Main - Event**:
    * Thiết lập thời gian bắt đầu (**Start Main**) và thời gian kết thúc (**End Main**).
    * Tại trường **Inputs**, chọn **INPUT**.
    * Nhấn nút **+ Add** để thêm nguồn tín hiệu.

## 3. Cấu hình Input

Khi cửa sổ **Add Input** xuất hiện, thực hiện như sau:

* **Tạo Input mới (Create New Input)**: Nhập thông tin chi tiết và chọn **Server** là **VPU**.
* **Chọn Input có sẵn (Select Existing Input)**: Chọn một input từ danh sách (đang chạy trên server VPU).

::: warning Yêu cầu cấu hình
Sau khi chọn Input, thiết lập các tham số sau cho cả hai trường hợp:
* **Encoder mode**: MANUAL
* **Video Encoder**: QuadraT1U#0
:::

**Xác nhận**: Khi popup **Encoder Sync?** xuất hiện, nhấn **Confirm** để đồng bộ cấu hình cho các profile.

## 4. Cấu hình nâng cao (Tùy chọn)

Hệ thống tự động tạo các cấu hình mặc định cho **Profiles/Targets/AI config**.

* Nhấn **Advanced** nếu bạn muốn chỉnh sửa chi tiết.
* Giữ nguyên để sử dụng cấu hình mặc định.

## 5. Hoàn tất và Kiểm tra

1.  Nhấn nút **Submit** ở góc dưới bên phải để tạo kênh.
2.  Quay lại danh sách **Event Channels** và tìm kênh vừa tạo.

> **Kết quả thành công**: Cột **Status** hiển thị **Live** (màu xanh lá) và cột **State** hiển thị **Main** (hoặc trạng thái thực tế tương ứng).