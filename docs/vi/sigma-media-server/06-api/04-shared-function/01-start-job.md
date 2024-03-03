---
title: Khởi tạo Job
order: 1
---

# Khởi tạo Job

Function Khởi tạo Job được sử dụng cho cả 2 trường hợp: tạo kênh mới và cập nhật kênh đang chạy. 
- Nếu **name** trùng với Job đang có thì Job sẽ được cập nhật.
- Nếu **name** không trùng với Job đang có thì Job sẽ được tạo mới.

::: info
- Các thông số cấu hình của Job sẽ không được lưu lại khi server bị tắt.
- Sử dụng trường **mode** để tạo Job cho Live Channel hoặc VOD Content.
- Trường **name** là định danh duy nhất của Job và được sử dụng để cập nhật hoặc tắt Job.
:::


## Request

sample

```json
{
  "type": "start",
  "name": "vtv3",
  "mode": "live",
  "gpu": -1,
  "input": {
    "main": "udp://234.5.6.7:8888",
    "backup": "udp://234.5.6.7:7777"
  },
  "target": [
    {
      "enable": 0,
      "format": "rtmp",
      "url": "rtmp://localhost/app/stream",
      "select": [
        "128k",
        "360"
      ]
    },
    {
      "enable": 1,
      "format": "hls",
      "url": "/mnt/ramdisk/origin04/source/",
      "select": [
        "128k",
        "360"
      ]
    },
    {
      "enable": 0,
      "format": "dash",
      "url": "/mnt/ramdisk/origin04/360/",
      "select": [
        "128k",
        "360",
        "source"
      ],
      "manifest":{
      },
      "drm:{
      }
    }
  ],
  "profile": [
    {
      "enable": 0,
      "id": "data",
      "type": "data",
      "codec": "copy",
      "streamIndex": 0,
      "sourceIndex": 0,
      "iframe": 50
    },
    {
      "id": "96k",
      "type": "audio",
      "codec": "aac",
      "bitrate": 96000
    },
    {
      "id": "360",
      "type": "video",
      "codec": "h264",
      "width": 640,
      "height": 360,
      "bitrate": 500000,
      "cbr": 1,
      "pixelFormat": "yuv420p",
      "watermark": [
        {
          "enable": 1,
          "x": 10,
          "y": 20,
          "url": "wm.png"
        }
      ]
    },
    {
      "id": "source",
      "type": "video",
      "codec": "copy"
    }
  ],
  "option": {
    "syncCopy": 1,
    "blackout": {
      "input": "blackout.jpg"
    }
  },
  "watermark":
  {
    "enable": 1,
    "x": 10,
    "y": 20,
    "url": "wm.png"
  },
  "thumb": {
    "enable": 1,
    "width": 300,
    "delay": 6,
    "name":"%d.jpg",
    "url": "/mnt/ramdisk/origin05/trial/thumb/"
  }
}
```

Trong đó:
* **Struct**: cấu trúc cơ bản
  - ***name***: định danh kênh để bật tắt
  - ***gpu***: thứ tự gpu chip, danh sách gpu lấy ở lệnh dump(chỉ hỗ trợ nvidia), -1 là sử dụng cpu
  - ***input***: danh sách input
  - ***profile***: danh sách profile
  - ***target***: danh sách target
  - ***watermark***: watermark chung cho kênh, nếu nhiều dùng array
  - ***thumb***: tạo thumnail cho kênh, nếu nhiều dùng array
  - ***option***: các cài đặt thêm
  - ***input***: có thể là 1 string, mảng string(nhiều input), hoặc 1 object cho kênh có backup

### Chi tiết các thành phần

