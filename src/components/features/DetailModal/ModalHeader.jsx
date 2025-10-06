// Componente: ModalHeader.jsx
// Descripción: Subcomponentes del componente DetailModal 
// =============================================

function ModalHeader({ reference, onClose }) {
  return (
    <div className="flex justify-center items-center gap-[10px] h-[30px]">
      {/* Atrás */}
      <div onClick={onClose} className="h-[32px] w-[32px] text-[#d8d8d8] rounded-[8px] bg-white flex justify-center items-center cursor-pointer hover:text-[#000] transition hover:bg-[#d8d8d8]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="fill">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-gray-800 flex-1 justify-start">{reference}</h2>
      {/* Cerrar */}
      <div onClick={onClose} className="h-[32px] w-[32px] text-[#d8d8d8] rounded-[8px] bg-white flex justify-center items-center cursor-pointer hover:text-[#000] transition hover:bg-[#d8d8d8]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="fill">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  );
}

export default ModalHeader;
