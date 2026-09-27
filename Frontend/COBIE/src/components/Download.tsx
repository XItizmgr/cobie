export function Download() {
  return (
    <section className="px-6 py-28" id="download">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl p-10 md:p-16 text-center bg-(--secondary-bg-color)">
          <p className="text-sm uppercase tracking-tight text-(--bg-color)">Get started</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white">Bring COBIE to your terminal</h2>
          <p className="max-w-xl mx-auto mt-6 text-lg text-(--bg-color)">Download COBIE, set up your environment,and start working with your projects locally.</p>
          <div className="mt-9">
            <a
              href="#"
              className="inline-block px-7 py-3 rounded-xl font-semibold bg-(--bg-color)
              text-(--dark-brown)
              shadow-lg
              transition-transform
              active:scale-[0.98]
               "
            >
              Download COBIE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
