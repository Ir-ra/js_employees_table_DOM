parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("thead"),t=document.querySelector("tbody"),n=document.querySelector("body"),a=function(e,t,n){var a=e.querySelector("td:nth-child(".concat(n,")")).textContent,c=t.querySelector("td:nth-child(".concat(n,")")).textContent;return a.localeCompare(c)},c=function(e,t){return a(e,t,1)},r=function(e,t){return a(e,t,2)},o=function(e,t){return a(e,t,3)},i=function(e,t){return e.querySelector("td:nth-child(4)").textContent-t.querySelector("td:nth-child(4)").textContent},l=function(e,t){return+e.querySelector("td:nth-child(5)").textContent.replace(/[^0-9.-]+/g,"")-+t.querySelector("td:nth-child(5)").textContent.replace(/[^0-9.-]+/g,"")},s={Name:c,Position:r,Office:o,Age:i,Salary:l};function d(){e.addEventListener("click",function(n){var a=t.querySelectorAll("tr"),c=Array.from(a),r=s[n.target.textContent];n.target.classList.contains("asc")?(c.sort(function(e,t){return r(t,e)}),n.target.classList.remove("asc"),n.target.classList.add("desc")):(c.sort(r),n.target.classList.remove("desc"),n.target.classList.add("asc")),e.querySelectorAll("th").forEach(function(e){e!==n.target&&e.classList.remove("asc","desc")}),c.forEach(function(e){t.append(e)})})}function u(){t.addEventListener("click",function(e){var n=e.target.closest("tr");if(n.classList.contains("active"))n.classList.remove("active");else{var a=t.querySelector(".active");a&&a.classList.remove("active"),n.classList.add("active")}})}d(),u();var m=document.createElement("form");m.method="get",m.action="/",m.className="new-employee-form",n.append(m);var f=[{label:"Name:",type:"text",qa:"name",name:"name"},{label:"Position:",type:"text",qa:"position",name:"position"},{label:"Age:",type:"number",qa:"age",name:"age"},{label:"Salary:",type:"number",qa:"salary",name:"salary"}];f.forEach(function(e){var t=document.createElement("label"),n=document.createElement("input");t.textContent=e.label,n.type=e.type,n.dataset.qa=e.qa,n.name=e.name,n.required="true",t.appendChild(n),m.appendChild(t)});var p=document.createElement("label"),y=document.createElement("select");y.dataset.qa="office",y.name="office",y.required="true",p.textContent="Office:";var v=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"];v.forEach(function(e){var t=document.createElement("option");t.textContent=e,y.append(t)});var h=m.querySelector("label:nth-child(2)");h.after(p),p.append(y);var g=document.createElement("button");g.textContent="Save to table",g.type="submit",m.append(g);var q=document.querySelector(".new-employee-form");function b(){q.addEventListener("submit",function(e){e.preventDefault();var n=new FormData(q),a=Object.fromEntries(n.entries());a.name.length<4||a.age<18||a.age>90?S("error","Name of employee must be longer than 4 characters and age must be between 18 - 90 y.o."):(t.insertAdjacentHTML("afterbegin","\n      <tr>\n        <td>".concat(a.name,"</td>\n        <td>").concat(a.position,"</td>\n        <td>").concat(a.office,"</td>\n        <td>").concat(a.age,"</td>\n        <td>$").concat(a.salary.toLocaleString("en-US"),"</td>\n      </tr>\n    ")),S("success","Employee is successfully added"),m.reset())})}function S(e,t){var a=document.createElement("div"),c=document.createElement("h2"),r=document.createElement("p");c.textContent=e,r.textContent="".concat(t),a.setAttribute("class","notification ".concat(e)),a.dataset.qa="notification",a.append(c,r),n.append(a),setTimeout(function(){return a.remove()},4e3)}b();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.d5121fa6.js.map