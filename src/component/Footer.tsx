export default function Footer() {
    const year = new Date().getFullYear();

    return (
      <footer className="w-full bg-slate-950 border-t border-white/5 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              <p>&copy; {year} XDOODLE. All rights reserved.</p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">GITHUB</a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">LINKEDIN</a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-medium">TWITTER</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
