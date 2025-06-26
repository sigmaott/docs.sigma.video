# Style Guide cho Kho Tài liệu

Đây là bản hướng dẫn về văn phong và cấu trúc cho kho tài liệu này. Gemini Code Assist sẽ sử dụng các quy tắc này để đánh giá các pull request.

## 1. Cấu trúc Thư mục

- **Ngôn ngữ:** Toàn bộ tài liệu được chia thành hai ngôn ngữ chính:
  - `docs/en`: Cho tiếng Anh.
  - `docs/vi`: Cho tiếng Việt.
- **Sản phẩm:** Mỗi thư mục con trực tiếp bên trong `docs/en` và `docs/vi` đại diện cho một sản phẩm riêng biệt (ví dụ: `sigma-dai`, `apis`).
- **Nội dung:** Mọi thay đổi hoặc bổ sung nội dung phải được thực hiện đồng bộ cho cả hai ngôn ngữ (nếu có thể).

## 2. Cấu trúc File và Front Matter

Mỗi file Markdown (`.md`) và mỗi thư mục phải tuân thủ các quy tắc về cấu trúc và metadata (front matter) để đảm bảo hệ thống hiển thị đúng thứ tự và thông tin.

### 2.1. File `index.md`

- **Bắt buộc:** Mọi thư mục, từ cấp sản phẩm cho đến các thư mục con, **phải** chứa một file `index.md`.
- **Mục đích:**
  - `index.md` ở cấp gốc của sản phẩm (ví dụ: `docs/en/sigma-dai/index.md`) dùng để định nghĩa trang tổng quan (overview) cho sản phẩm đó.
  - `index.md` trong các thư mục con (chương/mục) dùng để định nghĩa tiêu đề và thứ tự sắp xếp của chương/mục đó trong menu điều hướng.

### 2.2. Front Matter

Mỗi file Markdown phải bắt đầu bằng một khối front matter được bao quanh bởi `---`.

```yaml
---
id: unique-identifier-for-the-page
title: Title of The Page or Section
order: 1
---
```

- **`id` (Bắt buộc):**
  - Phải là một chuỗi định danh **duy nhất** trên toàn bộ trang tài liệu.
  - Sử dụng chữ thường, nối với nhau bằng dấu gạch ngang (`-`).
  - Ví dụ: `docs-guide-sigma-ssai`, `api-reference-overview`.

- **`title` (Bắt buộc):**
  - Tiêu đề của trang hoặc của mục/chương.
  - Sẽ được hiển thị trên trang và trong menu điều hướng.
  - Nên viết hoa chữ cái đầu của từ đầu tiên (Sentence case).

- **`order` (Bắt buộc):**
  - Một số nguyên dương xác định thứ tự sắp xếp của trang (trong một mục) hoặc của mục (trong một sản phẩm).
  - Các trang/mục sẽ được sắp xếp từ thấp đến cao.

## 3. Quy tắc về Nội dung

- **Ngôn ngữ:** Nội dung trong `docs/vi` phải được viết bằng tiếng Việt, và trong `docs/en` phải bằng tiếng Anh.
- **Định dạng Markdown:**
  - Sử dụng các tiêu đề (`#`, `##`, `###`) một cách hợp lý để phân cấp thông tin.
  - Sử dụng danh sách có thứ tự và không có thứ tự để liệt kê.
  - Sử dụng khối code (```) cho các đoạn mã, lệnh hoặc ví dụ về API.
- **Tài liệu API (`docs/en/apis`):**
  - Cần tuân thủ chặt chẽ các tiêu chuẩn về tài liệu API, bao gồm mô tả rõ ràng về endpoint, tham số, request và response mẫu.

## Ví dụ về Lỗi cần Báo cáo

Gemini cần báo cáo lỗi nếu một pull request vi phạm các quy tắc sau:

1.  Tạo một thư mục mới mà không có file `index.md`.
2.  Một file `.md` không có khối front matter hoặc thiếu một trong các trường `id`, `title`, `order`.
3.  Trường `id` không phải là duy nhất hoặc không đúng định dạng.
4.  Trường `order` không phải là một số nguyên.
5.  Nội dung tiếng Việt được thêm vào thư mục `docs/en` hoặc ngược lại.
