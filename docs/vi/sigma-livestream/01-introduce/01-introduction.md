---
title: Giới thiệu
order: 1
---

# Sigma Livestream

Dịch vụ **Livestream** nơi mà bất kì ai có kết nối internet cũng có thể sáng tạo và đưa nội dung đa phương tiện trực tiếp đến với lượng lớn người xem một cách đơn giản và hiệu quả nhất. Để xây dựng một trải nghiệm live stream tuyệt vời đến người xem của bạn đòi hỏi một dự án kĩ thuật lớn, chi phí cao và rủi ro lớn. Với sự kiện trực tiếp bất cứ một sự cố nhỏ nào đều có khả năng kết thúc trên luồng phát trực tiếp. Vì vậy, chúng tôi ưu tiên việc đảm bảo nội dung được truyền tải đến người dùng một cách mượt mà ít sự cố là điều quan trọng nhất.

Livestream không chỉ giới hạn trong việc phát sóng video trực tiếp mà còn cung cấp khả năng tái phát lại nội dung trực tiếp đã kết thúc. Điều này cho phép người dùng tận dụng lại nội dung của họ và cung cấp một trải nghiệm xem video chất lượng cao, được biên tập sẵn.

Sigma Live Stream Platform cung cấp một dịch vụ toàn diện đưa công việc truyền tải nội dung từ broadcaster đến với người xem đơn giản như một nút bấm.

## Key drivers of low latency for video streaming 

Các định dạng phát trực tuyến ban đầu, chủ yếu được phát triển cho SVOD, tập trung vào việc tránh lưu vào bộ đệm lại khi hiển thị video trên trình phát. Nhưng để tính năng đó hoạt động ở mọi nơi trên mọi thiết bị, bộ nhớ đệm phải được sử dụng trong quy trình làm việc, đặc biệt là trong trình phát. Điều này góp phần vào sự thành công của OTT nhưng cũng tạo ra độ trễ từ đầu đến cuối. 

Ví dụ: giao thức HTTP Live Streaming (HLS) ban đầu của Apple, được phát hành vào năm 2009, khuyến nghị sử dụng các phân đoạn 10 giây và chỉ định rằng người chơi không nên đệm ít hơn ba phân đoạn. Điều này giải thích tại sao nhiều dịch vụ OTT có độ trễ thông thường là 40 giây hoặc thậm chí hơn. Apple sau đó đã sửa đổi khuyến nghị của mình thành các phân đoạn sáu giây, nhưng điều này vẫn tương đương với độ trễ 18 giây chỉ ở phía khách hàng để tuân thủ HLS.

Với độ trễ 20-40 giây hoặc hơn thì không phải là vấn đề cho người dùng khi xem VOD. Nhưng đối với sự kiện trực tiếp việc đỗ trễ quá cao sẽ ảnh hưởng đến tính tương tác qua lại giữa người xem và broadcaster. Hình ảnh bên dưới biểu thị tác động của độ trễ và các thành phần tạo ra độ trễ khi truyền tải nội dung


![about-1](/images/livestream/livestream-about-1.png)


## Sigma Live Stream Platform

### Introduction Description of system 

The Sigma Live Stream platform cho phép người dùng cung cấp nội dung từ bất kì thiết bị nào đến bất kì đâu mong muốn. Điểm quan trọng nhất của dự án là tạo ra một nền tảng hỗ trợ người dùng thao tác để trở thành một broadcaster đơn giản nhất. Hỗ trợ nhiều giải pháp công nghệ cho người phát và người xem. Người phát có thể tuỳ chọn độ trễ truyền phát để kéo gần hơn khoảng cách tương tác với người xem. Người xem sẽ không phải bỏ lỡ bất kì khoảng khắc nào trong sự kiện trực tiếp

### Tính năng

- Xử lý lượng lớn luồng **transmux & transcode** các kênh live stream
- Quản lý nội dung trong và sau khi luồng live stream kết thúc
  - **Livestream DVR** (xem lại nội dung đã phát trước đó ngay trên luồng live stream)
  - **Source Record** (Lưu lại tệp nguồn gốc)
  - **Catchup** (Lưu trữ xem lại luồng trực tiếp cho người xem)
  - **Thumbnail** (Tự động sinh định kì thumbnail, hỗ trợ livestream thumbnail preview cho cả luồng live và xem lại)
- Monitor livestream event (Preview, start, stop, restream)
- Implement Low Latency HLS (with Ultra Low Latency mode)
- Chọn nhiều chế độ live stream 
  - **Normal latency** : reduced viewer playback buffering.
    - Choose "Normal latency" if you don't plan to interact with your audience. This is the highest quality setting for viewers since it has the lowest amount of viewer buffering. 
    - latency: ~20-30 seconds
  - **Low latency**: near real-time interactivity
    - Choose this option if you want low latency with minimal viewer buffering. This setting is a good balance between the other two options. 
    - latency: ~ 8-10 seconds
  - **Ultra low latency**: highly interactive live streams with real-time engagement
    - Choose this option if you want to maximize engagement with your audience and don't mind increasing the chances that your viewers may buffer more.
    - Latency: ~2-4 seconds
- Monitor, Alert & Analytic live stream metrics
  - Health check system 
  - Alert when system has problem 
  - Backup livestream when system fail
  - Analytic live stream metrics: 
    - CCU 
    - Total view
    - Total Time watch
- Hệ thống có tính sẵn sàng cao, dễ dàng triển khai ... 
- Tối ưu quá tài nguyên và chi phí 
- API đơn giản, dễ sử dụng và tích hợp với mọi hệ thống
  - Api with secure token
  - Webhook for live stream event 


## Giải pháp truyền hình trực tuyến là gì?

Dịch vụ truyền hình trực tuyến (Livestream) được thiết kế để tạo ra một kênh trực tiếp trên internet, cho phép người dùng truyền tải nội dung video của họ với lượng lớn người xem một cách đơn giản và hiệu quả nhất theo thời gian thực. Điều này có nghĩa là người dùng có khả năng phát sóng và chia sẻ video trực tiếp, cho phép người xem trải nghiệm sự kiện hoặc nội dung ngay lúc đang diễn ra.

Livestream không chỉ giới hạn trong việc phát sóng video trực tiếp mà còn cung cấp khả năng tái phát lại nội dung trực tiếp đã kết thúc. Điều này cho phép người dùng tận dụng lại nội dung của họ và cung cấp một trải nghiệm xem video chất lượng cao, được biên tập sẵn.

Để xây dựng một trải nghiệm live stream tuyệt vời đến người xem của bạn đòi hỏi một dự án kĩ thuật lớn, chi phí cao và rủi ro lớn. Với sự kiện trực tiếp bất cứ một sự cố nhỏ nào đều có khả năng kết thúc trên luồng phát trực tiếp. Vì vậy, chúng tôi ưu tiên việc đảm bảo nội dung được truyền tải đến người dùng một cách mượt mà ít sự cố là điều quan trọng nhất.

Phần mềm này tạo điều kiện thuận lợi cho cá nhân hoặc doanh nghiệp để tạo ra và quản lý kênh trực tuyến của họ, cung cấp nền tảng linh hoạt và tiện ích cho việc giao tiếp và tương tác với khán giả thông qua nền tảng truyền hình trực tuyến.



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
