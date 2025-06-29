import React, { useEffect } from "react";
import { Star, StarHalf } from "lucide-react";

// Assets
import sofaMain from "../assets/asgaard-sofa.png";
import thumb1 from "../assets/sofa-thumb-1.png";
import thumb2 from "../assets/sofa-thumb-2.png";
import thumb3 from "../assets/sofa-thumb-3.png";
import thumb4 from "../assets/sofa-thumb-4.png";
import mayaThreeSeater from "../assets/maya-three-seater.png";
import mayaChaiseLounge from "../assets/maya-chaise-lounge.png";
import relatedProduct1 from "../assets/r1.png";  // Example related product
import relatedProduct2 from "../assets/r2.png";    // Example related product
import relatedProduct3 from "../assets/r3.png";     // Example related product
import relatedProduct4 from "../assets/r4.jpg";    // Example related product

const colors = ["#A28CFD", "#000000", "#F1C75B"];
const sizes = ["L", "XL", "XS"];
const thumbnails = [thumb1, thumb2, thumb3, thumb4];

export default function ProductPage() {
  useEffect(() => {
    // Add timeline animation for the page load effect
    const timeline = document.querySelector(".timeline");
    if (timeline) {
      timeline.classList.add("animate-fadeIn");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF6F3] p-4 md:p-8 timeline">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 underline">
        Home {">"} Shop {">"}{" "}
        <span className="text-black font-medium">Asgaard sofa</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex md:flex-col gap-2">
            {thumbnails.map((thumb, i) => (
              <img
                key={i}
                src={thumb}
                alt={`Thumbnail ${i + 1}`}
                className="w-16 h-16 object-cover rounded-md border transition-all duration-300 hover:scale-110"
              />
            ))}
          </div>
          <div className="flex-1">
            <img
              src={sofaMain}
              alt="Asgaard sofa"
              className="w-full h-auto object-cover rounded-xl transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">Asgaard sofa</h1>
          <div className="text-xl text-gray-400 mb-2">Rs. 250,000.00</div>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-yellow-500 mb-4">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current transition-all duration-300 hover:text-yellow-600" />
            ))}
            <StarHalf className="w-5 h-5 fill-current transition-all duration-300 hover:text-yellow-600" />
            <span className="text-gray-500 text-sm ml-2">5 Customer Review</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 font-medium">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Selection */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className="border px-3 py-1 rounded-md bg-[#F9F1E7] hover:bg-[#ecdcc4] transition-all duration-300"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex gap-4">
              {colors.map((color, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border border-gray-300 transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button className="px-3 py-1 text-xl">-</button>
              <div className="px-4 py-1">1</div>
              <button className="px-3 py-1 text-xl">+</button>
            </div>
            <button className="px-6 py-2 text-base rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-300">
              Add To Cart
            </button>
            <button className="px-6 py-2 text-base rounded-lg border border-black text-black hover:bg-gray-100 transition-all duration-300">
              + Compare
            </button>
          </div>
        </div>
      </div>

      {/* Meta Info */}
      <div className="mt-10 text-sm text-gray-600 space-y-2">
        <div><span className="font-semibold text-black">SKU</span> : SS001</div>
        <div><span className="font-semibold text-black">Category</span> : Sofas</div>
        <div>
          <span className="font-semibold text-black">Tags</span> : Sofa, Chair, Home, Shop
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-semibold text-black">Share</span> :
          <a href="#" className="hover:opacity-70"><i className="fab fa-facebook-f" /></a>
          <a href="#" className="hover:opacity-70"><i className="fab fa-linkedin-in" /></a>
          <a href="#" className="hover:opacity-70"><i className="fab fa-twitter" /></a>
        </div>
      </div>

      {/* Description Section Below */}
      <div className="mt-12">
        <div className="text-center border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold text-black">Description</h2>
        </div>

        <div className="text-gray-600 space-y-4 max-w-4xl mx-auto px-2 md:px-0">
          <p className="font-semibold">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker
            takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="font-semibold">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering.
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both
            articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences
            while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <img
            src={mayaThreeSeater}
            alt="Maya Sofa Three Seater"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={mayaChaiseLounge}
            alt="Maya Sofa Chaise Lounge"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center text-black mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Related Product 1 */}
          <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center transition-all duration-300 hover:scale-105">
            <img
              src={relatedProduct1}
              alt="Sytherine"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Sytherine</h3>
            <p className="text-gray-600 text-sm">Stylish cafe chair</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl text-black">Rp 2.500.000</span>
              <span className="text-sm text-red-500 line-through">Rp 3.500.000</span>
            </div>
            <button className="mt-4 px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300">
              View Product
            </button>
          </div>

          {/* Related Product 2 */}
          <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center transition-all duration-300 hover:scale-105">
            <img
              src={relatedProduct2}
              alt="Leviosa"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Leviosa</h3>
            <p className="text-gray-600 text-sm">Stylish cafe chair</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl text-black">Rp 2.500.000</span>
            </div>
            <button className="mt-4 px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300">
              View Product
            </button>
          </div>

          {/* Related Product 3 */}
          <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center transition-all duration-300 hover:scale-105">
            <img
              src={relatedProduct3}
              alt="Lolito"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Lolito</h3>
            <p className="text-gray-600 text-sm">Luxury big sofa</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl text-black">Rp 7.000.000</span>
              <span className="text-sm text-red-500 line-through">Rp 14.000.000</span>
            </div>
            <button className="mt-4 px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300">
              View Product
            </button>
          </div>

          {/* Related Product 4 */}
          <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center transition-all duration-300 hover:scale-105">
            <img
              src={relatedProduct4}
              alt="Respira"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black">Respira</h3>
            <p className="text-gray-600 text-sm">Outdoor bar table and stool</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl text-black">Rp 500.000</span>
            </div>
            <button className="mt-4 px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300">
              View Product
            </button>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="px-6 py-2 text-white bg-gray-800 rounded-lg hover:bg-black transition-all duration-300">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
