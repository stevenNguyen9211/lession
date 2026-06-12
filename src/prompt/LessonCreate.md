# Tiêu chuẩn Tạo Bài Học Mới (Lesson Spec)

> Đây là spec bắt buộc cho mọi bài học trong project **AI Learn Hub**. Đọc kỹ trước khi tạo. Mục tiêu: bài mới chạy được ngay sau khi tạo, không phải sửa tay để "nối dây".

---

## ⭐ Nguyên tắc cốt lõi (áp dụng cho MỌI bài)

**R1 — Research nguồn chính thức trước khi viết.** Trước khi soạn nội dung, tra cứu tài liệu chính thức của chủ đề (trang chủ, docs, blog của nhà phát triển). Viết dựa trên nguồn đã kiểm chứng, KHÔNG viết từ trí nhớ — nhất là với phiên bản, số liệu, tính năng mới có thể đã thay đổi. Link CTA cuối bài phải trỏ tới tài liệu chính thức còn sống.

**R2 — Cấu trúc phục vụ chủ đề, không ép khuôn.** Cấu trúc 6 phần ở mục 1 là khung mặc định hợp với phần lớn chủ đề, KHÔNG phải luật cứng. Nếu chủ đề tự nhiên hợp hơn với cách trình bày khác (ví dụ: quy trình tuần tự dạng timeline, bảng so sánh nhiều công cụ, hoặc nhiều bài tập hơn một sơ đồ kiến trúc), được toàn quyền điều chỉnh, thêm, bớt, hoặc đổi thứ tự các phần. Khi lệch khỏi khuôn mặc định, nêu ngắn gọn lý do cho người dùng. Ba thứ luôn giữ bất kể cấu trúc: (a) Hero có ẩn dụ trực quan, (b) ít nhất 1 bài tập tương tác có chấm điểm, (c) nối dây đầy đủ vào `App.jsx`.

---

## 0. Bối cảnh Project (đọc trước khi code)

Project là một SPA Vite + React. Dashboard và điều hướng nằm ở `src/App.jsx`. Mỗi bài học là **một section nội dung** (KHÔNG phải trang độc lập) được `App.jsx` render khi người dùng chọn.

```
src/
├── App.jsx                 # Dashboard + nav + nút "Quay lại" + render bài học
├── main.jsx
└── lessons/
    ├── MCPDoc.jsx          # Bài học mẫu (tham khảo style tại đây)
    ├── GitDoc.jsx
    └── SDDDoc.jsx
```

**Quan trọng — kiến trúc thật:**
- Header, thanh nav trên cùng, và nút **"Quay lại Dashboard"** đã có sẵn trong `App.jsx`. **Bài học KHÔNG tự tạo lại header/nav riêng.** Component bài học bắt đầu thẳng từ **Hero Section**.
- Mọi bài học là một React component **default export**, đặt tại `src/lessons/[Concept]Doc.jsx`.

---

## 1. Tạo file Component bài học

**Tên & vị trí file:** `src/lessons/[Concept]Doc.jsx` (ví dụ: `SkillsDoc.jsx`, `DockerDoc.jsx`).

**Tên component PHẢI khớp tên file** (không dùng `const App`). Mẫu:

```jsx
import React, { useState } from 'react';
import { /* icons từ lucide-react */ } from 'lucide-react';

const SkillsDoc = () => {
    // ... nội dung bài học, bắt đầu từ Hero
};

export default SkillsDoc;
```

### Cấu trúc nội dung (khung mặc định — xem R2 để biết khi nào được lệch)

> Lưu ý: bỏ "Header/Navigation" khỏi danh sách — phần đó do `App.jsx` đảm nhiệm. Bài học bắt đầu từ Hero.
> Đây là khung gợi ý cho phần lớn chủ đề. Theo R2, có thể thêm/bớt/đổi thứ tự nếu chủ đề hợp hơn với cách khác — miễn giữ Hero có ẩn dụ, ít nhất 1 bài tập chấm điểm, và nối dây App.jsx.

1. **Hero Section**: Giải thích khái niệm ngắn gọn (1–2 câu), có **ẩn dụ trực quan** (ví dụ "giống cổng USB-C"). Kèm 1–2 nút CTA (anchor nội bộ `#id` cuộn mượt + link tài liệu chính thức).
2. **Problem & Solution**: So sánh rõ **trước vs sau** khi có công nghệ/quy trình này.
3. **Interactive Architecture**: Sơ đồ tương tác dùng `useState`. Người dùng **click vào Node** để xem mô tả + ví dụ động (xem mẫu `architectureData` trong `MCPDoc.jsx`).
4. **Core Components**: Grid 2–3 cột, mỗi ô có icon `lucide-react` nổi bật. Code mẫu đặt trong **khối giả lập terminal** (nền `slate-900`, chữ `font-mono`).
5. **Interactive Exercise (BẮT BUỘC)**: Tối thiểu **1 bài tập tương tác có chấm điểm** dùng `useState` — quiz chọn đáp án, phân loại, hoặc điền chỗ trống — kèm **feedback giải thích đúng/sai** (không chỉ "Đúng/Sai"). Mục tiêu: bắt người học *làm*, không chỉ *đọc*. (Xem mẫu ở mục 4.)
6. **Lợi ích & CTA**: Nêu lý do nên dùng + nút Call-to-Action tới tài liệu chính thức.

