import React, { useState } from 'react';
import { Terminal, Play, FileCode2, BarChart, CheckCircle2, ChevronRight, XCircle, Code, Eye, Search } from 'lucide-react';

const PlaywrightCliDoc = () => {
    // State cho Interactive Architecture (Command Simulator)
    const [activeCommand, setActiveCommand] = useState('test');

    const commandsData = {
        test: {
            id: 'test',
            title: 'Run Tests',
            cmd: 'npx playwright test',
            desc: 'Thực thi toàn bộ test suite trong chế độ headless (không có giao diện).',
            output: `Running 6 tests using 3 workers\n...\n  6 passed (2.4s)`
        },
        ui: {
            id: 'ui',
            title: 'UI Mode',
            cmd: 'npx playwright test --ui',
            desc: 'Mở giao diện UI tương tác, cho phép chạy, debug, xem trace và time-travel từng bước test.',
            output: `Opening UI mode...\nListening on http://localhost:9323/`
        },
        codegen: {
            id: 'codegen',
            title: 'Code Generation',
            cmd: 'npx playwright codegen',
            desc: 'Mở trình duyệt, ghi lại các thao tác của bạn và tự động sinh ra mã test tương ứng.',
            output: `Generating code...\n(Browser window opens for recording)`
        },
        report: {
            id: 'report',
            title: 'Show Report',
            cmd: 'npx playwright show-report',
            desc: 'Mở HTML report chi tiết của lần chạy test gần nhất trên trình duyệt.',
            output: `Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.`
        }
    };

    // State cho Interactive Exercise
    const [pickedAnswer, setPickedAnswer] = useState(null);
    const quizOptions = [
        { 
            id: 'a', 
            text: 'npx playwright test', 
            correct: false, 
            why: 'Sai rồi. Lệnh này chỉ chạy test ngầm (headless) trong terminal, không có giao diện đồ họa.' 
        },
        { 
            id: 'b', 
            text: 'npx playwright test --ui', 
            correct: true,  
            why: 'Chính xác! Cờ --ui sẽ mở Playwright UI, nơi bạn có thể time-travel, xem DOM snapshot và debug trực quan.' 
        },
        { 
            id: 'c', 
            text: 'npx playwright codegen', 
            correct: false, 
            why: 'Chưa đúng. Lệnh này dùng để record thao tác và sinh code tự động, không phải để debug test có sẵn.' 
        },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* 1. Hero Section */}
            <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Terminal className="w-64 h-64 text-emerald-900" />
                </div>
                <div className="relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm mb-6">
                        <Terminal className="w-4 h-4" /> CLI Tooling
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Playwright CLI <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                            Trung tâm điều khiển Testing
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Playwright CLI giống như một <strong>chiếc điều khiển vạn năng (Universal Remote)</strong> cho môi trường testing của bạn. Thay vì viết script dài dòng, bạn có thể chạy, debug, và thậm chí tự động sinh code test chỉ bằng vài lệnh terminal ngắn gọn.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#simulator" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-colors flex items-center gap-2">
                            Thử nghiệm lệnh <Play className="w-4 h-4" />
                        </a>
                        <a href="https://playwright.dev/docs/test-cli" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-colors flex items-center gap-2">
                            Xem Docs chính thức <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Problem & Solution */}
            <section className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-3xl border-2 border-red-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-red-100 text-red-600 rounded-xl">
                            <XCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Trước khi dùng CLI</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-slate-600">
                            <span className="text-red-400 mt-1">✕</span>
                            Phải tự cấu hình phức tạp để mở trình duyệt xem test chạy.
                        </li>
                        <li className="flex gap-3 text-slate-600">
                            <span className="text-red-400 mt-1">✕</span>
                            Mò mẫm tìm selector (XPath, CSS) thủ công bằng DevTools.
                        </li>
                        <li className="flex gap-3 text-slate-600">
                            <span className="text-red-400 mt-1">✕</span>
                            Khó phân tích nguyên nhân khi test thất bại trên CI.
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl border-2 border-emerald-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Với Playwright CLI</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-slate-600">
                            <span className="text-emerald-500 mt-1">✓</span>
                            Chạy UI mode mạnh mẽ, time-travel qua từng thao tác test.
                        </li>
                        <li className="flex gap-3 text-slate-600">
                            <span className="text-emerald-500 mt-1">✓</span>
                            Dùng Codegen để "click đến đâu, sinh code test đến đó".
                        </li>
                        <li className="flex gap-3 text-slate-600">
                            <span className="text-emerald-500 mt-1">✓</span>
                            Tạo và xem HTML Report trực quan ngay trong terminal.
                        </li>
                    </ul>
                </div>
            </section>

            {/* 3. Interactive Architecture (Simulator) */}
            <section id="simulator" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Terminal className="w-6 h-6 text-emerald-600" /> CLI Command Simulator
                </h2>
                <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
                    {/* Sidebar / Buttons */}
                    <div className="md:w-1/3 bg-slate-800 p-4 flex flex-col gap-2">
                        {Object.values(commandsData).map((cmd) => (
                            <button
                                key={cmd.id}
                                onClick={() => setActiveCommand(cmd.id)}
                                className={`text-left p-4 rounded-xl transition-all ${
                                    activeCommand === cmd.id
                                        ? 'bg-emerald-600 text-white shadow-md'
                                        : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                                }`}
                            >
                                <div className="font-semibold">{cmd.title}</div>
                                <div className="text-xs font-mono mt-1 opacity-80">{cmd.cmd}</div>
                            </button>
                        ))}
                    </div>

                    {/* Terminal Display */}
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-white font-bold text-lg mb-2">{commandsData[activeCommand].title}</h3>
                            <p className="text-slate-400">{commandsData[activeCommand].desc}</p>
                        </div>
                        
                        <div className="bg-black/50 rounded-xl p-4 font-mono text-sm flex-1 border border-slate-700/50">
                            <div className="flex items-center gap-2 text-slate-500 mb-2">
                                <span className="text-emerald-500">~/project</span> $ {commandsData[activeCommand].cmd}
                            </div>
                            <div className="text-slate-300 whitespace-pre-wrap">
                                {commandsData[activeCommand].output}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Core Components */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">4 Lệnh Core Thường Dùng Nhất</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                            <Play className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Run Tests</h3>
                        <p className="text-slate-600 mb-4">Lệnh cơ bản nhất để chạy toàn bộ test trong project.</p>
                        <div className="bg-slate-900 text-emerald-400 font-mono text-sm p-3 rounded-xl">
                            npx playwright test
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                            <Eye className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">UI Mode</h3>
                        <p className="text-slate-600 mb-4">Môi trường debug tuyệt vời nhất của Playwright.</p>
                        <div className="bg-slate-900 text-emerald-400 font-mono text-sm p-3 rounded-xl">
                            npx playwright test --ui
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                            <FileCode2 className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Codegen</h3>
                        <p className="text-slate-600 mb-4">Công cụ sinh code tự động bằng cách ghi lại thao tác.</p>
                        <div className="bg-slate-900 text-emerald-400 font-mono text-sm p-3 rounded-xl">
                            npx playwright codegen
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                            <BarChart className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Show Report</h3>
                        <p className="text-slate-600 mb-4">Xem báo cáo HTML chi tiết sau khi test chạy xong.</p>
                        <div className="bg-slate-900 text-emerald-400 font-mono text-sm p-3 rounded-xl">
                            npx playwright show-report
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Interactive Exercise */}
            <section className="mb-12 bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Search className="w-6 h-6 text-blue-600" /> Kiểm tra kiến thức
                </h2>
                <p className="text-slate-600 mb-6">Bạn đang bị lỗi test ở một flow thanh toán phức tạp. Bạn muốn mở một công cụ trực quan để có thể đi lùi/đi tới (time-travel) qua từng bước và xem DOM thay đổi như thế nào. Bạn sẽ dùng lệnh CLI nào?</p>
                
                <div className="space-y-3">
                    {quizOptions.map((o) => {
                        const show = pickedAnswer === o.id;
                        return (
                            <button
                                key={o.id}
                                onClick={() => setPickedAnswer(o.id)}
                                className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                                    show
                                        ? o.correct 
                                            ? 'border-emerald-400 bg-emerald-50'
                                            : 'border-red-300 bg-red-50'
                                        : 'border-white bg-white hover:border-slate-300'
                                }`}
                            >
                                <span className="font-medium text-slate-800 font-mono">{o.text}</span>
                                {show && (
                                    <p className={`text-sm mt-2 font-medium ${o.correct ? 'text-emerald-700' : 'text-red-700'}`}>
                                        {o.why}
                                    </p>
                                )}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* 6. Lợi ích & CTA */}
            <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <Terminal className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">Làm chủ Playwright CLI</h2>
                    <p className="text-slate-400 mb-8 text-lg">
                        CLI không chỉ là công cụ để chạy test CI/CD, nó là công cụ đắc lực của Developer để viết, debug và phân tích lỗi test nhanh nhất có thể.
                    </p>
                    <a 
                        href="https://playwright.dev/docs/test-cli" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-xl font-bold transition-all hover:scale-105"
                    >
                        Đọc toàn bộ lệnh Playwright CLI <ChevronRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default PlaywrightCliDoc;
