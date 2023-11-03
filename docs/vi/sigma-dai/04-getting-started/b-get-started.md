---
title: Bắt đầu với SSAI
order: 2
---

# Bắt đầu với SSAI

## Thiết lập ad insert endpoint

Để thiết lập ad insert endpoint bạn cần chuẩn bị các tác vụ sau:
* Chuẩn bị luồng nội dung HLS hoặc DASH của bạn.
* Chuẩn bị đường dẫn yêu cầu quảng cáo (Ads Request).
* Tạo cấu hình ad insert endpoint SSAI.
* Sử dụng đường dẫn SSAI sinh ra để cấu hình ad insert endpoint trên ứng dụng.
* Thu thập, theo dõi các thông số cần thiết.

Khi hoàn tất, bạn sẽ có thể gửi yêu cầu phát lại tới SSAI cho nội dung quảng cáo được cá nhân hóa trong luồng của mình.


## Chuẩn bị

Trước khi bắt đầu, bạn cần chuẩn bị các tác vụ sau:
- Có tài khoản truy cập hệ thống quản lý của **Sigma Streaming Platform** `https://portal.sigmaott.com`
- Tài khoản có quyền truy cập app được phân quyền với SSAI.


## Bước 1: Truy cập vào hệ thống Sigma Dynamic Ads Insert

Để sử dụng Sigma Dynamic Ads Insert( DAI), bạn cần có tài khoản và quyền truy cập, xem và thực hiện các hành động được phép.
1. Truy cập vào đường link `https://portal.sigmaott.com/app`
2. Hiển thị Danh sách App, **chọn ứng dụng** cần truy cập.
3. Hiển thị mặc định vào trang **tổng quan ứng dụng.**
4. Ở sidebar, chọn sản phẩm DAI.
5. Hiển thị trang mặc định ở Trang Thông tin Khách hàng (Customer Dashboard).

## Bước 2: Chuẩn bị luồng

### Chuẩn bị luồng HLS

Các tập tin HLS manifest phải đáp ứng các yêu cầu sau:
* Các tệp tin manifest phải có thể truy cập được trên internet
* Tệp kê khai phải có `EXT-X-VERSION` từ `3` trở lên.

Đối với nội dung trực tiếp, HLS manifest phải chứa các điểm đánh dấu để mô tả lịch phát sóng quảng cáo. Đây là tùy chọn đối với nội dung VOD, thay vào đó có thể sử dụng bộ định thời gian VMAP.

HLS manifest phải có vùng quảng cáo được đánh dấu bằng các thẻ sau:

* `#EXT-X-CUE-OUT` / `#EXT-X-CUE-IN` (phổ biến hơn) với thời lượng như minh họa trong ví dụ sau:
```
#EXT-X-CUE-OUT:60,00
#EXT-X-CUE-IN
```

Cách bạn định cấu hình điểm đánh dấu quảng cáo trong tệp kê khai ảnh hưởng đến việc quảng cáo được chèn vào luồng hay thay thế các đoạn khác trong luồng

HLS Manifest Master phải tuân thủ theo định nghĩa của HLS. Đặc biệt, #EXT-X-STREAM-INF phải bao gồm các trường **RESOLUTION**, **BANDWIDTH** và **CODEC**.


### Chuẩn bị luồng DASH

DASH manifest (mpd) phải đáp ứng các yêu cầu sau:
* `DASH manifest` phải có thể truy cập được trên internet.
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

Parameter, thường được viết tắt là "Param," là một giá trị được lựa chọn cho từng trường hợp cụ thể và liên quan đến các biến khác có thể biểu thị, mô tả những đặc điểm quan trọng sử dụng để định rõ một vấn đề cụ thể.

Để cấu hình SSAI để chuyển dữ liệu từ trình phát đến ADS qua URL mẫu ADS, bạn cần chỉ định các biến `player_params` bằng cách sử dụng `<query_parameter_name>.`

Ví dụ: Nếu trình phát gửi tham số truy vấn có tên `user_id` trong yêu cầu của mình đến SSAI, bạn có thể xác định `user_id` trong yêu cầu ADS bằng cách bao gồm `[play_params.user_id]`  trong cấu hình URL ADS.

