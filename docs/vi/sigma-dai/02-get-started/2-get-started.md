---
title: Bắt đầu
order: 2
---

# Bắt đầu với SSAI

## Thiết lập kênh

Để thiết lập kênh bạn cần chuẩn bị các tác vụ sau:
* Chuẩn bị luồng nội dung HLS hoặc DASH của bạn.
* Chuẩn bị đường dẫn yêu cầu quảng cáo (Ads Request)
* Tạo cấu hình kênh SSAI
* Sử dụng đường dẫn SSAI sinh ra để cấu hình kênh trên ứng dụng
* Thu thập, theo dõi các thông số cần thiết

Khi hoàn tất, bạn sẽ có thể gửi yêu cầu phát lại tới SSAI cho nội dung quảng cáo được cá nhân hóa trong luồng của mình.

### Các bước cơ bản

* Bước 1: Chuẩn bị luồng
* Bước 2: Cấu hình các tham số URL yêu cầu quảng cáo và các tham số truy vấn
* Bước 3: Tạo mới cấu hình
* Bước 4: Kiểm tra cấu hình
* Bước 5: Gửi yêu cầu phát lại đến SSAI
* Bước 6: Dọn dẹp (Xoá kênh)

## Chuẩn bị

Trước khi bắt đầu, bạn cần chuẩn bị các tác vụ sau:
- Có tài khoản truy cập hệ thống quản lý của **Sigma Streaming Platform** `https://portal.sigmaott.com`
- Tài khoản có quyền truy cập app được phân quyền với SSAI


## Bước 1: Truy cập vào hệ thống **Sigma Dynamic Ads Insert**

Sử dụng tài khoản và lựa chọn app cần truy cập vào hệ thống **Sigma Dynamic Ads Insert**. tại link

`https://portal.sigmaott.com/ssai` 

## Bước 2: Chuẩn bị luồng

### Chuẩn bị luồng HLS

Các tập tin HLS manifest phải đáp ứng các yêu cầu sau:
* Các tệp tin manifest phải có thể truy cập được trên internet
* Tệp kê khai phải có `EXT-X-VERSION` từ `3` trở lên.

Đối với nội dung trực tiếp, HLS manifest phải chứa các điểm đánh dấu để mô tả lịch phát sóng quảng cáo. Đây là tùy chọn đối với nội dung VOD, thay vào đó có thể sử dụng bộ định thời gian VMAP.

HLS manifest phải có vùng quảng cáo được đánh dấu bằng các thẻ sau:

* `#EXT-X-CUE-OUT` / `#EXT-X-CUE-IN` (phổ biến hơn) với thời lượng như minh họa trong ví dụ sau.
```
#EXT-X-CUE-OUT:60,00
#EXT-X-CUE-IN
```

Cách bạn định cấu hình điểm đánh dấu quảng cáo trong tệp kê khai ảnh hưởng đến việc quảng cáo được chèn vào luồng hay thay thế các đoạn khác trong luồng

HLS Manifest Master phải tuân thủ theo định nghĩa của HLS. Đặc biệt, #EXT-X-STREAM-INF phải bao gồm các trường **RESOLUTION**, **BANDWIDTH** và **CODEC**.


### Chuẩn bị luồng DASH

DASH manifest (mpd) phải đáp ứng các yêu cầu sau:
* `DASH manifest` phải có thể truy cập được trên internet.\
* `DASH manifest` phải trực tiếp hoặc video theo yêu cầu (VOD).

* Ví dụ sau đây cho thấy một sự kiện được chỉ định là lịch phát sóng quảng cáo bằng cách sử dụng điểm đánh dấu` EventStream`. Thời lượng cho quảng cáo này là thời lượng của sự kiện.

