import React from "react";
import { SiBuymeacoffee } from "react-icons/si";

export default function BuyMeACoffeeFloating() {
  return (
    <div className="fixed bottom-12 right-12 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
      <SiBuymeacoffee className="text-black text-3xl" />
    </div>
  );
}
