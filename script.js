function bigShow(name) {
    name+='1';
    const myImage1 = document.getElementById(name);
    myImage1.style.display = "flex";
    myImage1.style.animationName = "first";
    document.getElementById("")
    history.pushState({image : true}, "");

    document.addEventListener('keydown', function(e) {
        if(e.key==='Escape') {
            myImage1.style.display = "none";
            myImage1.style.animationName="";
        }
    });

    myImage1.addEventListener('click', (e) => {
        if (e.target === myImage1) {
          myImage1.style.display = "none";
          myImage1.style.animationName="";
        }
    });

    window.addEventListener('popstate', (event) => {
        if (myImage1.style.display === 'flex') {
            myImage1.style.display = "none";
            myImage1.style.animationName="";
        }
    });
}

function closePhoto() {
}