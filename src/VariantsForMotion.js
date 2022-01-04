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
       x:300,
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
       x:-300,
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

export const containerImages = {
    show: {
      transition: {
        staggerChildren: 1.0,
      },
    },
  };

export const imagesLanding = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.0,
      },
    },
  };

  export const imageBgLanding = {
    hidden: { opacity: 0, x: - 500 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
      },
    },
  };

  export const buttonReplayLanding = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.35,
      },
    },
  };

 
 export const titleLanding = {
    animate: {
        x: [1000, -1960],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 7,
                ease: "linear",
            },
        },
    },
}