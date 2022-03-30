// Initiate i18n
// the default locale
// you can for example take it from the URL.
let locale = 'en';

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
            p2: 'I am always open to new challenges and am, more than anything else, interested in innovative and sustainable projects within the Food Technology and Beverage industries.'
        },
        experience: {
            p1: {
                header: 'Bachelor Thesis',
                sub: 'Fraunhofer Institute for Process Engineering and Packaging IVV',
                text1: 'For my bachelor thesis, I am now able to apply the experience with bacteriophages in aerosols, that I have gathered in my previous work at the Fraunhofer Institute IVV. While working on test assignments about this subject, more and more questions, that could not be answered though current literature research, popped up. The behaviour of microorganisms in aerosols in the air has in recent years gained more focus in science and research, and also the Fraunhofer Institute IVV has been investing in this topic.',
                text2: 'In the context of my bachelor thesis, I will research the behaviour of bacteriophages in aerosols in the air in closed rooms and identify factors influencing their survival time.',
                date: 'April 2022 - Present',
            },
            p2: {
                header: 'Research Assistant',
                sub: 'Fraunhofer Institute for Process Engineering and Packaging IVV',
                text: 'In my work as an assistant researcher, following my internship, I continued to be involved in testing air disinfection equipment. In addition, I was involved in storage tests to check the shelf life of food products and the evaluation of the shelf life of a food product based on product-specific properties.',
                date: 'January 2022 - March 2022',
            },
            p3: {
                header: 'Student Intern',
                sub: 'Fraunhofer Institute for Process Engineering and Packaging IVV',
                text: 'During my internship at the Fraunhofer Institute IVV, in the department ‘Food Quality’, I was able to gain practical experience in the microbiological laboratory. In addition to general laboratory activities, I was also able to work on current research projects. This included carrying out microbial challenge tests and the microbial examination of food. I also independently tested air disinfection devices with bacteriophages.',
                date: 'August 2021 - December 2021',
            },
            p4: {
                header: 'Project Management Assistant - Working Student',
                sub: 'Krones AG - Plant Steinecker (since April 2021: Steinecker GmbH)',
                text: 'Flexibility and organisational talent are especially challenged in difficult times. In order to be able to offer customers worldwide the service they are used to, the entire team in the ‘Breweries After Sales Service’ gave their best every day. From the first customer contact to the project planning to the supervision of the service staff on site, I was involved in the projects and accompanied the process. This includes order creation and processing in the company software SAP ERP as well as virtual collaboration via SharePoint from Microsoft Office.',
                date: 'April 2020 - July 2021',
            },
            p5: {
                header: 'Cook',
                sub: 'KENNEDYs Bar',
                text: 'In order to ensure that things run smoothly in the kitchen, you need, above all, organisational skills and the ability to keep a cool head at all times. The enthusiasm for cooking, inspiring people with food and the joy of creative serving have remained with me.',
                date: 'October 2018 - May 2019',
            },
            p6: {
                header: 'Shop Assistant in Retail',
                sub: 'Hunkemöller',
                text: 'Working in retail trained my people skills and I was able to put into practice what I learned in workshops about sales. My individual and creative advice is what the customers appreciated about me.',
                date: 'February 2018 - July 2018',
            },
            p7: {
                header: 'Service-Kraft',
                sub: 'Pianka Service GmbH',
                text: 'In my first job in the hospitality industry, I learned a lot about working life: the importance of communication, well-rehearsed teamwork and a solution-focused mindset.',
                date: 'October 2015 - January 2018',
            },
        },
        education: {
            p1: {
                header: 'University of Applied Sciences Weihenstephan-Triesdorf',
                sub: 'Food Technology',
                type: 'Bachelor of Science',
                note: 'Grade Point Average: 1.72 (provisional)',
                date: 'October 2018 - Present',
            },
            p2: {
                header: 'Häme University of Applied Sciences - Finnland',
                sub: 'Biotechnology and Food Engineering',
                type: 'ERASMUS +',
                note: 'Grade Point Average: 1,0',
                info1: 'Contribution to Research Project \"Biochar Production\"',
                info2: '3. Place in Hackathon Competition \"Innovations for scaling insect production, market and research\”',
                info3: 'Sustainable Bioeconomy',
                date: 'August 2019 - December 2019',
            },
            p3: {
                header: 'Technical University Munich (TUM)',
                sub: 'Environmental Engineering',
                type: 'Bachelor of Science',
                date: 'October 2017 - August 2018',
            },
            p4: {
                header: 'Anne-Frank-Gymnasium Erding',
                sub: 'General Matriculation Standard (allgemeine Hochschulreife)',
                note: 'Grade Point Average: 1,8',
                date: 'September 2009 - July 2017',
            },
        },
        skills: {
            header: 'Skills',
            research: {
                header: 'Research skills',
                research1: 'Laboratory Safety',
                research2: 'Food Microbiology',
                research3: 'Analytical Skills',
            },
            it: {
                header: 'IT skills',
            },
            lang: {
                header: 'Languages',
                lang1: 'English - B2+/C1 - Upper intermediate',
                lang2: 'Italian - A2 - Basic knowledge',
                lang3: 'Dutch - Beginner',
            },
        },
        interests: {
            header: 'Interests',
            text: 'In my free time I like to do sports, go running, hiking or do yoga. My passion is cooking, and I like to invite friends and family over. After dinner, we like to discuss politics and society. I am also very interested in art, literature and theatre.'
        },
        awards: {
            header: 'Grants & Fellowships',
            award1: 'Scholarship - Deutschlandstipendium 2020/2021',
            award2: 'Scholarship - Deutschlandstipendium 2021/2022'
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
                header: 'Bachelorand',
                sub: 'Fraunhofer Institut für Verfahrenstechnik und Verpackung IVV',
                text1: 'Die Erfahrung mit Bakteriophagen in Aerosolen, die ich in meinen vergangenen Tätigkeiten am Fraunhofer Institut IVV sammeln konnte, werde ich nun auch in meiner Bachelorarbeit anwenden können. Durch die Arbeit an den Prüfaufträgen kamen im Team immer wieder Fragen auf, die auch durch Literaturrecherche nicht beantowrtet werden konnten. Das Verhalten von Mikroorganismen in Aerosolen in der Luft gelangte in den letzten Jahren wieder stark in den Fokus von Wissenschaft und Forschung und auch am Fraunhofer Institut IVV wird in dieses Thema investiert.',
                text2: 'Im Rahmen meiner Bachelorarbeit werde ich auf das Verhalten von Bakteriophagen, gehüllt in Aerosolen in der Luft, in geschlossenen Räumen eingehen und Einflussfaktoren auf die Überlebensdauer identifizieren.',
                date: 'April 2022 - Present',
            },
            p2: {
                header: 'Hilfswissenschaftliche Mitarbeiterin',
                sub: 'Fraunhofer Institut für Verfahrenstechnik und Verpackung IVV',
                text: 'In meiner Tätigkeit als Hilfswissenschaftliche Mitarbeiterin, anschließend an mein Praktikum, zählte weiterhin das Prüfen von Luftdesinfektionsgeräten zu meinen Aufgaben. Zusätzlich war ich involviert in Lagertests zur Überprüfung der Haltbarkeit von Lebenmitteln sowie der Bewertung von Haltbarkeit eines Lebensmittels basierend auf produktspezifischen Eigenschaften.',
                date: 'Januar 2022 - März 2022',
            },
            p3: {
                header: 'Praktikantin',
                sub: 'Fraunhofer Institut für Verfahrenstechnik und Verpackung IVV',
                text: 'In meinem Praktikum am Fraunhofer Institut IVV, in der Abteilung “Qualitätserhalt Lebensmittel” habe ich praktische Erfahrung im mikrobiologischen Labor sammeln können. Dabei konnte ich über die allgemeinen Labortätigkeiten hinaus auch an aktuellen Forschungsprojekten mitarbeiten. Dazu zählt die Durchführung mikrobieller Challange-Tests sowie die mikrobielle Untersuchung von Lebensmitteln. Eigenständig führte ich außerdem Tests zur Prüfung von Luftdesinfektionsgeräten mit Bakteriophagen durch.',
                date: 'August 2021 - Dezember 2021',
            },
            p4: {
                header: 'Projektmanagement Assistentin - Werkstudentin',
                sub: 'Krones AG - Werk Steinecker (seit April 2021: Steinecker GmbH)',
                text: 'Felxibilität und Organisationstalent werden besonders in schweren Zeiten herausgefordert. Um Kunden weltweit den gewohnten Service bieten zu können, hat das ganze Team im “Breweries After Sales Service” täglich sein Bestes gegeben. Vom ersten Kundenkontakt über die Projektplanung bis zur Betreuung der Service-Mitarbeiter vor Ort war ich in die Vorhaben involviert und habe den Prozess begleitet. Dazu zählt die Auftragserstellung und -bearbeitung in der Unternehmenssoftware SAP ERP sowie die virtuelle Zusammenarbeit über SharePoint von Microsoft Office.',
                date: 'April 2020 - Juli 2021',
            },
            p5: {
                header: 'Köchin',
                sub: 'KENNEDYs Bar',
                text: 'Um in der Küche für einen reibungsfreien Ablauf zu gewährleisten braucht es vor allem Organisationstalent und die Fähigkeit, zu jedem Zeitpunkt einen kühlen Kopf zu bewahren. Die Begeisterung für das Kochen, das Menschen mit Essen begeistern und die Freude am kreativen Anrichten ist mir geblieben.',
                date: 'Oktober 2018 - Mai 2019',
            },
            p6: {
                header: 'Verkäuferin Einzelhandel',
                sub: 'Hunkemöller',
                text: 'Durch das Arbeiten im Verkauf wurde meine Menschenkenntnis geschult und ich konnte in der Praxis umsetzen, was ich in Workshops über Überzugungskraft gelernt habe. Meine individuelle und kreative Beratung ist es, was die Kunden an mir zu schätzen wussten.',
                date: 'Februar 2018 - Juli 2018',
            },
            p7: {
                header: 'Service-Kraft',
                sub: 'Pianka Service GmbH',
                text: 'In meinem erster Job im Gastgewerbe habe ich vieles über das Arbeitsleben gelernt: Die Bedeutung von Kommunikation, eingespielter Teamarbeit und Lösungsorientierung.',
                date: 'Oktober 2015 - Januar 2018',
            },
        },
        education: {
            p1: {
                header: 'Hochschule Weihenstephan-Triesdorf',
                sub: 'Lebenmitteltechnologie',
                type: 'Bachelor of Science',
                note: 'derzeitiger Notendurchschnitt: 1,72',
                date: 'Oktober 2018 - Present',
            },
            p2: {
                header: 'Häme University of Applied Sciences - Finnland',
                sub: 'Biotechnology and Food Engineering',
                type: 'ERASMUS +',
                note: 'Notendurchschnitt: 1,0',
                info1: 'Teilnahme an Forschungsprojekt "Biochar Production"',
                info2: '3. Platz in Hackathon Wettbewerb \"Innovations for scaling insect production, market and research\”',
                info3: 'Sustainable Bioeconomy',
                date: 'August 2019 - Dezember 2019',
            },
            p3: {
                header: 'Technische Universität München',
                sub: 'Umweltingenieurwesen',
                type: 'Bachelor of Science',
                date: 'Oktober 2017 - August 2018',
            },
            p4: {
                header: 'Anne-Frank-Gymnasium Erding',
                sub: 'allgemeine Hochschulreife (Abitur)',
                note: 'NC: 1,8',
                date: 'September 2009 - Juli 2017',
            },
        },
        skills: {
            header: 'Kenntnisse',
            research: {
                header: 'Forschungskompetenzen',
                research1: 'Sicherheit im Labor',
                research2: 'Lebensmittel-Mikrobiologie',
                research3: 'Analytische Fähigkeiten',
            },
            it: {
                header: 'EDV-Kenntnisse',
            },
            lang: {
                header: 'Sprachen',
                lang1: 'Englisch B2+/C1 - Verhandlungssicher',
                lang2: 'Italienisch A2 - Grundlegende Kenntnisse',
                lang3: 'Niederländisch - Anfänger',
            },
        },
        interests: {
            header: 'Interessen',
            text: 'In meiner Freizeit treibe ich gerne Sport, gehe laufen, wandern oder mache Yoga. Meine Leidenschaft gilt dem Kochen, gerne lade ich dazu Freunde und Familie ein. Nach dem Essen wird dann gerne über Politik und Gesellschaft diskutiert. Außerdem interessiere ich mich sehr für Kunst und Literatur sowie das Theater.'
        },
        awards: {
            header: 'Auszeichnungen',
            award1: 'Deutschlandstipendium 2020/2021',
            award2: 'Deutschlandstipendium 2021/2022'
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
