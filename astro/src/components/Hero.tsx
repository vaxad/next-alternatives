export interface Props {
  cta?: { tagline: string; href: string; cta?: string };
  heading: string;
  description: string;
  heroImage: { src: string; alt?: string };
}

export default function Hero(props: Props) {
  const { cta, heading, description, heroImage } = props;
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              {cta && (
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  {cta.tagline}{" "}
                  <a
                    href={cta.href}
                    className="whitespace-nowrap font-semibold text-indigo-600"
                  >
                    {cta.cta || "Let's Go!"}
                    <span className="absolute inset-0" aria-hidden="true" />
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              )}
            </div>
            <h1 className="mt-24 text-4xl capitalize font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              {heading}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {description}
            </p>
            <div className="mt-10 flex items-center gap-x-6"></div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={heroImage.src}
            alt={heroImage.alt || "Hero Image"}
          />
        </div>
      </div>
    </div>
  );
}
