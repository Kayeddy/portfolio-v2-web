/* eslint-disable react/prop-types */
export default function Projects({ name, img, alt, type, link, year, tools }) {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="inline-block overflow-hidden duration-200 ease-linear img group hover:rounded-3xl"
      >
        <img
          className="w-screen duration-700 ease-in-out group-hover:scale-105"
          src={img}
          alt={alt}
          width="800"
          height="600"
        />
      </a>
      <div className="mt-4">
        <div className="flex mb-3 space-x-2">
          <p className="flex items-center justify-center px-4 py-1 bg-transparent border rounded-full border-secondary-600 text-body-4 text-secondary-600 2xl:text-3xl">
            {year}
          </p>
          <p className="flex items-center justify-center px-4 py-1 bg-transparent border rounded-full border-secondary-600 text-body-4 text-secondary-600 2xl:text-3xl">
            {tools}
          </p>
        </div>
        <div className="2xl:space-y-3">
          <h3 className="font-medium uppercase text-works-title text-primary-200 2xl:text-5xl">
            {name}
          </h3>
          <p className="font-light text-body-2 text-primary-400 2xl:text-4xl">
            {type}
          </p>
        </div>
      </div>
    </div>
  );
}
