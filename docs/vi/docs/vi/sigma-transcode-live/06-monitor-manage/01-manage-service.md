---
title: 'Quản lý dịch vụ'
order: 1
---

# {{ $frontmatter.title }}


## Các thao tác với dịch vụ

Đối với những phần nội dung có dạng danh sách, ứng dụng cho phép người dùng tương tác với từng phần tử trong danh sách thông qua một nhóm các nút chức năng (Xem hình minh họa dưới đây). Các nút này sẽ hiển thị tại cột cuối cùng của bảng danh sách.

![Action Buttons](/images/media-live/manager-list-action.png)

---

::: info
Do mỗi phần nội dung trên ứng dụng có những tính năng và nghiệp vụ khác nhau, do đó, phần giao diện hiển thị các nút chức năng có thể khác nhau đôi chút.
:::

---

### Mô tả chi tiết

- `Start`: Bắt đầu kênh.
- `Stop`: Dừng kênh
- `Reset`: Dừng và bắt đầu lại kênh
- `Clone` tạo một đối tượng mới có dữ liệu giống hệt với đối tượng ban đầu, đồng thời cũng có thể tùy chỉnh một vài thông số của đối tượng mới để phù hợp.
- `Delete` xóa đối tượng được chọn. Trước khi ứng dụng thực hiện xóa sẽ yêu cầu người dùng xác thực lại một lần nữa.


## Auto Refresh

![Auto Refresh](../images/um-auto-refresh.jpg)

Cho phép bật tắt tính năng tự động cập nhật lại dữ liệu sau từng khoảng thời gian nhất định.

Có 5 giá trị để lựa chọn: *Tắt* và các khoảng thời gian *Thời gian 5s*, *Thời gian 10s*, *Thời gian 15s*, *Thời gian 20s* tương ứng với các giá trị thời gian 5 giây, 10 giây, 15 giây và 20 giây sẽ tự động cập nhật dữ liệu mới cho người dùng.


## Filter

Trong các phần nội dung có dạng danh sách bảng, có hỗ trợ tính năng lọc, tìm kiếm các phần tử theo một hoặc một vài điều kiện cụ thể. Bộ lọc được hiển thị phía trên của mỗi bảng.

Sau khi hoàn thành tìm kiếm/lọc, các phần tử hợp lệ sẽ được hiển thị trên giao diện.


### Channel Filter

![Channel Filter](../images/um-filter/channel.png)

Bộ lọc kênh cho phép người dùng tìm kiếm dữ liệu theo các trường dữ liệu như sau (từ trái sang phải trên hình mô tả):

- `Status` trạng thái kênh, bao gồm 4 lựa chọn: `All`, `Live`, `Stopped`, `Error`.
- `Type` loại kênh, bao gồm 2 lựa chọn `Package`, `Transcode`.

  ![Channel Type](../images/um-filter/type-channel.jpg)

- `Tag` tag gán cho kênh, người dùng nhập tag.
- `Name` định danh kênh, người dùng nhập tên kênh cần tìm kiếm.

## Phân trang

![Pagination](../images/um-pagination/main.png)

Thực hiện các thao tác điều chỉnh phân trang với các phần nội dung có dạng danh sách liệt kê.

Giao diện phân trang bao gồm 4 thành phần chính:

- Tổng số lượng phần tử hiện có.

  ![Counter Pagination](../images/um-pagination/counter.png)

- Tùy chọn số lượng phần tử hiển thị trên một trang.<!-- !\[Fontsize Menu\](../images/um-pagination/page-size.png) -->![Page Size](../images/um-pagination/page-size-selection.jpg)

  Có thể tùy chọn `5`, `10`, `15`, `20`, `50`, `100` phần tử hiển thị trên một trang bằng cách chọn các giá trị tương ứng trong menu phân trang, giá trị mặc định là `10`.

- Thứ tự trang hiện tại.

  ![Page Select](../images/um-pagination/page-selection.png)

  - Liệt kê các trang hiện có.
  - Trang hiện tại được tô bằng màu nền xanh ![Active Page](../images/um-pagination/actived-page.png){ height=17px } .
  - Di chuyển tới trang trước đó/trang kế tiếp lần lượt bằng cách chọn vào biểu tượng ![Previous](../images/um-pagination/previous.png){ height=17px } và ![Next](../images/um-pagination/next.png){ height=17px } .

- Di chuyển tới một trang bất kỳ.

  ![Next](../images/um-pagination/jump-to.jpg)

  Có thể di chuyển tới một trang bất kỳ bằng cách nhập số thứ tự của trang vào ô trong hình trên

