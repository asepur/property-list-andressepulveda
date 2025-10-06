// Componente: TableContainer
//Descripción: Contenedor del buscador
// ============================================

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Table from "./Table";

function TableContainer() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex flex-col w-full gap-[16px]">
      <div className="relative flex justify-center w-full">
        {/* Input Field */}
        <div className="relative flex items-center outline-none border border-gray-300 rounded-[8px] w-[584px] h-[32px] px-[12px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
          {/* Icono de lupa */}
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 mr-2" />

          {/* Input funcional */}
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar"
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Tabla */}
      <Table />
    </div>
  );
}

export default TableContainer;