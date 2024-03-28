$(document).ready(function(){
    $("#nav1").mouseenter(function(){
        $("#nav1").css("color","#F29F05")
    })
    $("#nav1").mouseleave(function(){
        $("#nav1").css("color","#363636")
    })


    $("#nav2").mouseenter(function(){
        $("#nav2").css("color","#F29F05")
    })
    $("#nav2").mouseleave(function(){
        $("#nav2").css("color","#363636")
    })
    

    $("#nav3").mouseenter(function(){
        $("#nav3").css("color","#F29F05")
    })
    $("#nav3").mouseleave(function(){
        $("#nav3").css("color","#363636")
    })
        

    $("#nav4").mouseenter(function(){
        $("#nav4").css("color","#F29F05")
    })
    $("#nav4").mouseleave(function(){
        $("#nav4").css("color","#363636")
    })
    

    $("#nav5").mouseenter(function(){
        $("#nav5").css("color","#F29F05")
    })
    $("#nav5").mouseleave(function(){
        $("#nav5").css("color","#363636")
    })

})











document.querySelectorAll('.truck-button').forEach(button => {
    button.addEventListener('click', e => {

        e.preventDefault();
        let gsap
        let box = button.querySelector('.box'),

            truck = button.querySelector('.truck');
        
        if(!button.classList.contains('done')) {
            
            if(!button.classList.contains('animation')) {

                button.classList.add('animation');

                gsap.to(button, {
                    '--box-s': 1,
                    '--box-o': 1,
                    duration: .3,
                    delay: .5
                });

                gsap.to(box, {
                    x: 0,
                    duration: .4,
                    delay: .7
                });

                gsap.to(button, {
                    '--hx': -5,
                    '--bx': 50,
                    duration: .18,
                    delay: .92
                });

                gsap.to(box, {
                    y: 0,
                    duration: .1,
                    delay: 1.15
                });

                gsap.set(button, {
                    '--truck-y': 0,
                    '--truck-y-n': -26
                });

                gsap.to(button, {
                    '--truck-y': 1,
                    '--truck-y-n': -25,
                    duration: .2,
                    delay: 1.25,
                    onComplete() {
                        gsap.timeline({
                            onComplete() {
                                button.classList.add('done');
                            }
                        }).to(truck, {
                            x: 0,
                            duration: .4
                        }).to(truck, {
                            x: 40,
                            duration: 1
                        }).to(truck, {
                            x: 20,
                            duration: .6
                        }).to(truck, {
                            x: 96,
                            duration: .4
                        });
                        gsap.to(button, {
                            '--progress': 1,
                            duration: 2.4,
                            ease: "power2.in"
                        });
                    }
                });
                
            }
            
        } else {
            button.classList.remove('animation', 'done');
            gsap.set(truck, {
                x: 4
            });
            gsap.set(button, {
                '--progress': 0,
                '--hx': 0,
                '--bx': 0,
                '--box-s': .5,
                '--box-o': 0,
                '--truck-y': 0,
                '--truck-y-n': -26
            });
            gsap.set(box, {
                x: -24,
                y: -6
            });
        }

    });
});





var swiper = new Swiper(".mySwiper", {
    autoplay:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });