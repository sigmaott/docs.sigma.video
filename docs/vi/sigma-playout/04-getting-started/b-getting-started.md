---
title: 'Bắt đầu với Sigma Playout'
order: 2
---

# Bắt đầu với Sigma Playout

## Luồng thực hiện

Để bắt đầu nhanh chóng làm quen với Sigma Playout, người dùng cần thực hiện các bước sau:

![Ảnh](/images/playout/playout-get-started.png)

## Truy cập vào hệ thống Sigma Streaming

1. Thực hiện [Đăng kí tài khoản](../../sigma-streaming-platform/02-user-management/a-sign-up.md) hoặc [đăng nhập](../../sigma-streaming-platform/02-user-management/c-sign-in.md) để truy cập hệ thống quản lý của **Sigma Streaming Platform** `https://portal.sigma.video`
2. Hiển thị Danh sách ứng dụng, **chọn ứng dụng** cần truy cập.
3. Hiển thị mặc định vào trang **tổng quan ứng dụng**.

## Thiết lập hoạt động của máy chủ

Đảm bảo rằng trong quá trình sử dụng sản phẩm, máy chủ phải đang trong **trạng thái hoạt động**

Nếu bạn chưa kích hoạt cho hoạt động của máy chủ, bạn nên thực hiện cài đặt máy trên máy của người dùng (local)

![Cài đặt máy chủ](/images/media-vod/introduce/add-server.png)

1. Tại sidebar, chọn mục **Server**
2. Hiển thị danh sách máy chủ, **chọn thêm máy chủ**
3. Hiển thị thông tin cài đặt máy, trong đó bao gồm ***Registation Token***
4. Sao chép `Registation Token` và thực hiện cài máy trên máy của người dùng (local) [Xem chi tiết tại đây](../../sigma-media-server/04-getting-started/04-install-new-machine.md)
5. Máy được cài đặt thành công hiển thị lên đầu danh sách máy
6. Thêm giấy phép (license) để kích hoạt hoạt động của máy chủ [Xem chi tiết tại đây](../../sigma-media-server/04-getting-started/05-add-license.md)


## Tạo mới kênh FAST

Để bắt đầu sử dụng các tính năng của Playout, người dùng cần khởi tạo mới kênh FAST theo các bước sau:

1. Truy cập vào trang quản lý Sigma Playout
2. Hiển thị màn hình Dashboard 
3. Lựa chọn tab `FAST channel`
4. Hiển thị danh sách kênh hiện có
5. Nhấp vào nút `Thêm mới` để bắt đầu tạo mới kênh
6. Chuyển đến trang Tạo mới kênh
7. Thực hiện điền đầy đủ thông tin và bấm nút "Submit"
[Xem chi tiết tại đây]()
8. Hiển thị kênh mới tạo tại danh sách kênh

## Quản lý và giám sát kênh FAST

Tại danh sách kênh FAST, người dùng có thể xem được các thông tin cơ bản của kênh như tên kênh, trạng thái hoạt động của kênh, tên máy chủ được chỉ định cho hoạt động của kênh, chế độ kênh... Ngoài ra, người dùng có thể xem được các thông tin cơ bản của job như loại job, trạng thái của job, loại đầu ra, thông báo lỗi... nhằm mục đích quản lý và giám sát hoạt động của kênh, đảm bảo kênh được hoạt động một cách trơn tru.

- [Quản lý kênh]()

- [Giám sát kênh]()

![Ảnh danh sách kênh]()

Nhấp vào "Tên kênh" để xem thông tin chi tiết của kênh [Xem chi tiết tại đây]()

![Ảnh detail kênh]()

## Biên tập bản nháp chương trình phát sóng (bản Draft)

Sau khi đã có kênh FAST chạy ổn định, người dùng có thể bắt đầu biên tập các chương trình phát sóng cho kênh

1. Tại màn hình danh sách kênh FAST
2. Nhấp vào nút "Chi tiết chương trình"
![Ảnh]()
3. Hiển thị màn hình quản lý chương trình
4. Nhấp vào nút "Tạo dòng thời gian"
![Ảnh]()
5. Hiển thị pop-up cảnh báo
6. Thực hiện đồng ý 
7. Hệ thống hiển thị màn hình biên tập chương trình phát sóng ***bản nháp***
8. Thực hiện tạo và sắp xếp chương trình theo lịch phát sóng

- [Tạo chương trình]()

- [Tạo chương trình mid-roll]()

- [Theo dõi & Quản lý chương trình phát sóng tại Calendar]()

- [Theo dõi & Quản lý chương trình phát sóng tại Dòng thời gian]()

- [Theo dõi & Quản lý chương trình phát sóng tại Danh sách]()

- [Một số thiết lập kênh liên quan đến chương trình]() 

Ngoài ra, khi biên tập chương trình phát sóng ***bản nháp***, người dùng có thể thực hiện các hành động sau để quản lý ***bản nháp***

- [Nhật ký bản nháp]()

- [Xóa bản nháp]()

## Quản lý lịch phát sóng chính thức (bản Published)

Sau khi đã biên tập bản nháp chương trình phát sóng và đã thực hiện kiểm tra nội dung, người dùng có thể xuất bản

1. Tại màn hình biên tập chương trình phát sóng ***bản nháp***
2. Người dùng thực hiện rà soát, kiểm tra nội dung và sau đó thực hiện nhấp vào nút "Xuất bản" 

![Ảnh]()

3. Hệ thống hiển thị pop-up xác nhận "Xuất bản nội dung truyền thông?"
4. (không bắt buộc) Thay đổi tên phiên bản và bấm nút "Xác nhận"
5. Hệ thống hiển thị thông báo thành công, đồng thời chuyển về màn hình Quản lý lịch phát sóng chính thức ***(bản Published)***

- [Theo dõi & Quản lý chương trình phát sóng tại bản Published]()

- [Các hành động và thiết lập cho phép thực hiện tại bản Published]()

## Quản lý phát sóng trực tiếp

Sau khi đã có bản biên tập chính thức của các chương trình phát sóng, người dùng có thể theo dõi, quản lý các chương trình trên sóng trực tiếp, đồng thời có thể thực hiện một số hành động có thể tác động trực tiếp đến chương trình trên sóng trực tiếp nhằm xử lý sự cố ngay tức thời

1. Tại màn hình quản lý lịch phát sóng chính thức ***(bản Published)***
2. Thực hiện nhấp vào nút "View preview"
![Ảnh]()
3. Hệ thống hiển thị trang Quản lý phát sóng trực tiếp
4. Thực hiện theo dõi và quản lý chương trình xuất hiện trên sóng trực tiếp

- [Xem thông tin cơ bản của kênh và chương trình]()

- [Theo dõi và quản lý chương trình xuất hiện trên sóng trực tiếp]() 

- [Các hành động (tức thời) tác động trực tiếp]()
