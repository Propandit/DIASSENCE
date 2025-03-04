
// import { MdStar, MdStarHalf } from "react-icons/md";
import Slider from "react-slick";
import  { useState } from "react";
import { FaUserMd, FaTags, FaVideo, FaHeartbeat } from "react-icons/fa";
// import { MdOutlineStar } from "react-icons/md";
import { SiBitrise } from "react-icons/si";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUserCheck, FaSmile, FaStar } from "react-icons/fa";
// import { FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
// import logo1 from '/assets/logo1.png';
import back from "/assets/bg1.jpg";
// import doctor1 from "/assets/doc.jpg";
// import doctor0 from "/assets/doc1.jpg";
// import sir from "/assets/sir.jpg";
// import mam from "/assets/mam.jpg";
import Gallery from "./Gallery";
// import {  FaClock } from "react-icons/fa";



// const mainteam = [
//   {
//     name: "Vinayak Chaudhary",
//     post: "Director, Chairperson, CTO",
//     img: sir, // Replace with actual image URL
//   },
  
//   {
//     name: "Sataxi Chaudhary",
//     post: "Director, CEO",
//     img: mam, // Replace with actual image URL
//   },
// ];
// Dummy Doctor Data
// const doctors = [
//   { 
//     name: "Dr. RAJESH GOEL", 
//     img: doctor0, 
//     specialty: "Sr. Nephrologist", 
//     degree: "MBBS, DNB(Medicine) DNB (Nephrology) Fellow (Kidney Transplant)", 
//     experience: "12 years of experience", 
//     description: "the best nephrologist in treating chronic kidney diseases, disturbance of electrolytes, post-dialysis side effects."
//   },
//   { 
//     name: "Mr. PANKAJ RAJPUT", 
//     img: doctor1, 
//     specialty: "Head-Delhi NCR", 
//     degree: "", 
//     experience: "8 years of experience", 
//     description: "Head of dialysis services Delhi - NCR region."
//   },
//   { 
//     name: "Mr. BANKE LAL BAGHEL", 
//     img: doctor1, 
//     specialty: "Head-Mathura", 
//     degree: "", 
//     experience: "5 years of experience", 
//     description: "Head of dialysis services Mathura- Agra region."
//   },
  
// ];


// Dummy Testimonials


const services = [
  {
    title: "General Nephrology",
    description: "Comprehensive kidney care including diagnosis, treatment, and preventive strategies.",
    features: ["Kidney Function Tests", "Hypertension Management", "Dialysis Planning", "Lifestyle Counseling"],
    icon: "🩺",
  },
  {
    title: "Dietician consultation",
    description: "Nutrition advice from a dietitian and post-transplant care.",
    features: ["Personalized Nutrition Plan", "Chronic Disease Management", "Nutritional Education", "Support and Motivation"],
    icon: "🏥",
  },
  {
    title: "Dialysis Services",
    description: "State-of-the-art dialysis treatments including hemodialysis and peritoneal dialysis.",
    features: ["Hemodialysis", "Peritoneal Dialysis", "Home Dialysis Training", "Nutritional Support"],
    icon: "💉",
  },
  {
    title: "Pediatric Nephrology",
    description: "Specialized kidney care for children with congenital or acquired kidney diseases.",
    features: ["Chronic Kidney Disease", "Congenital Anomalies", "Pediatric Dialysis", "Growth Monitoring"],
    icon: "👶",
  },
];


export default function Home() {
  const navigate = useNavigate();

  // const [beforeAfter, setBeforeAfter] = useState(50);
  const [testimonials] = useState([
    { name: "Rahul Sharma", review: "Great experience! The staff was very caring and professional.", rating: 5 },
    { name: "Pooja Verma", review: "Professional doctors, best dialysis care. Highly recommend!", rating: 4 },
    { name: "Amit Khanna", review: "Very clean facility with top-notch medical equipment. The team is excellent!", rating: 5 }, 
  { name: "Anjali Tiwari", review: "The care and attention given here are truly commendable. Exceptional service!", rating: 5 },
  { name: "Vikas Yadav", review: "Best dialysis experience ever. The doctors explained everything thoroughly.", rating: 4 },
  { name: "Meena Kapoor", review: "Efficient, clean, and highly professional staff. I feel at ease coming here.", rating: 5 },
  { name: "Rajesh Singh", review: "My dialysis sessions have been smooth and hassle-free. Thankful for the great care!", rating: 4 },
  { name: "Kavita Joshi", review: "They prioritize patient comfort and hygiene. Outstanding service!", rating: 5 }
  ]);


// function for enquiry form

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const url =
      "https://script.google.com/macros/s/AKfycbzsQ3h_8_-X6gMncwuwohrLm-z-KdWeMykv_QT0kRLGphxLPErCo1hGyXmz1lcCL1y1/exec"; // Replace with actual URL

    const formData = new URLSearchParams();
    formData.append("Name", e.target.name.value.trim());
    formData.append("Email", e.target.email.value.trim());
    formData.append("Feedback", e.target.feedback.value.trim());

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    })
      .then((res) => res.text())
      .then((data) => {
        setSuccess(true);
        alert(data);
        e.target.reset(); // Clear the form
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong! Please try again.");
      })
      .finally(() => setLoading(false));
  };


  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      
      {/* Header Section */}
      {/* <header className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 py-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white bg-cover bg-center">
      style={{ backgroundImage: `url(${backgroundImage})` }}  */}
  <header
  className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 py-25 text-white 
  bg-gradient-to-br from-blue-500 to-indigo-600 bg-cover bg-center bg-no-repeat border-none shadow-none outline-none"
  style={{
    backgroundImage: `url(${back})`,
    border: "none",
    boxShadow: "none",
  }}
