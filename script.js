let firstTimeLine = () =>{
    tl = gsap.timeline({scrollTrigger:{
        trigger:".page-2",
        // markers:true,
        start:"0% 75%",
        end:"40% 30%",
        scrub:1,
    }})
    
    tl.from("#center",{
        bottom:"-52vh",
        scale:0.6,
    },'p')
    .from("#left1,#right1",{
        marginBottom:"-56vh",
        marginRight:"0vh",
        scale:0,
    },'p')
    .from("#left2,#right2",{
        marginBottom:"-58vh",
        marginRight:"0vh",
        scale:0,
    },'p')
}
firstTimeLine();

let secondTimeLine = () =>{
    tl = gsap.timeline({scrollTrigger:{
        trigger:".page-5",
        start:"50% 50%",
        end:"180% 40%",
        scrub:3,
        pin:true,
    }})
    
    tl.to("#txt1",{
        y:"-75%",
    },'txt')
    .to("#txt1",{
        opacity:0,
    },'txt')
    .to(".cimg",{
        x:"-110%",
    })
    
    .to("#txt2",{
        opacity:1,
        y:"-75%",
    },'txt2')
    .to("#txt2",{
        delay:0.7,
        opacity:0,
    },'txt2')
    .to(".cimg",{
        x:"-224%",
    },'txt2')
    
    
    .to("#txt3",{
        opacity:1,
        y:"-75%",
    },'txt3')
    .to("#txt3",{
        delay:0.7,
        opacity:0,
    },'txt3')
    .to(".cimg",{
        x:"-355%",
    },'txt3')

    
    .to("#txt4",{
        opacity:1,
        y:"-75%",
    },'txt4')
    .to("#txt4",{
        delay:0.7,
        opacity:0,
    },'txt4')
    .to(".cimg",{
        x:"-355%",
    },'txt4')


}
secondTimeLine();

let Panel = () =>{
    let slides = document.querySelectorAll('.slider');
    let btns = document.querySelectorAll('.cir');
    let currentSlide = 1;
    let manualNav = function(manual){
        slides.forEach((slide) =>{
            slide.classList.remove("active");
        })
        
        btns.forEach((btn) =>{
            btn.classList.remove("active");
        })

        slides[manual].classList.add("active");
        btns[manual].classList.add("active");
    }
    btns.forEach((btn,i) =>{
        btn.addEventListener("click",() =>{
            manualNav(i);
            currentSlide = i;
        })
    })

    let repeat = function(activeClass){
        let active = document.getElementsByClassName('active');
        let i = 1;

        let repeater = () =>{
            setTimeout(function(){
                [...active].forEach((activeSlide) =>{
                    activeSlide.classList.remove('active')
                })
                slides[i].classList.add('active');
                btns[i].classList.add('active');
                i++;
                if(slides.length == i){
                    i = 0;
                }
                if(i >= slides.length){
                    return;
                }
                repeater();
            },5000);
        }
        repeater();
    }
    repeat();

}
Panel();