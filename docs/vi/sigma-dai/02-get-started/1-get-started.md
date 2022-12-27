---
title: Bắt đầu
order: 1
---

# Bắt đầu với SSAI

Để sử dụng SSAI, bạn cần có tài khoản và quyền truy cập, xem và thực hiện các hành động được phép.
## Thiết lập kênh

Để thiết lập kênh bạn cần chuẩn bị các tác vụ sau:
* Chuẩn bị luồng nội dung HLS hoặc DASH của bạn.
* Cấu hình URL mẫu nguồn nội dung video(video content source) và máy chủ quảng cáo (ADS).
* Tạo cấu hình SSAI chứa điểm cuối phát lại.
* Sử dụng trình phát hoặc mạng phân phối nội dung (CDN) của bạn để gửi yêu cầu phát lại tới SSAI ( không bắt buộc).
Khi hoàn tất, bạn sẽ có thể gửi yêu cầu phát lại tới SSAI cho nội dung quảng cáo được cá nhân hóa trong luồng của mình.

### Usecase

* Bước 1: Chuẩn bị luồng
* Bước 2: Cấu hình các tham số URL yêu cầu quảng cáo và các tham số truy vấn
* Bước 3: Tạo mới cấu hình
* Bước 4: Kiểm tra cấu hình
* Bước 5: Gửi yêu cầu phát lại đến SSAI
* Bước 6: Dọn dẹp (Clean up)
## Bước 1: Chuẩn bị luồng

### Chuẩn bị một luồng HLS

### Chuẩn bị một luồng DASH

## Bước 2: Cấu hình các tham số URL yêu cầu quảng cáo và các tham số truy vấn( parameter)

Parameter, gọi tắt là Param là một đại lượng có giá trị được chọn cho các trường hợp cụ thể và liên quan đến các số lượng biến khác có thể được biểu thị, đề cập đến các đặc điểm được sử dụng để xác định một vấn đề nhất định.

Định cấu hình SSAI để gửi dữ liệu nhận được từ trình phát tới ADS, trong URL ADS mẫu, chỉ định các biến player_params. `<query_parameter_name>`

**Ví dụ:** nếu trình phát gửi tham số truy vấn có tên user_id trong yêu cầu của nó tới SSAI, để chuyển dữ liệu đó trong yêu cầu ADS, hãy bao gồm `[player_params.user_id]` trong cấu hình URL ADS để xác định user_id.

### Khi nào?

Khi nào cần cấu hình param:
1. User cần định danh nhằm xác định thông tin để dễ phân biệt, hiểu đơn giản.
2. Cần thay thế nội dung trường hợp không hiển thị/ CDN không chạy.

**Ví dụ:** Phân đoạn nội dung CDN đến Phân đoạn quảng cáo CDN.

Trường hợp link ads chạy CDN theo thứ tự CDN 1 chết, CDN 2 sẽ thay thế vào.

### Loại
Có 2 loại param
* Param **đầu play-param:**  là bên player truyền vào, back-end sẽ thay thế theo param tuơng ứng mà player truyền vào.
* Param fix cứng: 
Do bên thudo hỗ trợ các loại sau:
*   session.ip: ip của máy người dùng. 
*   session.user_agent: user agent của máy người dùng
*   stce.duration: bản chất là available duration- điểm đánh dấu độ dài thời lượng.

**Ví dụ URL thẻ quảng cáo** 

```
http://127.0.0.1:8000/manifest/manipulation/master/6462b8f2-a0f1-40b3-b542-af4098fc5d13/origin04/scte35-av/master.m3u8?play_params.origin=origin-ott-v2.gviet.vn&play_params.adsServer=172.16.20.221&play_params.cdnAdSegmentPrefix=dev-livestream.gviet.vn&play_params.cdnContentSegmentPrefix=origin-ott-v2.gviet.vn
```

## Bước 3: Tạo mới cấu hình

Cấu hình SSAI chứa thông tin liên kết cho máy chủ gốc và quảng cáo.
## Bước 4: Kiểm tra cấu hình

Sau khi lưu cấu hình, kiểm tra luồng bằng URL ở định dạng thích hợp cho giao thức phát trực tuyến của bạn:
Sau khi người dùng cấu hình kênh, SSAI trả về Playback Endpoint Prefixes gồm:
1. link Session initalization playback prefix( link khởi tạo).
**Ví dụ:**

```
http://127.0.0.1:8000/manifest/manipulation/session/0f18d489-6b27-4832-9849-ff9b9e7c35f0/origin04/scte35-av/master.m3u8
```

2. HLS playback prefix: 

**Ví dụ:**

```
https://origin-ott-v2.gviet.vn/origin04/scte35-av4s/master.m3u8
```

1. DASH playback prefix

**Ví dụ:**

```
http://127.0.0.1:8000/manifest/manipulation/dash/6462b8f2-a0f1-40b3-b542-af4098fc5d13/origin04/scte35-av/master.mpd
```

## Bước 5: Gửi yêu cầu phát lại đến SSAI
Cấu hình Trình phát hạ nguồn hoặc CDN để gửi các yêu cầu phát lại đến điểm cuối phát lại của cấu hình được cung cấp từ SSAI. Bất kỳ biến động do người chơi xác định nào mà bạn đã sử dụng trong URL yêu cầu ADS trong **Bước 2: Cấu hình các tham số URL yêu cầu ADS và các tham số truy vấn( parameter)** phải được xác định trong yêu cầu kê khai từ trình phát.
## Bước 6: Dọn dẹp (Clean up)

Để tránh các kênh không cần thiết, thực hiện xoá kênh

Để xoá kênh: 
1. Tại Danh sách kênh, kênh bạn cần xoá. 

Trong cột hành động, chọn icon **xoá**, sau đó click chuột vào.

1. Trong Pop-up xác nhận cấu hình xóa, chọn **Xác nhận**.
