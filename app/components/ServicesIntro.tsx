export default function ServicesIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        {/* Heading */}
        <h1 className="max-w-6xl text-5xl font-bold leading-[1.08] tracking-[-0.03em] text-black md:text-6xl lg:text-[72px]">
          Get creative website services to secure your digital presence
        </h1>

        {/* Bottom Section */}
        <div className="mt-24 flex flex-col lg:flex-row">
          {/* Line */}
          <div className="flex w-full lg:w-1/4">
            <div className="mt-4 h-px w-44 bg-black"></div>
          </div>

          {/* Text */}
          <div className="w-full">
            <p className="text-lg leading-[2] text-neutral-800 md:text-[18px]">
              We offer a wider range of services to help you establish a strong
              presence in the online market. Our finest services include website
              and mobile app development,
              <span className="text-red-500">
                {" "}
                eCommerce development,
              </span>{" "}
              digital marketing, and UI/UX design. We also incorporate the
              latest SEO techniques to ensure that your website ranks high in
              search engine results. Our experts create solutions that give a
              smooth user experience on different devices, considering your
              target audience. We help you achieve your business objectives
              effortlessly. We are a web development company in Bangalore that
              focuses on providing high-quality service. Choose us to
              outperform your competitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}