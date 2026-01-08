import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppChat = () => {
  const phoneNumber = "+8801777673792";
  const message = "Hello! I have a query about your pet care services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, x: -20 }}
      animate={{ scale: 1, opacity: 1, x: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 left-6 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-200 border-2 border-white group"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />

      <span className="absolute left-16 bg-slate-800 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block shadow-xl">
        Chat with us!
      </span>

      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
    </motion.a>
  );
};

export default WhatsAppChat;
