# Khái niệm SSAI

SSAI (Server Side Ads Insertion) là một công nghệ chèn quảng cáo phía máy chủ, cho phép tích hợp các đoạn quảng cáo trực tiếp vào luồng nội dung video hoặc audio trước khi gửi đến người xem. Thay vì để trình phát (client) tự tải và phát quảng cáo, SSAI xử lý việc ghép nội dung và quảng cáo trên máy chủ, tạo ra một luồng phát liên tục, liền mạch giữa nội dung chính và quảng cáo.

## Ưu điểm của SSAI
- **Trải nghiệm người dùng mượt mà**: Quảng cáo được phát liền mạch, không bị gián đoạn hoặc dễ bị chặn bởi các phần mềm chặn quảng cáo phía client.
- **Tối ưu hóa phân phối quảng cáo**: Cho phép cá nhân hóa quảng cáo dựa trên vị trí, thiết bị, hoặc hành vi người dùng mà không ảnh hưởng đến trải nghiệm phát lại.
- **Chống chặn quảng cáo**: Vì quảng cáo đã được ghép vào luồng nội dung, các phần mềm chặn quảng cáo khó có thể nhận diện và loại bỏ.

## Ứng dụng của SSAI
SSAI thường được sử dụng trong các nền tảng OTT, livestream, VOD (video on demand), truyền hình internet, giúp các nhà cung cấp nội dung tối ưu hóa doanh thu quảng cáo mà vẫn đảm bảo trải nghiệm người xem.

## Quy trình hoạt động cơ bản
1. Người dùng gửi yêu cầu phát nội dung.
2. Máy chủ SSAI lấy nội dung gốc và gửi yêu cầu lấy quảng cáo (thường qua chuẩn VAST/VMAP) từ hệ thống quảng cáo (ADS).
3. Máy chủ SSAI ghép quảng cáo vào các vị trí đã định trong luồng nội dung.
4. Luồng nội dung đã chèn quảng cáo được gửi đến người xem như một stream duy nhất.