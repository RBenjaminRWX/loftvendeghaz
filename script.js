const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const lightbox = document.querySelector('[data-lightbox-dialog]');
const lightboxImage = lightbox.querySelector('img');
const galleryDialog = document.querySelector('[data-gallery-dialog]');
const galleryGrid = document.querySelector('[data-gallery-grid]');
const galleryCount = document.querySelector('[data-gallery-count]');

const galleryPhotos = [
  ['BWS5725.jpg', 'interior'], ['BWS5733-HDR.jpg', 'interior'],
  ['BWS5737-HDR.jpg', 'interior'], ['BWS5745-HDR.jpg', 'interior'],
  ['BWS5751-HDR.jpg', 'interior'], ['BWS5767-HDR.jpg', 'interior'],
  ['BWS5774-HDR.jpg', 'interior'], ['BWS5777-HDR.jpg', 'interior'],
  ['BWS5785-HDR.jpg', 'interior'], ['BWS5809-HDR.jpg', 'interior'],
  ['BWS5821.jpg', 'interior'], ['BWS5832-HDR.jpg', 'interior'],
  ['BWS5840-HDR.jpg', 'interior'], ['BWS5868-HDR-1.jpg', 'interior'],
  ['BWS5893-HDR.jpg', 'interior'], ['BWS5896-HDR.jpg', 'interior'],
  ['BWS5899-HDR.jpg', 'interior'], ['BWS5902.jpg', 'interior'],
  ['BWS5915.jpg', 'interior'], ['BWS5924-HDR.jpg', 'interior'],
  ['BWS5937-HDR.jpg', 'interior'], ['BWS5945-HDR.jpg', 'interior'],
  ['BWS5947-HDR-Pano.jpg', 'interior panorama'],
  ['BWS5973-HDR.jpg', 'outdoor'], ['BWS5988-HDR.jpg', 'outdoor'],
  ['BWS6003-HDR.jpg', 'outdoor'], ['BWS6008-HDR.jpg', 'outdoor'],
  ['BWS6013-HDR.jpg', 'outdoor'], ['BWS6018-HDR.jpg', 'outdoor'],
  ['BWS6042-HDR.jpg', 'wellness'], ['BWS6057-HDR.jpg', 'wellness'],
  ['BWS6075-HDR.jpg', 'wellness'], ['BWS6081-HDR-Pano.jpg', 'wellness panorama'],
  ['BWS6093-HDR.jpg', 'wellness'],
  ['DJI_0089.jpg', 'outdoor panorama'], ['DJI_0108-Pano.jpg', 'outdoor panorama'],
  ['DJI_0172-HDR.jpg', 'wellness outdoor'], ['DJI_0247-HDR.jpg', 'outdoor panorama'],
  ['DJI_0276-HDR-Pano.jpg', 'outdoor panorama'], ['DJI_0298-HDR.jpg', 'outdoor panorama'],
  ['20260308_112011910_iOS.jpg', 'interior'], ['20260308_112015411_iOS.jpg', 'interior'],
  ['20260308_112022850_iOS.jpg', 'interior'], ['20260308_112027144_iOS.jpg', 'interior'],
  ['20260308_112031903_iOS.jpg', 'interior']
];

