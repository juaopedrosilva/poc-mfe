import React from "react";
import ReactDOM from "react-dom";


import { Button } from '@zeus-components/ui'
import { normalizeMoney } from '@zeus-utils/normalizers'
import "./index.scss";

const App = () => {
  return (
    <div className=" flex gap-4 flex-col mt-10 text-3xl mx-auto max-w-6xl">
      <Button>oiii</Button>
      {normalizeMoney(99)}
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
