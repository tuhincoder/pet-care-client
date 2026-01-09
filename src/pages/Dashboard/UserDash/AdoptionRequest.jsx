import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loader/Loading";
import CoverText from "../../../components/common/CoverText";
import { FaPhoneAlt, FaEnvelope, FaUser, FaHeart } from "react-icons/fa";

const AdoptionRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: adoptionRequest = [], isLoading } = useQuery({
    queryKey: ["adoptionRequest", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/v1/userAdoption?email=${user?.email}`
      );
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="pb-10">
      <CoverText
        heading={"Adoption Requests"}
        subHeading={"Manage people who want to adopt your pets"}
      />

      <div className="mt-8 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            {/* Table Head */}
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">
                  Requester
                </th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-left">
                  Contact Info
                </th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                  Phone Number
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-100">
              {adoptionRequest.length > 0 ? (
                adoptionRequest.map((request) => (
                  <tr
                    key={request._id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    {/* Image & Name Section */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="avatar">
                          <div className="mask mask-squircle w-14 h-14 bg-slate-100 border-2 border-white shadow-sm">
                            {request.photo ? (
                              <img
                                src={request.photo}
                                alt={request.name}
                                className="object-cover"
                              />
                            ) : (
                              <div className="flex items-center justify-center h-full text-slate-300">
                                <FaUser size={24} />
                              </div>
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-slate-700 text-lg">
                            {request.name}
                          </p>
                          <p className="text-xs text-sky-500 font-medium">
                            Pet Requester
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Email Section */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2 text-slate-600">
                        <FaEnvelope className="text-sky-400" />
                        <span className="font-medium">{request.email}</span>
                      </div>
                    </td>

                    {/* Phone Number Section */}
                    <td className="py-4 px-6 text-right">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-600 rounded-lg font-bold">
                        <FaPhoneAlt size={12} />
                        <span>{request.number || "N/A"}</span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-24 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
                        <FaHeart size={40} />
                      </div>
                      <p className="text-slate-400 font-medium text-lg">
                        No adoption requests found yet.
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

export default AdoptionRequest;
