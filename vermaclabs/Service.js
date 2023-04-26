window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.
            display="block";
        },
        1200
    )
});
 document.querySelector(".popupclose").addEventListener("click",function(){
    
    document.querySelector(".popup").style.display="none";
 });