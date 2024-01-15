---
title: Tạo mới preset
order: 1 

---


# Tạo mới preset

Chức năng này cho phép người dùng CMS tạo mới preset để tiết kiệm thời gian khi tạo profiles (hồ sơ)

**Bước 1**: Truy cập sản phẩm Media Live, người dùng di chuyển con trỏ chuột vào **Channel templates** và chọn tab **Presets** 

Hệ thống hiển thị giao diện màn hình danh sách preset hiện có

**Bước 2**: Tại giao diện màn hình danh sách preset, người dùng bấm nút **Thêm** 

Hệ thống hiển thị pop-up tạo mới preset ở giữa màn hình. Với các thông tin chung:

![Tạo mới preset](/images/media-live/preset/create-preset.png)

- **Tên**: Tên của preset (bắt buộc nhập, nhập tối đa 50 kí tự)
- **Mô tả**: Mô tả preset (không bắt buộc nhập, nhập tối đa 200 kí tự)
- **Loại**: Có 3 loại là ***Video, Audio*** và ***Data***
- **Nút "Huỷ bỏ"**: Không thực hiện tạo mới, trở lại giao diện màn hình chính.
- **Nút "Xác nhận"**: Lưu thông tin tạo mới, trở về giao diện màn hình chính.

Khi người dùng lựa chọn loại là **Video** (chỉ cho phép chọn tối đa ***1 video***), hệ thống hiển thị thông tin:

| **Tên cột**              | **Mô tả**                                                    | **Yêu cầu**                                                  |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Codec**                | Sử dụng để nén và giải nén dữ liệu âm thanh hoặc video để giảm dung lượng và tăng khả năng truyền tải | Bắt buộc nhập, cho phép các lựa chọn: <br/>- **h264** (*mặc định hiển thị*)<br/>- **hevc<br/>- copy** (không cho phép chỉnh sửa các cấu hình khác) |
| **Video rate**           | Đo lường tốc độ truyền dữ liệu của video hoặc âm thanh       | Không bắt buộc nhập, hệ thống hiển thị giá trị mặc định ***4000000*** (cho phép giá trị nằm trong khoảng ***64000 <= birate <= 60000000***) |
| **FPS**                  | Số khung hình được hiển thị trong một giây                   | Không bắt buộc nhập, hệ thống hiển thị giá trị mặc định ***25*** (cho phép giá trị nằm trong khoảng *** 10 <= FPS <= 60***) |
| **Width**                | Chiều rộng của khung hình video                              | Không bắt buộc nhập, hệ thống hiển thị giá trị mặc định ***1920*** (cho phép giá trị nằm trong khoảng ***0 <= Width <=7680***) |
| **Height**               | Chiều cao của khung hình video                               | Không bắt buộc nhập, hệ thống hiển thị giá trị mặc định ***1080*** (cho phép giá trị nằm trong khoảng ***0 <= Height <= 4320***) |
| **Hdr**                  | Cho phép màn hình hiển thị hình ảnh rõ nét, đặc biệt là các chi tiết trong vùng nổi và vùng bóng đổ | Không bắt buộc nhập, cho phép các lựa chọn: **Copy, none, HDR10, HLG10, PQ10** |
| **Bframe**               | Sử dụng để tối ưu hóa việc nén và chất lượng video           | Không bắt buộc nhập, cho phép giá trị nằm trong khoảng ***0.0 <= Bframe <= 3.0*** |
| **Pixel format**         | Là cách mà thông tin màu sắc của mỗi điểm ảnh được biểu diễn trong một hình ảnh số | Không bắt buộc nhập, cho phép các lựa chọn: **yuv420p, yuv444p, yuv420p10le, yuv444p10le** |
| **Scale Type**           | Xác định cách tỷ lệ kích thước của video                     | Không bắt buộc nhập, cho phép các lựa chọn: **fitWidth, fitHeight, fitInside, fitCrop, fitBoth, source** |
| **Constant quality**     | Đảm bảo chất lượng của video không thay đổi                  | Không bắt buộc nhập, hệ thống hiển thị giá trị mặc định ***0*** (cho phép giá trị nằm trong khoảng ***0 <= Constant quality <= 51***) |
| **Interlaced mode**      | Các dòng lẻ và chẵn được hiển thị xen kẽ để tạo ra hình ảnh trong video | Không bắt buộc nhập, hệ thống hiển thị giá trị mặc định ***vô hiệu hóa*** |
| **Constant birate mode** | Giữ cho tốc độ bit không đổi trong trường hợp có sự thay đổi về nội dung hoặc khả năng truyền tải | Không bắt buộc nhập, hệ thống hiển thị giá trị mặc định ***vô hiệu hóa*** |

