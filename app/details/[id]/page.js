export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;

  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const item = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 flexcol items-center justify-center">
      <div className="flex items-center justify-center pt-25">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gray-100 flex items-center justify-center p-6">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[500px] object-contain hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">
              {item.title}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="text-3xl text-green-500 font-bold text-gray-900 mb-6">
              ${item.price}
            </div>

            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 active:scale-95 transition">
                Add to Cart
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
