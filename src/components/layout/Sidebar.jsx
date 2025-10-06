// Componente: Sidebar src/components/layout/Sidebar.jsx
// Descripción: Barra lateral con dos bloques: enlaces principales y footer (vista desktop)
// ==================================================

import { useState } from "react";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toogleSidebar = () => {
    setIsExpanded((prev) => !prev);
  }

  return (
    <aside className={`relative flex flex-col justify-between items-left transition-all duration-800 ease-in-out bg-white p-[32px] ${
    isExpanded ? "w-[240px]" : "w-[90px]"
  }`}>
      
      {/* Bloque superior */}
      <div className="flex flex-col gap-[6px] h-auto">
        <div className="flex flex-col gap-[6px]">

          <div className="flex items-center text-[12px] gap-[12px] hover:text-[#000]">
            <a href="#"  className="w-[34px] h-[34px] flex items-center justify-center p-2 text-[#b4b4b4] hover:bg-[#eeeeee] hover:rounded-[8px] hover:text-[#000] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[24px] h-[24px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </a>
            <span className={`cursor-pointer ${isExpanded ? "inline-block" : "hidden"}`}>Inicio</span>
          </div>

          <div className="flex items-center text-[12px] gap-[12px] text-[#b4b4b4] hover:text-[#000]">
            <a href="#"  className="w-[34px] h-[34px] flex items-center justify-center p-2 text-[#b4b4b4] hover:bg-[#eeeeee] hover:rounded-[8px] hover:text-[#000] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[24px] h-[24px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>
            </a>
            <span className={`cursor-pointer ${isExpanded ? "inline-block" : "hidden"}`}>Nuevo cliente</span>
          </div>

          <div className="flex items-center text-[12px] gap-[12px] text-[#b4b4b4] hover:text-[#000]">
            <a href="#"  className="w-[34px] h-[34px] flex items-center justify-center p-2 text-[#b4b4b4] hover:bg-[#eeeeee] hover:rounded-[8px] hover:text-[#000] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[24px] h-[24px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
            </a>
            <span className={`cursor-pointer ${isExpanded ? "inline-block" : "hidden"}`}>Clientes</span>
          </div>

          <div className="flex items-center text-[12px] gap-[12px] text-[#b4b4b4] hover:text-[#000]">
            <a href="#"  className="w-[34px] h-[34px] flex items-center justify-center p-2 text-[#b4b4b4] hover:bg-[#eeeeee] hover:rounded-[8px] hover:text-[#000] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[24px] h-[24px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </a>
            <span className={`cursor-pointer ${isExpanded ? "inline-block" : "hidden"}`}>Favoritos</span>

          </div>

          <div className="flex items-center text-[12px] gap-[12px] text-[#b4b4b4] hover:text-[#000]">
            <a href="#"  className="w-[34px] h-[34px] flex items-center justify-center p-2 text-[#b4b4b4] hover:bg-[#eeeeee] hover:rounded-[8px] hover:text-[#000] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[24px] h-[24px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
            </a>
            <span className={`cursor-pointer ${isExpanded ? "inline-block" : "hidden"}`}>Ventas</span>
          </div>
          
          {/* Icono “Propiedades” seleccionado */}
          <div className="flex items-center text-[12px] gap-[12px]">
            <a href="#" className="w-[34px] h-[34px] flex items-center justify-center p-2 bg-[#eeeeee] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-[24px] h-[24px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
            </a>
            <span className={`${isExpanded ? "inline-block" : "hidden"}`}>Propiedades</span>
          </div>
          
          <div className="flex items-center text-[12px] gap-[12px] text-[#b4b4b4] hover:text-[#000]">
            <a href="#"  className="w-[34px] h-[34px] flex items-center justify-center p-2 text-[#b4b4b4] hover:bg-[#eeeeee] hover:rounded-[8px] hover:text-[#000] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[24px] h-[24px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
            </a>
            <span className={`cursor-pointer ${isExpanded ? "inline-block" : "hidden"}`}>Calendario</span>
          </div>
          
          <div className="flex items-center text-[12px] gap-[12px] text-[#b4b4b4] hover:text-[#000]">
            <a href="#"  className="w-[34px] h-[34px] flex items-center justify-center p-2 text-[#b4b4b4] hover:bg-[#eeeeee] hover:rounded-[8px] hover:text-[#000] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="fill">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
            </a>
            <span className={`cursor-pointer ${isExpanded ? "inline-block" : "hidden"}`}>Contratos</span>
          </div>
          
          <div className="flex items-center text-[12px] gap-[12px] text-[#b4b4b4] hover:text-[#000]">
            <a href="#"  className="w-[34px] h-[34px] flex items-center justify-center p-2 text-[#b4b4b4] hover:bg-[#eeeeee] hover:rounded-[8px] hover:text-[#000] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[24px] h-[24px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
            </a>
            <span className={`${isExpanded ? "inline-block" : "hidden"}`}>Mapa</span>
          </div>
        </div>

        {/* Flecha */}
        <button 
          onClick={toogleSidebar} 
          className="absolute right-[-12px] top-[60px] transform transition-transform duration-300 ease-in-out flex justify-center items-center border-none bg-[#d8d8d8] rounded-[100%] h-[32px] w-[32px]">
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className={`h-[12px] ${isExpanded ? "rotate-180" : "rotate-0"}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>

        
      </div>

      {/* Bloque inferior */}
      <div className="flex flex-col gap-[6px] h-[96px]">
        <hr className="border-gray-200 w-full" />
        
        <div className="flex items-center text-[12px] gap-[12px] text-[#b4b4b4] hover:text-[#000]">
            <a href="#"  className="w-[34px] h-[34px] flex items-center justify-center p-2 text-[#b4b4b4] hover:bg-[#eeeeee] hover:rounded-[8px] hover:text-[#000] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[24px] h-[24px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </a>
          <span className={`${isExpanded ? "inline-block" : "hidden"}`}>Ajustes</span>
        </div>
        
        <div className="flex items-center text-[12px] gap-[12px] text-[#b4b4b4] hover:text-[#000]">
            <a href="#"  className="w-[34px] h-[34px] flex items-center justify-center p-2 text-[#b4b4b4] hover:bg-[#eeeeee] hover:rounded-[8px] hover:text-[#000] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[24px] h-[24px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
            </a>
          <span className={`${isExpanded ? "inline-block" : "hidden"}`}>Cerrar sesión</span>
        </div>
        
      </div>

      

    </aside>
  );
}

export default Sidebar;