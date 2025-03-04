import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "General Nephrology",
    description: "Comprehensive kidney care including diagnosis, treatment, and preventive strategies.",
    features: ["Kidney Function Tests", "Hypertension Management", "Dialysis Planning", "Lifestyle Counseling"],
    icon: "🩺",
  },
  {
    title: "Kidney Transplant",
    description: "Advanced kidney transplant services with expert surgeons and post-transplant care.",
    features: ["Pre-Transplant Evaluation", "Donor Matching", "Post-Operative Care", "Immunosuppressive Therapy"],
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

export default function KidneyCenterServices() {
  return (
    <section className="w-full py-10 px-5 md:px-20 bg-gray-100">
      <div className="text-center mb-10">
        <motion.h2 
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Comprehensive <span className="text-blue-600">Kidney Care</span>
        </motion.h2>
        <p className="text-gray-600 mt-2">Expert nephrology services tailored to your needs</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg cursor-pointer transition-all duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "#E0F2FE" }}
            onClick={() => window.location.href = "/services"}
          >
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{service.icon}</span>
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            </div>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {service.features.map((feature, i) => (
                <span key={i} className="block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
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
  );
}
