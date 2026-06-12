import React, { useState } from 'react';
import { 
    BookOpen, 
    FileText, 
    BrainCircuit, 
    CheckCircle, 
    Terminal, 
    ArrowRight, 
    Code2, 
    LayoutTemplate, 
    Zap,
    Hash
} from 'lucide-react';

const SDDDoc = () => {
    const [activeNode, setActiveNode] = useState('sdd');

    const architectureDetails = {
        sdd: {
            title: "Tài liệu SDD (Software Design Document)",
            desc: "Bản vẽ tổng thể của dự án. Ghi chép kiến trúc, quyết định kỹ thuật và cấu trúc thư mục. Quá dài để AI agent đọc mỗi lần.",
            icon: <BookOpen className="w-8 h-8 text-indigo-500" />
        },
        speckit: {
            title: "Speckit (Micro-knowledge)",
            desc: "Các mảnh kiến thức nhỏ (Specks) được trích xuất từ SDD. Phân phối tri thức 'Just-in-time' đúng lúc, đúng nơi cho Agent.",
            icon: <FileText className="w-8 h-8 text-amber-500" />
        },
        agent: {
            title: "AI Agent (Trợ lý lập trình)",
            desc: "Chỉ đọc những Specks cần thiết cho Task hiện tại, tránh bị quá tải ngữ cảnh (Context length limit), lập trình nhanh và chính xác hơn.",
            icon: <BrainCircuit className="w-8 h-8 text-emerald-500" />
        }
    };

    return (
        <div className="bg-slate-50 text-slate-800 font-sans min-h-screen">
            {/* 1. Header/Navigation */}
            <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-[72px] z-40">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-indigo-600" />
                        <span className="font-bold text-lg">SDD & Speckit</span>
                    </div>
                    <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
                        <a href="#hero" className="hover:text-indigo-600 transition-colors">Giới thiệu</a>
                        <a href="#problem" className="hover:text-indigo-600 transition-colors">Vấn đề & Giải pháp</a>
                        <a href="#architecture" className="hover:text-indigo-600 transition-colors">Cơ chế HĐ</a>
                        <a href="#core" className="hover:text-indigo-600 transition-colors">Cốt lõi</a>
                    </nav>
                </div>
            </header>

            {/* 2. Hero Section */}
            <section id="hero" className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-6">
                    <Zap className="w-4 h-4" /> Tiêu chuẩn hóa tri thức cho AI
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
                    Biến Tài liệu Thiết kế thành <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500">
                        Tri thức Kỹ thuật số cho AI
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
                    Spec-Driven Development (SDD) kết hợp với công cụ Speckit giống như <strong>việc xé nhỏ một cuốn Bách khoa toàn thư thành các tấm thẻ Flashcard</strong>. Thay vì ép AI đọc toàn bộ dự án, bạn chỉ đưa cho AI đúng tấm thẻ chứa quy tắc cần thiết vào đúng thời điểm.
                </p>
            </section>

            {/* 3. Problem & Solution */}
            <section id="problem" className="bg-white py-16 border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Tại sao cần Speckit?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Before */}
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">✕</span>
                                Trước đây (Gửi toàn bộ SDD)
                            </h3>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></div>
                                    <p>Tài liệu SDD (Markdown) dài hàng nghìn dòng khiến AI bị "tràn bộ nhớ ngữ cảnh" (Context limits).</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></div>
                                    <p>AI bị phân tâm bởi các phần kiến trúc không liên quan đến Task hiện tại.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></div>
                                    <p>Tốn token, xử lý chậm, dễ dẫn đến hiện tượng "hallucination" (bịa code sai chuẩn).</p>
                                </li>
                            </ul>
                        </div>
                        {/* After */}
                        <div className="p-8 rounded-3xl bg-indigo-50 border border-indigo-100 hover:shadow-lg transition-shadow relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <CheckCircle className="w-24 h-24 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2 relative z-10">
                                <span className="w-8 h-8 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center">✓</span>
                                Sau khi dùng Speckit
                            </h3>
                            <ul className="space-y-4 text-indigo-800/80 relative z-10">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                                    <p>Chia nhỏ tài liệu thành từng file `.speck` riêng biệt (Routing, State Management, UI...).</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                                    <p>Chỉ "nhúng" Speck cần thiết vào Prompt khi giao Task cho Agent.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                                    <p>Tiết kiệm Token, Code sinh ra chuẩn xác 100% theo kiến trúc đã định sẵn.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Interactive Architecture */}
            <section id="architecture" className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Luồng phân phối tri thức</h2>
                    <p className="text-center text-slate-500 mb-12">Click vào các thành phần dưới đây để xem vai trò của chúng</p>
                    
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        {/* Diagram */}
                        <div className="lg:w-1/2 w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                            <div className="flex flex-col items-center gap-6">
                                {/* Node SDD */}
                                <button 
                                    onClick={() => setActiveNode('sdd')}
                                    className={`w-full max-w-sm p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${activeNode === 'sdd' ? 'border-indigo-500 bg-indigo-50 shadow-md scale-105' : 'border-slate-100 hover:border-indigo-200 bg-white'}`}
                                >
                                    <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-slate-900">Tài liệu SDD gốc</h4>
                                        <p className="text-xs text-slate-500">architecture.md</p>
                                    </div>
                                </button>

                                <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />

                                {/* Node Speckit */}
                                <button 
                                    onClick={() => setActiveNode('speckit')}
                                    className={`w-full max-w-sm p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${activeNode === 'speckit' ? 'border-amber-500 bg-amber-50 shadow-md scale-105' : 'border-slate-100 hover:border-amber-200 bg-white'}`}
                                >
                                    <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-slate-900">Thư viện Speckit</h4>
                                        <p className="text-xs text-slate-500">/specks/ui-components.md</p>
                                    </div>
                                </button>

                                <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />

                                {/* Node Agent */}
                                <button 
                                    onClick={() => setActiveNode('agent')}
                                    className={`w-full max-w-sm p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${activeNode === 'agent' ? 'border-emerald-500 bg-emerald-50 shadow-md scale-105' : 'border-slate-100 hover:border-emerald-200 bg-white'}`}
                                >
                                    <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
                                        <BrainCircuit className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-slate-900">AI Code Agent</h4>
                                        <p className="text-xs text-slate-500">Sinh code chính xác</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Details Panel */}
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-slate-900 rounded-3xl p-8 text-white min-h-[300px] shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-amber-500 to-emerald-500"></div>
                                <div className="mb-6">
                                    {architectureDetails[activeNode].icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{architectureDetails[activeNode].title}</h3>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    {architectureDetails[activeNode].desc}
                                </p>
                                
                                {activeNode === 'speckit' && (
                                    <div className="mt-6 bg-slate-800 p-4 rounded-xl font-mono text-sm border border-slate-700">
                                        <span className="text-slate-400">// Ví dụ một Speck về Styling</span><br/>
                                        <span className="text-purple-400">@rule</span> styling<br/>
                                        <span className="text-green-400">Luôn dùng TailwindCSS. Không dùng inline CSS.</span><br/>
                                        <span className="text-green-400">Màu chính: indigo-600.</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Core Components */}
            <section id="core" className="py-16 bg-white border-t border-slate-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Thành phần của một Speck</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Khai báo */}
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-blue-600">
                                <Hash className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">1. Định danh (ID/Tag)</h3>
                            <p className="text-slate-600 text-sm mb-4">Gắn thẻ rõ ràng để Agent dễ tìm kiếm và tham chiếu khi cần thiết.</p>
                            <div className="bg-slate-900 rounded-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto">
                                <span className="text-pink-400">---</span><br/>
                                id: <span className="text-amber-300">"ui-button-specs"</span><br/>
                                tags: [<span className="text-amber-300">"frontend"</span>, <span className="text-amber-300">"react"</span>]<br/>
                                <span className="text-pink-400">---</span>
                            </div>
                        </div>

                        {/* Quy tắc */}
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-purple-600">
                                <LayoutTemplate className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">2. Quy tắc cốt lõi (Rules)</h3>
                            <p className="text-slate-600 text-sm mb-4">Ngôn ngữ tự nhiên, ngắn gọn, chỉ định rõ ràng những gì được làm và KHÔNG được làm.</p>
                            <div className="bg-slate-900 rounded-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto">
                                <span className="text-blue-400">## Quy tắc</span><br/>
                                1. Bắt buộc dùng <span className="text-emerald-300">lucide-react</span>.<br/>
                                2. Không dùng thẻ <span className="text-red-400">&lt;img&gt;</span> thường.
                            </div>
                        </div>

                        {/* Ví dụ */}
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-emerald-600">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">3. Code Mẫu (Snippets)</h3>
                            <p className="text-slate-600 text-sm mb-4">Cung cấp ví dụ thực tế (Good/Bad) để Agent học theo (Few-shot learning).</p>
                            <div className="bg-slate-900 rounded-xl p-4 text-xs font-mono text-slate-300 overflow-x-auto">
                                <span className="text-slate-500">// ✅ GOOD</span><br/>
                                <span className="text-purple-400">export</span> <span className="text-blue-400">const</span> Btn = () {'>'} <br/>
                                &nbsp;&nbsp;<span className="text-slate-400">&lt;button className="p-2"&gt;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Footer & CTA */}
            <section className="bg-slate-900 py-20 text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Sẵn sàng áp dụng SDD vào dự án?</h2>
                    <p className="text-slate-400 mb-10 text-lg">
                        Bằng cách viết document dưới dạng Specks, bạn sẽ làm chủ hoàn toàn các Trợ lý AI, đảm bảo codebase sạch sẽ và đồng nhất.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-105">
                            <Terminal className="w-5 h-5" />
                            Viết Speck Đầu Tiên
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SDDDoc;
