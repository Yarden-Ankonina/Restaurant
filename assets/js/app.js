    
    // declare variables
    const logo = document.getElementById('logo');
    const home = document.getElementsByClassName('home__button');
    const galleryArrowLeft = document.getElementsByClassName("gallery__arrow")[0];
    const galleryArrowRight = document.getElementsByClassName("gallery__arrow")[1];
    const galleryPhotos = {
        1 : '/assets/photos/28061725_983534191793745_3813792418538629460_o.jpg',
        2 : '/assets/photos/43026807_1149673331846496_2082411281398104064_o.jpg',
        3 : '/assets/photos/20728658_883580581789107_2304471672267093923_o1.jpg',
        4 : '/assets/photos/12998193_621016524712182_412457344763003888_o.jpg',
        5 : '/assets/photos/24059656_937397763074055_1485916700681308634_o.jpg' ,
        6 : '/assets/photos/danny-gallegos-onTGVHxgRJA-unsplash.jpg',
    }
    let galleryIndex = 1;
    let galleryImg = document.getElementsByClassName("gallery__img")[0];
    const infoNavbar = document.getElementsByClassName("infoNavbar")[0];
    let info = document.getElementsByClassName("info")[0];

    //navbar
    logo.addEventListener('click',function(){
        window.location.reload();
    });

    home[0].addEventListener('click',function(){
        window.location.reload();
    });

    // info
    info.style.display = "none";

    infoNavbar.addEventListener('click', function(){
    info.style.display = "flex";
    });


    galleryArrowLeft.addEventListener('click',function(){
        if(galleryIndex === 1){
            galleryIndex = 6;
        }
        else{
            galleryIndex--;
        }
        galleryImg.style.backgroundImage = "url("+ galleryPhotos[galleryIndex] + ")" ;
    });

    galleryArrowRight.addEventListener('click',function(){
        if(galleryIndex === 6){
            galleryIndex = 1;
        }
        else{
            galleryIndex++;
        }
        galleryImg.style.backgroundImage = "url("+ galleryPhotos[galleryIndex] + ")" ;
    });


