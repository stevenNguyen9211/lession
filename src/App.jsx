import React, { useState, useEffect } from 'react';
import { 
    Network, 
    BookOpen, 
    Clock, 
    ChevronRight, 
    Activity, 
    Layout, 
    GitBranch, 
    ArrowLeft,
    GraduationCap,
    Flame,
    Sparkles
} from 'lucide-react';
import MCPDoc from './lessons/MCPDoc';
import GitDoc from './lessons/GitDoc';
import SDDDoc from './lessons/SDDDoc';
import SkillsDoc from './lessons/SkillsDoc';

const App = () => {
    const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'mcp', 'git', 'sdd'

    // Cuộn lên đầu trang mỗi khi chuyển view (tránh giữ nguyên vị trí cuộn của màn hình trước)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [currentView]);

    // Dữ liệu danh sách bài học trên Dashboard
    const lessons = [
        {
            id: 'mcp',
            title: 'Khái niệm & Kiến trúc MCP',
            description: 'Tìm hiểu giao thức Model Context Protocol - cổng kết nối USB-C tương lai dành cho các mô hình ngôn ngữ lớn (LLM).',
            time: '15 phút',
            difficulty: 'Trung bình',
            difficultyColor: 'text-amber-600 bg-amber-100',
            icon: <Network className="w-8 h-8 text-blue-600" />,
            bgGradient: 'from-blue-500/10 to-indigo-500/10 hover:border-blue-400'
        },
        {
            id: 'git',
            title: 'Quy trình Git & AI Agent',
            description: 'Cách phối hợp hiệu quả giữa lập trình viên và Trợ lý AI để tự động hóa việc lưu trữ, đóng gói và đẩy mã nguồn lên GitHub.',
            time: '10 phút',
            difficulty: 'Cơ bản',
            difficultyColor: 'text-green-600 bg-green-100',
            icon: <GitBranch className="w-8 h-8 text-orange-600" />,
            bgGradient: 'from-orange-500/10 to-amber-500/10 hover:border-orange-400'
        },
        {
            id: 'sdd',
            title: 'Tài liệu Thiết Kế SDD & Speckit',
            description: 'Tìm hiểu cách chia nhỏ Software Design Document (SDD) thành các Specks tri thức ngắn gọn, phân phối Just-in-time trực tiếp trong IDE.',
            time: '12 phút',
            difficulty: 'Trung bình',
            difficultyColor: 'text-indigo-600 bg-indigo-100',
            icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
            bgGradient: 'from-indigo-500/10 to-purple-500/10 hover:border-indigo-400'
        },
        {
            id: 'skills',
            title: 'Claude Skills là gì?',
            description: 'Đóng gói quy trình thành thư mục hướng dẫn mà Claude tự nạp khi cần - giống cẩm nang đào tạo nhân viên mới. Tìm hiểu progressive disclosure và cách viết SKILL.md.',
            time: '12 phút',
            difficulty: 'Trung bình',
            difficultyColor: 'text-amber-600 bg-amber-100',
            icon: <Sparkles className="w-8 h-8 text-purple-600" />,
            bgGradient: 'from-purple-500/10 to-indigo-500/10 hover:border-purple-400'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
            {/* Header / Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <button 
                        onClick={() => setCurrentView('dashboard')}
                        className="flex items-center gap-2 text-left group"
                    >
                        <div className="bg-blue-600 p-2 rounded-xl text-white group-hover:scale-105 transition-transform">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            AI<span className="text-blue-600">Learn</span> Hub
                        </span>
                    </button>

                    <div className="flex items-center gap-4">
                        {currentView !== 'dashboard' && (
                            <button 
                                onClick={() => setCurrentView('dashboard')}
                                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
                            >
                                <ArrowLeft className="w-4 h-4" /> Quay lại Dashboard
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {/* Dashboard View */}
            {currentView === 'dashboard' && (
                <div className="max-w-6xl mx-auto px-6 py-12">
                    {/* Welcome Banner */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white mb-12 shadow-md relative overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>
                        <div className="relative z-10 max-w-2xl">
                            <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
                                Chào mừng bạn đến với <br />
                                Trung Tâm Học Tập AI Engineering
                            </h1>
                            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                                Nơi tổng hợp các bài học tương tác trực quan giúp bạn nắm bắt các kỹ năng lập trình thời đại AI, kết nối Agent và tối ưu hóa quy trình làm việc.
                            </p>
                            <div className="flex gap-4">
                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                                    <Activity className="w-3.5 h-3.5" /> 3 Bài học sẵn sàng
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Section Title */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Danh sách bài học của bạn</h2>
                        <p className="text-slate-500">Lựa chọn bài học bên dưới để bắt đầu học tập và tương tác trực quan.</p>
                    </div>

                    {/* Lessons Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {lessons.map((lesson) => (
                            <div 
                                key={lesson.id}
                                className={`bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${lesson.bgGradient}`}
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                                            {lesson.icon}
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-600">
                                                <Clock className="w-3.5 h-3.5" /> {lesson.time}
                                            </span>
                                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold ${lesson.difficultyColor}`}>
                                                <Flame className="w-3.5 h-3.5" /> {lesson.difficulty}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                                        {lesson.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {lesson.description}
                                    </p>
                                </div>
                                <button 
                                    onClick={() => setCurrentView(lesson.id)}
                                    className="w-full bg-slate-900 group-hover:bg-blue-600 text-white font-semibold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all hover:gap-3"
                                >
                                    Bắt đầu học <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Active Lesson View */}
            {currentView === 'mcp' && <MCPDoc />}
            {currentView === 'git' && <GitDoc />}
            {currentView === 'sdd' && <SDDDoc />}
            {currentView === 'skills' && <SkillsDoc />}

            {/* Footer */}
            <footer className="bg-slate-100 border-t border-slate-200 py-8 mt-12 text-center text-sm text-slate-500">
                <div className="max-w-6xl mx-auto px-6">
                    <p>© 2026 AI Learn Hub. Thiết kế cho việc học tập trực quan và phát triển AI.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
