---
title: 'Thiết lập cấu hình nâng cao AI'
order: 2

---

# Thiết lập cấu hình nâng cao AI

Phần **AI Config** trong thiết lập cho phép tích hợp các năng lực **trí tuệ nhân tạo (AI)** để **tự động hóa xử lý nội dung video** và **tối ưu hóa chất lượng phát sóng**. Đây là các tính năng nâng cao được thiết kế để nâng hiệu quả vận hành hệ thống, bao gồm:

1. **Phát hiện vị trí quảng cáo (Ads Detect)**

   - Sử dụng mô hình AI đã huấn luyện để tự động nhận diện điểm chèn quảng cáo hợp lý trong video.
   - Dựa theo tín hiệu hoặc nội dung hình ảnh để xác định các đoạn chuyển cảnh phù hợp.
   - Tích hợp với tiêu chuẩn **SCTE-35** để hỗ trợ chèn quảng cáo động.

2. **Model PTE Config – Cân bằng chất lượng và hiệu suất**

   - Tận dụng mô hình AI để đánh giá chất lượng video theo thời gian thực.
   - Tự động điều chỉnh các thông số mã hóa như bitrate, độ phân giải, cấu hình nén… để đảm bảo chất lượng hình ảnh cao **trong điều kiện mạng hoặc tài nguyên hạn chế**.
   - Giúp duy trì hiệu suất tối ưu cho toàn hệ thống phát sóng.

3. **Forensic Watermark – Gắn dấu vết bảo mật video**

   - Gắn dấu vết ẩn trong video để **truy xuất nguồn phát hoặc người rò rỉ nội dung**, phù hợp với các tổ chức truyền hình hoặc OTT yêu cầu bảo mật cao.

   - Hỗ trợ chuẩn **DASH-IF A/B Watermarking**, cho phép nhúng dấu vết không thể phát hiện bằng mắt thường.
   - Cho phép cấu hình các thông số như: loại watermark, chu kỳ mã hóa (step), mã kiểm tra CRC, độ bền alpha, mã sửa lỗi BCH…
   - Hữu ích trong các tình huống kiểm soát nội dung rò rỉ hoặc phát tán trái phép.

4. **Censorship – Tự động kiểm duyệt nội dung**

   - Dùng để **phát hiện và xử lý các nội dung nhạy cảm** như bạo lực, khỏa thân, logo không hợp lệ, từ ngữ bị cấm... bằng cách kết hợp AI và các thuật toán nhận diện hình ảnh/ngữ nghĩa.

   - Có thể sử dụng để tự động làm mờ, cắt bỏ, hoặc đánh dấu nội dung vi phạm.
   - Giúp đáp ứng các yêu cầu kiểm duyệt nội dung theo quy định nhà nước hoặc nền tảng phát hành.
   - Cho phép nhập đường dẫn mô hình và thiết lập các tham số AI kiểm duyệt.

##  Thiết lập Ads detect 

**Enable**: Bật/tắt tính năng AI phát hiện vị trí quảng cáo.

**Model**: Thực hiện load path model AI (file model định dạng phù hợp để hệ thống xử lý).
 📌 *Lưu ý:* Phải có model hợp lệ thì hệ thống mới nhận dạng chính xác.

Khi load thành công, hiển thị thông tin các trường theo path model: trường ***Score, type, action và bảng thông số*** (cho phép chỉnh sửa)

##  Thiết lập Censorship

**Enable**: Bật/tắt tính năng AI dùng để phát hiện và xử lý các nội dung nhạy cảm như bạo lực, khỏa thân, logo không hợp lệ, từ ngữ bị cấm... bằng cách kết hợp AI và các thuật toán nhận diện hình ảnh/ngữ nghĩa.

**Model**: Thực hiện load path model AI (file model định dạng phù hợp để hệ thống xử lý).
 📌 *Lưu ý:* Phải có model hợp lệ thì hệ thống mới nhận dạng chính xác.

Khi load thành công, hiển thị thông tin các trường theo path model: trường ***Score, type, action và bảng thông số*** (cho phép chỉnh sửa)

## Thiết lập Model PTE

**Enable**: Bật/tắt tính năng AI tự động điều chỉnh các thông số mã hóa như bitrate, độ phân giải, cấu hình nén… để đảm bảo chất lượng hình ảnh cao trong điều kiện mạng hoặc tài nguyên hạn chế.

**Model**: Thực hiện load path model AI (file model định dạng phù hợp để hệ thống xử lý).
 📌 *Lưu ý:* Phải có model hợp lệ thì hệ thống mới nhận dạng chính xác.

Khi load thành công, hiển thị thông tin các trường theo path model tại ***bảng thông số*** (không cho phép chỉnh sửa)

## Thiết lập Forensic Watermark

- **Enable**: Khi bật, hệ thống sẽ chèn watermark nhận dạng vào luồng video để bảo vệ bản quyền và kiểm soát nội dung.
- **Type**: Với chế độ A/B, hệ thống sẽ tạo hai luồng song song (A và B) để tăng khả năng kiểm soát (áp dụng cho target HLS/DASH/HLS+DASH)
- **wm**: Mã hex của watermark
- **crc**: Mã kiểm tra dữ liệu (CRC checksum).
- **step**: Số frame dùng chung dữ liệu watermark, càng cao thì càng nhẹ nhưng chất lượng càng thấp
- **alpha**: Độ mạnh watermark
- **bch**: Mã sửa lỗi BCH (dùng để đảm bảo độ chính xác trong truy vết).