>
      {/* Left Content */}
      <div className="text-center lg:text-left">
        {/* <span className="px-4 py-1 text-sm font-semibold bg-white text-blue-600 rounded-full  mb-12">
          Committed To Best Services
        </span> */}
        <h1 className="text-5xl lg:text-6xl font-bold mt-4  text-white  mb-12">
        Proactive Kidney Care <span className="text-blue-400 "> &  <br /> Dialysis Services</span>
        </h1>
        <p className="mt-4 text-xl text-white font-bold  mb-12">
        Providing comprehensive dialysis care with patient-centric technology <br/> and compassionate support to your kidney care journey.
        </p>

        {/* Features */}
        <div className="mt-6 flex flex-col md:flex-row gap-6 mb-12">
        
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button onClick={() => navigate("/download")}  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
            Schedule Your Dialysis
          </button>
          {/* <Link to="/services" className="inline-block px-6 py-3 text-white bg-blue-600 rounded-full shadow-md transition-all duration-300 hover:bg-blue-800">
      Our Services 
    </Link>
    */}
      <button 
        onClick={() => navigate("/contact")} 
        className="inline-block px-6 py-3 text-white bg-blue-600 rounded-full shadow-md transition-all duration-300 hover:bg-blue-800"
      >
        Book a Consultation
      </button> 
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mt-10 lg:mt-0"
      >
          {/* <img
          src={logo1}  
          alt="Kidney Care"
            className="max-w-sm lg:max-w-md mx-auto"
          /> */}
      </motion.div>
    </header>

      {/* Achievements Section */}

      
{/*service party */}

<section className="container mx-auto mt-24 mb-24 text-center px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-12">
    {/* Main Section Title */}
    <motion.h2 
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
    Our Comprehensive <span className="text-blue-600">Kidney Care Services</span>
    </motion.h2>

    <p className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300">Expert nephrology services tailored to your needs</p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {services.map((service, index) => (
    <motion.div
      key={index}
      className="p-6 bg-white rounded-xl shadow-lg cursor-pointer transition-all duration-300 group w-full max-w-[500px] min-h-[250px] mx-auto"
      whileHover={{ scale: 1.02, backgroundColor: "#E0F2FE" }}
      onClick={() => window.location.href = "/services"}
    >
      {/* Logo & Title - Aligned Like Reference Image */}
      <div className="flex items-center space-x-4">
        <div className="p-4 bg-blue-100 rounded-lg">
          <span className="text-3xl sm:text-4xl text-blue-600">{service.icon}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{service.title}</h3>
      </div>

      {/* Expanding Blue Divider on Hover */}
      <div className="w-12 sm:w-16 h-1 bg-blue-400 mt-2 transition-all duration-500 group-hover:w-full group-hover:bg-blue-600"></div>

      {/* Service Description */}
      <p className="text-gray-600 mt-2 text-sm sm:text-base">{service.description}</p>

      {/* Service Features */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {service.features.map((feature, i) => (
          <span key={i} className="block bg-blue-100 text-blue-600 text-xs sm:text-sm px-3 py-1 rounded-full">
            {feature}
          </span>
        ))}
      </div>
    </motion.div>
  ))}
</div>

  
  <div className="mt-10 text-center">
    <Link to="/services" className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-800">
      View All Services →
    </Link>
  </div>
</section>


