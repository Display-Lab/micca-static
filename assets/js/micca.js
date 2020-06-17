var micca=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"Marple",(function(){return C})),r.d(t,"Validator",(function(){return _}));var n={},o={};function a(e){return new Function("d","return {"+e.map((function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'})).join(",")+"}")}function i(e){var t=Object.create(null),r=[];return e.forEach((function(e){for(var n in e)n in t||r.push(t[n]=n)})),r}function u(e,t){var r=e+"",n=r.length;return n<t?new Array(t-n+1).join(0)+r:r}function c(e){var t,r=e.getUTCHours(),n=e.getUTCMinutes(),o=e.getUTCSeconds(),a=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":((t=e.getUTCFullYear())<0?"-"+u(-t,6):t>9999?"+"+u(t,6):u(t,4))+"-"+u(e.getUTCMonth()+1,2)+"-"+u(e.getUTCDate(),2)+(a?"T"+u(r,2)+":"+u(n,2)+":"+u(o,2)+"."+u(a,3)+"Z":o?"T"+u(r,2)+":"+u(n,2)+":"+u(o,2)+"Z":n||r?"T"+u(r,2)+":"+u(n,2)+"Z":"")}var l=function(e){var t=new RegExp('["'+e+"\n\r]"),r=e.charCodeAt(0);function u(e,t){var a,i=[],u=e.length,c=0,l=0,s=u<=0,f=!1;function d(){if(s)return o;if(f)return f=!1,n;var t,a,i=c;if(34===e.charCodeAt(i)){for(;c++<u&&34!==e.charCodeAt(c)||34===e.charCodeAt(++c););return(t=c)>=u?s=!0:10===(a=e.charCodeAt(c++))?f=!0:13===a&&(f=!0,10===e.charCodeAt(c)&&++c),e.slice(i+1,t-1).replace(/""/g,'"')}for(;c<u;){if(10===(a=e.charCodeAt(t=c++)))f=!0;else if(13===a)f=!0,10===e.charCodeAt(c)&&++c;else if(a!==r)continue;return e.slice(i,t)}return s=!0,e.slice(i,u)}for(10===e.charCodeAt(u-1)&&--u,13===e.charCodeAt(u-1)&&--u;(a=d())!==o;){for(var p=[];a!==n&&a!==o;)p.push(a),a=d();t&&null==(p=t(p,l++))||i.push(p)}return i}function l(t,r){return t.map((function(t){return r.map((function(e){return f(t[e])})).join(e)}))}function s(t){return t.map(f).join(e)}function f(e){return null==e?"":e instanceof Date?c(e):t.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e}return{parse:function(e,t){var r,n,o=u(e,(function(e,o){if(r)return r(e,o-1);n=e,r=t?function(e,t){var r=a(e);return function(n,o){return t(r(n),o,e)}}(e,t):a(e)}));return o.columns=n||[],o},parseRows:u,format:function(t,r){return null==r&&(r=i(t)),[r.map(f).join(e)].concat(l(t,r)).join("\n")},formatBody:function(e,t){return null==t&&(t=i(e)),l(e,t).join("\n")},formatRows:function(e){return e.map(s).join("\n")},formatRow:s,formatValue:f}}(","),s=l.parse;l.parseRows,l.format,l.formatBody,l.formatRows,l.formatRow,l.formatValue;const f=["patient_mrn","delivery_date","counseling","contra_choice","imm_method","contra_prov","larc_prov","payer","choice_date","peripartum_care"],d=["yes","no","unknown"],p=["immediate pp iud","immediate pp nexplanon","pptl","other","none","unknown"],h=["immediate pp iud","immediate pp nexplanon","pptl","other","none","unknown"],m=["0-3 days","4-60 days","not provisioned","unknown"],v=["0-3 days","4-60 days pp visit","4-60 days not pp visit","not provisioned","unknown"],g=["medicaid","molina","private","other","unknown"],w=["yes","no","unknown"],y=/[0-9]{4}-[0-9]{2}-[0-9]{2}/,b={name:"Excel Input Error",message:"Input file is an Excel xlsx or xlsb.  This tool can only handle csv files."};class k{static diffCols(e){let t=new Set(e),r=new Set(f);return[...t].filter(e=>!r.has(e))}static diffHeader(e){let t=new Set(e);return[...new Set(f)].filter(e=>!t.has(e))}static parseToDf(e){if(80===e.charCodeAt(0)&&75===e.charCodeAt(1))throw b;return s(e.toLowerCase())}static isEmpty(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}}class C{static missingHeaders(e){return k.diffHeader(e)}static extraHeaders(e){return k.diffCols(e)}static outOfLocHeaders(e){return e.filter((e,t)=>{if(f.indexOf(e)>-1&&f.indexOf(e)!==t)return!0})}static checkValue(e,t){return t.includes(e)}static checkDateOrUnknown(e){return"unknown"===e||C.checkDate(e)}static checkDate(e){return!(!y.test(e)||!Date.parse(e))}static sleuthRow(e){let t=[""!==e.patient_mrn,C.checkDate(e.delivery_date),C.checkValue(e.counseling,d),C.checkValue(e.contra_choice,p),C.checkValue(e.imm_method,h),C.checkValue(e.contra_prov,m),C.checkValue(e.larc_prov,v),C.checkValue(e.payer,g),C.checkDateOrUnknown(e.choice_date),C.checkValue(e.peripartum_care,w)],r=[];for(let n=0;n<t.length;n++)!1===t[n]&&r.push(Object.keys(e)[n]);return r}static allRowProblems(e){let t=[],r={};for(let n=0;n<e.length;n++)t=C.sleuthRow(e[n]),t.length>0&&(r[n+1]=t);return r}static reportProblems(e){let t,r={};try{t=k.parseToDf(e)}catch(e){return r.parsing=e,r}let n=C.extraHeaders(t.columns),o=C.missingHeaders(t.columns),a=C.outOfLocHeaders(t.columns);n.length+o.length+o.length>0&&(r.headerProblems={}),n.length>0&&(r.headerProblems.extraHeaders=n),o.length>0&&(r.headerProblems.missingHeaders=o),o.length>0&&(r.headerProblems.wrongLocationHeaders=a);let i=C.allRowProblems(t);return k.isEmpty(i)||(r.rowProblems=i),r}}class _{static validateFile(e){let t=C.reportProblems(e);return k.isEmpty(t)}static verifyHeader(e){let t=C.outOfLocHeaders(e),r=C.missingHeaders(e),n=C.extraHeaders(e);return t.length<1&&r.length<1&&n.length<1}static validateValue(e,t){return t.includes(e)}static validateRow(e){return 0===C.sleuthRow(e).length}static validateDataFrame(e){return e.every(_.validateRow)}}}]);