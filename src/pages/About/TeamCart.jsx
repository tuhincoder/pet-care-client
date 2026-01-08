/* eslint-disable react/prop-types */

import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamCart = ({ member }) => {
  return (
    <div className="h-[450px] border rounded shadow-xl hover:border-sky-400 hover:-translate-y-2 transform duration-1000">
      <div>
        <img
          className="h-[300px] w-full object-cover rounded"
          src={member.image}
          alt=""
        />
        <div className="mt-5">
          <h1 className="text-xl text-center font-serif">{member.name}</h1>
          <h3 className="capitalize font-sans text-center">{member.title}</h3>
        </div>
        <div className="flex items-center justify-center mt-5 space-x-5 text-2xl">
          <a target="_blank" href={member.facBook}>
            <FaFacebook className="hover:text-sky-400 duration-500 text-blue-500" />
          </a>
          <a target="_blank" href={member.linkedin}>
            <FaLinkedin className="duration-500 text-sky-400" />
          </a>
          <a href="">
            <FaTwitter className="text-sky-400 duration-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCart;
