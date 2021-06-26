(self.webpackChunklangua=self.webpackChunklangua||[]).push([[54],{2283:function(e,t,a){"use strict";a.r(t),a.d(t,{PureDeriv:function(){return Z},default:function(){return C}});var n=a(7294),r=a(5444),s=a(2691),i=a(5900),l=a.n(i),o=a(3721),d=a(5167),u=a(9668),m=a(9154),c=a(7340),f=a(9663),v=function(e){var t=e.styles,a=e.data,r=e.change,s=n.createRef(),i=a.lexemes.map((function(e,a){return n.createElement("div",{key:a,className:t.derivRow},n.createElement("input",{type:"text",id:"lw"+a,name:"lw"+a,className:t.lexemeInput,value:e.lexeme,onChange:r,"aria-label":"Word for lexeme "+a}),n.createElement("input",{type:"text",id:"ld"+a,name:"ld"+a,className:t.lexemeDefInput,value:e.definition,onChange:r,"aria-label":"Gloss for lexeme "+a}),n.createElement("div",{className:t.clearButton},n.createElement(d.Z,{id:"lc"+a,onClick:r,ver:"danger",small:!0,type:"button","aria-label":"Delete lexeme "+a},"Delete")))})),v=a.derivations.map((function(e,a){return n.createElement("div",{key:a,className:t.derivRow},n.createElement("input",{type:"text",id:"da"+a,name:"da"+a,className:t.derivationInput,value:e.derivation,onChange:r,"aria-label":"Affix "+a}),n.createElement("input",{type:"text",id:"dl"+a,name:"dl"+a,className:t.derivationGlossInput,value:e.gloss,onChange:r,"aria-label":"Gloss for affix "+a}),n.createElement("input",{type:"text",id:"dd"+a,name:"dd"+a,className:t.derivationDefInput,value:e.definition,onChange:r,"aria-label":"Definition for affix "+a}),n.createElement("div",{className:t.clearButton},n.createElement(d.Z,{id:"dc"+a,onClick:r,ver:"danger",small:!0,type:"button","aria-label":"Delete lexeme "+a},"Delete")))})),p=function(e){return n.createElement("div",{className:t.addingRow},n.createElement(d.Z,{onClick:r,id:e+"Add",ver:"success",small:!0,type:"button"},"Add"))};return n.createElement(o.Z,{name:"deriv-form"},n.createElement("div",{className:l()(t.lexemes,f.Z.part)},n.createElement("h5",{className:f.Z.sectionTitle},"Lexemes"),n.createElement("div",{className:t.derivRow},n.createElement("h6",{className:l()(t.columnLabel,t.wordLabel)},"Word"),n.createElement("h6",{className:l()(t.columnLabel,t.definitionLabel)},"Gloss")),i,p("lex")),n.createElement("div",{className:l()(t.derivations,f.Z.part)},n.createElement("h5",{className:f.Z.sectionTitle},"Derivational Affixes"),n.createElement("div",{className:t.derivRow},n.createElement("h6",{className:l()(t.columnLabel,t.affixLabel)},"Affix"),n.createElement("h6",{className:l()(t.columnLabel,t.glossLabel)},"Gloss"),n.createElement("h6",{className:l()(t.columnLabel,t.definitionLabel)},"Definition")),v,p("der")),n.createElement(u.Z,{addedClasses:f.Z.part},n.createElement(m.Z,{side:"left"},n.createElement(c.Z,null,n.createElement(d.Z,{type:"submit",ver:"neutral",onClick:r},"Derive")),n.createElement(c.Z,null,n.createElement("label",{htmlFor:"words"},"number of words to derive:"),n.createElement("input",{type:"number",id:"words",name:"words",min:"1",max:"9999",className:t.wordsInput,value:a.words,onChange:r})),n.createElement(c.Z,null,n.createElement("label",{htmlFor:"type"},"output type:"),n.createElement("select",{id:"type",name:"type",value:a.type,onChange:r},n.createElement("option",{value:"any"},"any base, any derivation"),n.createElement("option",{value:"single base"},"single base"),n.createElement("option",{value:"single derivation"},"single derivation")))),n.createElement(m.Z,{side:"right"},n.createElement(c.Z,null,n.createElement(d.Z,{id:"save",ver:"success",onClick:r,type:"button"},"Save")),n.createElement(c.Z,null,n.createElement(d.Z,{id:"open",onClick:function(e){e.preventDefault(),s.current.value="",s.current.click()},type:"button"},"Open"),n.createElement("input",{id:"file",name:"file",className:f.Z.hidden,type:"file",ref:s,onChange:r})))))},p=a(7673),g=a(5015),h=function(e){var t,a,r=e.styles,s=e.results,i=(0,n.useState)(null),o=i[0],d=i[1],u=function(e,t,a){return"affix"===e?n.createElement("div",{className:r.outputBox},n.createElement("p",{className:r.term},t.derivation),n.createElement("p",{className:l()(r.affixGloss,r.gloss,a===o?r.hoveredGloss:null),onMouseOver:function(){return m(a)},onMouseOut:function(){return c(a)}},t.gloss)):"lexeme"===e?n.createElement("div",{className:r.outputBox},n.createElement("p",{className:r.term},t.lexeme),n.createElement("p",{className:l()(r.lexGloss,r.gloss)},t.definition)):"error"===e?n.createElement("div",{className:r.outputBox},n.createElement("p",{className:l()(g.Z.error,r.gloss)},t)):null},m=function(e){d(e)},c=function(e){d(null)};return n.createElement(p.Z,null,n.createElement("div",{className:r.output},s&&s.newWords.length?s.newWords.map((function(e,t){return n.createElement("div",{key:t,className:l()(r.derivRow,r.outputRow)},n.createElement("div",{className:l()(r.outputBox,r.rowNumber)},t+1,"."),n.createElement("div",null,n.createElement("div",{className:l()(r.derivRow,r.outputRow)},e.prefix?u("affix",e.prefix,t):null,e.lexeme?u("lexeme",e.lexeme,t):null,e.suffix?u("affix",e.suffix,t):null,e.error?u("error",e.error,t):null),n.createElement("p",{className:l()(r.affixDef,t===o?r.hoveredDef:null)},e.prefix?e.prefix.definition:e.suffix?e.suffix.definition:"")))})):null),n.createElement("div",{className:g.Z.stats},n.createElement("p",{className:g.Z.statsText},(t=0,a=0,s&&(t=s.newWords.length.toLocaleString(),a=s.possible.toLocaleString()),"words: "+t+"; maximum derivations possible: "+a))))},x=a(2591),b=a(3086),N=a.n(b),y=a(6649),E=a(570),w=new(function(){function e(){this.item="deriv",this.getData=this.getData.bind(this),this.save=this.save.bind(this),this.open=this.open.bind(this),this.setStorage=this.setStorage.bind(this),this.add=this.add.bind(this),this.clear=this.clear.bind(this),this.changeInput=this.changeInput.bind(this),this.derive=this.derive.bind(this)}var t=e.prototype;return t.getData=function(){return y.Z.getData(this.item)},t.setStorage=function(e){y.Z.setStorage(e,this.item)},t.save=function(e){E.Z.save(e,this.item)},t.open=function(e,t){var a,n=this;window.FileReader?E.Z.openFile(e,(function(r){if(e.name.endsWith(".lngd")){var s=N()({lexeme:String,definition:String}),i=N()({derivation:String,gloss:String,definition:String}),l=N()({words:Number,type:["any","single base","single derivation"],lexemes:Array.of(s),derivations:Array.of(i)}),o=JSON.parse(r);o.results&&(o.results.words=+o.results.words),l(o)?(x.Am.success("Data loaded from "+e.name+".",{autoClose:5e3,className:"toast-opened",bodyClassName:"toast-opened-body",progressClassName:"toast-opened-progress"}),n.setStorage(o),a=o):(x.Am.warn("The content of "+e.name+" is invalid.",{autoClose:5e3,className:"toast-unopened",bodyClassName:"toast-unopened-body",progressClassName:"toast-unopened-progress"}),console.error(l.errors(o)),a=!1)}else x.Am.warn("Wrong filetype selected.",{autoClose:5e3,className:"toast-unopened",bodyClassName:"toast-unopened-body",progressClassName:"toast-unopened-progress"}),a=!1;t(a)})):(x.Am.warn("Your browser is unable to open files.",{autoClose:5e3,className:"toast-unopened",bodyClassName:"toast-unopened-body",progressClassName:"toast-unopened-progress"}),t(a=!1))},t.add=function(e,t){var a=JSON.parse(JSON.stringify(e));return"lex"===t?a.lexemes.push({lexeme:"",definition:""}):a.derivations.push({derivation:"",gloss:"",definition:""}),a},t.clear=function(e,t,a){var n=JSON.parse(JSON.stringify(e));return"l"===a?n.lexemes.splice(t,1):n.derivations.splice(t,1),n},t.changeInput=function(e,t,a,n){var r=JSON.parse(JSON.stringify(e));switch(a){case"lw":r.lexemes[t].lexeme=n;break;case"ld":r.lexemes[t].definition=n;break;case"da":r.derivations[t].derivation=n;break;case"dl":r.derivations[t].gloss=n;break;case"dd":r.derivations[t].definition=n}return r},t.wordNumChange=function(e,t){if((t=+t)<1?t=1:t>9999&&(t=9999),t>0&&t<1e4){var a=JSON.parse(JSON.stringify(e));return a.words=t,a}return!1},t.derive=function(e){var t,a=JSON.parse(JSON.stringify(e)),n="single base"===(t=a.type)?a.derivations.length:"single derivation"===t?a.lexemes.length:a.lexemes.length*a.derivations.length,r=a.words>n?n:a.words,s=a.derivations.map((function(e){if(e.derivation=e.derivation.replace(/-+/g,"-"),/-/.test(e.derivation)){if(1===e.derivation.match(/-/g).length){if(/-$/.test(e.derivation))return e.gloss=e.gloss+"-",{prefix:e};if(/^-/.test(e.derivation))return e.gloss="-"+e.gloss,{suffix:e};var t=e.derivation.split(/-/),a=JSON.parse(JSON.stringify(e)),n=JSON.parse(JSON.stringify(e));return a.derivation=t[0]+"-",a.gloss=a.gloss+"-",n.derivation="-"+t[1],n.gloss="-"+n.gloss,{prefix:a,suffix:n}}return{error:"The affix "+e.derivation+" contains too many hyphens."}}return{error:"The affix "+e.derivation+" is missing a hyphen."}})),i=function(e,t){return{prefix:t.prefix,lexeme:e,suffix:t.suffix,error:t.error}};return"single base"===a.type?{newWords:function(){for(var e=a.lexemes[Math.floor(Math.random()*a.lexemes.length)],t=[];r>0;){var n=Math.floor(Math.random()*s.length),l=s[n];t.push(i(e,l)),s.splice(n,1),r--}return t}(),possible:n}:"single derivation"===a.type?{newWords:function(){for(var e=s[Math.floor(Math.random()*s.length)],t=[];r>0;){var n=Math.floor(Math.random()*a.lexemes.length),l=a.lexemes[n];t.push(i(l,e)),a.lexemes.splice(n,1),r--}return t}(),possible:n}:{newWords:function(){for(var e=[],t=function t(){for(var n=a.lexemes[Math.floor(Math.random()*a.lexemes.length)],r=s[Math.floor(Math.random()*s.length)],l=i(n,r),o=!0,d=0;d<e.length;d++)if(JSON.stringify(l)===JSON.stringify(e[d])){o=!1;break}return o||(l=t()),l};r>0;)e.push(t()),r--;return e}(),possible:n}},e}()),S={wordsInput:"deriv-module--words-input--3_pLI",derivRow:"deriv-module--deriv-row--1FFeo",addingRow:"deriv-module--adding-row--sX2At",outputRow:"deriv-module--output-row--3vdh4",columnLabel:"deriv-module--column-label--35gi5",lexemeInput:"deriv-module--lexeme-input--16dBy",wordLabel:"deriv-module--word-label--1lbrW",derivationGlossInput:"deriv-module--derivation-gloss-input--2GHha",glossLabel:"deriv-module--gloss-label--1Z2GZ",lexemeDefInput:"deriv-module--lexeme-def-input--2xyWj",definitionLabel:"deriv-module--definition-label--NOxBT",derivationDefInput:"deriv-module--derivation-def-input--3ZtSX",derivationInput:"deriv-module--derivation-input--22_N2",affixLabel:"deriv-module--affix-label--1h9ZC",outputBox:"deriv-module--output-box--1WN2x",rowNumber:"deriv-module--row-number--1EVu1",term:"deriv-module--term--MwRlp",gloss:"deriv-module--gloss--2Y62Y",lexGloss:"deriv-module--lex-gloss--2o52m",affixGloss:"deriv-module--affix-gloss--EICTR",affixDef:"deriv-module--affix-def--xtHjE",hoveredGloss:"deriv-module--hovered-gloss--3Fqw9",hoveredDef:"deriv-module--hovered-def--Ozs0j"},Z=function(e){var t,a,r,i=e.data,l=null==i||null===(t=i.site)||void 0===t||null===(a=t.siteMetadata)||void 0===a||null===(r=a.toolInfo)||void 0===r?void 0:r.deriv,o=(0,n.useState)(w.getData().words),d=o[0],u=o[1],m=(0,n.useState)(w.getData().type),c=m[0],f=m[1],p=(0,n.useState)(w.getData().lexemes),g=p[0],x=p[1],b=(0,n.useState)(w.getData().derivations),N=b[0],y=b[1],E=(0,n.useState)(w.getData().results),Z=E[0],C=E[1];return n.createElement(s.Z,{toolInfo:l},n.createElement(v,{styles:S,data:{words:d,type:c,lexemes:g,derivations:N},change:function(e){var t={words:d,type:c,lexemes:g,derivations:N,results:Z};if("BUTTON"===e.target.tagName){if(e.preventDefault(),"submit"===e.target.type){var a=w.derive(t);t.results=a,C(a),w.setStorage(t)}else if("save"===e.target.id)w.save(t);else if("Add"===e.target.id.slice(3)){var n=e.target.id.slice(0,3),r=w.add(t,n);x(r.lexemes),y(r.derivations)}else if("c"===e.target.id.slice(1,2)){var s=e.target.id.slice(2),i=e.target.id.slice(0,1),l=w.clear(t,s,i);x(l.lexemes),y(l.derivations)}}else if("file"===e.target.type){e.preventDefault();var o=e.target.files[0];w.open(o,(function(e){e&&(u(e.words),f(e.type),x(e.lexemes),y(e.derivations),C(e.results))}))}else{var m=e.target.id.slice(2),v=e.target.id.slice(0,2),p=e.target.value,h=e.target.name;if("lw"===v||"ld"===v||"da"===v||"dl"===v||"dd"===v){var b=w.changeInput(t,m,v,p);b&&(u(b.words),f(b.type),x(b.lexemes),y(b.derivations),C(b.results))}else if("words"===h){var E=w.wordNumChange(t,p);E&&(u(E.words),f(E.type),x(E.lexemes),y(E.derivations),C(E.results))}else"type"===h&&f(p)}}}),n.createElement(h,{styles:S,results:Z}))},C=function(e){var t=(0,r.useStaticQuery)("3097149197");return n.createElement(Z,Object.assign({},e,{data:t}))}}}]);
//# sourceMappingURL=component---src-pages-deriv-index-js-159aec1b043c1d5dbbc4.js.map