import { useEffect } from "react";
import "./App.css";
import CatchCoins from "./Components/CatchCoins";

const telegram = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    telegram.ready();
  });

  // const onCheckout = () => {
  //   telegram.MainButton.text = "Play :)";
  //   telegram.MainButton.show();
  // };
  return (
    <div className="flex justify-center items-center h-screen">
      <CatchCoins />
      {/* <h2 onClick={onCheckout}>checkout</h2> */}
    </div>
  );
}

export default App;
