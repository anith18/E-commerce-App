import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="d-inline-flex align-items-center gap-2 mb-3">
      <p className="text-dark mb-0" style={{ fontFamily: "'Prata', serif", fontWeight: "400", fontSize: "24px" }}>
  {text1} <span style={{ fontFamily: "'Prata', serif", fontWeight: "600", color: "#212529", fontSize: "28px" }}>{text2}</span></p>

      <div className="w-30 d-none d-sm-block" style={{ height: "2px", backgroundColor: "#212529" }}></div>
        

    </div>
  );
};

export default Title;
