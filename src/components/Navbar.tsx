/* componentes de UI como botones, tarjetas, etc. */
// src/components/Navbar.tsx
// src/components/Navbar.tsx
// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link href="/" className="hover:bg-blue-700 transition-colors">Inicio</Link></li>
        <li><Link href="/projects" className="hover:bg-blue-700 transition-colors">Proyectos</Link></li>
        <li><Link href="/tasks" className="hover:bg-blue-700 transition-colors">Tareas</Link></li>
        <li><Link href="/users" className="hover:bg-blue-700 transition-colors">Usuarios</Link></li>
        <li><Link href="/reports" className="hover:bg-blue-700 transition-colors">Informes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

