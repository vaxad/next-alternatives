export interface Props {
  testimonials: { id: number; quote: string; attribution: string }[];
  offer: {
    heading: string;
    description: string;
    cta: string;
    image: { src: string; alt?: string };
  };
}

import { useState } from "react";

import Modal from "./Modal";

export default function reviews(props: Props) {
  const { testimonials, offer } = props;

  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Decorative background image and gradient */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={offer.image.src}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-white bg-opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
      </div>

      {/* Callout */}
      <section
        aria-labelledby="sale-heading"
        className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2
            id="sale-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            {offer.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
            {offer.description}
          </p>
          <button
            className="mt-6 inline-block w-full rounded-md border border-transparent bg-accent-400 px-8 py-3 font-medium text-secondary-800 transition-all  hover:bg-accent-300 hover:text-secondary-900 sm:w-auto"
            onClick={handleOpen}
          >
            {offer.cta}
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="testimonial-heading"
        className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2
            id="testimonial-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            What are people saying?
          </h2>

          <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.id} className="sm:flex lg:block">
                <svg
                  width={24}
                  height={18}
                  viewBox="0 0 24 18"
                  aria-hidden="true"
                  className="flex-shrink-0 text-gray-300"
                >
                  <path
                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                    fill="currentColor"
                  />
                </svg>
                <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
                  <p className="text-lg text-gray-600">{testimonial.quote}</p>
                  <cite className="mt-4 block font-semibold not-italic text-gray-900">
                    {testimonial.attribution}
                  </cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <Modal
        handleOpen={handleOpen}
        open={open}
        icon={"email"}
        title={"Subscribe"}
        message={
          "The latest news, articles, and resources, sent to your inbox weekly."
        }
        isNewsletter={true}
      />
    </div>
  );
}
