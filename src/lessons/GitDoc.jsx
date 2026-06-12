import React from 'react';
import {
    GitBranch,
    GitCommit,
    GitPullRequest,
    Terminal,
    AlertCircle,
    ArrowLeftRight,
    ArrowUpCircle,
    CheckCircle2,
    BookOpen
} from 'lucide-react';

const GitDoc = () => {
    return (
        <div className="bg-slate-50 text-slate-800 font-sans selection:bg-orange-200">
            {/* Hero Section */}
            <section className="pt-12 pb-16 px-6 max-w-6xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                    <GitBranch className="w-4 h-4" /> Làm việc hiệu quả với Git & AI
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                    Hướng dẫn Git Căn Bản <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                        Dành Cho AI & Lập Trình Viên
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Học cách quản lý phiên bản mã nguồn, phối hợp làm việc và giúp các trợ lý AI (như Antigravity) tự động hóa quy trình đẩy code lên GitHub một cách an toàn.
                </p>
            </section>

            {/* Core Workflow */}
            <section className="py-16 bg-white border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Quy trình 3 bước đẩy code cơ bản</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">1. Git Add (Lưu trạng thái)</h3>
                            <p className="text-slate-600 mb-4">
                                Chọn và đưa các tệp tin đã thay đổi vào khu vực chờ (Staging Area) sẵn sàng để đóng gói.
                            </p>
                            <code className="block bg-slate-900 text-orange-300 p-3 rounded-lg text-sm font-mono">
                                git add .
                            </code>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                                <GitCommit className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">2. Git Commit (Đặt tên gói)</h3>
                            <p className="text-slate-600 mb-4">
                                Đóng gói các tệp tin đã chọn kèm theo lời nhắn mô tả ngắn gọn về những thay đổi đã thực hiện.
                            </p>
                            <code className="block bg-slate-900 text-amber-300 p-3 rounded-lg text-sm font-mono">
                                git commit -m "feat: add dashboard"
                            </code>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                                <ArrowUpCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">3. Git Push (Đẩy lên Cloud)</h3>
                            <p className="text-slate-600 mb-4">
                                Tải gói thay đổi từ máy tính cá nhân lên máy chủ từ xa (ví dụ GitHub, GitLab) để chia sẻ hoặc sao lưu.
                            </p>
                            <code className="block bg-slate-900 text-orange-300 p-3 rounded-lg text-sm font-mono">
                                git push origin main
                            </code>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Integration Tip */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-3xl border border-orange-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start">
                    <div className="p-3 bg-orange-600 text-white rounded-2xl">
                        <BookOpen className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Tự động hóa với Trợ lý AI</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Khi bạn giao nhiệm vụ cho trợ lý AI thiết kế hoặc sửa code, AI có thể tự động viết code, kiểm tra và đề xuất chạy các lệnh Git nêu trên. Bạn không cần phải mở Terminal lên và tự gõ thủ công.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-slate-800 text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-600" /> AI tự động tổng hợp những gì đã làm vào commit message
                            </div>
                            <div className="flex items-center gap-2 text-slate-800 text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-600" /> Bạn chỉ cần click nút <strong>Approve (Duyệt)</strong> để thực thi
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GitDoc;
