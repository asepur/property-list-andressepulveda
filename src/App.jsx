// Componente: App
// Descripción: Contenedor principal del layout con Sidebar y contenido
// ==================================================
import Sidebar from './components/layout/Sidebar';
import MainContainer from './components/layout/MainContainer';

function App() {
  return (
    <div className="flex overflow-auto bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <MainContainer />
    </div>
  );
}

export default App;
