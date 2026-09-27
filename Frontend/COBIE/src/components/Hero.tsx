export function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-120px)] flex items-center px-6">
      <div className="max-w-5xl w-full mx-auto">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium tracking-[0.2em] uppercase text-(--accent-blue)">Local AI Coding Agent</p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-(--main-heading-textBg)">
            Your code.
            <br />
            <span className="text-(--accent-blue)">Your machine.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-(--text-color)">
            COBIE is a local AI coding agent that helps you understand, inspect, and work with your projects directly from your terminal.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#download"
              className="px-6 py-3 rounded-xl font-semibold
              bg-(--btn-bg-color)
              text-(--dark-brown)
              border border-(--border-color)
              shadow-lg
              transition-transform
              active:scale-[0.98]"
            >
              Get COBIE
            </a>

            <a
              href="#feature"
              className="px-6 py-3 rounded-xl font-semibold
              border border-(--border-color)
              text-(--logo-color)
              transition-colors
              hover:bg-(--btn-bg-color)"
            >
              Explore COBIE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
