---
title: 'Giới thiệu về kênh sự kiện'
order: 1
---

# {{ $frontmatter.title }}


Tính năng "**Event Channel**" là một hệ thống quản lý tín hiệu truyền thông đa phương tiện mà có khả năng nhận và tổng hợp tín hiệu từ nhiều nguồn khác nhau như ingest live thông qua giao thức RTMP, UDP, SDI, hoặc từ các tập tin Video on Demand (VOD). Chức năng chính của nó là tạo ra một kênh truyền trực tiếp (live channel) với khả năng thiết lập thời gian bắt đầu và kết thúc cụ thể.


Thời gian của 1 kênh sự kiện có thể chia thành 3 phần như sau: 

1. **Phần "Pre"**: Trong giai đoạn này, Event Channel có khả năng hiển thị nội dung từ VOD hoặc hình ảnh đặc biệt, thường được lặp đi lặp lại. Điều này có thể dùng để giới thiệu về kênh hoặc chuẩn bị cho sự kiện trực tiếp chính.

1. **Phần "Main"**: Đây là giai đoạn chính của kênh trực tiếp, trong đó nội dung chính của sự kiện hoặc chương trình sẽ được truyền. Event Channel sẽ nhận và trình diễn tín hiệu trực tiếp từ các nguồn như RTMP, UDP, SDI hoặc 1 danh sách phát VOD  theo thứ tự để đảm bảo người xem có thể xem sự kiện đang diễn ra.

3. **Phần "Stop"**: Cuối cùng, trong giai đoạn này, Event Channel có thể hiển thị nội dung từ VOD hoặc hình ảnh để kết thúc chương trình trực tiếp. Điều này giúp tạo ra một kết thúc mượt mà và có thể chứa thông tin cuối cùng hoặc quảng cáo kết thúc sự kiện.


Tính năng "**Event Channel**" giúp quản lý và tạo ra các kênh trực tiếp động, linh hoạt và chuyên nghiệp, đồng thời cho phép đầu ra linh hoạt từ nhiều nguồn truyền thông khác nhau để cung cấp trải nghiệm xem không gián đoạn cho khán giả.