* **profile**
  - ***id***: định danh của profile, nếu ở dạng hex[0x10->0x1ffe] sẽ dùng làm stream_id ở video đầu ra
  - ***streamIndex***: thứ tự của stream gốc trong input, ví dụ input có 2 audio thì có thể set cho audio là 0, 1
  - ***sourceIndex***: thứ tự của input
  - ***type***: [video, audio, data]
  - **audio**:
    + ***sampleRate***: [44100(default), 48000]
    + ***channel***: [1, 2(default), 6(5.1)]
    + ***codec***: [copy, aac(default), ac3, eac3, mp2]
    + ***profile***(chỉ cho aac): [aac_low(default), aac_he, aac_he_v2, aac_main, aac_ld, aac_eld]
    + ***volume***: thay đổi volume từ luồng gốc
      + "+5dB", "-10dB": thay đổi 1 lượng)
      + 0.5, 2 : giảm 1 nửa, gấp đôi
      + "loudnorm": tự động theo chuẩn EBU R128
    + ***language***: [2 characters string] en, vi, fr...
    + ***group***: [string] group id
    + ***label***: [string] display in player
  - **video**:
    + ***fps***: [20, 25(default), 30, 29.97, 59.94, 60]
    + ***codec***: [h264(default), hevc]
    + ***pixelFormat***: [yuv420p(default), yuv444p, yuv420p10le, yuv444p10le]
    + ***width, height***: [0, height], [width, 0], [width, height]
    + ***bitrate, minrate, maxrate, bufsize***: config bitrate
    + ***scaleType***: [fitWidth, fitHeight, fitInside, fitCrop, fitBoth, source]
       (chú ý: nếu để width, height, scaleType trong option tổng, nguồn sẽ scale trước khi xử lý tiếp theo)
    + ***cbr***: [0, 1], bật chế độ constant bitrate
    + ***cq***: [0 -> 51], chế độ constant quality
    + ***vmaf***: [90 -> 92], target vmaf for pte
    + ***interlaced***: [0, 1], chế độ video interlaced
    + ***watermark***: watermark riêng cho profile
    + ***profile, level***: [baseline(cho gpu), main 3.0 | 4.0, high 4.0 | 4.1 | 4.2]
    + ***preset***:
       + cpu: [veryfast, superfast]
       + gpu: [llhp, llhq]
    + ***rc***(chỉ cho gpu): [cbr_hq, cbr_hp] cho cbr, [vbr_hq, vbr_hp] cho vbr, rate control ghi cho preset
    + ***iframe***: đặt iframe
       + -1: tự động detect dựa vào manifest.ts
       + 0 : theo nguồn
       + [1->16]: số giây
       + [17->300]: số frame
    + ***hdr***(nên dùng pixelFormat yuv420p10le, codec hevc): [copy, none, hdr10, hlg10, pq10] hỗ trợ output hdr, hiện tại chỉ hỗ trợ mp4 container(dash hoặc hls+fmp4)
  - **data**: chỉ hỗ trợ copy codec
