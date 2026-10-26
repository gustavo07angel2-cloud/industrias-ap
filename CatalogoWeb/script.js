const projects = [
  {
    category: 'cocinas',
    title: 'Cocina wengué con cuarzo',
    image: 'assets/projects/cocina-wengue-cuarzo.webp',
    spec: 'Melamina wengué · Top de cuarzo · Distribución en L',
    description: 'Cocina integral en L fabricada en melamina tono wengué de veta vertical, con gabinetes aéreos de gran capacidad, torre de tres gavetas junto a la estufa y encimera continua de cuarzo claro con lavatrastos doble empotrado.'
  },
  {
    category: 'especiales',
    title: 'Estación comercial D’Or Botan',
    image: 'assets/projects/estacion-venta-principal.webp',
    spec: 'Barniz poliéster · Frente alistonado · Vitrina integrada',
    description: 'Mostrador de recepción y cobro diseñado como pieza central del local, con frente alistonado en tono verde bosque, esquina curva, zócalo dorado con iluminación indirecta y vitrina exhibidora integrada.'
  },
  {
    category: 'closets',
    title: 'Centro de entretenimiento y escritorio',
    image: 'assets/projects/closet-tv-escritorio.webp',
    spec: 'Panel ranurado · Iluminación LED · Escritorio integrado',
    description: 'Composición integral a medida que unifica panel alistonado para TV, repisas con iluminación LED cálida, área de escritorio con gavetas y módulos cerrados de almacenamiento en una sola línea continua.'
  },
  {
    category: 'lavamanos',
    title: 'Lavamanos en roble oscuro',
    image: 'assets/projects/lavamanos-roble-oscuro.webp',
    spec: 'Roble oscuro · Top claro · Ovalín sobrepuesto',
    description: 'Mueble de baño compacto en acabado roble oscuro con dos puertas batientes, estructura elevada con patas de aluminio para facilitar la limpieza y cubierta clara resistente a la humedad con lavamanos tipo tazón.'
  },
  {
    category: 'cocinas',
    title: 'Cocina cedro con cuarzo',
    image: 'assets/projects/cocina-cedro-cuarzo.webp',
    spec: 'Melamina cedro · Cuarzo adiamantado · Módulo auxiliar',
    description: 'Cocina residencial en tonos cálidos de cedro combinada con encimera de cuarzo blanco adiamantado, área de fregadero bajo ventana, línea continua de gabinetes superiores y mueble buffet lateral de apoyo.'
  },
  {
    category: 'closets',
    title: 'Clóset expresso y roble cava',
    image: 'assets/projects/closet-expresso-roble.webp',
    spec: 'Expresso · Roble cava · Iluminación LED',
    description: 'Clóset de dormitorio de piso a techo con contraste entre estructura expresso y frentes en roble cava, puertas batientes amplias, maletero superior e iluminación integrada para facilitar la organización diaria.'
  },
  {
    category: 'especiales',
    title: 'Estación de café con cuarzo',
    image: 'assets/projects/estacion-cafe.webp',
    spec: 'Módulo aéreo · Cuarzo adiamantado · Gavetas',
    description: 'Mueble auxiliar y estación de café diseñado para optimizar espacios compactos, integrando gabinete aéreo con puertas, superficie de cuarzo resistente al uso diario y almacenamiento inferior.'
  },
  {
    category: 'lavamanos',
    title: 'Lavamanos gris mate',
    image: 'assets/projects/lavamanos-gris-mate.webp',
    spec: 'Gris mate · 3 gavetas laterales · Herraje negro',
    description: 'Gabinetes de baño en acabado gris grafito mate con lavamanos cerámico integrado de una sola pieza, doble puerta central bajo el sifón y columna lateral de tres gavetas con jaladeras en negro mate.'
  },
  {
    category: 'cocinas',
    title: 'Cocina blanca integral',
    image: 'assets/projects/cocina-blanca-integral.webp',
    spec: 'Melamina blanca · Top tipo mármol · Repisas curvas',
    description: 'Cocina luminosa en esquina con repisas terminales curvas, nicho aéreo para microondas, espacio para campana extractora, cajonera de tres niveles, cubierta laminada tipo mármol y módulo auxiliar.'
  },
  {
    category: 'closets',
    title: 'Clóset nogal Austria',
    image: 'assets/projects/closet-nogal-austria.webp',
    spec: 'Nogal Austria · Entrepaños y gavetas · Cerradura',
    description: 'Clóset modular en acabado nogal Austria con secciones diferenciadas para colgado, ropa doblada y calzado, incorporando compartimento privado con cerradura y herrajes de uso continuo.'
  },
  {
    category: 'lavamanos',
    title: 'Lavamanos blanco con granito',
    image: 'assets/projects/lavamanos-blanco-granito.webp',
    spec: 'Melamina blanca · Top de granito oscuro · A medida',
    description: 'Contraste sobrio entre mueble base en melamina blanca y cubierta de granito natural oscuro con salpicadera, ofreciendo máxima resistencia al agua y amplio espacio interior de guardado.'
  },
  {
    category: 'especiales',
    title: 'Medallero en madera de pino',
    image: 'assets/projects/medallero-pino.webp',
    spec: 'Madera de pino · Tinte caoba · Acabado poliuretano',
    description: 'Exhibidor personalizado fabricado en madera sólida de pino con tinte tono caoba y protección en poliuretano, diseñado con repisa superior para trofeos y barras inferiores para organizar medallas.'
  },
  {
    category: 'cocinas',
    title: 'Cocina blanca con gavetas',
    image: 'assets/projects/cocina-blanca-gavetas.webp',
    spec: 'Melamina blanca · Gavetas con corredera telescópica',
    description: 'Distribución funcional que prioriza módulos de gavetas profundas de extracción suave y superficies claras, logrando una cocina ordenada, luminosa y cómoda para cocinar a diario.'
  },
  {
    category: 'lavamanos',
    title: 'Lavamanos roble cava y cuarzo',
    image: 'assets/projects/lavamanos-roble-cava.webp',
    spec: 'Roble cava · Cuarzo estelar · Diseño suspendido',
    description: 'Mueble aéreo de baño con frente en tono roble cava de veta suave y cubierta de cuarzo blanco estelar, pensado para despejar el piso y aportar amplitud visual al sanitario.'
  },
  {
    category: 'closets',
    title: 'Cabecera con espejos media luna',
    image: 'assets/projects/cabecera-espejos.webp',
    spec: 'Panel alistonado · Espejos media luna · Iluminación',
    description: 'Cabecera de dormitorio fabricada a medida con paneles verticales, mesas de noche integradas y espejos laterales en corte media luna que amplían la luz y la profundidad de la habitación.'
  },
  {
    category: 'especiales',
    title: 'Detalle de estación comercial',
    image: 'assets/projects/estacion-venta-detalle-1.webp',
    spec: 'Mostrador en L · Módulo posterior con 6 nichos',
    description: 'Vista del conjunto comercial D’Or Botan mostrando la amplitud de la cubierta blanca de atención y la credenza posterior con seis nichos abiertos y tres gavetas centrales con herraje dorado.'
  },
  {
    category: 'lavamanos',
    title: 'Lavamanos chocolate con gavetas',
    image: 'assets/projects/lavamanos-chocolate-gavetas.webp',
    spec: 'Melamina chocolate · Gavetas laterales · Lavamanos amplio',
    description: 'Mueble de baño en tono chocolate profundo con lavamanos cerámico de borde amplio, puertas centrales para resguardo de insumos y gavetas laterales para artículos personales.'
  },
  {
    category: 'cocinas',
    title: 'Cocina expresso',
    image: 'assets/projects/cocina-expresso.webp',
    spec: 'Melamina expresso · Barra desayunadora · Marco de refri',
    description: 'Cocina integral en madera oscura con barra desayunadora revestida en tono mármol blanco, columna lateral de repisas abiertas, cenefa superior para iluminación colgante y módulo para refrigeradora.'
  },
  {
    category: 'closets',
    title: 'Clóset de cedro',
    image: 'assets/projects/closet-cedro.webp',
    spec: 'Madera de cedro · Entrepaños abiertos · Gran altura',
    description: 'Módulos verticales de almacenamiento fabricados en madera natural de cedro con divisiones asimétricas reforzadas y sección inferior preparada para gavetas de extracción total.'
  },
  {
    category: 'lavamanos',
    title: 'Lavamanos blanco con moldura',
    image: 'assets/projects/lavamanos-blanco-moldura.webp',
    spec: 'MDF laqueado · Puertas con moldura · Top de granito',
    description: 'Mueble de corte clásico con frentes en MDF moldurado terminado en laca blanca satinada, combinado con cubierta de granito natural y herrajes metálicos tradicionales.'
  },
  {
    category: 'cocinas',
    title: 'Aéreo en roble claro',
    image: 'assets/projects/aereo-roble-claro.webp',
    spec: 'Roble claro · Aprovechamiento de esquina · A medida',
    description: 'Módulos aéreos fabricados a medida en melamina roble claro para aprovechar la esquina de la cocina, sumando capacidad de despensa con una estética cálida y ligera.'
  },
  {
    category: 'especiales',
    title: 'Mueble para garrafón',
    image: 'assets/projects/mueble-garrafon.webp',
    spec: 'Madera natural · Barniz al agua · Entrepaño',
    description: 'Soporte funcional para dispensador de agua fabricado en madera tratada con barniz al agua, diseñado con altura ergonómica para servir y espacio inferior de apoyo.'
  },
  {
    category: 'lavamanos',
    title: 'Lavamanos aserrado nórdico',
    image: 'assets/projects/lavamanos-nordico.webp',
    spec: 'Melamina aserrado nórdico · 3 gavetas · Top claro',
    description: 'Mueble de baño de textura aserrada nórdica que combina puerta bajo lavamanos y tres gavetas laterales amplias, aportando calidez de madera clara y orden práctico.'
  },
  {
    category: 'cocinas',
    title: 'Cocina empotrada',
    image: 'assets/projects/cocina-empotrada.webp',
    spec: 'Carpintería sobre estructura de concreto · A medida',
    description: 'Frentes, puertas, gavetas y gabinetes superiores fabricados milimétricamente para vestir y aprovechar una base existente de fundición, logrando un acabado limpio y bien sellado.'
  },
  {
    category: 'lavamanos',
    title: 'Lavamanos chocolate y cuarzo',
    image: 'assets/projects/lavamanos-chocolate-cuarzo.webp',
    spec: 'Melamina chocolate · Top de cuarzo claro · Ovalín',
    description: 'Combinación de gabinete en melamina tono chocolate con cubierta de cuarzo claro, ofreciendo excelente resistencia a la humedad y contraste elegante en baños residenciales.'
  },
  {
    category: 'closets',
    title: 'Clóset integrado en tablayeso',
    image: 'assets/projects/closet-tablayeso.webp',
    spec: 'Integración en nicho · Melamina blanca · A medida',
    description: 'Módulos interiores, gavetas y puertas fabricados a medida para empotrarse al ras dentro de una estructura de tablayeso, logrando un frente limpio de piso a techo.'
  },
  {
    category: 'lavamanos',
    title: 'Lavamanos blanco y cuarzo estelar',
    image: 'assets/projects/lavamanos-blanco-estelar.webp',
    spec: 'Melamina blanca · Cuarzo blanco estelar · Gavetas',
    description: 'Diseño monocromático en blanco con cubierta de cuarzo estelar, ideal para multiplicar la iluminación del baño manteniendo gavetas y puertas de fácil limpieza.'
  },
  {
    category: 'especiales',
    title: 'Estación comercial — vista interior',
    image: 'assets/projects/estacion-venta-detalle-2.webp',
    spec: 'Interior en melamina blanca · 3 gavetas · Retorno en L',
    description: 'Distribución operativa interna del mostrador comercial con seis compartimentos abiertos, cajonera central de tres niveles y retorno en L con repisa continua para punto de venta.'
  },
  {
    category: 'cocinas',
    title: 'Cocina blanca con fórmica',
    image: 'assets/projects/cocina-blanca-formica.webp',
    spec: 'Melamina blanca · Top en fórmica · Jaladeras de barra',
    description: 'Cocina práctica de líneas limpias en acabado blanco con cubierta revestida en fórmica de fácil mantenimiento, gabinetes superiores y cajonera inferior.'
  },
  {
    category: 'lavamanos',
    title: 'Lavamanos en cedro',
    image: 'assets/projects/lavamanos-cedro.webp',
    spec: 'Acabado cedro · Formato compacto · 2 puertas',
    description: 'Gabinete para baño en tono cedro cálido pensado para optimizar espacios reducidos sin sacrificar almacenamiento oculto bajo el lavamanos.'
  },
  {
    category: 'lavamanos',
    title: 'Lavamanos con top de cuarzo',
    image: 'assets/projects/lavamanos-cuarzo.webp',
    spec: 'Fabricación a medida · Encimera de cuarzo · Gavetas',
    description: 'Mueble de baño personalizado con cubierta de cuarzo pulido, herrajes metálicos inoxidables y distribución interior adaptada a las tomas hidráulicas del cliente.'
  },
  {
    category: 'lavamanos',
    title: 'Lavamanos roble pedernal',
    image: 'assets/projects/lavamanos-roble-pedernal.webp',
    spec: 'Melamina roble pedernal · Veta texturizada · A medida',
    description: 'Acabado en tono roble pedernal grisáceo de veta natural que aporta carácter contemporáneo al baño, con puertas y gavetas diseñadas para el uso diario.'
  }
];

