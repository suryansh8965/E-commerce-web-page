


document.querySelectorAll('.imge-part').forEach(function(elem){
elem.addEventListener('mousemove', function(dets){
   
 elem.childNodes[0].classList.add("imageup")
 elem.childNodes[2].style.display = "none";

 elem.childNodes[2].classList.remove("imageup")

  
})
elem.addEventListener('mouseleave', function(dets){
    // dets.target.classList.remove("imagedown") ; elem.childNodes[0].classList.add("imageup")
 elem.childNodes[0].classList.remove("imageup")
 elem.childNodes[2].style.display = "initial";

 elem.childNodes[2].classList.add("imageup")

})


})


function loco(){

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

}

loco()