### Khi nào cần cấu hình param?

Để có khả năng truyền các thông tin như **tuổi** và **giới tính** của người dùng, chúng ta cần xác định các thông tin này khi gọi quảng cáo hoặc khi yêu cầu thông tin từ origin.

Ví dụ: 

Phân đoạn nội dung CDN đến Phân đoạn quảng cáo CDN.

Trong trường hợp liên kết quảng cáo chạy trên CDN theo thứ tự, nếu CDN 1 không hoạt động, CDN 2 sẽ thay thế nó.

### Loại
Có hai loại tham số (param):

* **play_params**: Là thông tin mà trình phát gửi lên thông qua đường dẫn phát lại, và phía máy chủ sẽ thay thế dựa trên các tham số mà trình phát truyền lên.

* **session param**: Các tham số sẵn có bao gồm:

    * `session.ip` : Địa chỉ IP của máy người dùng.
    * `session.user_agent` : User Agent của máy người dùng.
    * `stce.duration` : Được xem xét là thời gian truy cập có sẵn, đánh dấu thời lượng sẵn có.

**Ví dụ URL playback sử dụng play_params** 

```
http://dai.sigmaott.com/manifest/manipulation/master/xxx/master.m3u8?play_params.devideId=abc&play_params.gender=male

```

Trong đó có 2 **play_params** được truyền lên:
- **play_params.devideId**: abc 
- **play_params.gender**: male



Client sẽ thực hiện playback với đường dẫn trên và server SSAI sẽ ghi nhận thông tin về **parameters** 

Bạn có thể sử dụng tham số template **parameters** cho đường dẫn vast ads server như ví dụ sau:

```
http://ads.com/tags.xml?gender=[play_params.gender]&did=[play_params.devideId]
```

Hệ thống SSAI sẽ thay thế các tham số trên bằng các giá trị tương ứng được truyền lên từ client. ta được giá trị sau

```
http://ads.com/tags.xml?gender=male&did=abc
```

Như vậy các thông tin của parameter sẽ được truyền từ client lên ads server thông qua yêu cầu lấy quảng cáo.


## Bước 4: Tạo mới cấu hình ad insert endpoint SSAI

Để thiết lập SSAI và kết nối thông tin giữa máy chủ gốc và quảng cáo, bạn cần tạo một ad insert endpoint để chứa giúp quảng cáo thực hiện nhiệm vụ của nó đồng thời kiểm soát các nội dung trực tuyến đến từng đối tượng khách hàng.

### Để tạo mới ad insert endpoint

1. Tại mục danh sách ad insert endpoint, click vào button **Tạo ad insert endpoint**
2. Hệ thống hiển thị Pop-up Tạo ad insert endpoint.
3. Người dùng nhập các thông tin theo yêu cầu.
4. Thực hiện tạo mới.

Ví dụ cấu hình: 

* Nguồn nội dung video: `https://origin.com/manifest`
    * Với cấu hình trên, ta có thể sử dụng cho nhiều luồng HLS, DASH có đánh dấu quảng cáo được bắt đầu bởi prefix trên như: 
        * `https://origin.com/manifest/channel1/master.m3u8`
        * `https://origin.com/manifest/channel2/master.m3u8`

* Máy chủ quảng cáo: `https://ads.sdp.com/vast-tag`
* Phân đoạn nội dung CDN: `https://example.cdn.net`
    * Các tệp tin nội dung segment sẽ được thay thế bởi cdn được cấu hình trên.

Khi hoàn tất, bạn sẽ có thể mở trình duyệt, nhập URL phát lại cho ad insert endpoint của mình và xem luồng của ad insert endpoint có chứa quảng cáo.

## Bước 5: Kiểm tra cấu hình

Người dùng có thể xem danh sách các quảng cáo hiển thị trên ad insert endpoint, với các thông tin liên quan tới quảng cáo. Kiểm tra luồng bằng URL ở định dạng thích hợp cho giao thức phát trực tuyến của bạn.

### Để xem chi tiết ad insert endpoint

