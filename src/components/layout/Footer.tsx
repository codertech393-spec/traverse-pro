import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] px-4 pt-16 text-slate-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600" />
              <span className="text-lg font-semibold text-white">
                Traverse Pro
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              The most comprehensive package tracking solution for businesses
              worldwide.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Support</h4>
            <ul className="space-y-3 text-sm">
           <li>
  <a
    href="mailto:Traversehaulage@gmail.com?subject=Traverse%20Pro%20Support&body=Hello%20Traverse%20Pro%20Team,"
    className="hover:text-white"
  >
    Contact Support
  </a>
</li>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 pb-6 text-center text-xs text-slate-500">
          © 2025–2026 Traverse Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
