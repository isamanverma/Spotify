import React from "react";

export default function Footer() {
  let footerItems = [
    "Legal",
    "Privacy Policy",
    "Cookies",
    "About Ads",
    "Accessibility",
  ];
  return (
    <div className="p-2 text-gray-400">
      <ul className="flex flex-row flex-wrap gap-2">
        {footerItems.map((item, index) => (
          <li className="text-xs md:text-lg" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
