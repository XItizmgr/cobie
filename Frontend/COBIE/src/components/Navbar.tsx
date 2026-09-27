const style =
  "relative inline-block py-1 transition-colors text-md before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-full before:bg-black before:-translate-x-1/2 before:scale-x-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100 ";

export function Navbar() {
  return (
    <div className="flex justify-center items-center w-full p-7 sticky top-0 z-50 backdrop-blur-md">
      <nav className="flex justify-between w-full max-w-5xl  mx-auto border border-(--border-color ) px-6 py-3 rounded-2xl shadow-md transition-all bg-(--bg-color)">
        <div id="logo" className="flex items-center gap-2">
          <a href="/" className="text-xl font-bold tracking-tight transition-colors text-(--logo-color)">
            COBIE
          </a>
        </div>
        <div id="nav-items" className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className={style}>
            Home
          </a>
          <a href="#about" className={style}>
            About
          </a>
          <a href="#feature" className={style}>
            Feature
          </a>
        </div>
        <div className="flex items-center">
          <a href="#download" className="px-5 py-2 font-semibold rounded-xl shadow-xl transition-all active:scale-[0.98] bg-(--btn-bg-color) text-(--dark-brown) border-1 border-(--border-color)">
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
}
