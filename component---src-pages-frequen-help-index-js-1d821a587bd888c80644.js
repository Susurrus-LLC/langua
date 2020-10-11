(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FT44:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("cy/P"),r=n.n(o);t.a=function(e){var t=e.ver,n=e.onClick,a=e.id,o=e.small,i=e.type,s=e.role,c=e.route,u=e.link,d=e.children,m=function(){var e=r.a.btn;return["neutral","success","danger"].find((function(e){return e===t}))&&(e+=" "+r.a[t]),o&&(e+=" "+r.a.small),e};return u?l.a.createElement("a",{href:"/"+c,id:a,className:m()+" "+r.a.buttonLink},d):l.a.createElement("button",{onClick:n,id:a,className:m(),type:i||"button",role:s||"button"},d)}},K4Nl:function(e,t,n){"use strict";n.r(t),n.d(t,"PureFrequenHelp",(function(){return s}));var a=n("q1tI"),l=n.n(a),o=n("Wbzz"),r=n("OXyD"),i=n("VAZE"),s=function(e){var t,n,a=e.data,o=null==a||null===(t=a.site)||void 0===t?void 0:t.siteMetadata,s=null==o||null===(n=o.toolInfo)||void 0===n?void 0:n.frequen;return l.a.createElement(i.a,{toolInfo:s},l.a.createElement("h3",{id:"using"},"Using ",null==o?void 0:o.title,null==s?void 0:s.title),l.a.createElement("h4",{id:"corpus"},"Text Corpus"),l.a.createElement("p",null,"Input a corpus of text in the ",l.a.createElement("strong",null,"Text Corpus")," field. This is the text that will be analyzed. The text can be phomic or phonetic, or it can simply use the language’s standard spelling system. For best results, however, each sound that should be analyzed separately will need its own grapheme or grapheme cluster. For example, in English, the letter ",l.a.createElement("code",null,"y")," would need to be differentiated based on when it occurs as a consonant vs. when it occurs as a vowel. It does not matter if punctuation is removed from the corpus, as any graphemes not identified for analysis in the next step will be ignored by the tool."),l.a.createElement("h4",{id:"phonemes"},"Phonemes"),l.a.createElement("p",null,"Next, add a list of consonants and vowels accordingly to the"," ",l.a.createElement("strong",null,"Consonants")," and ",l.a.createElement("strong",null,"Vowels")," lists. Separate each of the segments with a forward slash (",l.a.createElement("code",null,"/"),"). These segments can be single graphemes or grapheme clusters, and a cluster can contain characters that are used in shorter segments. For example, given the corpus ",l.a.createElement("code",null,"kanto")," and the consonants"," ",l.a.createElement("code",null,"n/t/nt"),", the tool will identify one occurance of"," ",l.a.createElement("code",null,"nt"),", but no occurances of ",l.a.createElement("code",null,"n")," or ",l.a.createElement("code",null,"t"),". Any graphemes not identified for analysis will be ignored. In the previous example, since ",l.a.createElement("code",null,"k")," was not added to the list of consonants, the tool would not count its occurance."),l.a.createElement("h4",{id:"allophones"},"Allophones"),l.a.createElement("p",null,"Allophones can be added after a segment to indicate that multiple segments should all be counted as occurances of the same segment. Separate allophones with a comma (",l.a.createElement("code",null,","),"). For example, given the corpus ",l.a.createElement("code",null,"potaná"),", if the vowels list contained ",l.a.createElement("code",null,"a/á/o"),", the tool would identify one occurance each of ",l.a.createElement("code",null,"a"),", ",l.a.createElement("code",null,"á"),", and ",l.a.createElement("code",null,"o"),", but if the vowels list contained ",l.a.createElement("code",null,"a,á/o"),", the tool would identify two occurances of ",l.a.createElement("code",null,"a")," and one occurance of ",l.a.createElement("code",null,"o"),"."),l.a.createElement("h4",{id:"analysis"},"Analysis"),l.a.createElement("p",null,"When ready, click the ",l.a.createElement("strong",null,"Analyze")," button to run the analysis. The tool will draw a graph and display a table showing the frequencies of each of the identified segments in the text corpus. Segments that never occur will be omitted from the graph and table."),l.a.createElement("h4",{id:"filtering"},"Filtering"),l.a.createElement(r.a,null,"This feature is still in development."),l.a.createElement("p",null,"After a text has been analyzed, the results can be filtered to show only certain segments. Choosing a filter will show the percentages in the data as it compares to only segments of that type, rather than comparing to all segments."),l.a.createElement("p",null,"Currently, the results can be filtered to show only consonants or only vowels. Additional filtering options will be added in the future."),l.a.createElement("h4",{id:"files"},"Saving and Loading Settings"),l.a.createElement("p",null,"Clicking the ",l.a.createElement("strong",null,"Save")," button will save the current settings to the browser’s local storage and generate a small ",l.a.createElement("code",null,".lngf")," ","text file containing the current settings that can be saved to your disk. This ",l.a.createElement("code",null,".lngf")," file can be loaded using the"," ",l.a.createElement("strong",null,"Open")," button to reload saved settings."),l.a.createElement("h3",{id:"acknowledgments"},"Acknowledgments"),l.a.createElement("p",null,"Much thanks should be given to Jan Strasser and"," ",l.a.createElement("a",{href:"http://akana.conlang.org/tools/frequentizer.html",target:"_blank",rel:"noopener noreferrer"},"the Frequentizer"),". ",null==o?void 0:o.title,null==s?void 0:s.title," was mainly built as a modernized and updated version of the Frequentizer."))};t.default=function(e){var t=Object(o.useStaticQuery)("3333795083");return l.a.createElement(s,Object.assign({},e,{data:t}))}},OXyD:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("soK+"),r=n.n(o);t.a=function(e){var t=e.children;return l.a.createElement("p",{className:r.a.notice},t)}},VAZE:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("Wbzz"),r=n("I/Ru"),i=n("jNNy"),s=n("FT44"),c=n("tvmY"),u=n.n(c),d=function(e){var t,n=e.data,a=e.toolInfo,o=e.children,c=null==n||null===(t=n.site)||void 0===t?void 0:t.siteMetadata;return l.a.createElement(r.a,null,l.a.createElement(i.a,{title:""+(null==c?void 0:c.title)+(null==a?void 0:a.title)+" Help",canonical:(null==a?void 0:a.link)+"/help"}),l.a.createElement(s.a,{link:!0,route:null==a?void 0:a.link},"Back"),l.a.createElement("h2",{className:u.a.toolTitle},""+(null==c?void 0:c.title)+(null==a?void 0:a.title)+" Help"),l.a.createElement("p",{id:u.a.description},""+(null==c?void 0:c.title)+(null==a?void 0:a.title)+" "+(null==a?void 0:a.description)),o)};t.a=function(e){var t=Object(o.useStaticQuery)("4063318711");return l.a.createElement(d,Object.assign({},e,{data:t}))}},"cy/P":function(e,t,n){e.exports={btn:"button-module--btn--1Vo01",neutral:"button-module--neutral--3CChK",success:"button-module--success--MfUtK",danger:"button-module--danger--3YJms",small:"button-module--small--gFeIB",buttonLink:"button-module--button-link--2l7Ks"}},"soK+":function(e,t,n){e.exports={notice:"notice-module--notice--14xfk"}},tvmY:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-frequen-help-index-js-1d821a587bd888c80644.js.map