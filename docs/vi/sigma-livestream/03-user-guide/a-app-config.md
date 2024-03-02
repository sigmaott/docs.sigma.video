---
id: docs-guideline-livestream
title: Cấu hình ứng dụng
order: 1
---

## Cấu hình ứng dụng
Người dùng truy cập lần đầu tiên vào dịch vụ Sigma Livestream, hiển thị mặc định trang cấu hình ứng dụng bắt buộc thiết lập cấu hình chung cho toàn bộ các kênh trong hệ thống Sigma Livestream.

**Bước 1:** Trang cấu hình hiển thị các thông tin sau:

![config app default](/images/livestream/config-app-default.png)

- **Cảnh báo**: Thực hiện chỉnh sửa cấu hình ứng dụng làm thay đổi sẽ ảnh hưởng đến link play (người xem sẽ không thể truy cập vào video hoặc sẽ phải sử dụng một link play mới) và máy transcode (thay đổi các cấu hình kênh phát: link live stream, link push rtmp, chọn máy transcode) khi thực hiện livestream.
- **Tiêu đề**: Máy
- **Chọn loại máy**
    - Sigma_machine: máy đơn
    - Sigma_machine_cluster: cụm máy
    - Sigma_component_cluster: cụm máy
- **Chọn máy**: Máy cụ thể phù hợp để thực hiện nhiệm vụ
    - Chỉ hiển thị các máy trạng thái `running`
    - Cho phép thêm máy mới. Khi nhấn vào, một pop-up sẽ xuất hiện điều hướng người dùng tới trang cấu hình loại máy tương ứng.

**Bước 2:** Người dùng chọn máy phù hợp và nhấn nút `Lưu` để lưu thông tin.

**Bước 3:** Hệ thống lưu thông tin và hiển thị các tab: Dashboard, kênh, session, profile, cho phép người dùng dễ dàng tiếp tục quản lý và thực hiện các hoạt động trên nền tảng Sigma Livestream.

***Lưu ý***: Khi tạo kênh livestream, người dùng có thể cấu hình từng máy theo kênh. Trường hợp người dùng không cấu hình máy theo kênh, mặc định kênh sử dụng máy ở cấu hình ứng dụng.

### Thêm máy của riêng bạn

Người dùng có thể thêm máy để sử dụng trong hệ thống.

**Bước 1:** Khi người dùng nhấp vào nút `Thêm` để thêm máy, một cửa sổ xác nhận sẽ xuất hiện giữa màn hình với 
- Máy đơn: thực hiện thêm máy theo hướng dẫn
- Máy cụm: Cửa sổ hiển thị nội dung: "Bạn có muốn điều hướng đến [loại máy tương ứng]?".

![add server](/images/livestream/add-server.png)

**Bước 2:** Người dùng chọn `Có`, một tab mới sẽ được mở để hiển thị trang danh sách [loại máy tương ứng]. Đồng thời, cửa sổ xác nhận sẽ được đóng trên tab hiện tại.

Sau khi người dùng đã cấu hình máy mới, và máy ở trạng thái `running`, tên và thông tin của máy mới sẽ được hiển thị trong danh sách chọn máy. Điều này giúp người dùng dễ dàng chọn và sử dụng máy phù hợp cho các nhiệm vụ trong hệ thống.

## Cập nhật cấu hình ứng dụng

Sau thời gian sử dụng, người dùng muốn thay đổi máy, thực hiện theo hướng dẫn sau:

**Bước 1:** Chuyển đến trang cấu hình ứng dụng, cấu hình hiện tại và cảnh báo cố định được hiển thị.

**Bước 2:** Người dùng nhấp chuột vào trường (điều này sẽ được coi là sửa đổi, ngay cả khi người dùng không thay đổi gì), đồng thời hiển thị nút `Lưu` và `Hủy bỏ` để cho phép người dùng chỉnh sửa cấu hình. 

Trong trường hợp máy đã được chọn nhưng máy ở trạng thái `DEAD`, `FREEZE` hoặc **đã bị xoá**, ID máy sẽ được hiển thị. 

![server dead](/images/livestream/server-dead.png)

Khi người dùng nhấp chuột vào trường, tên máy không còn trong danh sách, người dùng sẽ bắt buộc phải chọn máy khác.

**Bước 3:** Nhấn nút `Lưu` để lưu lại thông tin, hệ thống chỉ thực hiện lưu thay đổi các cấu hình vừa thiết lập với các kênh được tạo sau đó hoặc các kênh ở trạng thái còn lại. **Không thực hiện thay đổi** với các phiên ở trạng thái đang Live và Ended. Điều này giúp đảm bảo rằng cấu hình mới được áp dụng cho các kênh mới và không ảnh hưởng các session ở trạng thái đang `Live`(đang diễn ra) và `Ended`(đã kết thúc).









