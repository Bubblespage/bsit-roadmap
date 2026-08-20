export const bsitRoadmap = [
  {
    year: "First Year",
    semesters: [
      {
        title: "Term 1",
        courses: [
          { code: "GEPCM01X", title: "Purposive Communication", units: 3.0, type: "General", desc: "Writing and speaking in multicultural contexts.", preReq: "none" },
          { code: "GEUTS01X", title: "Understanding the Self", units: 3.0, type: "General", desc: "Exploration of identity and self-development.", preReq: "none" },
          { code: "GERPH01X", title: "Readings in the Philippine History", units: 3.0, type: "General", desc: "Analysis of primary sources in Philippine history.", preReq: "none" },
          { code: "PHYSED11", title: "Physical Fitness / Aerobics", units: 3.0, type: "General", desc: "Movement enhancement and physical fitness fundamentals.", preReq: "none" },
          { code: "CCINCOML", title: "Introduction to Computing", units: 3.0, type: "Core", desc: "Fundamental concepts of hardware, software, and IT.", preReq: "none" },
          { code: "CCPRGG1L", title: "Fundamentals of Programming", units: 3.0, type: "Core", desc: "Introduction to procedural programming and logic.", preReq: "none" }
        ]
      },
      {
        title: "Term 2",
        courses: [
          { code: "GECTW01X", title: "The Contemporary World", units: 3.0, type: "General", desc: "Globalization and its socio-economic impacts.", preReq: "none" },
          { code: "CTHASOPL", title: "Hardware, Software and Peripheral Installation", units: 3.0, type: "Core", desc: "Computer hardware assembly and troubleshooting.", preReq: "ccincoml" },
          { code: "CCPRGG2L", title: "Intermediate Programming", units: 3.0, type: "Core", desc: "Object-oriented programming concepts and implementation.", preReq: "ccprgg1l" },
          { code: "PHYSED12", title: "Rhythmic Activities", units: 3.0, type: "General", desc: "Fitness exercises, dance, and wellness training.", preReq: "physed11" },
          { code: "GESTS01X", title: "Science, Technology and Society", units: 3.0, type: "General", desc: "Interactions between science, technology, and society.", preReq: "none" },
          { code: "GEMMW01X", title: "Mathematics in the Modern World", units: 3.0, type: "General", desc: "Mathematical patterns and applications in daily life.", preReq: "none" }
        ]
      },
      {
        title: "Term 3",
        courses: [
          { code: "CCOBJPGL", title: "Object-Oriented Programming", units: 3.0, type: "Core", desc: "Advanced OOP paradigms and design patterns.", preReq: "ccprgg2l" },
          { code: "CCDISTR1", title: "Discrete Structures 1", units: 3.0, type: "Core", desc: "Mathematical structures essential for computer science.", preReq: "none" },
          { code: "PHYSED13", title: "Individual and Dual Sports", units: 3.0, type: "General", desc: "Recreational sports and physical activities.", preReq: "physed11" },
          { code: "MCWTS01X", title: "National Service Training Program 1", units: 3.0, type: "General", desc: "Community engagement and nationalism.", preReq: "none" },
          { code: "GGENY01X", title: "The Entrepreneurial Mind", units: 3.0, type: "General", desc: "Business mindset and venture creation.", preReq: "none" },
          { code: "GEETH01X", title: "Ethics", units: 3.0, type: "General", desc: "Moral reasoning and professional code of ethics.", preReq: "none" },
          { code: "GEART01X", title: "Art Appreciation", units: 3.0, type: "General", desc: "Human experience through aesthetic and visual forms.", preReq: "none" }
        ]
      }
    ]
  },
  {
    year: "Second Year",
    semesters: [
      {
        title: "Term 4",
        courses: [
          { code: "CCDATRCL", title: "Data Structures and Algorithms", units: 3.0, type: "Core", desc: "Linear and non-linear data organization and sorting logic.", preReq: "ccprgg2l" },
          { code: "CCPLTFRL", title: "Platform Technologies", units: 3.0, type: "Core", desc: "Operating systems architecture and virtualization.", preReq: "ccprgg2l" },
          { code: "MCWTS02X", title: "National Service Training Program 2", units: 3.0, type: "General", desc: "Continuation of community service projects.", preReq: "none" },
          { code: "PHYSED14", title: "Team Sports", units: 3.0, type: "General", desc: "Advanced team sport activities.", preReq: "physed11" },
          { code: "GERIZ01X", title: "Life and Works of Rizal", units: 3.0, type: "General", desc: "Comprehensive study of Dr. Jose Rizal's writings.", preReq: "none" },
          { code: "GEFID01X", title: "Wika at Panitikan sa Pagpapatibay ng Pilipinong Identidad", units: 3.0, type: "General", desc: "Filipino language and cultural heritage.", preReq: "none" }
        ]
      },
      {
        title: "Term 5",
        courses: [
          { code: "CCOMPORG", title: "Computer Organization and Architecture", units: 3.0, type: "Core", desc: "Hardware components and instruction set architecture.", preReq: "ccdistr1, ccobjpgl" },
          { code: "CTINFMGL", title: "Information Management", units: 3.0, type: "Core", desc: "Relational database design, SQL, and normalization.", preReq: "ccdatrcl" },
          { code: "CTAPDEVL", title: "Applications Development and Emerging Technologies", units: 3.0, type: "Core", desc: "Overview of modern application frameworks.", preReq: "ccobjpgl" },
          { code: "GEITE01X", title: "Living in the I.T Era", units: 3.0, type: "General", desc: "Societal impacts of information technology.", preReq: "none" },
          { code: "GEACM01X", title: "Advanced Communication", units: 3.0, type: "General", desc: "Technical writing and professional communication.", preReq: "gepcm01x" },
          { code: "GENAT01R", title: "National Course", units: 3.0, type: "General", desc: "National studies and institutional requirements.", preReq: "none" }
        ]
      },
      {
        title: "Term 6",
        courses: [
          { code: "CCQUAMET", title: "Quantitative Methods", units: 3.0, type: "Core", desc: "Statistical analysis and modeling for IT research.", preReq: "ccdistr1" },
          { code: "CTPRFISS", title: "Social and Professional Issues", units: 3.0, type: "Core", desc: "Legal frameworks, data privacy, and IT ethics.", preReq: "none" },
          { code: "CTADVDBL", title: "Advanced Database Systems", units: 3.0, type: "Core", desc: "Complex queries, indexing, and optimization.", preReq: "ctinfmgl" },
          { code: "CTBASNTL", title: "Basic Networking", units: 3.0, type: "Core", desc: "Networking fundamentals, OSI model, and routing.", preReq: "ccpltfrl, ccomporg" },
          { code: "CTWBDEVL", title: "Web Systems and Technologies", units: 3.0, type: "Specialization", desc: "Client-side web development, HTML, CSS, and DOM manipulation.", preReq: "ctapdevl" }
        ]
      }
    ]
  },
  {
    year: "Third Year",
    semesters: [
      {
        title: "Term 7",
        courses: [
          { code: "CTINPRGL", title: "Integrative Programming and Technologies", units: 3.0, type: "Core", desc: "Connecting disparate applications and middleware architecture.", preReq: "ccobjpgl, ccpltfrl" },
          { code: "CTSUSINL", title: "Systems Integration and Architecture", units: 3.0, type: "Core", desc: "Enterprise application integration and web services.", preReq: "ccpltfrl" },
          { code: "CTADNETL", title: "Advanced Networking", units: 3.0, type: "Core", desc: "Enterprise routing, switching, and network security protocols.", preReq: "ctbasntl" },
          { code: "CTMLSYSL", title: "Multimedia Systems", units: 3.0, type: "Core", desc: "Digital media processing, audio, video, and interactive design.", preReq: "ctapdevl" }
        ]
      },
      {
        title: "Term 8",
        courses: [
          { code: "CTELEC2L", title: "Advanced Multimedia", units: 3.0, type: "Specialization", desc: "Advanced multimedia development and animation techniques.", preReq: "ctmlsysl" },
          { code: "CTELEC1L", title: "Mobile Programming", units: 3.0, type: "Specialization", desc: "Foundational mobile app architecture and native environment setup.", preReq: "ctinprgl" },
          { code: "CTINASSL", title: "Information Assurance and Security", units: 3.0, type: "Core", desc: "Cybersecurity frameworks, threat analysis, and risk management.", preReq: "ccomporg" },
          { code: "CTSYSADD", title: "Systems Analysis and Design", units: 3.0, type: "Core", desc: "Requirements gathering, UML diagrams, and software scoping.", preReq: "ctadvdbl" }
        ]
      },
      {
        title: "Term 9",
        courses: [
          { code: "CTELEC3L", title: "Advanced Web Development", units: 3.0, type: "Specialization", desc: "Server-side web development and REST APIs.", preReq: "ctwbdevl" },
          { code: "CTAINASL", title: "Advanced Information Assurance and Security", units: 3.0, type: "Core", desc: "Penetration testing and advanced network defense strategies.", preReq: "ctinassl" },
          { code: "CCINTHCI", title: "Introduction to Human-Computer Interaction", units: 3.0, type: "Core", desc: "Foundations of user-centered design and interface evaluation.", preReq: "ccprgg2l" },
          { code: "CTAPROJ1", title: "Capstone Project 1", units: 3.0, type: "Core", desc: "Proposal defense, technical design documentation, and initial build.", preReq: "ctapdevl, ctinassl" }
        ]
      }
    ]
  },
  {
    year: "Fourth Year",
    semesters: [
      {
        title: "Term 10",
        courses: [
          { code: "CTELEC5L", title: "Web Commercialization and Ecommerce", units: 3.0, type: "Specialization", desc: "Payment gateways, secure e-commerce architecture, and deployment.", preReq: "ctadwebl" },
          { code: "CTELEC4L", title: "Advanced Mobile Programming", units: 3.0, type: "Specialization", desc: "Cross-platform mobile frameworks (Flutter / React Native).", preReq: "ctadwebl" },
          { code: "CTSYSADL", title: "Systems Administration and Maintenance", units: 3.0, type: "Core", desc: "Server deployment, cloud maintenance, and infrastructure health.", preReq: "ctainasl" },
          { code: "CTAPROJ2", title: "Capstone Project 2", units: 3.0, type: "Core", desc: "System implementation, testing, deployment, and final defense.", preReq: "ctaproj1" }
        ]
      },
      {
        title: "Term 11",
        courses: [
          { code: "CTNTERN1", title: "Internship 1 (400 Hours)", units: 3.0, type: "Core", desc: "Industry immersion working with software development teams.", preReq: "ctaproj1" }
        ]
      },
      {
        title: "Term 12",
        courses: [
          { code: "CTNTERN2", title: "Internship 2 (400 Hours)", units: 3.0, type: "Core", desc: "Completion of remaining industry placement hours and final evaluation.", preReq: "none" }
        ]
      }
    ]
  }
];