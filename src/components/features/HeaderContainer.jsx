// Componente: HeaderContainer
// Descripción: Header del contenedor con título y botón CTA
// ==================================================

import AddPropertyButton from "../ui/AddPropertyButton";

export function HeaderContainer() {
  return (
    <header className="flex justify-between items-center w-full h-[32px]">
      
      {/* Elemento 1: Título a la izquierda */}
      <h1
        className="text-[22px] leading-[30px] font-bold text-[#b4b4b4] font-inter"
      >
        Propiedades
      </h1>

      {/* Elemento 2: Botón CTA a la derecha */}
      <AddPropertyButton  />
  
  
      


    </header>
  );
}
