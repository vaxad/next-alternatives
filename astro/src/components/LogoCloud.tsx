export interface Props {
  heading: any;
  logos: {
    imgSrc: string;
    imgAlt: string;
    width?: number;
    height?: number;
  }[];
}

export default function LogoCloud(props: Props) {
  const { heading, logos } = props;
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          className="text-center text-lg font-semibold leading-8 text-gray-900"
          dangerouslySetInnerHTML={heading}
        ></h2>
        <div className="mt-10 mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none ">
          {logos.map((logo, index) => (
            <img
              key={index}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 mx-auto"
              src={logo.imgSrc}
              alt={logo.imgAlt}
              width={logo.width || 158}
              height={logo.height || 48}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
