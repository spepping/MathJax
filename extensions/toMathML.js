/*
 *  /MathJax/extensions/toMathML.js
 *  
 *  Copyright (c) 2012 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Register.LoadHook("[MathJax]/jax/element/mml/jax.js",function(){var b="2.2";var a=MathJax.ElementJax.mml;SETTINGS=MathJax.Hub.config.menuSettings;a.mbase.Augment({toMathML:function(k){var g=(this.inferred&&this.parent.inferRow);if(k==null){k=""}var e=this.type,d=this.toMathMLattributes();if(e==="mspace"){return k+"<"+e+d+" />"}var j=[];var h=(this.isToken?"":k+(g?"":"  "));for(var f=0,c=this.data.length;f<c;f++){if(this.data[f]){j.push(this.data[f].toMathML(h))}else{if(!this.isToken){j.push(h+"<mrow />")}}}if(this.isToken){return k+"<"+e+d+">"+j.join("")+"</"+e+">"}if(g){return j.join("\n")}if(j.length===0||(j.length===1&&j[0]==="")){return k+"<"+e+d+" />"}return k+"<"+e+d+">\n"+j.join("\n")+"\n"+k+"</"+e+">"},toMathMLattributes:function(){var j=[],g=this.defaults;var c=(this.attrNames||a.copyAttributeNames),l=a.skipAttributes;if(this.type==="math"&&(!this.attr||!this.attr.xmlns)){j.push('xmlns="http://www.w3.org/1998/Math/MathML"')}if(!this.attrNames){if(this.type==="mstyle"){g=a.math.prototype.defaults}for(var d in g){if(!l[d]&&g.hasOwnProperty(d)){var e=(d==="open"||d==="close");if(this[d]!=null&&(e||this[d]!==g[d])){var k=this[d];delete this[d];if(e||this.Get(d)!==k){j.push(d+'="'+this.toMathMLattribute(k)+'"')}this[d]=k}}}}for(var h=0,f=c.length;h<f;h++){if(c[h]==="class"){continue}k=(this.attr||{})[c[h]];if(k==null){k=this[c[h]]}if(k!=null){j.push(c[h]+'="'+this.toMathMLquote(k)+'"')}}this.toMathMLclass(j);if(j.length){return" "+j.join(" ")}else{return""}},toMathMLclass:function(c){var e=[];if(this["class"]){e.push(this["class"])}if(this.isa(a.TeXAtom)&&SETTINGS.texHints){var d=["ORD","OP","BIN","REL","OPEN","CLOSE","PUNCT","INNER","VCENTER"][this.texClass];if(d){e.push("MJX-TeXAtom-"+d)}}if(this.mathvariant&&this.toMathMLvariants[this.mathvariant]){e.push("MJX"+this.mathvariant)}if(this.arrow){e.push("MJX-arrow")}if(this.variantForm){e.push("MJX-variant")}if(e.length){c.unshift('class="'+e.join(" ")+'"')}},toMathMLattribute:function(c){if(typeof(c)==="string"&&c.replace(/ /g,"").match(/^(([-+])?(\d+(\.\d*)?|\.\d+))mu$/)){return RegExp.$2+((1/18)*RegExp.$3).toFixed(3).replace(/\.?0+$/,"")+"em"}else{if(this.toMathMLvariants[c]){return this.toMathMLvariants[c]}}return this.toMathMLquote(c)},toMathMLvariants:{"-tex-caligraphic":a.VARIANT.SCRIPT,"-tex-caligraphic-bold":a.VARIANT.BOLDSCRIPT,"-tex-oldstyle":a.VARIANT.NORMAL,"-tex-oldstyle-bold":a.VARIANT.BOLD,"-tex-mathit":a.VARIANT.ITALIC},toMathMLquote:function(f){f=String(f).split("");for(var g=0,d=f.length;g<d;g++){var k=f[g].charCodeAt(0);if(k<=55295||57344<=k){if(k<32||k>126){f[g]="&#x"+k.toString(16).toUpperCase()+";"}else{var j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[f[g]];if(j){f[g]=j}}}else{if(g+1<d){var h=f[g+1].charCodeAt(0);var e=(((k-55296)<<10)+(h-56320)+65536);f[g]="&#x"+e.toString(16).toUpperCase()+";";f[g+1]="";g++}else{f[g]=""}}}return f.join("")}});a.msubsup.Augment({toMathML:function(h){var e=this.type;if(this.data[this.sup]==null){e="msub"}if(this.data[this.sub]==null){e="msup"}var d=this.toMathMLattributes();delete this.data[0].inferred;var g=[];for(var f=0,c=this.data.length;f<c;f++){if(this.data[f]){g.push(this.data[f].toMathML(h+"  "))}}return h+"<"+e+d+">\n"+g.join("\n")+"\n"+h+"</"+e+">"}});a.munderover.Augment({toMathML:function(h){var e=this.type;if(this.data[this.under]==null){e="mover"}if(this.data[this.over]==null){e="munder"}var d=this.toMathMLattributes();delete this.data[0].inferred;var g=[];for(var f=0,c=this.data.length;f<c;f++){if(this.data[f]){g.push(this.data[f].toMathML(h+"  "))}}return h+"<"+e+d+">\n"+g.join("\n")+"\n"+h+"</"+e+">"}});a.TeXAtom.Augment({toMathML:function(d){var c=this.toMathMLattributes();if(!c&&this.data[0].data.length===1){return d.substr(2)+this.data[0].toMathML(d)}return d+"<mrow"+c+">\n"+this.data[0].toMathML(d+"  ")+"\n"+d+"</mrow>"}});a.chars.Augment({toMathML:function(c){return(c||"")+this.toMathMLquote(this.toString())}});a.entity.Augment({toMathML:function(c){return(c||"")+"&"+this.data[0]+";<!-- "+this.toString()+" -->"}});a.xml.Augment({toMathML:function(c){return(c||"")+this.toString()}});MathJax.Hub.Register.StartupHook("TeX mathchoice Ready",function(){a.TeXmathchoice.Augment({toMathML:function(c){return this.Core().toMathML(c)}})});MathJax.Hub.Startup.signal.Post("toMathML Ready")});MathJax.Ajax.loadComplete("[MathJax]/extensions/toMathML.js");

