// Componente: ModalDetails.jsx
// Descripción: Subcomponentes del componente DetailModal
// =============================================

function ModalInfo({ property }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <span className="text-[#696969] text-[14px]/[20px] font-[500]">Detalles</span>
      <div className="flex flex-wrap gap-2">
        {property?.details && property.details.length > 0 ? (
          property.details.map((detail, index) => (
            <span 
              key={index} 
              className="bg-gray-300 px-2 py-1 rounded-full text-sm text-gray-700"
            >
              {detail}
            </span>
          ))
        ) : (
          <span className="text-sm text-gray-400">Sin detalles disponibles</span>
        )}
      </div>
    </div>
  );
}

export default ModalInfo;

