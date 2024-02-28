---
title: Introduce
order: 1
---

# Sigma Livestream

Dịch vụ **Livestream** nơi mà bất kì ai có kết nối internet cũng có thể sáng tạo và đưa nội dung đa phương tiện trực tiếp đến với lượng lớn người xem một cách đơn giản và hiệu quả nhất. Building a great live streaming experience for your audience requires a large technical project, high cost, and great risk. With live streams, any minor incident is likely to end up on a live stream. Therefore, we prioritize ensuring that content is delivered smoothly to users with no incidents is of the utmost importance.

Livestreaming is not only limited to live video broadcasting, but also provides the possibility of replaying live content that has ended. This allows users to re-leverage their content and provide a high-quality, pre-edited video viewing experience.

Sigma Live Stream Platform provides a comprehensive service that brings the job of transmitting content from broadcaster to viewers as simple as a button.

## Key drivers of low latency for video streaming

Early streaming formats, mainly developed for SVOD, focused on avoiding re-buffering when displaying video on the player. But for that feature to work anywhere on any device, caching must be used in the workflow, especially in the player. This contributes to the success of OTT but also creates end-to-end latency.

For example, Apple's original HTTP Live Streaming (HLS) protocol, released in 2009, recommended the use of 10-second segments and specified that players should not buffer fewer than three. This explains why many OTT services have typical latency of 40 seconds or even more. Apple later revised its recommendation to six-second segments, but this still equates to an 18-second delay only on the customer side to comply with HLS.

With a delay of 20-40 seconds or more, it is not a problem for users to watch VOD. But for live streams, parking too high will affect the interaction between viewers and broadcasters. The image below shows the effects of latency and the components that create latency when transmitting content

![about-1](/images/livestream/livestream-about-1.png)

## Sigma Live Stream Platform

### Introduction Description of system

The Sigma Live Stream platform allows users to deliver content from any device to anywhere desired. The most important point of the project is to create a platform that supports users to manipulate to become the simplest broadcaster. Supports multiple technology solutions for streamers and viewers. Broadcasters can customize the streaming delay to pull closer to the interaction distance with viewers. Viewers won't have to miss a moment during the live stream

### Tính năng

- Handle large amounts of streams **transmux & transcode** live stream channels
- Manage content during and after the live stream ends
  - **Livestream DVR** (review previously broadcast content right on the live stream)
  - **Source Record**
  - **Catchup** (Host live stream review for viewers)
  - **Thumbnail** (Automatic periodic thumbnail, supports livestream thumbnail preview for both live stream and review)
- Monitor livestream event (Preview, start, stop, restream)
- Implement Low Latency HLS (with Ultra Low Latency mode)
- Choose multiple live stream modes
  - **Normal latency** : reduced viewer playback buffering.
    - Choose "Normal latency" if you don't plan to interact with your audience. This is the highest quality setting for viewers since it has the lowest amount of viewer buffering.
    - latency: \~20-30 seconds
  - **Low latency**: near real-time interactivity
    - Choose this option if you want low latency with minimal viewer buffering. This setting is a good balance between the other two options.
    - latency: \~8-10 seconds
  - **Ultra low latency**: highly interactive live streams with real-time engagement
    - Choose this option if you want to maximize engagement with your audience and don't mind increasing the chances that your viewers may buffer more.
    - Latency: \~2-4 seconds
- Monitor, Alert & Analytic live stream metrics
  - Health check system
  - Alert when system has problem
  - Backup livestream when system fail
  - Analytic live stream metrics:
    - CCU
    - Total view
    - Total Time watch
- The system is highly available, easy to deploy ...
- Optimizing resources and costs
- Simple, easy-to-use API, and integrates with any system
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
