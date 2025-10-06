// Componente: DetailModal
// Descripción: Ventana emergente con los detalles de la propiedad seleccionada
// ===========================================

function DetailModal({ property, onClose, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-[0] bg-white rounded-[8px] p-[32px] w-auto max-w-[1085px] h-auto flex flex-col gap-[16px] hover:b">
      {/* Contenedor principaal del modal */}
      <div className="bg-[white] rounded-[8px] p-[32px] border shadow-lg w-auto max-w-[1085px] h-auto flex flex-col gap-[16px] overflow-hidden" 
          onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="flex justify-center items-center gap-[10px] h-[30px]">
          {/* Atrás */}
          <div onClick={onClose} className="h-[32px] w-[32px] text-[#d8d8d8] rounded-[8px] bg-white flex justify-content items-center gap-2 text-gray-600 cursor-pointer hover:text-[#000] transition hover:bg-[#d8d8d8]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 fill">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
          {/* Referencia */}
          <h2 className="text-lg font-semibold text-gray-800 flex-1 justify-start">{property?.referencia || "REF-000"}</h2>
          {/* Cerrar */}
          <div onClick={onClose} className="h-[32px] w-[32px] text-[#d8d8d8] rounded-[8px] bg-white flex justify-content items-center gap-2 text-gray-600 cursor-pointer hover:text-[#000] transition hover:bg-[#d8d8d8]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          </div>
        </div>

        {/* Bloque información */}
        <div className="flex  flex-1 gap-[16px]">

          <div className="w-1/2 flex flex-col gap-[16px]">
            {/* Información principal */}
            <div className="flex flex-col gap-[18px]">
              <div className="flex flex-col">
                <span className="font-[700] text-[40px]/[52px]">2.300.000 €</span>
                <span className="text-[16px] text-[#b4b4b4] font-[500]">Avenida de las Cortes Valencianas, 23 · 46015 Valencia</span>
              </div>

              {/* Características */}
              <div className="flex flex-col gap-[8px]">
                <span className="text-[#696969] text-[14px]/[20px] font-[500]">Características</span>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[8px]">
                    <div className="flex flex-col">
                    <span className="text-[12px] text-[#b4b4b4]">Superficie</span>
                    <span className="text-[14px]">148m2</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-[#b4b4b4]">Habitaciones</span>
                    <span className="text-[14px]">3</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-[#b4b4b4]">Baños</span>
                    <span className="text-[14px]">2</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-[#b4b4b4]">Clase energética</span>
                    <span className="text-[14px]">E</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-[#b4b4b4]">Emisiones CEO2</span>
                    <span className="text-[14px]">E</span>
                  </div>
                  </div>
                  <div className="flex gap-[8px]">
                    <div className="flex flex-col">
                      <span className="text-[12px] text-[#b4b4b4]">Construcción</span>
                      <span className="text-[14px]">1932</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] text-[#b4b4b4]">Conservación</span>
                      <span className="text-[14px] font-medium ">Reformado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detalles */}
              <div className="flex flex-col gap-[8px]">
                <span className="text-[#696969] text-[14px]/[20px] font-[500]">Detalles</span>
                <div className="flex gap-[8px] text-[12px]">
                  <div className="bg-[#d8d8d8] rounded-[8px] px-[6px] py-[3px]">Armarios empotrados</div>
                  <div className="bg-[#d8d8d8] rounded-[8px] px-[6px] py-[3px]">Aire acondicionado</div>
                  <div className="bg-[#d8d8d8] rounded-[8px] px-[6px] py-[3px]">Ascensor</div>
                  <div className="bg-[#d8d8d8] rounded-[8px] px-[6px] py-[3px]">Balcón</div>
                </div>
              </div>
            </div>

            {/* Imagenes */}
            <div className="grid grid-rows-[2fr_1fr] gap-[16px] aspect-video w-full h-[456px]">
                {/* Imagen grande arriba */}
                <div className="bg-[#eeeeee] rounded-[8px] flex justify-center items-center">
                  {/*<img
                    src="/ruta/imagen1.jpg"
                    alt="Imagen principal"
                    className="w-full h-full object-cover rounded-[8px]"
                  />*/}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[24px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>

                {/* Fila inferior con dos imágenes */}
                <div className="grid grid-cols-2 gap-[8px]">
                  <div className="bg-[#eeeeee] rounded-[8px] flex justify-center items-center">
                      {/*<img
                      src="/ruta/imagen1.jpg"
                      alt="Imagen principal"
                      className="w-full h-full object-cover rounded-[8px]"
                    />*/}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[24px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>

                  </div>
                  <div className="bg-[#696969] rounded-[8px] flex justify-center items-center opacity-[84%]">
                    {/*<img
                      src="/ruta/imagen1.jpg"
                      alt="Imagen principal"
                      className="w-full h-full object-cover rounded-[8px]"
                    />*/}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="h-[24px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                  </div>
                </div>
            </div>

          </div>

          <div className="w-1/2 p-6 flex-1 flex-col">
            <h4 className="text-[#696969] text-[14px] text-medium">Descripción</h4>
            <p className="text-[12px] text-[#1b1b1b]">Lion Capital Group se complace presentar esta vivienda en el presitioso barrio de Ruzafa, Valencia.</p>
            <p className="text-[12px] text-[#1b1b1b]">La vivienda cuenta con acabados de lujo con suelos y paredes de microcemento en zonas clave,  ofreciendo una estética
              moderna y continua. La instaalación eléctrica  es completamente nueva, con enchufes invisibles a ras para una integración perfecta. 
              La cocina es  de alta gama, equipada con muebles de diseño,luz automática en los cajones y electrodomésticos de primeras marcas. 
              El innovador grifo Quooker ofrece agua con gas, hirviendo o filtrada al instante, y las encimeras porcelánicas Neolith con fregadero
              integrado  complementan un diseño excepcional. Los baños son un santuario de diseño y tecnología: grifería incrustada en acero  inoxidable,
              inodoro suspendido, y cristales que se oscurecen automáticamente al encender la luz para máxima privacidad. Las habitaciones ofrecen confort
              y funcionalidad. El dormitorio principal cuenta con armarios a medida iluminados y persianas eléctricas. La habitación de invitados dispone de 
              un armario que oculta una cama abatible de 1,5m, optimizando el espacio. Completa la viviend un lavadero a medida para lavadora y secadora.
            </p>
            <p className="text-[12px] text-[#1b1b1b]">
              Al cruzar el umbral, serás recibdo por una vivienda llena de luz y pensada al detalle. Destacan los techos de 3 metros de altura y la iluminación
              domóticaa con control de intensidad y color,  creando ambientes únicos. Disfruta del confort del aire acondicionado centralizado wifi y la discreción de las ventanas
              de hoja oculta con rotura de puente térmico y cristal de control de temperatura y sonnido. Las puertas de marco oculto de 2,6m de alto y los panelados
              acústicos en salón y habitación gaarantizan una atmósfera de tranquilidad.
            </p>
            <p className="text-[12px] text-[#1b1b1b]">
              La ubicaación es inmejorable, en el corazón de Ruzafa, una localización estratégica que la coloca en proximidad directaa con una amplia gama de 
              comodidades, incluyendo supermercados, hospitales, colegios y transporte público eficiente. Disfruta de la comodidad de tener todo al alcance de la mano,
              combinando la vidaa urbana con el máximo confort. No pierdas esta gran oportunidad y ven a visitarlo con nosotros, estaremos encantados de mostrártelo.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DetailModal;
