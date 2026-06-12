# Tiêu chuẩn Tạo Bài Học Mới (Lesson Spec)

Tất cả các bài học mới phải được tạo dưới dạng một React Component độc lập đặt trong thư mục `src/lessons/[Concept]Doc.jsx`.

## 1. Cấu Trúc Bài Học (6 Phần Bắt Buộc)
1. **Header/Navigation**: Tên chủ đề bài học, liên kết scroll mượt mà đến các phần.
2. **Hero Section**: Giải thích khái niệm ngắn gọn (1-2 câu), có ẩn dụ trực quan (ví dụ: "giống như cổng USB-C").
3. **Problem & Solution**: So sánh trước và sau khi có công nghệ/quy trình này.
4. **Interactive Architecture**: Giao diện sơ đồ tương tác sử dụng `useState` cho phép click vào các Node để xem mô tả động.
5. **Core Components**: Trình bày Grid (2-3 cột) kèm icon nổi bật từ `lucide-react`. Dùng giao diện giả lập terminal cho các khối code mẫu.
6. **Lợi ích & Footer**: Nêu bật lý do sử dụng và nút Call-to-Action liên kết tài liệu chính thức.

## 2. Tiêu Chuẩn UI/UX & Kỹ Thuật
- **Công nghệ**: React (JSX) + Tailwind CSS + `lucide-react`.
- **Phối màu**: Nền sáng `slate-50`, text `slate-900`, sử dụng màu điểm nhấn hiện đại (`blue`, `indigo`, `orange`, `amber`).
- **Responsive**: Thiết kế tương thích tốt trên cả Mobile và Desktop.
- **Hiệu ứng**: Hover transition, scale, soft shadow mượt mà.
- **Nội dung**: Thông tin thực tế bằng tiếng Việt, không sử dụng text giả (lorem ipsum).