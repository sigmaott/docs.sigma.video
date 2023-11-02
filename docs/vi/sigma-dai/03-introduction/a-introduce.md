---
title: Product overview
order: 1
---

# Giải pháp Chèn quảng cáo phía máy chủ là gì?
Giải pháp Chèn quảng cáo phía máy chủ (SSAI-server side ad insertion) dành riêng cho hệ thống để **quản lí** và **chạy những chiến dịch quảng cáo** Truyền hình, Sự kiện trực tuyến và VOD - cho phép lắp ráp ad insert endpoint và chèn quảng cáo có quy mô linh hoạt, ghép quảng cáo và kiếm tiền từ quảng cáo trên bất kỳ nền tảng video nào dựa trên đám mây. 

Với SSAI, bạn có thể phân phát nội dung quảng cáo được nhắm mục tiêu tới người xem và tạo luồng tuyến tính trong khi vẫn duy trì chất lượng phát sóng trong các ứng dụng video vượt trội (OTT). Chèn quảng cáo SSAI **hỗ trợ xử lý với lượng lớn người dùng** đồng thời Sigma DAI cho phép thay thế một-một và chèn quảng cáo Truyền phát trực tiếp HTTP (HLS) và Truyền phát thích ứng động MPEG qua HTTP (DASH) cho video theo yêu cầu (VOD) và các luồng trực tiếp.

Tính năng chèn quảng cáo phía máy chủ là sự kết hợp của thao tác với tệp kê khai, giao tiếp với máy chủ quảng cáo cũng như chuẩn hóa tốc độ bit và độ phân giải của quảng cáo, tất cả đều diễn ra ở phía máy chủ trước khi hiển thị tệp kê khai cho khách hàng. Tính năng chèn quảng cáo phía máy chủ cũng có thể được gọi là chèn quảng cáo động hoặc ghép quảng cáo.

## Phương thức kiểm soát

Hệ thống Server-side ad insertion (SSAI) là một cách để chèn quảng cáo vào nội dung video trước khi nó được gửi đến người xem, thay vì chèn quảng cáo trực tiếp trong video. Điều này cho phép bạn kiểm soát quảng cáo và nội dung dựa trên nhiều phương thức, bao gồm quản lý theo ad insert endpoint, quản lý theo người dùng và quản lý theo từng quảng cáo.

Dưới đây là cách thực hiện quản lý theo các phương thức này:

* Quản lý theo ad insert endpoint 

    * Xác định các ad insert endpoint hoặc danh mục nội dung cụ thể mà bạn muốn áp dụng quảng cáo.
    * Sử dụng hệ thống SSAI để liên kết các quảng cáo này với ad insert endpoint hoặc danh mục tương ứng.
    * Khi người dùng truy cập nội dung từ ad insert endpoint hoặc danh mục đó, hệ thống SSAI sẽ tự động chèn quảng cáo phù hợp vào video.

* Quản lý theo người dùng: Người dùng truyền đoạn thay thế param có xuất hiện trong link URL. Việc xuất hiện đoạn Param giúp hệ thống dễ phân biệt, lấy dữ liệu người xem để thực hiện các truy xuất, báo cáo, thống kê,…

* Quản lí theo từng ads
    * Mỗi quảng cáo có thể có các thông số cụ thể như vastID, thời lượng, thời gian lần đầu xuất hiện.
    * Sử dụng hệ thống SSAI để xác định cách chèn mỗi quảng cáo dựa trên các thông số này.

# Cách SSAI hoạt động

Việc lắp ráp ad insert endpoint SSAI giúp bạn dễ dàng kiếm tiền từ ad insert endpoint của mình bằng cách chèn các điểm ngắt quảng cáo vào luồng của bạn mà không cần phải điều kiện hóa ad insert endpoint đó bằng các điểm đánh dấu SCTE-35. Bạn có thể sử dụng ad insert endpoint lắp ráp với chèn quảng cáo SSAI hoặc dịch vụ chèn quảng cáo phía máy chủ khác.
SSAI tương tác giữa mạng phân phối nội dung (CDN), máy chủ gốc và máy chủ quảng cáo (ADS) để quá trình quảng cáo được cá nhân hóa vào trực tiếp và video về nội dung yêu cầu. Dưới đây là tổng quan về cách chèn quảng cáo SSAI hoạt động:

* Điều hoà tín hiệu đánh dấu:
    * Lọc / Xoá các chỉ mục SCTE35 không mong muốn.
    * Xác thực, thêm thông tin đối với marker.
    * Thêm hoặc sửa các đánh dấu SCTE 35 dựa trên lập lịch của chương trình.
    * Điều chỉnh các tham số của SCTE 35 Marker.
    
* Cách thao tác với tệp tin Manifest.
    * Thay thế nội dung không mong muốn.
    * Blackout.