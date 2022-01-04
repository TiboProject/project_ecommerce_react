import { Constant } from "../../Constant";
import { RiArrowDownSLine } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { buttonArrowLanding, firstCardLanding, imageLanding, secondCardLanding, secondImageLanding, secondTextFirstImageLanding, textFirstImageLanding, titleLanding } from "../../VariantsForMotion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { VscSignIn } from "react-icons/vsc";
import "./Landing.css"

const Landing = ({ imageSrc, imageSrc2, imageSrc3 }) => {

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

    const windowWidth = window.innerWidth;

    ///Variants
    const titleLanding = {
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

    useEffect(() => {
        if (inViewImageBackground) {
            controlsImageBackground.start("animate");
        }
        if (inViewCard) {
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
                                <RiArrowDownSLine size={90} color="#8A0C0C" />
                            </motion.button>
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
            <div class="w-full h-screen relative">
                <img src="https://i.goopics.net/k3yy5g.jpg" alt="" class="w-full h-full object-cover" />
                <div className="w-auto h-auto absolute top-9 max-w-full">

                    <p className="whitespace-nowrap text-center text-white italic font-mono text-10xl">
                        EXPERIENCE
                    </p>
                </div>
                <div className="w-auto h-auto absolute top-52 right-0 max-w-full">
                    <motion.p
                        className="text-center text-white italic font-mono text-10xl "
                        variants={titleLanding}
                        animate="animate"
                    >
                        SHOPPING
                    </motion.p>
                </div>
                <div className="w-auto h-auto absolute top-96 max-w-full">
                    <p className="whitespace-nowrap text-center text-white italic font-mono text-10xl">
                        INOUBLIABLE
                    </p>
                </div>
                <div className="w-auto h-auto absolute bottom-11 right-9">
                    <div class="w-full max-w-lg relative mx-auto my-auto rounded-xl shadow-lg  bg-red-900 ">
                        <div class="">
                            <div class="text-center p-1 flex-auto justify-center">
                                <VscSignIn className="w-16 h-16 flex items-center mx-auto" color="white" />
                                <h2 class="text-xl font-bold text-white">Connectez vous pour profiter d'avantages exclusifs</h2>
                            </div>
                            <div class="p-3  mt-2 text-center space-x-4 md:block">
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    onClick={executeScroll}
                                    class="mb-2 md:mb-0 bg-red-800 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
                                >
                                    Se connecter
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen relative">
                <motion.img
                    src={imageSrc3}
                    alt="fans"
                    className="w-full h-full object-cover"
                    variants={imageLanding}
                    initial="initial"
                    animate="animate"
                >
                </motion.img>
                <div className="w-auto h-auto absolute top-1/4 left-28 max-w-full">
                    <img className="w-full h-auto max-w-sm rounded" src="https://i.goopics.net/0n0ifp.jpg"/>
                </div>
                <div className="w-auto h-auto absolute top-14 right-28 max-w-full">
                    <img className="w-full h-auto max-w-xs rounded" src="https://i.goopics.net/1yvks1.jpg"/>
                </div>
                <div className="w-auto h-auto absolute -top-80 inset-0 flex items-center justify-center max-w-full">
                    <img className="w-full h-auto max-w-lg rounded" src="https://i.goopics.net/4kk652.jpg"/>
                </div>
            </div>
        </>
    )
}

export default Landing;