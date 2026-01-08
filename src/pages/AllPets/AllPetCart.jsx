/* eslint-disable react/prop-types */
<<<<<<< HEAD
import { MdPets, MdPhotoSizeSelectLarge, MdSupervisorAccount } from "react-icons/md";
=======
<<<<<<< HEAD
import { MdPets, MdPhotoSizeSelectLarge, MdSupervisorAccount } from "react-icons/md";
=======
import {
  MdPets,
  MdPhotoSizeSelectLarge,
  MdSupervisorAccount,
} from "react-icons/md";
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
import { BsCalendarDate } from "react-icons/bs";
import { SiNamecheap } from "react-icons/si";
import { Link } from "react-router-dom";

const AllPetCart = ({ item }) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ce9b2de (Initial commit)
    console.log(item);
    const { _id, name, image, category, country, date, size, } = item || {}

    return (

        <div>

            <div className="group mx-auto my-3 max-w-[350px] space-y-6 rounded-xl cursor-pointer object-cover bg-white px-4 pb-8 pt-4 font-sans shadow-lg dark:bg-[#18181B]">
                <div className="relative flex h-48 w-full justify-center lg:h-[280px]">
                    <img className="group-hover:scale-105 transition rounded-lg duration-500" src={image} alt="" />
                </div>
                <div className="drop-shadow-2xl border ">
                    <h6 className=" flex items-center justify-center mx-auto text-2xl uppercase text-center"> <SiNamecheap className="mr-3" />{name}</h6>
                    <div className="divider"></div>
                    <div className="flex justify-between capitalize mb-3 p-2">
                        <p className="flex items-center  text-lg font-semibold"><MdPets className="mr-2" /> {category}</p>
                        <p className="flex items-center  text-lg font-semibold"><MdSupervisorAccount className="mr-2" />{country}</p>
                    </div>
                    <div className="flex justify-between capitalize p-2">
                        <p className="flex items-center  text-lg font-semibold"><BsCalendarDate className="mr-2" />{date}</p>
                        <p className="flex items-center  text-lg font-semibold"><MdPhotoSizeSelectLarge className="mr-2" />{size}</p>
                    </div>


                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
                        <Link to={`/allPetsDetails/${_id}`}>
                            <button className="rounded-lg my-4 bottom-0 bg-[#49B2FF] px-4 py-2 font-sans font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">Details</button>

                        </Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

<<<<<<< HEAD
export default AllPetCart;
=======
export default AllPetCart;
=======
  console.log(item);
  const { _id, name, image, category, country, date, size } = item || {};

  return (
    <div>
      <div className="group mx-auto my-3 max-w-[350px] space-y-6 rounded-xl cursor-pointer object-cover bg-white px-4 pb-8 pt-4 font-sans shadow-lg ">
        <div className="relative flex h-48 w-full justify-center lg:h-[280px]">
          <img
            className="group-hover:scale-105 transition rounded-lg duration-500"
            src={image}
            alt=""
          />
        </div>
        <div className="drop-shadow-2xl border ">
          <h6 className=" flex items-center justify-center mx-auto text-2xl uppercase text-center">
            {" "}
            <SiNamecheap className="mr-3" />
            {name}
          </h6>
          <div className="divider"></div>
          <div className="flex justify-between capitalize mb-3 p-2">
            <p className="flex items-center  text-lg font-semibold">
              <MdPets className="mr-2" /> {category}
            </p>
            <p className="flex items-center  text-lg font-semibold">
              <MdSupervisorAccount className="mr-2" />
              {country}
            </p>
          </div>
          <div className="flex justify-between capitalize p-2">
            <p className="flex items-center  text-lg font-semibold">
              <BsCalendarDate className="mr-2" />
              {date}
            </p>
            <p className="flex items-center  text-lg font-semibold">
              <MdPhotoSizeSelectLarge className="mr-2" />
              {size}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
            <Link to={`/allPetsDetails/${_id}`}>
              <button className="rounded-lg my-4 bottom-0 bg-[#49B2FF] px-4 py-2 font-sans font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPetCart;
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
