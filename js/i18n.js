/* DICCIONARIO */
const translations = {

  /*  ESPAÑOL  */
  es: {

    /* — Metadatos — */
    'meta.desc.home':      'Garabi Films — Productora audiovisual vasca. Cine de autor desde el País Vasco.',
    'meta.desc.films':     'Catálogo de producciones de Garabi Films — Largometrajes, cortometrajes y series.',
    'meta.desc.contact':   'Contacta con Garabi Films — Productora audiovisual vasca. Donostia-San Sebastián.',
    'meta.desc.film.cb':   'Caro Bastiano — Largometraje de Garabi Films. 80 min · 2026. Sinopsis, ficha técnica, galería y materiales de prensa.',
    'meta.desc.film.aa':   'Azken Agurra — Largometraje de Garabi Films. 90 min · 2026. Sinopsis, ficha técnica, galería y materiales de prensa.',
    'meta.desc.film.za':   'Zeru Ahoak — Serie de Garabi Films. 2025. Sinopsis, ficha técnica, galería y materiales de prensa.',
    'meta.desc.profile.mf':'Marian Fernández Pascal — Productora. Filmografía completa. Garabi Films.',
    'meta.desc.profile.ka':'Koldo Almandoz — Director y Guionista. Filmografía completa. Garabi Films.',

    /* Títulos de página */
    'title.home':          'Garabi Films',
    'title.films':         'Películas — Garabi Films',
    'title.contact':       'Contacto — Garabi Films',

    /* Navbar */
    'nav.aria':            'Navegación principal',
    'nav.logo.aria':       'Garabi Films — Inicio',
    'nav.lang.aria':       'Selección de idioma',
    'nav.menu.aria':       'Menú de navegación',
    'nav.open.aria':       'Abrir menú',
    'nav.close.aria':      'Cerrar menú',
    'nav.films':           'Películas',
    'nav.contact':         'Contacto',

    /* Hero (main.html) */
    'hero.label':          'Obra destacada',
    'hero.prefix':         'Una película de',
    'hero.cta':            'Ver ficha',
    'hero.cta.aria':       'Ver ficha completa',
    'hero.scroll':         'Scroll',
    'hero.festivals.aria': 'Festivales',

    /* Últimas producciones */
    'home.latest.title':   'Últimas producciones',
    'home.latest.all':     'Ver catálogo completo →',
    'home.latest.aria':    'Últimas producciones',

    /* Categorías (badges) */
    'cat.feature':         'Largometraje',
    'cat.short':           'Cortometraje',
    'cat.series':          'Serie',

    /* Catálogo (peliculas.html) */
    'catalog.sup':         'Garabi Films',
    'catalog.title':       'Catálogo',
    'catalog.subtitle':    'Largometrajes, cortometrajes y series producidas desde 2022.',
    'catalog.filter.aria': 'Filtrar catálogo',
    'catalog.filter.cats': 'Categorías',
    'filter.all':          'Todos',
    'filter.features':     'Largometrajes',
    'filter.shorts':       'Cortometrajes',
    'filter.series':       'Series',
    'catalog.count':       'producciones',

    /* Contacto (contacto.html) */
    'contact.sup':                   'Garabi Films',
    'contact.title':                 'Contacto',
    'contact.subtitle':              'Para proyectos, prensa, distribución o cualquier consulta.',
    'contact.form.title':            'Escríbenos',
    'contact.form.name.label':       'Nombre',
    'contact.form.name.placeholder': 'Tu nombre completo',
    'contact.form.email.placeholder':'tu@email.com',
    'contact.form.subject.label':    'Asunto',
    'contact.form.subject.default':  'Selecciona un asunto',
    'contact.form.subject.press':    'Prensa y medios',
    'contact.form.subject.distrib':  'Distribución',
    'contact.form.subject.coprod':   'Coproducción',
    'contact.form.subject.fest':     'Festivales',
    'contact.form.subject.other':    'Otro',
    'contact.form.message.label':    'Mensaje',
    'contact.form.message.placeholder':'Cuéntanos en qué podemos ayudarte...',
    'contact.form.privacy.pre':      'He leído y acepto la',
    'contact.form.privacy.link':     'política de privacidad',
    'contact.form.privacy.post':     '. Los datos se usarán exclusivamente para responder a tu consulta.',
    'contact.form.submit':           'Enviar mensaje',
    'contact.form.ok':               'Mensaje enviado. Te responderemos lo antes posible.',
    'contact.form.error.pre':        'Ha habido un error. Inténtalo de nuevo o escríbenos directamente a',
    'contact.form.aria':             'Formulario de contacto',
    'contact.team.title':            'Equipo',
    'contact.team.aria':             'Equipo de Garabi Films',
    'contact.company.title':         'Productora',
    'contact.company.aria':          'Datos de la empresa',
    'contact.redes.aria':            'Redes sociales',

    /* Roles del equipo */
    'role.producer':       'Productora',
    'role.director':       'Director y Guionista',

    /* Fichas de película (peliculas/*.html) */
    'film.breadcrumb.aria':   'Ruta de navegación',
    'film.breadcrumb.back':   '← Catálogo',
    'film.prefix':            'Una película de',
    'film.hero.aria':         'Imagen principal de la obra',
    'film.synopsis':          'Sinopsis',
    'film.festivals':         'Festivales',
    'film.gallery':           'Galería',
    'film.gallery.aria':      'Galería de fotogramas',
    'film.trailer':           'Tráiler',
    'film.trailer.aria':      'Tráiler',
    'film.trailer.note':      'Tráiler oficial · Vimeo · 2026',
    'film.credits':           'Ficha técnica',
    'film.credits.aside.aria':'Ficha técnica y descargas',
    'film.credits.direction': 'Dirección',
    'film.credits.production':'Producción',
    'film.credits.script':    'Guión',
    'film.credits.photo':     'Fotografía',
    'film.credits.editing':   'Montaje',
    'film.credits.music':     'Música',
    'film.credits.duration':  'Duración',
    'film.credits.format':    'Formato',
    'film.credits.language':  'V.O.',
    'film.credits.year':      'Año',
    'film.downloads':         'Descargas',
    'film.downloads.aria':    'Materiales descargables',
    'film.downloads.images':  'Imágenes',
    'film.downloads.docs':    'Documentos',
    'film.downloads.audio':   'Audio',
    'film.downloads.poster':  'Poster HD',
    'film.downloads.poster.aria':   'Descargar poster en alta resolución',
    'film.downloads.frames':        'Fotogramas (ZIP)',
    'film.downloads.frames.aria':   'Descargar pack de fotogramas en ZIP',
    'film.downloads.pressbook':     'Pressbook PDF',
    'film.downloads.pressbook.aria':'Descargar pressbook en PDF',
    'film.downloads.festpdf':       'Lista festivales PDF',
    'film.downloads.festpdf.aria':  'Generar y descargar lista de festivales en PDF',
    'film.downloads.soundtrack':    'Banda sonora (MP3)',
    'film.downloads.soundtrack.aria':'Descargar banda sonora en MP3',

    /* Perfiles de equipo (equipo/*.html) */
    'profile.back':              '← Contacto',
    'profile.sup':               'Garabi Films · Equipo',
    'profile.filmography.title': 'Filmografía como',
    'profile.features':          'Largometrajes',
    'profile.shorts':            'Cortometrajes',
    'profile.series':            'Series de televisión',

    /* Footer */
    'footer.tagline':      'Productora audiovisual vasca fundada en 2022.',
    'footer.tagline.long': 'Productora audiovisual vasca fundada en 2022. Cine de autor desde el País Vasco.',
    'footer.follow':       'Síguenos',
    'footer.contact':      'Contacto',
    'footer.copyright':    '© 2026 Garabi Films S.L. Todos los derechos reservados.',
    'footer.credit':       'Diseño y desarrollo web',
    'footer.redes.aria':   'Redes sociales',
  },

  /* EUSKARA */
  eu: {

    /* Metadatuak */
    'meta.desc.home':      'Garabi Films — Euskal ikus-entzunezko ekoiztetxea. Egile zinema Euskal Herritik.',
    'meta.desc.films':     'Garabi Filmsen produkzioen katalogoa — Film luzeak, film laburrak eta serieak.',
    'meta.desc.contact':   'Jarri harremanetan Garabi Filmsekin — Euskal ikus-entzunezko ekoiztetxea. Donostia.',
    'meta.desc.film.cb':   'Caro Bastiano — Garabi Filmsen film luzea. 80 min · 2026. Sinopsia, fitxa teknikoa, galeria eta prentsarako materialak.',
    'meta.desc.film.aa':   'Azken Agurra — Garabi Filmsen film luzea. 90 min · 2026. Sinopsia, fitxa teknikoa, galeria eta prentsarako materialak.',
    'meta.desc.film.za':   'Zeru Ahoak — Garabi Filmsen seriea. 2025. Sinopsia, fitxa teknikoa, galeria eta prentsarako materialak.',
    'meta.desc.profile.mf':'Marian Fernández Pascal — Ekoizlea. Filmografia osoa. Garabi Films.',
    'meta.desc.profile.ka':'Koldo Almandoz — Zuzendaria eta Gidoigilea. Filmografia osoa. Garabi Films.',

    /* Orri-izenburuak  */
    'title.home':          'Garabi Films',
    'title.films':         'Filmak — Garabi Films',
    'title.contact':       'Kontaktua — Garabi Films',

    /* Nabigazio-barra */
    'nav.aria':            'Nabigazio nagusia',
    'nav.logo.aria':       'Garabi Films — Hasiera',
    'nav.lang.aria':       'Hizkuntza hautaketa',
    'nav.menu.aria':       'Nabigazio-menua',
    'nav.open.aria':       'Ireki menua',
    'nav.close.aria':      'Itxi menua',
    'nav.films':           'Filmak',
    'nav.contact':         'Kontaktua',

    /* Hero */
    'hero.label':          'Obra nabarmena',
    'hero.prefix':         'Zuzendaria:',
    'hero.cta':            'Ikusi fitxa',
    'hero.cta.aria':       'Fitxa osoa ikusi',
    'hero.scroll':         'Scroll',
    'hero.festivals.aria': 'Jaialdiak',

    /* Azken ekoizpenak */
    'home.latest.title':   'Azken ekoizpenak',
    'home.latest.all':     'Katalogo osoa ikusi →',
    'home.latest.aria':    'Azken ekoizpenak',

    /* Kategoriak */
    'cat.feature':         'Film luzea',
    'cat.short':           'Film laburra',
    'cat.series':          'Seriea',

    /* Katalogoa */
    'catalog.sup':         'Garabi Films',
    'catalog.title':       'Katalogoa',
    'catalog.subtitle':    'Film luzeak, laburrak eta serieak 2022tik aurrera ekoiztuta.',
    'catalog.filter.aria': 'Katalogoa iragazte',
    'catalog.filter.cats': 'Kategoriak',
    'filter.all':          'Denak',
    'filter.features':     'Film luzeak',
    'filter.shorts':       'Film laburrak',
    'filter.series':       'Serieak',
    'catalog.count':       'ekoizpen',

    /* Kontaktua */
    'contact.sup':                   'Garabi Films',
    'contact.title':                 'Kontaktua',
    'contact.subtitle':              'Proiektuetarako, prentsarako, banaketarako edo edozein kontsultarako.',
    'contact.form.title':            'Idatzi iezaguzu',
    'contact.form.name.label':       'Izena',
    'contact.form.name.placeholder': 'Zure izen-abizenak',
    'contact.form.email.placeholder':'zure@emaila.com',
    'contact.form.subject.label':    'Gaia',
    'contact.form.subject.default':  'Hautatu gai bat',
    'contact.form.subject.press':    'Prentsa eta hedabideak',
    'contact.form.subject.distrib':  'Banaketa',
    'contact.form.subject.coprod':   'Koprodukzioa',
    'contact.form.subject.fest':     'Jaialdiak',
    'contact.form.subject.other':    'Beste bat',
    'contact.form.message.label':    'Mezua',
    'contact.form.message.placeholder':'Esan iezaguzu nola lagun zaitzakegun...',
    'contact.form.privacy.pre':      'Irakurri eta onartzen dut',
    'contact.form.privacy.link':     'pribatutasun politika',
    'contact.form.privacy.post':     '. Datuak zure kontsultari erantzuteko soilik erabiliko dira.',
    'contact.form.submit':           'Mezua bidali',
    'contact.form.ok':               'Mezua bidali da. Ahalik eta lasterren erantzungo dizugu.',
    'contact.form.error.pre':        'Errore bat gertatu da. Saiatu berriro edo idatzi zuzenean',
    'contact.form.aria':             'Harremanetan jartzeko formularioa',
    'contact.team.title':            'Taldea',
    'contact.team.aria':             'Garabi Filmsen taldea',
    'contact.company.title':         'Ekoiztetxea',
    'contact.company.aria':          'Enpresaren datuak',
    'contact.redes.aria':            'Sare sozialak',

    /* Taldeko rolak */
    'role.producer':       'Ekoizlea',
    'role.director':       'Zuzendaria eta Gidoigilea',

    /* Film fitxak */
    'film.breadcrumb.aria':   'Nabigazioa',
    'film.breadcrumb.back':   '← Katalogoa',
    'film.prefix':            'Zuzendaria:',
    'film.hero.aria':         'Lanaren irudi nagusia',
    'film.synopsis':          'Sinopsia',
    'film.festivals':         'Jaialdiak',
    'film.gallery':           'Galeria',
    'film.gallery.aria':      'Fotogramen galeria',
    'film.trailer':           'Trailerra',
    'film.trailer.aria':      'Trailerra',
    'film.trailer.note':      'Trailer ofiziala · Vimeo · 2026',
    'film.credits':           'Fitxa teknikoa',
    'film.credits.aside.aria':'Fitxa teknikoa eta deskargak',
    'film.credits.direction': 'Zuzendaritza',
    'film.credits.production':'Ekoizpena',
    'film.credits.script':    'Gidoia',
    'film.credits.photo':     'Argazkigintza',
    'film.credits.editing':   'Muntaketa',
    'film.credits.music':     'Musika',
    'film.credits.duration':  'Iraupena',
    'film.credits.format':    'Formatua',
    'film.credits.language':  'J.H.',
    'film.credits.year':      'Urtea',
    'film.downloads':         'Deskargak',
    'film.downloads.aria':    'Deskargatzeko materialak',
    'film.downloads.images':  'Irudiak',
    'film.downloads.docs':    'Dokumentuak',
    'film.downloads.audio':   'Audioa',
    'film.downloads.poster':  'Poster HD',
    'film.downloads.poster.aria':   'Poster bereizmena handian deskargatu',
    'film.downloads.frames':        'Fotogramak (ZIP)',
    'film.downloads.frames.aria':   'Fotogramen paketea ZIP formatuan deskargatu',
    'film.downloads.pressbook':     'Pressbook PDF',
    'film.downloads.pressbook.aria':'Pressbooka PDF formatuan deskargatu',
    'film.downloads.festpdf':       'Jaialdien zerrenda PDF',
    'film.downloads.festpdf.aria':  'Jaialdien zerrenda PDF formatuan sortu eta deskargatu',
    'film.downloads.soundtrack':    'Soinu-banda (MP3)',
    'film.downloads.soundtrack.aria':'Soinu-banda MP3 formatuan deskargatu',

    /* Talde profileak */
    'profile.back':              '← Kontaktua',
    'profile.sup':               'Garabi Films · Taldea',
    'profile.filmography.title': 'Filmografia honetan:',
    'profile.features':          'Film luzeak',
    'profile.shorts':            'Film laburrak',
    'profile.series':            'Telebista-serieak',

    /* Oina */
    'footer.tagline':      '2022an sortutako euskal ikus-entzunezko ekoiztetxea.',
    'footer.tagline.long': '2022an sortutako euskal ikus-entzunezko ekoiztetxea. Egile zinema Euskal Herritik.',
    'footer.follow':       'Jarraitu',
    'footer.contact':      'Kontaktua',
    'footer.copyright':    '© 2026 Garabi Films S.L. Eskubide guztiak erreserbatuta.',
    'footer.credit':       'Web diseinua eta garapena',
    'footer.redes.aria':   'Sare sozialak',
  },

  /*  ENGLISH  */
  en: {

    /* Page metadata */
    'meta.desc.home':      'Garabi Films — Basque audiovisual production company. Auteur cinema from the Basque Country.',
    'meta.desc.films':     'Garabi Films catalogue — Feature films, short films and series.',
    'meta.desc.contact':   'Contact Garabi Films — Basque audiovisual production company. Donostia-San Sebastián.',
    'meta.desc.film.cb':   'Caro Bastiano — Feature film by Garabi Films. 80 min · 2026. Synopsis, credits, gallery and press materials.',
    'meta.desc.film.aa':   'Azken Agurra — Feature film by Garabi Films. 90 min · 2026. Synopsis, credits, gallery and press materials.',
    'meta.desc.film.za':   'Zeru Ahoak — Series by Garabi Films. 2025. Synopsis, credits, gallery and press materials.',
    'meta.desc.profile.mf':'Marian Fernández Pascal — Producer. Full filmography. Garabi Films.',
    'meta.desc.profile.ka':'Koldo Almandoz — Director & Screenwriter. Full filmography. Garabi Films.',

    /* Page titles */
    'title.home':          'Garabi Films',
    'title.films':         'Films — Garabi Films',
    'title.contact':       'Contact — Garabi Films',

    /* Navbar */
    'nav.aria':            'Main navigation',
    'nav.logo.aria':       'Garabi Films — Home',
    'nav.lang.aria':       'Language selection',
    'nav.menu.aria':       'Navigation menu',
    'nav.open.aria':       'Open menu',
    'nav.close.aria':      'Close menu',
    'nav.films':           'Films',
    'nav.contact':         'Contact',

    /* Hero */
    'hero.label':          'Featured work',
    'hero.prefix':         'A film by',
    'hero.cta':            'View details',
    'hero.cta.aria':       'View full details',
    'hero.scroll':         'Scroll',
    'hero.festivals.aria': 'Festivals',

    /* Latest productions */
    'home.latest.title':   'Latest productions',
    'home.latest.all':     'View full catalogue →',
    'home.latest.aria':    'Latest productions',

    /* Categories */
    'cat.feature':         'Feature film',
    'cat.short':           'Short film',
    'cat.series':          'Series',

    /* Catalogue */
    'catalog.sup':         'Garabi Films',
    'catalog.title':       'Catalogue',
    'catalog.subtitle':    'Feature films, short films and series produced since 2022.',
    'catalog.filter.aria': 'Filter catalogue',
    'catalog.filter.cats': 'Categories',
    'filter.all':          'All',
    'filter.features':     'Feature films',
    'filter.shorts':       'Short films',
    'filter.series':       'Series',
    'catalog.count':       'productions',

    /* Contact */
    'contact.sup':                   'Garabi Films',
    'contact.title':                 'Contact',
    'contact.subtitle':              'For projects, press, distribution or any enquiry.',
    'contact.form.title':            'Write to us',
    'contact.form.name.label':       'Name',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email.placeholder':'your@email.com',
    'contact.form.subject.label':    'Subject',
    'contact.form.subject.default':  'Select a subject',
    'contact.form.subject.press':    'Press & media',
    'contact.form.subject.distrib':  'Distribution',
    'contact.form.subject.coprod':   'Co-production',
    'contact.form.subject.fest':     'Festivals',
    'contact.form.subject.other':    'Other',
    'contact.form.message.label':    'Message',
    'contact.form.message.placeholder':'Tell us how we can help you...',
    'contact.form.privacy.pre':      'I have read and accept the',
    'contact.form.privacy.link':     'privacy policy',
    'contact.form.privacy.post':     '. Data will be used solely to respond to your enquiry.',
    'contact.form.submit':           'Send message',
    'contact.form.ok':               'Message sent. We will get back to you as soon as possible.',
    'contact.form.error.pre':        'An error occurred. Please try again or write to us directly at',
    'contact.form.aria':             'Contact form',
    'contact.team.title':            'Team',
    'contact.team.aria':             'Garabi Films team',
    'contact.company.title':         'Production company',
    'contact.company.aria':          'Company details',
    'contact.redes.aria':            'Social media',

    /* Team roles */
    'role.producer':       'Producer',
    'role.director':       'Director & Screenwriter',

    /* Film detail pages */
    'film.breadcrumb.aria':   'Breadcrumb navigation',
    'film.breadcrumb.back':   '← Catalogue',
    'film.prefix':            'A film by',
    'film.hero.aria':         'Main image of the work',
    'film.synopsis':          'Synopsis',
    'film.festivals':         'Festivals',
    'film.gallery':           'Gallery',
    'film.gallery.aria':      'Film stills gallery',
    'film.trailer':           'Trailer',
    'film.trailer.aria':      'Trailer',
    'film.trailer.note':      'Official trailer · Vimeo · 2026',
    'film.credits':           'Credits',
    'film.credits.aside.aria':'Credits and downloads',
    'film.credits.direction': 'Direction',
    'film.credits.production':'Production',
    'film.credits.script':    'Screenplay',
    'film.credits.photo':     'Cinematography',
    'film.credits.editing':   'Editing',
    'film.credits.music':     'Music',
    'film.credits.duration':  'Running time',
    'film.credits.format':    'Format',
    'film.credits.language':  'O.V.',
    'film.credits.year':      'Year',
    'film.downloads':         'Downloads',
    'film.downloads.aria':    'Downloadable materials',
    'film.downloads.images':  'Images',
    'film.downloads.docs':    'Documents',
    'film.downloads.audio':   'Audio',
    'film.downloads.poster':  'Poster HD',
    'film.downloads.poster.aria':   'Download high-resolution poster',
    'film.downloads.frames':        'Stills (ZIP)',
    'film.downloads.frames.aria':   'Download stills pack as ZIP',
    'film.downloads.pressbook':     'Press kit PDF',
    'film.downloads.pressbook.aria':'Download press kit as PDF',
    'film.downloads.festpdf':       'Festivals list PDF',
    'film.downloads.festpdf.aria':  'Generate and download festivals list as PDF',
    'film.downloads.soundtrack':    'Soundtrack (MP3)',
    'film.downloads.soundtrack.aria':'Download soundtrack as MP3',

    /* Team profiles */
    'profile.back':              '← Contact',
    'profile.sup':               'Garabi Films · Team',
    'profile.filmography.title': 'Filmography as',
    'profile.features':          'Feature films',
    'profile.shorts':            'Short films',
    'profile.series':            'Television series',

    /* Footer */
    'footer.tagline':      'Basque audiovisual production company founded in 2022.',
    'footer.tagline.long': 'Basque audiovisual production company founded in 2022. Auteur cinema from the Basque Country.',
    'footer.follow':       'Follow us',
    'footer.contact':      'Contact',
    'footer.copyright':    '© 2026 Garabi Films S.L. All rights reserved.',
    'footer.credit':       'Web design and development',
    'footer.redes.aria':   'Social media',
  },
};

