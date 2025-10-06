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
      {/* Contenedor principal del grid */}
      <div 
        className="grid ... "
        style={{
          gridTemplateColumns: "123fr 128fr 165fr 117fr 563fr 152fr 153fr 150fr 175fr"
        }}
      >
        {/* Fila de encabezados */}
        <div className="contents">
          {[
            "Foto",
            "Oficina",
            "Referencia",
            "Tipo",
            "Dirección",
            "Precio",
            "Habitaciones",
            "Superficie",
            "Fecha",
          ].map((header, i) => (
            <div key={i} className="bg-[#eeeeee] px-[16px] py-[12px] text-gray-700 font-inter font-medium text-base leading-6 tracking-[-0.01em] border-b border-black">
              {header}
            </div>
          ))}
        </div>

        {/* Filas de datos */}
        {properties.slice(0,8).map((property, index) => (
          <RowGroup key={index} data={property} onClick={() => handleRowClick(property)}/>
        ))}
      </div>

      {/* Modal de detalle */}
      {isModalOpen && (
        <DetailModal className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" isOpen={isModalOpen} property={selectedProperty} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Table;