const labels = { cocinas: 'Cocinas', closets: 'Clósets', lavamanos: 'Lavamanos', especiales: 'Diseño especial' };
const grid = document.querySelector('#project-grid');
const loadMore = document.querySelector('#load-more');
const filterButtons = [...document.querySelectorAll('.filter')];
let activeFilter = 'todos';
let visibleCount = 10;
let visibleProjects = [];

function renderProjects() {
  const filtered = activeFilter === 'todos' ? projects : projects.filter(item => item.category === activeFilter);
  visibleProjects = filtered.slice(0, visibleCount);
  grid.innerHTML = visibleProjects.map((project, index) => `
    <button class="project-card" type="button" data-index="${index}" aria-label="Ampliar ${project.title}">
      <span class="project-image"><img src="${project.image}" alt="${project.title}, proyecto de Industrias AP" loading="lazy"></span>
      <span class="project-meta">
        <span class="project-category">${labels[project.category]}</span>
        <strong>${project.title}</strong>
        <span class="project-description">${project.description}</span>
        <span class="project-spec">${project.spec}<i aria-hidden="true">↗</i></span>
      </span>
    </button>`).join('');
  loadMore.hidden = visibleCount >= filtered.length;
  grid.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', () => openLightbox(Number(card.dataset.index))));
}

filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  visibleCount = activeFilter === 'todos' ? 10 : 12;
  filterButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  renderProjects();
}));

loadMore.addEventListener('click', () => {
  visibleCount += 8;
  renderProjects();
});

document.querySelectorAll('[data-filter-link]').forEach(link => link.addEventListener('click', () => {
  const target = document.querySelector(`.filter[data-filter="${link.dataset.filterLink}"]`);
  if (target) setTimeout(() => target.click(), 150);
}));

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCategory = lightbox.querySelector('figcaption span');
const lightboxTitle = lightbox.querySelector('figcaption strong');
const lightboxDescription = lightbox.querySelector('figcaption p');
const lightboxWa = lightbox.querySelector('.lightbox-wa');
let lightboxIndex = 0;

function updateLightbox() {
  const project = visibleProjects[lightboxIndex];
  lightboxImage.src = project.image;
  lightboxImage.alt = project.title;
  lightboxCategory.textContent = `${labels[project.category]} · ${project.spec}`;
  lightboxTitle.textContent = project.title;
  lightboxDescription.textContent = project.description;
  if (lightboxWa) {
    const msg = `Hola Industrias AP, vi en el catálogo el proyecto "${project.title}" y me gustaría cotizar un diseño similar.`;
    lightboxWa.href = `https://wa.me/50250066630?text=${encodeURIComponent(msg)}`;
  }
}

function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  lightbox.showModal();
  document.body.classList.add('modal-open');
}

function closeLightbox() {
  lightbox.close();
  document.body.classList.remove('modal-open');
}

function moveLightbox(direction) {
  lightboxIndex = (lightboxIndex + direction + visibleProjects.length) % visibleProjects.length;
  updateLightbox();
}

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.prev').addEventListener('click', () => moveLightbox(-1));
lightbox.querySelector('.next').addEventListener('click', () => moveLightbox(1));
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') moveLightbox(-1);
  if (event.key === 'ArrowRight') moveLightbox(1);
});

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30), { passive: true });

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  menuToggle.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
  mainNav.classList.toggle('open', !open);
  document.body.classList.toggle('menu-open', !open);
});

mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
  mainNav.classList.remove('open');
  document.body.classList.remove('menu-open');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
renderProjects();
