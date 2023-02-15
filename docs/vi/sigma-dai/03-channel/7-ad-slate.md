---
title: Chèn quảng cáo slate
order: 7
---

# Chèn quảng cáo slate
 *Ad slate chỉ có sẵn cho các quy trình công việc trực tiếp.*

 **Ad slate là một asset MP4 mặc định** được chèn vào một luồng, ví dụ hình ảnh tĩnh hoặc video được lặp, phát thay vì nội dung trực tiếp.

Không bắt buộc chèn quảng cáo slate.

## Khi nào cần chèn quảng cáo slate?

Hỗ trợ chèn slate ads (default ads) cho các trường hợp như sau:

-  Để fill vào thời gian không được đầy đủ bởi một thay thế quảng cáo( ví dụ thời gian quảng cáo cần 15s nhưng ADS chỉ trả về 10s, slate sẽ fill vào 5s còn lại).
- Nếu ad decision server (ADS) phàn hồi với một phản hồi VAST or VMAP trống.
- Đối với các **điều kiện lỗi**, chẳng hạn như **ADS-ad decision server timeout**.
- Nếu thời lượng của quảng cáo **dài hơn** quá trình chèn quảng cáo( ad break).
- Nếu một quảng cáo không có sẵn.

## Loại

**Khác với Bumpers ad, ad slate hỗ trợ 2 loại asset.**

- Video: Video khong quá 120s.
- Hình ảnh

## Cấu hình ad slate

Ad slate được cấu hình trong phần **cài đặt Nâng cao**.

Để sử dụng ad slate, người dùng chọn asset **được cấu hình sẵn** từ server ThudoJSC hoặc người dùng **upload** file **video/ hình ảnh** trực tiếp lên hệ thống Sigma.

1. Trường hợp người dùng chọn hay Upload **video nhỏ hơn hoặc bằng 120s**, hệ thống ghi nhận video, việc chèn ad slate sẽ được thực hiện sau khi người dùng bấm nút **Create.**

2. Ad slate **bắt buộc chèn hết thời lượng video**, không được phép cắt.

3. Trường hợp thời lượng điểm quảng cáo trống nhiều hơn thời lượng ad slate, ad slate sẽ lặp đi lặp lại đến khi fill đủ.  

   Số lần chèn adslate theo công thức: **int((availDuration - filledDuration)/adslateDuration)**

4. **Cách ad slate được cấu hình vào**

   | **Formula**                                                  | availDuration | filledDuration | Ad slate | **Result** |
   | :----------------------------------------------------------- | :------------ | :------------- | :------- | :--------- |
   | (availDuration - filledDuration) >= **ad slateAssetDuration** | 60            | 50             | 10       | chèn       |
   | 60                                                           | 40            | 10             | 10       | chèn 2 lần |
   | (availDuration - filledDuration) < **ad slateAssetDuration** | 60            | 51             | 10       | Không chèn |

