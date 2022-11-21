let count = 1;

function zelena(){
    let ulElementi = document.querySelectorAll("ul");
    ulElementi[0].classList.add("zelena");
    ulElementi[1].classList.add("zelena");
}

function imageDisappear(image){
    image.style.display = 'none';
}

function fadeAway(){
    let images = document.querySelectorAll("img");
    images[0].style.display = 'inline';
    images[1].style.display = 'inline';
    images[2].style.display = 'inline';

    if(count%2!=0){
        images[0].id="fadeFast";
        images[1].id ="fadeMedium";
        images[2].id="fadeSlow";
        count++;
    }else{
        images[0].id="slika1";
        images[1].id="slika2";
        images[2].id="slika3";
        count++;

    }


}


