// Componente: RowGroup
// Descripción: Fila de datos dentro de la tabla tipo grid
// ===========================================

function RowGroup({data, onClick}){
    const { photo, location,  reference, type, address, price, rooms, surface, date } = data;

    return(

        <div onClick={onClick} className="contents cursor-pointer border-b border-black">
            <div className="px-[16px] py-[32px] text-gray-700 border">{photo}</div>
            <div className="px-[16px] py-[32px] text-gray-700">{location}</div>
            <div className="px-[16px] py-[32px] text-gray-700">{reference}</div>
            <div className="px-[16px] py-[32px] text-gray-700">{type}</div>
            <div className="px-[16px] py-[32px] text-gray-700">{address}</div>
            <div className="px-[16px] py-[32px] text-gray-700">{price}</div>
            <div className="px-[16px] py-[32px] text-gray-700">{rooms}</div>
            <div className="px-[16px] py-[32px] text-gray-700">{surface}</div>
            <div className="px-[16px] py-[32px] text-gray-700">{date}</div>
          </div>
    );
}

export default RowGroup;