import React from 'react';

function FeaturedProduct() {
  const featuredProducts = [
    {
      name: "Accessories",
      image: "https://i.ibb.co.com/4wmmf3yN/angela-bailey-tu-Jtzgh-Mu-Ew-unsplash.jpg",
      originalPrice: "$50",
      salePrice: "$40",
      discount: "20% OFF",
    },
    {
      name: "Home Decor",
      image: "https://i.ibb.co/nZMf0Kd/lumensoft-technologies-p-Sz3-JFTDZMA-unsplash.jpg",
      originalPrice: "$80",
      salePrice: "$60",
      discount: "25% OFF",
    },
    {
      name: "Panjabi",
      image: "https://i.ibb.co.com/qFrL0qWC/arno-senoner-o-CXVxw-TFwq-E-unsplash.jpg",
      originalPrice: "$100",
      salePrice: "$80",
      discount: "20% OFF",
    },
    {
      name: "Tshirt",
      image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
      originalPrice: "$30",
      salePrice: "$25",
      discount: "17% OFF",
    },
    {
      name: "Dress",
      image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
      originalPrice: "$120",
      salePrice: "$100",
      discount: "17% OFF",
    },
    {
      name: "Shoes",
      image: "https://i.ibb.co.com/39kH0THW/nataliya-melnychuk-5ng-CICAXi-H0-unsplash.jpg",
      originalPrice: "$70",
      salePrice: "$50",
      discount: "29% OFF",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-purple-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">Featured Products</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {featuredProducts.map((product, index) => (
          <div
            key={index}
            className="group relative w-72 bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Discount Badge */}
            {product.discount && (
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md z-10">
                {product.discount}
              </span>
            )}
            
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl group-hover:bg-opacity-40 transition duration-500"></div>
            </div>
            
            <div className="p-6 text-center bg-white rounded-b-xl">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>

              {/* Price Section */}
              <div className="text-gray-600 mb-4">
                {product.salePrice ? (
                  <>
                    <span className="text-red-500 font-semibold text-lg">{product.salePrice}</span>
                    &nbsp;
                    <span className="line-through text-gray-400">{product.originalPrice}</span>
                  </>
                ) : (
                  <span className="text-lg font-semibold">{product.originalPrice}</span>
                )}
              </div>

              <button className="bg-black text-white px-6 py-2 rounded-full shadow-lg transition-transform duration-300 transform group-hover:translate-y-0 group-hover:scale-105 hover:scale-110">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProduct;
