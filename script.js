let images=Array.from(document.getElementsByClassName('slide'));
var counter=0;

function reset(){
images.forEach((element,index)=>{
    element.style.left=`${(index*100)}%`;
})
}

function slideImage(){
    images.forEach(image=>{
        image.style.transform=`translateX(-${counter*100}%)`
    })
}

function prev(){
    counter--;
    if(counter<=-1){
        counter=images.length-1;
        slideImage();
    }
    else{
    slideImage();
    }
}

function next(){
    counter++;
    console.log(counter);
    console.log(images.length)
    if(counter<images.length){
    slideImage();
    }
    else{
        counter=0;
        images.forEach(image=>{
            image.style.transform=`translateX(${counter*100}%)`
        })
    }
}
reset();

function auto(){
    setInterval(() => {
        next();
    }, 2000);
}
auto();