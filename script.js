const button = document.getElementById("enter");
const size = document.getElementById("sizeinput");
const colour = document.getElementById("colourinput");
const box = document.getElementById("box");

//change colour
colour.addEventListener("input", function () {
    box.style.background = colour.value;
});

//change size
button.addEventListener("click", function () {
    //console.log(size.value)

    if (size.value != "") {
        if (parseInt(size.value) < parseInt(size.min)) {
            size.value = size.min;
        }
        if (parseInt(size.value) > parseInt(size.max)) {
            size.value = size.max;
        }
    }

    box.style.width = size.value + 'px';
    box.style.height = size.value + 'px';
});

//press enter key to submit size
size.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        button.click();
    }
});

// prevent: "e", "=", ",", "-", "."
size.addEventListener("keydown", function (event) {
    if ([69, 187, 188, 189, 190].includes(event.keyCode)) {
        event.preventDefault();
    }
})
