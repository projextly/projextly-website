const stats3 = [
  {
    value: "12+",
    title: "Years of experience",
    description:
      "Established in 2013, we have more than 12 years of experience in website development.",
  },
  {
    value: "2000+",
    title: "Websites developed",
    description:
      "With extensive experience in website development, we've successfully built over 2,000 websites for a diverse range of clients.",
  },
  {
    value: "25+",
    title: "Countries served",
    description:
      "With our global dominance, we have served our clients in more than 25+ countries across the globe.",
  },
];

export function Card3() {
  return (
    <section className="flex w-[88vw] shrink-0 items-center justify-center rounded-xl bg-[#F5FAFB] sm:w-[85vw] md:w-[80vw] lg:w-[70vw] xl:w-[1100px]">
      <div className="mx-auto px-6 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <h2 className="max-w-xl text-xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
              Website development company in Bangalore
            </h2>

            <div className="mt-6 space-y-6 text-sm text-gray-700 sm:mt-8 sm:space-y-8">
              <p>
                Being a top web development company in Bangalore, Webomindapps
                believes in delivering the best value to its clients. This is
                Webomindapps mission and sole purpose while taking up any new
                project. We have built our reputation on the core philosophy of
                delivering the best in class with the best in price.
              </p>

              <p>
                Our core specialties meticulously develop contemporary websites
                to engage and inspire your target audience. We aim to create a
                strong online presence by aligning your corporate vision with
                website development.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-14">
            {stats3.map((item) => (
              <div key={item.title} className="flex items-center gap-5 sm:gap-6 lg:gap-8">
                {/* Circle */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[3px] border-black text-black sm:h-28 sm:w-28 sm:border-4 lg:h-40 lg:w-40">
                  <span className="text-lg font-bold sm:text-2xl lg:text-3xl">{item.value}</span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-black sm:text-xl lg:text-3xl">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-gray-700 sm:mt-4 sm:text-base sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}