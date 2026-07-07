import Image from "next/image";

const features = [
  {
    title: "Fully customized websites",
    body: (
      <>
        Running a business is the result of your dreams coming true, and
        it&apos;s our job to express that on the internet. We take the
        responsibility of developing your website from scratch with unique
        and efficient technologies.
      </>
    ),
  },
  {
    title: "All services in one place",
    body: (
      <>
        We provide all services in one place, so there&apos;s no need to go
        anywhere else. Our team is experienced in delivering end-to-end
        website services that include planning, development, web hosting,
        infographics,{" "}
        <a href="#" className="text-red-500 hover:underline">
          digital marketing services
        </a>
        , and{" "}
        <a href="#" className="text-red-500 hover:underline">
          SEO services.
        </a>
      </>
    ),
  },
  {
    title: "Highly skilled in-line team",
    body: (
      <>
        Our team members are highly skilled and trained in the latest
        technologies. They implement their creativity in website development
        to ensure that your website stands out from the rest.
      </>
    ),
  },
  {
    title: "On-time delivery",
    body: (
      <>
        We promise to deliver all projects on time and following client
        instructions, ensuring good quality work without any delays.
      </>
    ),
  },
];

export default function WebsiteSolutionsSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-14">
          End-to-End Website &amp; Digital Solutions for Growing Businesses
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Image with red offset backdrop */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-red-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/rocket.png"
                alt="Laptop on a desk with glowing icons representing web development, SEO, e-commerce, digital marketing, and WordPress services"
                width={640}
                height={720}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Feature list */}
          <div className="divide-y divide-gray-200">
            {features.map((feature) => (
              <div key={feature.title} className="py-6 first:pt-0">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}