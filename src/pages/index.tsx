/* Página de inicio. */

// src/pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';  // Asegúrate de que la ruta es correcta.

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1>Bienvenido a la Gestión de Tareas</h1>
      <p>Este es el inicio de tu aplicación.</p>
    </div>
  );
};

export default HomePage;
