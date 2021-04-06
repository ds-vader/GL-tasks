let input = document.getElementById("newItemValue");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("linkadd").click();
    }
});