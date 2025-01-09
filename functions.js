/**
 * A függvény egy a függvényen belüli objektum alapján létrehozzza egy táblázat fejlécét a HTML en
 */
function fejlecGeneralas(){ //letrehozom a fejlecGeneralas fuggvenyt 
    const fejlec = {  //letrehozom a fejlec objektumot 
        uralkodo: "Uralkodó", //a fejlec objektum uralkodo tulajdonsága "Uralkodó"
        esemeny: "Esemény", //a fejlec objektum esemeny tulajdonsága "Esemény"
        evszam: "Évszám" //a fejlec objektum evszam tulajdonsága "Évszám"
    }

    const thead = document.createElement('thead') // letrehozom a thead-et
    table.appendChild(thead) //a theadet hozzaadom a table-hez
    const tr = document.createElement('tr') //letrehozok egy tr-r
    thead.appendChild(tr) //a tr-t hozzáadom a thead-hez

    for(const i in fejlec){ //vegigmegyunk a fejlec tulajdonságain
        const th = document.createElement("th") //letrehozunk egy th-t
        th.innerHTML = fejlec[i] //a th szovege a fejlec i. tulajdonsága
        tr.appendChild(th) //a tr hez hozzáadjuk a th-t
    }
}


/**
 * A függvény egy tömb alapján (array paraméter) legenerál egy táblázatot a HTML en
 * 
 * 
 * @param {Array} array 
 */
function RenderTable(array){ //létrehozom a RenderTable függvéynt egy array paraméterrel
    fejlecGeneralas() //meghibom a fejlecGeneralas függvényt

    const tbody = document.createElement('tbody') //letrehjozom a tbody-t
    table.appendChild(tbody) //a tbody-t hozzáadom a table-hez
    
    for(let i = 0; i < array.length; i++){ //vegigmegyunk az array objektumain
        const tr1 = document.createElement('tr') //letrehozunk egy tr-t
        const tr2 = document.createElement('tr') //letrehozunk egy tr-t
        tbody.appendChild(tr1) //a tr1-t hozzáadjuk a bodyhoz
        tbody.appendChild(tr2) //a tr2-t hozzáadjuk a bodyhoz

        const akt = array[i] //eegy akt valtozoba kivesszuk az aktualis objektumot
        index = 0 //az index alap erteke 0

        for(const j in akt){ //vegigmegyin az aktalis objektum tulajdonságain
            if(index === 0){ //ha az index = 0 akkor megyunk be
                const td = document.createElement('td') //letrehozunk egy td-t
                td.innerHTML = akt[j] //a td szovege az aktualis objektum j tulajdonsága
                td.rowSpan = 2 //beallitjuk a rowSpant a cellára
                tr1.appendChild(td) //a tr1-hez hozzáadjuk a td-t
            }
            else if(index <= 2 && index >= 1){ //ha az index = 1 vagy 2 akkor megyunk be
                const td = document.createElement('td') //letrehozunk egy td-t
                td.innerHTML = akt[j] //a td szovege az aktualis objektum j tulajdonsága
                tr1.appendChild(td) //a tr1-hez hozzáadjuk a td-t
            }
            else if(index <= 4 && index >= 3){ //ha az index = 3 vagy 4 akkor megyunk be
                const td = document.createElement('td') //letrehozunk egy td-t
                td.innerHTML = akt[j] //a td szovege az aktualis objektum j tulajdonsága
                tr2.appendChild(td) //a tr2-hoz hozzáadjuk a td-t
            }  
            index++ //az index erteket noveljuk 
        }
    }
}

/**
 * A függvény megnézi, hogy egy elem (htmlelem paraméter) üres-e, ha igen akkor kiirja az error szövegét (errorsz paraméter), ha nem akkor nem csinál semmit
 * 
 * 
 * @param {HTMLElement} htmlelem 
 * @param {string} errorsz 
 * @returns True, ha átmegy, False, ha nem
 */
function validacio(htmlelem, errorsz){  //letrehozom a validacio fuggvenyt egy htmlelem és egy errorsz paraméterrel
    let valid = true  //a valid alap erteke true
    if(htmlelem.value === ""){ //ha a htmlelem ures akkor megyunk be
        const parent = htmlelem.parentElement //a parent a htmlelem parent elementje
        const errorhely = parent.querySelector(".error") //az errorhely a parent error classos spanje
        if(errorhely != ""){ //ha az errorhely nem ures akkor megyunk be
            errorhely.innerHTML = errorsz //az errorhely szovege az errorsz paraméter
        }
        valid = false //a valid erteke false
    }
    return valid  //a valid ertekevel terunk vissza
}

/**
 * A függvény összemér ket mezőt (htmlelem1,htmlelem2 paraméterek), 
 * ha csak az egyik ures akkor a másikhoz kiírja az errosz praméternek megadott 
 * error szövegetm, ha egyikbe sincs, vagy mindkettőbe van nem csinál semmit.
 * 
 * 
 * @param {HTMLElement} htmlelem1 
 * @param {HTMLElement} htmlelem2 
 * @param {string} errorsz 
 * @returns True, ha átmegy, False, ha nem
 */