const translations = {
  'Ugrás a tartalomhoz': 'Skip to content',
  'Menü megnyitása': 'Open menu',
  'Vendégház · Varbó': 'Guesthouse · Varbó',
  'A ház': 'The house',
  'Galéria': 'Gallery',
  'Árak': 'Rates',
  'Helyszín': 'Location',
  'Foglalás': 'Booking',
  'Varbó · A Bükk lábánál': 'Varbó · At the foot of the Bükk',
  'Közel a természethez.': 'Close to nature.',
  'Közel egymáshoz.': 'Closer to each other.',
  'Egy teljes ház, privát wellness és zavartalan panoráma, legfeljebb 8 vendégnek.': 'An entire house, private wellness and uninterrupted views for up to 8 guests.',
  'Időpontot kérek': 'Check availability',
  'Fedezd fel a házat ': 'Discover the house ',
  ' vendég': ' guests',
  ' wellness élmény': ' wellness experiences',
  ' teljes ház': ' entire house',
  'Lassíts le': 'Slow down',
  'Hely, ahol a csendnek is tere van.': 'A place with room for silence.',
  'A Varbói Loft Vendégház a természet és a modern kényelem találkozása. Világos, karakteres terek, tóra néző terasz és egy kert, ami csak a tietek.': 'Loft Guesthouse brings nature and modern comfort together. Bright, distinctive interiors, a lake-view terrace and a garden that is entirely yours.',
  'Romantikus páros pihenéshez, családi kikapcsolódáshoz vagy baráti hétvégéhez. Aggtelek, Lillafüred, horgásztavak és a kéktúra útvonala is könnyen elérhető.': 'For a romantic escape, a family holiday or a weekend with friends. Aggtelek, Lillafüred, fishing lakes and the National Blue Trail are all within easy reach.',
  'Privát wellness': 'Private wellness',
  'Meleg víz. Hűvös levegő. Semmi sietség.': 'Warm water. Cool air. No hurry.',
  'A wellness élmény itt nem közös tér és nem időponthoz kötött program. A kert, a terasz és minden szolgáltatás kizárólag a vendégház lakóié.': 'Here, wellness is neither shared nor tied to a schedule. The garden, terrace and every amenity belong exclusively to the guests.',
  'Jakuzzi': 'Hot tub',
  'Panorámás terasz': 'Panoramic terrace',
  'Finn szauna': 'Finnish sauna',
  'Kerti pihenőtér': 'Garden relaxation area',
  'Fatüzelésű dézsa': 'Wood-fired hot tub',
  'Természetes élmény': 'A natural experience',
  'Nézz körül.': 'Take a look around.',
  'Mind a 45 fotó megtekintése': 'View all 45 photos',
  'Fotógaléria': 'Photo gallery',
  '45 fénykép': '45 photos',
  'Összes': 'All',
  'Beltér': 'Interior',
  'Kert': 'Garden',
  'Panoráma': 'Panorama',
  'Egyszerű, átlátható.': 'Simple and transparent.',
  '2 fő / éjszaka': '2 guests / night',
  '4 fő / éjszaka': '4 guests / night',
  'Teljes ház / éjszaka ': 'Entire house / night ',
  'maximum 8 fő': 'maximum 8 guests',
  'Finn szauna / nap': 'Finn sauna / day',
  'Fatüzelésű dézsa / alkalom': 'Wood-fired hot tub / session',
  'A szabad időpontokról és a tartózkodás részleteiről közvetlenül adunk tájékoztatást.': 'Contact us directly for available dates and details of your stay.',
  'Karnyújtásnyira a Bükk.': 'The Bükk within easy reach.',
  'A vendégház Varbón, a tó közelében található. Az útvonaltervezéshez nyisd meg a pontos címet a térképen.': 'The guesthouse is in Varbó, close to the lake. Open the exact address on the map to plan your route.',
  'Útvonaltervezés': 'Get directions',
  'A következő lassú reggel itt kezdődhet.': 'Your next slow morning could begin here.',
  'A 2026-os foglalási naptár nyitva. Írd meg az érkezés és távozás tervezett dátumát, vagy hívj minket.': 'Our 2026 booking calendar is open. Send us your planned arrival and departure dates, or call us.',
  'E-mailt írok': 'Send an email',
  'Stílusos pihenés': 'A stylish escape',
  'a Bükk lábánál.': 'at the foot of the Bükk.',
  'Látogass meg': 'Visit us',
  'Kapcsolat': 'Contact',
  'Kövess minket': 'Follow us'
};

