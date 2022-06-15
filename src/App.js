import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import products from "./components/products.json";
import Product from "./components/Product";
import Basket from "./components/Basket";

function App() {
  const [money, setMoney] = useState(5000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
        {products.map((product) => (
          <Product
            total={total}
            money={money}
            basket={basket}
            setBasket={setBasket}
            product={product}
            key={product.id}
          />
        ))}
      </div>
      {total > 0 && (
        <Basket
          basket={basket}
          products={products}
          total={total}
          resetBasket={resetBasket}
        />
      )}
    </>
  );
}

export default App;
