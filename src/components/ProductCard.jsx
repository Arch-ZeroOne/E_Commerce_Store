import React from "react";
function ProductCard({ name, price, img }) {
  return (
    <div
      className="rounded-3xl flex items-center flex-col justify-center font-[Ubuntu] font-bold w-[400px] h-[450px]"
      style={{
        boxShadow: "-2px 4px 8px 0px rgba(0,0,0,0.75)",
        webkitBoxShadow: "-2px 4px 8px 0px rgba(0,0,0,0.75)",
        mozBoxShadow: "-2px 4px 8px 0px rgba(0,0,0,0.75)",
      }}
    >
      <div className="self-start ml-10 mt-6 flex gap-2 flex-col">
        <h1 className="text-3xl font-medium">{name}</h1>
        <p className="text-2xl font-normal">{price}</p>
      </div>
      <img src={img} className="h-75" />
      <Colors />
    </div>
  );
}
function Colors() {
  return (
    <div className="h-40 flex items-center gap-4">
      <div className="bg-black h-7 w-7 rounded-4xl"></div>
      <div className="bg-[#C2BDB6] h-7 w-7 rounded-4xl"></div>
      <div className="bg-[#BFC5F7] h-7 w-7 rounded-4xl"></div>
      <div className="bg-[#FF9528] h-7 w-7 rounded-4xl"></div>
    </div>
  );
}

export default ProductCard;
