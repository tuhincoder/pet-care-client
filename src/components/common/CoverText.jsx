/* eslint-disable react/prop-types */

const CoverText = ({ heading, subHeading }) => {
  return (
    <div>
      <div className="mb-10">
        <h2 className="border-s-4 md:text-4xl font-serif border-sky-400 ps-2 capitalize">
          {heading}
        </h2>
        <h1 className="border-s-4 md:text-xl border-sky-300 ps-2 text-sky-500 capitalize">
          {subHeading}
        </h1>
      </div>
    </div>
  );
};

export default CoverText;
