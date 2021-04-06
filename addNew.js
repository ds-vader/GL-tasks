function newElement () {
    let li = document.createElement("li")
    let inputValue = document.getElementById("newItemValue").value
    let t = document.createTextNode(inputValue)

    li.appendChild(t)

    if(inputValue === ""){
        alert("Empty input!")
    }else{
        document.getElementById("list").appendChild(li)
    }

    document.getElementById("newItemValue").value = ""

    let span = document.createElement("span")
    let closeMark = document.createTextNode("\u00D7")
    
    span.className = "close"
    span.appendChild(closeMark)
    li.appendChild(span)

    let close = document.getElementsByClassName("close");

    for(let i = 0; i < close.length; i++){
        close[i].onclick = function (){
            let div = this.parentElement
            div.style.display = "none"
        }
    }
}