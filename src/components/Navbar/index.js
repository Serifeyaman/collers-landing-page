import React, { useState } from "react";
import { Icons } from "components";

const Navbar = () => {
  const [smallMenu, setSmallMenu] = useState(false);
  const MENU_ITEMS = [
    { id: 1, name: "Products", url: "/" },
    { id: 2, name: "Solutions", url: "/" },
    { id: 3, name: "Pricing", url: "/" },
    { id: 4, name: "Resources", url: "/" },
    { id: 5, name: "Log In", url: "/" },
  ];

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between p-4">
          <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <p className="text-amber-900 text-3xl font-bold">Collers</p>
            </div>
          </div>
          <div
            className="absolute inset-y-0 right-0 flex items-center sm:hidden"
            onClick={() => setSmallMenu(!smallMenu)}
          >
            <Icons.Menu className="w-6 h-6" />
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex gap-x-4 sm:gap-x-2">
                {MENU_ITEMS.map((item, _index) => (
                  <a
                    key={_index}
                    href={item.url}
                    className="text-amber-900 px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </a>
                ))}

                <button className="bg-white px-3 py-2 hover:bg-amber-900 text-amber-900 font-semibold hover:text-white border border-ambg-amber-900 hover:border-transparent rounded">
                  Sign Up Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {smallMenu && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {MENU_ITEMS.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="text-amber-900 px-3 py-2 text-base font-medium block text-center"
              >
                {item.name}
              </a>
            ))}

            <button className="bg-white p-3 hover:bg-amber-900 text-amber-900 font-semibold hover:text-white border border-ambg-amber-900 hover:border-transparent rounded-lg block m-auto">
              Sign Up Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
