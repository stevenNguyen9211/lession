import React, { useState } from 'react';
import { PlayCircle, GitMerge, Server, CheckCircle2, XCircle, ChevronRight, Zap, Settings, Box, RefreshCw, FileText } from 'lucide-react';

const GithubActionDoc = () => {
    // State cho Interactive Architecture (Cấu trúc YAML)
    const [yamlLevel, setYamlLevel] = useState('basic');

    const yamlExamples = {
        basic: {
            id: 'basic',
            title: '1. Cơ bản (Simple)',
            desc: 'Workflow đơn giản nhất: Chạy một lệnh script (echo) mỗi khi có code mới đẩy lên nhánh main.',
            code: `name: Basic Workflow

on:
  push:
    branches: [ "main" ]

jobs:
  say-hello:
    runs-on: ubuntu-latest
    steps:
      - name: Run a one-line script
        run: echo "Hello, world!"`
        },
        intermediate: {
            id: 'intermediate',
            title: '2. Thực tế (Intermediate)',
            desc: 'Workflow thường dùng cho project Node.js: Checkout source code, cài đặt môi trường, và chạy test.',
            code: `name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      # Lấy source code về runner
      - uses: actions/checkout@v4
      
      # Cài đặt Node.js
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.x'
          
      # Cài dependencies & test
      - run: npm ci
      - run: npm test`
        },
        advanced: {
            id: 'advanced',
            title: '3. Nâng cao (Advanced)',
            desc: 'Workflow phức tạp: Dùng Matrix để test trên nhiều version Node.js, sử dụng Caching để tăng tốc, và Job nối tiếp (needs).',
            code: `name: Advanced CI/CD

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x, 22.x] # Chạy 3 job song song
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm' # Bật caching tự động
          
      - run: npm ci
      - run: npm test

  deploy:
    needs: test # Chỉ chạy sau khi 'test' thành công
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' # Chỉ deploy nhánh main
    steps:
      - run: echo "Deploying to production..."
        env:
          API_KEY: \${{ secrets.PROD_API_KEY }}`
        }
    };

    // State cho Interactive Exercise
    const [pickedAnswer, setPickedAnswer] = useState(null);
    const quizOptions = [
        { 
            id: 'a', 
            text: 'Dùng từ khóa `run: checkout`', 
            correct: false, 
            why: 'Sai rồi. `run` dùng để chạy lệnh terminal (shell command), GitHub Action không tự nhận diện "checkout" như một lệnh terminal chuẩn.' 
        },
        { 
            id: 'b', 
            text: 'Dùng Action dựng sẵn với `uses: actions/checkout@v4`', 
            correct: true,  
            why: 'Chính xác! `uses` cho phép bạn gọi một Action đã được lập trình sẵn bởi cộng đồng hoặc GitHub để tải source code xuống máy chủ Runner.' 
        },
        { 
            id: 'c', 
            text: 'Dùng `needs: git-clone`', 
            correct: false, 
            why: 'Chưa đúng. `needs` dùng để định nghĩa thứ tự chạy giữa các `jobs` (chờ job khác xong mới chạy), không phải để tải code.' 
        },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* 1. Hero Section */}
            <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Zap className="w-64 h-64 text-blue-900" />
                </div>
                <div className="relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
                        <Zap className="w-4 h-4" /> CI/CD Automation
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        GitHub Actions <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                            Dây chuyền lắp ráp tự động cho Code
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Hãy tưởng tượng GitHub Actions như một <strong>đội ngũ robot công nhân</strong> đứng chờ sẵn trong kho chứa code (repository) của bạn. Bất cứ khi nào bạn đẩy code mới lên, chúng sẽ tự động thức dậy để làm những công việc nhàm chán: chạy test, build sản phẩm, và deploy lên server.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#yaml-structure" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors flex items-center gap-2">
                            Xem cấu trúc YAML <FileText className="w-4 h-4" />
                        </a>
                        <a href="https://docs.github.com/en/actions" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-colors flex items-center gap-2">
                            Docs chính thức <ChevronRight className="w-4 h-4" />
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
                        <h3 className="text-xl font-bold text-slate-900">Cách làm thủ công (Manual)</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-slate-600">
                            <span className="text-red-400 mt-1">✕</span>
                            "Nó chạy được trên máy tôi (It works on my machine)" nhưng lỗi trên máy server.
                        </li>
                        <li className="flex gap-3 text-slate-600">
                            <span className="text-red-400 mt-1">✕</span>
                            Dev phải tự gõ lệnh test bằng tay trước khi commit, thỉnh thoảng... quên.
                        </li>
                        <li className="flex gap-3 text-slate-600">
                            <span className="text-red-400 mt-1">✕</span>
                            Quá trình Deploy lên server phải copy file qua FTP hoặc SSH rủi ro cao.
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl border-2 border-blue-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Với GitHub Actions (Automated)</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex gap-3 text-slate-600">
                            <span className="text-blue-500 mt-1">✓</span>
                            Môi trường máy chủ sạch (Runner) đảm bảo code luôn chạy chuẩn xác.
                        </li>
                        <li className="flex gap-3 text-slate-600">
                            <span className="text-blue-500 mt-1">✓</span>
                            Test tự động chạy khi có Pull Request, ngăn chặn lỗi merge vào nhánh chính.
                        </li>
                        <li className="flex gap-3 text-slate-600">
                            <span className="text-blue-500 mt-1">✓</span>
                            Deploy tự động hóa (CD) giúp phát hành tính năng liên tục chỉ bằng 1 nút bấm.
                        </li>
                    </ul>
                </div>
            </section>

            {/* 3. Interactive Architecture (YAML Structure) */}
            <section id="yaml-structure" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-blue-600" /> Cấu trúc Workflow YAML (Từ Đơn Giản đến Nâng Cao)
                </h2>
                <p className="text-slate-600 mb-6">Workflow của GitHub Actions được định nghĩa bằng các file `.yml` nằm trong thư mục `.github/workflows/`. Hãy xem cách chúng được viết từ dễ đến khó.</p>
                
                <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row border border-slate-800">
                    {/* Sidebar / Buttons */}
                    <div className="md:w-1/3 bg-slate-950 p-4 flex flex-col gap-2 border-r border-slate-800">
                        {Object.values(yamlExamples).map((lvl) => (
                            <button
                                key={lvl.id}
                                onClick={() => setYamlLevel(lvl.id)}
                                className={`text-left p-4 rounded-xl transition-all border ${
                                    yamlLevel === lvl.id
                                        ? 'bg-blue-600/20 border-blue-500/50 text-blue-300 shadow-md'
                                        : 'bg-slate-900 border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                                }`}
                            >
                                <div className="font-semibold">{lvl.title}</div>
                            </button>
                        ))}
                    </div>

                    {/* YAML Display */}
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col bg-slate-900">
                        <div className="mb-4">
                            <p className="text-slate-300 font-medium leading-relaxed">{yamlExamples[yamlLevel].desc}</p>
                        </div>
                        
                        <div className="bg-[#1e1e1e] rounded-xl p-4 font-mono text-sm flex-1 border border-slate-700/50 overflow-x-auto">
                            <pre className="text-blue-300 whitespace-pre-wrap">
                                {yamlExamples[yamlLevel].code}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Core Components */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Các Khái Niệm Cốt Lõi</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                            <Zap className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Event (on)</h3>
                        <p className="text-slate-600 text-sm">Sự kiện kích hoạt workflow. Ví dụ: <code>push</code>, <code>pull_request</code>, hoặc cron job đặt lịch.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                            <Server className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Runner (runs-on)</h3>
                        <p className="text-slate-600 text-sm">Máy chủ để chạy các lệnh của bạn. Github cung cấp sẵn <code>ubuntu-latest</code>, <code>windows</code>, <code>macos</code>.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
                            <Box className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Job & Step</h3>
                        <p className="text-slate-600 text-sm">Một Workflow có nhiều <strong>Jobs</strong> (chạy song song mặc định). Một Job có nhiều <strong>Steps</strong> (chạy tuần tự).</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                        <div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 group-hover:text-teal-600 transition-colors">
                            <Settings className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-slate-900">Action (uses)</h3>
                        <p className="text-slate-600 text-sm">Các đoạn mã dựng sẵn có thể tái sử dụng. Giúp bạn không phải viết script từ con số 0.</p>
                    </div>
                </div>
            </section>

            {/* 5. Interactive Exercise */}
            <section className="mb-12 bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <RefreshCw className="w-6 h-6 text-indigo-600" /> Bài tập tương tác
                </h2>
                <p className="text-slate-600 mb-6">Mặc định, máy chủ Runner (ubuntu-latest) của GitHub hoàn toàn trống trơn và <strong>không có mã nguồn của bạn</strong> ở trên đó. Để tải source code về Runner trước khi chạy test, bạn sử dụng cú pháp nào trong YAML?</p>
                
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
                                <span className="font-medium text-slate-800">{o.text}</span>
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
                    <GitMerge className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">Mở khóa sức mạnh CI/CD</h2>
                    <p className="text-slate-400 mb-8 text-lg">
                        Biết sử dụng GitHub Actions giúp bạn từ một lập trình viên bình thường trở thành người có tư duy hệ thống, biết cách tối ưu hóa và tự động hóa quy trình phần mềm.
                    </p>
                    <a 
                        href="https://docs.github.com/en/actions" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all hover:scale-105"
                    >
                        Khám phá GitHub Actions Docs <ChevronRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default GithubActionDoc;
