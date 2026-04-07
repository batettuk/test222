export default function Card({ product }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative w-full h-52">
        <img
          className=" object-fit  w-full h-full object-contain
           mx-auto mt-4"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2">
          {product.title}
        </h3>
      </div>
      <p className="px-6 pb-4 text-black">Rating: {product.rating.rate}⭐️</p>
      <div className="px-6 pb-4 flex items-center justify-between">
        <span className="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-700">
          ${product.price}
        </span>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
