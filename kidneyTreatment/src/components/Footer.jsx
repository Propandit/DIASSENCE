import logo from '/assets/logo.png';
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";



const socialLinks = [
  { name: "Facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/diassencehealth/" },
  { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://www.whatsapp.com/channel/0029VaXzwuo5PO10yghVBc2M" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/diassence-healthcare/" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/diassence/" }
];


export default function Footer() {




  const links = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-blue-100 py-10">
      <div className="container mx-auto grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        
        {/* Logo & Description */}
        <div>
        <img src={logo} alt="Kidney Hospital Logo" className="w-40 mb-4 " />

          </div>

        {/* Quick Links */}
       <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((item) => (
          <li key={item.name} className="flex items-center space-x-2">
            <span className="text-blue-500">➤</span>
            <Link to={item.path} className="text-gray-800 font-semibold hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

        {/* Our Services */}
         <div>
      <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
      <ul className="space-y-2">
        {socialLinks.map((social, index) => (
          <li key={index} className="flex items-center space-x-3 ">
            <a href={social.link} target="_blank" rel="noopener noreferrer" className=" text-gray-800 font-semibold hover:text-blue-700 flex items-center space-x-2">
              {social.icon} <span>{social.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p><strong>📞 Phone:</strong> +91 7017815684 </p>
          <p><strong>📧 Email:</strong><a href="mailto:diassencehealthcare@gmail.com" className="text-gray-800 font-semibold hover:text-blue-700 ">   diassencehealthcare@gmail.com </a></p>
          <p><strong>📍 Address:</strong>  <a href="https://maps.app.goo.gl/NYJUUvTSHsy7Q4uw5" 
     target="_blank" 
     rel="noopener noreferrer" 
     className="text-gray-800 font-semibold hover:text-blue-700">
    51, Manas Nagar Maholi Road, Mathura-281001
  </a> </p>
          <p><strong>🕒 Working Hours:</strong>  24/7 hrs Open </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-gray-600 px-6 align">
        <p>© {new Date().getFullYear()} Diassence Healthcare. All rights reserved.</p>
      </div>
    </footer>
  );
}
