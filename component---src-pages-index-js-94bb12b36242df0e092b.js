(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{EH9Q:function(A){A.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"La Periférica","description":"La Periférica","author":"@jlopezcur"}}}}')},RXBc:function(A,e,a){"use strict";a.r(e);var t=a("q1tI"),i=a.n(t),n=a("L6Je"),r=a("hYuR"),c=a("vOnD"),d=a("ma3e"),o={email:"info.laperiferica@gmail.com",social:[{url:"https://www.youtube.com/channel/UCo0LamWRwdLSfO3o_Ob3-WQ",icon:i.a.createElement(d.e,{size:54}),title:"Youtube"},{url:"https://twitter.com/LaPerifericaCC",icon:i.a.createElement(d.d,{size:54}),title:"Twitter"},{url:"https://www.instagram.com/LaPerifericaCC/",icon:i.a.createElement(d.c,{size:54}),title:"Instagram"},{url:"https://www.facebook.com/LaPerifericaCC/",icon:i.a.createElement(d.b,{size:54}),title:"Facebook"}]},s=c.a.section.withConfig({displayName:"Contact__StyledContact",componentId:"l1dqpd-0"})(["margin:1rem 0;text-align:center;> ul{display:flex;max-width:400px;margin:2rem auto 0;justify-content:space-between;list-style:none;padding:0;}"]),l=function(){return i.a.createElement(s,null,i.a.createElement("a",{href:"mailto:"+o.email,target:"_blank",rel:"noopener noreferrer"},o.email),i.a.createElement("ul",null,o.social.map((function(A,e){return i.a.createElement("li",{key:e},i.a.createElement("a",{href:A.url,target:"_blank",rel:"noopener noreferrer","aria-label":A.title},A.icon))}))))},E=c.a.section.withConfig({displayName:"Who__StyledWho",componentId:"sc-1n6xoco-0"})(["margin:1rem 0;text-align:center;"]),f=function(){return i.a.createElement(E,null,"LA PERIFÉRICA - Cultura Contemporánea es un Colectivo de Gestorxs Culturales almerienses que busca poner en valor la vida cultural de la ciudad y de la provincia desde una visión innovadora, apoyando y fomentando el talento local, el intercambio y la cooperación internacional y sobre todo la implicación y participación ciudadana a través de proyectos artísticos y culturales que promuevan la reflexión de los retos y temas contemporáneos.",i.a.createElement("br",null),"Uno de nuestros ámbitos de trabajo son los proyectos internacionales como los que realizamos a través del programa europeo Erasmus +.")},B=a("Wkhf"),g=(a("0mN4"),a("f3/d"),a("9eSz")),p=a.n(g),b=a("Wbzz"),Q=c.a.div.withConfig({displayName:"Member__StyledMember",componentId:"gdqykk-0"})(["> ul{margin:0;padding:0;display:flex;flex-direction:column;list-style:none;> li{padding:0;}}"]),m=function(A){var e=A.slug,a=A.image,t=A.name,n=A.tasks;return i.a.createElement(Q,null,i.a.createElement(b.Link,{to:"/team/"+e},i.a.createElement(p.a,{fixed:a.childImageSharp.fixed,alt:"Foto de "+t})),i.a.createElement(b.Link,{to:"/team/"+e},i.a.createElement("h3",null,t)),i.a.createElement("ul",null,n.map((function(A,e){return i.a.createElement("li",{key:e},A)}))))},u=c.a.section.withConfig({displayName:"Team__StyledTeam",componentId:"sc-99a9nk-0"})(["margin:1rem 0;text-align:center;> ul{margin:0;padding:0;list-style:none;display:flex;justify-content:center;flex-wrap:wrap;> li{padding:1.5rem;}}"]),j=function(){var A=B.data.allMarkdownRemark.edges;return i.a.createElement(u,null,i.a.createElement("ul",null,A.map((function(A){return A.node})).map((function(A,e){return i.a.createElement("li",{key:e},i.a.createElement(m,A.frontmatter))}))))},w=(a("91GP"),a("evYt")),x=c.a.div.withConfig({displayName:"Item__StyledItem",componentId:"sc-5b27h5-0"})([""]),h=function(A){var e=A.slug,a=A.image,t=A.title,n=A.content;return i.a.createElement(x,null,i.a.createElement("div",{className:"image"},i.a.createElement(b.Link,{to:"/projects/"+e},i.a.createElement(p.a,{fixed:a.childImageSharp.fixed,alt:t}))),i.a.createElement(b.Link,{to:"/projects/"+e},i.a.createElement("h3",null,t)),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))},Y=c.a.section.withConfig({displayName:"Projects__StyledProjects",componentId:"sc-1g0quzw-0"})(["margin:1rem 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));grid-gap:2rem;justify-items:center;"]),N=function(){var A=w.data.allMarkdownRemark.edges;return i.a.createElement(Y,null,A.map((function(A){return A.node})).map((function(A,e){return i.a.createElement("div",{key:e},i.a.createElement(h,Object.assign({},A.frontmatter,{content:A.excerpt})))})))},C=c.a.a.withConfig({displayName:"Anchor__StyledAnchor",componentId:"sc-8dvo1q-0"})(["display:block;position:relative;top:-100px;visibility:hidden;"]),D=function(A){var e=A.id;return i.a.createElement(C,{id:e})},I=c.a.section.withConfig({displayName:"Section__StyledSection",componentId:"ewvvtd-0"})(["padding:1.5rem;max-width:1280px;margin:0 auto;text-align:center;h2{margin-bottom:2rem;}"]),R=function(A){var e=A.children,a=A.id,t=A.title;return i.a.createElement(I,null,i.a.createElement(D,{id:a}),i.a.createElement("h2",null,t),e)};e.default=function(){return i.a.createElement(n.a,null,i.a.createElement(r.a,{title:"Inicio"}),i.a.createElement(R,{id:"proyectos",title:"Proyectos"},i.a.createElement(N,null)),i.a.createElement(R,{id:"quienes-somos",title:"Quienes somos"},i.a.createElement(f,null)),i.a.createElement(R,{id:"equipo",title:"Equipo"},i.a.createElement(j,null)),i.a.createElement(R,{id:"contacta",title:"Contacta"},i.a.createElement(l,null)))}},Wkhf:function(A){A.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"slug":"alberto-sanchez","name":"Alberto Sánchez","tasks":["Gesión Cultural","Voluntariado"],"social":{"linkedin":"none","twitter":"none","facebook":"none"},"image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEAv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAamGtLKzgdYg3A//xAAbEAEBAAIDAQAAAAAAAAAAAAABAgADBBESFP/aAAgBAQABBQLk3ca5+gweyjuTf5malEzZx5vaBJ//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAeEAACAQMFAAAAAAAAAAAAAAAAAREhMVECEBJBYf/aAAgBAQAGPwKdBzfezRDmbVyUKOBO2fSEf//EABwQAQADAAIDAAAAAAAAAAAAAAEAESExcUFRYf/aAAgBAQABPyFASvyYcBaTYSu57vSEFlIrceUtTUjJyOrjYpVaCDA0T//aAAwDAQACAAMAAAAQcAgA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFBUZH/2gAIAQEAAT8QBiUAFu9wmozOiovnIxtvo2qMRhYPjWJRY4EAOAcI6AmrBqYsenCDoHYC1n5DKnoJ/9k=","width":200,"height":206,"src":"/website/static/842666ef90a7771a899d5e540f84121a/116d1/portrait.jpg","srcSet":"/website/static/842666ef90a7771a899d5e540f84121a/116d1/portrait.jpg 1x,\\n/website/static/842666ef90a7771a899d5e540f84121a/58301/portrait.jpg 1.5x","srcWebp":"/website/static/842666ef90a7771a899d5e540f84121a/8f92f/portrait.webp","srcSetWebp":"/website/static/842666ef90a7771a899d5e540f84121a/8f92f/portrait.webp 1x,\\n/website/static/842666ef90a7771a899d5e540f84121a/d640e/portrait.webp 1.5x"}}}},"html":"<p>Estudia Bellas Artes y Antropología en un intento de comprender el fenómeno de\\nla cultura de una forma global e integradora. Ha trabajado en Gestión Cultural\\ndesde 2008, con proyectos con un marcado carácter internacional e\\ninterdisciplinar. Realiza una estancia de investigación de un año en el\\ndepartamento de Educación del Museo Guggenheim de Bilbao, donde investiga sobre\\nlas exposiciones de la institución museística y sus programas educativos.\\nDespués de 5 años trabajando como coordinador de programación, comisario y\\nresponsable de proyectos europeos en el centro cultural austriaco, <a href=\\"http://www.diebaeckerei.at/\\">Die\\nBäckerei - Kulturbackstube</a>, regresa a España\\npara realizar un MBA en Gestión de Empresas e Instituciones culturales en la\\nUniversidad Complutense de Madrid. Desde febrero de 2020 trabaja como\\ncoordinador de la ONG Servicio Civil Internacional en Madrid.</p>"}},{"node":{"frontmatter":{"slug":"irene-miranda","name":"Irene Miranda","tasks":["Gesión Cultural","Eventos"],"social":{"linkedin":"none","twitter":"none","facebook":"none"},"image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEAv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdM/rsrMI2zgug//xAAcEAADAAIDAQAAAAAAAAAAAAABAgMABBESEzH/2gAIAQEAAQUC27FQlXGLdeNwAUp08kmSuxFaLFBWvzP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAgEAABAgUFAAAAAAAAAAAAAAABAAIQERIhMRMiQVGR/9oACAEBAAY/ArOWoO1uhS0NusehTOQjVxD/xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMUFx/9oACAEBAAE/ISWW4DNAsws6SmGA87EAJbA6QpShRVPQnzpKgAo5P//aAAwDAQACAAMAAAAQw8gA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRABAAICAwEBAAAAAAAAAAAAAREhADFBUWGxcf/aAAgBAQABPxBCncWatXJ1YBTSriiy2q2d/cIJTRO13+VifQgS9zen3FJoVIPE1Jq/uNCDI8L4946zhQVIMMnAIDP/2Q==","width":200,"height":201,"src":"/website/static/c384e1a6474c3a74c67e64b8aaf9fbe7/116d1/portrait.jpg","srcSet":"/website/static/c384e1a6474c3a74c67e64b8aaf9fbe7/116d1/portrait.jpg 1x,\\n/website/static/c384e1a6474c3a74c67e64b8aaf9fbe7/58301/portrait.jpg 1.5x","srcWebp":"/website/static/c384e1a6474c3a74c67e64b8aaf9fbe7/8f92f/portrait.webp","srcSetWebp":"/website/static/c384e1a6474c3a74c67e64b8aaf9fbe7/8f92f/portrait.webp 1x,\\n/website/static/c384e1a6474c3a74c67e64b8aaf9fbe7/d640e/portrait.webp 1.5x"}}}},"html":"<p>Licenciada en ADE por la Universidad de Almería, Máster en Administración de las\\nArtes por la Universidad Goldsmiths en Londres y en profesorado por la VIU.\\nDespués de trabajar durante 5 años en el área de marketing de la productora de\\ncine Videoplugger en Londres, se instala en Madrid para incorporarse al equipo\\nde producción de Flamenco Festival Londres y Estados Unidos. Posteriormente, se\\nha dedicado a la realización de eventos entorno a la cultura en la agencia\\nCreativa, formando parte de festivales como Primavera Sound. En la actualidad,\\ncombina la educación con su trabajo en diversas organizaciones culturales.</p>"}},{"node":{"frontmatter":{"slug":"jose-rueda","name":"Jose Rueda","tasks":["Radio/Música","Audiovisuales"],"social":{"linkedin":"none","twitter":"none","facebook":"none"},"image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEAv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAd+TrEX0oUZgXAf/xAAbEAADAAIDAAAAAAAAAAAAAAABAgMAEgQRIv/aAAgBAQABBQJyXoBpRKhlbyWdexKj5eK0VOLuVAUf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHhAAAgICAgMAAAAAAAAAAAAAAAECERIxQVEhIpH/2gAIAQEABj8Cat4Lo9ZP6bKlyLFVXJcdHR5mylo//8QAGhAAAwADAQAAAAAAAAAAAAAAAAERITFBUf/aAAgBAQABPyFqUcGlZxqxaNKOn6tiG4CFN0r0arl6L5x5i2JK4mj/2gAMAwEAAgADAAAAEPAPPP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB0QAQEAAQUBAQAAAAAAAAAAAAERACExQVFhgfD/2gAIAQEAAT8QICmilzKnHmOTsyNTnBhmx9/XBrtimT7h6bChR16x01IJBsdYiNHWDA7NtAR15kXBgM//2Q==","width":200,"height":205,"src":"/website/static/0f21c49f0165b031cd1dfc1bff7ecd70/116d1/portrait.jpg","srcSet":"/website/static/0f21c49f0165b031cd1dfc1bff7ecd70/116d1/portrait.jpg 1x,\\n/website/static/0f21c49f0165b031cd1dfc1bff7ecd70/58301/portrait.jpg 1.5x","srcWebp":"/website/static/0f21c49f0165b031cd1dfc1bff7ecd70/8f92f/portrait.webp","srcSetWebp":"/website/static/0f21c49f0165b031cd1dfc1bff7ecd70/8f92f/portrait.webp 1x,\\n/website/static/0f21c49f0165b031cd1dfc1bff7ecd70/d640e/portrait.webp 1.5x"}}}},"html":"<p>Lleva girando en torno a la comunicación audiovisual desde 2004. Se titula en\\nrealización de audiovisuales, y es locutor de radio y redactor de contenidos en\\nrevistas web. Trabaja para el magacín digital El Enano Rabioso, constituido\\ntambién como asociación cultural. Tanto con ellos como con su programa de radio\\n(Las Fiestas del Mañana) organiza festivales y conciertos. También colabora con\\nasociaciones culturales de Almería, como La Oficina y La Guajira, llevando la\\ngestión del espacio en la primera y la organización de los intercambios de\\nidiomas en la segunda.</p>"}},{"node":{"frontmatter":{"slug":"macarena","name":"Macarena","tasks":["Gesión Cultural","Eventos"],"social":{"linkedin":"none","twitter":"none","facebook":"none"},"image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAUBAwT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGhx6cFFNFeaF0H/8QAGhABAQEAAwEAAAAAAAAAAAAAAwIBAAQSIv/aAAgBAQABBQJk3iKk8LtZ4dMlFT4gkrOwELJhN3mZOf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB4QAAICAgIDAAAAAAAAAAAAAAABAhESMSFBIzJx/9oACAEBAAY/AqTo5kvqPJ7GL6Zjuy4ouW12iNtlLR//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhMUFRYXH/2gAIAQEAAT8h9CUMJBJfzYnJQ65hKxchULgXnUy8Go+BCxsnFV7hkaGif//aAAwDAQACAAMAAAAQYAcA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHhABAAICAwADAAAAAAAAAAAAAQARIWExQVFxgbH/2gAIAQEAAT8QVjWLGi/XWIRhDLT0CbgAuFKMD3UJey8SkxzzzcAwpA1XDvcwcLk9sRGC1Xw2S1BV2gXX1+QgpaDqf//Z","width":200,"height":201,"src":"/website/static/85add6fd9e84376dbfee6ee408fc4207/116d1/portrait.jpg","srcSet":"/website/static/85add6fd9e84376dbfee6ee408fc4207/116d1/portrait.jpg 1x,\\n/website/static/85add6fd9e84376dbfee6ee408fc4207/58301/portrait.jpg 1.5x","srcWebp":"/website/static/85add6fd9e84376dbfee6ee408fc4207/8f92f/portrait.webp","srcSetWebp":"/website/static/85add6fd9e84376dbfee6ee408fc4207/8f92f/portrait.webp 1x,\\n/website/static/85add6fd9e84376dbfee6ee408fc4207/d640e/portrait.webp 1.5x"}}}},"html":"<p>Licenciada en Humanidades por la Universidad de Almería y MBA en Empresas e\\nInstituciones Culturales por la Universidad Complutense de Madrid. Su carrera\\ncomo gestora cultural comienza en 2011 como parte del equipo de coordinación de\\nla Bienal Iberoamericana de Diseño 2012. En 2013 se incorpora al Centro Cultural\\nde España en México, donde fue coordinadora del área de género y diversidad y\\nasistente de la dirección del centro. Desde marzo de 2018 trabaja en la empresa\\nuna más una, donde realizó labores de gestión y producción cultural que\\ncompagina con la coordinación del Máster Propio en Gestión Cultural\\nInternacional e Innovación Social de la UCM y la organización de proyectos\\nindependientes, como el festival de animación contemporánea ANIMASIVO.</p>"}},{"node":{"frontmatter":{"slug":"mimar-perez","name":"Mimar Pérez","tasks":["Diseño Gráfico","Online Marketing"],"social":{"linkedin":"none","twitter":"none","facebook":"none"},"image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAgP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG+O3g92WNuANIH/8QAGRAAAwEBAQAAAAAAAAAAAAAAAQIDABEh/9oACAEBAAEFArMXJRpaNw6Dx6c7ODuGUHBA9gAo/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAgICAwAAAAAAAAAAAAAAAAECERIhIjFR/9oACAEBAAY/AsYujKM2zlpjsouL0WST8KXR/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFBUXH/2gAIAQEAAT8hslL2TlHeyyoHGZXxMFKzInIWyag2Oa1SGTAYBP/aAAwDAQACAAMAAAAQwA8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRABAAIDAAMBAAAAAAAAAAAAAQARITFBUZGxcf/aAAgBAQABPxAowkdrMKwd5E+n7BTYp8vk9wAcw7QXdlqcCMKLE9oM+/kSwCbOyvJ4RrZkhCVoKAn/2Q==","width":200,"height":200,"src":"/website/static/882f6382d19d4206304afcd4dd2d734e/116d1/portrait.jpg","srcSet":"/website/static/882f6382d19d4206304afcd4dd2d734e/116d1/portrait.jpg 1x,\\n/website/static/882f6382d19d4206304afcd4dd2d734e/58301/portrait.jpg 1.5x","srcWebp":"/website/static/882f6382d19d4206304afcd4dd2d734e/8f92f/portrait.webp","srcSetWebp":"/website/static/882f6382d19d4206304afcd4dd2d734e/8f92f/portrait.webp 1x,\\n/website/static/882f6382d19d4206304afcd4dd2d734e/d640e/portrait.webp 1.5x"}}}},"html":"<p>Se titula en Diseño Gráfico y se Licenciada en Publicidad y Relaciones\\nPúblicas. En 2009 realiza un Voluntariado Europeo en Bulgaria gestionando\\nproyectos socioculturales con colectivos en riesgo de exclusión social. En 2019\\nrealiza el master de Actitud Pedagógica en las Artes Plásticas en la\\nUniversidad de Granada y en 2012 trabaja como Subdirectora y Communication\\nOfficer en Kerala, India. Desde entonces hasta ahora trabaja en el mundo del\\nmarketing online así como en el sector docente.</p>"}}]}}}')},evYt:function(A){A.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"slug":"taste-of-diversity","title":"\\"Taste of diversity\\"","image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB0lFmZu0gB//EABwQAAICAgMAAAAAAAAAAAAAAAIDAAEREyEiMv/aAAgBAQABBQIjxCdx1jGWwaXWkfP/xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAwEBPwGH/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BZ//EABsQAQEBAAIDAAAAAAAAAAAAAAEAESExQXHh/9oACAEBAAY/At79ygYG3yBjPJc3/8QAHBAAAgICAwAAAAAAAAAAAAAAAREAIUFhMVGx/9oACAEBAAE/IboLARZCGTPkD2WNWgkclrUD4iHuIQRnuf/aAAwDAQACAAMAAAAQay//xAAYEQEBAAMAAAAAAAAAAAAAAAABABEhQf/aAAgBAwEBPxA2x2Uv/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8QKAsF/8QAHRAAAgMAAgMAAAAAAAAAAAAAAREAITFhoXGBsf/aAAgBAQABPxDfAaECeFDMoFsykn2GK3NpR7iTRAyo2rxvUEdp5oFCc7jiC8Ehtz//2Q==","width":320,"height":200,"src":"/website/static/cd7d229f4c01df54c6de4153adae2df7/e9144/featured.jpg","srcSet":"/website/static/cd7d229f4c01df54c6de4153adae2df7/e9144/featured.jpg 1x,\\n/website/static/cd7d229f4c01df54c6de4153adae2df7/69fcd/featured.jpg 1.5x,\\n/website/static/cd7d229f4c01df54c6de4153adae2df7/18040/featured.jpg 2x","srcWebp":"/website/static/cd7d229f4c01df54c6de4153adae2df7/0293b/featured.webp","srcSetWebp":"/website/static/cd7d229f4c01df54c6de4153adae2df7/0293b/featured.webp 1x,\\n/website/static/cd7d229f4c01df54c6de4153adae2df7/a9ee9/featured.webp 1.5x,\\n/website/static/cd7d229f4c01df54c6de4153adae2df7/ec641/featured.webp 2x"}}}},"excerpt":"\\"Taste of diversity: art, enviroment & gastronomy\\", es una iniciativa organizada\\npor la asociación Alemana Omse e.V, a través de nuestro…"}},{"node":{"frontmatter":{"slug":"el-pulso-del-fotograma","title":"El pulso del fotograma","image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMCBAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHGbXaQFB//xAAZEAACAwEAAAAAAAAAAAAAAAAAAgEDExD/2gAIAQEAAQUC1sHayDWwWVg0r5//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAhEAACAAMJAAAAAAAAAAAAAAAAAhEykQEDEBIiM3GBov/aAAgBAQAGPwKdqkbLxock7VNS5uza9Yf/xAAcEAACAQUBAAAAAAAAAAAAAAAAARExYZGhsfH/2gAIAQEAAT8hUi7zegnpx6+JBY5Dqf/aAAwDAQACAAMAAAAQ8w//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAcEAEAAwACAwAAAAAAAAAAAAABABEhUfAxkcH/2gAIAQEAAT8QeTUp0uKWyrNh9zvH2OgBMFWc5FPMFCkKLw4n/9k=","width":320,"height":200,"src":"/website/static/6be8fe2f72aa266a490e1214b24d8880/e9144/featured.jpg","srcSet":"/website/static/6be8fe2f72aa266a490e1214b24d8880/e9144/featured.jpg 1x,\\n/website/static/6be8fe2f72aa266a490e1214b24d8880/69fcd/featured.jpg 1.5x","srcWebp":"/website/static/6be8fe2f72aa266a490e1214b24d8880/0293b/featured.webp","srcSetWebp":"/website/static/6be8fe2f72aa266a490e1214b24d8880/0293b/featured.webp 1x,\\n/website/static/6be8fe2f72aa266a490e1214b24d8880/a9ee9/featured.webp 1.5x"}}}},"excerpt":"La Periférica trae a Almería el primer y segundo ciclo del Festival de Animación\\nContemporánea de la ciudad de México - ANIMASIVO en la…"}},{"node":{"frontmatter":{"slug":"erasmus+","title":"Erasmus +","image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABnTSWk7AgH//EABkQAQEAAwEAAAAAAAAAAAAAAAIDAAQSE//aAAgBAQABBQK96C0tiir2ccJtHXmV5HP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAhEh/9oACAEDAQE/AY1NP//EABgRAAIDAAAAAAAAAAAAAAAAAAACERIh/9oACAECAQE/AbLBh//EABwQAAICAgMAAAAAAAAAAAAAAAECACEQYRIxcf/aAAgBAQAGPwIqrVFBajqdzkRfsDAWN4//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMVFh/9oACAEBAAE/IahADKPJZMTSkELhSq0LA6Eccc+z/9oADAMBAAIAAwAAABAYL//EABcRAAMBAAAAAAAAAAAAAAAAAAEQIRH/2gAIAQMBAT8QNmxP/8QAFxEAAwEAAAAAAAAAAAAAAAAAARAhEf/aAAgBAgEBPxAQZU//xAAcEAEBAAICAwAAAAAAAAAAAAABEQAxIWFBcZH/2gAIAQEAAT8QOw8Kth8neHqjwOPcwkDHVpfuOmyqI0TBZ0op5xYDAQ6Z/9k=","width":320,"height":200,"src":"/website/static/e95bcc40117f90de97421f7eb9ca3c19/e9144/featured.jpg","srcSet":"/website/static/e95bcc40117f90de97421f7eb9ca3c19/e9144/featured.jpg 1x","srcWebp":"/website/static/e95bcc40117f90de97421f7eb9ca3c19/0293b/featured.webp","srcSetWebp":"/website/static/e95bcc40117f90de97421f7eb9ca3c19/0293b/featured.webp 1x"}}}},"excerpt":"Erasmus es el Programa de educación, formación, juventud y deporte de la\\nComisión Europea para el período 2014-2020. Erasmus + ofrece más…"}},{"node":{"frontmatter":{"slug":"las-fiestas-del-mañana","title":"Las fiestas del mañana","image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAQCA//aAAwDAQACEAMQAAABopwzvQEIF//EABoQAAICAwAAAAAAAAAAAAAAAAARAQIhMTL/2gAIAQEAAQUClvJUt0mV1//EABkRAQACAwAAAAAAAAAAAAAAAAEAAxExMv/aAAgBAwEBPwHIGpd2z//EABkRAAIDAQAAAAAAAAAAAAAAAAABAxIyQf/aAAgBAgEBPwGrfSPKP//EABcQAQADAAAAAAAAAAAAAAAAABAAMYH/2gAIAQEABj8Cdln/xAAdEAACAgEFAAAAAAAAAAAAAAABIQARcRAxUWGR/9oACAEBAAE/ITtazL5j2EaZhrlAQ7kz3of/2gAMAwEAAgADAAAAELgv/8QAGhEBAAIDAQAAAAAAAAAAAAAAAQARMUFRYf/aAAgBAwEBPxAMKYOcPIAqNz//xAAaEQEAAQUAAAAAAAAAAAAAAAABABEhUXGx/9oACAECAQE/EKhcnu4m9P/EAB4QAQACAQQDAAAAAAAAAAAAAAEAESExQVFhcYHw/9oACAEBAAE/EMAqF1R4mHq56yzsW+b2I6YoNlbheIJEr2Xm1z69E//Z","width":320,"height":200,"src":"/website/static/117bdbe67629fce1cc07bac8d7538fbf/e9144/featured.jpg","srcSet":"/website/static/117bdbe67629fce1cc07bac8d7538fbf/e9144/featured.jpg 1x,\\n/website/static/117bdbe67629fce1cc07bac8d7538fbf/69fcd/featured.jpg 1.5x,\\n/website/static/117bdbe67629fce1cc07bac8d7538fbf/18040/featured.jpg 2x","srcWebp":"/website/static/117bdbe67629fce1cc07bac8d7538fbf/0293b/featured.webp","srcSetWebp":"/website/static/117bdbe67629fce1cc07bac8d7538fbf/0293b/featured.webp 1x,\\n/website/static/117bdbe67629fce1cc07bac8d7538fbf/a9ee9/featured.webp 1.5x,\\n/website/static/117bdbe67629fce1cc07bac8d7538fbf/ec641/featured.webp 2x"}}}},"excerpt":"La Periférica colabora en la organización de este mini-festival en la sala\\nMadchester Club de Almería. Con las actuaciones de Loudly…"}},{"node":{"frontmatter":{"slug":"velada-audiovisual","title":"Velada Audiovisual","image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQL/2gAMAwEAAhADEAAAAVjdDcdkxCZ//8QAGxAAAQQDAAAAAAAAAAAAAAAAAgABAxEQEiH/2gAIAQEAAQUCCwN5WU0xOZFza8f/xAAXEQADAQAAAAAAAAAAAAAAAAAAAhES/9oACAEDAQE/AdRSH//EABcRAAMBAAAAAAAAAAAAAAAAAAECEBH/2gAIAQIBAT8BZdIn/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACEBEhQXH/2gAIAQEABj8CDtRg0FSbyP/EABkQAQEBAQEBAAAAAAAAAAAAAAERACFBYf/aAAgBAQABPyGBgesU6p8mV2Dkyt+61WrW7//aAAwDAQACAAMAAAAQv8//xAAWEQEBAQAAAAAAAAAAAAAAAAABACH/2gAIAQMBAT8Q1QA2/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Qrj//xAAdEAEBAAEEAwAAAAAAAAAAAAABEQAhMUHwUWGx/9oACAEBAAE/EIEeGsKP3IYA4asjEoA985GIIRkTFTyS+3piIt1rn//Z","width":320,"height":200,"src":"/website/static/75a885617ff984e6ad6b8bc7600aa60d/e9144/featured.jpg","srcSet":"/website/static/75a885617ff984e6ad6b8bc7600aa60d/e9144/featured.jpg 1x,\\n/website/static/75a885617ff984e6ad6b8bc7600aa60d/69fcd/featured.jpg 1.5x,\\n/website/static/75a885617ff984e6ad6b8bc7600aa60d/18040/featured.jpg 2x","srcWebp":"/website/static/75a885617ff984e6ad6b8bc7600aa60d/0293b/featured.webp","srcSetWebp":"/website/static/75a885617ff984e6ad6b8bc7600aa60d/0293b/featured.webp 1x,\\n/website/static/75a885617ff984e6ad6b8bc7600aa60d/a9ee9/featured.webp 1.5x,\\n/website/static/75a885617ff984e6ad6b8bc7600aa60d/ec641/featured.webp 2x"}}}},"excerpt":"Proyección de cortometrajes de cine social en colaboración con CIC BATÁ y el\\nmuseo de Almería."}}]}}}')},hYuR:function(A,e,a){"use strict";var t=a("EH9Q"),i=a("q1tI"),n=a.n(i),r=a("rid2");function c(A){var e=A.description,a=A.lang,i=A.meta,c=A.title,d=A.home,o=t.data.site,s=e||o.siteMetadata.description;return n.a.createElement(r.Helmet,{htmlAttributes:{lang:a},title:c,titleTemplate:d?o.siteMetadata.title:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(i)})}c.defaultProps={lang:"es",meta:[],description:"",home:!1},e.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-94bb12b36242df0e092b.js.map