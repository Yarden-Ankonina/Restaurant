    
    // declare variables
    //navbar
    const logo = document.getElementById('logo');
    const home = document.getElementsByClassName('home__button');
    const infoNavbar = document.getElementsByClassName("infoNavbar")[0];
    //collapse
    const menuBar = document.getElementsByClassName("bar__icon")[0];
    const exitCollapse = document.getElementsByClassName("collapse__exit")[0];
    const collapseMode = document.getElementsByClassName("collapseMode")[0];
    collapseMode.style.display = "none";
    //info
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
    let info = document.getElementsByClassName("info")[0];


    //navbar
    logo.addEventListener('click',function(){
        window.location.reload();
    });

    home[0].addEventListener('click',function(){
        window.location.reload();
    });

    //collapse

    menuBar.addEventListener('click',function(){
        collapseMode.style.display = "block";
        document.getElementsByClassName("notNavBar")[0].style.display = "none";
        
    });

    exitCollapse.addEventListener('click', function(){
        collapseMode.style.display = "none";
        document.getElementsByClassName("notNavBar")[0].style.display = "block";
    });
    //location

    //<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.3133700018475!2d35.18729526407921!3d31.786389347115794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d64bb00558d3%3A0x14b067e2e1f1c99!2sShatner%20St%205%2C%20Jerusalem!5e0!3m2!1sen!2sil!4v1584313985992!5m2!1sen!2sil" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

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


