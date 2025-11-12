let page = window.location.href
fetch("")
  .then(e=>{return e.text()}
  .then(data=>{document.getElementsByTagName("html")[0].outerHTML=data)
