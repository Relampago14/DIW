function math() {

    var x = document.getElementById("custinho").value
    var y = document.getElementById("lucrinho").value
    lucro = Number(y) + Number(100)
    var z = Number(x * lucro / Number(100))
    if (Number.isNaN(z)) {
        document.getElementById("result").value = ("Siga as instruções!")
    }
    else {
        document.getElementById("result").value = z.toFixed(2)
    }

}


