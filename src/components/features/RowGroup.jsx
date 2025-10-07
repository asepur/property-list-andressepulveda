// RowGroup.jsx
function RowGroup({ data, onClick }) {
  const { photo, location, reference, type, address, price, rooms, surface, date } = data;

  const handleClick = () => onClick && onClick();

  return (
    <div className="contents border-b border-black">
      <div onClick={handleClick} className="px-3 py-4 text-gray-700 border cursor-pointer hover:bg-gray-100 transition">{photo}</div>
      <div onClick={handleClick} className="px-3 py-4 text-gray-700 cursor-pointer hover:bg-gray-100 transition">{location}</div>
      <div onClick={handleClick} className="px-3 py-4 text-gray-700 cursor-pointer hover:bg-gray-100 transition">{reference}</div>
      <div onClick={handleClick} className="px-3 py-4 text-gray-700 cursor-pointer hover:bg-gray-100 transition">{type}</div>

      {/* Dirección (oculta en móvil) */}
      <div onClick={handleClick} className="hidden md:block px-3 py-4 text-gray-700 truncate cursor-pointer hover:bg-gray-100 transition">{address}</div>

      <div onClick={handleClick} className="px-3 py-4 text-gray-700 cursor-pointer hover:bg-gray-100 transition">{price}</div>

      {/* Habitaciones, superficie y fecha (solo escritorio) */}
      <div onClick={handleClick} className="hidden md:block px-3 py-4 text-gray-700 cursor-pointer hover:bg-gray-100 transition">{rooms}</div>
      <div onClick={handleClick} className="hidden md:block px-3 py-4 text-gray-700 cursor-pointer hover:bg-gray-100 transition">{surface}</div>
      <div onClick={handleClick} className="hidden md:block px-3 py-4 text-gray-700 cursor-pointer hover:bg-gray-100 transition">{date}</div>
    </div>
  );
}

export default RowGroup;
