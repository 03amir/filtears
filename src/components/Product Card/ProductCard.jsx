import "./productCard.css";
import { MdStarRate } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

function ProductCard({ item }) {
  const [color, setColor] = useState(false);

  return (
    <>
      <div
        className="card"
        onClick={() => {
          setColor(!color);
        }}
      >
        <div className="imageDiv">
          {!color ? (
            <div className="whiteLove">
              <AiOutlineHeart size={25} />
            </div>
          ) : (
            <div className="redLove">
              <AiFillHeart size={25} fill={"red"} />
            </div>
          )}

          <img src={item.image} alt="" />
        </div>
        <div className="detailsDiv">
          <h3>{item.name}</h3>
          <h3 className="price">
            <span className="prevPrice">Rs. {item.prevPrice}</span>{" "}
            <span className="nowPrice">Rs. {item.nowPrice}</span>
          </h3>

          <div className="reviews">
            {(() => {
              let td = [];
              let n = item.rating;
              n > 5 ? (n = 5) : (n = n);
              for (let i = 0; i < n; i++) {
                td.push(
                  <div style={{ color: "#ebcc34" }}>
                    <MdStarRate size={25} />
                  </div>
                );
              }
              return <div className="rating">{td}</div>;
            })()}

            <p className="reviewText">({item.reviews})</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
