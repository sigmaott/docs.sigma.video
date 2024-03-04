---
title: Danh sách chức năng
order: 1
---

# Danh sách API function được cung cấp bởi Sigma Media Server

Chúng tôi cung cấp các phương thức để tương tác với các dịch vụ của Sigma Media Server. Các phương thức này bao gồm các phương thức để tạo, cập nhật, xóa và lấy thông tin của các tài nguyên. Các tài nguyên của Sigma Media Server bao gồm các Job.

::: tip
Với các function dạng system bạn không cần phải truyền giá trị mode vào body của request.
:::

| **Name**       | Description                                                       | **Mode**     | Docs Ref Link |
| -------------- | ----------------------------------------------------------------- | ------------ | ------------- |
| **info**       | Get input information                                             | **system**   | [Docs](#)     |
| **dump**       | Get Sigma Media Server information                                | **system**   | [Docs](#)     |
| **apps**       | Run integrated apps (nginx, rtmp, custom app)                     | **system**   | [Docs](#)     |
| **log**        | View system log or app log                                        | **system**   | [Docs](#)     |
| **file**       | Write text file with content                                      | **system**   | [Docs](#)     |
| **read/write** | Read/write file                                                   | **system**   | [Docs](#)     |
| **start**      | Start a Job Task                                                  | **live/vod** | [Docs](#)     |
| **stop**       | Stop one or many Job Task                                         | **live/vod** | [Docs](#)     |
| **progress**   | Get Progress Info of Job Task                                     | **live/vod** | [Docs](#)     |
| **awt**        | Audio watermarking                                                | **live/vod** | [Docs](#)     |
| **pin id3**    | Pin ID3 packet for all segments                                   | **live/vod** | [Docs](#)     |
| **preload**    | Create content from image(or video) and music                     | **live/vod** | [Docs](#)     |
| **update**     | Change configuration for volume, overlay, drm, header of Job Task | **live**     | [Docs](#)     |
| **event**      | Push event into ID3 stream                                        | **live**     | [Docs](#)     |
| **ads**        | Display logo + running text ads(marquee) on the fly               | **live**     | [Docs](#)     |
| **scte35**     | Insert ad insertion signal                                        | **live**     | [Docs](#)     |
| **mixer**      | Mix input streams                                                 | **live**     | [Docs](#)     |
| **stream**     | Play video list                                                   | **live**     | [Docs](#)     |
| **queue**      | Concatenate queue of input                                        | **live**     | [Docs](#)     |
| **decklink**   | API for Decklink devices                                          | **live**     | [Docs](#)     |
| **subtitle**   | Transcode subtitle                                                | **vod**      | [Docs](#)     |
| **trick**      | Trick Play mode                                                   | **vod**      | [Docs](#)     |
| **cc**         | Closed captions                                                   | **vod**      | [Docs](#)     |
| **pte**        | Turn on PTE service                                               | **vod**      | [Docs](#)     |
| **join**       | Merge recorded Multi VOD Videos                                   | **vod**      | [Docs](#)     |



