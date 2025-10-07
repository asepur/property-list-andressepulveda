// Componente: MainContainer src/components/layout/MainContainer.jsx
// Descripción: Contenedor principal del main (vista desktop)
// ==================================================

import {HeaderContainer} from "../features/HeaderContainer";
import {TableContainer} from "../features/TableContainer";
import {FooterPagination} from "../features/FooterPagination";
import MainLayout from "../features/MainLayout";

function MainContainer() {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-[#e8e8e8]">
      {/* Contenedor principal */}
      <div className="w-full h-full gap-[16px] bg-[#e8e8e8] border border-[#D8D8D8] rounded-[8px] flex flex-col justify-between">
        {/* Header */}
        <MainLayout>
          <HeaderContainer />
          <TableContainer />
          <FooterPagination />
        </MainLayout>
      </div>
    </main>
  );
}

export default MainContainer;
