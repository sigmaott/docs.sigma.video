---
id: setup-channel-config
title: "Cấu hình đánh dấu quảng cáo"
order: 3
---


# Hướng dẫn cấu hình Ads Detect

Dưới đây là hướng dẫn cấu hình tính năng **Ads detect** để đánh dấu quảng cáo khi gặp hình ảnh tương ứng, sử dụng model đã được huấn luyện sẵn.

Trong màn hình tạo kênh mới, bạn sẽ thấy mục **Ads Detect** ở phần **Channel Config**.

![config](/images/media-live/advance-config/ads-detect.png)


## 1. Chuẩn bị kênh

Cần cấu hình các profile của kênh có preset data với cài đặt codec là scte35 để nhận tín hiệu SCTE-35 được phát hiện từ Ads Detect.



## 1. Cấu hình Model:
- **Path Model**: Đây là đường dẫn đến file model đã được huấn luyện (ví dụ: `model.onnx`). Bạn sẽ tải model này xuống  Sigma Media Server.

  Khi click vào nút **Load**, một modal sẽ hiện ra cho phép bạn nhập đường dẫn đến model đã cài đặt trên server. Bạn cần nhập đường dẫn tới folder chứa  model (ví dụ: `/usr/local/sigma-ssai-1`).

## 2. Các tham số cấu hình khác:
- **Score**: Điểm tối thiểu để phát hiện khung hình. Giá trị này nằm trong khoảng từ 0 đến 1. Điểm càng cao, độ tin cậy của model trong việc phát hiện quảng cáo càng lớn.
  - Ví dụ: Đặt **Score** là `0.95` để yêu cầu độ tin cậy cao.


- **Ads Duration**: Thời gian tín hiệu SCTE-35 trong giây (mặc định là 60 giây). Bạn có thể điều chỉnh từ 10 đến 300 giây.

- **Ads Delay**: Độ trễ của tín hiệu SCTE-35 trong giây (mặc định là 0 giây nghĩa là ngay tức thì). Bạn có thể điều chỉnh từ 0 đến 60 giây.

- **Ads Step**: Số lượng hình ảnh cần được phát hiện cho tín hiệu SCTE-35. Mặc định là 6, có thể điều chỉnh từ 3 đến 20 hình ảnh. Khi gặp đủ số lượng hình ảnh, hệ thống sẽ đánh dấu quảng cáo, sau đó chuyển sang trạng thái nghỉ.

- **Ads Sleep**: Thời gian nghỉ sau mỗi tín hiệu SCTE-35 trong giây. Mặc định là 1800 giây (30 phút), có thể điều chỉnh từ 30 đến 7200 giây.

## 3. Các bước cấu hình Ads Detect:
1. Bật **Enable** để kích hoạt tính năng Ads detect.
2. Click vào nút **Load** để tải model.
3. Trong form popup, nhập đường dẫn tới file model (`/usr/local/sigma-ssai-1`).
4. Sau khi tải model, danh sách các hình ảnh đã huấn luyện sẽ hiển thị. Bạn có thể chọn các hình ảnh để phân loại quảng cáo.
5. Cấu hình các tham số còn lại:
   - **Score**: Đặt giá trị là 0.95 để có độ tin cậy cao trong việc phát hiện.
   - **ID**: Để mặc định là 0.
   - Điều chỉnh **Ads Duration**, **Delay**, **Step**, và **Sleep** theo yêu cầu.
6. Sau khi cấu hình xong, lưu lại thiết lập.

Cấu hình này sẽ cho phép hệ thống phát hiện quảng cáo dựa trên model và các tham số bạn đã cấu hình.

