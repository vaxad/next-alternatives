export interface Props {
  categoryName: string;
  filters: string[];
}

import { useMemo } from "react";
import products from "../data/products.json";

export default function Example(props: Props) {
  const { categoryName, filters } = props;

  let filteredProducts = products;
  useMemo(() => {
    if (filters.length > 0) {
      filteredProducts = [];
      return filters.forEach((filter) => {
        products.forEach((product) => {
          if (filteredProducts.includes(product)) return;
          product.colors.forEach((color) => {
            if (color.name === filter) return filteredProducts.push(product);
          });
        });
      });
    } else {
      filteredProducts = products;
    }
  }, [filters]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {filteredProducts
            .filter((product) => {
              if (categoryName === "All Products") return product;
              else return product.category === categoryName;
            })
            .map((product, i) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                  <img
                    src={product.images[0].url}
                    alt={product.images[0].alt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={"/products/" + product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">
                      {product.colors.map((c) => c.name).join(", ")}
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      {"$" + product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
