// Componente: MainContainer src/components/layout/MainContainer.jsx
// Descripción: Contenedor principal del main (vista desktop)
// ==================================================

import HeaderContainer from "../features/HeaderContainer";
import TableContainer from "../features/TableContainer";
import FooterPagination from "../features/FooterPagination";

function MainContainer() {
  return (
    <main className="flex justify-center items-center w-full h-full p-[32px_48px_32px_38px] gap-2 bg-[#eeeeee] overflow-auto box-border">
      {/* Contenedor principal */}
      <div className=" w-auto h-auto p-[16px] gap-[16px] bg-[#ffffff] border border-[#D8D8D8] rounded-[8px] flex flex-col justify-between ">
        {/* Header */}
        <HeaderContainer />

        <TableContainer />

        <FooterPagination />
      </div>
    </main>
  );
}

export default MainContainer;