// Componente: PropertyDetails.jsx
// Descripción: Subcomponentes del componente DetailModal
// =============================================

function ModalDescription({ description }) {
  return (
    <div className="w-1/2 p-6 flex-1 flex-col">
      <h4 className="text-[#696969] text-[14px] text-medium">Descripción</h4>
      {description?.map((paragraph, index) => (
        <p key={index} className="text-[12px] text-[#1b1b1b]">{paragraph}</p>
      ))}
    </div>
  );
}

export default ModalDescription;

