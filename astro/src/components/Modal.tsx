export interface Props {
  handleOpen: () => boolean;
  open: boolean;
  icon?: "check" | "email";
  title: string;
  message: string;
  isNewsletter?: boolean;
}

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, AtSymbolIcon } from "@heroicons/react/24/outline";

export default function Modal(props: any) {
  const { handleOpen, open, icon, title, message, isNewsletter } = props;

  function getIcon(icon: string) {
    switch (icon) {
      case "check":
        return (
          <CheckIcon
            className="h-9 w-9 text-success-300 bg-gray-700 rounded-full p-2"
            aria-hidden="true"
          />
        );
      case "email":
        return (
          <AtSymbolIcon
            className="h-9 w-9 text-success-300 bg-gray-700 rounded-full p-2"
            aria-hidden="true"
          />
        );
      default:
        return (
          <CheckIcon
            className="h-9 w-9 text-success-300 bg-gray-700 rounded-full p-2"
            aria-hidden="true"
          />
        );
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    {/* todo: add icon cases */}
                    {icon && getIcon(icon)}
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{message}</p>
                    </div>
                  </div>
                </div>
                {/*newsletter form*/}
                {isNewsletter && (
                  <div className="mt-5 sm:mt-6">
                    <form className="mt-6 sm:flex sm:max-w-md">
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        required
                        className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-black shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-secondary-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                        placeholder="Enter your email"
                      />
                      <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center rounded-md bg-secondary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
