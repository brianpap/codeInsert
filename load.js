let page = window.location.href
fetch("https://raw.githubusercontent.com/brianpap/codeInsert/refs/heads/main/load.js")
  .then(e=>{return e.text()}
  .then(data=>{document.getElementsByTagName("html")[0].outerHTML=data)
