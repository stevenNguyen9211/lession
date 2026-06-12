import React, { useState } from 'react';
import {
    Sparkles,
    Layers,
    FileCode,
    FolderTree,
    Terminal,
    Zap,
    Package,
    Boxes,
    Repeat,
    ChevronRight,
    Check,
    X,
    BookOpen,
    Lightbulb,
    Target
} from 'lucide-react';

const SkillsDoc = () => {
    // ===== State cho sơ đồ kiến trúc tương tác =====
    const [activeLayer, setActiveLayer] = useState('frontmatter');
    // ===== State cho bài tập trắc nghiệm =====
    const [picked, setPicked] = useState(null);

    const layers = {
        frontmatter: {
            title: 'Level 1 — YAML Frontmatter',
            icon: <FileCode className="w-8 h-8 text-blue-500" />,
            tokens: '~100 token / skill',
            desc: 'Luôn được nạp sẵn vào system prompt ngay khi khởi động. Chỉ gồm "name" và "description". Đây là tấm danh thiếp giúp Claude biết skill tồn tại và KHI NÀO nên dùng, mà không tốn context.',
            features: ['Luôn nạp lúc khởi động', 'Chỉ name + description', 'Quyết định skill có trigger không']
        },
        body: {
            title: 'Level 2 — SKILL.md Body',
            icon: <BookOpen className="w-8 h-8 text-purple-500" />,
            tokens: '< 5.000 token',
            desc: 'Phần hướng dẫn đầy đủ: quy trình từng bước, ví dụ, quy tắc định dạng, xử lý lỗi. Chỉ được nạp KHI Claude xác định skill này liên quan đến yêu cầu hiện tại.',
            features: ['Nạp khi liên quan', 'Quy trình & ví dụ', 'Khuyến nghị dưới ~500 dòng']
        },
        resources: {
            title: 'Level 3 — Referenced Files',
            icon: <FolderTree className="w-8 h-8 text-amber-500" />,
            tokens: 'Nạp theo nhu cầu',
            desc: 'Các file trong references/, scripts/, assets/. Tài liệu API dài, spec chi tiết, template hay script — chỉ được nạp khi tác vụ thực sự cần đến.',
            features: ['references/ · scripts/ · assets/', 'Nạp khi tác vụ chạm tới', 'Giữ context luôn gọn']
        }
    };

    const quizOptions = [
        {
            id: 'a',
            text: 'description: Công cụ xử lý tài liệu.',
            correct: false,
            why: 'Quá mơ hồ và thiếu từ khóa người dùng sẽ gõ. Claude không biết KHI NÀO nên kích hoạt nên thường bỏ qua skill này.'
        },
        {
            id: 'b',
            text: 'description: Trích xuất text & bảng từ PDF, điền form, gộp file. Dùng khi người dùng nhắc tới PDF, form hoặc trích xuất tài liệu.',
            correct: true,
            why: 'Chuẩn! Nêu rõ làm gì, có từ khóa trigger (PDF, form), và mệnh đề "Dùng khi…" cho biết chính xác lúc nào nên chạy.'
        },
        {
            id: 'c',
            text: 'description: Skill viết bởi team Finance, phiên bản 2.3, dùng thư viện reportlab, xử lý linh hoạt và mạnh mẽ.',
            correct: false,
            why: 'Dài nhưng rỗng — toàn metadata và lời quảng cáo, không nói rõ KHI NÀO kích hoạt. Những chi tiết này nên nằm trong body, không phải description.'
        }
    ];

    return (
        <div className="bg-slate-50 text-slate-800 font-sans selection:bg-purple-200">
            {/* ===== HERO ===== */}
            <section className="pt-12 pb-16 px-6 max-w-6xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                    <Zap className="w-4 h-4" /> Ra mắt 10/2025 · Anthropic
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                    Claude Skills <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        là gì?
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Skill là một <strong className="text-slate-900">thư mục chứa hướng dẫn</strong> mà Claude tự động nạp khi tác vụ cần đến.
                    Hãy hình dung nó như <strong className="text-slate-900">cẩm nang đào tạo nhân viên mới</strong>: bạn viết quy trình ra một lần,
                    Claude làm theo mà không cần bạn giải thích lại mỗi lần.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#kien-truc" className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2 hover:gap-3">
                        Khám phá kiến trúc <ChevronRight className="w-5 h-5" />
                    </a>
                    <a
                        href="https://support.claude.com/en/articles/12512176-what-are-skills"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
                    >
                        Tài liệu chính thức
                    </a>
                </div>
            </section>

            {/* ===== PROBLEM & SOLUTION ===== */}
            <section id="van-de" className="py-16 bg-white border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">Trước &amp; sau khi có Skills</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Prompt nói một lần rồi quên. Skill thì agent giữ lại.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-3xl border-2 border-red-200 bg-red-50/60 p-8">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                                    <X className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-red-900">Không có Skills</h3>
                            </div>
                            <ul className="space-y-3 text-slate-700">
                                {[
                                    'Phải paste lại hướng dẫn dài ở mỗi cuộc trò chuyện mới.',
                                    'Cuộc chat sau bắt đầu từ con số 0 — không nhớ quy trình.',
                                    'Quy trình, brand guideline nằm rải rác, khó nhất quán.',
                                    'Nhồi mọi thứ vào prompt làm phình context window.'
                                ].map((t) => (
                                    <li key={t} className="flex gap-3">
                                        <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50/60 p-8">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                    <Check className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-emerald-900">Có Skills</h3>
                            </div>
                            <ul className="space-y-3 text-slate-700">
                                {[
                                    'Đóng gói quy trình một lần — Claude tự nạp khi liên quan.',
                                    'Tri thức nằm trong skill, không phải trong từng cuộc chat.',
                                    'Đầu ra nhất quán theo chuẩn của bạn ở mọi tác vụ.',
                                    'Progressive disclosure giữ context gọn, chỉ nạp khi cần.'
                                ].map((t) => (
                                    <li key={t} className="flex gap-3">
                                        <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== INTERACTIVE ARCHITECTURE ===== */}
            <section id="kien-truc" className="py-20 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Kiến trúc Progressive Disclosure</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">Bấm vào từng tầng để xem Claude nạp thông tin theo nhu cầu như thế nào.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                    {/* Diagram */}
                    <div className="flex-1 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
                        {Object.keys(layers).map((key, index) => (
                            <React.Fragment key={key}>
                                <button
                                    onClick={() => setActiveLayer(key)}
                                    className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-300 ${activeLayer === key ? 'border-purple-500 bg-purple-50 shadow-md scale-105' : 'border-slate-200 hover:border-purple-300 hover:bg-slate-50'}`}
                                >
                                    <div className="mb-3">{layers[key].icon}</div>
                                    <span className="font-semibold text-slate-900 text-sm text-center">{layers[key].title}</span>
                                </button>
                                {index < 2 && (
                                    <div className="hidden sm:flex text-slate-300">
                                        <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                                            <path d="M0 12H38M38 12L28 2M38 12L28 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                                {index < 2 && (
                                    <div className="sm:hidden text-slate-300 rotate-90 my-2">
                                        <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                                            <path d="M0 12H38M38 12L28 2M38 12L28 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Panel */}
                    <div className="flex-1 w-full bg-slate-50 p-8 rounded-2xl border border-slate-100 min-h-[250px]">
                        <div className="flex items-center gap-3 mb-2">
                            {layers[activeLayer].icon}
                            <h3 className="text-2xl font-bold text-slate-900">{layers[activeLayer].title}</h3>
                        </div>
                        <span className="inline-block text-xs font-mono px-2.5 py-1 rounded-md bg-slate-200 text-slate-600 mb-4">
                            {layers[activeLayer].tokens}
                        </span>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {layers[activeLayer].desc}
                        </p>
                        <div className="space-y-2">
                            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Đặc điểm:</span>
                            <ul className="grid grid-cols-1 gap-2 mt-2">
                                {layers[activeLayer].features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CORE COMPONENTS ===== */}
            <section id="thanh-phan" className="py-20 bg-slate-900 text-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">Cấu trúc một Skill</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">Một skill chỉ là một thư mục, với SKILL.md bắt buộc và tài nguyên tùy chọn.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                                <FileCode className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">SKILL.md <span className="text-xs font-semibold text-blue-300">· Bắt buộc</span></h3>
                            <p className="text-slate-400 leading-relaxed">
                                File Markdown lõi: YAML frontmatter (name + description) + phần hướng dẫn. Tên file phân biệt hoa thường.
                            </p>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center mb-6">
                                <FolderTree className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">references/ · assets/ <span className="text-xs font-semibold text-purple-300">· Tùy chọn</span></h3>
                            <p className="text-slate-400 leading-relaxed">
                                Tài liệu tham chiếu sâu, template, file nhị phân. Claude chỉ điều hướng vào đây khi tác vụ thực sự cần.
                            </p>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mb-6">
                                <Terminal className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">scripts/ <span className="text-xs font-semibold text-amber-300">· Tùy chọn</span></h3>
                            <p className="text-slate-400 leading-relaxed">
                                Script Python/Bash thực thi được, chạy qua bash mà không cần nạp toàn bộ nội dung vào context (cần Code Execution).
                            </p>
                        </div>
                    </div>

                    {/* Terminal mockup */}
                    <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl max-w-3xl mx-auto">
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800">
                            <span className="w-3 h-3 rounded-full bg-red-400"></span>
                            <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                            <span className="ml-3 text-xs text-slate-400 font-mono">my-skill/SKILL.md</span>
                        </div>
                        <pre className="bg-slate-950 text-slate-100 p-6 text-sm font-mono overflow-x-auto leading-relaxed">
{`---
name: pdf-processing
description: Trích xuất text & bảng từ PDF, điền
  form, gộp file. Dùng khi người dùng nhắc tới
  PDF, form hoặc trích xuất tài liệu.
---

# PDF Processing

## Khi nào dùng
Kích hoạt khi tác vụ liên quan đến file PDF.

## Quy trình
1. Đọc file đầu vào từ đường dẫn được cung cấp
2. Trích xuất nội dung theo định dạng yêu cầu
3. Xem references/api.md để biết tham số nâng cao`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* ===== INTERACTIVE EXERCISE ===== */}
            <section id="bai-tap" className="py-20 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                        <Target className="w-4 h-4" /> Bài tập tương tác
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">Chọn description sẽ kích hoạt đúng lúc</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Bạn đang viết skill xử lý PDF. Vì Claude chỉ đọc <code className="font-mono text-purple-600">description</code> để quyết định có gọi skill hay không,
                        đây là phần quan trọng nhất. Đâu là lựa chọn tốt nhất?
                    </p>
                </div>

                <div className="space-y-3">
                    {quizOptions.map((o) => {
                        const show = picked === o.id;
                        return (
                            <button
                                key={o.id}
                                onClick={() => setPicked(o.id)}
                                className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                                    show
                                        ? o.correct
                                            ? 'border-emerald-400 bg-emerald-50'
                                            : 'border-red-300 bg-red-50'
                                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                                }`}
                            >
                                <div className="flex gap-3">
                                    <span className={`grid place-items-center w-7 h-7 rounded-full shrink-0 mt-0.5 text-xs font-bold ${
                                        show
                                            ? o.correct ? 'bg-emerald-500 text-white' : 'bg-red-400 text-white'
                                            : 'bg-slate-200 text-slate-600'
                                    }`}>
                                        {show ? (o.correct ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />) : o.id.toUpperCase()}
                                    </span>
                                    <div>
                                        <code className="text-sm font-mono text-slate-800 leading-relaxed block">{o.text}</code>
                                        {show && (
                                            <p className={`text-sm mt-2.5 leading-relaxed ${o.correct ? 'text-emerald-700' : 'text-red-700'}`}>
                                                {o.why}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div className="mt-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900 leading-relaxed">
                        Mẹo: đọc to description và tự hỏi "một người lạ có đoán được khi nào skill này nên chạy không?".
                        Nếu phải mở body ra mới hiểu, description chưa đạt.
                    </p>
                </div>
            </section>

            {/* ===== BENEFITS & CTA ===== */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Tại sao nên dùng Skills?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                        <div className="mt-1 bg-blue-100 text-blue-600 p-2 rounded-lg h-fit">
                            <Layers className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Progressive Disclosure</h4>
                            <p className="text-slate-600">Chỉ nạp metadata trước, body khi liên quan, file tham chiếu khi cần. 8 skill chỉ tốn ~500 token lúc khởi động thay vì hàng chục nghìn.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                        <div className="mt-1 bg-purple-100 text-purple-600 p-2 rounded-lg h-fit">
                            <Boxes className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Composable</h4>
                            <p className="text-slate-600">Nhiều skill có thể stack và phối hợp trong một tác vụ. Claude tự xác định cần skill nào và điều phối chúng.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                        <div className="mt-1 bg-amber-100 text-amber-600 p-2 rounded-lg h-fit">
                            <Repeat className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Portable</h4>
                            <p className="text-slate-600">Cùng định dạng SKILL.md chạy giống hệt trên Claude.ai, Claude Code và API — viết một lần, dùng mọi nơi.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                        <div className="mt-1 bg-green-100 text-green-600 p-2 rounded-lg h-fit">
                            <Package className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Đóng gói tri thức tổ chức</h4>
                            <p className="text-slate-600">Workflow, best practice, kiến thức nghiệp vụ thành module tái sử dụng — áp dụng nhất quán cho cả team.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105"
                    >
                        <BookOpen className="w-5 h-5" /> Xem tài liệu Skills chính thức
                    </a>
                </div>
            </section>
        </div>
    );
};

export default SkillsDoc;
