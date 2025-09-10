import React, { useState } from "react";
import './App.css'
import Menu from './components/menu.jsx'
import Card from './components/card.jsx'
import Footer from './components/footer.jsx'
import FormCadastro from './components/FormCadastro.jsx'

const produtos = [
  {
    titulo: "Camiseta Esportiva",
    imagem: "https://via.placeholder.com/300x160?text=Camiseta",
    descricao: "Camiseta confortável para esportes.",
    preco: "59,90"
  },
  {
    titulo: "Raquete de Tênis",
    imagem: "https://via.placeholder.com/300x160?text=Raquete",
    descricao: "Raquete leve e resistente.",
    preco: "199,90"
  },
  {
    titulo: "Bola de Futebol",
    imagem: "https://via.placeholder.com/300x160?text=Bola",
    descricao: "Bola oficial para jogos.",
    preco: "89,90"
  },
  {
    titulo: "Shorts Esportivos",
    imagem: "https://via.placeholder.com/300x160?text=Shorts",
    descricao: "Shorts para treino e lazer.",
    preco: "49,90"
  },
  {
    titulo: "Tênis de Corrida",
    imagem: "https://via.placeholder.com/300x160?text=Tênis",
    descricao: "Tênis leve para corrida.",
    preco: "299,90"
  },
  {
    titulo: "Boné Esportivo",
    imagem: "https://via.placeholder.com/300x160?text=Boné",
    descricao: "Boné para proteção solar.",
    preco: "39,90"
  },
  {
    titulo: "Meia Esportiva",
    imagem: "https://via.placeholder.com/300x160?text=Meia",
    descricao: "Meia confortável para esportes.",
    preco: "19,90"
  },
  {
    titulo: "Mochila Esportiva",
    imagem: "https://via.placeholder.com/300x160?text=Mochila",
    descricao: "Mochila resistente para equipamentos.",
    preco: "129,90"
  },
  {
    titulo: "Garrafa Térmica",
    imagem: "https://via.placeholder.com/300x160?text=Garrafa",
    descricao: "Garrafa para manter líquidos gelados.",
    preco: "59,90"
  },
  {
    titulo: "Luvas de Academia",
    imagem: "https://via.placeholder.com/300x160?text=Luvas",
    descricao: "Luvas para proteção nas mãos.",
    preco: "34,90"
  },
  {
    titulo: "Agasalho Esportivo",
    imagem: "https://via.placeholder.com/300x160?text=Agasalho",
    descricao: "Agasalho para dias frios.",
    preco: "149,90"
  },
  {
    titulo: "Corda de Pular",
    imagem: "https://via.placeholder.com/300x160?text=Corda",
    descricao: "Corda para exercícios aeróbicos.",
    preco: "24,90"
  },
  {
    titulo: "Bermuda Esportiva",
    imagem: "https://via.placeholder.com/300x160?text=Bermuda",
    descricao: "Bermuda para prática esportiva.",
    preco: "54,90"
  },
  {
    titulo: "Óculos de Natação",
    imagem: "https://via.placeholder.com/300x160?text=Óculos",
    descricao: "Óculos para proteção na água.",
    preco: "49,90"
  },
  {
    titulo: "Protetor Bucal",
    imagem: "https://via.placeholder.com/300x160?text=Protetor",
    descricao: "Protetor para esportes de contato.",
    preco: "14,90"
  },
  {
    titulo: "Faixa de Cabeça",
    imagem: "https://via.placeholder.com/300x160?text=Faixa",
    descricao: "Faixa para absorver suor.",
    preco: "9,90"
  }
];

function App() {
  const [showCadastro, setShowCadastro] = useState(false);

  return (
    <>
      <Menu onCadastroClick={() => setShowCadastro(true)} />
      {showCadastro && (
        <FormCadastro onClose={() => setShowCadastro(false)} />
      )}
      <div className="pt-24 pb-8 max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {produtos.map((produto, idx) => (
            <Card
              key={idx}
              titulo={produto.titulo}
              imagem={produto.imagem}
              descricao={produto.descricao}
              preco={produto.preco}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App