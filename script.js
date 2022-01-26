(function(){
    var links = document.querySelectorAll(".car-links a")
    var details = document.querySelector(".nav-details")
    var header = document.querySelector("header")
    var modelImageSelector = document.querySelector(".model-image")
    var modelListSelector = document.querySelector(".model-list")
    var showDetails= false
    var models = {
        718:{
            id:"718",
            image:"https://nav.porsche.com/00BC524/frontshot-assets/1920/718.jpg",
            models:[
                "718 Models",
                "718 Cayman GT4",
                "718 Spyder",
                "718 Cayman GT4 RS"
            ]
        },
        911:{
            id:"911",
            image:"https://nav.porsche.com/00BC524/frontshot-assets/1920/911.jpg",
            models:[
                "911 Carrera & Targa Models",
                "911 Turbo Models",
                "911 GT3 Models",
            ]
        },
        Taycan:{
            id:"Taycan",
            image:"https://nav.porsche.com/00BC524/frontshot-assets/1920/taycan.jpg",
            models:[
                "Taycan Models",
            ]
        },
        Panamera:{
            id:"Panamera",
            image:"https://nav.porsche.com/00BC524/frontshot-assets/1920/panamera.jpg",
            models:[
                "Panamera Models",
            ]
        },
        Macan:{
            id:"Macan",
            image:"https://nav.porsche.com/00BC524/frontshot-assets/1920/macan.jpg",
            models:[
                "The New Macan",
                "The Macan",
            ]
        },
        Cayenne:{
            id:"Cayenne",
            image:"https://nav.porsche.com/00BC524/frontshot-assets/1920/cayenne.jpg",
            models:[
                "Cayenne Models",
            ]
        }        
    }

    var modelItem = function(modelName){
        return `
        <button type="button" class="list-group-item list-group-item-action"> <i class="fal fa-angle-right"></i> <span>${modelName}</span> </button>
        `
    }
    var modelImage = function(url){
        return`
        <img src="${url}" alt="">
        `
    }

    for (const link of links) {
     link.addEventListener("mouseover", function(event){
        showDetails = true
        var modelId = event.currentTarget.getAttribute("data-id")
        var currentModel = models[modelId]
        modelImageSelector.innerHTML=modelImage(currentModel.image)
        modelListSelector.innerHTML=currentModel.models.map(model => modelItem(model)).join("")
        // details.classList.add("show")
     })   
     link.addEventListener("mouseout", function(event){
         event.stopPropagation()
         showDetails = false
        // timeout = setTimeout(() => {
        //     details.classList.remove("show")
        //  }, 3000);
        // console.log(timeout)
     })   
    }
    header.addEventListener("mouseover", function(){
        // console.log(timeout)
        // clearTimeout(timeout)
        // if (showDetails){
            details.classList.add("show")
        // }
     })   
     header.addEventListener("mouseout", function(){
         console.log(showDetails)
         showDetails = false
        details.classList.remove("show")
     })  
     
     $('.header-slider').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="slick-prev">prev</button>', 
        nextArrow: '<button class="slick-next">next</button>',
      });
})()