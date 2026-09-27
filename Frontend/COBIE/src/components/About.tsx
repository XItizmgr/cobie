export function About() {
  return (
    <section className="px-6 py-28" id="about">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-2xl uppercase tracking-tight text-(--accent-blue) font-semibold">About COBIE</p>
            <h2 className="mt-4 text-4xl font-semibold text-(--main-heading-textBg)">A codingg agent that lives where your code does.</h2>
          </div>
          <div className="text-lg leading-relaxed text-(--text-color)">
            <p>COBIE works directly with your local project through a collection of developer tools.</p>
            <p className="mt-6">It can inspect files,search your project, run terminal commands,and interact with GIt while your stay in control</p>
          </div>
        </div>
      </div>
    </section>
  );
}
