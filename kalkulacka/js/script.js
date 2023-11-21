let result = "";
let memory = "";

function renderUpdate() {
    document.getElementsByClassName("display")[0].innerHTML = result.length > 0 ? result : "0"
}

function addContent(content) {
    result += content
    renderUpdate()
}

function calculate() {
    result = ""+eval(result)
    renderUpdate()
}

function clearData() {
    result = ""
    renderUpdate()
}

function saveMemory() {
    memory = result
}

function loadMemory() {
    result += memory
    renderUpdate()
}

function clearMemory() {
    memory = ""
}

renderUpdate()