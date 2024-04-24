/* eslint-disable react/prop-types */

export default function Role({ forwardedRef, hashRef }) {
  return (
    <div id="about" ref={hashRef}>
      <section
        ref={forwardedRef}
        className="nav-change my-20 flex select-none flex-col items-center justify-center overflow-hidden py-10 md:my-[12%] md:pt-[10%]"
        aria-label=""
      >
        <div className="flex w-full items-center space-x-20">
          <h1 className="text-heading-1 font-medium leading-[1.25em] text-secondary-400 md:leading-[1.08em]">
            I craft elevated digital journeys that connect and inspire,
            combining innovative development with intuitive design.
          </h1>
        </div>
      </section>
    </div>
  );
}
