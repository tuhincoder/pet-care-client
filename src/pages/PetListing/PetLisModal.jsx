import { FaUserCheck, FaDonate, FaTimes } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

const PetLisModal = () => {
  const [amount, setAmount] = useState("");

  return (
    <div>
      {/* --- Trigger Button --- */}
      <button
        className="flex items-center gap-2 px-8 py-3 bg-sky-500 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-sky-100"
        onClick={() => document.getElementById("donation_modal").showModal()}
      >
        <FaDonate className="text-xl" /> Donate Now
      </button>

      {/* --- Modal Dialog --- */}
      <dialog
        id="donation_modal"
        className="modal modal-bottom sm:modal-middle backdrop-blur-sm"
      >
        <div className="modal-box p-0 overflow-hidden rounded-3xl border border-slate-100">
          {/* Modal Header */}
          <div className="bg-sky-500 p-6 text-white flex justify-between items-center">
            <h3 className="font-bold text-2xl flex items-center gap-3">
              <FaUserCheck /> Confirm Donation
            </h3>
            <form method="dialog">
              <button className="text-white/80 hover:text-white transition-colors">
                <FaTimes className="text-xl" />
              </button>
            </form>
          </div>

          <div className="p-8">
            <p className="text-slate-500 mb-6 font-medium text-center">
              Your support helps us provide better care and finding new homes
              for our pets.
            </p>

            {/* Amount Input Section */}
            <div className="relative mb-8">
              <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                Donation Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-slate-400">
                  $
                </span>
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  name="amount"
                  type="number"
                  className="w-full py-4 pl-10 pr-4 text-2xl font-bold border-2 border-slate-100 rounded-2xl focus:border-sky-400 focus:ring-0 outline-none transition-all placeholder:text-slate-200"
                  placeholder="0.00"
                  required
                />
              </div>
            </div>

            {/* Stripe Elements Form */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-200">
              <Elements stripe={stripePromise}>
                <CheckOutForm amount={amount} />
              </Elements>
            </div>

            {/* Security Badge */}
            <p className="mt-6 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Secured payment powered by Stripe
            </p>
          </div>

          <div className="modal-action p-6 pt-0">
            <form method="dialog" className="w-full">
              <button className="btn btn-ghost w-full rounded-xl text-slate-400">
                Cancel and Go Back
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PetLisModal;
