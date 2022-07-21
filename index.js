function cariVarian() {
let varian = 
{
    Alpha: [`Demam`, `Batuk`, `Sesak Nafas`, `Pusing`],
    Delta: [`Sakit kepala`, `Pusing`, `Anosmia`],
    Omicron: [`Tenggorokan kering`, `Gangguan vital`, `Mata merah`]
}
varian = tambahkanVarian(varian)
 let name = document.getElementById("nama").value
 let gejala1 = document.getElementById("gejala1").value   
 let gejala2 = document.getElementById("gejala2").value   
 let gejala3 = document.getElementById("gejala3").value 
 let output = document.getElementById("output")
 let countA = 0
 let countD = 0
 let countO = 0
 for (let i in varian.Alpha) {
     if (gejala1 === varian.Alpha[i]) countA++ 
     if (gejala2 === varian.Alpha[i]) countA++ 
     if (gejala3 === varian.Alpha[i]) countA++ 
    }
    for (let j in varian.Delta) {
        if (gejala1 === varian.Delta[j]) countD++ 
        if (gejala2 === varian.Delta[j]) countD++ 
        if (gejala3 === varian.Delta[j]) countD++ 
    }
    for (let k in varian.Omicron) {
        if (gejala1 === varian.Omicron[k]) countO++ 
        if (gejala2 === varian.Omicron[k]) countO++ 
        if (gejala3 === varian.Omicron[k]) countO++ 
    }
let arr = [countA, countD, countO].sort()[2]
if (arr === countA) {
    output.innerHTML = `${name} anda terkena gejala Covid varian Alpha`
}
if (arr === countD) {
    output.innerHTML = `${name} anda terkena gejala Covid varian Delta`
}
if (arr === countO) {
    output.innerHTML = `${name} anda terkena gejala Covid varian Omicron`
}
}

function tambahkanVarian(obj){
   let admin = document.getElementById(admin).value 
   let newG = document.getElementById(tambahGejala).value 
   let newVar =document.getElementById(tambahVarian).value
    if (admin === `Ryan`) {
        obj[newVar].push(newG)
        
    }
}