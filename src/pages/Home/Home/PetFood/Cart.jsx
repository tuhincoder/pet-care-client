import useCart from "../../../../hooks/useCart";
import detailsImg from "../../../../assets/images/category/rabbit/rabbit4.jpg";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/api/v1/carts/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      {/* Banner */}
      <div className="mb-32 relative">
        <img
          className="md:h-[450px] w-full object-cover rounded-xl"
          src={detailsImg}
          alt="Cart Banner"
        />
        <h2 className="absolute top-1/2 left-24 -translate-y-1/2 text-white text-5xl uppercase font-bold">
          Cart
        </h2>
      </div>

      {/* Cart Table */}
      <div className="flex items-center justify-center mb-10">
        {cart.length ? (
          <h1 className="text-3xl capitalize font-mono underline underline-offset-4">
            Your Cart Items
          </h1>
        ) : (
          <h1 className="text-center text-3xl capitalize font-mono underline underline-offset-4 text-sky-500">
            No Cart Added Now
          </h1>
        )}
      </div>

      <div className="overflow-x-auto bg-slate-100 h-[700px]">
        <table className="table w-full">
          <thead>
            <tr className="bg-base-300">
              <th>#</th>
              <th className="md:text-xl">Image</th>
              <th className="md:text-xl">Name</th>
              <th className="md:text-xl">Price</th>
              <th className="md:text-xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle md:w-24 md:h-24">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="md:text-lg font-mono">{item.name}</td>
                <td className="md:text-lg text-sky-500">{item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost md:text-xl text-red-600"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Checkout Section */}
      <div className="flex bg-slate-100 items-center justify-center md:px-5 py-4 gap-6">
        <div className="flex-1 flex">
          <input
            type="text"
            className="py-3 px-4 rounded-l-md border border-sky-300 outline-none md:w-1/2"
            placeholder="Coupon code"
          />
          <input
            type="submit"
            className="py-3 px-4 rounded-r-md bg-sky-300 hover:bg-slate-200 duration-500 cursor-pointer"
            value="Apply coupon"
          />
        </div>

        <div className="flex-1 md:flex items-center justify-between">
          <h2 className="text-sm md:text-xl font-serif">
            Total Price: {totalPrice}
          </h2>

          <input
            type="submit"
            value="Buy Now"
            disabled={!cart.length}
            className={`btn py-3 px-9 rounded-md duration-500 ${
              cart.length
                ? "bg-sky-300 hover:bg-slate-300"
                : "bg-slate-400 cursor-not-allowed"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
