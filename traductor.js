const languageSelect = document.querySelector("#site-language");
const languagePreferenceKey = "portfolio-language";
const translations = {
  en: {
    "Idioma del sitio": "Site language",
    "Retrato de Federico Insausti": "Portrait of Federico Insausti",
    "SOBRE MÍ": "ABOUT ME",
    "PORFOLIO": "PORTFOLIO",
    "CONTACTO": "CONTACT",
    "Diseñador": "Designer",
    "DISE": "DESI",
    "ÑA": "GN",
    "DOR": "ER",
    "Soy diseñador gráfico enfocado en la creación de piezas visuales, identidad gráfica y comunicación visual.": "I am a graphic designer focused on creating visual work, brand identities, and visual communication.",
    "En este portfolio presento algunos de mis proyectos académicos y profesionales, explorando diferentes áreas del diseño y buscando soluciones visuales claras, funcionales y creativas.": "This portfolio presents some of my academic and professional projects. They explore different areas of design and seek clear, functional, and creative visual solutions.",
    "Hola, soy Federico": "Hi, I'm Federico",
    "Estudiante de la carrera de «Diseño y Comunicación Visual» de la Universidad Nacional de Lanús.": "Student of the Visual Design and Communication program at the National University of Lanús.",
    "En estos años de carrera, me profesionalice en las distintas áreas, tales como: Composición y maquetado de piezas, elección y edición tipográfica, Ilustración, aplicaciones gráficas, procesos de imprenta, modelado y impresión 3D.": "Throughout my studies, I have developed skills in composition and layout, type selection and editing, illustration, graphic applications, print production, and 3D modeling and printing.",
    "CLIENTES": "CLIENTS",
    "Ver el trabajo de Mi Mejor Receta en el porfolio": "View Mi Mejor Receta's work in the portfolio",
    "Mi Mejor Receta Alfajores": "Mi Mejor Receta alfajores",
    "Gabriel Car Detailing": "Gabriel Car Detailing",
    "Geografica Imprenta y Carteleria": "Geografica Printing and Signage",
    "PROYECTOS DESTACADOS": "FEATURED PROJECTS",
    "Logotipo de Mi Mejor Receta para su línea de alfajores": "Mi Mejor Receta logo for its alfajor line",
    "Diseño de cajas de alfajores Mi Mejor Receta": "Mi Mejor Receta alfajor box design",
    "Diseño del envoltorio de un alfajor Mi Mejor Receta": "Mi Mejor Receta alfajor wrapper design",
    "Banner vertical de Mi Mejor Receta": "Mi Mejor Receta vertical banner",
    "Diseño de envoltorio Alfajor Block": "Alfajor Block wrapper design",
    "Diseño de envoltorio de alfajor con cerveza": "Beer-flavored alfajor wrapper design",
    "Diseño de envoltorio Alfajor Argento": "Alfajor Argento wrapper design",
    "Diseño de envoltorio de alfajor Malvec": "Malvec alfajor wrapper design",
    "Diseño de envoltorio de alfajor sabor café": "Coffee-flavored alfajor wrapper design",
    "Diseño de página para el catálogo de Mi Mejor Receta": "Mi Mejor Receta catalog page design",
    "Segunda página del catálogo de Mi Mejor Receta": "Second page of the Mi Mejor Receta catalog",
    "Tercera página del catálogo de Mi Mejor Receta": "Third page of the Mi Mejor Receta catalog",
    "Diseño web y comunicación digital para Mi Mejor Receta: la identidad amarilla y negra conecta la tienda con el universo visual de la marca.": "Web design and digital communication for Mi Mejor Receta: its yellow-and-black identity connects the store to the brand's visual world.",
    "Las páginas presentan el catálogo de productos y sus variedades con una grilla clara, fotografías protagonistas y una navegación directa.": "The pages present the product catalog and its varieties through a clear grid, prominent photography, and straightforward navigation.",
    "Tu navegador no soporta la reproducción de video.": "Your browser does not support video playback.",
    "LIBRO INTERACTIVO": "INTERACTIVE BOOK",
    "Visor del libro": "Book viewer",
    "Página anterior": "Previous page",
    "Anterior": "Previous",
    "Página siguiente": "Next page",
    "Siguiente": "Next",
    "Cargando libro…": "Loading book…",
    "Siguiente página": "Next page",
    "No se pudo mostrar esta página del PDF.": "This PDF page could not be displayed.",
    "No se pudo cargar el visor de PDF.": "The PDF viewer could not be loaded.",
    "Comprueba tu conexión a internet para cargar el visor.": "Check your internet connection to load the viewer.",
    "No se pudo cargar el libro.": "The book could not be loaded.",
    "Abriste el HTML directamente desde el disco. Chrome puede bloquear el acceso al PDF; inicia el sitio con Live Server y conserva el archivo": "You opened the HTML file directly from disk. Chrome may block access to the PDF; start the site with Live Server and keep the file",
    "No se pudo acceder al PDF. Comprueba que el sitio incluya el archivo": "The PDF could not be accessed. Make sure the site includes the file",
    "y vuelve a cargar la página.": "and reload the page.",
    "Primera pieza editorial de Jambao: diseño de portada": "First Jambao editorial piece: cover design",
    "“Se parece más a ti” es una propuesta editorial para Jambao. La paleta celeste y negra y las ilustraciones de rostros le dan una identidad cercana y reconocible.": "“It looks more like you” is an editorial concept for Jambao. Its light-blue and black palette and face illustrations create a familiar, distinctive identity.",
    "La portada y las páginas interiores combinan tipografía, ilustración y bloques de color para construir un recorrido visual coherente.": "The cover and inside pages combine typography, illustration, and blocks of color to create a cohesive visual journey.",
    "Diseño editorial de Jambao, pieza horizontal": "Jambao editorial design, horizontal piece",
    "En estas piezas editoriales de Jambao, el sistema gráfico se adapta a distintos formatos sin perder la paleta celeste, negra y blanca ni el estilo de las ilustraciones.": "In these Jambao editorial pieces, the graphic system adapts to different formats while retaining its light-blue, black, and white palette and illustration style.",
    "La composición alterna texto e imagen para mantener el ritmo de lectura y reforzar el concepto de la publicación.": "The composition alternates text and image to maintain reading flow and reinforce the publication's concept.",
    "Diseño editorial de Jambao, segunda pieza horizontal": "Jambao editorial design, second horizontal piece",
    "Pieza editorial de Jambao, formato vertical": "Jambao editorial piece, vertical format",
    "Segunda pieza editorial de Jambao, formato vertical": "Second Jambao editorial piece, vertical format",
    "TRABAJEMOS JUNTOS": "LET'S WORK TOGETHER",
    "Nombre de la empresa": "Company name",
    "Persona de contacto": "Contact person",
    "Correo electrónico": "Email address",
    "Teléfono": "Phone",
    "Fecha de inicio estimada": "Estimated start date",
    "Objetivos del proyecto": "Project goals",
    "Archivos de marca o brief": "Brand assets or brief",
    "Enviar formulario": "Send inquiry",
    "contacto": "contact",
    "Portfolio Federico Insausti": "Federico Insausti Portfolio",
    "Insausti Federico — Porfolio": "Insausti Federico — Portfolio",
    "Insausti Federico - Contacto": "Insausti Federico - Contact",
    "SITE CONTENT INSAUSTI FEDERICO ALL RIGHTS RESERVED": "SITE CONTENT INSAUSTI FEDERICO ALL RIGHTS RESERVED"
  },
  fr: {
    "Idioma del sitio": "Langue du site",
    "Retrato de Federico Insausti": "Portrait de Federico Insausti",
    "SOBRE MÍ": "À PROPOS",
    "PORFOLIO": "PORTFOLIO",
    "CONTACTO": "CONTACT",
    "Diseñador": "Designer",
    "DISE": "DESI",
    "ÑA": "GN",
    "DOR": "ER",
    "Soy diseñador gráfico enfocado en la creación de piezas visuales, identidad gráfica y comunicación visual.": "Je suis graphiste, spécialisé dans la création de supports visuels, d'identités de marque et de communication visuelle.",
    "En este portfolio presento algunos de mis proyectos académicos y profesionales, explorando diferentes áreas del diseño y buscando soluciones visuales claras, funcionales y creativas.": "Ce portfolio présente quelques-uns de mes projets universitaires et professionnels. Ils explorent différents domaines du design et proposent des solutions visuelles claires, fonctionnelles et créatives.",
    "Hola, soy Federico": "Bonjour, je suis Federico",
    "Estudiante de la carrera de «Diseño y Comunicación Visual» de la Universidad Nacional de Lanús.": "Étudiant en design et communication visuelle à l'Université nationale de Lanús.",
    "En estos años de carrera, me profesionalice en las distintas áreas, tales como: Composición y maquetado de piezas, elección y edición tipográfica, Ilustración, aplicaciones gráficas, procesos de imprenta, modelado y impresión 3D.": "Au fil de mes études, j'ai développé des compétences en composition et mise en page, choix et édition typographiques, illustration, applications graphiques, procédés d'impression, modélisation et impression 3D.",
    "CLIENTES": "CLIENTS",
    "Ver el trabajo de Mi Mejor Receta en el porfolio": "Voir le travail de Mi Mejor Receta dans le portfolio",
    "Mi Mejor Receta Alfajores": "Les alfajores de Mi Mejor Receta",
    "Gabriel Car Detailing": "Gabriel Car Detailing",
    "Geografica Imprenta y Carteleria": "Geografica Imprimerie et Signalétique",
    "PROYECTOS DESTACADOS": "PROJETS À LA UNE",
    "Logotipo de Mi Mejor Receta para su línea de alfajores": "Logo de Mi Mejor Receta pour sa gamme d'alfajores",
    "Diseño de cajas de alfajores Mi Mejor Receta": "Conception des boîtes d'alfajores Mi Mejor Receta",
    "Diseño del envoltorio de un alfajor Mi Mejor Receta": "Conception de l'emballage d'un alfajor Mi Mejor Receta",
    "Banner vertical de Mi Mejor Receta": "Bannière verticale de Mi Mejor Receta",
    "Diseño de envoltorio Alfajor Block": "Conception de l'emballage Alfajor Block",
    "Diseño de envoltorio de alfajor con cerveza": "Conception de l'emballage d'un alfajor à la bière",
    "Diseño de envoltorio Alfajor Argento": "Conception de l'emballage Alfajor Argento",
    "Diseño de envoltorio de alfajor Malvec": "Conception de l'emballage de l'alfajor Malvec",
    "Diseño de envoltorio de alfajor sabor café": "Conception de l'emballage d'un alfajor au café",
    "Diseño de página para el catálogo de Mi Mejor Receta": "Conception d'une page du catalogue Mi Mejor Receta",
    "Segunda página del catálogo de Mi Mejor Receta": "Deuxième page du catalogue Mi Mejor Receta",
    "Tercera página del catálogo de Mi Mejor Receta": "Troisième page du catalogue Mi Mejor Receta",
    "Diseño web y comunicación digital para Mi Mejor Receta: la identidad amarilla y negra conecta la tienda con el universo visual de la marca.": "Site web et communication numérique pour Mi Mejor Receta : l'identité jaune et noire relie la boutique à l'univers visuel de la marque.",
    "Las páginas presentan el catálogo de productos y sus variedades con una grilla clara, fotografías protagonistas y una navegación directa.": "Les pages présentent le catalogue et ses différentes variétés à l'aide d'une grille claire, de photographies mises en valeur et d'une navigation directe.",
    "Tu navegador no soporta la reproducción de video.": "Votre navigateur ne prend pas en charge la lecture vidéo.",
    "LIBRO INTERACTIVO": "LIVRE INTERACTIF",
    "Visor del libro": "Lecteur du livre",
    "Página anterior": "Page précédente",
    "Anterior": "Précédent",
    "Página siguiente": "Page suivante",
    "Siguiente": "Suivant",
    "Cargando libro…": "Chargement du livre…",
    "Siguiente página": "Page suivante",
    "No se pudo mostrar esta página del PDF.": "Impossible d'afficher cette page du PDF.",
    "No se pudo cargar el visor de PDF.": "Impossible de charger le lecteur PDF.",
    "Comprueba tu conexión a internet para cargar el visor.": "Vérifiez votre connexion Internet pour charger le lecteur.",
    "No se pudo cargar el libro.": "Impossible de charger le livre.",
    "Abriste el HTML directamente desde el disco. Chrome puede bloquear el acceso al PDF; inicia el sitio con Live Server y conserva el archivo": "Vous avez ouvert le fichier HTML directement depuis le disque. Chrome peut bloquer l'accès au PDF ; lancez le site avec Live Server et conservez le fichier",
    "No se pudo acceder al PDF. Comprueba que el sitio incluya el archivo": "Impossible d'accéder au PDF. Vérifiez que le site contient le fichier",
    "y vuelve a cargar la página.": "puis rechargez la page.",
    "Primera pieza editorial de Jambao: diseño de portada": "Première création éditoriale pour Jambao : conception de couverture",
    "“Se parece más a ti” es una propuesta editorial para Jambao. La paleta celeste y negra y las ilustraciones de rostros le dan una identidad cercana y reconocible.": "« Il vous ressemble davantage » est un projet éditorial pour Jambao. Sa palette bleu ciel et noire et ses illustrations de visages lui donnent une identité familière et reconnaissable.",
    "La portada y las páginas interiores combinan tipografía, ilustración y bloques de color para construir un recorrido visual coherente.": "La couverture et les pages intérieures associent typographie, illustration et aplats de couleur pour créer un parcours visuel cohérent.",
    "Diseño editorial de Jambao, pieza horizontal": "Création éditoriale pour Jambao, format horizontal",
    "En estas piezas editoriales de Jambao, el sistema gráfico se adapta a distintos formatos sin perder la paleta celeste, negra y blanca ni el estilo de las ilustraciones.": "Dans ces créations éditoriales pour Jambao, le système graphique s'adapte à différents formats tout en conservant sa palette bleu ciel, noire et blanche ainsi que le style des illustrations.",
    "La composición alterna texto e imagen para mantener el ritmo de lectura y reforzar el concepto de la publicación.": "La composition alterne texte et image afin de maintenir le rythme de lecture et de renforcer le concept de la publication.",
    "Diseño editorial de Jambao, segunda pieza horizontal": "Création éditoriale pour Jambao, deuxième format horizontal",
    "Pieza editorial de Jambao, formato vertical": "Création éditoriale pour Jambao, format vertical",
    "Segunda pieza editorial de Jambao, formato vertical": "Deuxième création éditoriale pour Jambao, format vertical",
    "TRABAJEMOS JUNTOS": "TRAVAILLONS ENSEMBLE",
    "Nombre de la empresa": "Nom de l'entreprise",
    "Persona de contacto": "Personne à contacter",
    "Correo electrónico": "Adresse e-mail",
    "Teléfono": "Téléphone",
    "Fecha de inicio estimada": "Date de début prévue",
    "Objetivos del proyecto": "Objectifs du projet",
    "Archivos de marca o brief": "Éléments de marque ou brief",
    "Enviar formulario": "Envoyer la demande",
    "contacto": "contact",
    "Portfolio Federico Insausti": "Portfolio de Federico Insausti",
    "Insausti Federico — Porfolio": "Insausti Federico — Portfolio",
    "Insausti Federico - Contacto": "Insausti Federico - Contact",
    "SITE CONTENT INSAUSTI FEDERICO ALL RIGHTS RESERVED": "CONTENU DU SITE INSAUSTI FEDERICO. TOUS DROITS RÉSERVÉS."
  }
};

