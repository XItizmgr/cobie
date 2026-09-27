export function Download() {
  return (
    <section className="px-6 py-28" id="download">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl p-10 md:p-16 text-center bg-(--secondary-bg-color)">
          <p className="text-sm uppercase tracking-tight text-(--bg-color)">Get started</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white">Bring COBIE to your terminal</h2>
          <p className="max-w-xl mx-auto mt-6 text-lg text-(--bg-color)">Download COBIE, set up your environment,and start working with your projects locally.</p>
          <div className="mt-9 max-w-2xl mx-auto flex gap-10 justify-center items-center">
            <a
              href="Frontend/COBIE/public/cobie-frontend.zip" download
              className="inline-block px-7 py-3 rounded-xl font-semibold bg-(--bg-color)
              text-(--dark-brown)
              shadow-lg
              transition-transform
              active:scale-[0.98]
               "
            >
              Download COBIE
            </a>
            <a
              href="https://github.com/XItizmgr/cobie/tree/frontend"  target="_blank"
              className="inline-block px-7 py-3 rounded-xl font-semibold bg-(--accent-blue)
              text-(--dark-brown)
              shadow-lg
              transition-transform
              active:scale-[0.98]
               "
            >
            COBIE Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
