---
title: Xem danh sách session
order: 2
---

## Chi tiết session

Thông tin hiển thị được định cấu hình theo kênh, nhiệm vụ của session đảm bảo luôn duy trì kênh phát trực tiếp, vì vậy nhiều session sử dụng chung 1 link play, được gán với 1 kênh tương ứng. Mọi thay đổi của kênh sẽ ảnh hưởng đến thông tin của session.

## Để xem thông tin chi tiết session
Có hai phương pháp để xem chi tiết về session:
### Theo thời gian thực
Người dùng có thể theo dõi kênh livestream với trạng thái Active tại chi tiết kênh. Để xem chi tiết về session, người dùng chỉ cần nhấp chuột vào tên session được gán.

### Xem lại
**Bước 1:** Truy cập vào danh sách session trên giao diện.

**Bước 2:** Nhấp chuột vào tên session muốn xem lại.

Hệ thống sẽ hiển thị chi tiết của session bao gồm:

![detail session](/images/livestream/session-detail.png)

1. Biểu đồ 
- Trục X: Là trục Bitrate, thể hiện tốc độ trung bình của bit trên 1 giây.
- Trục Y: Hiển thị thời gian ghi nhận lần request dữ liệu của session.
- Trục Z: Là trục Speed/FPS, thể hiện số khung hình hiển thị trên mỗi giây.
- Hover vào biểu đồ sẽ hiển thị tooltip chứa dữ liệu 1 điểm trên biểu đồ.
- Thanh cuộn ngang: Cho phép cuộn sang trái/phải để xem biểu đồ.

- Chú thích đồ thị biểu đồ:

    - Bitrate send: Đường biểu diễn màu xanh.
    - Bitrate receive: Đường biểu diễn màu vàng.
    - FPS: Đường biểu diễn màu tím.

- Hiển thị tooltip chứa dữ liệu của 1 điểm biểu đồ
    - Thời gian request: Định dạng yyyy-mm-dd HH:MM.
    - Bitrate send: Biểu thị tốc độ bit srs gửi dữ liệu với token x đến các thiết bị khác (ví dụ: máy transcoder).
    - Bitrate receive: Biểu thị tốc độ bit srs nhận dữ liệu từ luồng push vào token x (từ người dùng).
    - FPS: Biểu thị số khung hình hiển thị trên link play. Chỉ số FPS càng cao thì chất lượng hiển thị của màn hình sẽ càng mượt mà và ít giật lag.

2. Thông tin session
- Client:
    - Channel ID: mã định danh của kênh
    - Client ID: mã định danh phía client
    - Stream ID: mã định danh của luồng dữ liệu.
    - IP: địa chỉ IP của client.
- Ingest: các loại media
    - Video
    - Audio
    - Data
- Output: Thông tin 
    - Live stream URL: Đường dẫn đến luồng phát trực tiếp.
    - Catchup URL: Đường dẫn để xem lại khi luồng kết thúc. Hiển thị liên kết "[download catch]" để người dùng có thể mở và tải các video bên trong.
    - Record URL: Đường dẫn đến file ghi lại dưới định dạng mp4. Hiển thị liên kết download mp4 dưới dạng [link1, link2,...,linkn] - tuỳ vào nguồn, nếu có nhiều liên kết thì sẽ cuộn để hiển thị.

3. Thông tin transcode là duy nhất, gồm:

![session-transcode](/images/livestream/session-transcode.png)

- ID_task: Định dạng **livestream_[tasktype]_[livestreamId]**
- Speed: Tốc độ transcode, Đơn vị: %
- Status:
    - PREPARE
    - STARTING
    - STARTED 
    - ERROR 
    - STOP 
    - FINISHED 
    - INIT_FAILED 
- Life: Định dạng thời lượng.

4. Thông tin Package: tối đa 10 items. mỗi items hiển thị các thông tin sau: 

![session-package](/images/livestream/session-package.png)

- ID_task: Định dạng **livestream_[tasktype]_[livestreamId]**
- Speed: Tốc độ Package, Đơn vị: %
- Status:
    - PREPARE
    - STARTING
    - STARTED 
    - ERROR 
    - STOP 
    - FINISHED 
    - INIT_FAILED 
- Life: Định dạng thời lượng.

5. Thông tin Event: hiển thị các trạng thái theo hành động của kênh theo thời gian mới nhất lên đầu danh sách.

![event](/images/livestream/session-event.png)

- Init: Khởi tạo.
- Published: Người dùng push luồng vào.
- Process: Đang xử lý.
- Stable: Kênh ổn định.
- Unpublished: Người dùng mất kết nối.
- Unstable: Kênh không ổn định do lỗi đường truyền hoặc sóng.
- Republished: Người dùng push lại luồng.
- Ended: Kết thúc (hiển thị thông tin về actor tác động: thời gian timeout hoặc người dùng chủ động đóng kênh).