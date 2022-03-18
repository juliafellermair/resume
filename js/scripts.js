// Initiate i18n
// the default locale
// you can for example take it from the URL.
let locale = 'de';

// the translation data
// you can load/fetch these from files or keep them hardcoded.
let messages = {
	en: {
        language: "Englisch",
		about: {
            p1: 'Hello! My name is Julia Fellermair and I\'m a Food Technology student.',
            p2: 'I am always open to new challenges and am, more than anything else, interested in innovative and sustainable projects within the Food Technology and Beverage industries'
        },
	},
	de: {
        language: "Deutsch",
		about: {
            p1: 'Hallo! Mein Name ist Julia Fellermair und ich bin Studentin der Lebenmitteltechnologien.',
            p2: 'Ich bin offen für neue Herausforderungen und interessiere mich dabei vor allem für innovative und nachhaltige Projekte in der Lebensmittel- und Getränkeindustrie.',
        },
	},
	nl: {
        language: "Nederlands",
		about: {
            p1: 'Hallo! Mijn naam is Julia Fellermair ik ben een student Voedingsmiddelentechnologie',
            p2: 'Ik ben altijd open voor nieuwe uitdagingen en ben daarbij vooral geïnteresseerd in innovatieve en duurzame projecten in de Voedings- en Drank industrie.'
        },
	},
};

// finally, pass them to AlpineI18n:
document.addEventListener('alpine-i18n:ready', function () {	
    window.AlpineI18n.create(locale, messages);
});

// Initiate Navbar
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(navLink) {
    if (navLink.parentElement.classList.contains('dropdown')) {
        const navDropdownItems = navLink.parentElement.querySelectorAll('.dropdown-item');
        navDropdownItems.forEach(function(dropdownItem) {
            dropdownItem.addEventListener('click', hideNavbarCollapsible);
        });
    } else {
        navLink.addEventListener('click', hideNavbarCollapsible);
    }
});

function hideNavbarCollapsible() {
    const collapse = document.getElementById('navbarSupportedContent');
    const bsCollapse = bootstrap.Collapse.getInstance(collapse);
    if (bsCollapse) {
        bsCollapse.hide();
    }
}
