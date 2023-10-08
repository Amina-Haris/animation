let animate = document.getElementById("anmtion")
let trtate = 0;
let mLeft = 100;

function foranimate() {

    trtate++;


 animate.style.rotate=`${trtate}deg`;  

    if (mLeft<=1200)
     {
        mLeft++;
        animate.style.marginLeft=`${mLeft}px`; 

     }
    
 requestAnimationFrame(foranimate);                       //Note!!
    
}
foranimate()

