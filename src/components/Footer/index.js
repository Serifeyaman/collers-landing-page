import React from "react";
import { Icons } from "components";

const Footer = () => {
  return (
    <div className="bg-[#0F172A] text-white text-center lg:text-start">
      <div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 mx-auto max-w-7xl border-b-2 border-white py-20">
          <ul className="space-y-4 text-lg font-normal lg:mb-0 mb-12">
            <li className="font-medium">Product</li>
            <li>Pricing</li>
            <li>Overview</li>
            <li>Browse</li>
            <li>Accessibility</li>
            <li>Five</li>
          </ul>

          <ul className="space-y-4 text-lg font-normal lg:mb-0 mb-12">
            <li className="font-medium">Solutions</li>
            <li>Brainstorming</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
            <li>Design</li>
          </ul>

          <ul className="space-y-4 text-lg font-normal lg:mb-0 mb-12">
            <li className="font-medium">Support</li>
            <li>Contact Us</li>
            <li>Developers</li>
            <li>Documentation</li>
            <li>Integrations</li>
            <li>Reports</li>
          </ul>

          <div className="space-y-10 text-lg font-normal">
            <ul className="space-y-2">
              <li className="font-medium">Get the App</li>
              <li className="flex lg:justify-start justify-center">
                <Icons.AppStore />
              </li>
              <li className="flex lg:justify-start justify-center">
                <Icons.PlayStore />
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="font-medium">Follow Us</li>
              <li className="space-x-2 flex justify-center lg:justify-start">
                <Icons.Youtube className="w-6 h-6" />
                <Icons.Facebook className="w-6 h-6" />
                <Icons.Twitter className="w-6 h-6" />
                <Icons.Instagram className="w-6 h-6" />
                <Icons.Linkedln className="w-6 h-6" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 mx-auto max-w-7xl py-6 text-center lg:text-start lg:space-y-0 space-y-10">
        <div className="lg:col-span-3 col-span-1">
          <span className="text-lg font-normal">
            Collers @ 2023. All rights reserved.
          </span>
        </div>
        <div className="grid grid-cols-4 text-end text-lg font-normal">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Contact</span>
          <span className="flex ml-5 items-center">
            <Icons.World className="w-5 h-5 mr-1" /> En
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