```
   <Period start="PT444806.040S" id="123586" duration="PT15.000S">
     <EventStream timescale="90000" schemeIdUri="urn:scte:scte35:2013:xml">
       <Event duration="1350000">
         <scte35:SpliceInfoSection protocolVersion="0" ptsAdjustment="180832" tier="4095">
           <scte35:SpliceInsert spliceEventId="4026531855" spliceEventCancelIndicator="false" outOfNetworkIndicator="true" spliceImmediateFlag="false" uniqueProgramId="1" availNum="1" availsExpected="1">
             <scte35:Program><scte35:SpliceTime ptsTime="5672624400"/></scte35:Program>
             <scte35:BreakDuration autoReturn="true" duration="1350000"/>
           </scte35:SpliceInsert>
         </scte35:SpliceInfoSection>
       </Sự kiện>
     </EventStream>
     <AdaptationSet mimeType="video/mp4"
         ...
     </AdaptationSet>
   </Period>
```
* Ad avails cần phải có cấu hình `AdaptationSet` and `Representation`  trùng với luồng nội dung ban đầu. `Sigma Dynamic Ads Insert`  sử dụng những cấu hình này để có thể chuyển mã các luồng quảng cáo phù hợp.

## Bước 3: (Optional) Chuẩn bị cấu hình các tham số URL của máy chủ quảng cáo (Ads Request) và các tham số truy vấn( parameter)

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
* **player_params:**  là bên player truyền vào, back-end sẽ thay thế theo param tuơng ứng mà player truyền vào.
* **session param**: Các param có sẵn 
  * `session.ip` : ip của máy người dùng. 
  * `session.user_agent` : user agent của máy người dùng
  * `stce.duration` : bản chất là available duration- điểm đánh dấu độ dài thời lượng.


**Ví dụ URL thẻ quảng cáo** 

```
http://dai.sigmaott.com/manifest/manipulation/master/6462b8f2-a0f1-40b3-b542-af4098fc5d13/master.m3u8?play_params.origin=origin-ott-v2.gviet.vn&play_params.adsServer=172.16.20.221&play_params.cdnAdSegmentPrefix=dev-livestream.gviet.vn&play_params.cdnContentSegmentPrefix=origin-ott-v2.gviet.vn

```

## Bước 4: Tạo mới cấu hình kênh SSAI

Cấu hình SSAI chứa thông tin liên kết cho máy chủ gốc và quảng cáo.
Để quảng cáo có thể thực hiện nhiệm vụ của nó và thu thập dữ liệu về, bạn **cần tạo 1 kênh** để chứa nó đồng thời kiểm soát các nội dung trực tuyến đến từng đối tượng khách hàng. 

### Để tạo mới kênh

1. Tại mục danh sách kênh, click vào nút **Tạo kênh**
2. Hệ thống hiển thị Pop-up Tạo kênh.
3. Người dùng nhập các thông tin theo yêu cầu.
4. Thực hiện tạo mới.

Ví dụ cấu hình: 

* Nguồn nội dung video: `https://origin.com/manifest`
    * Với cấu hình trên, ta có thể sử dụng cho nhiều luồng HLS, DASH có đánh dấu quảng cáo được bắt đầu bởi prefix trên như: 
        * `https://origin.com/manifest/channel1/master.m3u8`
        * `https://origin.com/manifest/channel2/master.m3u8`

* Máy chủ quảng cáo: `https://ads.sdp.com/vast-tag`
* Phân đoạn nội dung CDN: `https://example.cdn.net`
    * Các tệp tin nội dung segment sẽ được thay thể bởi cdn được cấu hình trên
    * 

Khi hoàn tất, bạn sẽ có thể mở trình duyệt, nhập URL phát lại cho kênh của mình và xem luồng của kênh có chứa quảng cáo.

## Bước 5: Kiểm tra cấu hình

Người dùng có thể xem danh sách các quảng cáo hiển thị trên kênh, với các thông tin liên quan tới quảng cáo. Kiểm tra luồng bằng URL ở định dạng thích hợp cho giao thức phát trực tuyến của bạn.

### Để xem chi tiết kênh

1. Tại giao diện danh sách kênh, hiển thị thông tin chi tiết kênh khi di chuyển chuột và click vào **Tên kênh.**
2. Hệ thống hiển thị thông tin chi tiết kênh.
3. Người dùng xem các thông tin chi tiết kênh và có thể **sử dụng các URL** để chạy kênh mong muốn.

*Sau khi người dùng cấu hình kênh, SSAI trả về Playback Endpoint Prefixes gồm:*

1. Ví dụ link Session initalization playback prefix( link khởi tạo). (**Sử dụng khi dùng Client Side Tracking**)

