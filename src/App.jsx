import React, { useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  return (
    <>
      <div className="flex h-screen w-screen select-none bg-black text-white">
        <Left />
        <Right />
      </div>
    </>
  );
}

export default App;
