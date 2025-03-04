import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X, User, Phone } from "lucide-react";

export default function OfferModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Automatically open the modal when the page loads
    setIsOpen(true);
  }, []);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-500">Exclusive Offer!</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Fill out this form now and enjoy a <b>20% discount</b> on your first visit. Limited time offer!
        </p>

        {/* Form */}
        <form className="mt-4 space-y-3">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <User className="text-gray-400" size={18} />
              <input type="text" placeholder="Your Name" className="w-full outline-none ml-2 bg-transparent" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <Phone className="text-gray-400" size={18} />
              <input type="tel" placeholder="Your Phone" className="w-full outline-none ml-2 bg-transparent" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Nearest diasence Location</label>
            <select className="w-full border rounded-md px-3 py-2 bg-transparent">
              <option>Select location</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </Dialog>
  );
}
