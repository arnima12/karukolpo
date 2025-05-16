import React from 'react'
import { useParams } from 'react-router';

function CategoryPage() {
     const { categoryName } = useParams();
  const formattedCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
    const allProducts = [
 {
    name: "Accessories",
    image: 'https://i.ibb.co.com/4wmmf3yN/angela-bailey-tu-Jtzgh-Mu-Ew-unsplash.jpg" alt="angela-bailey-tu-Jtzgh-Mu-Ew-unsplash',
    price: "1500"
  },
  {
    name: "Home Decor",
    image: "https://i.ibb.co.com/nZMf0Kd/lumensoft-technologies-p-Sz3-JFTDZMA-unsplash.jpg",
    price: "1500"
  },
  {
    name: "Panjabi",
    image: "https://i.ibb.co.com/qFrL0qWC/arno-senoner-o-CXVxw-TFwq-E-unsplash.jpg",
    price: "1500"
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
    price: "1500"
  },
  {
    name: "Dress",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
    price: "1500"
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
    price: "1500"
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
    price: "1500"
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
    price: "1500"
  },
  {
    name: "Tshirt",
    image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
    price: "1500"
  }
];

    const products = allProducts.filter(product => product.name.toLowerCase() === categoryName.toLowerCase()); 
  return (
     <section className="py-10 px-4 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">
        {formattedCategory} Collection
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <div key={index} className="rounded-2xl shadow-lg hover:shadow-xl transition duration-300 bg-white">
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-t-2xl" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-indigo-600 font-medium mb-4">{product.price} BDT</p>
              <button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition rounded-xl py-2">Add to Cart</button>
            </div>
          </div>
        ))}
         {products.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">
            No products available in this category.
          </p>
        )}
      </div>
    </section>
  )
}

export default CategoryPage;