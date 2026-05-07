export default function LuxoraFashionStore() {
  const products = [
    {
      id: 1,
      name: 'Midnight Velvet Jacket',
      price: '₹4,999',
      image:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Urban Oversized Hoodie',
      price: '₹2,799',
      image:
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Luxury Streetwear Set',
      price: '₹6,499',
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Minimal White Collection',
      price: '₹3,499',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-[6px]">LUXORA</h1>

          <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <li className="hover:text-gray-300 cursor-pointer transition">Home</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Collection</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Men</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Women</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Contact</li>
          </ul>

          <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
            Shop Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[10px] text-sm mb-4 text-gray-300">
            Premium Fashion Brand
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
            Wear
            <span className="block text-gray-300">Your Style</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8">
            Luxury fashion crafted for modern street culture. Explore premium collections designed for bold personalities.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300">
              Explore Collection
            </button>

            <button className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition duration-300">
              View Lookbook
            </button>
          </div>
        </div>
      </section>

      {/* Brand Banner */}
      <section className="py-12 border-y border-white/10 bg-zinc-950">
        <div className="flex flex-wrap justify-center gap-10 text-gray-400 uppercase tracking-[6px] text-sm font-semibold">
          <span>Luxury</span>
          <span>Streetwear</span>
          <span>Premium</span>
          <span>Exclusive</span>
          <span>Modern</span>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-center mb-14 flex-wrap gap-4">
          <div>
            <p className="uppercase text-gray-400 tracking-[5px] mb-2 text-sm">
              Trending Collection
            </p>
            <h2 className="text-5xl font-black">Featured Products</h2>
          </div>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden group hover:-translate-y-2 transition duration-500 shadow-2xl"
            >
              <div className="overflow-hidden h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">Premium quality fashion collection</p>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{product.price}</span>

                  <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:scale-105 transition">
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fancy Showcase */}
      <section className="grid lg:grid-cols-2 min-h-[700px]">
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop')",
          }}
        ></div>

        <div className="flex items-center px-10 lg:px-20 bg-zinc-950">
          <div>
            <p className="uppercase tracking-[6px] text-gray-400 mb-4 text-sm">
              New Arrival
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Elevate Your Fashion Identity
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Discover exclusive apparel inspired by luxury fashion and urban aesthetics. Crafted with precision and designed for confidence.
            </p>

            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Shop Collection
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 text-center bg-black border-t border-white/10">
        <p className="uppercase tracking-[6px] text-gray-400 mb-4 text-sm">
          Stay Updated
        </p>

        <h2 className="text-5xl font-black mb-6">Join The Fashion Movement</h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Subscribe to receive exclusive drops, limited collections, and fashion updates.
        </p>

        <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-zinc-900 border border-white/10 px-6 py-4 rounded-full outline-none"
          />

          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-black tracking-[6px] mb-2">LUXORA</h2>
            <p className="text-gray-500">Premium Fashion Ecommerce Brand</p>
          </div>

          <div className="flex gap-6 text-gray-400 uppercase tracking-widest text-sm">
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span className="hover:text-white cursor-pointer">Pinterest</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
