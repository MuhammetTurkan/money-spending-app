import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import products from "./components/products.json";
import Product from "./components/Product";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const ttl = basket.reduce((acc, item) => {
      return (
        acc +
        item.amount * products.find((product) => product.id === item.id).price
      );
    }, 0);
    console.log(ttl);
  }, [basket]);

  return (
    <>
      <Header money={money} />
      {products.map((product) => (
        <Product
          basket={basket}
          setBasket={setBasket}
          product={product}
          key={product.id}
        />
      ))}
    </>
  );
}

export default App;
