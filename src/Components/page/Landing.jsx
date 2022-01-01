import { Constant } from "../../Constant";
import { RiArrowDownSLine } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { buttonArrowLanding, firstCardLanding, imageLanding, secondCardLanding, secondImageLanding, secondTextFirstImageLanding, textFirstImageLanding } from "../../VariantsForMotion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";


const Landing = ({ imageSrc, imageSrc2 }) => {

    ///States

    ///Scrolling
    const firstScroll = useRef(null);
    const executeScroll = () => firstScroll.current.scrollIntoView({ behavior: "smooth" });



    ///Second div motion
    const controlsImageBackground = useAnimation();
    const controlsCards = useAnimation();

    ///Intersection observer (element visible ou non)
    const [refImageBackground, inViewImageBackground] = useInView();
    const [refCards, inViewCard] = useInView();

    useEffect(()=>{
        if(inViewImageBackground){
            controlsImageBackground.start("animate");
        }
        if(inViewCard){
            controlsCards.start("animate");
        }
    });

    return (
        <>
            <div className="flex-auto w-full h-screen ">
                <motion.img
                    src={imageSrc}
                    alt="fans"
                    className="w-full h-full object-cover"
                    variants={imageLanding}
                    initial="initial"
                    animate="animate"
                >
                </motion.img>
                <div className="absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full ">
                    <motion.div
                        variants={textFirstImageLanding}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.p
                            className="text-center text-white italic font-mono font-semibold text-7xl"
                            drag
                            dragConstraints={{ left: -600, right: 600, top: -50, bottom: 700 }}
                            dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}>
                            Bienvenue sur
                        </motion.p>
                    </motion.div>
                    <motion.div
                        variants={secondTextFirstImageLanding}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.p
                            className="text-center text-white italic font-mono text-7xl"
                            drag
                            dragConstraints={{ left: -600, right: 600, top: -50, bottom: 600 }}
                            dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}>
                            Todax
                        </motion.p>
                    </motion.div>
                    <div className="grid place-items-center">
                        <motion.div
                            variants={buttonArrowLanding}
                            initial="initial"
                            animate="animate"

                        >
                            <motion.button
                            whileHover={{ scale: 1.2 }}
                            onClick={executeScroll}
                            >
                            <RiArrowDownSLine size={90} color="#8A0C0C" /></motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div ref={firstScroll} class="w-full h-screen relative">
            <motion.img
                    ref={refImageBackground}
                    src={imageSrc2}
                    alt="ultras"
                    className="w-full h-full object-cover object-bottom"
                    variants={secondImageLanding}
                    initial="initial"
                    animate={controlsImageBackground}
                >
                </motion.img>
                <div className="w-1/2 h-1/2 absolute top-1/3 left-1/2 ">
                <motion.div
                        ref={refCards}
                        variants={firstCardLanding}
                        initial="initial"
                        animate={controlsCards}
                    >
                    <div class="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl ml-10">
                        
                        <img
                            src="https://i.goopics.net/a39jmq.jpg"
                            alt=""
                            class="absolute inset-0 w-full h-full object-cover object-right-top"
                        />
                        <div class="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75" ></div>
                        <div class="relative h-96 w-full p-12 flex flex-col justify-between items-start">
                            <div>
                                <h2 class="mt-3 w-2/3 text-3xl font-semibold tracking-tight text-white">
                                    Personnalisez le maillot de votre club favori
                                </h2>
                            </div>
                            <a href="#" class="px-4 py-3 rounded-lg bg-white text-slate-900 text-sm font-medium">
                                Personnalisez vos maillots
                            </a>
                        </div>
                    </div>
                    </motion.div>
                </div>

                <div className="w-1/2 h-1/2 absolute top-1/3 right-1/2">
                <motion.div
                        ref={refCards}
                        variants={secondCardLanding}
                        initial="initial"
                        animate={controlsCards}
                    >
                    <div class="relative flex-shrink-0 overflow-hidden rounded-3xl mr-10">
                        <img
                            src="https://i.goopics.net/6e9375.png"
                            alt=""
                            class="absolute inset-0 w-full h-full object-cover object-top"
                        />
                        <div class="relative h-96 w-70 p-12 flex flex-col justify-between items-start">
                            <div>
                                <h2 class="mt-3 w-2/3 text-3xl font-semibold tracking-tight text-white">
                                    Retrouvez tous les maillots de football de vos stars préférées
                                </h2>
                            </div>
                            <a href={Constant.PATHS.HOME} class="px-2 py-3 rounded-lg bg-white text-slate-900 text-sm font-medium">
                                Recherchez votre maillot favori
                            </a>
                        </div>
                    </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Landing;