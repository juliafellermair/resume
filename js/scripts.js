// Initiate i18n
// the default locale
// you can for example take it from the URL.
let locale = 'de';

// the translation data
// you can load/fetch these from files or keep them hardcoded.
let messages = {
	en: {
        language: "Englisch",
        nav: {
            about: 'About me',
            experience: 'Experience',
            education: 'Education',
            skills: 'Skills',
            interests: 'Interests',
            awards: 'Awards',
        },
		about: {
            p1: 'Hello! My name is Julia Fellermair and I\'m a Food Technology student.',
            p2: 'I am always open to new challenges and am, more than anything else, interested in innovative and sustainable projects within the Food Technology and Beverage industries'
        },
        experience: {
            p1: {
                header: 'Projekt Management Assistant - Werkstudentin',
                sub: 'Krones AG - Werk Steinecker',
                text: 'Im Projektmanagement ist keine Anfrage wie die andere. Flexibilität ist besonders in schweren Zeiten sehr gefragt. Genau deshalb arbeiten wir im Team jeden Tag daran, Projekte sauber über die Bühne laufen zu lassen und den Kunden zufrieden zu stellen. Organisation ist dabei von höchster Bedeutung. Unterstützend nutze ich dafür die Unternehmenssoftware SAP und für den Überblick und die virtuelle Zusammenarbeit SharePoint von Microsoft Office.',
                date: 'April 2020 - Present',
            },
            p2: {
                header: 'Köchin',
                sub: 'KENNEDYS BAR',
                text: 'Um in der Küche für einen reibungsfreien Ablauf zu gewährleisten braucht es vor allem Organisationstalent und die Fähigkeit, zu jedem Zeitpunkt einen kühlen Kopf zu bewahren. Die Begeisterung für das Kochen, das Menschen mit Essen begeistern und die Freude am kreativen Anrichten ist mir geblieben.',
                date: 'Oktober 2018 - Mai 2019',
            },
            p3: {
                header: 'Verkäuferin Einzelhandel',
                sub: 'Hunkemöller',
                text: 'Durch das Arbeiten im Verkauf wurde meine Menschenkenntnis geschult und ich konnte in der Praxis umsetzen, was ich in Workshops über Überzugungskraft gelernt habe. Meine individuelle und kreative Beratung ist es, was die Kunden an mir zu schätzen wussten.',
                date: 'Februar 2018 - Juli 2018',
            },
            p4: {
                header: 'Service',
                sub: 'Pianka Service GmbH',
                text: 'In meinem erster Job im Gastgewerbe habe ich vieles über das Arbeitsleben gelernt: Die Bedeutung von Kommunikation, eingespielter Teamarbeit und Lösungsorientierung.',
                date: 'Oktober 2015 - Februar 2018',
            },
        },
        education: {
            p1: {
                header: 'Hochschule Weihenstephan-Triesdorf',
                sub: 'Lebenmitteltechnologie',
                type: 'Bachelor of Science',
                note: 'derzeitiger Notendurchschnitt: 1,67',
                date: 'Oktober 2018 - Present',
            },
            p2: {
                header: 'Häme University of Applied Sciences - Finnland',
                sub: 'Biotechnology and Food Engineering',
                type: 'ERASMUS +',
                note: 'Notendurchschnitt: 1,0',
                info1: 'Teilnahme an Forschungsprojekt "Biochar Production"',
                info2: '3. Platz in Hackathon Wettbewerb',
                info3: 'Sustainable Bioeconomy',
                date: 'August 2019 - Dezember 2019',
            },
            p3: {
                header: 'Technische Universität München',
                sub: 'Umweltingenieurwesen',
                type: 'Bachlor of Science',
                date: 'Oktober 2017 - August 2018',
            },
            p4: {
                header: 'Anne-Frank-Gymnasium Erding',
                sub: 'allgemeine Hochschulreife (Abitur)',
                note: 'NC: 1,8',
                date: 'September2009 - Juli 2017',
            },
        },
        skills: {
            header: 'Kenntnisse und Fähigkeiten',
            it: {
                header: 'EDV-Kenntnisse',
            },
            lang: {
                header: 'Sprachen',
                lang1: 'B2+/C1 - Verhandlungssicher',
                lang2: 'Italienisch A2 - Grundlegende Kenntnisse',
            },
            skills: {
                header: 'Fähigkeiten',
                skill1: 'Projektmanagement',
                skill2: 'Innovatives Mindset',
                skill3: 'Analytisches Denken',
                skill4: 'Interkulturelle Kommunikation',
            },
        },
	},
	de: {
        language: "Deutsch",
        nav: {
            about: 'Über Mich',
            experience: 'Erfahrung',
            education: 'Bildung',
            skills: 'Kenntnisse',
            interests: 'Interessen',
            awards: 'Auszeichnungen',
        },
		about: {
            p1: 'Hallo! Mein Name ist Julia Fellermair und ich bin Studentin der Lebenmitteltechnologien.',
            p2: 'Ich bin offen für neue Herausforderungen und interessiere mich dabei vor allem für innovative und nachhaltige Projekte in der Lebensmittel- und Getränkeindustrie.',
        },
        experience: {
            p1: {
                header: 'Projekt Management Assistant - Werkstudentin',
                sub: 'Krones AG - Werk Steinecker',
                text: 'Im Projektmanagement ist keine Anfrage wie die andere. Flexibilität ist besonders in schweren Zeiten sehr gefragt. Genau deshalb arbeiten wir im Team jeden Tag daran, Projekte sauber über die Bühne laufen zu lassen und den Kunden zufrieden zu stellen. Organisation ist dabei von höchster Bedeutung. Unterstützend nutze ich dafür die Unternehmenssoftware SAP und für den Überblick und die virtuelle Zusammenarbeit SharePoint von Microsoft Office.',
                date: 'April 2020 - Present',
            },
            p2: {
                header: 'Köchin',
                sub: 'KENNEDYS BAR',
                text: 'Um in der Küche für einen reibungsfreien Ablauf zu gewährleisten braucht es vor allem Organisationstalent und die Fähigkeit, zu jedem Zeitpunkt einen kühlen Kopf zu bewahren. Die Begeisterung für das Kochen, das Menschen mit Essen begeistern und die Freude am kreativen Anrichten ist mir geblieben.',
                date: 'Oktober 2018 - Mai 2019',
            },
            p3: {
                header: 'Verkäuferin Einzelhandel',
                sub: 'Hunkemöller',
                text: 'Durch das Arbeiten im Verkauf wurde meine Menschenkenntnis geschult und ich konnte in der Praxis umsetzen, was ich in Workshops über Überzugungskraft gelernt habe. Meine individuelle und kreative Beratung ist es, was die Kunden an mir zu schätzen wussten.',
                date: 'Februar 2018 - Juli 2018',
            },
            p4: {
                header: 'Service',
                sub: 'Pianka Service GmbH',
                text: 'In meinem erster Job im Gastgewerbe habe ich vieles über das Arbeitsleben gelernt: Die Bedeutung von Kommunikation, eingespielter Teamarbeit und Lösungsorientierung.',
                date: 'Oktober 2015 - Februar 2018',
            },
        },
        education: {
            p1: {
                header: 'Hochschule Weihenstephan-Triesdorf',
                sub: 'Lebenmitteltechnologie',
                type: 'Bachelor of Science',
                note: 'derzeitiger Notendurchschnitt: 1,67',
                date: 'Oktober 2018 - Present',
            },
            p2: {
                header: 'Häme University of Applied Sciences - Finnland',
                sub: 'Biotechnology and Food Engineering',
                type: 'ERASMUS +',
                note: 'Notendurchschnitt: 1,0',
                info1: 'Teilnahme an Forschungsprojekt "Biochar Production"',
                info2: '3. Platz in Hackathon Wettbewerb',
                info3: 'Sustainable Bioeconomy',
                date: 'August 2019 - Dezember 2019',
            },
            p3: {
                header: 'Technische Universität München',
                sub: 'Umweltingenieurwesen',
                type: 'Bachlor of Science',
                date: 'Oktober 2017 - August 2018',
            },
            p4: {
                header: 'Anne-Frank-Gymnasium Erding',
                sub: 'allgemeine Hochschulreife (Abitur)',
                note: 'NC: 1,8',
                date: 'September2009 - Juli 2017',
            },
        },
        skills: {
            header: 'Kenntnisse und Fähigkeiten',
            it: {
                header: 'EDV-Kenntnisse',
            },
            lang: {
                header: 'Sprachen',
                lang1: 'B2+/C1 - Verhandlungssicher',
                lang2: 'Italienisch A2 - Grundlegende Kenntnisse',
            },
            skills: {
                header: 'Fähigkeiten',
                skill1: 'Projektmanagement',
                skill2: 'Innovatives Mindset',
                skill3: 'Analytisches Denken',
                skill4: 'Interkulturelle Kommunikation',
            },
        },
	},
	nl: {
        language: "Nederlands",
        nav: {
            about: 'Über Mich',
            experience: 'Erfahrung',
            education: 'Bildung',
            skills: 'Kenntnisse',
            interests: 'Interessen',
            awards: 'Auszeichnungen',
        },
		about: {
            p1: 'Hallo! Mijn naam is Julia Fellermair ik ben een student Voedingsmiddelentechnologie',
            p2: 'Ik ben altijd open voor nieuwe uitdagingen en ben daarbij vooral geïnteresseerd in innovatieve en duurzame projecten in de Voedings- en Drank industrie.'
        },
        experience: {
            p1: {
                header: 'Projekt Management Assistant - Werkstudentin',
                sub: 'Krones AG - Werk Steinecker',
                text: 'Im Projektmanagement ist keine Anfrage wie die andere. Flexibilität ist besonders in schweren Zeiten sehr gefragt. Genau deshalb arbeiten wir im Team jeden Tag daran, Projekte sauber über die Bühne laufen zu lassen und den Kunden zufrieden zu stellen. Organisation ist dabei von höchster Bedeutung. Unterstützend nutze ich dafür die Unternehmenssoftware SAP und für den Überblick und die virtuelle Zusammenarbeit SharePoint von Microsoft Office.',
                date: 'April 2020 - Present',
            },
            p2: {
                header: 'Köchin',
                sub: 'KENNEDYS BAR',
                text: 'Um in der Küche für einen reibungsfreien Ablauf zu gewährleisten braucht es vor allem Organisationstalent und die Fähigkeit, zu jedem Zeitpunkt einen kühlen Kopf zu bewahren. Die Begeisterung für das Kochen, das Menschen mit Essen begeistern und die Freude am kreativen Anrichten ist mir geblieben.',
                date: 'Oktober 2018 - Mai 2019',
            },
            p3: {
                header: 'Verkäuferin Einzelhandel',
                sub: 'Hunkemöller',
                text: 'Durch das Arbeiten im Verkauf wurde meine Menschenkenntnis geschult und ich konnte in der Praxis umsetzen, was ich in Workshops über Überzugungskraft gelernt habe. Meine individuelle und kreative Beratung ist es, was die Kunden an mir zu schätzen wussten.',
                date: 'Februar 2018 - Juli 2018',
            },
            p4: {
                header: 'Service',
                sub: 'Pianka Service GmbH',
                text: 'In meinem erster Job im Gastgewerbe habe ich vieles über das Arbeitsleben gelernt: Die Bedeutung von Kommunikation, eingespielter Teamarbeit und Lösungsorientierung.',
                date: 'Oktober 2015 - Februar 2018',
            },
        },
        education: {
            p1: {
                header: 'Hochschule Weihenstephan-Triesdorf',
                sub: 'Lebenmitteltechnologie',
                type: 'Bachelor of Science',
                note: 'derzeitiger Notendurchschnitt: 1,67',
                date: 'Oktober 2018 - Present',
            },
            p2: {
                header: 'Häme University of Applied Sciences - Finnland',
                sub: 'Biotechnology and Food Engineering',
                type: 'ERASMUS +',
                note: 'Notendurchschnitt: 1,0',
                info1: 'Teilnahme an Forschungsprojekt "Biochar Production"',
                info2: '3. Platz in Hackathon Wettbewerb',
                info3: 'Sustainable Bioeconomy',
                date: 'August 2019 - Dezember 2019',
            },
            p3: {
                header: 'Technische Universität München',
                sub: 'Umweltingenieurwesen',
                type: 'Bachlor of Science',
                date: 'Oktober 2017 - August 2018',
            },
            p4: {
                header: 'Anne-Frank-Gymnasium Erding',
                sub: 'allgemeine Hochschulreife (Abitur)',
                note: 'NC: 1,8',
                date: 'September2009 - Juli 2017',
            },
        },
        skills: {
            header: 'Kenntnisse und Fähigkeiten',
            it: {
                header: 'EDV-Kenntnisse',
            },
            lang: {
                header: 'Sprachen',
                lang1: 'B2+/C1 - Verhandlungssicher',
                lang2: 'Italienisch A2 - Grundlegende Kenntnisse',
            },
            skills: {
                header: 'Fähigkeiten',
                skill1: 'Projektmanagement',
                skill2: 'Innovatives Mindset',
                skill3: 'Analytisches Denken',
                skill4: 'Interkulturelle Kommunikation',
            },
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
