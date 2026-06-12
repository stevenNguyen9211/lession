# AI Learn Hub - Trung Tâm Học Tập AI Engineering

Dự án này là một trang web học tập tương tác trực quan (LMS Dashboard) được thiết kế đặc biệt để trình bày các bài học, kiến thức cốt lõi về phát triển ứng dụng AI (AI Engineering) như Model Context Protocol (MCP), Git workflow cho AI Agents, và các công nghệ liên quan khác.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

*   **Core**: React + Vite (JavaScript)
*   **Styling**: Tailwind CSS v3 (sử dụng tiện ích class trực tiếp)
*   **Icons**: `lucide-react`
*   **Package Manager**: `npm`
*   **Cổng chạy mặc định**: `http://localhost:5173/`

---

## 📁 Cấu Trúc Thư Mục (Project Structure)

```text
├── src/
│   ├── App.jsx             # Trang chủ Dashboard điều hướng (Quản lý Menu & Lesson Viewer)
│   ├── main.jsx            # Điểm khởi chạy React app
│   ├── index.css           # Cấu hình Tailwind CSS directives
│   └── lessons/            # Thư mục lưu trữ tất cả bài học
│       ├── MCPDoc.jsx      # Bài học 1: Khái niệm & Kiến trúc MCP
│       └── GitDoc.jsx      # Bài học 2: Quy trình Git & AI Agent
├── tailwind.config.js      # Cấu hình quét file hiển thị của Tailwind CSS
├── package.json            # Khai báo thư viện dependencies & scripts
└── index.html              # Trang HTML gốc
```

---

## 🧭 Hướng Dẫn Vận Hành (Running Locally)

1.  **Cài đặt thư viện** (nếu khởi động trên môi trường mới):
    ```bash
    npm install
    ```
2.  **Khởi động máy chủ thử nghiệm cục bộ**:
    ```bash
    npm run dev
    ```
3.  Truy cập vào liên kết `http://localhost:5173/` trên trình duyệt để sử dụng.

---

## 🤖 Hướng Dẫn & Quy Tắc cho AI Assistant (AI Agent Rules)

*Khi làm việc trên dự án này, trợ lý AI (như Gemini/Antigravity) cần tuân thủ các quy tắc sau:*

### 1. Quy tắc Thêm Bài Học Mới
Để thêm một bài học mới vào hệ thống Dashboard, hãy thực hiện theo các bước sau:
0.  **QUAN TRỌNG:** Tự động đọc file `src/prompt/LessionCreate.md` trước khi viết code để đảm bảo đúng format, thiết kế (6 phần), và yêu cầu UI/UX.
1.  **Tạo Component bài học**: Tạo một file `.jsx` mới đặt trong thư mục `src/lessons/` (Ví dụ: `src/lessons/DockerDoc.jsx`). Component này phải được export mặc định (`export default ...`).
2.  **Import vào App.jsx**: Mở file [src/App.jsx](file:///Users/nguyenkhoi89/Documents/AILearn/AIMCPDoc/src/App.jsx) và import component mới tạo vào.
3.  **Cập nhật Danh sách bài học**: Thêm thông tin cấu trúc bài học vào mảng `lessons` trong `src/App.jsx` và tích hợp điều kiện render:
    ```javascript
    // Thêm vào mảng lessons:
    {
        id: 'docker',
        title: 'Docker cho AI Engineer',
        description: 'Tự động hóa đóng gói và triển khai ứng dụng AI...',
        time: '20 phút',
        difficulty: 'Nâng cao',
        difficultyColor: 'text-red-600 bg-red-100',
        icon: <DockerIcon className="..." />,
        bgGradient: 'from-blue-500/10 to-cyan-500/10 hover:border-blue-400'
    }

    // Thêm điều kiện render trong JSX:
    {currentView === 'docker' && <DockerDoc />}
    ```

### 2. Tiêu chuẩn Thiết kế và Thẩm mỹ (UI/UX)
*   **Rich Aesthetics**: Giao diện các bài học cần được wowed ngay từ cái nhìn đầu tiên. Sử dụng các gam màu HSL, màu gradient mượt mà (chủ đạo là Slate, Blue, Indigo, Orange), hiệu ứng kính mờ (glassmorphism), và đổ bóng mềm mại (`shadow-md`, `shadow-xl`).
*   **Hiệu ứng Tương tác**: Đảm bảo tất cả các thẻ hoặc nút bấm đều có hiệu ứng hover mượt mà (`hover:scale-105`, `hover:border-...`, `transition-all`).
*   **Tránh Placeholder**: Không viết bài học sơ sài hoặc dùng text giả (lorem ipsum). Các thông tin học tập phải thực tế, trình bày rõ ràng, dễ hiểu bằng tiếng Việt kèm code mẫu trực quan.
*   **Icons đồng bộ**: Luôn dùng thư viện `lucide-react` để đảm bảo phong cách icon đồng bộ trên toàn trang.