Khi người dùng lựa chọn loại là **Audio** (chỉ cho phép chọn tối đa***10 audio***), hệ thống hiển thị thông tin:

| **Tên cột** | **Mô tả**                                                    | **Yêu cầu**                                                  |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Codec       | Sử dụng để nén và giải nén dữ liệu âm thanh hoặc video để giảm dung lượng và tăng khả năng truyền tải | Bắt buộc nhập, cho phép các lựa chọn: <br/>- **aac** (*mặc định hiển thị*)<br/>- **ac3** <br/>- **eac3 **<br/>- **mp2** <br/>- **copy** (không cho phép chỉnh sửa các cấu hình khác) |
| Audio Rate  | Xác định chất lượng và độ chi tiết của âm thanh              | Không bắt buộc nhập, hệ thống hiển thị giá trị mặc định ***64000*** (cho phép giá trị nằm trong khoảng ***64000 <= birate <= 60000000***) |
| Sample rate | Số mẫu âm thanh được lấy trong một giây                      | Không bắt buộc nhập, cho phép các lựa chọn: **44100, 48000** |
| Channel     | Số lượng kênh âm thanh được truyền tải                       | Không bắt buộc nhập, cho phép các lựa chọn: **1, 2, 6**      |
| Profile     | Một tập hợp các thông số cấu hình được sử dụng để định rõ cách dữ liệu video hoặc âm thanh được mã hóa và giải mã | Không bắt buộc nhập, cho phép các lựa chọn: **aac_low, aac_he, aac_he_v2, aac_main, aac_ld, aac_eld** |
| Volume      | Đo lường mức độ âm thanh, điều chỉnh để tương thích với người nghe | Không bắt buộc nhập, cho phép các lựa chọn: **+5dB, -10dB, 0.5, 2, loudnorm** |
| Ngôn ngữ    | Ngôn ngữ sử dụng cho nội dung âm thanh hoặc văn bản          | Không bắt buộc nhập, cho phép các lựa chọn theo tiêu chuẩn quốc tế |
| Nhãn        | Các thông tin đặc tả sử dụng để phân loại hoặc nhận dạng nội dung | Không bắt buộc nhập, nhập tối đa 50 kí tự                    |

Khi người dùng lựa chọn loại là **Data** (chỉ cho phép chọn tối đa ***10 data***), hệ thống hiển thị thông tin:

- **Codec**: Sử dụng để nén và giải nén dữ liệu âm thanh hoặc video để giảm dung lượng và tăng khả năng truyền tải.

  Bắt buộc nhập, cho phép các lựa chọn: 

  - **copy** (*mặc định hiển thị*)
  - **scte35**
  -  **id3 **

**Bước 3**: Người dùng lựa chọn loại presey và điền các thông tin bắt buộc 

**Bước 4**: Sau khi hoàn tất, nhấn vào nút **Xác nhận** tại cuối cửa sổ pop-up.

Hệ thống thực hiện tạo mới preset với các thông tin vừa được nhập, hiển thị thông báo **Đã tạo cài đặt trước thành công!** ở giữa màn hình để thông báo quá trình tạo đã được thực hiện thành công.