import React from "react";
import Badge from "../Badge/Badge";

const Cards = ({ column, title, price, tag, imgSrc, rating }) => {
  return (
    <div
      style={{ padding: "0px", position: "relative" }}
      className={`card ${column}`}
    >
      <img
        style={{ height: "150px", objectFit: "contain" }}
        src={imgSrc}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="mb-2">
          <div className="fs-5 fw-bold lh-1">{title}</div>
          <div className="text-secondary">{tag}</div>
        </div>

        <h3>$ {price}</h3>
      </div>
      <Badge
        bottom=""
        label={rating}
        left=""
        right="10px"
        size="fs-6"
        top="10px"
        variant="bg-success"
        icon="bi-star-fill"
      />
    </div>
  );
};

export default Cards;
