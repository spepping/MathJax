/*
 *  /MathJax/extensions/TeX/boldsymbol.js
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

MathJax.Extension["TeX/boldsymbol"]={version:"2.2"};MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var a=MathJax.ElementJax.mml;var d=MathJax.InputJax.TeX;var b=d.Definitions;var c={};c[a.VARIANT.NORMAL]=a.VARIANT.BOLD;c[a.VARIANT.ITALIC]=a.VARIANT.BOLDITALIC;c[a.VARIANT.FRAKTUR]=a.VARIANT.BOLDFRAKTUR;c[a.VARIANT.SCRIPT]=a.VARIANT.BOLDSCRIPT;c[a.VARIANT.SANSSERIF]=a.VARIANT.BOLDSANSSERIF;c["-tex-caligraphic"]="-tex-caligraphic-bold";c["-tex-oldstyle"]="-tex-oldstyle-bold";b.Add({macros:{boldsymbol:"Boldsymbol"}},null,true);d.Parse.Augment({mmlToken:function(f){if(this.stack.env.boldsymbol){var e=f.Get("mathvariant");if(e==null){f.mathvariant=a.VARIANT.BOLD}else{f.mathvariant=(c[e]||e)}}return f},Boldsymbol:function(h){var e=this.stack.env.boldsymbol,f=this.stack.env.font;this.stack.env.boldsymbol=true;this.stack.env.font=null;var g=this.ParseArg(h);this.stack.env.font=f;this.stack.env.boldsymbol=e;this.Push(g)}});MathJax.Hub.Startup.signal.Post("TeX boldsymbol Ready")});MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var a=MathJax.OutputJax["HTML-CSS"];var c=a.FONTDATA.FONTS;var b=a.FONTDATA.VARIANT;if(a.fontInUse==="TeX"){c["MathJax_Caligraphic-bold"]="Caligraphic/Bold/Main.js";b["-tex-caligraphic-bold"]={fonts:["MathJax_Caligraphic-bold","MathJax_Main-bold","MathJax_Main","MathJax_Math","MathJax_Size1"],offsetA:65,variantA:"bold-italic"};b["-tex-oldstyle-bold"]={fonts:["MathJax_Caligraphic-bold","MathJax_Main-bold","MathJax_Main","MathJax_Math","MathJax_Size1"]};if(a.msieCheckGreek&&a.Font.testFont({family:"MathJax_Greek",weight:"bold",style:"italic",testString:a.msieCheckGreek})){b["bold-italic"].offsetG=913;b["bold-italic"].variantG="-Greek-Bold-Italic";b["-Greek-Bold-Italic"]={fonts:["MathJax_Greek-bold-italic"]};c["MathJax_Greek-bold-italic"]="Greek/BoldItalic/Main.js"}if(MathJax.Hub.Browser.isChrome&&!MathJax.Hub.Browser.versionAtLeast("5.0")){b["-tex-caligraphic-bold"].remap={84:[58096,"-WinChrome"]}}}else{if(a.fontInUse==="STIX"){b["-tex-caligraphic-bold"]={fonts:["STIXGeneral-bold-italic","STIXNonUnicode-bold-italic","STIXNonUnicode","STIXGeneral","STIXSizeOneSym"],offsetA:57927,noLowerCase:1};b["-tex-oldstyle-bold"]={fonts:["STIXGeneral-bold","STIXNonUnicode-bold","STIXGeneral","STIXSizeOneSym"],offsetN:57955,remap:{57956:57959,57957:57963,57958:57967,57959:57971,57960:57975,57961:57979,57962:57983,57963:57987,57964:57991}}}}});MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var c=MathJax.OutputJax.SVG;var b=c.FONTDATA.FONTS;var a=c.FONTDATA.VARIANT;b["MathJax_Caligraphic-bold"]="Caligraphic/Bold/Main.js";a["-tex-caligraphic-bold"]={fonts:["MathJax_Caligraphic-bold","MathJax_Main-bold","MathJax_Main","MathJax_Math","MathJax_Size1"],offsetA:65,variantA:"bold-italic"};a["-tex-oldstyle-bold"]={fonts:["MathJax_Caligraphic-bold","MathJax_Main-bold","MathJax_Main","MathJax_Math","MathJax_Size1"]}});MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/boldsymbol.js");

