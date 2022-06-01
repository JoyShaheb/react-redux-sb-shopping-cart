import React from "react";

const Badge = ({ variant, label, size, icon, top, right }) => {
  return (
    <div
      style={{ position: "absolute", top, right }}
      className={`badge ${size} ${variant} d-flex gap-1 align-items-center`}
    >
      {icon ? <i style={{ fontSize: "13px" }} class={`bi ${icon}`}></i> : ""}

      {label}
    </div>
  );
};

export default Badge;
