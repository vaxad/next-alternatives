export interface Props {
  categories: {
    id: number | string;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt?: string;
  }[];
}

export default function FeatureRows(props: Props) {
  const { categories } = props;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Popular Categories
          </h2>
          <a
            href="/category/all"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Shop all products
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-8 md:gap-y-0 lg:gap-x-12">
          {categories &&
            categories
              .filter((category) => category.name !== "All Products")
              .map((category) => (
                <div key={category.id} className="group relative">
                  <div className="h-56 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:h-72 xl:h-80">
                    <img
                      src={category.imageSrc}
                      alt={category.imageAlt || category.name + " category"}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-3 text-xl text-center text-gray-700">
                    <a href={category.href} rel="prefetch">
                      <span className="absolute inset-0" />
                      {category.name}
                    </a>
                  </h3>
                </div>
              ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="/category/all"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop all products
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
