

//const main = document.querySelector(`main`)

//main.addEventListener(click, (click)) => {
    //main.style.display = "none"
//}


//const aside = document.querySelector(`aside`)

//aside.style.display = "none"


// Je selectionne les choses que je veux modifier
let header = document.querySelector("header") 
let main = document.querySelector("main")
let footer= document.querySelector("footer")

//J'anime ce que j'ai modifier

gsap.from(header, { duration: 3, ease: "expo.out", y: -3000 });

gsap.from(main, { duration: 3, ease: "expo.out", y: -6000, delay: 1.5});

gsap.from(footer, { duration: 3, ease: "expo.out", y: -9000, delay: 2.5});

