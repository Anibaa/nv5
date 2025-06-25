'use client'; // ⚠️ Obligatoire pour les hooks dans Next.js App Router

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-gray-100 rounded-lg text-center">
      <p className="text-xl mb-2">Compteur : {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        +1
      </button>

    </div>
  );
}
