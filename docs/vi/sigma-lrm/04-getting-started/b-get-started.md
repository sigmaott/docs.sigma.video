---
title: Bắt đầu với sigma Linear Right Management
order: 2
---
# Bắt đầu với dịch vụ quản lí sóng trực tuyến
Để sử dụng Linear Right Management, chúng tôi khuyên bạn nên trước khi bạn bắt đầu tạo kênh, bạn lên kế hoạch cho quy trình làm việc và lên kế hoạch cho kênh. Trong quy trình lập kế hoạch này, bạn có thông tin mà bạn cần để tạo kênh. 

Khi hoàn tất, bạn sẽ có thể tạo các sự kiện, chương trình với nội dung video mà bạn muốn biên tập. 

Đây là hướng dẫn cấu hình dịch vụ ở mức cơ bản nhất không bao gồm các cấu hình nâng cao.

## Cách thức truy cập
### Chuẩn bị

Trước khi bắt đầu, bạn cần chuẩn bị các tác vụ sau:
- Có tài khoản truy cập hệ thống quản lý của **Sigma Streaming Platform** `https://portal.sigmaott.com`
- Tài khoản có quyền truy cập app được phân quyền và thực hiện các thao tác với dịch vụ quản lí sóng trực tuyến.

### Bước 1: Truy cập vào hệ thống quản lí sóng trực tuyến

Để sử dụng dịch vụ quản lí sóng trực tuyến, bạn cần có tài khoản và quyền truy cập, xem và thực hiện các hành động được phép.
1. Truy cập vào đường link `https://portal.sigmaott.com/app`
2. Hiển thị Danh sách App, **chọn ứng dụng** cần truy cập.
3. Hiển thị mặc định vào trang **tổng quan ứng dụng.**
4. Ở sidebar, chọn **sản phẩm|quản lí sóng trực tuyến**.
5. Hiển thị trang mặc định ở danh sách kênh.

## Bước 2: Chuẩn bị thông tin nguồn

Để triển khai kênh LRM, bạn cần trước tiên thiết lập kênh Media live với chức năng luồng catchup. Dưới đây là cách tạo một kênh mới với các đầu ra quan trọng:

- **Catchup**: Hỗ trợ bên thứ ba truy cập và lấy nội dung thông qua giao thức HLS.
- **Udp**: Cung cấp bên thứ ba khả năng đóng gói lại và chuyển đổi thành các luồng như HLS, DASH có thể phát qua internet.

Hướng dẫn tạo kênh media live như sau:

1. Đảm bảo người dùng có quyền truy cập vào Media live. Truy cập thanh menu và chọn **kênh | kênh transcode**.

Hệ thống sẽ chuyển hướng bạn đến trang kênh transcode.

2. Nhấn vào nút `+ Thêm` ở góc phải của màn hình.

Bạn sẽ được dẫn đến cửa sổ cấu hình, thực hiện theo hướng dẫn chi tiết [tại đây]().

3. Cấu hình mục tiêu của kênh bằng cách nhấp vào biểu tượng `dấu +`.

![](/docs/images/media-live/get-started/select-target.png)

- Hiển thị pop-up chọn đầu ra.

### Chuẩn bị kênh Media Live với đầu ra udp

4. Lựa chọn đầu ra là `udp`.

![](/docs/images/media-live/get-started/target-output-udp.png)

- Sau đó, đặt tên cho mục tiêu:

![](/docs/images/media-live/get-started/target-name.png)
    Tên: `catchup-flow`
    Tên thay thế( không bắt buộc): `su-dung-cho-kenh-LRM`

Hiển thị trở về trang thông tin mục tiêu:

![](/docs/images/media-live/get-started/target-udp.png)

- Tên và tên thay thế được hiển thị theo cấu hình trước.
- **Định dạng**:  `udp` không cho phép sửa.

5. Lựa chọn profile:

Nhấp vào nút thêm để chọn profile.

![](/images/media-live/get-started/select-profile.png)

Hiển thị các dữ liệu của profile và nhập đường dẫn udp.

Ví dụ: `udp://239.32.42.1:5000`

![](/docs/images/media-live/get-started/profile-udp.png)

### Chuẩn bị kênh Media Live luồng cathup
Lựa chọn đầu ra là `HLS`.
Người dùng tiếp tục bằng cách nhập tên cho đầu ra `HLS`.

Hiển thị thông tin cấu hình HLS, khi chức năng catchup được bật, các tùy chọn **profile| storage** cũng sẽ tự động được kích hoạt.

![](/docs/images/media-live/get-started/target-catchup.png)


