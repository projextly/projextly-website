import { ArrowUpRight } from "lucide-react";

export function Card4() {
  return (
    <section className="hidden sm:flex w-[88vw] shrink-0 items-center justify-center rounded-xl bg-[#F8F3E8] px-6 py-16 sm:w-[85vw] md:w-[80vw] lg:w-[70vw] lg:py-0 xl:w-[1100px]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
        <span className="mb-4 text-xs font-medium text-[#E35A5A] sm:mb-6 sm:text-sm lg:mb-8">
          Have a project in mind?
        </span>

        <h2 className="max-w-5xl text-3xl font-bold uppercase leading-[1.1] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
          LET&apos;S MAKE SOMETHING
          <br />
          GREAT TOGETHER!
        </h2>

        <button className="group mt-8 flex h-24 w-24 items-center justify-center rounded-full border border-black bg-transparent transition-all duration-300 hover:bg-black hover:text-white sm:mt-10 sm:h-32 sm:w-32 lg:mt-12 lg:h-44 lg:w-44">
          <div className="flex items-center gap-1.5 text-sm font-medium sm:text-base lg:text-lg">
            <span className="text-black group-hover:text-white">Contact Us</span>
            <ArrowUpRight
              size={18}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </button>
      </div>
    </section>
  );
}