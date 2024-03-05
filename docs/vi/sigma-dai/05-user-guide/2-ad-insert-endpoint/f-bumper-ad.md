---
title: Chèn quảng cáo bumpers 
order: 6
---

# Chèn quảng cáo bumpers 
Bumpers ad là **video ngắn,** **không thể bỏ qua** video được chèn vào **đầu** hoặc **cuối** trước khi kết thúc điểm quảng cáo **nếu đủ thời gian**.

Bumpers ad được cấu hình trong phần **cài đặt Nâng cao** và **không bắt buộc**.

## Điều kiện

Các điều kiện sau áp dụng để chèn bumpers ad:

- Loại asset mặc định **Video**.
- Giới hạn thời lượng bumpers ad là **10 giây hoặc ít hơn**. 
- Bumpers ad có thể được chèn vào **điểm đầu hoặc kết thúc** của quảng cáo( ad break) hoặc **cả hai.** 
- Bumpers ad **được chuyển mã** để phù hợp với nội dung nguồn.

## Loại 

Có 2 loại Bumpers ads:

- Bumpers ad **start** : Bumpers chèn vào trước quảng cáo.
- Bumpers ad **end** : Bumpers chèn vào sau quảng cáo.

## Cấu hình Bumpers ad

Để sử dụng Bumpers ad, người dùng chọn asset được lưu trữ ở máy chủ ThudoJSC hoặc người dùng upload file video trực tiếp lên hệ thống Sigma. 

Người dùng có thể cấu hình Bumpers ad ở đầu, cuối hoặc cả hai. 

![](/images/dai/bumper.png)

<center>

  *Hình 1: chèn bumper ad*

</center>

**Ví dụ:**

Điểm chèn quảng cáo( availDuration/ ad break): 70s

Quảng cáo được trả về( filledDuration): 50s

Bumpers ad start: 10s

Bumpers ad end: 10s

Người dùng cấu hình Bumpers ad start và Bumpers ad end, trong trường hợp này sẽ được phép **chèn cả 2**.


**Cách Bumpers ad được cấu hình vào**

| **Formula**                                                  | availDuration | filledDuration | startBumper<br />AssetDuration | endBumper<br />AssetDuration | **Result**                     |
| ------------------------------------------------------------ | ------------- | -------------- | ------------------------------ | ---------------------------- | ------------------------------ |
| (availDuration - filledDuration) >= **startBumperAssetDuration + endBumperAssetDuration** | 60            | 30             | 10                             | 5                            | chèn cả 2                      |
| (availDuration - filledDuration) >= **startBumperAssetDuration** | 60            | 50             | 10                             | 10                           | chèn start Bumper video        |
| (availDuration - filledDuration) > **endBumperAssetDuration** and<br /> (availDuration - filledDuration) > **startBumperAssetDuration** | 60            | 55             | 10                             | 10                           | không chèn cái nào             |
| **startBumperAssetDuration >**(availDuration - filledDuration) **>=** **endBumperAssetDuration** | 60            | 55             | 10                             | 5                            | Chỉ chèn end, không chèn start |



## Các quy định khác

1. Trường hợp người dùng chọn hay Upload **video quá 10s**, hệ thống vẫn ghi nhận video, việc chèn bumpers ad sẽ **được thực hiện** sau khi người dùng bấm nút **Create.**

2. Bumpers ad **bắt buộc chèn hết thời lượng video**, không được phép cắt.

3. Trường hợp asset được cấu hình nhưng sau đó asset bị xoá khỏi hệ thống ở **Chi tiết ad insert endpoint** bumpers ad sẽ hiển thị **Không có dữ liệu** .

## Yêu cầu đầu ra

   Người dùng tạo mới ad insert endpoint và chạy ad insert endpoint thành công, quan sát bumpers ad  **hiển thị thành công lên luồng Live**, người xem coi được bumpers ad. 