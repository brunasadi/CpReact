import React from "react";

const Menu = ({ onCadastroClick }) => {
  return (
    <header className="bg-blue-600 p-4 fixed top-0 left-0 w-full z-50">
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-semibold">
          Produtos Esportivos
        </a>
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
        <button
          className="bg-white text-blue-600 px-4 py-2 rounded font-semibold ml-4 hover:bg-blue-100"
          onClick={onCadastroClick}
        >
          Cadastro
        </button>
      </nav>
    </header>
  );
};

export default Menu;