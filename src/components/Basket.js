import React from "react";
import BasketItem from "./BasketItem";
import { formatMoney } from "../helper";

function Basket({ basket, products, total, resetBasket }) {
  return (
    <>
      <div className="basket-items container">
        <h3>Alışveriş Detayları</h3>

        {basket.map((item) => (
          <BasketItem
            item={item}
            key={item.id}
            product={products.find((p) => p.id === item.id)}
          />
        ))}
        <div className="total">Toplam : $ {formatMoney(total)}</div>
        <button className="reset-btn" onClick={resetBasket}>
          Sepeti Sıfırla
        </button>
      </div>
    </>
  );
}

export default Basket;