function validacio2(htmlelem1, htmlelem2, errorsz){ //letrehozom a validacio2 fuggvenyt htmlelem1,htmlelem2,errorsz paraméterekkel
    let valid = true //a valid alap erteke true
    const parent1 = htmlelem1.parentElement //parent1 lesz a htmlelem1 parméter parent elementje
    const parent2 = htmlelem2.parentElement //parent2 lesz a htmlelem2 parméter parent elementje

    const errorhely1 = parent1.querySelector('.error') //az errorhely1 a parent1 error classos spanje
    const errorhely2 = parent2.querySelector('.error') //az errorhely2 a parent2 error classos spanje

    if(!validacio(htmlelem1, errorsz) && !validacio(htmlelem2, errorsz)){ //ha a htmlelem1és a htmlelem2 üres akkor megyunk be
        errorhely1.innerHTML = "" //az errorhely1 ures
        errorhely2.innerHTML = "" //az errorhely2 ures
    }
    else{ //ha valamelyik nem üres akkor megy be
        if(!validacio(htmlelem1, errorsz)){ //ha a htmlelem1 ures akkor megy be
            errorhely1.innerHTML = errorsz //az errorhely1 szovege errorsz paraméter
            valid = false //a valid erteke false
        }
        if(!validacio(htmlelem2, errorsz)){ //ha a htmlelem2 ures akkor megy be
            errorhely2.innerHTML = errorsz //az errorhely1 szovege errorsz paraméter
            valid = false //a valid erteke false
        }
    }
    return valid //a valid ertekevbel ter vissza
}

/**
 * A fuggveny egy afuggvenyen beluli tomb alapján legenerál egy formot a HTML-en
 */
function formGeneralas(){ //letrehozom a formGeneralas fugggvenyt
    const h2 = document.createElement('h2') //letrehozom a h2-t 
    h2.innerHTML = "Uralkodó hozzáadása" //a h2 szovege "Uralkodó hozzáadása"
    document.body.appendChild(h2) //a h2-t hozzáadom a bodyhoz

    const formt = [ //letrehozom a formt tombot, ami alapján a form generalodik
        {
            label: "Uralkodó neve:", //a formt 1. objektumanak label tulajdonsága "Uralkodó neve:"
            id: "uralkodo_nev" //a formt 1. objektumanak id tulajdonsága "uralkodo_nev"
        },
        {
            label: "Első esemény:", //a formt 2. objektumanak label tulajdonsága "Első esemény:"
            id: "esemeny1" //a formt 2. objektumanak id tulajdonsága "esemeny1"
        },
        {
            label: "Első esemény évszáma:", //a formt 3. objektumanak label tulajdonsága "Első esemény évszáma:"
            id: "evszam1" //a formt 3. objektumanak id tulajdonsága "uralkodo_nev"
        },
        {
            label: "Második esemény:", //a formt 4. objektumanak label tulajdonsága "Második esemény:"
            id: "esemeny2" //a formt 4. objektumanak id tulajdonsága "esemeny2"
        },
        {
            label: "Második esemény évszáma:", //a formt 5. objektumanak label tulajdonsága "Második esemény évszáma:"
            id: "evszam2" //a formt 5. objektumanak id tulajdonsága "evszam2"
        }
    ]

    const form = document.createElement('form') //letrehozom a formot
    form.id = "form" //a form id je form 
    form.action = "#" //a form actionje #
    document.body.appendChild(form) //a formot hozzáadom a bodyhoz

    for(let i = 0; i < formt.length; i++){ //vegigmegyunk a formt objektumain
        const div = document.createElement('div') //letrehozunk egy divet
        form.appendChild(div) //a formhoz hozzáadjuk a divet
        const label = document.createElement('label') //letrehozunk egy labelt
        label.innerHTML = formt[i].label //a lebel szovege a formt i.  objektumanak label tulajdonsága
        div.appendChild(label) //a divhez hozzáadom a labelt
        const br1 = document.createElement('br') //letrehozom a br1-t
        div.appendChild(br1) //a divhez hozzáadom a br1-t
        const input = document.createElement('input') //letrehozom az input-ot
        input.type = "text" //az input typeja text
        input.id = formt[i].id  //az input id-je a formt i. objektumanak id tulajdonsága
        input.name = formt[i].id  //a input name-je a formt i. objektumanak id tulajdonsága
        div.appendChild(input) //a divhez hozzáadom a inputot
        const br2 = document.createElement('br') //letrehozom a br2-t
        div.appendChild(br2) //a divhez hozzáadom a br2-t
        const span = document.createElement('span') //letrehozom a span-t
        span.classList = "error" //a span classa error
        div.appendChild(span) //a divhez hozzáadom a spant
        const br3 = document.createElement('br') //letrehozom a br3-t
        div.appendChild(br3) //a divhez hozzáadom a br3-t
    }
    const button = document.createElement('button') //letrehozok egy buttont
    button.innerHTML = "Hozzáadás" //a button szovege Hozzáadás
    form.appendChild(button) //a formhoz hozzáadom a buttont
}
