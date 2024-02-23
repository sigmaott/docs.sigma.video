---
title: Tạo mới kênh sự kiện
order: 1
---

# Tạo mới kênh sự kiện

Chức năng này cho phép CMS tạo mới kênh sự kiện, để tạo một kênh sự kiện, ta thực hiện các bước tạo kênh cơ bản.

## Bước 1: Thiết lập cấu hình chung

Tại giao diện màn hình chính kênh Event, người dùng click vào nút "Tạo kênh mới"

Hệ thống màn hình **Thiết lập cấu hình cho Event Channel**, thiết lập cấu hình chung cho kênh Event

![Thiết lập cấu hình chung](/images/media-live/event-channel/create-event-channel-1.png)



Với các thông tin chính:

- **Thông tin**:
  - **Tên**: Tên của kênh dùng để phân biệt và tìm kiếm kênh ở danh sách kênh (yêu cầu nhập, tối đa 50 kí tự)
  - **Mô tả**: Mô tả kênh (không yêu cầu nhập, nhập tối đa 200 kí tự)
  - **Tags**: Danh sách các tags (tối đa tạo được 100 tags, mỗi tags nhập tối đa 35 kí tự)
  - **Tạo MP4**: nút chuyển đổi nhằm đánh dấu kênh bật/tắt tạo MP4

- **Tương tác**: Cấu hình hiển thị tại sản phẩm **_Tương tác_**

- **Watermark**: Cấu hình bật/tắt đánh dấu hình ảnh vào màn hình video (hỗ trợ preview vị trí của watermark) Thêm được tối đa 10 watermark.

  Khi người dùng **_Bật watermark_**, có 2 cách người dùng có thể sử dụng kéo/thả trên watermark trên màn preview, các thông số về tọa độ X, Y sẽ được tự động hiển thị tương ứng, và **ngược lại** khi điền tọa độ X,Y thì watermark sẽ hiển thị trên màn preview tương ứng

  - **Độ trễ(s)**: Độ trễ của watermark
  - **X**: Tọa độ X (chiều ngang của màn hình)
  - **Y**: Tọa độ Y (chiều dọc của màn hình)

  Thêm hình ảnh đánh dấu bằng cách bấm vào nút **_Chọn nội dung_** để tải lên hoặc chọn sẵn từ thư viện của hệ thống

- **Blackout**: khi mất tín hiệu, màn hình sẽ hiển thị nội dung đã tải lên ở trong phần cấu hình (người dùng có thể lựa chọn bật hoặc tắt)

## Bước 2: Thiết lập Đầu vào

Sau khi người dùng đã điền đủ các thông tin được yêu cầu, bấm nút "Tiếp theo", hệ thống chuyển sang màn hình Thiết lập Đầu vào

Người dùng cần thiết lập cấu hình cho 3 mốc thời gian của sự kiện: _**Pre-Event, Main-Event, Post-Event**_

Hiển thị thanh thời gian sự kiện, hiển thị theo cấu hình của người dùng:

- **Start-Pre** (yyyy/mm/dd HH:MM:SS): Được hiển thị lên thanh thời gian khi người dùng đã chọn xong và Start-Pre ở trạng thái _**bật**_

- **Start-Main** (yyyy/mm/dd HH:MM:SS): Luôn bật và luôn được hiển thị trên thanh thời gian khi người dùng thao tác xong

- **End-Main** (yyyy/mm/dd HH:MM:SS): Thời điểm End-Main sẽ tự động được tính bằng "Thời điểm Start-Main" + "Tổng thời lượng của các Asset" đã thêm.

- **End-Post** (yyyy/mm/dd HH:MM:SS): được tính theo công thức sau End-Post = End-Main + Time for Post-Event

Ở giữa mỗi sự kiện, hệ thống tính tổng khoảng thời gian giữa hai sự kiện để người dùng có thêm thông tin.

### Thiết lập cấu hình Pre-Event

![Thiết lập cấu hình Pre-Event](/images/media-live/event-channel/create-event-channel-pre-event.png)

Người dùng có thể bật hoặc tắt thiết lập cho Pre-Event, nếu **bật** người dùng phải cung cấp các thông tin sau để hoàn thành thiết lập:

- **Start Pre**: là thời gian bắt đầu Pre-Event. Cho phép user chọn ngày và thời gian bắt đầu Pre-Event (Pre-Event phải có thời lượng tối thiểu là 5 phút và tối đa là 7 ngày)

- **Đầu vào**: Người dùng lựa chọn đầu vào là ảnh hoặc video từ thư viện hoặc tải nội dung mới lên (chỉ cho phép chọn 1)

- **Đếm ngược**: đếm ngược sự kiện

### Thiết lập cấu hình Main-Event

![Thiết lập cấu hình Main-Event](/images/media-live/event-channel/create-event-channel-main-event.png)

Bắt buộc người dùng phải thiết lập cấu hình cho Main-Event

- **Start Main**: là thời gian bắt đầu của Main-Event (Main-Event phải có thời lượng tối thiểu là 5 phút và tối đa là 2 ngày)

