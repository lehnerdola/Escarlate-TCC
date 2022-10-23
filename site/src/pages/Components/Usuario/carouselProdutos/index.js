import { todosProdutos, buscarImagem } from "../../../../api/adminAPI.js";
import { useState, useEffect } from "react";

export default function CarroselProdutos({ item: { imagem } }) {
  const [produtos, setProdutos] = useState([]);

  async function carregarTodosProdutos() {
    const resp = await todosProdutos();
    setProdutos(resp);
  }


  useEffect(() => {
    carregarTodosProdutos();
  }, []);

  return (
    <main>
      <img src={buscarImagem(imagem)} width={150} />
    </main>
  );
};