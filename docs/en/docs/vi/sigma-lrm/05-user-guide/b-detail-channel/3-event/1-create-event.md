---
id: doc-guideline-General-LRM
title: Tạo mới sự kiện
order: 2
---

# Tạo mới sự kiện

Sự kiện là một hoạt động cho phép biên tập viên sẽ có khả năng thay đổi nội dung của luồng trực tiếp( live), luồng đã phát sóng trước đó( catchup) hoặc tín hiệu SCTE 35 để quản lý sóng. Hãy thử tạo một sự kiện mới.

## Tạo mới sự kiện onetime

Có 2 cách để tạo sự kiện mới.

### Tạo mới sự kiện từ chương trình có sẵn

1. Tại dòng thời gian sự kiện, nhấp chuột vào chương trình có sẵn trên lịch phát sóng.
2. Hệ thống hiển thị pop-up Thông tin chương trình
3. Nhấp vào nút Tạo sự kiện
4. Hiển thị pop-up thêm sự kiện với khoảng thời gian của lịch phát sóng.

### Tạo mới sự kiện

Trong giao diện Sự kiện, hãy nhấn nút **Thêm sự kiện**.
Một cửa sổ Pop-up sẽ xuất hiện trung tâm giao diện để thêm sự kiện mới.

![](/docs/images/lrm/pop-up/create-event.PNG)

Các thông tin hiển thị:

| Tên trường                      | Mô tả                                                                                                                                    | Bắt buộc | Kiểu dữ liệu | Mặc định                                                                                | Rule                                                                                                                                                           |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên sự kiện**                 | Tên của sự kiện dùng để phân biệt và tìm kiếm sự kiện ở danh sách sự kiện                                                                | Có       | Textbox      | Placeholder: Vui lòng nhập tên sự kiện                                                  | Chặn kí tự đặc biệt, hỗ trợ dấu cách, gạch dưới, gạch ngang<br />Không hỗ trợ ngôn ngữ tiếng Việt                                                              |
| **Loại sự kiện**                | Có 3 loại sự kiện: **SCTE35, Live, VOD**.                                                                                                | Có       | Select       | SCTE 35                                                                                 | Không hỗ trợ ngôn ngữ tiếng Việt. Tùy thuộc vào từng lựa chọn, hệ thống sẽ mở ra các tùy chọn phụ như mô tả trong bảng bên dưới.                               |
| **Bao gồm các kênh media live** | Danh sách người dùng lựa chọn, các lựa chọn ở đây là kênh Sigma của kênh với mục đích **chỉ gồm kênh mong muốn hiển thị** tới người xem. | Có       | Radio        | Chọn tất cả các kênh                                                                    | Hỗ trợ dấu cách, gạch dưới, gạch ngang                                                                                                                         |
| **Kiểu xuất bản**               | Có 2 kiểu xuất bản:  onetime và lập lịch                                                                                                 | Có       | Radio        | onetime                                                                                 |                                                                                                                                                                |
| **Khoảng thời gian**            | Là khoảng thời gian sự kiện diễn ra                                                                                                      | Có       | Date time    | Thời gian bắt đầu: Thời gian hiện tại- thời gian kết thúc: thời gian hiện tại + 10 phút | sự kiện với giới hạn thời lượng **24 tiếng**( cho phép chọn qua ngày) <br />Ngày bắt đầu tính từ 00:00:00 - ngày kết thúc tính đến 23:59:59 |

_Mô tả các loại sự kiện_

