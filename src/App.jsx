import React, { useState } from 'react';

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('cursos');
  const [busqueda, setBusqueda] = useState('');

  // 1. Cursos locales alineados perfectamente con los nombres reales en Git
  const [cursosLocales, setCursosLocales] = useState([
    { 
      id: 1, 
      titulo: 'Matemáticas e Interculturalidad', 
      lecciones: 12, 
      icono: '📐',
      imagen: 'imagenes/Profesor enseñando a niños pequeños un cuaderno.jpg' // P mayúscula
    },
  { 
    id: 2, 
    titulo: 'Ciencia, Tecnología y Ambiente', 
    lecciones: 8, 
    icono: '🌱',
    imagen: 'imagenes/Niños en un patio del colegio jugando.jpg' // <-- Asegúrate de que tenga la "N" mayúscula y termine en .jpg
  },
    { 
      id: 3, 
      titulo: 'Comunicación y Lenguas Originarias', 
      lecciones: 15, 
      icono: '🗣️',
      imagen: 'imagenes/Niños con sus trajes tipicos leyendo su cuaderno.jpg' // N mayúscula
    },
  ]);

  // 2. Pasos de instalación con mayúsculas, minúsculas y nombres idénticos a tu terminal
  const pasosInstalacion = [
    { titulo: '1. Soportes Estructurales', descripcion: 'Estructura de aluminio fijada mecánicamente orientada al sol.', tipo: 'energia', color: 'border-amber-500 bg-amber-50/40', imagen: 'imagenes/Soprtes para los modulos fotovoltaicos.png' }, // Nombre exacto de tu archivo "Soprtes"
    { titulo: '2. Montaje de Paneles Solares', descripcion: 'Fijación de los módulos fotovoltaicos sobre los rieles.', tipo: 'energia', color: 'border-amber-500 bg-amber-50/40', imagen: 'imagenes/Instalacion de paneles solares.png' }, // I mayúscula
    { titulo: '3. Banco de Almacenamiento', descripcion: 'Conexión de baterías de ciclo profundo en gabinete técnico seguro.', tipo: 'energia', color: 'border-amber-500 bg-amber-50/40', imagen: 'imagenes/baterias en cuarto de almacenamiento.png' }, // Todo minúscula
    { titulo: '4. Acciones y Cuidados', descripcion: 'Mantenimiento diario contra el polvo y sombras parciales.', tipo: 'energia', color: 'border-amber-500 bg-amber-50/40', imagen: 'imagenes/acciones para cuidar el panel solar.png' }, // Todo minúscula
    { titulo: '5. Monitoreo del Docente', descripcion: 'Capacitación básica al profesor encargado para la supervisión.', tipo: 'energia', color: 'border-amber-500 bg-amber-50/40', imagen: 'imagenes/Profesor junto a un panel solar.png' }, // P mayúscula
    { titulo: '6. Anclaje de Antena Satelital', descripcion: 'Instalación del plato y calibración de azimut hacia el satélite.', tipo: 'red', color: 'border-sky-500 bg-sky-50/40', imagen: 'imagenes/instalacion de antena digital.jpg' }, // Todo minúscula
    { titulo: '7. Conexiones de Distribución', descripcion: 'Enrutado de cable coaxial y ethernet blindado al servidor local.', tipo: 'red', color: 'border-sky-500 bg-sky-50/40', imagen: 'imagenes/Conexiones de la antena digital.png' } // C mayúscula
  ];

  // Filtrado lógico por buscador
  const cursosFiltrados = cursosLocales.filter(c => c.titulo.toLowerCase().includes(busqueda.toLowerCase()));
  const pasosFiltrados = pasosInstalacion.filter(p => p.titulo.toLowerCase().includes(busqueda.toLowerCase()) || p.descripcion.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col justify-between p-5 shadow-xl shrink-0">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-slate-900">AC</div>
            <h1 className="font-bold text-sm leading-tight">
              Aula Conectada<br/>
              <span className="text-xs text-emerald-400 font-normal">Sistema Rural Autónomo</span>
            </h1>
          </div>
          
          <nav className="space-y-1">
            <button onClick={() => setSeccionActiva('cursos')} className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 text-sm font-medium ${seccionActiva === 'cursos' ? 'bg-emerald-600 text-white shadow-md' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}>📚 Cursos Precargados</button>
            <button onClick={() => setSeccionActiva('videos')} className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 text-sm font-medium ${seccionActiva === 'videos' ? 'bg-emerald-600 text-white shadow-md' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}>🎥 Clases en Video</button>
            <button onClick={() => setSeccionActiva('instalacion')} className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 text-sm font-medium ${seccionActiva === 'instalacion' ? 'bg-emerald-600 text-white shadow-md' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}>🛠️ Instalación Satelital/Solar</button>
            <button onClick={() => setSeccionActiva('docente')} className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 text-sm font-medium ${seccionActiva === 'docente' ? 'bg-emerald-600 text-white shadow-md' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}>⚙️ Zona del Docente</button>
          </nav>
        </div>
        <div className="text-[10px] text-slate-500 text-center border-t border-slate-800 pt-3 font-mono">Intranet Local v1.2</div>
      </aside>

      {/* CUERPO PRINCIPAL */}
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
        
        {/* HEADER SUPERIOR CON BARRA DE BÚSQUEDA */}
        <header className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 h-20 px-8 flex items-center justify-between shadow-md text-white shrink-0">
          <div className="flex items-center gap-6 flex-1 max-w-xl">
            <h2 className="text-lg font-bold min-w-[120px] border-r border-slate-700 pr-4 capitalize">{seccionActiva === 'instalacion' ? 'Instalación' : seccionActiva}</h2>
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">🔍</span>
              <input 
                type="text" 
                placeholder={`Buscar en ${seccionActiva}...`}
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full bg-slate-700/50 text-white placeholder-slate-400 text-xs rounded-xl pl-9 pr-4 py-2.5 border border-slate-600/60 focus:outline-none focus:border-emerald-500 focus:bg-slate-700 transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] font-semibold pl-4">
            <div className="text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">⚡ Solar: 94%</div>
            <div className="text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">📶 Red: Online</div>
          </div>
        </header>

        {/* ÁREA DE CONTENIDO */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* SECCIÓN CURSOS */}
          {seccionActiva === 'cursos' && (
            <div className="space-y-6">
              <p className="text-sm text-slate-500 max-w-2xl -mt-2">Biblioteca digital del aula conectada localmente sin internet.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cursosFiltrados.map(curso => (
                  <div key={curso.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all group cursor-pointer">
                    <div className="h-40 w-full relative bg-slate-900 overflow-hidden">
                      <img 
                        src={curso.imagen} 
                        alt={curso.titulo} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                        onError={(e) => { e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center text-xs text-slate-400 bg-slate-800 font-mono p-2 text-center">Falta imagen en public/imagenes/:<br/>${curso.imagen.split('/').pop()}</div>`; }}
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-lg flex items-center justify-center shadow-sm text-lg">
                        {curso.icono}
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="text-slate-900 font-bold text-sm leading-snug line-clamp-2 h-10 mb-2">{curso.titulo}</h3>
                      <div className="flex justify-between items-center border-t border-slate-100 pt-3 text-[11px]">
                        <span className="font-bold text-slate-400 uppercase tracking-wider">{curso.lecciones} Módulos</span>
                        <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-md group-hover:bg-emerald-600 group-hover:text-white transition-colors">Abrir →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {cursosFiltrados.length === 0 && <p className="text-xs text-slate-400 text-center py-8">No se encontraron cursos.</p>}
            </div>
          )}

          {/* SECCIÓN VIDEOS */}
          {seccionActiva === 'videos' && (
            <div className="max-w-3xl bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4 shadow-inner relative overflow-hidden group">
                <img 
                  src="imagenes/profesor a lado de la pizarra dictando clases.jpg" 
                  alt="Docente dictando clase" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <button className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md shadow-emerald-500/30 hover:scale-110 transition-all z-10 cursor-pointer">▶</button>
                <div className="absolute bottom-3 left-3 bg-slate-900/80 px-3 py-1 rounded text-[11px] backdrop-blur-sm border border-slate-700">Miniatura de Clase Activa</div>
              </div>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-[10px] font-bold uppercase tracking-wider">Módulo Escolar</span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">Clase Abierta: Desarrollo y Comprensión Multidisciplinaria</h3>
              <p className="text-xs text-slate-500 mt-1">Video interactivo precargado en el disco del servidor local para reproducción offline inmediata.</p>
            </div>
          )}

          {/* SECCIÓN INSTALACIÓN */}
          {seccionActiva === 'instalacion' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pasosFiltrados.map((paso, index) => (
                  <div key={index} className={`border-t-4 rounded-xl p-4 bg-white shadow-sm border border-slate-200 flex flex-col justify-between transition-all hover:shadow-md ${paso.color}`}>
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-sm text-slate-900">{paso.titulo}</h4>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${paso.tipo === 'energia' ? 'bg-amber-100 text-amber-800' : 'bg-sky-100 text-sky-800'}`}>{paso.tipo === 'energia' ? '⚡ Energía' : '📡 Red'}</span>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed">{paso.descripcion}</p>
                    </div>
                    <div className="w-full h-40 rounded-lg overflow-hidden bg-slate-50 border border-slate-100 shadow-inner mt-2">
                      <img src={paso.imagen} alt={paso.titulo} className="w-full h-full object-cover" onError={(e) => { e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center text-[10px] text-slate-400 bg-slate-100 font-mono text-center p-2">Foto Técnica:<br/>${paso.imagen.split('/').pop()}</div>`; }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECCIÓN DOCENTE */}
          {seccionActiva === 'docente' && (
            <div className="max-w-2xl space-y-6">
              <div className="w-full h-44 rounded-xl overflow-hidden relative bg-slate-900 shadow-sm border border-slate-200 flex items-end p-5">
                <img 
                  src="imagenes/Niños pequeños juntos al frente de su escuela.jpg" // N mayúscula y "su escuela" exacto
                  alt="Niños frente a escuela" 
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="relative z-10 text-white">
                  <h3 className="text-lg font-bold drop-shadow-md">Panel de Gestión - Institución Rural</h3>
                  <p className="text-xs text-slate-200 drop-shadow-sm">Administración offline de contenidos y control de carga eléctrica.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h4 className="text-sm font-bold mb-1 text-slate-800">Carga de Recursos Educativos</h4>
                <p className="text-xs text-slate-400 mb-4">Inserta memorias de almacenamiento externo para inyectar nuevos PDFs, libros interactivos o videos.</p>
                <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 flex flex-col items-center justify-center bg-slate-50 text-center cursor-pointer hover:border-emerald-500 transition-colors">
                  <span className="text-3xl mb-2">💾</span>
                  <p className="font-semibold text-xs text-slate-600">Explorar archivos locales del sistema</p>
                </div>
              </div>
            </div>
          )}

        </main>

        {/* FOOTER */}
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0 z-10">
          <div>
            <span className="font-semibold text-slate-300">© 2026 Aula Conectada.</span> Servidor Local Rural Autónomo.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Síguenos:</span>
            <a href="#facebook" className="hover:text-blue-500 transition-colors flex items-center gap-1 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/40"><span>🔵</span> Facebook</a>
            <a href="#instagram" className="hover:text-pink-500 transition-colors flex items-center gap-1 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/40"><span>📸</span> Instagram</a>
            <a href="#youtube" className="hover:text-red-500 transition-colors flex items-center gap-1 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/40"><span>🔴</span> YouTube</a>
          </div>
        </footer>

      </div>
    </div>
  );
}