---

## 2. Nối dây vào `App.jsx` (BẮT BUỘC — nếu bỏ qua, bài sẽ không hiện)

Sau khi tạo file, làm đủ **3 bước** sau trong `src/App.jsx`:

**Bước 1 — Import** (đầu file, cạnh các import bài học khác):
```jsx
import SkillsDoc from './lessons/SkillsDoc';
```

**Bước 2 — Thêm object vào mảng `lessons`** (để bài hiện trên Dashboard). Đầy đủ metadata:
```jsx
{
    id: 'skills',                          // khớp với currentView ở Bước 3
    title: 'Claude Skills là gì?',
    description: 'Mô tả ngắn 1–2 câu, có ẩn dụ trực quan.',
    time: '12 phút',
    difficulty: 'Trung bình',              // 'Cơ bản' | 'Trung bình' | 'Nâng cao'
    difficultyColor: 'text-amber-600 bg-amber-100',
    icon: <Sparkles className="w-8 h-8 text-purple-600" />,  // nhớ import icon
    bgGradient: 'from-purple-500/10 to-indigo-500/10 hover:border-purple-400'
}
```

**Bước 3 — Thêm dòng render** (cạnh các dòng `currentView` khác):
```jsx
{currentView === 'skills' && <SkillsDoc />}
```

> `id` (Bước 2) và chuỗi trong `currentView ===` (Bước 3) **phải trùng nhau**.

### Bảng tham chiếu `difficultyColor`
| Mức       | Giá trị class                    |
|-----------|----------------------------------|
| Cơ bản    | `text-green-600 bg-green-100`    |
| Trung bình| `text-amber-600 bg-amber-100`    |
| Nâng cao  | `text-red-600 bg-red-100`        |

---

## 3. Tiêu chuẩn UI/UX & Kỹ thuật

- **Công nghệ**: React (JSX) + Tailwind CSS + `lucide-react`. Chỉ dùng class Tailwind core (project chạy Tailwind chuẩn, không có plugin compiler runtime).
- **Phối màu (khớp các bài hiện có)**: nền `slate-50`, text `slate-800`/`slate-900`; accent xoay vòng giữa `blue` / `indigo` / `purple` / `amber` / `orange`. Section "Core Components" có thể dùng nền tối `slate-900` để code terminal nổi bật.
- **Responsive**: tốt trên cả mobile và desktop (`grid-cols-1 md:grid-cols-2/3`, `flex-col md:flex-row`).
- **Hiệu ứng**: hover transition, scale nhẹ, soft shadow — mượt, không lạm dụng.
- **Anchor link**: dùng `id` trên section + `<a href="#id">` để cuộn mượt giữa các phần trong bài.
- **Nội dung**: tiếng Việt, thông tin thực tế, **không lorem ipsum**. Nếu chủ đề có thể đã thay đổi, ưu tiên tra cứu nguồn chính thức trước khi viết.

---

## 4. Mẫu Interactive Exercise (tham khảo)

Một bài tập trắc nghiệm có chấm điểm + feedback giải thích:

```jsx
const QuizCard = () => {
    const [picked, setPicked] = useState(null);
    const options = [
        { id: 'a', text: 'Đáp án A', correct: false, why: 'Vì sao A sai...' },
        { id: 'b', text: 'Đáp án B', correct: true,  why: 'Vì sao B đúng...' },
    ];
    return (
        <div className="space-y-3">
            {options.map((o) => {
                const show = picked === o.id;
                return (
                    <button
                        key={o.id}
                        onClick={() => setPicked(o.id)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                            show
                                ? o.correct ? 'border-emerald-400 bg-emerald-50'
                                            : 'border-red-300 bg-red-50'
                                : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                    >
                        <span className="font-medium text-slate-800">{o.text}</span>
                        {show && (
                            <p className={`text-sm mt-2 ${o.correct ? 'text-emerald-700' : 'text-red-700'}`}>
                                {o.why}
                            </p>
                        )}
                    </button>
                );
            })}
        </div>
    );
};
```

---

## 5. Checklist trước khi coi là "xong"

- [ ] **(R1)** Đã research tài liệu chính thức, nội dung dựa trên nguồn đã kiểm chứng (không viết từ trí nhớ).
- [ ] File `src/lessons/[Concept]Doc.jsx` tạo xong, tên component khớp tên file, `export default`.
- [ ] Bài bắt đầu từ Hero (KHÔNG tự thêm header/nav riêng).
- [ ] Cấu trúc hợp lý với chủ đề — theo khung 6 phần mặc định, hoặc **(R2)** đã lệch có chủ đích và nêu lý do.
- [ ] Luôn có: Hero có **ẩn dụ trực quan**, và **ít nhất 1 bài tập tương tác có chấm điểm + feedback**.
- [ ] Đã nối dây `App.jsx`: import + object trong `lessons` (đủ metadata) + dòng `currentView`.
- [ ] `id` ở mảng `lessons` trùng với chuỗi `currentView ===`.
- [ ] Mọi icon dùng trong `App.jsx` (icon thẻ Dashboard) đã được import.
- [ ] Responsive, hover mượt, nội dung tiếng Việt thực tế, link tài liệu chính thức còn sống.