<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky" style="font-weight:bold" >Loại sự kiện</th>
    <th class="tg-0pky" style="font-weight:bold" >Nội dung đa phương tiện</th>
    <th class="tg-0pky" style="font-weight:bold" >Asset</th>
    <th class="tg-0pky" style="font-weight:bold">Hình thức</th>
    <th class="tg-0pky" style="font-weight:bold">Chế độ</th>
    <th class="tg-0pky" style="font-weight:bold">Mô tả</th>
    <th class="tg-0pky" style="font-weight:bold">Các quy định</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">SCTE35</td>
    <td class="tg-0pky">Không</td>
    <td class="tg-0pky"> Video, image</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">Sử dụng để thông báo về tất cả loại sự kiện chương trình và quảng cáo trong các luồng vận chuyển tuyến tính và ở các định dạng phân phối ABR tiên tiến như HLS và Dash.</td>
    <td class="tg-0pky" rowspan="2" >Chỉ được phép tạo với StopTime lớn hơn thời điểm hiện tại 1 phút Stop Time > current time + 1 minute</td>
  </tr>
  <tr>
    <td class="tg-0pky">Live</td>
    <td class="tg-0pky">Có</td>
    <td class="tg-0pky">Video, image</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">Luồng thay thế nội dung trực tuyến</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="6">VOD</td>
    <td class="tg-0pky" rowspan="6">Có</td>
    <td class="tg-0pky" rowspan="6">Video</td>
    <td class="tg-0pky" colspan="3">Luồng thay thế nội dung video theo yêu cầu, thay thế bản phác thảo,khi luồng kết thúc, có thể replay lại, thực hiện sửa, xoá event</td>
    <td class="tg-0pky" rowspan="6">Được phép tạo event với khoảng thời gian (Start Date+ Start Time), (Stop date + Stop Time) trong quá khứ</td>
  </tr>
  <tr>
    <td class="tg-0pky">Cắt</td>
    <td class="tg-0pky">N/A</td>
    <td class="tg-0pky">Xoá luôn luồng gốc, không chọn nội dung thay thế( người dùng gọi không thấy được nội dung gốc)</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="4">Nội dung thay thế</td>
    <td class="tg-0pky" colspan="2">Video thay thế được sử dụng để thay thế một phần của đoạn. Trong trường hợp video thay thế (15 phút) ngắn hơn đoạn cần thay thế (60 phút), giải pháp xử lý được thực hiện theo từng lựa chọn.</td>
  </tr>
  <tr>
    <td class="tg-0pky">Thay thế</td>
    <td class="tg-0pky">Thay thế một phần của sự kiện(ví dụ: thay thế 15 phút đầu) và giữ nguyên nội dung còn lại( 45 phút) của đoạn gốc</td>
  </tr>
  <tr>
    <td class="tg-0pky">Lặp lại</td>
    <td class="tg-0pky">Video refill được điều chỉnh để khớp với thời lượng của đoạn cần thay thế và lặp lại nếu cần để đảm bảo thời lượng đủ (ví dụ: lặp lại video thay thế 15 phút cho đến khi đạt được thời lượng cần thay thế của đoạn gốc là 60 phút).</td>
  </tr>
  <tr>
    <td class="tg-0pky">Thay thế và cắt</td>
    <td class="tg-0pky">Điều chỉnh để phù hợp với thời gian, phần còn lại của video bị loại bỏ (bỏ đi đoạn gốc, đoạn đã sẵn có). Video chỉ chạy 15 phút đầu, và 45 phút còn lại của đoạn gốc không được hiển thị.</td>
  </tr>
</tbody>
</table>

## Tạo mới sự kiện lập lịch

Đối với trường hợp bạn chỉ cần thay đổi nội dung trong một khoảng thời gian cụ thể, việc tạo mới sự kiện là phù hợp. Tuy nhiên, trong trường hợp sự kiện lặp lại qua nhiều ngày, việc biên tập từng sự kiện riêng lẻ có thể tốn nhiều thời gian và công sức. Do đó, bạn có thể chọn kiểu xuất bản lập lịch để giúp người dùng CMS có thể đặt thời gian và quản lý các video biên tập tích hợp một cách thuận tiện.

### Ưu điểm

So với lập lịch Overlay, khi người dùng tạo sự kiện thành công bằng chức năng lên lịch mới, sự kiện sẽ ngay lập tức xuất hiện trên timeline với trạng thái **Preparing** giúp người dùng dễ theo dõi và quan sát.

### Phương thức hoạt động

Lập lịch sự kiện: Bao gồm một hoặc nhiều sự kiện được cấu hình dựa trên khoảng thời gian và hiển thị theo chu kỳ được đặt cấu hình.

Hệ thống hỗ trợ 2 phương thức:

- Lập lịch chặn sóng (Alternate Content, Blackout) cho toàn bộ hoặc một số đối tác đã được cài đặt trước.
- Lập lịch chặn sóng thủ công hoặc từ EPG được đánh dấu trước.

### Cấu hình sự kiện lập lịch

