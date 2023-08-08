import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home";
import Geometry from "../geometry";

const NotFound = () => {
  return <p>Não encontrado</p>;
};

function RoutesApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geometria" element={<Geometry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RoutesApp;
