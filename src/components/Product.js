import React from "react";

function Product({ product, basket, setBasket, total, money }) {
  const basketItem = basket.find((item) => item.id === product.id);
  const checkMoney = total + product.price > money;
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket((basket) => [
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket((basket) => [
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);

    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket((basket) => [
        ...basket.filter((item) => item.id !== product.id),
      ]);
    } else {
      setBasket((basket) => [
        ...basket.filter((item) => item.id !== product.id),
        currentBasket,
      ]);
    }
  };

  return (
    <>
      <div className="productss">
        <img src={product.image}></img>
        <h5>{product.title}</h5>
        <div className="price">$ {product.price}</div>
        <div className="action">
          <button
            className="sell-btn"
            disabled={!basketItem}
            onClick={removeBasket}
          >
            Sat
          </button>
          <span className="amount">{basketItem ? basketItem.amount : 0}</span>
          <button className="buy-btn" disabled={checkMoney} onClick={addBasket}>
            Satın Al
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
