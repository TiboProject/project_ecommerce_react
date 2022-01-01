export const imageLanding = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,

        transition: {
            duration: 1.5,
            ease: "easeInOut"
        }
    }
}

export const textFirstImageLanding = {
    initial: {
        y: "200%",
        opacity: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2.0 }
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], delay:1.0, duration: 2.75 }
 
    },
      
}

export const secondTextFirstImageLanding = {
    initial: {
       opacity:0,
       y:"200%",
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], delay:2.0, duration: 2.75 }
      }
}

export const buttonArrowLanding = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        y:[30,-40],
        transition:{
            delay: 4.75,
            y:{
                yoyo: Infinity,
                ease: "easeOut"
            }            
        }
    }
}

export const firstCardLanding = {
    initial: {
       opacity:0,
       x:200,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: { 
            delay: 2.0,
            ease: "easeInOut",
            duration: 2.0
         }
      }
}

export const secondCardLanding = {
    initial: {
       opacity:0,
       x:-200,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: { 
            delay: 4.0,
            ease: "easeInOut",
            duration: 2.0
         }
      }
}

export const secondImageLanding = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,

        transition: {
            delay: 0.60,
            duration: 2.0,
            ease: "easeInOut"
        }
    }
}