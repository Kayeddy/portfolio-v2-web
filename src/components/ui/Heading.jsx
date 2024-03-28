/* eslint-disable react/prop-types */
import HeadingSVG from "./HeadingSVG";

export default function Heading({ title }) {
  return (
    <>
      <div className="select-none section-heading">
        <div className="heading flex translate-y-56 items-center justify-center space-x-[3%]">
          <HeadingSVG />
          <h2 className="text-5xl font-medium uppercase w-fit text-secondary-600 sm:text-heading-2">
            {title}
          </h2>
          <HeadingSVG />
        </div>
      </div>
    </>
  );
}
