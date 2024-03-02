---
title: Chi tiết kênh Livestream
order: 3
---

## Chi tiết kênh 
Ngoài các cấu hình tạo kênh, chi tiết kênh hiển thị các thông tin đầu ra do hệ thống sinh ra. Người dùng thực hiện xem chi tiết kênh theo các cách sau:

### Cách 1: Sau khi tạo kênh
Sau khi tạo mới kênh, hiển thị mặc định vào trang danh sách kênh

### Cách 2: Mở từ danh sách session
Tại danh sách session, nhấp vào tên kênh

### Cách 3: Mở từ danh sách kênh
Tại giao diện danh sách kênh, nhấp vào tên kênh

Hệ thống hiển thị giao diện chi tiết kênh gồm các thông tin:
- Các thông tin do người dùng cấu hình [cấu hình](1-create#bước-1).
- Các thông tin do hệ thống sinh ra: 
    - **Thumbnail**: hình thu nhỏ, mặc định luôn hiển thị.
    - **Trạng thái**: trạng thái kênh
    - **Session**: 
        - Không có session nào được gán → Hiển thị không có dữ liệu
        - Có session: nhấp vào tên session -> hiển thị trang chi tiết session.
    - **Stream ID**: mã định danh của kênh
    - **Stream token**: là token để chạy, hỗ trợ reset token mới
    - **Stream URL**: link URI, rtmp để người dùng push luồng live lên
    - **Livestream URL**:link http để người dùng xem stream
        - Output format: `DASH` → hiển thị link đuôi **.mpd**
        - Output format: `HLS` → hiển thị link đuôi **.m3u8**
    - **Output Format**:Link DASH/HLS do người dùng cấu hình trước đó. DASH/HLS khác nhau đuôi link
    - **Trạng thái các lựa chọn**:
        -  **Interaction**: bật để thực hiện tương tác, có thể hiểu đơn giản là panel, overlay,…
        - **Catchup**: Hỗ trợ tính năng startover-  cho phép xem phát trực tiếp ngay từ đầu, ngay cả sau khi nó đã bắt đầu. Bằng cách Nhấp vào nút Bắt đầu trên trang phát trực tiếp để xem ngay từ đầu.
        - **Record**: lưu lại file mp4

## Đổi token
Để duy trì một mức độ an ninh cao hơn cho kênh phát trực tiếp của họ và giảm thiểu nguy cơ mất dữ liệu hoặc vi phạm bảo mật,  người dùng có thể thực hiện việc đổi token cho kênh phát trực tiếp của mình theo hướng dẫn sau:

**Bước 1**: Truy cập vào trường thông tin của stream token và nhấp vào nút "Reset token".

**Bước 2**: Hệ thống sẽ hiển thị một cảnh báo pop-up với nội dung sau:

![change token](/images/livestream/change-token.png)

*"Hành động này không thể được hoàn tác. Token cũ sẽ không được sử dụng trong phiên tiếp theo."*

**Bước 3**: Nhấp vào nút `Đổi token` để tiếp tục.

Trở về trang chi tiết kênh và token mới được hiển thị. Người dùng không thể truy cập vào kênh qua bên thứ 3 bằng token cũ.