// Componente: TableContainer
//Descripción: Contenedor del buscador
// ============================================
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Table from "./Table";

function TableContainer() {
  return (
    <div className="flex flex-col w-full gap-[16px]">
      <div className="relative flex justify-center w-full">
        {/* Input Field */}
        <div className=" flex items-center outline-none border border-gray-300 rounded-[8px] p-2 w-[584px] h-[32px] px-[12px]">
          {/* Icono + Texto simulando placeholder */}
          <div className="flex items-center gap-2 text-gray-400 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span>Buscar</span>
          </div>

          {/* Input real transparente para capturar valor */}
          <input
            type="text"
            className="absolute inset-0 w-full h-full opacity-0"
          />
        </div>
      </div>

      {/* Tabla */}
      <Table />

    </div>
  );
}

export default TableContainer;