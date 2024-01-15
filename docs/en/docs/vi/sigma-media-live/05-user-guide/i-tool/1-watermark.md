---
title: Kiểm tra watermark
order: 4
---

# Kiểm tra watermark

Chức năng Kiểm tra watermark của dịch vụ Sigma Media-live được thiết kế để hỗ trợ detect, phát hiện và kiểm tra tệp âm thanh được nhúng watermark vào tín hiệu âm thanh gốc, nhằm mục đích bảo vệ quyền sở hữu và phát hiện các bản sao chép không được phép.

Phạm vi áp dụng: Cấu hình cho tất cả các thành phần thuộc dịch vụ Sigma Media-live.

Có hai phương thức để thực hiện kiểm tra watermark.

## Kiểm tra watermark bằng tệp

### Chuẩn bị tệp

Trước khi bắt đầu, bạn cần chuẩn bị một tệp âm thanh hợp lệ.

- Chúng tôi hỗ trợ nhiều định dạng tệp âm thanh, bao gồm:

  - MP3 (MPEG Audio Layer III)

  - AAC (Advanced Audio Coding)

  - WAV (Waveform Audio File Format)

  - AIFF (Audio Interchange File Format)

  - FLAC (Free Lossless Audio Codec)

  - OGG (Ogg Vorbis)

  - M4A (MPEG-4 Audio)

  - AMR (Adaptive Multi-Rate)

  - WMA (Windows Media Audio)

  - APE (Monkey's Audio)

- Hỗ trợ codec: aac, mp3, pcm\*, mp2, opus

- Kích thước tệp âm thanh hợp lệ nhỏ hơn 50 MB.

### Bắt đầu kiểm tra

**Bước 1**: Nhấp vào Watermarking trong menu header TOOL.

Một cửa sổ pop-up Kiểm tra watermarking sẽ xuất hiện.

![Kiểm tra watermarking](/images/media-live/watermark/upload.png)

Mặc định, hiển thị lựa chọn `Upload.`

Người dùng có thể thực hiện các hành động sau:

- Kéo và thả tệp
- Chọn tệp từ máy tính cá nhân.

**Bước 2**:
Người dùng tải tệp lên.

Sau khi chọn tệp, hiển thị kết quả bao gồm:

- Tên tệp đã chọn
- Biểu tượng `dấu X` cho phép xóa tệp.

Người dùng nhấp vào nút kiểm tra.

**Bước 3**: Hiển thị quá trình kiểm tra.

**Hệ thống thực hiện quá trình kiểm tra trong khoảng thời gian 20 giây.** Người dùng có thể hủy quá trình kiểm tra watermarking bằng cách nhấp vào nút `Cancel`, làm quay lại giao diện tải lên.

## Kiểm tra watermark bằng ghi âm trực tiếp

Nếu bạn muốn thực hiện quá trình nhanh chóng, hãy sử dụng tính năng ghi âm.
Trước khi bắt đầu, đảm bảo nội dung kiểm tra audio watermark được ghi âm từ luồng cần kiểm tra thông qua một thiết bị điện tử, với điều kiện mức tạp âm xung quanh được duy trì ở mức tối thiểu để nâng cao độ chính xác.

Cấp quyền sử dụng micro cho công cụ, kết nối thiết bị của bạn với thiết bị tích hợp micro.

### Bắt đầu kiểm tra

**Bước 1**: Người dùng chọn Record trong cửa sổ pop-up Kiểm tra watermarking. Hiển thị thông tin yêu cầu ghi âm tương ứng trong cửa sổ pop-up Kiểm tra watermarking.

![Kiểm tra watermarking](/images/media-live/watermark/record.png)

**Bước 2**: Nhấp vào biểu tượng ghi âm. Kết nối thiết bị thành công.

- Thực hiện ghi âm.

- Disable nút `kiểm tra`.

**Bước 3**: Nhấp vào biểu tượng dừng.

_Trong trường hợp người dùng không dừng, hệ thống sẽ tự động dừng khi đạt đến giới hạn 20 giây._

- Hiển thị bản ghi

- Biểu tượng quay về và nội dung **Kiểm tra các bản ghi** khác cho phép người dùng thực hiện ghi âm lại.

- Bật nút `kiểm tra`.

_Trong trường hợp người dùng nhấp vào biểu tượng **Kiểm tra các bản ghi khác** hệ thống sẽ thực hiện ghi âm lại theo bước 2._

**Bước 4**: Nhấp vào nút `Kiểm tra`.

**Hệ thống thực hiện quá trình kiểm tra trong suốt khoảng thời gian ghi âm trực tiếp**.

![Kiểm tra watermarking](/images/media-live/watermark/check.png)

Người dùng có thể hủy quá trình kiểm tra watermarking bằng cách nhấp vào nút `Cancel`, làm quay lại giao diện tải lên.

## Kết quả kiểm tra

Sau khi kiểm tra trong khoảng thời gian xác định, kết quả sẽ được hiển thị như sau:

![Kiểm tra watermarking](/images/media-live/watermark/result.png)

1. Nếu **không tìm thấy watermark**: Thông báo **Không tìm thấy watermark.**
2. Tìm thấy watermark

- Hiển thị ID của watermarking và cung cấp tùy chọn sao chép.

- Nếu tìm thấy **1 kênh**: Hiển thị thông tin chi tiết của kênh đó, biểu tượng trỏ thẳng tới chi tiết kênh tương ứng, tất cả trên cùng một tab.

- Nếu tìm thấy **nhiều kênh**: Hiển thị **tổng số kênh**, hiển thị thanh cuộn, biểu tượng trỏ thẳng tới chi tiết kênh tương ứng, tất cả trên cùng một tab.

- Nếu **không tìm thấy kênh** nào: Hiển thị chuỗi string, có thể sao chép để sử dụng.

## Quá trình kiểm tra không thành công

### Tệp tải lên không hợp lệ

Chỉ cho phép tải lên các tệp đáp ứng các quy định được liệt kê trước đó. Khi người dùng nhấp vào nút kiểm tra, hệ thống sẽ tiến hành kiểm tra, phát hiện tệp không được hỗ trợ và hiển thị thông báo ở góc phải của màn hình:

**File không hợp lệ, vui lòng chọn file khác.**

### Không có quyền truy cập thiết bị thu âm

Quyền truy cập vào thiết bị là điều kiện tiên quyết trong quá trình kiểm tra ghi âm. Khi người dùng nhấp vào biểu tượng ghi âm và quá trình không thể tiếp tục, hệ thống sẽ hiển thị thông báo như sau:

- Tiêu đề: Vui lòng cấp quyền sử dụng micrô cho công cụ.
- Nội dung: Kiểm tra cài đặt hệ thống của bạn để đảm bảo Sigma streaming có quyền truy cập micrô của bạn và thử lại.

### Quá thời gian hệ thống kiểm tra

Trong quá trình kiểm tra, đã xảy ra sự cố. Sau thời gian kiểm tra hơn 20 giây mà không có kết quả, hệ thống hiển thi thông báo:

**Quá trình xảy ra lỗi, vui lòng thử lại.**
