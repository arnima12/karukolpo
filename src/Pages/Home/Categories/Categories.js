import React from "react";
import './Categories.css';
import { Link } from "react-router";
const categories = [
  {
    name: "Accessories",
    image: 'https://i.ibb.co.com/4wmmf3yN/angela-bailey-tu-Jtzgh-Mu-Ew-unsplash.jpg" alt="angela-bailey-tu-Jtzgh-Mu-Ew-unsplash',
  },
  {
    name: "Home Decor",
    image: "https://i.ibb.co.com/nZMf0Kd/lumensoft-technologies-p-Sz3-JFTDZMA-unsplash.jpg",
  },
  {
    name: "Panjabi",
    image: "https://i.ibb.co.com/qFrL0qWC/arno-senoner-o-CXVxw-TFwq-E-unsplash.jpg",
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
  },
  {
    name: "Dress",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
  },
];

const Categories = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Shop by Category</h2>
      <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
        {categories.map((cat, idx) => (
          <Link
            to={`/category/${cat.name.toLowerCase()}`}
            key={idx}
            className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] rounded-xl overflow-hidden cursor-pointer relative group"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-32 object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="text-center p-2 bg-white">
              <h3 className="text-sm font-medium text-gray-700">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;