/* DETECCIÓN DE IDIOMA */
function detectLang() {
  const path = window.location.pathname;
  if (/\/eu(\/|$)/i.test(path)) return 'eu';
  if (/\/en(\/|$)/i.test(path)) return 'en';
  if (/\/es(\/|$)/i.test(path)) return 'es';
  return localStorage.getItem('garabiLang') || 'es';
}

/* MOTOR DE TRADUCCIÓN */

/** Devuelve la cadena para una clave, con fallback a ES y luego a la propia clave. */
function t(key, lang) {
  const l = lang || window.i18n?.lang || 'es';
  return translations[l]?.[key] ?? translations['es']?.[key] ?? key;
}

/** Aplica todas las traducciones al DOM. */
function applyTranslations(lang) {
  const dict = translations[lang] || translations['es'];

  /* 1. Texto interior: <el data-i18n="clave"> */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = dict[el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  /* 2. HTML interior: <el data-i18n-html="clave"> (para nodos con <a> embebidos) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = dict[el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });

  /* 3. Atributos: data-i18n-attr="placeholder:clave, aria-label:clave2" */
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(',').forEach(pair => {
      const [attr, key] = pair.trim().split(':');
      const val = dict[key?.trim()];
      if (attr && val !== undefined) el.setAttribute(attr.trim(), val);
    });
  });

  /* 4. <title> */
  const titleKey = document.documentElement.dataset.i18nTitle;
  if (titleKey && dict[titleKey]) document.title = dict[titleKey];

  /* 5. <html lang=""> */
  document.documentElement.lang = lang;

  /* 6. <meta name="description"> */
  const metaKey = document.documentElement.dataset.i18nMeta;
  const metaEl  = document.querySelector('meta[name="description"]');
  if (metaKey && metaEl && dict[metaKey]) metaEl.content = dict[metaKey];

  /* 7. Guarda preferencia */
  localStorage.setItem('garabiLang', lang);
}

/* SELECTOR DE IDIOMA EN NAVBAR */

/** Marca el enlace de idioma activo y elimina la marca de los demás. */
function highlightActiveLang(lang) {
  document.querySelectorAll('.navbar__idioma').forEach(el => {
    const elLang = el.dataset.lang || el.getAttribute('hreflang') || el.getAttribute('lang');
    const isActive = elLang === lang;
    el.classList.toggle('activo', isActive);
    if (isActive) {
      el.setAttribute('aria-current', 'true');
    } else {
      el.removeAttribute('aria-current');
    }
  });
}

/* API PÚBLICA — cambio de idioma en caliente (uso SPA) */
function switchLang(lang) {
  if (!translations[lang]) {
    console.warn(`[i18n] Idioma no soportado: "${lang}". Opciones: es, eu, en.`);
    return;
  }
  window.i18n.lang = lang;
  applyTranslations(lang);
  highlightActiveLang(lang);
}

/* INICIALIZACIÓN */
(function init() {
  const lang = detectLang();

  /* Expone la API antes de que cualquier script externo pueda llamarla */
  window.i18n = { t, lang, switchLang, detectLang, translations };

  function run() {
    applyTranslations(lang);
    highlightActiveLang(lang);
    window.i18n.lang = lang;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
