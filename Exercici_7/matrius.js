
    let rows = document.querySelector("tbody").children
    let matrix = []
    for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}

    function erase() {
    for (let i = 0; i < rows.length; i++) {
    var trList = rows[i].children;
    for (let j = 0; j < trList.length; j++) {
    matrix[i][j].style.backgroundColor = "white";
}
}
}


    function pintaDiagonals() {
    erase();
    for (let i = 0; i < rows.length; i++) {
    var trList = rows[i].children;
    var laMeitatesquerra = trList.length / 4;
    for (let j = 0; j < trList.length; j++) {
    if (j < laMeitatesquerra) {
    matrix[i][j].style.backgroundColor = "red";
}
}
}

}
