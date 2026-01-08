import { useQuery } from "@tanstack/react-query";
import petListingImg from "../../assets/images/category/cats/details.jpg";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../../components/Loader/Loading";
import CampaignCart from "./CampaignCart";
import CoverImg from "../../components/common/CoverImg";
import CoverText from "../../components/common/CoverText";

const DonationCampaign = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: campaigns = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["campaigns"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/campaigns-read"); // .get explicitely use kora bhalo
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="pb-20 bg-slate-50/30 min-h-screen">
      {/* Page Header/Cover */}
      <CoverImg image={petListingImg} text={"Donation Campaigns"} />

      <div className="container mx-auto px-4 md:px-10">
        {/* Section Heading */}
        <div className="my-12 text-center md:text-left">
          <CoverText
            heading={"Active Donation Campaigns"}
            subHeading={
              "Every contribution brings a pet closer to a happy home."
            }
          />
        </div>

        {/* Campaign Grid */}
        {campaigns.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((item) => (
              <CampaignCart key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-sky-100 p-6 rounded-full mb-4">
              <span className="text-4xl">🐾</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-700">
              No Active Campaigns
            </h3>
            <p className="text-slate-400">
              Check back later for new donation opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationCampaign;
