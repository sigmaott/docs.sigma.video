---
title: Sigma Media Server
order: 1
---

# Sigma Media Server

**Sigma Media Server** là phần mềm máy chủ để triển khai dịch vụ phát video trực tuyến có hiệu suất cao ở mọi quy mô. Sigma Media Server có thể nhận, lưu trữ, chuyển đổi định dạng và phân phối video đến nhiều người xem trên bất kỳ thiết bị nào.

Sigma được viết bằng ngôn ngữ lập trình Erlang, mang lại các lợi ích sau:

- Hiệu suất xử lý song song cao
- Khả năng chịu lỗi tốt của máy chủ
- Khả năng mở rộng dịch vụ từ một máy chủ đơn lẻ đến mạng phân tán phức tạp

## Lĩnh vực ứng dụng

- Dịch vụ IPTV và OTT
- VSaaS và CCTV
- Truyền phát video

## Tính năng của Sigma Media Server

- **Phát trực tiếp**. Thu tín hiệu trực tiếp từ vệ tinh, camera IP, thẻ ghi hình hoặc phần mềm mã hóa video. Hỗ trợ VMix, OBS, Atemi, bộ chuyển đổi HDMI-to-RTMP, trình chỉnh sửa video và trình duyệt. Hỗ trợ SDI, ASI, SRT, RTMP, WebRTC, WebRTC với ABR và phát lại WebRTC (WHEP) với cài đặt truyền lại. Phát trực tuyến đa luồng và phát lại từ kho lưu trữ qua HLS, DASH hoặc MSS trên Internet. Hỗ trợ phát trực tuyến đa luồng qua WebRTC với độ trễ thấp.

- **Ghi hình từ thẻ DVB**. Thu các kênh từ thẻ DVB-T/C/S. Hỗ trợ WebRTC (WHIP), H.323, UDP MPEG-TS, TCP MPEG-TS và HTTP MPEG-TS, M4S/M4F.

- **Truyền tải đến mạng DVB**. Chuẩn bị MPTS để truyền lên vệ tinh theo tiêu chuẩn TR-101290. Nhận MPTS từ thẻ DVB-C để truyền đến mạng DVB-C.

- **Tiếp nhận phụ đề DVB**. Chuyển đổi phụ đề DVB từ hình ảnh sang văn bản.\
  Video theo yêu cầu (VOD). Phân phối tệp với bitrate thích ứng và tùy chọn ngôn ngữ.

- **Kênh riêng từ tệp VOD**

- **Lưu trữ DVR**. Ghi video trực tuyến vào ổ đĩa và quản lý kho lưu trữ, hỗ trợ độ sâu lưu trữ yêu cầu và dung lượng ổ cứng. Phát lại DVR đa luồng qua HLS, DASH và MSS. DVR API.

- **Phát lại trễ**. Phát trực tuyến đa luồng với độ trễ qua HLS, DASH hoặc MSS.\
  **DRM**. Hỗ trợ Widevine, PlayReady, Solocoo, Conax, EzDRM, BuyDRM KeyOS và các hệ thống DRM khác. Xem tài liệu Sigma API để biết danh sách đầy đủ.

- **Lưu trữ đám mây**. Lấy tệp từ máy chủ HTTP và các dịch vụ lưu trữ đám mây như Amazon S3, OpenStack Storage (Swift) và lưu trữ kho dữ liệu trên đám mây.

- **Bộ chuyển mã (Transcoder)**. Hỗ trợ H.264, H.265, AV1, MPEG-2 video, khử xen kẽ, đa bitrate, AAC, MP3, Opus, MPEG-2 audio, AC3, PCMA, PCMU.

- **Tích hợp CDN**

- **Phát MPTS multicast và unicast**

- **Cung cấp SPTS đến nhóm multicast cho mạng nội bộ**

- **Trình phát web cho HLS, DASH, MSS và WebRTC**

- **Chèn quảng cáo**. Chèn quảng cáo phía máy chủ.

- **Dự phòng nguồn thu bằng nhiều máy chủ.**

- **API tích hợp**. Tích hợp với Middleware và trang dịch vụ.

- **Thống kê lượt xem kênh**

- **Hướng dẫn xử lý các vấn đề thường gặp**. Ghi hình, chuyển mã, lưu trữ, đóng gói, trình phát, giám sát.

- **Hỗ trợ dự án**