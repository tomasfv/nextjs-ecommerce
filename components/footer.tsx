import Link from "next/link";
// import { 
//   Facebook, 
//   Instagram, 
//   Twitter, 
//   Youtube 
// } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-black tracking-tighter hover:text-amber-500 transition-colors">
              HARDLINE BIKES
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Elevation through performance. We provide the highest quality bikes for the most demanding riders. Join the Hardline community.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300">
                  {/* <Facebook className="w-4 h-4" /> */}
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300">
                  {/* <Instagram className="w-4 h-4" /> */}
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300">
                  {/* <Twitter className="w-4 h-4" /> */}
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-amber-500">Shop</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">All Bikes</Link></li>
              <li><Link href="/products?category=mountain" className="hover:text-white transition-colors">Mountain</Link></li>
              <li><Link href="/products?category=road" className="hover:text-white transition-colors">Road</Link></li>
              <li><Link href="/products?category=gravel" className="hover:text-white transition-colors">Gravel</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-amber-500">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-amber-500">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800 border-none text-white text-sm px-4 py-2 w-full focus:ring-1 focus:ring-amber-500 outline-none rounded-l"
              />
              <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 text-sm font-bold rounded-r transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} HARDLINE BIKES. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/about" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
