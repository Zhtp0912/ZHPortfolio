import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-xl" />
        <div className="absolute top-40 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-30 blur-xl" />
      </div>

      {/* Text on the left */}
      <div className="flex-1 text-left relative z-10">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-600">Hey There!</h2>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-900">I am Zhan Heng</h1>
          <p className="text-lg sm:text-xl mb-6 text-purple-600 font-medium">A passionate Developer building modern IT applications</p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Motivated and dedicated programmer with an eagerness to learn and grow in the IT field. Actively
            seeking opportunities for hands-on experience and deepen grasp of real-world industry practices.
          </p>
          <a href="#skills"
             className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
            See More
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 text-center">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-3xl font-semibold text-blue-600">01</p>
            <p className="text-sm text-gray-600">Years<br />experience</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-3xl font-semibold text-purple-600">10+</p>
            <p className="text-sm text-gray-600">Completed<br />project</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-3xl font-semibold text-green-600">02</p>
            <p className="text-sm text-gray-600">Companies<br />worked</p>
          </div>
        </div>
      </div>

      {/* Image + socials */}
      <div className="flex-1 flex justify-center items-center relative z-10">
        <div className="flex items-center gap-8">
          <div className="flex flex-col gap-4">
            <a href="https://wa.me/60186605356" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.486"/>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/zhan-heng-cho-6902b1238/" target="_blank" rel="noopener noreferrer"
               className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a href="mailto:tp068635@mail.apu.edu.my"
               className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
              </svg>
            </a>
          </div>

          {/* Profile image with gradient */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-full opacity-80" />
            <div className="absolute -inset-2 bg-white rounded-full" />
            <div className="relative w-80 h-80 rounded-full overflow-hidden">
              <Image src="/ZHPortfolio/profile.png" alt="Zhan Heng" width={320} height={320} className="object-cover w-full h-full" />
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full" />
            <div className="absolute top-1/2 -right-6 w-3 h-3 bg-blue-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
