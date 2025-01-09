const tomb = [ //letrehozom a tomb-ot, ami alapján a tablazat generalodik
    { 
        uralkodo: "I. István", //a tomb 1. objektumanak uralkodo tulajdonsága "I. István"
        esemeny: "Koronázás", //a tomb 1. objektumanak esemeny tulajdonsága "Koronázás"
        evszam: "1000", //a tomb 1. objektumanak evszam tulajdonsága "1000"
        esemeny2: "Pannonhalmi apátság megalapítása", //a tomb 1. objektumanak esemeny2 tulajdonsága "Pannonhalmi apátság megalapítása"
        evszam2: "1001" //a tomb 1. objektumanak evszam2 tulajdonsága "1001"
    },
    { 
        uralkodo: "IV. Béla", //a tomb 2. objektumanak uralkodo tulajdonsága "IV. Béla"
        esemeny: "tatárjárás", //a tomb 2. objektumanak esemeny tulajdonsága "tatárjárás"
        evszam: "1241-1242" //a tomb 2. objektumanak evszam tulajdonsága "1241-1242"
    },
    { 
        uralkodo: "Mátyás király", //a tomb 3. objektumanak uralkodo tulajdonsága "Mátyás király"
        esemeny: "Bécs elfoglalása", //a tomb 3. objektumanak esemeny tulajdonsága "1485"
        evszam: "1485", //a tomb 3. objektumanak evszam tulajdonsága "Mátyás király"
        esemeny2: "Kenyérmezei csata", //a tomb 3. objektumanak esemeny2 tulajdonsága "Kenyérmezei csata"
        evszam2: "1479" //a tomb 3. objektumanak evszam2 tulajdonsága "1479"
    },
    { 
        uralkodo: "II. Rákóczi Ferenc", //a tomb 4. objektumanak uralkodo tulajdonsága "II. Rákóczi Ferenc"
        esemeny: "A szabadságharc kezdete", //a tomb 4. objektumanak esemeny tulajdonsága "A szabadságharc kezdete"
        evszam: "1703", //a tomb 4. objektumanak evszam tulajdonsága "1703"
        esemeny2: "A szabadságharc vége", //a tomb 4. objektumanak esemeny2 tulajdonsága "A szabadságharc vége"
        evszam2: "1711" //a tomb 4. objektumanak evszam2 tulajdonsága "1711"
    }
]

formGeneralas() //megivom a formGeneralas fuggvenyt

const h1 = document.createElement("h1") //letrehozok egy h1-et
h1.innerHTML = "Híres Magyar Uralkodók és Események" //a h1 szövege "Híres Magyar Uralkodók és Események"
document.body.appendChild(h1) //a h1-et hozzáadom a bodyhoz

const table = document.createElement("table") //letrehozom a table-t
document.body.appendChild(table) //a table-t hozzáadom a bodyhoz

RenderTable(tomb)  //meghivom a RenderTable fuggvenyt a tomb paraméterrel

const form = document.getElementById('form') //a form id-s formot kiveszem egy form valtozoba

form.addEventListener('submit', function(e){ //a form submit esemenyere teszek egy esemenykezelot
e.preventDefault() //meggatolom az alapvető mukodest

const uralkodoHTML = document.getElementById('uralkodo_nev') //az uralkodoHTML valtozoba kiveszem a uralkodo_nev id-s elemet
const esemenyHTML = document.getElementById('esemeny1') //az esemenyHTML valtozoba kiveszem a esemeny1 id-s elemet
const evszamHTML = document.getElementById('evszam1') //az evszamHTML valtozoba kiveszem a evszam1 id-s elemet
const esemeny2HTML = document.getElementById('esemeny2') //az esemeny2HTML valtozoba kiveszem a esemeny2 id-s elemet
const evszam2HTML = document.getElementById('evszam2') //az evszam2HTML valtozoba kiveszem a evszam2 id-s elemet

const uralkodoV = uralkodoHTML.value //az uralkodoV erteke a uralkodoHTML erteke lesz
const esemenyV = esemenyHTML.value //az esemenyV erteke a esemenyHTML erteke lesz
const evszamV = evszamHTML.value //az evszamV erteke a evszamHTML erteke lesz
const esemeny2V = esemeny2HTML.value //az esemeny2V erteke a esemeny2HTML erteke lesz
const evszam2V = evszam2HTML.value //az evszam2V erteke a evszam2HTML erteke lesz

let valid = true //a valid alap erteke true
const errorszoveg = "A mező kitöltése kötelező!" //az 1. errorszoveg "A mező kitöltése kötelező!"
const errorszoveg2 = "Minden eseményhez kell tartoznia évszámnak" //a 2. errorszoveg "Minden eseményhez kell tartoznia évszámnak!"
const aktualis = e.currentTarget  //az aktualis valtozo az aktualis elem
const errorok = aktualis.querySelectorAll('.error') //az errorkba kiveszem az aktualis error classos elemeit

for(const i of errorok) //vegigmegyek az aerrorokon
    i.innerHTML = "" //mindegyik error ures


if(!validacio(uralkodoHTML, errorszoveg)) //ha az uralkodoHTML ures akkor megyunk be 
    valid = false //a valid erteke false

if(!validacio(esemenyHTML, errorszoveg)) //ha az esemenyHTML ures akkor megyunk be 
    valid = false //a valid erteke false

if(!validacio(evszamHTML, errorszoveg)) //ha az evszamHTML ures akkor megyunk be 
    valid = false //a valid erteke false

if(!validacio2(esemeny2HTML, evszam2HTML, errorszoveg2)) //ha az esemeny2HTML evszam2HTML küzöl valamelyik üres akkor megyunk be
    valid = false //a valid erteke false

if(valid) {//ha a valid true akkor megyunk be
    if(esemeny2V == "" || evszam2V == "" ){ //ha az esemeny2V vagy az evszam2V üres akkor megyunk be
        const ujObj = {  //letrehozunk egy uj objektumot
            uralkodo: uralkodoV, //az objektum uralkodo tulajdonsaga uralkodoV
            esemeny: esemenyV, //az esemeny uralkodo tulajdonsaga esemenyV
            evszam: evszamV, //az evszam uralkodo tulajdonsaga evszamV
        } 
        tomb.push(ujObj)//a tombhoz hozzáadom atz uj objektumot
    }
    else{
        const ujObj = { //letrehozunk egy uj objektumot 
        uralkodo: uralkodoV, //az objektum uralkodo tulajdonsaga uralkodoV
        esemeny: esemenyV, //az esemeny uralkodo tulajdonsaga esemenyV
        evszam: evszamV, //az evszam uralkodo tulajdonsaga evszamV
        esemeny2: esemeny2V, //az esemeny2 uralkodo tulajdonsaga esemeny2V
        evszam2: evszam2V //az evszam2 uralkodo tulajdonsaga evszam2V
    }
    tomb.push(ujObj)//a tombhoz hozzáadom atz uj objektumot
    }
}
table.innerHTML = "" //a table-t clearelem egy ures stringel
RenderTable(tomb)//meghivom a RenderTable fuggvenyt a tomb paraméterrel
})
