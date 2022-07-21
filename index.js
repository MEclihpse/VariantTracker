function cariVarian() {
    const varian = 
    {
        Alpha: [`Demam`, `Batuk`, `Sesak Nafas`, `Pusing`],
        Delta: [`Sakit kepala`, `Pusing`, `Anosmia`],
        Omicron: [`Tenggorokan kering`, `Gangguan vital`, `Mata merah`]
    }
 let name = document.getElementById("nama").value
 let gejala1 = document.getElementById("gejala1").value 
 let gejala2 = document.getElementById("gejala2").value
 let gejala3 = document.getElementById("gejala3").value
 let output = document.getElementById("output")
 let countA = 0
 let countD = 0
 let countO = 0
    for (let i in varian.Alpha) {
     if (gejala1 === varian.Alpha[i] || gejala2 === varian.Alpha[i] || gejala3 === varian.Alpha[i]) countA++ 
    }
    for (let j in varian.Delta) {
        if (gejala1 === varian.Delta[j] || gejala2 === varian.Delta[j] || gejala3 === varian.Delta[j]) countD++  
    }
    for (let k in varian.Omicron) {
        if (gejala1 === varian.Omicron[k] || gejala2 === varian.Omicron[k] || gejala3 === varian.Omicron[k]) countO++ 
    }
let arr = [countA, countD, countO].sort()[2]
    if (arr === countA) {
        output.innerHTML = `${name} anda terkena gejala Covid varian Alpha`
    }else if (arr === countD) {
        output.innerHTML = `${name} anda terkena gejala Covid varian Delta`
    }else {
        output.innerHTML = `${name} anda terkena gejala Covid varian Omicron`
    }
}



