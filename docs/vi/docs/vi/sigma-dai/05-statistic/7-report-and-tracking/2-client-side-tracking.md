---
title: Tracking từ phía client
order: 2
---

# Tracking từ phía client

Với báo cáo phía máy khách, Sigma DAI sẽ ủy quyền việc tracking quảng cáo cho phía máy khách bằng việc cung cấp api để client có thể lấy các thông tin về tracking quảng cáo và gửi thông tin cần thiết về server quảng cáo đó

Có 2 phương pháp để có thể thực hiện việc tracking quảng cáo từ phía máy khách

## Chuẩn bị

Để chuẩn bị cho việc tracking quảng cáo từ phía máy khách, bạn cần chuẩn bị các nội dung sau:

- Khởi tạo kênh SSAI
- Chuẩn bị đường dẫn khởi tạo session tại chi tiết của kênh vừa khởi tạo

![Client side tracking url](/images/dai/client-tracking-session-url.png)


## 1. Sử dụng SDK được cung cấp bởi Sigma DAI

Hệ thống cung cấp SDK client tracking trên 3 nền tảng phổ biến gồm

- [Web SDK](https://github.com/sigmaott/sigma-ssai-web-sdk)
- [ExoPlayer SDK](https://github.com/sigmaott/sigma-ssai-exo-sdk)
- [AVPlayer SDK](https://github.com/sigmaott/sigma-ssai-avplayer-sdk)


## 2. Sử dụng API được cung cấp bởi Sigma DAI



![Client side tracking flow diagram](/images/dai/client-side-tracking-diagram.png)

#### 2.1. **Tạo một yêu cầu khởi tạo phiên với các đối số truyền vào.**


- Cung cấp các tham số cần truyền vào query param

 Ví dụ: HLS

```json
GET  /manifest/manipulation/session/0f18d489-6b27-4832-9849-ff9b9e7c35f0/origin04/scte35-av/master.master?play_params.origin=abc.com

{
    "manifestUrl": "/manifest/manipulation/master/0f18d489-6b27-4832-9849-ff9b9e7c35f0/origin04/scte35-av/master.m3u8?sessionId=0e7b8f8e-c4a0-472b-8cc3-fa8d98519e30",
    "trackingUrl": "/manifest/manipulation/tracking/0f18d489-6b27-4832-9849-ff9b9e7c35f0/0e7b8f8e-c4a0-472b-8cc3-fa8d98519e30"
}
```

Ví dụ:DASH

```json
GET  /manifest/manipulation/session/0f18d489-6b27-4832-9849-ff9b9e7c35f0/origin04/scte35-av/master.mpd

{
    "manifestUrl": "/manifest/manipulation/dash/0f18d489-6b27-4832-9849-ff9b9e7c35f0/origin04/scte35-av/master.mpd?sessionId=f0e8dd9f-fe76-4a0c-be9e-2917515948e8",
    "trackingUrl": "/manifest/manipulation/session/0f18d489-6b27-4832-9849-ff9b9e7c35f0/f0e8dd9f-fe76-4a0c-be9e-2917515948e8"
}
```

#### 2.2. **Client lấy manifest bằng link manifestUrl**

Client lấy đường dẫn **manifestUrl** được trả về từ phiên khởi tạo để có thể thực hiện play

#### 2.3 **Client định kì gọi lấy thông tin bằng link trackingUrl**

Với đường dẫn **trackingUrl**, client thực hiện việc gọi định kì lên server để lấy thông tin về quảng cáo sẽ được chèn, thông tin về quảng cáo bao gồm:

- `ads.id:`  id của ads
- `trackingEvents.eventType`: loại event
- `avail.id` : id của điểm quảng cáo
- `trackingEvents.startTimeInSeconds`: Vị trí thời gian ở định dạng giây, so với thời điểm bắt đầu phiên phát lại. Phản hồi bao gồm thời gian bắt đầu cho toàn bộ lịch phát sóng quảng cáo cũng như cho từng quảng cáo và đèn hiệu.
- `trackingEvents.durationInSeconds`: Độ dài ở định dạng giây. Phản hồi bao gồm thời lượng cho toàn bộ thời lượng quảng cáo cũng như cho từng quảng cáo và đèn hiệu.
- `trackingEvents.beaconUrls`: Nơi gửi từng đèn hiệu quảng cáo.
- `adVerification`: Chứa tài nguyên và siêu dữ liệu cần thiết để thực thi mã đo lường của bên thứ ba nhằm xác minh phát lại quảng cáo. Để biết thêm thông tin về phần tử AdVerifications, hãy xem đặc tả VAST 4.2, mục 3.16.



Ví dụ kết quả trả về

```json
{
   "avails":[
      {
         "id":1324885,
         "startTimeInSeconds":32,
         "ads":[
            {
               "id":"streamingtech_ad",
               "position":0,
               "trackingEvents":[
                  {
                     "eventType":"impression",
                     "startTimeInSeconds":32,
                     "beaconUrls":[
                        "about:blank"
                     ]
                  },
                  {
                     "eventType":"complete",
                     "startTimeInSeconds":42,
                     "beaconUrls":[
                        "http://172.16.20.221/api/v1/sessions/ce98ffc1-226e-48f9-a7e2-51484f6a219e/tracking?adId=streamingtech_ad\u0026progress=100"
                     ]
                  }
               ],
               "startTimeInSeconds":42,
               "durationInSeconds":10
            },
            {
               "id":"25percent-ad_001",
               "position":1,
               "trackingEvents":[
                  {
                     "eventType":"impression",
                     "startTimeInSeconds":42,
                     "beaconUrls":[
                        "about:blank"
                     ]
                  },
                  {
                     "eventType":"complete",
                     "startTimeInSeconds":47,
                     "beaconUrls":[
                        "http://172.16.20.221/api/v1/sessions/ce98ffc1-226e-48f9-a7e2-51484f6a219e/tracking?adId=25percent-ad_001\u0026progress=100"
                     ]
                  }
               ],
               "adVerifications":[
                  {
                     "vendor":"vendor1",
                     "javaScriptResource":[
                        {
                           "apiFramework":"omid",
                           "browserOptional":"true",
                           "uri":"https://verificationcompany1.com/verification_script1.js"
                        }
                     ],
                     "verificationParameters":""
                  },
                  {
                     "vendor":"vendor2",
                     "executableResource":[
                        {
                           "apiFramework":"omid",
                           "type":"exe",
                           "uri":"https://verificationcompany.com/untrusted.exe"
                        }
                     ],
                     "trackingEvents":[
                        {
                           "event":"verificationNotExecuted",
                           "uri":"https://verificationcompany/comdkvkasfakj"
                        }
                     ]
                  }
               ],
               "startTimeInSeconds":47,
               "durationInSeconds":5
            }
         ]
      }
   ]
}
```

3.1 Theo dõi bằng segment

Các link segment quảng cáo sẽ có dạng:

```markdown
http://<<domain>>/manifest/manipulation/master/segment/:endpoint/:sessionId/:availId/:adId/:position/:currentSegment/:lengthSegment/*
Trong đó:
  sessionId: là id của phiên
  availId: là id của các điểm quảng cáo phù hợp
  adId: là id của ads
  position: là vị trí của ads trong điểm quảng cáo[0->n]
  currentSegment: là số thứ tự segment đó [1->n]
  lengSegment: là tổng số segment của  quảng cáo đó  được transcode


```

 Dựa vào tỉ lệ :

```markdown
percent= currentSegment/lengSegment
```

 để tracking tương ứng.

3.2 Theo dõi theo thời gian play

   Kiểm tra thời gian play thực tế > startTimeInSeconds  của các sự kiện tương ứng đển tracking



3.1 **Khi có quảng cáo trong manifest HLS**

      Các url segment quảng cáo sẽ được đánh dấu bằng  title có giá trì là ads  trong  thẻ [EXTINF](https://datatracker.ietf.org/doc/html/draft-pantos-http-live-streaming-23#section-4.3.2.1).

```json

#EXTM3U
#EXT-X-VERSION:6
#EXT-X-MEDIA-SEQUENCE:3319311
#EXT-X-TARGETDURATION:2
#EXT-X-KEY:METHOD=AES-128,URI="http://123.30.172.11:2260/key/key.bin",IV=0x0000000000000000000000000032a60f,KEYFORMAT="identity"
#EXTINF:2.000,
https://on-live.gviet.vn/origin04/scte35-av/480-3319311.ts
#EXT-X-DISCONTINUITY
#EXT-X-KEY:METHOD=NONE
#EXTINF:2.000,
https://dev-livestream.gviet.vn/asset/default-app/ssai-bumper-5d1d82b4-2646-4e69-ab78-5c910b0b9cb5/f1303830-075c-4128-a898-bc5955cc06a9/hls-mix/360p/360p-1.ts
#EXTINF:2.000,
https://dev-livestream.gviet.vn/asset/default-app/ssai-bumper-5d1d82b4-2646-4e69-ab78-5c910b0b9cb5/f1303830-075c-4128-a898-bc5955cc06a9/hls-mix/360p/360p-2.ts
#EXTINF:1.000,
https://dev-livestream.gviet.vn/asset/default-app/ssai-bumper-5d1d82b4-2646-4e69-ab78-5c910b0b9cb5/f1303830-075c-4128-a898-bc5955cc06a9/hls-mix/360p/360p-3.ts
#EXT-X-DISCONTINUITY
#EXTINF:2.000,ads
../../../segment/8f8b4e23-1ed5-4e2d-93ef-3f8aff606245/32d8eecd-eccf-46f9-a3e4-834c55539e31/3319312/streamingtech_ad/0/1/5/default-app/streamingtech_ad/6837ba75-2355-43b8-8007-865e0775aaaa/hls-mix/480p/480p-1.ts
#EXTINF:2.000,ads
../../../segment/8f8b4e23-1ed5-4e2d-93ef-3f8aff606245/32d8eecd-eccf-46f9-a3e4-834c55539e31/3319312/streamingtech_ad/0/2/5/default-app/streamingtech_ad/6837ba75-2355-43b8-8007-865e0775aaaa/hls-mix/480p/480p-2.ts
#EXTINF:2.000,ads
../../../segment/8f8b4e23-1ed5-4e2d-93ef-3f8aff606245/32d8eecd-eccf-46f9-a3e4-834c55539e31/3319312/streamingtech_ad/0/3/5/default-app/streamingtech_ad/6837ba75-2355-43b8-8007-865e0775aaaa/hls-mix/480p/480p-3.ts
#EXTINF:2.000,ads
../../../segment/8f8b4e23-1ed5-4e2d-93ef-3f8aff606245/32d8eecd-eccf-46f9-a3e4-834c55539e31/3319312/streamingtech_ad/0/4/5/default-app/streamingtech_ad/6837ba75-2355-43b8-8007-865e0775aaaa/hls-mix/480p/480p-4.ts
#EXTINF:2.000,ads
../../../segment/8f8b4e23-1ed5-4e2d-93ef-3f8aff606245/32d8eecd-eccf-46f9-a3e4-834c55539e31/3319312/streamingtech_ad/0/5/5/default-app/streamingtech_ad/6837ba75-2355-43b8-8007-865e0775aaaa/hls-mix/480p/480p-5.ts
#EXT-X-DISCONTINUITY
#EXTINF:2.000,
https://dev-livestream.gviet.vn/asset/default-app/ssai-bumper-5d1d82b4-2646-4e69-ab78-5c910b0b9cb5/f1303830-075c-4128-a898-bc5955cc06a9/hls-mix/360p/360p-1.ts
```

3.2 **Khi có quảng cáo trong manifest DASH**

   Khi có quảng cáo bên dash thì sẽ xuất hiện thẻ Event trong thẻ EventStream trong Period. Period đó được đánh dấu là peroid quảng cáo.

```json
<Period id="0_stce35=false,replace=false_PT1579H28M48.2S" start="PT1579H28M48.2S">
    <EventStream schemeIdUri="http://hbbtv.org/refapp" value="1a2b3m" timescale="1000">
        <Event presentationTime="0" duration="900000" id="10">Ads</Event>
    </EventStream>
    <BaseURL>http://localhost:8000/manifest/manipulation/segment/8f8b4e23-1ed5-4e2d-93ef-3f8aff606245/9c334625-1a14-49a9-a4a6-f2ca6bde3289/1855489/streamingtech_ad/0/</BaseURL>
    <AdaptationSet startWithSAP="1" id="0" segmentAlignment="true" contentType="video" bitstreamSwitching="false">
        <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main"></Role>
        <SegmentTemplate presentationTimeOffset="0" initialization="https://dev-livestream.gviet.vn/asset/default-app/streamingtech_ad/6837ba75-2355-43b8-8007-865e0775aaaa/dash/$RepresentationID$/$RepresentationID$-810055c1-init.m4s" media="$Number%01d$/5/default-app/streamingtech_ad/6837ba75-2355-43b8-8007-865e0775aaaa/dash/$RepresentationID$/$RepresentationID$-$Number%01d$-810055c1.m4s" startNumber="1" timescale="90000">
            <SegmentTimeline>
                <S t="0" d="180000"></S>
                <S t="180000" d="180000"></S>
                <S t="360000" d="180000"></S>
                <S t="540000" d="180000"></S>
                <S t="720000" d="180000"></S>
            </SegmentTimeline>
        </SegmentTemplate>
        <Representation mimeType="video/mp4" bandwidth="2700000" codecs="avc1.640028" frameRate="25/1" height="1080" id="1080p" width="1920"></Representation>
        <Representation mimeType="video/mp4" bandwidth="1700000" codecs="avc1.640028" frameRate="25/1" height="720" id="720p" width="1280"></Representation>
        <Representation mimeType="video/mp4" bandwidth="469000" codecs="avc1.640028" frameRate="25/1" height="360" id="360p" width="480"></Representation>
        <Representation mimeType="video/mp4" bandwidth="504000" codecs="avc1.640028" frameRate="25/1" height="480" id="480p" width="858"></Representation>
    </AdaptationSet>
    <AdaptationSet startWithSAP="1" id="1" segmentAlignment="true" lang="vie" contentType="audio" bitstreamSwitching="false">
        <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"></AudioChannelConfiguration>
        <Role schemeIdUri="urn:mpeg:dash:role:2011" value="main"></Role>
        <SegmentTemplate presentationTimeOffset="0" initialization="https://dev-livestream.gviet.vn/asset/default-app/streamingtech_ad/6837ba75-2355-43b8-8007-865e0775aaaa/dash/$RepresentationID$/$RepresentationID$-810055c1-init.m4s" media="https://dev-livestream.gviet.vn/asset/default-app/streamingtech_ad/6837ba75-2355-43b8-8007-865e0775aaaa/dash/$RepresentationID$/$RepresentationID$-$Number%01d$-810055c1.m4s" startNumber="1" timescale="44100">
            <SegmentTimeline>
                <S t="0" d="89088"></S>
                <S t="89088" d="88064"></S>
                <S t="177152" d="88064"></S>
                <S t="265216" d="88064"></S>
                <S t="353280" d="87897"></S>
            </SegmentTimeline>
        </SegmentTemplate>
        <Representation mimeType="audio/mp4" audioSamplingRate="44100" bandwidth="97000" codecs="mp4a.40.2" id="aac"></Representation>
    </AdaptationSet>
</Period>
```

[ssai-tracking-sdk](https://www.notion.so/ssai-tracking-sdk-4f95b384681e4587b76f32787a6d75ae?pvs=21)