Sau khi tạo, kênh được lấy dữ liệu từ [kênh media live](/04-getting-started/b-get-started#Bước-1-Truy-cập-vào-hệ-thống-quản-lí-sóng-trực-tuyến)

### Chuẩn bị Dữ liệu kênh nguồn VTV
Với dữ liệu nguồn mặc định VTV, người dùng cần thêm các thông tin để lấy danh sách lịch phát sóng. 

Ví dụ:
- Endpoint: `https://vtvapi1.vtv.vn/services/programschedules.ashx`
- Mã chương trình: `3`
- Khoá API: `111aaa7890zz`

## Bước 3: Tạo mới kênh LRM
Để quản lí sóng và các nội dung thay thế có thể thực hiện nhiệm vụ của nó, phân phối nội dung tới người xem. Bạn cần tạo 1 kênh để chứa nó đồng thời kiểm soát các nội dung trực tiếp hoặc VOD đến từng đối tượng khách hàng. Luồng đầu vào tín hiệu kênh được ingest từ hệ thống của Thudo JSC. 
Bạn lựa chọn với 1 kênh sẵn do hệ thống sinh ra, hoặc chuẩn bị sẵn nguồn, mã chương trình, khoá API trường hợp bạn mong muốn sử dụng cấu hình kênh riêng của mình.

### Để tạo mới kênh
Để thêm một kênh mới, hãy thực hiện các bước sau tại mục danh sách kênh:

1. Nhấn vào nút `+ Thêm` ở góc phải của màn hình.
2. Một cửa sổ pop-up Tạo mới kênh sẽ xuất hiện.
3. Nhập đầy đủ thông tin theo yêu cầu để tạo kênh mới. Điền vào các trường thông tin cần thiết trong cửa sổ pop-up để cá nhân hóa và xác định đặc điểm của kênh của bạn.
4. Thực hiện tạo kênh và chạy kênh mong muốn.

Trường hợp kênh có bật cấu hình tự động đồng bộ. Khi hoàn tất, hệ thống sẽ tự động đồng bộ lịch phát sóng từ dữ liệu nguồn theo đúng thời điểm cấu hình.

## Bước 4: Kiểm tra các cấu hình, chương trình, sự kiện

Người dùng có thể xem các thông tin cơ bản kênh LRM được hiển thị trong danh sách. Kiểm tra các chương trình sự kiện người dùng phải vào thông tin chi tiết.

Chi tiết về kênh bao gồm nhiều sự kiện khác nhau, với sự kiện được định nghĩa là một tính năng hỗ trợ người dùng của CMS chuyển đổi video/hình ảnh thành các kênh livestream truyền tải đến khách hàng. Mỗi kênh có thể chứa nhiều sự kiện nhỏ với nội dung đa dạng, cung cấp tùy chọn nội dung thay thế trong trường hợp sự cố về tín hiệu, mất nguồn nội dung và hạn chế thiết bị.

* Hỗ trợ các trường dữ liệu nâng cao bao gồm quyền **xem lại** và **bắt đầu lại**.

* Tính năng lập lịch giúp chuyển đổi lịch đầu vào thành các sự kiện SCTE 224 với một API cho phép nhiều định dạng nhập lập lịch.


### Để xem thông tin chi tiết
1. Tại giao diện danh sách, hiển thị chi tiết khi hover vào icon Lịch. Người dùng click vào icon Lịch.
2. Hệ thống hiển thị giao diện được chia thành hai phần chính:
    * Phần thông tin kênh: Các thông tin kênh sẽ được hiển thị ở phần tab chi tiết kênh, click chuyển tab để xem.
    * Phần thông tin sự kiện: Bao gồm timeline và danh sách(gồm các chương trình/ sự kiện/ sự kiện lập lịch) .
3. Người dùng có thể xem các thông tin cần.

## Bước 5: Dọn dẹp( Xoá kênh)

Khi bạn đã khởi tạo và chạy kênh LRM, sau đó để ngừng hoạt động hoặc đóng các chương trình, sự kiện không cần thiết, bạn cần thực hiện thao tác xoá kênh LRM như sau:

1. Trên giao diện danh sách kênh LRM, hãy chọn kênh mà bạn muốn xoá, và sau đó nhấp vào icon **Xoá.**
2. Một hộp thoại xác nhận sẽ xuất hiện. Hãy chọn nút **Xác nhận** để tiếp tục.
3. Hệ thống sẽ thực hiện xoá kênh LRM và bạn sẽ trở về giao diện Danh sách kênh LRM sau khi hoàn thành quá trình xoá.