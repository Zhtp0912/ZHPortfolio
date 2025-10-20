export default function Ecv() {
    return (
      <section id="ecv" className="py-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">Who I Am</h2>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl">
          Developer. Problem Solver. Lifelong Learner. This is who I am.
        </p>
        <div className="w-full flex flex-col items-center">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/XVDxheHDbLU?si=RmJR96Ok2NsKJ9tM"
            title="CV"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="border rounded-xl shadow-lg"
          />
        </div>
      </section>
    );
  }
  