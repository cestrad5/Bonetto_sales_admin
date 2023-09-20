import React, { useState } from 'react';
import useBonetto from '../hooks/useBonetto';
import Categoria from './Categoria';

const Sidebar = () => {
  const { categorias } = useBonetto();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-0 top-0 h-full overflow-y-auto z-50">
      {/* Sidebar */}
      <div className={`bg-yellow-300 w-40 p-4 transition-transform transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Contenido del sidebar */}
        <button className="absolute top-4 right-4" onClick={() => setOpen(false)}>
          {/* Icono para cerrar */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className='mt-10' onClick={() => setOpen(false)}>
          {categorias.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria}/>
          ))}
        </nav>
      </div>

      {/* Contenido de la página principal */}
      <div className={`ml-60 ${open ? 'opacity-50 pointer-events-none' : ''}`}>
        {/* Contenido principal de tu página */}
        {/* ... */}
      </div>

      {/* Icono para abrir el sidebar */}
      <button className="fixed top-4 left-4" onClick={() => setOpen(!open)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 15" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