```
http://dai.sigmaott.com/manifest/manipulation/session/0f18d489-6b27-4832-9849-ff9b9e7c35f0
```

2. Ví dụ HLS playback prefix: 

```
http://dai.sigmaott.com/manifest/manipulation/master/0f18d489-6b27-4832-9849-ff9b9e7c35f0
```

3. Ví dụ DASH playback prefix:

```
http://dai.sigmaott.com/manifest/manipulation/dash/0f18d489-6b27-4832-9849-ff9b9e7c35f0
```



**Trong đó**: 

* `http://dai.sigmaott.com/manifest/manipulation/` là **playback-endpoint** đường dẫn để để có thể gọi lấy chạy được luồng thông qua **Sigma DAI**
* `0f18d489-6b27-4832-9849-ff9b9e7c35f0`: tương đương với định danh duy nhất của cấu hình kênh



**Ghép nối với luồng chạy thực tế**

Từ cấu hình trên bạn có thể ghép nối với các luồng nội dung có quảng cáo như sau

* Ví dụ bạn có 2 luồng HLS và DASH từ nguồn nội dung như sau: 
    * HLS: `https://origin.com/manifest/channel1/master.m3u8`
    * DASH: `https://origin.com/manifest/channel1/master.mpd`
* Trong cấu hình kênh bạn cấu hình nguồn nội dung là `https://origin.com/manifest`
* Ta sẽ có 2 luồng có thể ghép nối vào prefix ở trên như sau:
    * HLS: `/channel1/master.m3u8`
    * DASH: `/channel1/master.mpd`
    
* Ghép vào các cấu hình prefix ở trên ta được:
    * HLS:

```
http://dai.sigmaott.com/manifest/manipulation/master/0f18d489-6b27-4832-9849-ff9b9e7c35f0/channel1/master.m3u8
```
    * DASH:

```
http://dai.sigmaott.com/manifest/manipulation/dash/0f18d489-6b27-4832-9849-ff9b9e7c35f0/channel1/master.mpd
```


## Bước 6: Gửi thông tin yêu cầu đến máy chủ SSAI

Thí dụ
Giả sử URL ADS mẫu của bạn là như sau.

```
https://my.ads.com/ad?output=vast&content_id=12345678&playerSession=[session.id]&cust_params=[play_params.cust_params]
```

Sau đó, xác định [**play_params.cust_params**] trong yêu cầu của tệp tin manifest bằng cách đặt trước cặp khóa-giá trị với quảng cáo.

Ví dụ Sau **bước 5** ta có URL của luồng  HLS và DASH sau đây.

```
http://dai.sigmaott.com/manifest/manipulation/master/0f18d489-6b27-4832-9849-ff9b9e7c35f0/channel1/master.m3u8?play_params.cust_params=viewerinfo
```

```
http://dai.sigmaott.com/manifest/manipulation/master/0f18d489-6b27-4832-9849-ff9b9e7c35f0/channel1/master.mpd?play_params.cust_params=viewerinfo
```

Khi hệ thống Sigma Dynamic Ads Insert nhận được yêu cầu từ đường dẫn trên,, nó sẽ xác định các biến của player dựa trên thông tin trong URL. Khi có yêu cầu quảng cáo, dựa vào các biến trên sẽ sinh ra 1 biến thể của đường dẫn như sau

```
https://my.ads.com/ad?output=vast&content_id=12345678&playerSession=<filled_in_session_id>&cust_params=viewerinfo
```

Để biết thêm thông tin về cách định cấu hình các cặp khóa-giá trị để chuyển đến Máy chủ quảng cáo,

## Bước 7: Dọn dẹp (Xoá kênh)

Sau khi đã tạo kênh và khởi chạy, bạn cần dừng kênh và đóng kênh hoặc tránh các kênh không cần thiết, vui lòng thực hiện xoá kênh.

### Để xoá kênh
1. Tại giao diện danh sách kênh, chọn kênh cần xoá, Click vào icon **Xoá.**
2. Hiển thị Pop-up xác nhận, chọn nút **Xác nhận.**
3. Hệ thống thực hiện xoá kênh và ở lại giao diện Danh sách kênh.
