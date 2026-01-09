import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit, FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loader/Loading";
import CoverText from "../../../components/common/CoverText";

const MyAddedPets = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: MyAddedPet = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myAddedPets", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/v1/pedAdded-read?email=${user?.email}`
      );
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  const handleAdopted = (item) => {
    axiosSecure
      .patch(`/pet-adopted/${item._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${item.name} is now marked as Adopted!`);
        }
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This pet will be removed from your list permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/api/v1/pedAdded-cancel/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Pet has been removed.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="pb-10">
      <CoverText
        heading={"My Pet Collection"}
        subHeading={"Manage all the pets you have added for adoption"}
      />

      <div className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            {/* Table Head */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="py-4 px-6 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="py-4 px-6 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Pet
                </th>
                <th className="py-4 px-6 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="py-4 px-6 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-4 px-6 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">
              {MyAddedPet.length > 0 ? (
                MyAddedPet.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-gray-400">
                      {index + 1}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12 border-2 border-sky-50">
                            <img src={item.image} alt={item.name} />
                          </div>
                        </div>
                        <span className="font-bold text-gray-700">
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-bold uppercase tracking-tight">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      {item.adopted ? (
                        <span className="flex items-center gap-1 text-green-600 font-bold text-sm">
                          <FaCheckCircle /> Adopted
                        </span>
                      ) : (
                        <button
                          onClick={() => handleAdopted(item)}
                          className="text-amber-600 bg-amber-50 px-3 py-1 rounded-md text-xs font-bold hover:bg-amber-100 transition-colors"
                        >
                          Mark as Adopted
                        </button>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center items-center gap-3">
                        <Link
                          to={`/dashboard/myAddedPetUpdate/${item._id}`}
                          className="p-2 text-sky-500 hover:bg-sky-50 rounded-lg transition-colors tooltip"
                          data-tip="Edit Pet"
                        >
                          <FaEdit size={18} />
                        </Link>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors tooltip"
                          data-tip="Delete Pet"
                        >
                          <FaTrashAlt size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-20 text-center text-gray-400 font-medium"
                  >
                    No pets added yet. Start by adding one!
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

export default MyAddedPets;
