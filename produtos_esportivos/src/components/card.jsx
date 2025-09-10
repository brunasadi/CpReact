import React from "react";

const Card = ({ titulo, imagem, descricao, preco }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72">
      <img src={imagem} alt={titulo} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{titulo}</h3>
        <p className="text-gray-600 mb-4">{descricao}</p>
        <span className="text-blue-600 font-bold text-xl">R$ {preco}</span>
      </div>
    </div>
  );
};

export default Card;