Việc lên lịch biên tập nội dung là quan trọng trong chiến lược sự kiện trên kênh, vì vậy việc sắp xếp và lên lịch biên tập đòi hỏi sự cẩn trọng. Lịch trình xem giúp quy hoạch nội dung trên kênh trở nên khoa học và hiệu quả. Bằng cách sử dụng tính năng lập lịch, người dùng CMS có thể duy trì sự chính xác và đảm bảo rằng nội dung biên tập được xuất bản đúng vào thời điểm phù hợp với đối tượng khán giả.

**Bước 2**: Lựa chọn kiểu xuất bản là **Lập lịch**

Hệ thống hiển thị các trường bổ sung trong danh sách xổ xuống.

![](/docs/images/lrm/pop-up/create-event-schedule.png)

_Các cấu hình thông tin sự kiện lập lịch_

| Tên trường            | Mô tả                                                                                                                                | Bắt buộc | Kiểu dữ liệu | Mặc định           | Rule                                                                                                                                                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Thẻ**               | Không hiển thị lên client, thẻ được sử dụng để đánh dấu, liên quan đến nhau để giúp người đọc dễ dàng tìm kiếm và theo dõi nội dung. | Không    | Tag          | Thẻ mới            | Các ký tự được hỗ trợ là số, chữ cái, dấu gạch dưới ( _ ) và dấu gạch ngang ( - ). Không cho phép trùng, từ 1 đến 35 ký tự, không hiển thị thêm từ ký tự thứ 36<br />Trường hợp thẻ dài sẽ hiển thị “Abc…..”<br />Không giới hạn số lượng thẻ được tạo ra. |
| **Loại lập lịch**     | Chọn cài đặt lặp lại cho sự kiện, có ba loại lập lịch: hàng ngày, hàng tuần và tùy chỉnh.                                            | Có       | Select       | Hằng ngày          | Với tùy chọn hàng tuần, bạn có thể chọn các ngày cụ thể trong tuần.                                                                                                                                                                                                                                                   |
| **Khoảng thời gian**  | Khoảng thời gian sự kiện diễn ra                                                                                                     | Có       | Date         |                    | Thời gian của sự kiện mới không trùng với **thời gian của sự kiện đã có**( trong cùng một kênh, cùng một loại sự kiện)<br />                                                                                                                                                                       |
| **Chi tiết lập lịch** | Danh sách các thời gian xuất bản tương ứng lựa chọn bên trên, có thể thực hiện xoá bằng dấu trừ.                                     | Có       | Time         | Thời gian hiện tại | Tổng số lượng sự kiện được tạo ra **không quá 500 sự kiện**.<br /> Không có thời gian trùng lặp trong danh sách.<br />Click button **thêm lập lịch** để thêm lựa chọn                                                                                                                                                 |

- **Nút Huỷ**: Không thực hiện tạo mới, trở lại giao diện màn hình chính.
- **Nút Lưu**: Lưu thông tin tạo mới, trở về giao diện màn hình chính.

**Bước 3**: Sau khi nhập thông tin, nhấn nút **Lưu** ở phía dưới cửa sổ Pop-up.

Quá trình tạo sự kiện được thực hiện, và một thông báo sẽ xuất hiện ở góc phải màn hình

_Thông báo: tạo sự kiện thành công!_

Đồng thời, tất cả các sự kiện được tạo ra từ kiểu xuất bản lập lịch có **chung shceduleID**.

_Lưu ý: Sự kiện chỉ hiển thị trên các kênh Media live được chọn khi người dùng cấu hình._

## Hiển thị trên timeline

Sau khi tạo mới sự kiện, thông tin về sự kiện bao gồm **Tên sự kiện** và **khoảng thời gian** tương ứng sẽ xuất hiện trên dòng thời gian.

Xem các trạng thái và hiển thị trên [dòng thời gian](../a-open-detail.md).

## Hiển thị trên danh sách tương ứng

Sau khi tạo mới sự kiện, tất cả thông tin của sự kiện sẽ được chuyển đến Tab tương ứng.

Chủ đề:

[Danh sách sự kiện](../c-event/3-event/3.1-view.md)

[Danh sách sự kiện lập lịch](../c-event/2-event-echedule/2.1-view.md)
