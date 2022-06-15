import React from "react";
import { formatMoney } from "../helper";
function Header({ money, total }) {
  return (
    <>
      <div>
        {total > 0 && money - total !== 0 && (
          <div className="header">
            Harcayacak <span> $ {formatMoney(money - total)}</span> paranız
            kaldı
          </div>
        )}
        {total === 0 && (
          <div className="header">
            Harcayacak <span> $ {formatMoney(money)} </span> paranız var
          </div>
        )}
        {money - total === 0 && (
          <div className="header">Harcayacak paranız kalmadı</div>
        )}
      </div>
      <style jsx="true">
        {`
          .header {
            position: sticky;
            top: 0;
            background: linear-gradient(to bottom, #20b820, #14be2a);
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            letter-spacing: 1px;
            color: #fff;
          }
          .header span {
            color: green;
            margin: 0 10px;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
}

export default Header;
