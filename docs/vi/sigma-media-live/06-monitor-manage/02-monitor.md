---
title: 'Giám sát'
order: 2
---

## Giám sát kênh

Với mỗi một kênh trên hệ thống sẽ có 1 hay nhiều các **job** thực thi việc chuyển mã hay đóng gói kênh. Trạng thái của kênh sẽ là tổng hợp trạng thái của các **job** ứng với kênh tương ứng

* Số lượng Job của kênh sẽ tương ứng với số lượng đầu ra tương ứng của kênh, bên cạnh đó nếu đầu ra có bật tính năng catchup, timeshift, thì hệ thống sẽ tạo thêm 1 **job catchup** tương ứng với đầu ra này (việc phân tách job này giúp hệ thống hoạt động ổn định khi có 1 trong các job có thể gặp sự cố) 
* Khi cấu hình tạo kênh mới, hệ thống sẽ tự động tạo sẵn các job cần thiết đối với kênh
::: warning
Việc thay đổi cấu hình kênh có thể làm thay đổi số lượng job của kênh và có thể dẫn tới việc mất các job cần thiết
:::

### Trạng thái của kênh

Hệ thống kênh có các trạng thái như sau

*   **live**: kênh đang được bật
*   **stop**: Kênh đang được tắt
*   **error**: Kênh đang lỗi
    *   Kênh có thể gặp trạng thái lỗi khi có 1 jobs thực thi tác vụ trong kênh đang gặp lỗi

### Trạng thái của job

Với mỗi Job trong kênh sẽ là 1 dịch vụ chạy riêng trên các máy chủ được quy định khác nhau, nhận đầu vào và đầu ra theo yêu cầu của job. Trong đó Job sẽ có các loại tương ứng như sau: 

1. **Transcode**: đây là job thực hiện việc chuyển mã nôi dung kênh dành cho kênh chuyển mã (transcode). Với mỗi kênh chuyển mã sẽ chỉ có job này.
2. **Package**: Job đóng gói, số lượng tương ứng với số lượng đầu ra cài đặt
3. **Catchup**: Job đóng gói cho nội dung catchup, timeshift, số lượng tương ứng với số lượng đầu ra cài đặt


Với mỗi Job ta sẽ có các trạng thái của job như sau: 

| Trạng thái    | Miêu tả                                                      |
| ------------- | ------------------------------------------------------------ |
| **starting**  | Job đang trong quá trình khởi chạy ban đầu                   |
| **preparing** | Job đang trong quá trình chuẩn bị tài nguyên như lấy thông tin của đầu vào, lấy thông tin đầu ra ... |
| **started**   | Job đã khởi chạy thành công                                  |
| **error**     | Job bị lỗi. Vui lòng xem mã lỗi của job bên dưới để phát hiện nguyên nhân |
| **stop**      | Job đã bị dừng                                               |


Việc thao tác với job hệ thống cung cấp đẩy đủ các **action** như **start**, **stop**, **reset**, được thực hiện qua danh sách **action** của job

* Bạn có thể thao tác với Job từ bên ngoài của danh sách kênh mục **Jobs** hoặc trong trang giám sát kênh

### Giám sát kênh

Từ danh sách của kênh thao tác **click** vào tên của kênh giao diện chi tiết kênh sẽ hiện ra

![Thông tin chi tiết kênh](/images/media-live/general/channel-detail.png)

Các component giám sát bao gồm: 

* **Thumbnail**: Hình ảnh thumbnail của kênh được trích xuất định kì trong quá trình xử lý
* **job Speed**: Biểu đồ dây theo thời gian biểu thị tốc độ của các **job**
    * Tốc độ của **job** được tính theo mốc 100%
        * Với các giá trị nhỏ hơn 90% job đang gặp vấn đề trong quá trình xử lý như nguồn đầu vào, đầu ra gặp vấn đề
* **INPUTS**: Danh sách đầu vào của kênh
* **TRANSCODE**: Thông tin về Hệ thống xử lý chuyển mã (Transcode)
    * Bao gồm: chi tiết về Job transcode
    * Thông tin Profile Transcode
* **PACKAGES**: Thông tin đầu ra đóng gói của kênh
    * Danh sách các đầu ra cùng với các job đính kém
    * Với mỗi danh sách đầu ra sẽ có tối đa 2 job bao gồm **package job** và **catchup job**


### Giám sát job

* Note: 
  * Bảng giám sát **Job** có thể theo dõi ở danh sách kênh hoặc trong trang chi tiết kênh

![Thông tin chi tiết job](/images/media-live/general/job-detail.png)

Cấu trúc log lỗi của job

```
[05-26 02:32:55] Input timeout (code: INPUT_TIMEOUT)
```

Trong đó: 

* **[05-26 02:32:55]**: Giá trị thời gian, tính theo giờ UTC
* **Input timeout** : Message thông báo lỗi
* **(code: INPUT_TIMEOUT)** : Mã lỗi

Một vài mã lỗi phổ biến và chú thích đi kèm

