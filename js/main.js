
/*=== Navigacioni meni ===*/

const navImena = [
    'O nama',
    'Kontakt',
    'Upit'
];

const navLinkovi = [
    'onama.html',
    'kontakt.html',
    'upit.html'
];

var trenutnoAktivan = '';

const navMeni = document.querySelector('.navbar-nav')

for (let i = 0; i < navLinkovi.length; i++) {
    let navLink = document.createElement('a')
    let navLinkName = document.createTextNode(navImena[i])
    navLink.setAttribute('href', navLinkovi[i])
    navLink.setAttribute('class', 'nav-link')
    navLink.append(navLinkName)
    navLink.addEventListener("mouseover", () =>{
        navLink.classList.add("promeniBoju");
    })
    navLink.addEventListener("mouseout", () =>{
        navLink.classList.remove("promeniBoju");
    })
    navMeni.append(navLink)
};


/*=== Radno vreme ===*/


let date = new Date();
let dan = date.getDay();
let vreme = date.getHours();
console.log(dan)

if(dan>0 && dan<6 && vreme >7 && vreme < 16){
    document.getElementById("radnoV").style.color = "lightgreen";
}else{
    document.getElementById("radnoV").style.color = "red";
}


/*=== Pocetna ===*/


$(document).ready(function(){

var ekran = $(window).height();

function prikazidugmeIdiNaVrh() {
    if($(window).scrollTop()>20){
        $("#idiNaVrh").css("visibility", "visible");
    }else{
        $("#idiNaVrh").css("visibility", "hidden");
    }
}

$("#idiNaVrh").click(function(){
    $(window).scrollTop(0,'slow');
    return false;
})

function startujAnimaciju() {
    if($('#wrapper').length && $('#wrapper').offset().top < $(window).scrollTop() + ekran){
        $("#levo").animate({
            left:'0',
            opacity:'show',
          },1500);

          $("#desno").animate({
            right:'0',
            opacity:'show',
          },1500); 
    }
}


startujAnimaciju();
prikazidugmeIdiNaVrh();


$(window).scroll(() => {
    startujAnimaciju();
    prikazidugmeIdiNaVrh();
});

/**********************************************/

$("#dugmeIspod1").click(function(){

    $(".preko1").animate({
    top:'0',
    opacity:'show',
    },1500);
    
})

$("#dugmePreko1").click(function(){
    $(".preko1").animate({
        top:'500',
        opacity:'hide',
    },1500);
});


$("#dugmeIspod2").click(
    function(){
    $(".preko2").animate({
    top:'0',
    opacity:'show',
    },1500);
});
    
$("#dugmePreko2").click(function(){
    $(".preko2").animate({
    top:'500',
    opacity:'hide',
    },1500);
});


$("#dugmeIspod3").click(function(){
    $(".preko3").animate({
    top:'0',
    opacity:'show',
    },1500);
});


$("#dugmePreko3").click(function(){
    $(".preko3").animate({
    top:'500',
    opacity:'hide',
    },1500);
});


$('#dugmeIspod1').hover(
    function(){
        $(this).css({
            'background-color' :'rgb(46, 40, 40)',
            'color':'lightblue'})
    },
    function(){
        $(this).css({
            'background-color': '',
            'color': ''
        })
    }
);

$('#dugmeIspod2').hover(
    function(){
        $(this).css({
            'background-color' :'rgb(46, 40, 40)',
            'color':'lightblue'})
    },
    function(){
        $(this).css({
            'background-color': '',
            'color': ''
        })
    }
);

$('#dugmeIspod3').hover(
    function(){
        $(this).css({
            'background-color' :'rgb(46, 40, 40)',
            'color':'lightblue'})
    },
    function(){
        $(this).css({
            'background-color': '',
            'color': ''
        })
    }
);

$('#dugmePreko1').hover(
    function(){
        $(this).css({
            'background-color' :'rgb(46, 40, 40)',
            'color':'lightblue'})
    },
    function(){
        $(this).css({
            'background-color': '',
            'color': ''
        })
    }
);

$('#dugmePreko2').hover(
    function(){
        $(this).css({
            'background-color' :'rgb(46, 40, 40)',
            'color':'lightblue'})
    },
    function(){
        $(this).css({
            'background-color': '',
            'color': ''
        })
    }
);

$('#dugmePreko3').hover(
    function(){
        $(this).css({
            'background-color' :'rgb(46, 40, 40)',
            'color':'lightblue'})
    },
    function(){
        $(this).css({
            'background-color': '',
            'color': ''
        })
    }
);


});


