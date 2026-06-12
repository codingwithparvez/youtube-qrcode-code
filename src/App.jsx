import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="w-full h-screen bg-blue-200 flex justify-center items-center">
      <div className="w-120 bg-white p-6 rounded-xl shadow-xl">
        <h1 className="text-black text-2xl w-full font-bold text-center">
          QR Code Generator
        </h1>
        <div>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter value..."
            className="px-4 py-2 w-full border border-gray-200 rounded shadow-md my-4"
          />
        </div>
        <div className="flex justify-center items-center w-full min-h-20 border border-gray-200 my-6 p-6 rounded">
          {inputValue.length !== 0 && <QRCode value={inputValue} size={128} />}
        </div>
      </div>
    </div>
  );
}

export default App;
