---
title: Product overview
order: 1
---

# Giải pháp truyền hình trực tuyến là gì?

Dịch vụ truyền hình trực tuyến (Livestream) được thiết kế để tạo ra một kênh trực tiếp trên internet, cho phép người dùng truyền tải nội dung video của họ với lượng lớn người xem một cách đơn giản và hiệu quả nhất theo thời gian thực. Điều này có nghĩa là người dùng có khả năng phát sóng và chia sẻ video trực tiếp, cho phép người xem trải nghiệm sự kiện hoặc nội dung ngay lúc đang diễn ra.

Livestream không chỉ giới hạn trong việc phát sóng video trực tiếp mà còn cung cấp khả năng tái phát lại nội dung trực tiếp đã kết thúc. Điều này cho phép người dùng tận dụng lại nội dung của họ và cung cấp một trải nghiệm xem video chất lượng cao, được biên tập sẵn.

Để xây dựng một trải nghiệm live stream tuyệt vời đến người xem của bạn đòi hỏi một dự án kĩ thuật lớn, chi phí cao và rủi ro lớn. Với sự kiện trực tiếp bất cứ một sự cố nhỏ nào đều có khả năng kết thúc trên luồng phát trực tiếp. Vì vậy, chúng tôi ưu tiên việc đảm bảo nội dung được truyền tải đến người dùng một cách mượt mà ít sự cố là điều quan trọng nhất.

Phần mềm này tạo điều kiện thuận lợi cho cá nhân hoặc doanh nghiệp để tạo ra và quản lý kênh trực tuyến của họ, cung cấp nền tảng linh hoạt và tiện ích cho việc giao tiếp và tương tác với khán giả thông qua nền tảng truyền hình trực tuyến.

# Cách hệ thống truyền hình trực tuyến hoạt động

## Bắt đầu với kênh của bạn

Sau khi người dùng tạo mới một kênh, hệ thống tự động tạo ra các thông tin của kênh, và người dùng có khả năng thực hiện các action( ví dụ copy token,...).

Livestream Channel:

Kênh Livestream là một không gian mà người dùng tạo ra và tự quản lý.

Trạng thái của kênh khởi tạo IDLE (rảnh rỗi- không có session)

->  chuyển đổi sang trạng thái active khi kênh được kích hoạt

-> chuyển sang trạng thái STOP khi người dùng chủ động dừng kênh.

Chi tiết chuyển đổi trạng thái xem ở

## Kênh hoạt động

Quá trình khởi tạo Session:

Sau khi kênh được khởi tạo, người dùng truyền input thông qua bên thứ ba. Hệ thống tự động sinh ra session và gán nó với trạng thái init.

Trạng thái Session:

Session là quá trình truyền dữ liệu video theo thời gian thực.
Trạng thái của session thay đổi theo thứ tự: init (khởi tạo), chuyển sang processing/error/live, và cuối cùng là ended.

Session này kết thúc( trạng thái end) khi đạt đến thời lượng tối đa (timeout) hoặc khi người dùng chủ động dừng kênh.

## Mối quan hệ giữa Livestream Channel và Session:

Mỗi Livestream channel có thể chứa từ 1 đến nhiều session.

Mỗi kênh Livestream liên kết với session đang phát tương ứng trong danh sách session, tạo nên một liên kết hợp nhất giữa kênh và nội dung trực tiếp.

Session là duy nhất, khi session kết thúc, không thể tái sử dụng, session mới được sinh ra tiếp tục hoạt động nhiệm vụ.