- **End Main**: Thời điểm End-Main phụ thuộc vào lựa chọn **Đầu vào**
  - _**Khi lựa chọn đầu vào là ASSET**_: Thời điểm End-Main sẽ tự động được tính bằng "Thời điểm Start-Main" + "Tổng thời lượng của các Asset" đã thêm

  - _**Khi lựa chọn đầu vào là INPUT**_: Thời điểm End-Main người dùng sẽ được lựa chọn (Main-Event phải có thời lượng tối thiểu là 5 phút và tối đa là 2 ngày)

- **Đầu vào**: Người dùng có thể lựa chọn 2 loại là _**INPUT**_ và \***ASSET**
  - Đối với loại _**INPUT**_ cho phép lựa chọn 1 (có thể lựa chọn từ danh sách input hoặc tạo mới)
  - Đối với loại _**ASSET**_ cho phép lựa chọn tối thiểu 1 và tối đa là 50 (có thể lựa chọn từ thư viện hoặc tải tệp mới)

### Thiết lập Post-Event

![Thiết lập cấu hình Post-Event](/images/media-live/event-channel/create-event-channel-post-event.png)

Người dùng có thể bật hoặc tắt thiết lập cho Pre-Event, nếu **bật** người dùng phải cung cấp các thông tin sau để hoàn thành thiết lập:

- **Khoảng thời gian Post-Event**: là thời gian bắt cho Post-Event. Cho phép user chọn từ danh sách thời gian 00:05 -> 23:55 (minutes)

- **Đầu vào**: Người dùng lựa chọn đầu vào là ảnh hoặc video từ thư viện hoặc tải nội dung mới lên (chỉ cho phép chọn 1)

## Bước 3: Thiết lập hồ sơ

Sau khi người dùng đã điền đủ các thông tin được yêu cầu, bấm nút "Tiếp theo", hệ thống chuyển sang màn hình Thiết lập Hồ sơ.

![Thiết lập hồ sơ](/images/media-live/event-channel/create-event-channel-profile.png)

Hệ thống hiển thị mặc định 4 hồ sơ với thiết lập mặc định.

Người dùng có thể thiết lập tối 20 hồ sơ cho kênh (có thể lựa chọn từ danh sách có sẵn hoặc tạo mới)

## Bước 4: Thiết lập Mục tiêu

Sau khi người dùng đã điền đủ các thông tin ở phần **Thiết lập hồ sơ**, bấm nút "Tiếp theo", hệ thống chuyển sang màn hình Thiết lập Hồ sơ.

![Thiết lập Mục tiêu](/images/media-live/event-channel/create-event-channel-target.png)

Chọn phím _**Thêm**_ ở mục **Mục tiêu** để thêm 1 đầu ra mong muốn. Popup hiển thị các đầu ra mong muốn sẽ hiện ra. Hệ thống hỗ trợ các đầu ra như sau:

- **HLS**: Apple Http Live Streaming
- **DASH**: DASH
- **UDP**: multicast hoặc unicast mpeg transport stream
- **RTMP**: Realtime Message Protocol
- **Mss**: Maximum Segment Size
- **Hds**: HTTP Dynamic Streaming

Sau khi đã khởi tạo 1 đầu ra mong muốn. Cấu hình của đầu ra sẽ hiện ra như sau. Trong đó:

**Data**: Cấu hình cơ bản của đầu ra

**Manifest**: Cấu hình tập tin **manifest** và **segment**

- **Container**: Định dạng tập tin **segment**. Có giá trị là **mpeg-ts** hoặc **fmp4**. Mặc định là **mpeg-ts**

- **TS**: Độ dài của 1 tập tin **segment**. Mặc định là 6 giây

- **Counter**: Số lượng tập tin Segment được lưu trong file **manifest**

- **Thời gian**: bật/tắt chèn timestamp vào playlist
  **Danh sách phát** bật/tắt chèn timestamp vào playlist

- **DRM**: Cấu hình mã hoá DRM
  - **Enable**: Cấu hình bật tắt DRM

  - **Key provider**: Phương thức cung cấp key mã hoá, tĩnh hoặc lấy từ server chứa key mã hoá

    - **static**: key mã hoá tĩnh
    - **sigma-drm**: Hệ thống mã hoá Sigma Drm
    - **Sigma-drm-v1**: Hệ thống mã hoá Sigma DRM V1
    - **Sigma-multi-drm**: Hệ thống mã hoá Multi-DRM hỗ trợ Widevine, PlayReady, FairPlay được triển khai bởi Sigma drm
    - **drmtoday**: Hệ thống mã hoá Multi-DRM hỗ trợ Widevine, PlayReady, FairPlay được triển khai bởi castlab

  - Thiết lập **DRM Credential** nếu có đối với **Sigma Multi DRM** và **DRMtoday**

## Bước 5: Xác nhận Preview và hoàn thành tạo kênh

Sau khi đã hoàn thành tất cả các bước trên, người dùng bấm nút **Tiếp theo**, hệ thống hiển thị màn hình Preview bao gồm những thông tin đã được cấu hình ở những bước trước, mục đích giúp người dùng có thể kiểm tra lại nội dung trước khi hoàn thành bước tạo kênh.

![Xác nhận Preview](/images/media-live/event-channel/create-event-channel-preview.png)

Sau khi kiểm tra lại thông, người dùng bấm nút **Xác nhận** để hoàn thành bước tạo kênh sự kiện. Sau khi kênh sự kiện được thêm mới thành công, sẽ hiển thị tại danh sách kênh sự kiện
