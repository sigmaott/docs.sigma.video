---
id: doc-guideline-General-LRM
title: Sự kiện
order: 1
---

## Điều kiện tiên quyết

Để tạo sự kiện, đảm bảo rằng đã có kênh chứa các sự kiện.

## Giao diện chi tiết kênh

Màn hình mặc định ở giao diện danh sách kênh

Khi di chuyển chuột vào biểu tượng lịch, hệ thống sẽ hiển thị dòng **chi tiết**.

Người dùng CMS có thể nhấp vào biểu tượng Chi tiết trong cột hành động.

Sau đó, hệ thống sẽ mở giao diện sự kiện với tiêu đề là **tên kênh đang được chọn**.

Trường hợp cấu hình đồng bộ kênh, một nút chủ động đồng bộ sẽ được hiển thị.

Giao diện bao gồm hai phần:

- Tab hiển thị danh sách chương trình và sự kiện.
- Tab cung cấp thông tin chi tiết kênh.

## Dòng thời gian sự kiện

Hiển thị mặc định trung tâm giao diện chi tiết kênh. Bắt đầu từ 00:00:00 đến 23:59:59 hiển thị tất cả các chương trình, loại sự kiện trong ngày.

### Trạng thái

Mỗi sự kiện, ngay sau khi được tạo, sẽ được phân loại vào 4 trạng thái khác nhau: Chuẩn bị, Sẵn sàng, Hoàn thành và Lỗi. Các trạng thái này được xác định dựa trên sự so sánh giữa thời gian của sự kiện và thời gian thực.

- **Chuẩn bị**: Thời gian hiện tại là **trước** thời gian bắt đầu chạy của sự kiện.
- **Sẵn sàng:** Sự kiện đang trong thời gian chạy. Hiển thị nội dung đa phương tiện
- **Hoàn thành:** Thời gian hiện tại là **sau** thời gian kết thúc chạy của sự kiện.
- **Lỗi:** Trong quá trình hệ thống kiểm tra sự kiện gặp vấn đề( mất tín hiệu, gián đoạn,...).

_Trường hợp loại sự kiện là VOD, sự kiện mới luôn ở trạng thái sẵn sàng._

### Button

Đầu tiên, bạn cần lựa chọn một ngày làm bộ lọc tìm kiếm, hỗ trợ người dùng trong quá trình tìm kiếm và cung cấp cái nhìn tổng quan.

_Lưu ý: Tất cả các chương trình thực hiện được giới hạn trong phạm vi ngày mà bạn đã chọn._

Mỗi nút thực hiện một nhiệm vụ riêng biệt, vui lòng xem cách mỗi button thực hiện chức năng của mình.

- [Nhập chương trình](./2-epg/2.5-import-epg.md)

- [Xuất chương trình](./2-epg/2.6-export-epg.md)

- [Tạo chương trình](./2-epg/2.1-create-epg.md)

- [Thêm sự kiện](./3-event/1-create-event.md)

### Hiển thị

Sau khi tạo mới sự kiện, thông tin về sự kiện bao gồm **Tên sự kiện** và **khoảng thời gian** tương ứng sẽ xuất hiện trên dòng thời gian.

Chia làm 2 loại:

1. Chương trình

Các chương trình gốc có thời lượng chạy xuyên suốt trong ngày. Thời gian kết thúc của chương trình liền trước là thời gian bắt đầu của chương trình liền sau.

- Hiển thị các tag **ẩn** với các chương trình đã được ẩn.
- Nhấp vào chương trình hiển thị cửa sổ [thông tin chương trình](2-epg/2.2-epg-list.md#xem-thông-tin-từng-chương-trình).

2. Sự kiện
   Hiển thị thêm nội dung đa phương tiện
   Ba loại sự kiện: SCTE35, Live, VOD

- Hiển thị **nội dung đa phương tiện** với loại sự kiện **Live** và loại sự kiện **VOD**|hình thức **nội dung thay thế**.
- Hiển thị biểu tượng **đồng hồ** (hover để xem Lịch sự kiện) cho những sự kiện với kiểu xuất bản là lập lịch.

<!-- - Hiển thị biểu tượng **đồng bộ** (hover để xem Đã đồng bộ) cho những sự kiện đã được đồng bộ. -->

- Nhấp vào sự kiện hiển thị cửa sổ [cập nhật sự kiện](./3-event/3-event/3.2-edit.md).

Các element khác trong giao diện:

- **Thanh trượt** chạy từ 00:00 đến 24:00 của 1 ngày và cách đều nhau 6 tiếng, người dùng có thể thực hiện các thao tác trượt đoạn thời gian giúp lọc thông tin trên dòng dự kiện.
- **Phân đoạn thời gian** bắt đầu từ 00:00 đến 24:00 trong một ngày, được chia đều thành các đoạn thời gian 1 giờ giúp hiển thị đánh dấu mốc thời gian trên dòng thời gian và người dùng có thể thực hiện các thao tác trượt trên đoạn thời gian.
- **Di chuyển đến hiện tại**: **Chỉ sử dụng với ngày hiện tại**, nhấp vào biểu tượng và dòng thời gian sẽ chuyển đến mốc thời gian hiện tại.
- **Phóng to**: Cung cấp mức độ phóng to từ 50% đến 200% cho khoảng thời gian đều để xem chi tiết các sự kiện. Mặc định 100%.
- **Trục thời gian thực**: là dấu gạch đứng trên giao diện, luôn biến động theo thời gian thực.
- **Thanh cuộn ngang**

## Danh sách

Ba danh sách ở section cuối, mặc định hiển thị danh sách chương trình.

- [Danh sách chương trình](./2-epg/2.2-epg-list.md)

- [Danh sách sự kiện](./3-event/3-event/3.1-view.md)

- [Danh sách sự kiện lập lịch](./3-event/2-event-echedule/2.1-view.md)