1. Tại giao diện danh sách ad insert endpoint, hiển thị tooltip**xem chi tiết** khi hover chuột, người dùng click vào **tên ad insert endpoint** để xem thông tin chi tiết.
2. Hệ thống hiển thị thông tin chi tiết ad insert endpoint.
3. Người dùng xem các thông tin chi tiết ad insert endpoint và có thể **sử dụng các URL** để chạy ad insert endpoint mong muốn.

*Sau khi người dùng cấu hình ad insert endpoint, SSAI trả về Playback Endpoint Prefixes gồm:*

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
* `0f18d489-6b27-4832-9849-ff9b9e7c35f0`: tương đương với định danh duy nhất của cấu hình ad insert endpoint.

**Ghép nối với luồng chạy thực tế**

Từ cấu hình trên bạn có thể ghép nối với các luồng nội dung có quảng cáo như sau

* Ví dụ bạn có 2 luồng HLS và DASH từ nguồn nội dung như sau: 
    * HLS: `https://origin.com/manifest/channel1/master.m3u8`
    * DASH: `https://origin.com/manifest/channel1/master.mpd`
* Trong cấu hình ad insert endpoint bạn cấu hình nguồn nội dung là `https://origin.com/manifest`
* Ta sẽ có 2 luồng có thể ghép nối vào prefix ở trên như sau:
    * HLS: `/channel1/master.m3u8`
    * DASH: `/channel1/master.mpd`
    
* Ghép vào các cấu hình prefix ở trên ta được:
    * HLS:
`
http://dai.sigmaott.com/manifest/manipulation/master/0f18d489-6b27-4832-9849-ff9b9e7c35f0/channel1/master.m3u8
`

    * DASH:
`
http://dai.sigmaott.com/manifest/manipulation/dash/0f18d489-6b27-4832-9849-ff9b9e7c35f0/channel1/master.mpd
`

## Bước 6: Gửi thông tin yêu cầu đến máy chủ SSAI

Giả sử URL ADS mẫu của bạn là như sau:

```
https://my.ads.com/ad?output=vast&content_id=12345678&playerSession=[session.id]&cust_params=[play_params.cust_params]
```

 Sau đó, xác định [**play_params.cust_params**] trong yêu cầu của tệp tin manifest bằng cách đặt trước cặp khóa-giá trị với quảng cáo.

Ví dụ Sau **bước 5** ta có URL của luồng  HLS và DASH sau đây:

```
http://dai.sigmaott.com/manifest/manipulation/master/0f18d489-6b27-4832-9849-ff9b9e7c35f0/channel1/master.m3u8?play_params.cust_params=viewerinfo
```

```
http://dai.sigmaott.com/manifest/manipulation/master/0f18d489-6b27-4832-9849-ff9b9e7c35f0/channel1/master.mpd?play_params.cust_params=viewerinfo
```


Khi hệ thống Sigma Dynamic Ads Insert (SDAI) tiếp nhận một yêu cầu từ một URL cụ thể, nó sẽ xác định các biến của player dựa trên thông tin trong URL. Khi có yêu cầu để chèn quảng cáo, hệ thống sẽ tạo ra một biến thể của URL dựa trên các biến này như sau:

```
https://my.ads.com/ad?output=vast&content_id=12345678&playerSession=<filled_in_session_id>&cust_params=viewerinfo
```

Để biết thêm thông tin về cách định cấu hình các cặp khóa-giá trị để chuyển đến Máy chủ quảng cáo,

## Bước 7: Dọn dẹp (Xoá ad insert endpoint)

Khi bạn đã tạo và khởi chạy điểm kết nối chèn quảng cáo (ad insert endpoint), sau đó, để ngừng hoạt động hoặc đóng điểm kết nối chèn quảng cáo không cần thiết, bạn cần thực hiện thao tác xoá ad insert endpoint như sau:

1. Trên giao diện danh sách ad insert endpoint, hãy chọn điểm kết nối chèn quảng cáo mà bạn muốn xoá, và sau đó nhấp vào icon **Xoá.**
2. Một hộp thoại xác nhận sẽ xuất hiện. Hãy chọn nút **Xác nhận** để tiếp tục.
3. Hệ thống sẽ thực hiện xoá ad insert endpoint và bạn sẽ trở về giao diện Danh sách ad insert endpoint sau khi hoàn thành quá trình xoá.