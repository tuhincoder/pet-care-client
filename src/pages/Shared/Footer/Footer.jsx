import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo2.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        {/* Top Section: Branding & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 1. Logo & About */}
          <div className="space-y-6">
            <img
              src={logo}
              alt="Pet Care Logo"
              className="w-32 brightness-0 invert"
            />
            <p className="text-slate-400 leading-relaxed">
              We are dedicated to providing the best pet care and adoption
              services since 1992. Your pet's happiness is our priority.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h6 className="text-white text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-10 h-1 bg-sky-500 rounded-full"></span>
            </h6>
            <ul className="space-y-4">
              {[
                "About Us",
                "Our Services",
                "Adopt a Pet",
                "Success Stories",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="hover:text-sky-400 hover:pl-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-sky-500">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h6 className="text-white text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-10 h-1 bg-sky-500 rounded-full"></span>
            </h6>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-sky-500 mt-1" />
                <span>
                  123 Pet Street, Animal City, <br /> Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-sky-500" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-sky-500" />
                <span>support@petcare.com</span>
              </li>
            </ul>
          </div>

          {/* 4. Opening Hours */}
          <div>
            <h6 className="text-white text-lg font-bold mb-6 relative inline-block">
              Opening Hours
              <span className="absolute -bottom-1 left-0 w-10 h-1 bg-sky-500 rounded-full"></span>
            </h6>
            <div className="space-y-3 bg-slate-800/50 p-5 rounded-2xl border border-slate-700">
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-sm">Mon - Fri:</span>
                <span className="text-sky-400 font-mono">9am - 6pm</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-sm">Saturday:</span>
                <span className="text-sky-400 font-mono">10am - 4pm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Sunday:</span>
                <span className="text-rose-400 font-bold uppercase text-xs">
                  Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent w-full"></div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © {currentYear}{" "}
            <span className="text-sky-500 font-bold">Pet Care Ltd</span>. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
