// Componente: Table
// Descripción: Tabla de 9x9 con encabezados y filas de contenido.
// De cara a una futura u interacción (click -> modal o añadir nuevas propiedades), facilitar el responsive
// y mejorar la arquitectura del código, he optado por usar un grid layout en lugar de table.
// ===============================================================================================
import { useState } from "react";
import DetailModal from "./DetailModal/DetailModal"
import RowGroup from "./RowGroup";
import properties from "../data/properties.json";

function Table (){

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleRowClick = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

return (
    <div className="w-auto overflow-x h-full">
      <div className="grid grid-cols-5 md:grid-cols-9 auto-rows-min">
        {/* Encabezado */}
        <div className="contents">
          <div className="contents">
            <div className="bg-[#eeeeee] px-[16px] py-[12px] text-gray-700 font-inter font-medium border-b rounded-tl-lg border-black">Foto</div>
            <div className="bg-[#eeeeee] px-[16px] py-[12px] text-gray-700 font-inter font-medium border-b border-black">Oficina</div>
            <div className="bg-[#eeeeee] px-[16px] py-[12px] text-gray-700 font-inter font-medium border-b border-black">Referencia</div>
            <div className="bg-[#eeeeee] px-[16px] py-[12px] text-gray-700 font-inter font-medium border-b border-black">Tipo</div>
            <div className="hidden md:block bg-[#eeeeee] px-[16px] py-[12px] text-gray-700 font-inter font-medium border-b border-black">Dirección</div>
            <div className="bg-[#eeeeee] px-[16px] py-[12px] text-gray-700 font-inter font-medium border-b border-black">Precio</div>
            <div className="hidden md:block bg-[#eeeeee] px-[16px] py-[12px] text-gray-700 font-inter font-medium border-b border-black">Habitaciones</div>
            <div className="hidden md:block bg-[#eeeeee] px-[16px] py-[12px] text-gray-700 font-inter font-medium border-b border-black">Superficie</div>
            <div className="hidden md:block bg-[#eeeeee] px-[16px] py-[12px] text-gray-700 font-inter font-medium border-b rounded-tr-lg  border-black">Fecha</div>
          </div>

        </div>

        {/* Filas */}
        {properties.slice(0, 8).map((property, index) => (
          <RowGroup
            key={index}
            data={property}
            onClick={() => handleRowClick(property)}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <DetailModal
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          isOpen={isModalOpen}
          property={selectedProperty}
          onClose={handleCloseModal}
        />
      )}
    </div>

  );
};

export default Table;