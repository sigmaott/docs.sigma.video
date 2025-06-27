---
id: setup-channel-mode
title: "Cấu hình chế độ kênh"
order: 3
---

# Hướng dẫn sử dụng cấu hình Channel Mode

Trong phần này, bạn sẽ học cách cấu hình chế độ kênh (Channel Mode) cho hệ thống. Có hai chế độ chính: **Active-Active** và **Active-Standby**.

## 1. Chế độ Active-Active

### Mô tả:

Chế độ **Active-Active** cho phép chạy kênh trên 2 máy đồng thời để tăng hiệu suất và khả năng chịu tải của hệ thống. Các kênh sẽ chia sẻ công việc và tải, giúp tối ưu hóa tài nguyên và đảm bảo tính liên tục của dịch vụ.

### Cấu hình:

1. Chọn **Channel Mode** là **Active-Active**.
2. Xác định các kênh sẽ tham gia chế độ này. Các kênh này sẽ hoạt động đồng thời và chia sẻ tải công việc.
3. Đảm bảo rằng các kênh đều có khả năng xử lý đồng thời để tránh tình trạng quá tải.

### Ưu điểm:

- Cải thiện hiệu suất và khả năng chịu tải của hệ thống.
- Đảm bảo tính liên tục của dịch vụ ngay cả khi một kênh gặp sự cố.

## 2. Chế độ Active-Standby

### Mô tả:

Chế độ **Active-Standby** cho phép chọn một kênh chủ động (Active Channel) và một hoặc nhiều kênh dự phòng (Standby Channels). Kênh chủ động sẽ xử lý tất cả công việc, trong khi các kênh dự phòng sẽ sẵn sàng thay thế nếu kênh chủ động gặp sự cố.

### Cấu hình:

1. Chọn **Channel Mode** là **Active-Standby**.
2. Chỉ định một kênh chủ động (Active Channel) và một hoặc nhiều kênh dự phòng (Standby Channels).
3. Cấu hình hệ thống để tự động chuyển đổi kênh chủ động khi có sự cố xảy ra.

### Ưu điểm:

- Giảm thiểu rủi ro gián đoạn dịch vụ vì luôn có một kênh dự phòng sẵn sàng thay thế.
- Tối ưu hóa tài nguyên khi chỉ một kênh xử lý tín hiệu chính.

## 3. Các bước cấu hình Channel Mode:

1. **Chọn chế độ Channel Mode**: Trong phần cấu hình, chọn giữa **Active-Active** và **Active-Standby**.
2. **Đối với chế độ Active-Active**:
   - Chọn tất cả các kênh sẽ hoạt động đồng thời.
   - Cấu hình tải phân phối cho các kênh để tránh tình trạng quá tải.
3. **Đối với chế độ Active-Standby**:
   - Chọn kênh chủ động (Active Channel) và các kênh dự phòng (Standby Channels).
   - Cấu hình hệ thống để tự động chuyển đổi kênh khi có sự cố.
4. **Lưu cấu hình**: Sau khi hoàn thành các cài đặt, lưu cấu hình và kiểm tra hệ thống hoạt động.

## 4) Lưu ý:

- Trong chế độ **Active-Active**, cần đảm bảo rằng tất cả các kênh đều có đủ khả năng xử lý và không làm giảm hiệu suất của hệ thống.
- Trong chế độ **Active-Standby**, cần cấu hình hệ thống để có thể chuyển đổi kênh chủ động một cách tự động và nhanh chóng trong trường hợp kênh chủ động gặp sự cố.

Chế độ kênh sẽ quyết định cách hệ thống xử lý và phân phối quảng cáo. Chọn chế độ phù hợp để tối ưu hóa hiệu suất và đảm bảo tính liên tục cho dịch vụ.
