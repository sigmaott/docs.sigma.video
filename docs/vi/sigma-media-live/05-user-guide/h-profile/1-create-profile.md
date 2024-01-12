---
title: Tạo mới profile
order: 1
---

# Profile
Thông tin cấu hình của profile bao gồm một số thông tin quan trọng để định cấu hình quá trình chuyển đổi video. Những thông tin này có thể thay đổi tùy thuộc vào nền tảng, ứng dụng hoặc công cụ cụ thể mà người dùng đang sử dụng để chuyển đổi video, nhằm đảm bảo rằng video được tạo ra có chất lượng tốt và tương thích với thiết bị và mạng của người xem.
### Mục đích
Hỗ trợ người dùng có khả năng lựa chọn và tùy chỉnh hồ sơ theo mong muốn khi tạo kênh.
### Phạm vi 
Hồ sơ này được sử dụng cho tất cả các tính năng thuộc dịch vụ media-live.

# Tạo mới profile
Thực hiện tạo mới profile theo các bước sau:
**Bước 1**: tại danh sách profile, nhấp vào nút `+Thêm mới` ở góc phải màn hình.
Hệ thống sẽ hiển thị một cửa sổ pop-up **Thêm mới profile** ở giữa màn hình.

![Tạo mới](/images/media-live/profile/create.PNG)

- Hiển thị mặc định tên profile theo dạng: `profile_[số do hệ thống random]` giúp người dùng tối ưu thời gian trong quá trình cấu hình.
- Lựa chọn kiểu preset

**Bước 2**: 