if (!languageSelect) {
  console.error("No se encontró el selector de idioma del sitio.");
} else {
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const originalTitle = document.title;
  const localizableAttributes = ["alt", "aria-label", "title", "placeholder"];
  let currentLanguage = "es";

  function normalizeText(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function translateValue(value) {
    const normalized = normalizeText(value);
    const dictionary = translations[currentLanguage];

    if (dictionary && dictionary[normalized]) {
      return dictionary[normalized];
    }

    let match = normalized.match(/^Página (\d+) de (\d+)$/);
    if (match) {
      return currentLanguage === "en"
        ? `Page ${match[1]} of ${match[2]}`
        : `Page ${match[1]} sur ${match[2]}`;
    }

    match = normalized.match(/^Páginas (\d+)-(\d+) de (\d+)$/);
    if (match) {
      return currentLanguage === "en"
        ? `Pages ${match[1]}-${match[2]} of ${match[3]}`
        : `Pages ${match[1]}-${match[2]} sur ${match[3]}`;
    }

    return value;
  }

  function translateTextNode(node) {
    if (node.parentElement && node.parentElement.closest("script, style")) {
      return;
    }

    if (!originalText.has(node)) {
      originalText.set(node, node.nodeValue);
    }

    const source = originalText.get(node);
    if (!source.trim()) {
      return;
    }

    const leadingWhitespace = source.match(/^\s*/)[0];
    const trailingWhitespace = source.match(/\s*$/)[0];
    const translated = currentLanguage === "es" ? source.trim() : translateValue(source.trim());
    const nextValue = `${leadingWhitespace}${translated}${trailingWhitespace}`;

    if (node.nodeValue !== nextValue) {
      node.nodeValue = nextValue;
    }
  }

  function translateElement(element) {
    if (!originalAttributes.has(element)) {
      originalAttributes.set(element, {});
    }

    const sourceAttributes = originalAttributes.get(element);
    localizableAttributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) {
        return;
      }

      if (!(attribute in sourceAttributes)) {
        sourceAttributes[attribute] = element.getAttribute(attribute);
      }

      const source = sourceAttributes[attribute];
      const translated = currentLanguage === "es" ? source : translateValue(source);
      if (element.getAttribute(attribute) !== translated) {
        element.setAttribute(attribute, translated);
      }
    });

  }

  function translateSubtree(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      translateTextNode(node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      translateElement(node);
      const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
      let textNode = walker.nextNode();
      while (textNode) {
        translateTextNode(textNode);
        textNode = walker.nextNode();
      }
    }
  }

  function applyLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = language === "es" ? originalTitle : translateValue(originalTitle);

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      translateTextNode(node);
      node = walker.nextNode();
    }

    document.body.querySelectorAll("*").forEach(translateElement);
  }

  languageSelect.addEventListener("change", () => {
    const language = languageSelect.value;
    if (!["es", "en", "fr"].includes(language)) {
      console.error("El idioma seleccionado no es válido.");
      return;
    }

    currentLanguage = language;
    try {
      localStorage.setItem(languagePreferenceKey, language);
    } catch (error) {
      console.error("No se pudo guardar el idioma seleccionado.", error);
    }
    applyLanguage(language);
  });

  try {
    const savedLanguage = localStorage.getItem(languagePreferenceKey);
    if (savedLanguage && ["es", "en", "fr"].includes(savedLanguage)) {
      currentLanguage = savedLanguage;
      languageSelect.value = savedLanguage;
    }
  } catch (error) {
    console.error("No se pudo recuperar el idioma seleccionado.", error);
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "characterData") {
        translateTextNode(mutation.target);
        return;
      }

      mutation.addedNodes.forEach(translateSubtree);
    });
  });

  observer.observe(document.body, {
    childList: true,
    characterData: true,
    subtree: true
  });

  applyLanguage(currentLanguage);
}
