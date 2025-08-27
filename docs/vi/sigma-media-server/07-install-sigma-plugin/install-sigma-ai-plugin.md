---
title: Cài đặt gói plugin  Sigma AI trên Ubuntu
order: 1
---

# Cài đặt gói plugin  Sigma AI trên Ubuntu

## 1. Thêm repository Sigma

Để cài đặt Sigma AI, trước tiên hãy thêm repository chính thức vào hệ thống:

```bash
wget https://repo.sigma.video/debian/sigma-media-server.list -O /etc/apt/sources.list.d/sigma-media-server.list
```

> **Lưu ý:** Đảm bảo máy chủ có kết nối Internet.

---

## 2. Cập nhật danh sách gói

Sau khi thêm repository, cập nhật lại danh sách các gói phần mềm:

```bash
sudo apt-get update
```
---
## 3. Cài đặt Sigma AI

Bạn có thể cài đặt phiên bản mới nhất hoặc một phiên bản cụ thể:

### Cài phiên bản mới nhất

```bash
sudo apt-get install sigma-ai
```

### Cài phiên bản cụ thể

1. Kiểm tra các phiên bản khả dụng:
  ```bash
  apt list -a sigma-ai
  ```
2. Cài đặt phiên bản mong muốn (ví dụ: `5.2.0-2`):
  ```bash
  sudo apt-get install sigma-ai=5.2.0-2
  ```

---

## 4. Kiểm tra phiên bản đã cài đặt

Kiểm tra lại phiên bản Sigma AI đã cài:

```bash
dpkg -l | grep sigma-ai
```

> Nếu xuất hiện thông tin về `sigma-ai`, nghĩa là cài đặt thành công. Nếu không, hãy kiểm tra lại các bước trên.

