const tomb = [
    { 
        uralkodo: "I. István",
        esemeny: "Koronázás",
        evszam: "1000",
        esemeny2: "Pannonhalmi apátság megalapítása",
        evszam2: "1001"
    },
    { 
        uralkodo: "IV. Béla",
        esemeny: "tatárjárás",
        evszam: "1241-1242"
    },
    { 
        uralkodo: "Mátyás király",
        esemeny: "Bécs elfoglalása",
        evszam: "1485",
        esemeny2: "Kenyérmezei csata",
        evszam2: "1479"
    },
    { 
        uralkodo: "II. Rákóczi Ferenc",
        esemeny: "A szabadságharc kezdete",
        evszam: "1703",
        esemeny2: "A szabadságharc vége",
        evszam2: "1711"
    }
]

const h1 = document.createElement("h1")
h1.innerHTML = "Híres Magyar Uralkodók és Események"
document.body.appendChild(h1)

const table = document.createElement("table")
document.body.appendChild(table)

RenderTable(tomb)

function fejlecGeneralas(){
    const fejlec = { 
        uralkodo: "Uralkodó",
        esemeny: "Esemény",
        evszam: "Évszám"
    }

    const thead = document.createElement('thead')
    table.appendChild(thead)
    const tr = document.createElement('tr')
    thead.appendChild(tr)

    for(const i in fejlec){
        const th = document.createElement("th")
        th.innerHTML = fejlec[i]
        tr.appendChild(th)
    }
}

function RenderTable(array){
    fejlecGeneralas()

    const tbody = document.createElement('tbody')
    table.appendChild(tbody)
    
    for(let i = 0; i < array.length; i++){
        const tr1 = document.createElement('tr')
        const tr2 = document.createElement('tr')
        tbody.appendChild(tr1)
        tbody.appendChild(tr2)

        const akt = array[i]
        index = 0

        for(const j in akt){
            if(index === 0){
                const td = document.createElement('td')
                td.innerHTML = akt[j]
                td.rowSpan = 2
                tr1.appendChild(td)
            }
            else if(index <= 2 && index >= 1){
                const td = document.createElement('td')
                td.innerHTML = akt[j]
                tr1.appendChild(td)
            }
            else if(index <= 4 && index >= 3){
                const td = document.createElement('td')
                td.innerHTML = akt[j]
                tr2.appendChild(td)
            }  
            index++
        }
    }
}

const form = document.getElementById('form')

form.addEventListener('submit', function(e){
e.preventDefault()

const uralkodoHTML = document.getElementById('uralkodo_nev')
const esemenyHTML = document.getElementById('esemeny1')
const evszamHTML = document.getElementById('evszam1')
const esemeny2HTML = document.getElementById('esemeny2')
const evszam2HTML = document.getElementById('evszam2')

const uralkodoV = uralkodoHTML.value
const esemenyV = esemenyHTML.value
const evszamV = evszamHTML.value
const esemeny2V = esemeny2HTML.value
const evszam2V = evszam2HTML.value

let valid = true
const errorszoveg = "A mező kitöltése kötelező!"
const errorszoveg2 = "Minden eseményhez kell tartoznia évszámnak"
const aktualis = e.currentTarget 
const errorok = aktualis.querySelectorAll('.error') 

for(const i of errorok)
    i.innerHTML = ""


if(!validacio(uralkodoHTML, errorszoveg))
    valid = false

if(!validacio(esemenyHTML, errorszoveg))
    valid = false

if(!validacio(evszamHTML, errorszoveg))
    valid = false

if(!validacio2(esemeny2HTML, evszam2HTML, errorszoveg2))
    valid = false

if(valid) {
    if(esemeny2V == "" || evszam2V == "" ){
        const ujObj = { 
            uralkodo: uralkodoV,
            esemeny: esemenyV,
            evszam: evszamV,
        }
        tomb.push(ujObj)
    }
    else{
        const ujObj = { 
        uralkodo: uralkodoV,
        esemeny: esemenyV,
        evszam: evszamV,
        esemeny2: esemeny2V,
        evszam2: evszam2V
    }
    tomb.push(ujObj)
    }
}
table.innerHTML = ""
RenderTable(tomb)
})

function validacio(htmlelem, errorsz){ 
    let valid = true 
    if(htmlelem.value === ""){
        const parent = htmlelem.parentElement
        const errorhely = parent.querySelector(".error") 
        if(errorhely != ""){
            errorhely.innerHTML = errorsz
        }
        valid = false
    }
    return valid 
}

function validacio2(htmlelem1, htmlelem2, errorsz){ 
    let valid = true
    const parent1 = htmlelem1.parentElement
    const parent2 = htmlelem2.parentElement

    const errorhely1 = parent1.querySelector('.error')
    const errorhely2 = parent2.querySelector('.error')

    if(!validacio(htmlelem1, errorsz) && !validacio(htmlelem2, errorsz)){
        errorhely1.innerHTML = ""
        errorhely2.innerHTML = ""
    }
    else{
        if(!validacio(htmlelem1, errorsz)){
            errorhely1.innerHTML = errorsz
            valid = false
        }
        if(!validacio(htmlelem2, errorsz)){
            errorhely2.innerHTML = errorsz
            valid = false
        }
    }
    return valid
}
