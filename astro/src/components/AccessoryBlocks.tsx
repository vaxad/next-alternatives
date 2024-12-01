export interface Props {
  title: string;
  small?: boolean;
  products: {
    id: number;
    name: string;
    href: string;
    price: number;
    imageSrc: string;
    imageAlt?: string;
  }[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AccessoryBlocks(props: Props) {
  const { small, title, products } = props;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight mb-5 text-gray-900">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group"
              rel="prefetch"
            >
              <div
                className={classNames(
                  small
                    ? "aspect-h-4 aspect-w-8 max-w-xs"
                    : "aspect-h-1 aspect-w-1 max-w-full",
                  "mx-auto max-w-xs overflow-hidden rounded-lg bg-gray-200 sm:max-w-full"
                )}
              >
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt || product.name + " image"}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 text-center sm:text-left">
                {product.name}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900 text-center sm:text-left">
                {"$" + product.price.toFixed(2)}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
