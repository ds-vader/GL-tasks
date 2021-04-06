let listElemts = document.getElementsByTagName("li")

for(let i = 0; i < listElemts.length; i++){
    let span = document.createElement("span")
    //let mark = document.createTextNode("\u00D7")
    let mark = document.createElement("i")
    mark.className = "far fa-trash-alt delete"

    span.className = "close"
    span.appendChild(mark)

    listElemts[i].appendChild(span)
}

