import React, { useState, useEffect } from 'react';
import useBonetto from '../hooks/useBonetto';
import Categoria from './Categoria';
import Pasos from "../components/Pasos";

const Sidebar = () => {
  const { categorias } = useBonetto();
  const [open, setOpen] = useState(false);

  // Add an event listener to close the sidebar when clicking outside of it
  useEffect(() => {
    const closeSidebarOnClickOutside = (e) => {
      if (open && !e.target.closest('.sidebar-container')) {
        setOpen(false);
      }
    };

    document.addEventListener('click', closeSidebarOnClickOutside);

    return () => {
      document.removeEventListener('click', closeSidebarOnClickOutside);
    };
  }, [open]);

  return (
    <div className="fixed left-0 top-0 h-full overflow-y-auto z-20 sidebar-container">
      {/* Sidebar */}
      <div className={`bg-yellow-300 w-40 p-6 transition-transform transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Contenido del sidebar */}
        <button className="absolute top-4 right-4" onClick={() => setOpen(false)}>
          {/* Icono para cerrar */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className='mt-7' onClick={() => setOpen(false)}>
          {categorias.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria}/>
          ))}      
        </div>

        <div className='mt-5 font-bold'>
            <Pasos />
        </div>
      </div>

      {/* Icono para abrir el sidebar */}
      <button className="fixed top-2 left-4" onClick={() => setOpen(!open)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 15" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
