import React, { useState } from "react";

const feedbacks = [
  {
    name: "Sarah Johnson",
    image: "https://i.ibb.co/album-profile.jpg",
    product: "https://i.ibb.co/4wmmf3yN/angela-bailey-tu-Jtzgh-Mu-Ew-unsplash.jpg",
    text: "Absolutely love the craftsmanship! The attention to detail is unmatched. Will definitely order again. ❤️",
    location: "Dhaka",
    rating: 5,
  },
  {
    name: "John Doe",
    image: "https://i.ibb.co/album-profile.jpg",
    product: "https://i.ibb.co/4wmmf3yN/angela-bailey-tu-Jtzgh-Mu-Ew-unsplash.jpg",
    text: "Amazing quality and fast delivery. My new favorite store for handmade items. Highly recommended! 🌟",
    location: "Chittagong",
    rating: 4,
  },
  {
    name: "Emily Clark",
    image: "https://i.ibb.co/album-profile.jpg",
    product: "https://i.ibb.co/4wmmf3yN/angela-bailey-tu-Jtzgh-Mu-Ew-unsplash.jpg",
    text: "Beautifully crafted and unique pieces. You can feel the love in every item. 💫",
    location: "Jessore",
    rating: 5,
  },
  {
    name: "Mark Lee",
    image: "https://i.ibb.co/album-profile.jpg",
    product: "https://i.ibb.co/4wmmf3yN/angela-bailey-tu-Jtzgh-Mu-Ew-unsplash.jpg",
    text: "Impressed with the quality and attention to detail. Will be back for more! 😊",
    location: "USA",
    rating: 5,
  },
];

function CustomerFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentFeedback = feedbacks[currentIndex];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-pink-50 via-white to-pink-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>

      <div className="relative flex justify-center items-center">
        {/* Card */}
        <div className="flex w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
          {/* Left Product Image */}
          <img 
            src={currentFeedback.product} 
            alt="product" 
            className="w-1/3 object-cover rounded-l-3xl"
          />
          
          {/* Right Feedback Details */}
          <div className="flex flex-col justify-center p-6 w-2/3">
            <p className="text-gray-700 italic mb-4">"{currentFeedback.text}"</p>
            
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-xl ${i < currentFeedback.rating ? "text-yellow-400" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>
            
            {/* Customer Info */}
            <div className="flex items-center">
              <img 
                src={currentFeedback.image} 
                alt={currentFeedback.name} 
                className="w-14 h-14 rounded-full border-4 border-pink-200 shadow-lg mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{currentFeedback.name}</h3>
                <h4 className="text-sm text-gray-500">{currentFeedback.location}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-24 p-4 text-purple-500 transform -translate-x-1/2 hover:scale-110 transition-all text-4xl"
        >
          ❮
        </button>

        <button
          onClick={handleNext}
          className="absolute right-24 p-4 text-purple-500 transform translate-x-1/2 hover:scale-110 transition-all text-4xl"
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default CustomerFeedback;
