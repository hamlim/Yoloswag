$(document).ready(function(){function t(t){if(t.status>=200&&t.status<300)return t;var n=new Error(t.statusText);throw n.response=t,n}function n(t){return t.json()}fetch("https://api.airtable.com/v0/app35atgWtDtBboot/music",{method:"GET",headers:{Authorization:"Bearer keyIye3zskPSBMQ6Q","Content-Type":"application/json"}}).then(t).then(n).then(function(t){console.log(t)},function(t){console.log(t)})});