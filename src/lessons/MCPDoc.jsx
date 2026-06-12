import React, { useState } from 'react';
import {
    Network,
    Database,
    TerminalSquare,
    MessageSquare,
    Lock,
    Zap,
    Plug,
    Cpu,
    ChevronRight,
    Server,
    MonitorSmartphone
} from 'lucide-react';

const App = () => {
    const [activeArch, setActiveArch] = useState('server');

    const architectureData = {
        host: {
            title: 'MCP Hosts',
            icon: <MonitorSmartphone className="w-8 h-8 text-blue-500" />,
            desc: 'Các ứng dụng sử dụng AI, ví dụ như Claude Desktop, IDEs (Cursor, Windsurf), hoặc các công cụ nội bộ của bạn. Host là nơi khởi tạo yêu cầu kết nối.',
            features: ['Claude Desktop', 'Môi trường lập trình (IDEs)', 'AI Agents']
        },
        client: {
            title: 'MCP Clients',
            icon: <Network className="w-8 h-8 text-purple-500" />,
            desc: 'Nằm bên trong ứng dụng Host, Client chịu trách nhiệm duy trì kết nối 1:1 với các MCP Servers. Nó dịch các yêu cầu từ Host sang giao thức MCP.',
            features: ['Quản lý kết nối', 'Gửi yêu cầu công cụ', 'Nhận tài nguyên']
        },
        server: {
            title: 'MCP Servers',
            icon: <Server className="w-8 h-8 text-green-500" />,
            desc: 'Các chương trình nhỏ gọn, nhẹ cung cấp bối cảnh (context), dữ liệu và công cụ cụ thể. Có thể chạy local (trên máy tính) hoặc remote (trên cloud).',
            features: ['Truy cập Database', 'Gọi APIs bên ngoài', 'Đọc file hệ thống']
        }
    };

    return (
        <div className="bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
            {/* Hero Section */}
            <section className="pt-12 pb-16 px-6 max-w-6xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                    <Zap className="w-4 h-4" /> Chuẩn kết nối AI mới
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                    Model Context Protocol <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        (MCP) là gì?
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                    MCP là một chuẩn mã nguồn mở giúp kết nối các trợ lý AI một cách an toàn với các nguồn dữ liệu bên ngoài.
                    Hãy tưởng tượng nó giống như <strong className="text-slate-900">cổng USB-C dành cho các mô hình AI</strong>.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#kien-truc" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 hover:gap-3">
                        Bắt đầu khám phá <ChevronRight className="w-5 h-5" />
                    </a>
                    <a 
                        href="https://modelcontextprotocol.io" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
                    >
                        Tài liệu chính thức
                    </a>
                </div>
            </section>

            {/* Analogy Section */}
            <section id="khai-niem" className="py-16 bg-white border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                                <Plug className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-slate-900">Vấn đề trước đây</h2>
                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Trước khi có MCP, mỗi khi muốn AI đọc dữ liệu từ Github, Slack, Google Drive hay Database cục bộ,
                                các lập trình viên phải viết những đoạn mã kết nối tùy chỉnh (custom integrations) rất vất vả. Mỗi API một kiểu, mỗi AI một định dạng.
                            </p>
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-yellow-500" /> Giải pháp của MCP
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                MCP tạo ra một giao thức chung. Bạn chỉ cần viết <strong>một MCP Server</strong> cho nguồn dữ liệu của mình.
                                Sau đó, <strong>BẤT KỲ</strong> ứng dụng AI nào hỗ trợ chuẩn MCP cũng có thể cắm vào và sử dụng dữ liệu đó ngay lập tức!
                            </p>
                        </div>
                        <div className="flex-1 w-full bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>

                            <div className="flex items-center justify-between relative z-10">
                                <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center gap-2 border border-slate-100">
                                    <Database className="w-8 h-8 text-blue-500" />
                                    <span className="text-xs font-semibold">PostgreSQL</span>
                                </div>
                                <div className="h-1 flex-1 bg-gradient-to-r from-blue-300 via-purple-300 to-amber-300 mx-4 rounded-full relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs font-bold text-slate-500 border border-slate-200 rounded-full">Chuẩn MCP</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center gap-2 border border-slate-100">
                                    <Cpu className="w-8 h-8 text-purple-500" />
                                    <span className="text-xs font-semibold">Claude AI</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-8 relative z-10">
                                <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center gap-2 border border-slate-100">
                                    <TerminalSquare className="w-8 h-8 text-slate-700" />
                                    <span className="text-xs font-semibold">File System</span>
                                </div>
                                <div className="h-1 flex-1 bg-gradient-to-r from-slate-300 via-purple-300 to-amber-300 mx-4 rounded-full relative"></div>
                                <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center gap-2 border border-slate-100">
                                    <Cpu className="w-8 h-8 text-amber-500" />
                                    <span className="text-xs font-semibold">OpenAI App</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Interactive Section */}
            <section id="kien-truc" className="py-20 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Kiến trúc cơ bản</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">Khám phá cách các thành phần trong hệ sinh thái MCP kết nối và giao tiếp với nhau.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                    {/* Interactive Diagram */}
                    <div className="flex-1 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
                        {Object.keys(architectureData).map((key, index) => (
                            <React.Fragment key={key}>
                                <button
                                    onClick={() => setActiveArch(key)}
                                    className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-300 ${activeArch === key ? 'border-blue-500 bg-blue-50 shadow-md scale-105' : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'}`}
                                >
                                    <div className="mb-3">{architectureData[key].icon}</div>
                                    <span className="font-semibold text-slate-900">{architectureData[key].title}</span>
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

                    {/* Description Panel */}
                    <div className="flex-1 w-full bg-slate-50 p-8 rounded-2xl border border-slate-100 min-h-[250px]">
                        <div className="flex items-center gap-3 mb-4">
                            {architectureData[activeArch].icon}
                            <h3 className="text-2xl font-bold text-slate-900">{architectureData[activeArch].title}</h3>
                        </div>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {architectureData[activeArch].desc}
                        </p>
                        <div className="space-y-2">
                            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Đặc điểm / Ví dụ:</span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                                {architectureData[activeArch].features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Primitives / Thành phần cốt lõi */}
            <section id="thanh-phan" className="py-20 bg-slate-900 text-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">Ba thành phần cốt lõi của MCP Server</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">MCP quy định 3 phương thức chính để AI tương tác với hệ thống của bạn.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Resources */}
                        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                                <Database className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Resources (Tài nguyên)</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">
                                Dữ liệu giống như các tập tin hoặc API mà AI có thể <strong>ĐỌC</strong>. Nó cung cấp bối cảnh tĩnh cho mô hình.
                            </p>
                            <div className="bg-slate-900/50 p-4 rounded-xl text-sm font-mono text-blue-300">
                                // Ví dụ: <br />
                                file://logs/error.log<br />
                                postgres://db/schema
                            </div>
                        </div>

                        {/* Prompts */}
                        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center mb-6">
                                <MessageSquare className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Prompts (Mẫu lệnh)</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">
                                Các mẫu câu lệnh (templates) có thể tái sử dụng. Chúng giúp định hướng cách AI nên bắt đầu một tác vụ.
                            </p>
                            <div className="bg-slate-900/50 p-4 rounded-xl text-sm font-mono text-purple-300">
                                "Phân tích code lỗi"<br />
                                "Viết tài liệu API"<br />
                                (Kèm theo bối cảnh động)
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mb-6">
                                <TerminalSquare className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Tools (Công cụ)</h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">
                                Các hàm mà AI có thể <strong>THỰC THI</strong>. Nó cho phép AI thực hiện hành động dựa trên yêu cầu của người dùng.
                            </p>
                            <div className="bg-slate-900/50 p-4 rounded-xl text-sm font-mono text-amber-300">
                                execute_sql_query()<br />
                                create_github_issue()<br />
                                fetch_weather(city)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Tại sao lại chọn MCP?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                        <div className="mt-1 bg-green-100 text-green-600 p-2 rounded-lg h-fit">
                            <Lock className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Bảo mật vượt trội</h4>
                            <p className="text-slate-600">Kiến trúc Client-Server cho phép bạn giữ dữ liệu nhạy cảm cục bộ. MCP Server chạy trên hạ tầng của bạn và bạn kiểm soát hoàn toàn việc AI được phép làm gì.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                        <div className="mt-1 bg-blue-100 text-blue-600 p-2 rounded-lg h-fit">
                            <Network className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Mở rộng dễ dàng</h4>
                            <p className="text-slate-600">Thay vì viết code tích hợp 10 nguồn dữ liệu cho 5 mô hình AI khác nhau (50 tích hợp). Với MCP, bạn chỉ cần tạo 10 Servers, mọi AI tự động kết nối được.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a 
                        href="https://modelcontextprotocol.io" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all hover:scale-105"
                    >
                        Xem Tài liệu MCP chính thức
                    </a>
                </div>
            </section>
        </div>
    );
};

export default App;
