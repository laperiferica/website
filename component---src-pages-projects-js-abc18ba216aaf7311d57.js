(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"16l3":function(A,e,t){"use strict";t.r(e);t("0mN4");var a=t("wYdv"),i=t("q1tI"),c=t.n(i),d=t("cMT4"),r=t("L6Je"),E=t("hYuR"),s=t("zzrc");e.default=function(){var A=a.data.projects.edges;return c.a.createElement(r.a,null,c.a.createElement(E.a,{title:"Proyectos"}),c.a.createElement(s.a,{id:"projects",title:"Nuestros Proyectos"},c.a.createElement(d.a,{items:A.map((function(A){return{uri:"/projects/"+A.node.frontmatter.slug,title:A.node.frontmatter.title,image:A.node.frontmatter.image.childImageSharp.fixed}}))})))}},EH9Q:function(A){A.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"La Periférica","description":"La Periférica","author":"@jlopezcur"}}}}')},cMT4:function(A,e,t){"use strict";var a=t("q1tI"),i=t.n(a),c=t("vOnD"),d=t("9eSz"),r=t.n(d),E=t("Wbzz"),s=c.b.div.withConfig({displayName:"Item__StyledItem",componentId:"u47zea-0"})(["position:relative;text-align:left;.gatsby-image-wrapper{display:block !important;}.gatsby-image-wrapper,img{margin-bottom:0;}box-shadow:0 0 0.3rem rgba(0,0,0,0.3);.image{overflow:hidden;a{display:block;&:hover{transform:scale(1.2) rotate(5deg);}}}.title{position:absolute;bottom:-1rem;right:0.5rem;background:rgba(255,255,255,1);padding:0.7rem 1rem 1.5rem;box-shadow:0 -0.2rem 0.2rem rgba(0,0,0,0.2);a{text-transform:uppercase;color:var(--primary-color);text-decoration:none;font-size:1.4rem;}small{text-align:right;display:block;color:gray;}}"]),n=function(A){var e=A.uri,t=A.image,a=A.title,c=A.date;return i.a.createElement(s,null,i.a.createElement("div",{className:"image"},i.a.createElement(E.Link,{to:e},i.a.createElement(r.a,{objectFit:"cover",objectPosition:"100% 0",width:"100%",height:"100%",maxHeight:"25rem",fixed:t,alt:a}))),i.a.createElement("div",{className:"title"},i.a.createElement(E.Link,{to:e},a),c&&i.a.createElement("small",null,c)))},f=c.b.section.withConfig({displayName:"Grid__StyledGrid",componentId:"sc-1i6fwxt-0"})(["margin:1rem 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(410px,410px));grid-gap:1.5rem;justify-content:center;justify-items:center;"]),o=function(A){var e=A.items;return i.a.createElement(f,null,e.map((function(A,e){return i.a.createElement("div",{key:e},i.a.createElement(n,A))})))};e.a=o},hYuR:function(A,e,t){"use strict";var a=t("EH9Q"),i=t("q1tI"),c=t.n(i),d=t("rid2");function r(A){var e=A.description,t=A.lang,i=A.meta,r=A.title,E=A.home,s=a.data.site,n=e||s.siteMetadata.description;return c.a.createElement(d.Helmet,{htmlAttributes:{lang:t},title:r,titleTemplate:E?s.siteMetadata.title:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:r},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:n}].concat(i)})}r.defaultProps={lang:"es",meta:[],description:"",home:!1},e.a=r},wYdv:function(A){A.exports=JSON.parse('{"data":{"projects":{"edges":[{"node":{"frontmatter":{"slug":"taste-of-diversity","title":"\\"Taste of diversity\\"","image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwAEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAIA/9oADAMBAAIQAxAAAAHohkYtY43/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADERIy/9oACAEBAAEFAmfIbICrC5+4KsqTz//EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oACAEDAQE/AYj/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwFn/8QAGxAAAwADAQEAAAAAAAAAAAAAAAERAiExEkH/2gAIAQEABj8CblNY2Kl4Ly5ql7cSP5o//8QAGhAAAgMBAQAAAAAAAAAAAAAAAAERITFRQf/aAAgBAQABPyGHo1bgfaVZtvBDXSwXmA7ZA54LFBPyP//aAAwDAQACAAMAAAAQ4N//xAAXEQEAAwAAAAAAAAAAAAAAAAAAARFB/9oACAEDAQE/EIL0/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBR/9oACAECAQE/EAgLJl//xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUGhUWGB/9oACAEBAAE/EKoTVAEeT56jmhBUA4CuepiWE2MkOd0VQlCaO4wjXi0s4gBrQZYJ/9k=","width":410,"height":300,"src":"/website/static/cd7d229f4c01df54c6de4153adae2df7/6100b/featured.jpg","srcSet":"/website/static/cd7d229f4c01df54c6de4153adae2df7/6100b/featured.jpg 1x,\\n/website/static/cd7d229f4c01df54c6de4153adae2df7/c64ea/featured.jpg 1.5x,\\n/website/static/cd7d229f4c01df54c6de4153adae2df7/7d5da/featured.jpg 2x","srcWebp":"/website/static/cd7d229f4c01df54c6de4153adae2df7/08916/featured.webp","srcSetWebp":"/website/static/cd7d229f4c01df54c6de4153adae2df7/08916/featured.webp 1x,\\n/website/static/cd7d229f4c01df54c6de4153adae2df7/c1956/featured.webp 1.5x,\\n/website/static/cd7d229f4c01df54c6de4153adae2df7/5cc64/featured.webp 2x"}}}}}},{"node":{"frontmatter":{"slug":"el-pulso-del-fotograma","title":"El pulso del fotograma","image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAcZqKScUH//EABkQAAMBAQEAAAAAAAAAAAAAAAABAgMTEf/aAAgBAQABBQLroXWiOuhDSdeSj//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EACAQAAECBQUAAAAAAAAAAAAAAAACAwERITKREBJxgaL/2gAIAQEABj8CvVknBxUuS9WSqd3ZVn1p/8QAHRAAAgEEAwAAAAAAAAAAAAAAAAExESFBcaGx8f/aAAgBAQABPyFVF3znQT05kmiBdFpbjk//2gAMAwEAAgADAAAAENMP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHBABAQACAgMAAAAAAAAAAAAAAREAIYHwUZHB/9oACAEBAAE/EHkyU6XFKymtw+87x9x9KABUvGSHFlpvhxCkIXR4z//Z","width":410,"height":300,"src":"/website/static/6be8fe2f72aa266a490e1214b24d8880/6100b/featured.jpg","srcSet":"/website/static/6be8fe2f72aa266a490e1214b24d8880/6100b/featured.jpg 1x","srcWebp":"/website/static/6be8fe2f72aa266a490e1214b24d8880/08916/featured.webp","srcSetWebp":"/website/static/6be8fe2f72aa266a490e1214b24d8880/08916/featured.webp 1x"}}}}}},{"node":{"frontmatter":{"slug":"erasmus+","title":"Erasmus +","image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABaZrFSPSAf//EABoQAAICAwAAAAAAAAAAAAAAAAABAyECIkL/2gAIAQEAAQUCdCl3xdSM6TP/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAABBAMAAAAAAAAAAAAAAAARABASITFigf/aAAgBAQAGPwJA1jqto7Fv/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARIVEx/9oACAEBAAE/Ia+ptQQ6qEekpMg33hcZP//aAAwDAQACAAMAAAAQ19//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxAn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHBABAQACAgMAAAAAAAAAAAAAAREAITFBUWGR/9oACAEBAAE/EEFUMlomCCnR8wKkPTvGDsbwwC0KDlt2+cC9BeHP/9k=","width":410,"height":300,"src":"/website/static/c71b86283a45f9cd89406f82c947a47d/6100b/featured.jpg","srcSet":"/website/static/c71b86283a45f9cd89406f82c947a47d/6100b/featured.jpg 1x,\\n/website/static/c71b86283a45f9cd89406f82c947a47d/c64ea/featured.jpg 1.5x,\\n/website/static/c71b86283a45f9cd89406f82c947a47d/7d5da/featured.jpg 2x","srcWebp":"/website/static/c71b86283a45f9cd89406f82c947a47d/08916/featured.webp","srcSetWebp":"/website/static/c71b86283a45f9cd89406f82c947a47d/08916/featured.webp 1x,\\n/website/static/c71b86283a45f9cd89406f82c947a47d/c1956/featured.webp 1.5x,\\n/website/static/c71b86283a45f9cd89406f82c947a47d/5cc64/featured.webp 2x"}}}}}},{"node":{"frontmatter":{"slug":"las-fiestas-del-mañana","title":"Las fiestas del mañana","image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAIDBP/aAAwDAQACEAMQAAABopxC3iL4/wD/xAAaEAACAgMAAAAAAAAAAAAAAAAAAgERITEy/9oACAEBAAEFApu8ij9ULr//xAAYEQEBAAMAAAAAAAAAAAAAAAABAAMhMv/aAAgBAwEBPwEQDVm7b//EABkRAAIDAQAAAAAAAAAAAAAAAAABAxIyQf/aAAgBAgEBPwGrfSPKP//EABYQAAMAAAAAAAAAAAAAAAAAABAgMf/aAAgBAQAGPwJKP//EAB0QAQADAAEFAAAAAAAAAAAAAAEAESGREDFRcYH/2gAIAQEAAT8hdu57l+ZzE1rGn1tTYD2vPS//2gAMAwEAAgADAAAAEKQv/8QAGhEBAAIDAQAAAAAAAAAAAAAAAQARMUFRYf/aAAgBAwEBPxAYpg5w8gCo3P/EABoRAAICAwAAAAAAAAAAAAAAAAABESFRcbH/2gAIAQIBAT8QkN5PuyVx/8QAHhABAAICAQUAAAAAAAAAAAAAAQARIVExQWFxgfD/2gAIAQEAAT8QwCoXlHiYe1vzLOxb3fQhxpoaEZM4inksVtVO58+if//Z","width":410,"height":300,"src":"/website/static/117bdbe67629fce1cc07bac8d7538fbf/6100b/featured.jpg","srcSet":"/website/static/117bdbe67629fce1cc07bac8d7538fbf/6100b/featured.jpg 1x,\\n/website/static/117bdbe67629fce1cc07bac8d7538fbf/c64ea/featured.jpg 1.5x","srcWebp":"/website/static/117bdbe67629fce1cc07bac8d7538fbf/08916/featured.webp","srcSetWebp":"/website/static/117bdbe67629fce1cc07bac8d7538fbf/08916/featured.webp 1x,\\n/website/static/117bdbe67629fce1cc07bac8d7538fbf/c1956/featured.webp 1.5x"}}}}}},{"node":{"frontmatter":{"slug":"velada-audiovisual","title":"Velada Audiovisual","image":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABYBAQEBAAAAAAAAAAAAAAAAAAMBAv/aAAwDAQACEAMQAAABmV4TR3MSEz//xAAZEAACAwEAAAAAAAAAAAAAAAABAgADERD/2gAIAQEAAQUCTUc2iXXMXJJXGbn/xAAXEQADAQAAAAAAAAAAAAAAAAAAARES/9oACAEDAQE/AdREP//EABcRAAMBAAAAAAAAAAAAAAAAAAECEBH/2gAIAQIBAT8BZdIn/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACEBEhQXH/2gAIAQEABj8CDtRg0FSbyP/EABoQAQEBAAMBAAAAAAAAAAAAAAERACExQWH/2gAIAQEAAT8hgYHrFOVPkyuwcTXCJirO77y1u//aAAwDAQACAAMAAAAQv8//xAAXEQEBAQEAAAAAAAAAAAAAAAABACEx/9oACAEDAQE/ENIdgBt//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Qrj//xAAeEAEBAAIABwAAAAAAAAAAAAABEQAhMUFRYbHw8f/aAAgBAQABPxCBHhuFHzkMAcm2RiUAfeuGNIIyOPRN+9PmIi4rXP/Z","width":410,"height":300,"src":"/website/static/75a885617ff984e6ad6b8bc7600aa60d/6100b/featured.jpg","srcSet":"/website/static/75a885617ff984e6ad6b8bc7600aa60d/6100b/featured.jpg 1x,\\n/website/static/75a885617ff984e6ad6b8bc7600aa60d/c64ea/featured.jpg 1.5x,\\n/website/static/75a885617ff984e6ad6b8bc7600aa60d/7d5da/featured.jpg 2x","srcWebp":"/website/static/75a885617ff984e6ad6b8bc7600aa60d/08916/featured.webp","srcSetWebp":"/website/static/75a885617ff984e6ad6b8bc7600aa60d/08916/featured.webp 1x,\\n/website/static/75a885617ff984e6ad6b8bc7600aa60d/c1956/featured.webp 1.5x,\\n/website/static/75a885617ff984e6ad6b8bc7600aa60d/5cc64/featured.webp 2x"}}}}}}]}}}')},zzrc:function(A,e,t){"use strict";var a=t("q1tI"),i=t.n(a),c=t("vOnD"),d=c.b.a.withConfig({displayName:"Anchor__StyledAnchor",componentId:"sc-8dvo1q-0"})(["display:block;position:relative;top:-100px;visibility:hidden;"]),r=function(A){var e=A.id;return i.a.createElement(d,{id:e})},E=c.b.section.withConfig({displayName:"Section__StyledSection",componentId:"ewvvtd-0"})(["padding:1.5rem;max-width:1280px;margin:0 auto;text-align:center;h2{margin-bottom:2rem;}"]);e.a=function(A){var e=A.children,t=A.id,a=A.title;return i.a.createElement(E,null,i.a.createElement(r,{id:t}),i.a.createElement("h2",null,a),e)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-abc18ba216aaf7311d57.js.map