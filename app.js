const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

function closeMenu() {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  nav.classList.toggle('is-open', !open);
  menuButton.setAttribute('aria-expanded', String(!open));
});

nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

const guideContent = {
  apply: {
    title: 'Explore the application process',
    description: 'Check current openings and learn which program may fit. When you are ready, continue in the secure applicant portal.',
    link: 'https://www.rentcafe.com/onlineleasing/columbus-live/guestlogin.aspx',
    label: 'Open applicant portal'
  },
  port: {
    title: 'Learn about moving with a voucher',
    description: 'HACG explains voucher portability and its Moving to Work limits on the Section 8 page. Read the current guidance before planning a move.',
    link: 'https://columbushousing.org/housing-opportunities/section-8-assisted-housing/',
    label: 'Read HACG portability guidance'
  },
  transfer: {
    title: 'Ask about a resident transfer',
    description: 'Transfer policies depend on your housing program and circumstances. Start with HACG staff, who can explain the approved steps and required forms.',
    link: 'tel:+17065712800',
    label: 'Call HACG about transfers'
  }
};

const guideResult = document.querySelector('#guide-result');
document.querySelectorAll('[data-guide]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-guide]').forEach(item => {
      item.classList.toggle('is-selected', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    const data = guideContent[button.dataset.guide];
    const external = data.link.startsWith('https:');
    guideResult.innerHTML = `<span class="result-label">YOUR NEXT STEP</span><h4>${data.title}</h4><p>${data.description}</p><a href="${data.link}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>${data.label} ${external ? '<span class="external-note">(new tab)</span>' : ''} <span aria-hidden="true">↗</span></a>`;
  });
});

const searchItems = [
  {title: 'Housing applications and Section 8', terms: 'housing apply application section 8 hcv housing choice voucher', href: '#guide'},
  {title: 'Waiting list information', terms: 'waitlist waiting list open closed status', href: '#waitlists'},
  {title: 'Resident services and RentCafé', terms: 'resident rent tenant account portal rentcafe', href: '#resident-services'},
  {title: 'Landlord information', terms: 'landlord owner partner property voucher inspection', href: '#partner-services'},
  {title: 'Housing communities map', terms: 'community property properties apartments housing map', href: '#communities-map'},
  {title: 'Family Self-Sufficiency and Moving to Work', terms: 'fss mtw family self sufficiency moving to work resident program', href: '#about'},
  {title: 'Reports, board and agency resources', terms: 'form document policy pdf resource board leadership report procurement rfp', href: '#resources'},
  {title: 'Contact and accessibility help', terms: 'contact phone accessibility language help office', href: '#contact'}
];

const searchForm = document.querySelector('#site-search');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');

function showSearchResults() {
  const query = searchInput.value.toLowerCase().trim().replace(/[^a-z0-9\s]/g, ' ');
  const words = query.split(/\s+/).filter(Boolean);
  if (!words.length) {
    searchResults.hidden = false;
    searchResults.innerHTML = '<p>Enter a word or phrase to search this home page.</p>';
    searchInput.focus();
    return;
  }
  const matches = searchItems.filter(item => words.every(word => `${item.title} ${item.terms}`.toLowerCase().includes(word))).slice(0, 5);
  searchResults.hidden = false;
  searchResults.replaceChildren();
  const summary = document.createElement('p');
  summary.textContent = matches.length ? `${matches.length} suggested result${matches.length === 1 ? '' : 's'} on this home page` : 'No matching home page topics. Call HACG if you need help finding information.';
  searchResults.append(summary);
  matches.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.title;
    searchResults.append(link);
  });
}

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  showSearchResults();
});

searchInput.addEventListener('input', () => {
  if (searchInput.value.trim().length >= 2) showSearchResults();
  else {
    searchResults.hidden = true;
    searchResults.replaceChildren();
  }
});

const mapSearch = document.querySelector('#map-search');
const mapArea = document.querySelector('#map-area');
const mapBedrooms = document.querySelector('#map-bedrooms');
const mapAmenity = document.querySelector('#map-amenity');
const mapRows = [...document.querySelectorAll('.map-property-list li[data-property]')];
const mapPins = new Map([...document.querySelectorAll('.map-pin[data-property]')].map(pin => [pin.dataset.property, pin]));
const mapResultCount = document.querySelector('#map-results-count');
const mapEmpty = document.querySelector('#map-empty');

function normalizeMapText(value) {
  return value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g, '');
}

function filterMapProperties() {
  const words = mapSearch.value.trim().split(/\s+/).filter(Boolean).map(normalizeMapText);
  let count = 0;

  mapRows.forEach(row => {
    const searchable = normalizeMapText(row.textContent);
    const matchesSearch = words.every(word => searchable.includes(word));
    const matchesArea = !mapArea.value || row.dataset.area === mapArea.value;
    const matchesBedrooms = !mapBedrooms.value || row.dataset.bedrooms.split(' ').includes(mapBedrooms.value);
    const matchesAmenity = !mapAmenity.value || row.dataset.amenities.split(' ').includes(mapAmenity.value);
    const visible = matchesSearch && matchesArea && matchesBedrooms && matchesAmenity;

    row.hidden = !visible;
    mapPins.get(row.dataset.property).hidden = !visible;
    if (visible) count += 1;
  });

  mapResultCount.textContent = `${count} ${count === 1 ? 'community' : 'communities'} shown`;
  mapEmpty.hidden = count !== 0;
}

mapSearch.addEventListener('input', filterMapProperties);
[mapArea, mapBedrooms, mapAmenity].forEach(select => select.addEventListener('change', filterMapProperties));
document.querySelector('#map-clear').addEventListener('click', () => {
  mapSearch.value = '';
  mapArea.value = '';
  mapBedrooms.value = '';
  mapAmenity.value = '';
  filterMapProperties();
  mapSearch.focus();
});

document.querySelector('#year').textContent = new Date().getFullYear();