<section className="container mx-auto mt-24 mb-24 text-center px-4 sm:px-6 lg:px-8">
  {/* Heading with Underline */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
    Our Achievements <br /> in <span className="text-blue-600">Numbers</span>
  </h2>
  <div className="w-24 h-1 bg-blue-500 mx-auto mt-2"></div> {/* Underline */}
  <p className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
    Trusted by thousands of patients for their kidney care needs
  </p>

  {/* Achievement Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
    {[
      { label: " Patient Satisfaction Rating", num: "99%", icon: <SiBitrise  /> },
      { label: " Services offered till date", num: "4000+", icon: <FaUserCheck /> },
      { label: "Happy clients", num: "500+", icon: <FaSmile /> },
      { label: "Support Available", num: "24*7", icon: <FaStar /> },
    ].map((item, index) => (
      <div
        key={index}
        className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-blue-100 dark:hover:bg-gray-700 transition relative group text-center"
      >
        {/* Animated Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-white bg-blue-500 rounded-full text-2xl sm:text-3xl transition-transform group-hover:scale-110">
          {item.icon}
        </div>

        {/* Number */}
        <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mt-4">{item.num}</h3>

        {/* Label */}
        <p className="text-gray-600 dark:text-gray-300 text-md sm:text-lg mt-1">
          {item.label}
        </p>

        {/* Animated Underline */}
        <div className="w-12 sm:w-16 h-1 bg-blue-300 mt-2 mx-auto transition-all group-hover:w-full group-hover:bg-blue-600"></div>
      </div>
    ))}
  </div>
</section>



      {/* Transformations Section */}
      {/* <section className="container mx-auto text-center mt-12">
        <h2 className="text-3xl font-semibold">See Our Transformations</h2>
        <div className="relative mt-8">
          <div className="overflow-hidden w-full relative">
            <img src={logo1} alt="Before" className="absolute top-0 left-0 w-full h-full object-cover" />
            <div
              className="absolute top-0 left-0 h-full"
              style={{ width: `${beforeAfter}%`, overflow: "hidden" }}
            >
              <img src={back} alt="After" className="object-cover w-full h-full" />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={beforeAfter}
            onChange={(e) => setBeforeAfter(e.target.value)}
            className="mt-4 w-full cursor-pointer"
          />
        </div>
      </section> */}

  

    {/* // patient feedbacks */}
    <section className="mt-12">
        
        <Gallery />
      </section>

       {/* Testimonials Section */}
      <section className="container mx-auto text-center mt-1 px-8">
      <h2 className="text-3xl font-semibold text-blue-500">What Our Patients Say</h2>
      <Slider className="mt-8" dots autoplay>
        {testimonials.map((review, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
            <p className="mt-4 text-gray-700">{review.review}</p>
            <h4 className="mt-2 font-semibold text-gray-900">{review.name}</h4>
          </div>
        ))}
      </Slider>
    </section>

      
{/* // director */}
{/* <section className="container mx-auto text-center mt-12 px-4">
      <h2 className="text-blue-500 text-3xl font-bold mb-6">Meet Our Corporate Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8">
        {mainteam.map((member, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition w-full"
            whileHover={{ scale: 1.02 }} // Slight zoom-in effect on hover
          >
            <motion.img
              src={member.img}
              alt={member.name}
              className="w-48 h-48 mx-auto rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="mt-4 text-2xl font-bold">{member.name}</h3>
            <p className="text-blue-500 font-medium text-lg">{member.post}</p>
          </motion.div>
        ))}
      </div>
    </section>
     */}
      {/* Contact & Appointment Section */}
      <section className="container mx-auto mt-12 p-8 grid md:grid-cols-2 gap-8">
      {/* Left Section: Why Choose Us */}
      <div className="bg-blue-500 text-white rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center">Why Choose Diassence ?</h2>

        <div className="mt-6 space-y-4">
          {[
            {
              icon: <FaUserMd />,
              title: "Expert Medical Consultation",
              description: "Get guidance from our experienced dental professionals",
            },
            {
              icon: <FaTags />,
              title: "Treatment Discounts",
              description: "Up to 30% off on dialysis procedures",
            },
            {
              icon: <FaVideo />,
              title: "Virtual Consultations",
              description: "Available for follow-ups and minor concerns",
            },
            {
              icon: <FaHeartbeat />,
              title: "Complete Dialysis Care",
              description: "Comprehensive treatment plans tailored for you",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center p-4 bg-blue-400 rounded-lg shadow-md">
              <div className="text-3xl text-white bg-blue-600 p-3 rounded-lg">
                {item.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Appointment Form */}
      <div className="bg-blue-500 text-white rounded-2xl p-8">
      <h3 className="text-3xl font-bold text-center">Any Enquiry?</h3>
      {success && <p className="text-green-200 text-center mt-4">Submitted Successfully! ✅</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="bg-white text-black mt-4 p-3 w-full border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-white text-black mt-4 p-3 w-full border rounded-md"
        />
        <textarea
          name="feedback"
          placeholder="Your Enquiry"
          className="bg-white text-black mt-4 p-3 w-full border rounded-md h-24"
          required
        ></textarea>

        <button
          type="submit"
          className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-300 text-white text-xl font-bold p-3 rounded-lg"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
    </section>
    </div>
  );
}
