import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Produtos Esportivos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;