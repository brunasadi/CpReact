import React from "react";

const Menu = () => {
  return (
    <header className="bg-blue-600 p-4">
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-semibold">
          Produtos Esportivos
        </a>
        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Roupas
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Raquetes
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Bolas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;