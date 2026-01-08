import { useLoaderData } from "react-router-dom";
import detailsImg from "../../assets/images/category/pigeon/pigeon1.jpg";
import PetLisModal from "../PetListing/PetLisModal";
import RidSiteOffer from "../PetListing/RidSiteOffer";
import CoverImg from "../../components/common/CoverImg";

const CampaignsDetails = () => {
  const campaignDetails = useLoaderData();
  const {
    name,
    image,
    longDescription,
    shortDescription,
    age,
    date,
    country,
    category,
    color,
    vaccinationStatus,
  } = campaignDetails || {};

  return (
    <div>
      <CoverImg image={detailsImg} text={"Donation Campaign Details"} />

      {/* Details Card */}
      <div className="grid md:grid-cols-5 my-32 gap-7 px-10">
        <div className="md:col-span-3">
          <div className="border-s-4 border-s-sky-300 ps-2">
            <h2 className="text-4xl text-sky-500 capitalize font-mono">
              Details For {name} pet
            </h2>
            <p>{longDescription}</p>
          </div>

          <div className="my-10">
            <img src={image} alt={name} />
            <div className="bg-slate-50 font-extralight px-5">
              <h2 className="text-4xl font-mono capitalize py-6">
                {name} full information and see the next one
              </h2>

              <div className="space-y-2">
                <p>{shortDescription}</p>
                <p>{longDescription}</p>
              </div>

              <div className="divider divider-info"></div>

              <div className="flex justify-around mb-4 italic">
                <p>
                  <span>Category</span>: {category}
                </p>
                <p>Age: {age}</p>
                <p>Country: {country}</p>
              </div>

              <div className="flex justify-around pb-4 italic">
                <p>Vaccination Status: {vaccinationStatus}</p>
                <p>Color: {color}</p>
                <p>Date: {date}</p>
              </div>

              <div className="flex justify-center pb-4">
                <PetLisModal />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Add */}
        <RidSiteOffer />
      </div>
    </div>
  );
};

export default CampaignsDetails;
