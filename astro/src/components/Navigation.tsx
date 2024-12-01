export interface Props {
  navigation: {
    name: string;
    href: string;
    current: boolean;
  }[];
  pathname: string;
}

import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation(props: Props) {
  const { navigation, pathname } = props;
console.log(navigation, pathname);
const currentPage = navigation.find(
  (n) => n.href + "/" === pathname || n.href === pathname
);
if (currentPage) currentPage.current = true;

return (
  <Disclosure as="nav" className="bg-primary-800">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-secondary-800 hover:text-accent-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-300">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <a href="/" rel="prefetch">
                  <img
                    className="block max-h-16 w-auto lg:hidden"
                    src="/images/alogo-2.png"
                    alt="Your Company"
                  />
                </a>
                <a href="/" rel="prefetch">
                  <img
                    className="hidden h-16 w-auto lg:block"
                    src="/images/alogo-2.png"
                    alt="Your Company"
                  />
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((o) => (
                    <a
                      key={o.name}
                      href={o.href}
                      rel="prefetch"
                      className={classNames(
                        o.current
                          ? "underline underline-offset-4 decoration-accent-300 decoration-2 text-gray-300"
                          : "text-gray-300 hover:underline hover:underline-offset-4 hover:decoration-accent-300 hover:decoration-2 hover:text-white",
                        "rounded-md px-3 py-2 mt-2 text-sm font-medium"
                      )}
                      aria-current={o.current ? "page" : undefined}
                    >
                      {o.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a
                href="/login"
                className={classNames(
                  pathname === "/login" || pathname === "/login/"
                    ? " text-accent-300 outline-none ring-2 ring-accent-300 ring-offset-2 ring-offset-secondary-800"
                    : "text-gray-400 hover:text-accent-300",
                  "rounded-full bg-secondary-800 p-1 hidden sm:block"
                )}
              >
                <span className="sr-only">View notifications</span>
                <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a
                href="/cart"
                className={classNames(
                  pathname === "/cart" || pathname === "/cart/"
                    ? " text-accent-300 outline-none ring-2 ring-accent-300 ring-offset-2 ring-offset-secondary-800"
                    : "ring-0 text-gray-400 hover:text-accent-300",
                  "rounded-full bg-secondary-800 p-1 "
                )}
              >
                <span className="sr-only">View notifications</span>
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-accent-300 text-gray-700"
                    : "text-gray-300 hover:bg-accent-300 hover:text-gray-700",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
            {open && (
              <Disclosure.Button
                key="account"
                as="a"
                href="/login"
                className={classNames(
                  pathname === "/login" || pathname === "/login/"
                    ? "bg-accent-300 text-gray-700"
                    : "text-gray-300 hover:bg-accent-300 hover:text-gray-700",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={open ? "page" : undefined}
              >
                Account
              </Disclosure.Button>
            )}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);
}
