import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SectionTitle from './SectionTitle';

import prod1 from '../assets/prod-1.png';
import prod2 from '../assets/prod-2.png';
import prod3 from '../assets/prod-3.jpg';
import prod4 from '../assets/prod-4.png';

const DATA = {
  Dining: [
    {
      id: 1,
      name: 'Syltherine',
      desc: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      img: prod1,
      sale: '-30%',
    },
    {
      id: 2,
      name: 'Leviosa',
      desc: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      img: prod2,
    },
  ],
  Living: [
    {
      id: 3,
      name: 'Lolito',
      desc: 'Luxury big sofa',
      price: 'Rp 7.000.000',
      img: prod3,
      sale: '-50%',
    },
    {
      id: 4,
      name: 'Respira',
      desc: 'Outdoor bar table & stool',
      price: 'Rp 500.000',
      img: prod4,
      tag: 'New',
    },
  ],
  Bedroom: [],
};

const Products = () => {
  const tabs = Object.keys(DATA);
  const [active, setActive] = useState(tabs[0]);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // prevent triggering other clicks
    toast.success('✅ Product added to cart!', {
      position: 'top-right',
      autoClose: 1000,
      onClose: () => {
        navigate('/product'); // redirect after toast
      },
    });
  };

  return (
    <section id="products" className="py-24 bg-light">
      <SectionTitle heading="Our Products" />

      {/* Tabs */}
      <ul className="flex justify-center gap-8 mb-12">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setActive(tab)}
            className={`cursor-pointer pb-1 transition ${
              active === tab
                ? 'text-primary border-b-2 border-primary'
                : 'hover:text-primary'
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {DATA[active].map((p) => (
          <div
            key={p.id}
            className="group relative overflow-hidden rounded-lg shadow hover:shadow-lg transition bg-white"
          >
            <img src={p.img} alt={p.name} className="w-full h-60 object-cover" />

            {/* Tag or Sale Badge */}
            {(p.tag || p.sale) && (
              <span className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                {p.tag || p.sale}
              </span>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col justify-center gap-4 items-center transition">
              <button
                className="btn-primary"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>

              <div className="text-white text-sm flex gap-6 underline">
                <span>Share</span>
                <span>Compare</span>
                <span>Like</span>
              </div>
            </div>

            {/* Details */}
            <div className="bg-white px-4 py-4">
              <h3 className="font-semibold mb-1">{p.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{p.desc}</p>
              <p className="font-medium">{p.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-14">
        <button className="border border-primary text-primary px-10 py-3 rounded hover:bg-primary hover:text-white transition">
          Show More
        </button>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Products;