const attributeTranslations = {
  'Loft Vendégház kezdőlap': 'Loft Guesthouse home',
  'Fő navigáció': 'Main navigation',
  'Nyelvválasztó': 'Language selector',
  'Főbb jellemzők': 'Key features',
  'Menü megnyitása': 'Open menu',
  'Képnézegető': 'Image viewer',
  'Bezárás': 'Close',
  'Teljes fotógaléria': 'Complete photo gallery',
  'Galéria szűrők': 'Gallery filters',
  'Galéria bezárása': 'Close gallery',
  'Loft Vendégház helye a térképen': 'Loft Guesthouse on the map'
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();

function translatePage(language) {
  const english = language === 'en';
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;

  while ((node = walker.nextNode())) {
    if (!node.textContent.trim()) continue;
    if (!originalText.has(node)) originalText.set(node, node.textContent);
    const source = originalText.get(node);
    node.textContent = english ? (translations[source] || source) : source;
  }

  document.querySelectorAll('[aria-label], [title], [alt]').forEach(element => {
    if (!originalAttributes.has(element)) {
      originalAttributes.set(element, {
        ariaLabel: element.getAttribute('aria-label'),
        title: element.getAttribute('title'),
        alt: element.getAttribute('alt')
      });
    }
    const originals = originalAttributes.get(element);
    for (const [property, attribute] of [['ariaLabel', 'aria-label'], ['title', 'title'], ['alt', 'alt']]) {
      const source = originals[property];
      if (source !== null) element.setAttribute(attribute, english ? (attributeTranslations[source] || source) : source);
    }
  });

  document.documentElement.lang = language;
  document.title = english ? 'Loft Guesthouse | Varbó' : 'Loft Vendégház | Varbó';
  document.querySelectorAll('a[href^="mailto:loftvarbo@gmail.com?subject="]').forEach(link => {
    link.href = english
      ? 'mailto:loftvarbo@gmail.com?subject=Booking%20enquiry%20-%20Loft%20Guesthouse'
      : 'mailto:loftvarbo@gmail.com?subject=Foglalási%20érdeklődés%20-%20Loft%20Vendégház';
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    const active = button.dataset.language === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  localStorage.setItem('loft-language', language);
}

function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
}

menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

nav.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => translatePage(button.dataset.language));
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

function openLightbox(source, alt = '') {
  lightboxImage.src = source;
  lightboxImage.alt = alt;
  lightbox.showModal();
}

document.querySelectorAll('[data-lightbox]').forEach(button => {
  button.addEventListener('click', () => {
    openLightbox(button.dataset.lightbox, button.querySelector('img').alt);
  });
});

function buildGallery() {
  if (galleryGrid.children.length) return;

  galleryPhotos.forEach(([file, categories], index) => {
    const button = document.createElement('button');
    const image = document.createElement('img');
    button.type = 'button';
    button.className = 'gallery-browser-item';
    button.dataset.categories = categories;
    button.setAttribute('aria-label', `${index + 1}. kép megnyitása`);
    image.src = `assets/gallery/${file}`;
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    button.append(image);
    button.addEventListener('click', () => openLightbox(image.src));
    galleryGrid.append(button);
  });
}

document.querySelector('[data-gallery-open]').addEventListener('click', () => {
  buildGallery();
  document.querySelectorAll('[data-filter]').forEach(button => {
    const active = button.dataset.filter === 'all';
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  galleryGrid.querySelectorAll('.gallery-browser-item').forEach(item => { item.hidden = false; });
  galleryCount.textContent = document.documentElement.lang === 'en' ? '45 photos' : '45 fénykép';
  galleryDialog.showModal();
});

document.querySelector('[data-gallery-close]').addEventListener('click', () => galleryDialog.close());

document.querySelector('[data-gallery-filters]').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  const filter = button.dataset.filter;
  let visible = 0;

  document.querySelectorAll('[data-filter]').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  galleryGrid.querySelectorAll('.gallery-browser-item').forEach(item => {
    const show = filter === 'all' || item.dataset.categories.split(' ').includes(filter);
    item.hidden = !show;
    if (show) visible += 1;
  });
  galleryCount.textContent = document.documentElement.lang === 'en' ? `${visible} photos` : `${visible} fénykép`;
});

lightbox.querySelector('[data-lightbox-close]').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) lightbox.close();
});

lightbox.addEventListener('close', () => {
  lightboxImage.removeAttribute('src');
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();
translatePage(localStorage.getItem('loft-language') === 'en' ? 'en' : 'hu');
