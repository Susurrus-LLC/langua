(self.webpackChunklangua=self.webpackChunklangua||[]).push([[73],{5167:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var l=n(7294),a={btn:"button-module--btn--Hxea0",neutral:"button-module--neutral--1Jfpx",success:"button-module--success--3v2EC",danger:"button-module--danger--UAgqr",small:"button-module--small--aOOYC",buttonLink:"button-module--button-link--kKU0I"},o=n(5444),r=function(e){var t=e.ver,n=e.onClick,r=e.id,i=e.small,s=e.type,c=e.role,u=e.route,d=e.link,h=e.external,m=e.children,f=function(){var e=a.btn;return["neutral","success","danger"].find((function(e){return e===t}))&&(e+=" "+a[t]),i&&(e+=" "+a.small),e};return d?h?l.createElement("a",{href:"/"+u,id:r,className:f()+" "+a.buttonLink},m):l.createElement(o.Link,{to:"/"+u,id:r,className:f()+" "+a.buttonLink},m):l.createElement("button",{onClick:n,id:r,className:f(),type:s||"button",role:c||"button"},m)}},738:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var l={};n.r(l);var a=n(7294),o=n(5444),r=n(4678),i=n(2789),s=n(5167),c=function(e){var t,n=e.data,o=e.toolInfo,c=e.children,u=null==n||null===(t=n.site)||void 0===t?void 0:t.siteMetadata;return a.createElement(r.Z,null,a.createElement(i.Z,{title:""+(null==u?void 0:u.title)+(null==o?void 0:o.title)+" Help",canonical:(null==o?void 0:o.link)+"/help"}),a.createElement(s.Z,{link:!0,route:null==o?void 0:o.link},"Back"),a.createElement("h2",{className:l.default.toolTitle},""+(null==u?void 0:u.title)+(null==o?void 0:o.title)+" Help"),a.createElement("p",{id:l.default.description},""+(null==u?void 0:u.title)+(null==o?void 0:o.title)+" "+(null==o?void 0:o.description)),c)},u=function(e){var t=(0,o.useStaticQuery)("4063318711");return a.createElement(c,Object.assign({},e,{data:t}))}},4692:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var l=n(7294),a="notice-module--notice--1QCeC",o=function(e){var t=e.children;return l.createElement("p",{className:a},t)}},844:function(e,t,n){"use strict";n.r(t),n.d(t,{PureFrequenHelp:function(){return i}});var l=n(7294),a=n(5444),o=n(4692),r=n(738),i=function(e){var t,n,a=e.data,i=null==a||null===(t=a.site)||void 0===t?void 0:t.siteMetadata,s=null==i||null===(n=i.toolInfo)||void 0===n?void 0:n.frequen;return l.createElement(r.Z,{toolInfo:s},l.createElement("h3",{id:"using"},"Using ",null==i?void 0:i.title,null==s?void 0:s.title),l.createElement("h4",{id:"corpus"},"Text Corpus"),l.createElement("p",null,"Input a corpus of text in the ",l.createElement("strong",null,"Text Corpus")," field. This is the text that will be analyzed. The text can be phomic or phonetic, or it can simply use the language’s standard spelling system. For best results, however, each sound that should be analyzed separately will need its own grapheme or grapheme cluster. For example, in English, the letter ",l.createElement("code",null,"y")," would need to be differentiated based on when it occurs as a consonant vs. when it occurs as a vowel. It does not matter if punctuation is removed from the corpus, as any graphemes not identified for analysis in the next step will be ignored by the tool."),l.createElement("h4",{id:"phonemes"},"Phonemes"),l.createElement("p",null,"Next, add a list of consonants and vowels accordingly to the"," ",l.createElement("strong",null,"Consonants")," and ",l.createElement("strong",null,"Vowels")," lists. Separate each of the segments with a forward slash (",l.createElement("code",null,"/"),"). These segments can be single graphemes or grapheme clusters, and a cluster can contain characters that are used in shorter segments. For example, given the corpus ",l.createElement("code",null,"kanto")," and the consonants"," ",l.createElement("code",null,"n/t/nt"),", the tool will identify one occurance of"," ",l.createElement("code",null,"nt"),", but no occurances of ",l.createElement("code",null,"n")," or ",l.createElement("code",null,"t"),". Any graphemes not identified for analysis will be ignored. In the previous example, since ",l.createElement("code",null,"k")," was not added to the list of consonants, the tool would not count its occurance."),l.createElement("h4",{id:"allophones"},"Allophones"),l.createElement("p",null,"Allophones can be added after a segment to indicate that multiple segments should all be counted as occurances of the same segment. Separate allophones with a comma (",l.createElement("code",null,","),"). For example, given the corpus ",l.createElement("code",null,"potaná"),", if the vowels list contained ",l.createElement("code",null,"a/á/o"),", the tool would identify one occurance each of ",l.createElement("code",null,"a"),", ",l.createElement("code",null,"á"),", and ",l.createElement("code",null,"o"),", but if the vowels list contained ",l.createElement("code",null,"a,á/o"),", the tool would identify two occurances of ",l.createElement("code",null,"a")," and one occurance of ",l.createElement("code",null,"o"),"."),l.createElement("h4",{id:"analysis"},"Analysis"),l.createElement("p",null,"When ready, click the ",l.createElement("strong",null,"Analyze")," button to run the analysis. The tool will draw a graph and display a table showing the frequencies of each of the identified segments in the text corpus. Segments that never occur will be omitted from the graph and table."),l.createElement("h4",{id:"filtering"},"Filtering"),l.createElement(o.Z,null,"This feature is still in development."),l.createElement("p",null,"After a text has been analyzed, the results can be filtered to show only certain segments. Choosing a filter will show the percentages in the data as it compares to only segments of that type, rather than comparing to all segments."),l.createElement("p",null,"Currently, the results can be filtered to show only consonants or only vowels. Additional filtering options will be added in the future."),l.createElement("h4",{id:"files"},"Saving and Loading Settings"),l.createElement("p",null,"Clicking the ",l.createElement("strong",null,"Save")," button will save the current settings to the browser’s local storage and generate a small ",l.createElement("code",null,".lngf")," ","text file containing the current settings that can be saved to your disk. This ",l.createElement("code",null,".lngf")," file can be loaded using the"," ",l.createElement("strong",null,"Open")," button to reload saved settings."),l.createElement("h3",{id:"acknowledgments"},"Acknowledgments"),l.createElement("p",null,"Much thanks should be given to Jan Strasser and"," ",l.createElement("a",{href:"http://akana.conlang.org/tools/frequentizer.html",target:"_blank",rel:"noopener noreferrer"},"the Frequentizer"),". ",null==i?void 0:i.title,null==s?void 0:s.title," was mainly built as a modernized and updated version of the Frequentizer."))};t.default=function(e){var t=(0,a.useStaticQuery)("3333795083");return l.createElement(i,Object.assign({},e,{data:t}))}}}]);
//# sourceMappingURL=component---src-pages-frequen-help-index-js-bbb80267a37900a89838.js.map