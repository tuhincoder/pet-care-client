import useCart from "../../../../hooks/useCart";
import detailsImg from "../../../../assets/images/category/rabbit/rabbit4.jpg";
import { FaTrash, FaShoppingBag, FaTicketAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#38bdf8",
      cancelButtonColor: "#f87171",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/api/v1/carts/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Item has been removed.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Banner Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden group">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={detailsImg}
          alt="Cart Banner"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-white text-4xl md:text-6xl uppercase font-serif font-bold tracking-widest"
          >
            Shopping Cart
          </motion.h2>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-10 mt-12">
        {/* Cart Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b pb-6">
          <div className="flex items-center gap-4">
            <div className="bg-sky-100 p-4 rounded-full text-sky-500 text-2xl">
              <FaShoppingBag />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                Review Your Items
              </h1>
              <p className="text-slate-500 text-sm md:text-base">
                You have {cart.length} items in your cart
              </p>
            </div>
          </div>
          {cart.length > 0 && (
            <h2 className="text-xl md:text-2xl font-serif mt-4 md:mt-0">
              Total:{" "}
              <span className="text-sky-500 font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </h2>
          )}
        </div>

        {/* Cart Table Section */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-600 text-base border-b">
                  <th className="py-5">#</th>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {cart.map((item, index) => (
                    <motion.tr
                      key={item._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="hover:bg-slate-50 transition-colors border-b last:border-0"
                    >
                      <td className="font-medium text-slate-400">
                        {index + 1}
                      </td>
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-16 h-16 md:w-20 md:h-20 ring-1 ring-slate-200">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="font-bold text-slate-800 md:text-lg">
                          {item.name}
                        </div>
                        <span className="text-xs text-slate-400 uppercase tracking-tighter">
                          In Stock
                        </span>
                      </td>
                      <td className="font-bold text-sky-500 md:text-lg">
                        ${item.price}
                      </td>
                      <td className="text-center">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="p-3 bg-rose-50 text-rose-500 rounded-xl hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-sm"
                          title="Remove Item"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {cart.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl text-slate-200 mb-4 flex justify-center">
                <FaShoppingBag />
              </div>
              <h3 className="text-2xl font-serif text-slate-400 italic">
                Your cart is currently empty
              </h3>
              <button className="mt-6 text-sky-500 font-bold border-b-2 border-sky-500 hover:text-sky-700">
                Continue Shopping
              </button>
            </div>
          )}
        </div>

        {/* Checkout & Coupon Section */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Coupon */}
          <div className="bg-slate-50 p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <FaTicketAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                className="w-full py-3 pl-12 pr-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-300 outline-none transition-all"
                placeholder="Coupon code"
              />
            </div>
            <button className="w-full md:w-auto px-8 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors font-medium">
              Apply Coupon
            </button>
          </div>

          {/* Summary & Buy Now */}
          <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 space-y-4">
            <div className="flex justify-between items-center text-slate-600">
              <span>Subtotal</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-slate-600 border-b pb-4">
              <span>Shipping</span>
              <span className="text-green-600 font-bold uppercase text-sm font-mono">
                Free
              </span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xl font-bold text-slate-800">
                Total Price
              </span>
              <span className="text-3xl font-bold text-sky-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              disabled={!cart.length}
              className={`w-full py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-300 ${
                cart.length
                  ? "bg-sky-400 hover:bg-slate-800 text-white shadow-sky-100 hover:shadow-none"
                  : "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none"
              }`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