* **target**:
  - ***format***: [rtmp, udp, hls, dash, mss, hds, mp3, mp4, srt, aac, wav, webvtt]
  - ***select***: cấu hình profile output, mỗi phần tử có thể là profileId, profileId array, object
    + profileId: dùng cho các truờng hợp đơn giản như dash, mss
    + profileId array: dùng khi muốn gom nhóm audio, video cho hls, hds, ví dụ: 
          select:[
            [
              "480p",
              "480p-audio"
            ]
          ]
    + object: dùng khi muốn cấu hình chi tiết cho từng profileId hoặc profileId array, khi đó object sẽ chứa select riêng và object drm nếu có, ví dụ:
          select:[
            {
              "title":"VTV3",  // Tiêu đề kênh cho udp
              "id": 15,        // programId cho udp
              "drm":{
                "server":"http://drmproxy.com",
                "filter":"widevine+playready+fairplay"
              },
              "select": [
                "480p",
                "480p-audio"
              ]
            }
          ]
  - ***drm***: cấu hình drm
    + type:
      AES_128: hls
      SAMPLE_AES: hls ts(fairplay)
      SAMPLE_AES_CTR, SAMPLE_AES_CBC: hls fmp4, dash
    + filter: [fairplay, widevine, playready, hls_widevine, hls_playready, dash_widevine, dash_playready], dùng cho multidrm, lọc các loại drm system cho manifest
    + dùng trực tiếp:
      + ***uri***: key uri cho hls
      + ***key, keyId, iv***: base64
      + ***widevine, playready***: base64 của pssh tương ứng
      + ***systems***: [{"id":"systemId(edef8ba979d64acea3c827dcd51d21ed for widevine", "uri": "skd://...", "pssh": "base64 of pssh data"}]
      + ***expireTime***: số giây sẽ lấy lại thông tin key(dùng cho proxy mode)
    + dùng proxy: dữ liệu trả về dạng {data: {drm info khi dùng trực tiếp}}
      + ***server***: url để lấy thông tin
      + ***body***: body cho request đến server
  - ***manifest***(cho dash, hls)
    + ***ts***: [2 -> 10], ts duration
    + ***enableTime***(hls): [0, 1], chèn timestamp vào playlist
    + ***appendList***(hls): [0, 1], nối tiếp vào playlist cũ
    + ***endList***(hls): [0, 1], chèn tag endlist khi kết thúc
    + ***cache***: [-1 -> n] số file ts giữ lại khi xóa khỏi playlist, -1 là giữ lại hết
    + ***count***: [0 -> n], số ts giữ trong file playlist, 0 là giữ lại toàn bộ
    + ***singleFile***: [0, 1], bật chế độ không chia nhỏ file
    + ***fmp4***: [0, 1], dùng định dạng fmp4 cho segment
    + Quản lý tên, đường dẫn:
      + Pattern hỗ trợ:
        + ***%%d, %%06d***: index của ts
        + ***%%b***: bitrate của profile(chỉ dùng cho mss, hds)
        + ***%v***: tên của profile video(hoặc audio nếu không có video)
        + ***%%r***: thêm số random
        + ***%%t***: thêm startPts của ts, chỉ dùng cho dash tsName
        + ***., ..***: đường dẫn tương đối từ url chính 
      + ***masterName, masterPath, tsName, tsPrefix, initName, initPrefix, initPath***
      + ***indexName, indexPath, indexPrefix***: chỉ cho dash
      + mss chỉ hỗ trợ %%b, %%d
      + hds tsName bắt buộc phải là Seg1-Frag%%d, đồng thời tsPrefix phải khác rỗng(để tránh lỗi trên một số player), nên dùng: tsPrefix="%v/" tsPath "./%v/" 

    + ***persistent***: [0, 1], giữ kết nối http khi ghi file
    + ***masterExtra***: [string array ngăn cách bởi dấu phảy], ghi thêm file master ra một số tên khác
    + ***chunked***: [0.01 -> n], số giây của chunk khi dùng lowlatency hoặc mp4
    + ***chunkedType***: ["fragment","range", "combine"], loại low latency chia nhỏ hoặc byte-range, default: fragment
    + ***segment***: [0 -> n], số giây cắt đoạn video khi dùng format mp4
    + ***targetLatency***: [0 -> n], số giây latency cho lowlatency 
    + ***minLatency***: [0 -> n], số giây min latency cho lowlatency(dash)
    + ***maxLatency***: [0 -> n], số giây max latency cho lowlatency(dash)
    + ***header***: custom object for header
    + ***buffer***: [0 -> 60], buffer time (suggestedPresentationDelay for dash, #EXT-X-START:TIME-OFFSET for hls)
    + ***useThread***: [0, 1], open thread for sending manifest
* **watermark**: tọa độ, kích thước wm sẽ base trên 1920x1080 nếu không có scale
  - ***x, y***: [0 -> 1920, 0 -> 1080]tọa độ trên video
  - ***id***: định danh để bật tắt
  - ***scale***: [0.1 -> 3.0], scale kích thước watermark + tọa độ nếu cần
  - ***mediaScale***: [0.1 -> 3.0], scale nội dung trước khi xử lý
  - ***delay***: [0 -> 120], số giây dừng giữa 2 lần loop, dùng cho watermark động
  - ***enable***: [0, 1], ẩn hoặc hiện, có thể điều khiển bằng api 
* **thumbnail**
  - ***width***: [100 -> 1920]
  - ***delay***: [1 -> 60], thời gian giữa 2 ảnh
  - ***col, row***: [0 -> 10], dùng tạo dạng tile cho thumb, mặc định tắt

* **option**
  - ***syncCopy***: [0 - > 2], default 0(disable), đồng bộ luồng copy và transcode, 1 = drop non-idr keyframe, 2 = all frame
  - ***timeout***: [2 -> 10], default 6, ngắt luồng nếu bị dừng ở input, output, transcode
  - ***syncStream***: [1 -> n], default 1, ngắt luồng nếu tiếng và hình lệch nhau
  - ***gpu***: [-1, n], ghi đè gpu ở config
  - ***filterComplex***: custom filter cho transcode(có thể dùng giao diện kéo thả trên cms để tạo)
  - ***xerror***: [0, 1] reset kênh nếu phát hiện gói tin có khả năng gây lỗi
  - ***maxSpeed***: [0.1 -> 10], (default 1.1), tốc độ kênh tối đa
  - ***loop***: [0, n], số lần loop file
  - ***limitInput***: [256 -> 2048], default 1024, số gói tin hàng đợi tối đa khi xử lý bị chậm
  - ***copyts***: [0, 1], copy timestamp từ luồng gốc, mặc định bật cho kênh chỉ băm
  - ***fixAac***: [0, 1], xử lý gói tin aac bị lỗi(gây dừng player trên smarttv)
  - ***sound***: file âm thanh khi chạy pre event bằng image
  - ***preload***: [0, 1], chuẩn hóa lại video trước khi chạy pre event bằng video
  - ***id3***: [0, 1], add luồng id3 vào các output hls ts
  - ***s3Config***: đuờng đẫn đến file s3 config(s3 url có dạng s3://path/to/file), mặc định là data/s3.json, nội dung file như sau:
  - ```json
    {
        "accessKeyId": "<required>",
        "secretAccessKey": "<required>",
        "bucket": "<required>",
        "endpoint": "<optional>",
        "region": "<optional>"
    }
    ```

## Response

Cú pháp thành công

```json
{
  "ec": 0,
  "result": {
    "$job_name": "done"
  }
}
```

