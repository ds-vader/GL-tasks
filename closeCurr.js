let close = document.getElementsByClassName("close")

for(let i = 0; i < close.length; i++){
    close[i].onclick = function (){
        let div = this.parentElement
        div.style.display = "none"
    }
}