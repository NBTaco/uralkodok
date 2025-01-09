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

fejlecGeneralas()
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
