import {
  Box,
  Layers,
  FileCode,
  Terminal,
  Server,
  HardDrive,
  Network,
  Cpu,
  Package,
  AlertTriangle,
  Info
} from "lucide-react";

export default function DockerStudyTab() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-[#2496ED] selection:text-white p-4 md:p-8 lg:p-12">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3 text-[#2496ED]">
            <Box size={40} strokeWidth={1.5} />
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
              Docker Quickstart
            </h1>
          </div>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Thay vì cài cắm lỉnh kỉnh (NodeJS, Python, Database...) trực tiếp lên máy tính và hay gặp lỗi "máy tôi chạy được, máy người khác thì không", Docker đóng gói ứng dụng + toàn bộ môi trường vào một cái hộp gọi là <strong className="text-zinc-200 font-medium">Container</strong>. Giao cái hộp này cho máy nào cũng chạy y chang nhau.
          </p>
        </header>

        {/* 3 Core Concepts */}
        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-6 flex items-center gap-2 tracking-tight">
            <Layers size={20} className="text-[#2496ED]" strokeWidth={2} /> Ba khái niệm cốt lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-700/50 transition-colors">
              <Package size={24} className="text-[#2496ED] mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-zinc-100 mb-2">Image (Bản đúc)</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Giống như đĩa cài game. Chứa sẵn hệ điều hành thu nhỏ, thư viện, và code của bạn. Nó chỉ đọc (read-only).
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-700/50 transition-colors">
              <Box size={24} className="text-[#2496ED] mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-zinc-100 mb-2">Container (Hộp chứa)</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Bật Image lên thì nó biến thành Container. Có thể chạy 10 Container từ 1 Image. Xóa Container thì dữ liệu bên trong mất, nhưng Image vẫn nguyên.
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-700/50 transition-colors">
              <FileCode size={24} className="text-[#2496ED] mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-zinc-100 mb-2">Dockerfile</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                File văn bản chứa kịch bản để tự động tạo ra Image.
              </p>
            </div>
          </div>
        </section>

        {/* Cheat-sheet Bento Grid */}
        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-6 flex items-center gap-2 tracking-tight">
            <Terminal size={20} className="text-[#2496ED]" strokeWidth={2} /> Cheat-sheet: Lệnh 90% thời gian sẽ dùng
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
            
            {/* Quản lý Container */}
            <div className="md:col-span-8 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 md:p-8 hover:border-zinc-700/50 transition-colors space-y-5">
              <h3 className="text-lg font-medium text-zinc-100">Quản lý Container</h3>
              <ul className="space-y-3">
                <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-between border-b border-zinc-800/50 pb-3">
                  <span className="text-sm text-zinc-400">Chạy container mới</span>
                  <code className="bg-zinc-950 px-3 py-1.5 rounded-lg text-[13px] font-mono text-[#2496ED] border border-zinc-800 shrink-0">docker run -d -p 8080:80 --name my_web nginx</code>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-between border-b border-zinc-800/50 pb-3">
                  <span className="text-sm text-zinc-400">Xem container ĐANG CHẠY / TẤT CẢ</span>
                  <code className="bg-zinc-950 px-3 py-1.5 rounded-lg text-[13px] font-mono text-[#2496ED] border border-zinc-800 shrink-0">docker ps / docker ps -a</code>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-between border-b border-zinc-800/50 pb-3">
                  <span className="text-sm text-zinc-400">Dừng / Xóa 1 container</span>
                  <code className="bg-zinc-950 px-3 py-1.5 rounded-lg text-[13px] font-mono text-[#2496ED] border border-zinc-800 shrink-0">docker stop / docker rm my_web</code>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-between pt-1">
                  <span className="text-sm text-zinc-400">Chui vào container đang chạy</span>
                  <code className="bg-zinc-950 px-3 py-1.5 rounded-lg text-[13px] font-mono text-[#2496ED] border border-zinc-800 shrink-0">docker exec -it my_web sh</code>
                </li>
              </ul>
            </div>

            {/* Docker Compose */}
            <div className="md:col-span-4 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 md:p-8 hover:border-zinc-700/50 transition-colors flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-lg font-medium text-zinc-100 mb-5">Docker Compose</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-[11px] font-medium text-zinc-500 mb-2 uppercase tracking-wider">Bật tất cả</div>
                    <code className="block w-full bg-zinc-950 px-3 py-2 rounded-lg text-[13px] font-mono text-emerald-400 border border-zinc-800">docker compose up -d</code>
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-zinc-500 mb-2 uppercase tracking-wider">Tắt tất cả</div>
                    <code className="block w-full bg-zinc-950 px-3 py-2 rounded-lg text-[13px] font-mono text-rose-400 border border-zinc-800">docker compose down</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Quản lý Image */}
            <div className="md:col-span-12 bg-[#2496ED]/5 border border-[#2496ED]/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 md:items-center justify-between">
              <div className="md:w-1/3">
                <h3 className="text-lg font-medium text-zinc-100 mb-2">Quản lý Image & Build</h3>
                <p className="text-sm text-zinc-400">Tải, xem, tạo mới và xóa bản đúc.</p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                 <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800/80 shadow-sm">
                    <div className="text-[10px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Xem danh sách</div>
                    <code className="text-[13px] font-mono text-[#2496ED]">docker images</code>
                 </div>
                 <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800/80 shadow-sm">
                    <div className="text-[10px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Tải từ Docker Hub</div>
                    <code className="text-[13px] font-mono text-[#2496ED]">docker pull ubuntu</code>
                 </div>
                 <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800/80 shadow-sm">
                    <div className="text-[10px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Đúc Image mới</div>
                    <code className="text-[13px] font-mono text-amber-400">docker build -t app .</code>
                 </div>
                 <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800/80 shadow-sm">
                    <div className="text-[10px] font-medium text-zinc-500 mb-1.5 uppercase tracking-wider">Xóa 1 image</div>
                    <code className="text-[13px] font-mono text-rose-400">docker rmi &lt;id&gt;</code>
                 </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2 Column Layout for the rest */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 pt-8 border-t border-zinc-800/50">
          
          {/* Những lưu ý "sống còn" */}
          <section className="space-y-6">
            <h2 className="text-xl font-medium text-zinc-100 flex items-center gap-2 tracking-tight">
              <AlertTriangle size={20} className="text-amber-400" strokeWidth={2} /> Lưu ý sống còn
            </h2>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <HardDrive size={18} className="text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-zinc-200 text-sm font-medium mb-1">Mất sạch dữ liệu (Database)</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">Bắt buộc dùng <strong className="text-zinc-300 font-medium">Volume</strong> để đục một lỗ thông ra ổ cứng thật lưu dữ liệu lâu dài.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <FileCode size={18} className="text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-zinc-200 text-sm font-medium mb-1">Live-Reload</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">Dùng <strong className="text-zinc-300 font-medium">Bind Mount</strong> để map thẳng thư mục code trên máy thật vào container.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Network size={18} className="text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-zinc-200 text-sm font-medium mb-1">Hai container không nhìn thấy nhau</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">Phải đưa chúng vào chung 1 <strong className="text-zinc-300 font-medium">Network</strong> (nên dùng Docker Compose).</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Cpu size={18} className="text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-zinc-200 text-sm font-medium mb-1">Image quá nặng</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">Luôn dùng các phiên bản tối giản có chữ <code className="text-[#2496ED]">alpine</code>. Dùng <code className="text-[#2496ED]">.dockerignore</code> để loại bỏ file rác.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <AlertTriangle size={18} className="text-zinc-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-zinc-200 text-sm font-medium mb-1">Lộ API Keys và Mật khẩu</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">Phải truyền từ bên ngoài qua biến môi trường (Environment Variables).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Hệ sinh thái */}
          <section className="space-y-6">
            <h2 className="text-xl font-medium text-zinc-100 flex items-center gap-2 tracking-tight">
              <Server size={20} className="text-[#2496ED]" strokeWidth={2} /> Hệ sinh thái & Tech Stack
            </h2>
            <div className="grid gap-3">
              <div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-xl flex items-start gap-3 hover:bg-zinc-900/50 transition-colors">
                <Info size={16} className="text-zinc-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-zinc-200 font-medium text-sm">Podman</h4>
                  <p className="text-[13px] text-zinc-400 mt-1 leading-relaxed">Clone hoàn hảo của Docker, không cần tiến trình ngầm (daemonless).</p>
                </div>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-xl flex items-start gap-3 hover:bg-zinc-900/50 transition-colors">
                <Info size={16} className="text-zinc-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-zinc-200 font-medium text-sm">containerd</h4>
                  <p className="text-[13px] text-zinc-400 mt-1 leading-relaxed">Lõi chạy container của chính Docker.</p>
                </div>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-xl flex items-start gap-3 hover:bg-zinc-900/50 transition-colors">
                <Info size={16} className="text-zinc-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-zinc-200 font-medium text-sm">Kubernetes (K8s)</h4>
                  <p className="text-[13px] text-zinc-400 mt-1 leading-relaxed">"Trùm cuối" điều phối container.</p>
                </div>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-xl flex items-start gap-3 hover:bg-zinc-900/50 transition-colors">
                <Info size={16} className="text-zinc-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-zinc-200 font-medium text-sm">Docker Swarm</h4>
                  <p className="text-[13px] text-zinc-400 mt-1 leading-relaxed">"Cây nhà lá vườn" của Docker.</p>
                </div>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-xl flex items-start gap-3 hover:bg-zinc-900/50 transition-colors mt-2">
                <Info size={16} className="text-zinc-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-zinc-200 font-medium text-sm">VMware, VirtualBox</h4>
                  <p className="text-[13px] text-zinc-400 mt-1 leading-relaxed">Cũ và nặng nề, tốn vài GB RAM. Docker chỉ tốn vài MB, khởi động 1 giây.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
        
      </div>
    </div>
  );
}
