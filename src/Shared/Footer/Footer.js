import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';
import logo from '../../assets/logo.png'
function Footer() {
    return (
        <footer className="py-16 px-6 text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-black">
                <div>
                    <img src={logo} alt="logo" className="w-20"/>
                    <p className=" text-gray-500 mb-4">Bringing handcrafted elegance to your world. Each piece tells a unique story of craftsmanship and passion.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300"><FaFacebookF /></a>
                        <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300"><FaInstagram /></a>
                        <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300"><FaTwitter /></a>
                        <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300"><FaPinterestP /></a>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-500">Home</a></li>
                        <li><a href="#" className="text-gray-500">About Us</a></li>
                        <li><a href="#" className="text-gray-500">Products</a></li>
                        <li><a href="#" className="text-gray-500">Contact</a></li>
                        <li><a href="#" className="text-gray-500">FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                    <p className=" text-gray-500 mb-2">Email: handmade@karukolpo.com</p>
                    <p className=" text-gray-500 mb-2">Phone: +880 1234 567 890</p>
                    <p className=" text-gray-500 mb-4">Location: Dhaka, Bangladesh</p>
                
                </div>
            </div>
            <div className="mt-12 text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
                © {new Date().getFullYear()} Karukolpo. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
