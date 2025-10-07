// Componente: DetailModal
// Descripción: Ventana emergente con los detalles de la propiedad seleccionada
// ===========================================

function DetailModal({ property, onClose, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[8px] w-auto max-w-[1085px] max-h-[750px] h-auto flex flex-col gap-[16px] hover:b">
      {/* Contenedor principaal del modal */}
      <div className="bg-[white] rounded-[8px] p-[32px] shadow-lg w-auto max-w-[1085px] h-auto flex flex-col gap-[16px] overflow-hidden" 
          onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="flex justify-center items-center gap-[10px] h-[30px]">
          {/* Atrás */}
          <div onClick={onClose} className="h-[32px] w-[32px] text-[#d8d8d8] rounded-[8px] bg-white flex justify-center items-center cursor-pointer hover:text-[#000] transition hover:bg-[#d8d8d8]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="fill">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-800 flex-1 justify-start">{property.reference}</h2>
          {/* Cerrar */}
          <div onClick={onClose} className="h-[32px] w-[32px] text-[#d8d8d8] rounded-[8px] bg-white flex justify-center items-center cursor-pointer hover:text-[#000] transition hover:bg-[#d8d8d8]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="fill">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        {/* Bloque información */}
        <div className="flex  flex-1 gap-[16px]">
          {/* Bloque izquierdo: detalles */}
          <div className="w-1/2 flex flex-col gap-[16px]">
            {/* Información principal */}
            <div className="flex flex-col gap-[18px]">
              <div className="flex flex-col">
                <span className="font-[700] text-[40px]/[52px]">{property?.price || "—"}</span>
                <span className="text-[16px] text-[#b4b4b4] font-[500]">{property?.address || "Dirección no disponible"}</span>
              </div>

              {/* Características */}
              <div className="flex flex-col gap-[8px]">
                <span className="text-[#696969] text-[14px]/[20px] font-[500]">Características</span>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[8px]">
                    <div className="flex flex-col">
                    <span className="text-[12px] text-[#b4b4b4]">Superficie</span>
                    <span className="text-[14px]">{property?.surface || "N/D"}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-[#b4b4b4]">Habitaciones</span>
                    <span className="text-[14px]">{property?.rooms || "N/D"}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-[#b4b4b4]">Baños</span>
                    <span className="text-[14px]">{property?.bathrooms || "N/D"}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-[#b4b4b4]">Clase energética</span>
                    <span className="text-[14px]">{property?.energyClass || "N/D"}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-[#b4b4b4]">Emisiones CEO2</span>
                    <span className="text-[14px]">{property?.co2Emissions || "N/D"}</span>
                  </div>
                  </div>
                  <div className="flex gap-[8px]">
                    <div className="flex flex-col">
                      <span className="text-[12px] text-[#b4b4b4]">Construcción</span>
                      <span className="text-[14px]">{property?.yearBuilt || "N/D"}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] text-[#b4b4b4]">Conservación</span>
                      <span className="text-[14px] font-medium ">{property?.conservation || "N/D"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detalles */}
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

            </div>

            {/* Imagenes */}
            <div className="grid grid-rows-[2fr_1fr] gap-[16px] max-h-aspect-video w-full">
              {/* Imagen grande arriba */}
              <div className="bg-[#eeeeee] rounded-[8px] flex justify-center items-center relative overflow-hidden">
                {property?.images?.[0] ? (
                  <img
                    src={property.images[0]}
                    alt={`Imagen principal de ${property.reference}`}
                    className="w-full h-full object-cover rounded-[8px]"
                  />
                ) : (
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                )}
              </div>

              {/* Fila inferior con dos imágenes */}
              <div className="grid grid-cols-2 gap-[8px]">
                {/* Primera imagen pequeña */}
                <div className="bg-[#eeeeee] rounded-[8px] flex justify-center items-center overflow-hidden">
                  {property?.images?.[1] ? (
                    <img
                      src={property.images[1]}
                      alt={`Imagen 2 de ${property.reference}`}
                      className="w-full h-full object-cover rounded-[8px]"
                    />
                  ) : (
                    <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                  )}
                </div>

                {/* Segunda imagen pequeña (última) */}
                <div className="bg-[#696969] rounded-[8px] flex justify-center items-center relative opacity-[84%] overflow-hidden">
                  {property?.images?.[2] ? (
                    
                    <img
                      src={property.images[2]}
                      alt={`Imagen 3 de ${property.reference}`}
                      className="w-full h-full object-cover rounded-[8px]"
                    />
                  ) : (
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                  )}

                  {/* Número de imágenes restantes */}
                  {property?.images?.length > 3 && (
                    <span className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
                      +{property.images.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>


          </div>
          {/* Bloque derecho:  descripción */}
          <div className="w-1/2 p-6 flex-1 flex-col">
            <h4 className="text-[#696969] text-[14px] text-medium">Descripción</h4>
            {property.description?.map((paragraph, index) => (
              <p key={index} className="text-[12px] text-[#1b1b1b]">{paragraph}</p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default DetailModal;
