let uzorakIme = /^\s*[A-ZČĆŠĐŽ][a-zčćšđž]{1,11}(\s+[A-ZČĆŠĐŽ][a-zčćšđž]{1,11})+\s*$/;
let uzorakEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let ime = document.getElementById('ime');
let upozorenjeIme = document.getElementById('upozorenjeIme');
ime.addEventListener('blur', proveriIme);

function proveriIme() {
    let tekstIme = ime.value;
    if (!uzorakIme.test(tekstIme)) {
        upozorenjeIme.classList.remove('sakrij');
        if (!tekstIme.trim()) {
            ime.classList.add("stilGreska");
            upozorenjeIme.innerHTML = "Niste popunili ime i prezime!";
        }
        else {
            ime.classList.add("stilGreska");
            upozorenjeIme.innerHTML = "Pogrešan unos imena i prezimena!";
        }
        return false;
    }
    else {
        ime.classList.add("stilTacno");
        upozorenjeIme.classList.add('sakrij');
        return true;
    }
}

let email = document.getElementById('email');
let upozorenjeEmail = document.getElementById('upozorenjeEmail');
email.addEventListener('blur', proveriEmail);
email.addEventListener('focus',()=>{
    email.style.backgroundColor="white"
})

function proveriEmail() {
    let tekstEmail = email.value;
    if (!uzorakEmail.test(tekstEmail)) {
        upozorenjeEmail.classList.remove('sakrij');
        if (!tekstEmail.trim())
            upozorenjeEmail.innerHTML = "Niste popunili email!";
        else
            upozorenjeEmail.innerHTML = "Email nije u dobrom formatu!";
        email.classList.add("stilGreska");
        return false;
    }
    else {
        email.classList.add("stilTacno");
        upozorenjeEmail.classList.add('sakrij');
        return true;
    }
}

let poruka = document.getElementById('poruka');
let upozorenjePoruka = document.getElementById('upozorenjePoruka');
poruka.addEventListener('blur', proveriPoruku);

function proveriPoruku() {
    let tekstPoruka = poruka.value;
    if (!tekstPoruka.trim())
    {
        poruka.classList.add("stilGreska");
        upozorenjePoruka.classList.remove('sakrij');
        upozorenjePoruka.innerHTML = "Niste uneli poruku!";
        return false;
    }
    else {
        poruka.classList.add("stilTacno");
        upozorenjePoruka.classList.add('sakrij');
        return true;
    }
}



var polazak = document.getElementById("iz").addEventListener("change", proveriIz);

let destinacija = document.getElementById("za").addEventListener("change", proveriZa);

let pocetak = document.getElementById("iz");

function proveriIz() {
    let selektovanP = pocetak.selectedIndex;
    if (selektovanP != 0) {
        pocetak.classList.add("stilTacno");
        document.getElementById("upozorenjeIz").classList.add("sakrij");
        return true;    
    }
    else {
        pocetak.classList.add("stilGreska");
        document.getElementById("upozorenjeIz").classList.remove("sakrij");
        return false;
    }
}


let kraj = document.getElementById("za");

function proveriZa() {
    let selektovanK = kraj.selectedIndex;
    if (selektovanK != 0) {
        kraj.classList.add("stilTacno");
        document.getElementById("upozorenjeZa").classList.add("sakrij");
        return true; 
    }
    else {
        kraj.classList.add("stilGreska");
        document.getElementById("upozorenjeZa").classList.remove("sakrij");
        return false;
    }
}


let tipVozila = document.querySelectorAll("input[name='tip']").forEach(item => {item.addEventListener("change", proveriTip)});

/*document. querySelectorAll('.some-class'). forEach(item => {
    item. addEventListener('click', event => {
    //handle click.
    })
    })*/

function proveriTip() {
    let tip = document.querySelector('input[name="tip"]:checked');
    if (!tip) {
        document.getElementById("upozorenjeTip").classList.remove("sakrij");
        return false;
    }
    else {
        document.getElementById("upozorenjeTip").classList.add("sakrij");
        return true;
    }
}



let submit = document.getElementById("submit");
submit.addEventListener('click', proveriFormu);
function proveriFormu() {
    let imeValidno = proveriIme();
    let emailValidan = proveriEmail();
    let porukaValidna = proveriPoruku() ;
    let tipValidan = proveriTip();
    let izValidno = proveriIz();
    let doValidno = proveriZa();

    if (imeValidno && emailValidan && porukaValidna && tipValidan && izValidno && doValidno) {
        document.getElementById("uspehForma").classList.remove("sakrij");
    }
    else {
        document.getElementById("uspehForma").classList.add("sakrij");
    }
};

/* dugme forma */
 
submit.addEventListener("mouseover", function(){
    submit.style.backgroundColor = "white";
    submit.style.color = "lightblue";
});

submit.addEventListener("mouseleave", function(){
    submit.style.backgroundColor = "";
    submit.style.color = "";
});


