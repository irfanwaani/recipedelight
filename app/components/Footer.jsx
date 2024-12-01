import React from "react";

function Footer() {
  const date = new Date();
  const year= date.getFullYear()
  return <footer className="py-3 shadow flex justify-center items-center bg-gray-600 text-white font-sans uppercase tracking-wider">© {year} Recipe Delight. All rights reserved</footer>;
}

export default Footer;