Sau khi nhấp vào kiểu preset, hiển thị dropdownlist 2 lựa chọn:
- [Existing preset](./1-create-profile#existing-preset)
- [New preset](./1-create-profile#new-preset)


### Preset đã tồn tại
Để cấu hình một cách nhanh chóng, người dùng có thể chọn `existing preset`- các preset được cấu hình trong hệ thống. 
Hệ thống sẽ hiển thị một cửa sổ.

![Preset đã tồn tại](/images/media-live/profile/existing-video.PNG)

Danh sách các preset bao gồm:
- Tiêu đề: Thêm [video/ audio/ data] tương ứng
- Danh sách gồm:
    - ID
    - Tên: tên của preset
    - Type: [video/ audio/ data] tương ứng
    - Thông tin: Thông tin chi tiết của profile
    - Mô tả
- Phân trang
- Làm mới

**Bước 3**:  Người dùng chọn một preset từ danh sách. 

Hệ thống sẽ quay lại cửa sổ pop-up Tạo mới hồ sơ với dữ liệu được cập nhật từ preset đã chọn.
### New preset
Để tùy chỉnh cấu hình media theo ý muốn, người dùng chọn `New Preset`. Hệ thống sẽ hiển thị thông tin danh sách media tương ứng.

Tên và mô tả hiển thị mặc định ở tất cả các kiểu preset:
- Tên preset: Chặn ký tự đặc biệt, không dấu cách, hỗ trợ dấu gạch ngang, gạch dưới. Không hỗ trợ ngôn ngữ tiếng việt.
- Mô tả preset: Chặn ký tự đặc biệt, **có dấu cách**, hỗ trợ dấu gạch ngang, gạch dưới. Không hỗ trợ ngôn ngữ tiếng việt.

Chi tiết từng preset:
- [Video](./create-profile#video)
- [Audio](./create-profile#audio)
- [Data](./create-profile#data)



### Video
Chỉ cho phép chọn **1 video**.

Người dùng chọn mục `video` , sau đó hiển thị các thông tin như sau:
 
 ![video](/images/media-live/profile/create-data.PNG)

| Tên trường           | Mô tả                                                        | Bắt buộc | Kiểu dữ liệu  | Mặc định | Rule                                                         |
| -------------------- | ------------------------------------------------------------ | -------- | ------------- | -------- | ------------------------------------------------------------ |
| Loại                 | Loại preset                                                  | Có       | Textbox       | **video**    | Disable không cho phép sửa.                                  |
| Codec                | sử dụng để nén và giải nén dữ liệu âm thanh hoặc video để giảm dung lượng và tăng khả năng truyền tải. | Có       | Single select | h264     | Các lựa chọn: h264, hevc, copy<br />**Với lựa chọn copy không cho phép chỉnh sửa các cấu hình khác** |
| Video rate           | đo lường tốc độ truyền dữ liệu của video hoặc âm thanh.      | Không    | integer       | 64000    | 64000 <= birate <= 60000000                                  |
| FPS                  | số khung hình được hiển thị trong một giây.                  | Không    | integer       | 10       | 10 <= FPS <= 60                                              |
| Width                | chiều rộng của khung hình video, thường được đo bằng pixel.  | Không    | integer       | 0        | **0 <= Width <=7680**                                        |
| Height               | chiều cao của khung hình video, thường được đo bằng pixel.   | Không    | integer       | 0        | **0 <= height<= 4320**                                       |
| Hdr                  | High Dynamic Range là tiêu chuẩn hình ảnh với nhiều dải nhạy sáng động, cho phép màn hình hiển thị hình ảnh rõ nét, đặc biệt là các chi tiết trong vùng nổi và vùng bóng đổ. | Không    | Single select |          | Các lựa chọn: Copy, none, HDR10, HLG10, PQ10                 |
| Bframe               | Là một loại khung trong chuỗi video, được sử dụng để tối ưu hóa việc nén và chất lượng video. | Không    | float         | 0.0      | 0.0 <= Bframe <= 3.0                                         |
| Pixel format         | Là cách mà mỗi pixel trong hình ảnh được biểu diễn và lưu trữ. | Không    | Single select | Chọn     | Các lựa chọn: yuv420p, yuv444p, yuv420p10le, yuv444p10le     |
| Scale Type           | Xác định cách tỷ lệ kích thước của video, có thể là tỷ lệ cố định hoặc tỷ lệ thay đổi tự động. | Không    | Single select | Chọn     | Các lựa chọn: fitWidth, fitHeight, fitInside, fitCrop, fitBoth, source |
| Constant quality     | Đảm bảo rằng chất lượng của video không thay đổi, dù có biến động về nội dung hoặc khả năng truyền tải. | Không    | integer       | 0        | 0 <= constant quality <= 51                                  |
| Interlaced mode      | Là một kiểu hiển thị hình ảnh trong video, trong đó các dòng lẻ và chẵn được hiển thị xen kẽ để tạo ra hình ảnh. | Không    | Switch        | Disable  | chỉ sử dụng cho input, không hiển thị tới người xem          |
| Constant birate mode | Giữ cho tốc độ bit không đổi trong trường hợp có sự thay đổi về nội dung hoặc khả năng truyền tải. | Không    | Switch        | Disable  | chỉ sử dụng cho input, không hiển thị tới người xem          |

### Audio

Cho phép chọn nhiều nhất **10 audio**.

Người dùng chọn mục `audio` , sau đó hiển thị các thông tin như sau:

![Audio](/images/media-live/profile/audio.PNG)

| Tên trường  | Mô tả                                                        | Bắt buộc | Kiểu dữ liệu | Mặc định | Rule                                                         |
| ----------- | ------------------------------------------------------------ | -------- | ------------ | -------- | ------------------------------------------------------------ |
| Loại        | Loại preset                                                  | Có       | Textbox      | **Audio**    | Disable không cho phép sửa.                                  |
| Codec       | Sử dụng để nén và giải nén dữ liệu âm thanh hoặc video để giảm dung lượng và tăng khả năng truyền tải. | Có       | Select       | aac      | Các lựa chọn: aac, ac3, eac3, mp2, copy<br />**Với lựa chọn copy không cho phép chỉnh sửa các cấu hình khác** |
| Audio rate  | Tốc độ mẫu âm thanh được truyền tải trong một đơn vị thời gian, thường được đo bằng Hz. Nó xác định chất lượng và độ chi tiết của âm thanh. | Không    | integer      | 64000    | 64000 <= birate <= 60000000                                  |
| Sample rate | Số mẫu âm thanh được lấy trong một giây. Nó ảnh hưởng đến chất lượng và độ chi tiết của âm thanh, được đo bằng Hz. | Không    | Select       | 44100    | 44100, 48000                                                 |
| Channel     | Số lượng kênh âm thanh được truyền tải.                      | Không    | Select       | Chọn     | 1, 2, 6                                                      |
| Profile     | Một tập hợp các thông số cấu hình được sử dụng để định rõ cách dữ liệu video hoặc âm thanh được mã hóa và giải mã. | Không    | Select       | Chọn     | aac_low, aac_he, aac_he_v2, aac_main, aac_ld, aac_eld        |
| Volume      | Đo lường mức độ âm thanh, điều chỉnh để tương thích với sở thích hoặc yêu cầu của người nghe. | Không    | Select       | Chọn     | +5dB, -10dB, 0.5, 2, loudnorm                                |
| Ngôn ngữ    | ngôn ngữ sử dụng cho nội dung âm thanh hoặc văn bản trong quá trình streaming. | Không    | Select       | Ngôn ngữ | Theo tiêu chuẩn quốc tế                                      |
| Nhãn        | Các thông tin đặc tả sử dụng để phân loại hoặc nhận dạng nội dung. Đối với âm thanh, nhãn có thể áp dụng cho các thể loại như nhạc, thông tin, podcast, v.v. | Không    | Textbox      | Nhãn     | N/A      

### Data

Cho phép chọn nhiều nhất **10 data**.

Người dùng chọn mục `audio`, sau đó hiển thị các thông tin như sau:

![Data](/images/media-live/profile/data.PNG)


| Tên trường | Mô tả                                                        | Bắt buộc | Kiểu dữ liệu | Mặc định | Rule                                  |
| ---------- | ------------------------------------------------------------ | -------- | ------------ | -------- | ------------------------------------- |
| Loại       | Loại preset                                                  | Có       | Textbox      | **Data** | Disable không cho phép sửa.           |
| Codec      | Sử dụng để nén và giải nén dữ liệu âm thanh hoặc video để giảm dung lượng và tăng khả năng truyền tải. | Có       | Select       | copy     | Các lựa chọn: scte35, id3, copy<br /> |


## Các button

- Nút `Huỷ`: Không thực hiện tạo mới, trở lại giao diện màn hình chính.

- Nút `Xác nhận`: Lưu thông tin tạo mới, trở về giao diện màn hình chính.


##  Lưu cấu hình
**Bước 5**: Người dùng điều chỉnh các tham số và nhấp vào nút `Xác nhận` ở cuối cửa sổ pop-up.

Hệ thống sẽ tiến hành tạo một profile mới với thông tin vừa nhập và hiển thị một cửa sổ pop-up thông báo **Tạo mới thành công** ở phía trên giao diện.

<!-- ![]() -->

Đồng thời, thông tin cơ bản của hồ sơ mới sẽ được hiển thị trong danh sách các hồ sơ. Hồ sơ mới sẽ xuất hiện trong tất cả các cấu hình thuộc dịch vụ media live đã chọn profile.