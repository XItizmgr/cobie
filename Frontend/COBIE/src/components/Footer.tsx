export function Footer() {
  return (
    <footer className="px-6 pt-16 pb-8">
      <div className="w-full mx-auto px-20">
        <div className="border-t border-(--border-color) pt-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 ">
            <div>
              <a href="#home" className="text-xl font-bold tracking-tight text-(--logo-color)">
                COBIE
              </a>
              <p className="mt-2 text-sm text-(--text-color)">Your local AI coding agent</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#home" className="text-(--text-color) transition-colors hover:text-(--logo-color)">
                Home
              </a>
              <a href="#home" className="text-(--text-color) transition-colors hover:text-(--logo-color)">
                About
              </a>
              <a href="#home" className="text-(--text-color) transition-colors hover:text-(--logo-color)">
                Features
              </a>
              <a href="#home" className="text-(--text-color) transition-colors hover:text-(--logo-color)">
                Download
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-12 text-sm text-(--text-color)">
            <p>{new Date().getFullYear()} COBIE</p>
            <p>Built by Xitiz</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
