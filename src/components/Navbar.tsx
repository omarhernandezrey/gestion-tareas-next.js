/* componentes de UI como botones, tarjetas, etc. */
// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/projects">Proyectos</Link></li>
        <li><Link href="/tasks">Tareas</Link></li>
        <li><Link href="/users">Usuarios</Link></li>
        <li><Link href="/reports">Informes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
