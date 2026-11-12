(function(){"use strict";
var bs=document.querySelectorAll("button[data-t]"),tb=document.getElementById("chgTable");
if(tb){bs.forEach(function(b){b.addEventListener("click",function(){var t=b.getAttribute("data-t");
bs.forEach(function(x){x.setAttribute("aria-pressed",x===b)});
tb.querySelectorAll("tbody tr").forEach(function(r){r.hidden=!(t==="all"||r.getAttribute("data-t")===t)})})})}
})();