/*=== o nama ===*/


document.querySelectorAll(".oNamaKol").forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add("kolBoja");
    });
});


document.querySelectorAll(".oNamaKol").forEach(item => {
    item.addEventListener('mouseleave', () => {
        item.classList.remove("kolBoja");
    });
});


var current = 0;
if(document.querySelector(".vizija1")) {
    setInterval(() => {
        if (current === 0)
        {
            current = 1;
            document.querySelector(".img1").src = "assets/images/radnica.jpg";
            document.querySelector(".img2").src = "assets/images/ugovor.jpg";
            document.querySelector(".img3").src = "assets/images/laptop.jpg";
        }
        else
        {
            current = 0;
            document.querySelector(".img1").src = "assets/images/vizija.jpg";
            document.querySelector(".img2").src = "assets/images/garancija.jpg";
            document.querySelector(".img3").src = "assets/images/osiguranje.jpg";
        }
    }, 2000);
}


/*=== Kontakt ===*/


$(document).ready(function(){
    
$('.kont').hover(
    function(){
        $(this).css('background-color', '#1f1818')
        .find('.pozovite')
        .stop(true,true)
        .show('slow');
    },
    function(){
        $(this).css('background-color', '')
        .find('.pozovite')
        .stop(true,true)
        .hide('slow');
    }
)



})
    


/*=== Slider-jquery plugin ===*/


$(document).ready(function($){
    if ($("#slider").length)
        $("#slider").QCslider({duration: 7000});
});



/*=== Footer ===*/


let opis = document.getElementById("opisF");
opis.innerHTML = "<p><br>Vršimo profesionalni transport<br>robe drumskim saobraćajem<br> koristeći specijalizovana vozila <br> i najoptimalnije rute.</p>"


const nazivPartner = [
    'Pure Logistics',
    'AOFI',
    'Uniqa',
    'Fiat'
];

const linkPartner = [
    'https://purelogistic.rs',
    'https://aofi.rs',
    'https://uniqa.rs',
    'https://fiat.rs/'
];

let listaLink = document.getElementById('partneri');

for (let i = 0; i<linkPartner.length; i++){
    console.log('dsfadf')
    let lista = document.createElement('li');
    let parterLink = document.createElement('a');
    let partnerIme = document.createTextNode(nazivPartner[i]);
    parterLink.setAttribute('href', linkPartner[i]);
    parterLink.setAttribute('target', '_blank');
    parterLink.setAttribute('class', 'meni')
    lista.append(parterLink);
    parterLink.append(partnerIme);
    listaLink.append(lista);
}

const linkNaziv = [
    'Početna',
    'Autor',
    'Robots',
    'Sitemap',
    'Dokumentacija'
]

const linkLinkovi = [
    'index.html',
    'oAutoru.html',
    'Robots.txt',
    'sitemap.xml',
    '#'
]

let linkLista = document.getElementById('linkovi');

for(var i=0; i<linkNaziv.length; i++){
    let li = document.createElement('li');
    let a = document.createElement('a');
    let nazivLink = document.createTextNode(linkNaziv[i]);
    a.setAttribute('href', linkLinkovi[i]);
    a.setAttribute('class', 'meni');
    li.append(a);
    a.append(nazivLink);
    linkLista.append(li);
}

document.querySelectorAll(".meni").forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = "lightblue";
    });
});

document.querySelectorAll(".meni").forEach(item => {
    item.addEventListener('mouseleave', () => {
        item.style.color = "";
    });
});



