---
title: 'Thiết lập cấu hình kênh'
order: 1
---

# Thiết lập cấu hình kênh

Trang **Config** là nơi bạn thiết lập các thông số kỹ thuật cho kênh bao gồm tên kênh, định dạng phát, watermark, chế độ dự phòng, xử lý mất tín hiệu, blackout và các tham số tùy chọn khác. Đây là bước cấu hình quan trọng trước khi khởi tạo và phát kênh.

## Thông tin kênh (Information)

| Trường                         | **Mô tả**                                                    |
| ------------------------------ | ------------------------------------------------------------ |
| **Tên**                        | Tên hiển thị của kênh FAST. Có thể trùng tên người dùng muốn hiển thị. |
| **Name modifier**              | Tên định danh phụ, giúp phân biệt với các kênh khác. Ví dụ: `channel_01`. |
| **Sự miêu tả**                 | Mô tả ngắn gọn cho kênh FAST – hỗ trợ tìm kiếm và phân loại sau này. |
| **Thẻ (Tag)**                  | Cho phép thêm các thẻ để phân loại hoặc đánh dấu kênh (ví dụ: `thể thao`, `giải trí`). |
| **Chế độ kênh (Channel mode)** | Có 2 chế độ: **Active-Standby** và **Active-Active**         |



------

## 2. **Watermark**

- Nhấn **+ Thêm** để tải logo hoặc watermark (PNG, JPG,video...) chèn lên nội dung kênh.
- Có thể cấu hình vị trí, độ trong suốt của watermark ở bước kế tiếp.

------

## 3. **Audio watermark**

| Trường     | Mô tả                                                   |
| ---------- | ------------------------------------------------------- |
| **Enable** | Bật/tắt chức năng watermark âm thanh chống sao chép.    |
| **Preset** | Chọn cấu hình mặc định hoặc tự chỉnh                    |
| **Value**  | Sử dụng để thực hiện detect (phát hiện) audio watermark |

------

## 4. **Signal loss (Xử lý khi mất tín hiệu)**

| Trường                          | Mô tả                                                        |
| ------------------------------- | ------------------------------------------------------------ |
| **Enable**                      | Khi được bật, hệ thống sẽ áp dụng cấu hình khi kênh mất tín hiệu hoặc gặp lỗi tín hiệu đầu vào |
| **Type**                        | Cách xử lý khi mất tín hiệu:<br/> **Auto Stop On Signal Loss:** Tự động dừng kênh sau một khoảng thời gian đã được cấu hình. <br/>**Keep Last Frame:** Giữ lại khung hình cuối cùng của tín hiệu đầu vào trên luồng stream. |
| **SignalLossTimeout (minutes)** | Thiết lập thời gian kênh chờ để dừng kênh khi mất sóng (khi type = **Auto Stop On Signal Loss**) |



------

## 5. **Blackout (Chuyển nội dung tạm thời)**

> ⚠️ Tính năng này **không hoạt động** khi đang dùng input dự phòng (redundancy).

| Trường        | Mô tả                                                        |
| ------------- | ------------------------------------------------------------ |
| **Kích hoạt** | Cho phép hoặc tắt chế độ Blackout – chèn nội dung tạm thời khi cần. |
| **Asset**     | Chọn nội dung để phát khi blackout diễn ra (video ngắn, cảnh báo...). |



------

## 6. **Options (Tùy chọn nâng cao)**

- Cho phép thêm các cặp **Key – Value** để cấu hình nâng cao.
- Ví dụ: `no_ads: true`, `max_bitrate: 5000`.
- Nhấn **+ Thêm** để nhập từng tùy chọn.