| Code                                   | description                                                  | Input Error | Output Error | Processing Error | Config Error |
| -------------------------------------- | ------------------------------------------------------------ | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| TIMEOUT                                | Job bị timeout (Nguồn đầu vào mất sóng video)                | x |  |  |  |
| **PACKET_QUEUE_IS_FULL**               | Gói tin trong hàng đợi không kịp xử lý (thiếu tài nguyên)    | x | x | x |  |
| MEMORY_IS_FULL                         | Hết bộ nhớ Ram                                               |  |  | x |  |
| **INPUT_TIMEOUT**                      | Đầu vào Timeout (mất sóng đầu vào)                           | x |  |  |  |
| **OUTPUT_TIMEOUT**                     | Đầu ra Timeout (phụ thuộc vào từng luồng đầu ra)             |  | x |  |  |
| **TRANSCODE_TIMEOUT**                  | Máy chủ Xử lý gặp vấn đề                                     |  |  | x |  |
| GOP_INVALID                            | Lỗi GOP cache của đầu vào                                    | x |  |  |  |
| ASYNC_STREAM                           | Không đồng bộ được các luồng đầu vào (ABR streaming)         | x |  |  |  |
| **ASYNC_PROFILE**                      | Không đồng bộ được luồng đầu ra (ABR streaming)              | x |  |  |  |
| INPUT_OUTPUT_ERROR                     | Luồng đầu vào và luồng đầu ra gặp sự cố                      | x | x |  |  |
| IO_ERROR                               | Lỗi trong quá trình đọc ghi                                  | x | x |  |  |
| **CONNECTION_REFUSED**                 | Kết nối bị đầu vào hoặc đầu ra bị refused (Lỗi thường xảy ra khi không thể kết nối đến manifest service) | x | x |  |  |
| CONNECTION_TIMEOUT                     | Kết nối đầu vào hoặc đầu ra timeout                        | x | x |  |  |
| CANNOT_OPEN_CONNECTION                 | Không tạo được kết nối                                       | x | x |  |  |
| URL_READ_ERROR                         | Lỗi đọc dữ liệu URL                                          | x | x |  |  |
| OPTION_NOTFOUND `*`                  | Cấu hình truyền lên không đúng                               |  |  |  | x |
| PROTOCOL_NOTFOUND `*`               | Không tìm thấy Protocol                                      |  |  |  | x |
| STREAM_NOT_FOUND `*`                | Không tìm thấy luồng đầu vào                                 | x |  |  |  |
| UNABLE_TO_OPEN_RESOURCE                | Không thể khởi tạo tài nguyên                                |  | x |  |  |
| NO_ROUTE_TO_HOST `*`                 | Không mở được kết nối                                        | x | x |  |  |
| INVALID_ARGUMENT *****                 | Sai tham số                                                  |  |  |  | x |
| INITIALIZING_OUTPUT_STREAM `*`  | Lỗi Khởi tạo luồng đầu ra                                    |  | x |  |  |
| CONNECTION_RESET_BY_PEER               | Kết nối bị reset                                             | x | x |  |  |
| BROKEN_PIPE                            | Broken pipe                                                  | x | x |  |  |
| NO_AUDIO_DATA `*`                   | Luồng khởi tạo không có AUDIO data                           | x |  |  |  |
| NO_VIDEO_DATA `*`                   | Luồng khởi tạo không có VIDEO data                           | x |  |  |  |
| FEATURE_NOT_ENABLED | Tính năng không được hỗ trợ |  |  |  | x |
| CANT_START_OVERLAY | Không thể bật được overlay |  |  |  | x |
| NO_SUCH_FILE_OR_DIRECTORY | Không mở được file hoặc thư mục | x | x |  |  |
| END_OF_FILE | End of file |  | x |  |  |
| FAILED_TO_RESOLVE_HOSTNAME | Không phân giải được tên miền |  | x |  |  |
| INVALID_INPUT_DATA | Dữ liệu cầu vào không hợp lệ | x |  |  |  |
| CANT_SYNC_INPUT | Không đồng bộ được đầu vào | x |  |  |  |
| STREAM_MISSING | Luồng đầu vào bị thiếu | x |  |  |  |
| OPEN_ERROR | Lỗi Mở đầu vào hoặc đầu ra | x | x |  |  |
| CLOSE_ERROR | Lỗi đóng đầu vào hoặc đầu ra | x | x |  |  |
| SYNC_SEQUENCE |  |  |  | x |  |
| INPUT_PACKET_TOO_SMALL | Gói tin đầu vào không đúng định dạng | x |  |  |  |
| AAC_PACKET_TOO_SHORT | Gói tin đầu vào của AAC quá nhỏ | x |  |  |  |
| PPS_ID_NOT_FOUND | Không tìm thấy PPS_ID | x |  |  |  |


::: info
* Các Lỗi in đậm có nhiều khả năng xảy ra khi **job** đã chạy thành công hơn so với các lỗi khác
* Với các lỗi liên quan đến đầu ra: kiểm tra luồng đầu ra tương ứng (Ổ cứng, Ram, ... )
* Các lỗi `*` chỉ xảy ra khi tạo mới **job**
* Khi gặp lỗi hệ thống sẽ tự thử lại các **job** đã bị lỗi đến khi lỗi được xử lý
    * Đối với các lỗi xảy ra khi khởi tạo job sẽ cần khởi động lại job để xử lý
    :::
