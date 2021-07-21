(self.webpackChunklangua=self.webpackChunklangua||[]).push([[963],{3421:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r="notice-module--notice--1QCeC",s=function(e){var t=e.children;return a.createElement("p",{className:r},t)}},531:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var a=n(7294),r=(n(5444),n(3421)),s=n(4585),o=n(5900),i=n.n(o),l=n(1597),u=n(1685),c=n(9668),h=n(9154),p=n(7340),g=n(16),m=function(e){var t=e.styles,n=e.data,r=e.change,s=e.morph,o=e.check,m=e.save,d=e.open,f=a.createRef(),v=function(e){return e.join("\n")};return a.createElement(l.Z,{name:"morph-form"},a.createElement("div",{className:t.section},a.createElement("div",{className:i()(t.categories,t.inputSection,g.Z.part)},a.createElement("h5",{className:g.Z.sectionTitle},"Categories"),a.createElement("div",{className:t.container},a.createElement("textarea",{id:"categories",name:"categories",className:i()(t.categoriesInput,t.dataInput),value:v(n.categories),onChange:r,"aria-label":"Categories"}),a.createElement("div",{className:t.textAreaSpacer},v(n.categories)," "))),a.createElement("div",{className:i()(t.rewriteRules,t.inputSection,g.Z.part)},a.createElement("h5",{className:g.Z.sectionTitle},"Rewrite Rules"),a.createElement("div",{className:t.container},a.createElement("textarea",{id:"rewriteRules",name:"rewriteRules",className:i()(t.rewriteRulesInput,t.dataInput),value:v(n.rewriteRules),onChange:r,"aria-label":"Rewrite rules"}),a.createElement("div",{className:t.textAreaSpacer},v(n.rewriteRules)," "))),a.createElement("div",{className:i()(t.soundChanges,t.inputSection,g.Z.part)},a.createElement("h5",{className:g.Z.sectionTitle},"Sound Changes"),a.createElement("div",{className:t.container},a.createElement("textarea",{id:"soundChanges",name:"soundChanges",className:i()(t.soundChangesInput,t.dataInput),value:v(n.soundChanges),onChange:r,"aria-label":"Sound changes"}),a.createElement("div",{className:t.textAreaSpacer},v(n.soundChanges)," "))),a.createElement("div",{className:i()(t.lexicon,t.inputSection,g.Z.part)},a.createElement("h5",{className:g.Z.sectionTitle},"Lexicon"),a.createElement("div",{className:t.container},a.createElement("textarea",{id:"lexicon",name:"lexicon",className:i()(t.lexiconInput,t.dataInput),value:v(n.lexicon),onChange:r,"aria-label":"Lexicon"}),a.createElement("div",{className:t.textAreaSpacer},v(n.lexicon)," ")))),a.createElement(c.Z,{addedClasses:g.Z.part},a.createElement(h.Z,{side:"left"},a.createElement(p.Z,null,a.createElement(u.Z,{type:"submit",ver:"neutral",onClick:s},"Change")),a.createElement(p.Z,null,a.createElement("label",{htmlFor:"outputFormat"},"output format:"),a.createElement("select",{id:"outputFormat",name:"outputFormat",value:n.outputFormat,onChange:r},a.createElement("option",{value:"oo"},"output"),a.createElement("option",{value:"io"},"input → output"),a.createElement("option",{value:"oi"},"output ← input"))),a.createElement(p.Z,null,a.createElement("div",null,a.createElement("label",null,a.createElement("input",{type:"checkbox",id:"showChanges",name:"options",value:"showChanges",checked:n.showChanges,onChange:o})," ","italicize changes"),a.createElement("br",null),a.createElement("label",null,a.createElement("input",{type:"checkbox",id:"showDiff",name:"options",value:"showDiff",checked:n.showDiff,onChange:o})," ","bold differences"))),a.createElement(p.Z,null,a.createElement("div",null,a.createElement("label",null,a.createElement("input",{type:"checkbox",id:"ruleReport",name:"options",value:"ruleReport",checked:n.ruleReport,onChange:o})," ","report applied rules"),a.createElement("br",null),a.createElement("label",null,a.createElement("input",{type:"checkbox",id:"rewriteOutput",name:"options",value:"rewriteOutput",checked:n.rewriteOutput,onChange:o})," ","rewrite on output")))),a.createElement(h.Z,{side:"right"},a.createElement(p.Z,null,a.createElement(u.Z,{id:"save",ver:"success",onClick:m,type:"button"},"Save")),a.createElement(p.Z,null,a.createElement(u.Z,{id:"open",onClick:function(e){e.preventDefault(),f.current.value="",f.current.click()},type:"button"},"Open"),a.createElement("input",{id:"file",name:"file",className:g.Z.hidden,type:"file",ref:f,onChange:d})))))},d=n(7504),f=n(8356),v=function(e){var t,n=e.styles,r=e.outputFormat,s=e.results,o=e.showDiff,l=e.showChanges,u=s||[];return a.createElement(d.Z,null,a.createElement("div",{className:n.output},function(){if("string"==typeof u[0])return u.map((function(e,t){return a.createElement("p",{className:i()(n.outText,f.Z.error),key:t},e)}));var e=function(e){return o&&e.diff?l&&e.input!==e.output?i()(n.outText,n.different,n.changed):i()(n.outText,n.different):l&&e.input!==e.output?i()(n.outText,n.changed):n.outText};return u.length>0?u.map((function(t,n){return a.createElement("p",{className:e(t),key:n},function(e){return"oo"===r?e.output.trim():"io"===r?e.input.trim()+" "+String.fromCharCode(8594)+" "+e.output.trim():"oi"===r?e.output.trim()+" "+String.fromCharCode(8592)+" "+e.input.trim():void 0}(t))})):a.createElement("p",{className:n.outText})}()),a.createElement("div",{className:f.Z.stats},a.createElement("p",{className:f.Z.statsText},(t=function(){for(var e=u.length,t=0,n=0,a=0;a<e;a++)u[a].input===u[a].output&&t++,u[a].diff&&n++;return{total:e,changed:e-t,unchangedWords:t,different:n,same:e-n}}()).changed+" of "+t.total+" words changed ("+t.unchanged+" unchanged); "+t.different+" of "+t.total+" words different from last time ("+t.same+" the same)")))},w=n(2591),C=n(3086),x=n.n(C),E=n(6649),b=n(570),y=new(function(){function e(){this.item="morph",this.getData=this.getData.bind(this),this.removeResults=this.removeResults.bind(this),this.setStorage=this.setStorage.bind(this),this.save=this.save.bind(this),this.open=this.open.bind(this),this.splitRewriteRules=this.splitRewriteRules.bind(this),this.rewriteCats=this.rewriteCats.bind(this),this.splitCategories=this.splitCategories.bind(this),this.rewriteChanges=this.rewriteChanges.bind(this),this.splitSoundChanges=this.splitSoundChanges.bind(this),this.rewriteLex=this.rewriteLex.bind(this),this.unrewriteLex=this.unrewriteLex.bind(this),this.applyChanges=this.applyChanges.bind(this),this.getResults=this.getResults.bind(this),this.idDiff=this.idDiff.bind(this),this.morph=this.morph.bind(this)}var t=e.prototype;return t.getData=function(){return E.Z.getData(this.item)},t.removeResults=function(e){var t=JSON.parse(JSON.stringify(e));return delete t.results,t},t.setStorage=function(e){E.Z.setStorage(this.removeResults(e),this.item)},t.save=function(e){b.Z.save(this.removeResults(e),this.item)},t.open=function(e,t){var n,a=this;window.FileReader?b.Z.openFile(e,(function(r){if(e.name.endsWith(".lngm")){var s=x()({categories:Array.of(String),rewriteRules:Array.of(String),soundChanges:Array.of(String),lexicon:Array.of(String),outputFormat:["oo","io","oi"],showDiff:Boolean,ruleReport:Boolean,rewriteOutput:Boolean}),o=JSON.parse(r);o.results&&(o.results.words=+o.results.words),s(o)?(w.Am.success("Data loaded from "+e.name+".",{autoClose:5e3,className:"toast-opened",bodyClassName:"toast-opened-body",progressClassName:"toast-opened-progress"}),a.setStorage(o),n=o):(w.Am.warn("The content of "+e.name+" is invalid.",{autoClose:5e3,className:"toast-unopened",bodyClassName:"toast-unopened-body",progressClassName:"toast-unopened-progress"}),console.error(s.errors(o)),n=!1)}else w.Am.warn("Wrong filetype selected.",{autoClose:5e3,className:"toast-unopened",bodyClassName:"toast-unopened-body",progressClassName:"toast-unopened-progress"}),n=!1;t(n)})):(w.Am.warn("Your browser is unable to open files.",{autoClose:5e3,className:"toast-unopened",bodyClassName:"toast-unopened-body",progressClassName:"toast-unopened-progress"}),t(n=!1))},t.splitRewriteRules=function(e){for(var t=[],n=[],a=0;a<e.length;a++){var r=e[a].split("=");if(r.length>2)n.push("The rewrite rule "+e[a]+" has too many = signs.");else if(r.length<2){if(0===e[a].length)continue;n.push("The rewrite rule "+e[a]+" is missing an = sign.")}else t.push({rewriteFrom:r[0],rewriteTo:r[1]})}return n.length?n:t},t.rewriteCats=function(e,t){for(var n=0;n<t.length;n++){var a=new RegExp(t[n].rewriteFrom,"g");e[1]=e[1].replace(a,t[n].rewriteTo)}return e},t.splitCategories=function(e,t){for(var n=[],a=[],r=0;r<e.length;r++){var s=e[r].split("=");if(s.length>2)a.push("The category "+e[r]+" has too many = signs.");else if(s.length<2){if(0===e[r].length)continue;a.push("The category "+e[r]+" is missing an = sign.")}else if(s[0].length>1)a.push("The category "+e[r]+" needs to be assigned to a single-character variable.");else{var o=this.rewriteCats(s,t);n.push(o)}}for(var i=[],l=0;l<n.length;l++){var u={};u.variable=n[l][0],u.categories=n[l][1].split(""),i.push(u)}return a.length?a:i},t.rewriteChanges=function(e,t){var n=JSON.parse(JSON.stringify(e));for(var a in n)if(n.hasOwnProperty(a))for(var r=0;r<t.length;r++){var s=new RegExp(t[r].rewriteFrom,"g");n[a]=n[a].replace(s,t[r].rewriteTo)}return n},t.splitSoundChanges=function(e,t,n){for(var a=[],r=[],s=function(t){var n=!1;switch(t){case"_":return"target";case"#":return"wordboundary";case"[":return"brackopen";case"]":return"brackclose";case"(":return"parenopen";case")":return"parenclose";default:for(var a=0;a<e.length;a++)if(t===e[a].variable){n=!0;break}return n?"category":"literal"}},o=0;o<t.length;o++){var i=t[o].split("/");if(i.length>4)r.push("The sound change "+t[o]+" has too many / signs.");else if(i.length<2){if(0===t[o].length)continue;r.push("The sound change "+t[o]+" is missing a / sign.")}else{var l={changeFrom:i[0],changeTo:i[1]};i[2]&&(l.context=i[2],/_/.test(i[2])?/_/.exec(i[2]).length>2&&r.push("The context in the sound change "+t[o]+" has too many _ signs."):r.push("The context in the sound change "+t[o]+" is missing an _ sign.")),i[3]&&(l.exception=i[3],/_/.test(i[3])?/_/.exec(i[3]).length>2&&r.push("The exception in the sound change "+t[o]+" has too many _ signs."):r.push("The exception in the sound change "+t[o]+" is missing an _ sign."));for(var u=this.rewriteChanges(l,n),c=[],h=0;h<u.changeFrom.length;h++)c.push(s(u.changeFrom[h]));u.changeFromID=c;for(var p=[],g=0;g<u.changeTo.length;g++)p.push(s(u.changeTo[g]));u.changeToID=p;var m=[];if(u.context){for(var d=0;d<u.context.length;d++)m.push(s(u.context[d]));u.contextID=m}var f=[];if(u.exception){for(var v=0;v<u.exception.length;v++)f.push(s(u.exception[v]));u.exceptionID=f}a.push(u)}}return r.length?r:a},t.rewriteLex=function(e,t){for(var n=[],a=0;a<e.length;a++){for(var r=e[a],s=0;s<t.length;s++){var o=new RegExp(t[s].rewriteFrom,"g");r=r.replace(o,t[s].rewriteTo)}n.push(r)}return n},t.unrewriteLex=function(e,t){for(var n=JSON.parse(JSON.stringify(e)),a=0;a<n.length;a++)for(var r=0;r<t.length;r++){var s=new RegExp(t[r].rewriteTo,"g");n[a].output=n[a].output.replace(s,t[r].rewriteFrom)}return n},t.applyChanges=function(e,t,n){for(var a=n,r=0;r<t.length;r++){t[r].context&&t[r].context.replace(/#/g,"\\b"),t[r].exception&&t[r].exception.replace(/#/g,"\\b");var s=void 0,o=void 0,i=void 0,l=void 0;t[r].context?(s=t[r].context.replace("_",t[r].changeFrom),o=t[r].context.replace("_",t[r].changeTo),t[r].exception?(i=t[r].exception.replace("_",t[r].changeFrom),l=new RegExp(i+"|("+s+")","g"),a=a.replace(l,o)):(l=new RegExp(s,"g"),a=a.replace(l,o))):(l=new RegExp(t[r].changeFrom,"g"),a=a.replace(l,t[r].changeTo))}return a},t.getResults=function(e,t,n,a,r){for(var s=this.rewriteLex(a,t),o=[],i=0;i<a.length;i++)o.push({input:a[i],output:this.applyChanges(e,n,s[i])});return r?this.unrewriteLex(o,t):o},t.idDiff=function(e,t){var n=JSON.parse(JSON.stringify(t));if(void 0!==e.results&&e.results.length&&"string"!=typeof e.results[0])for(var a=0;a<n.length;a++)n[a].diff=n[a].input!==e.results[a].input||n[a].output!==e.results[a].output;else for(var r=0;r<n.length;r++)n[r].diff=!0;return n},t.morph=function(e){var t=JSON.parse(JSON.stringify(e)),n=this.splitRewriteRules(t.rewriteRules),a=this.splitCategories(t.categories,n),r=this.splitSoundChanges(a,t.soundChanges,n),s=[];if("string"==typeof a[0]&&(s=s.concat(a)),"string"==typeof n[0]&&(s=s.concat(n)),"string"==typeof r[0]&&(s=s.concat(r)),s.length)return s;var o=this.getResults(a,n,r,t.lexicon,t.rewriteOutput);return this.idDiff(t,o)},e}()),N={section:"morph-module--section--1I-l1",container:"morph-module--container--dNMnn",dataInput:"morph-module--data-input--wRMgE",textAreaSpacer:"morph-module--text-area-spacer--1nXYi",inputSection:"morph-module--input-section--4Neqi",outText:"morph-module--out-text--w6CnP",different:"morph-module--different--16-UT",changed:"morph-module--changed--3WLYm"},R=function(e){var t,n,o,i,l=null===(t=e.data)||void 0===t||null===(n=t.site)||void 0===n||null===(o=n.siteMetadata)||void 0===o||null===(i=o.toolInfo)||void 0===i?void 0:i.morph,u=(0,a.useState)(y.getData().categories),c=u[0],h=u[1],p=(0,a.useState)(y.getData().rewriteRules),g=p[0],d=p[1],f=(0,a.useState)(y.getData().soundChanges),w=f[0],C=f[1],x=(0,a.useState)(y.getData().lexicon),E=x[0],b=x[1],R=(0,a.useState)(y.getData().outputFormat),S=R[0],D=R[1],T=(0,a.useState)(y.getData().showDiff),Z=T[0],k=T[1],F=(0,a.useState)(y.getData().showChanges),O=F[0],I=F[1],A=(0,a.useState)(y.getData().ruleReport),_=A[0],J=A[1],L=(0,a.useState)(y.getData().rewriteOutput),W=L[0],B=L[1],M=(0,a.useState)(y.getData().results),Y=M[0],P=M[1];return a.createElement(s.Z,{toolInfo:l},a.createElement(r.Z,null,"This tool is still in development."),a.createElement(m,{styles:N,data:{categories:c,rewriteRules:g,soundChanges:w,lexicon:E,outputFormat:S,showDiff:Z,showChanges:O,ruleReport:_,rewriteOutput:W},change:function(e){var t,n=e.target.name;switch(t="textarea"===e.target.type?e.target.value.split("\n"):e.target.value,n){case"categories":h(t);break;case"rewriteRules":d(t);break;case"soundChanges":C(t);break;case"lexicon":b(t);break;case"outputFormat":D(t)}},morph:function(e){e.preventDefault();var t={categories:c,rewriteRules:g,soundChanges:w,lexicon:E,outputFormat:S,showDiff:Z,showChanges:O,ruleReport:_,rewriteOutput:W,results:Y};P(y.morph(t)),y.setStorage(t)},check:function(e){var t=e.target.value,n=e.target.checked;switch(t){case"showChanges":I(n);break;case"showDiff":k(n);break;case"ruleReport":J(n);break;case"rewriteOutput":B(n)}},save:function(e){e.preventDefault();var t={categories:c,rewriteRules:g,soundChanges:w,lexicon:E,outputFormat:S,showDiff:Z,showChanges:O,ruleReport:_,rewriteOutput:W,results:Y};y.save(t)},open:function(e){e.preventDefault();var t=e.target.files[0];y.open(t,(function(e){e&&(h(e.categories),d(e.rewriteRules),C(e.soundChanges),b(e.lexicon),D(e.outputFormat),k(e.showDiff),I(e.showChanges),J(e.ruleReport),B(e.rewriteOutput),P(e.results))}))}}),a.createElement(v,{styles:N,outputFormat:S,results:Y,showDiff:Z,showChanges:O}))}}}]);
//# sourceMappingURL=component---src-pages-morph-index-js-bd22a3d26185ff5c1f97.js.map