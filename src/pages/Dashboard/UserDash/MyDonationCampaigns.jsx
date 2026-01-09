import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaDonate, FaInfoCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import Loading from "../../../components/Loader/Loading";
import CoverText from "../../../components/common/CoverText";

const MyDonationCampaigns = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: myDonationCap = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myDonationCap", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/v1/myDonation-Campaign?email=${user?.email}`
      );
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Campaign?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/api/v1/myDonationCamp/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your campaign has been removed.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="pb-10">
      <CoverText
        heading={"Donation Campaigns"}
        subHeading={"Track and manage your pet help funds"}
      />

      <div className="mt-8 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            {/* Table Head */}
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">
                  #
                </th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase">
                  Campaign Name
                </th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase text-center">
                  Max Goal
                </th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase text-right">
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-100">
              {myDonationCap.length > 0 ? (
                myDonationCap.map((donation, indx) => (
                  <tr
                    key={donation._id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 text-slate-400 font-medium">
                      {indx + 1}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-sky-50 rounded-lg text-sky-500">
                          <FaDonate size={18} />
                        </div>
                        <span className="font-bold text-slate-700">
                          {donation.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                        ${donation.maximumAmount}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => handleDelete(donation._id)}
                        className="p-3 text-rose-500 hover:bg-rose-50 rounded-xl transition-all active:scale-90"
                        title="Delete Campaign"
                      >
                        <FaTrash size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-20 text-center">
                    <div className="flex flex-col items-center gap-2 text-slate-400">
                      <FaInfoCircle size={40} className="opacity-20" />
                      <p className="font-medium">
                        No donation campaigns found.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyDonationCampaigns;
