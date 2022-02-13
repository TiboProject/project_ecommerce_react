import { Constant } from "../../Constant";
import { AnimatePresence, motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { buttonGridImages, containerGridImages, firstCardLanding, firstImageGridLanding, gridImagesLanding, imageBgLanding, secondCardLanding, secondImageGridLanding, secondImageLanding, titleLanding } from "../../VariantsForMotion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { MdOutlineReplay } from "react-icons/md";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./Landing.css"
import FirstBackgroundLanding from "../BackgroundLanding/FirstBackgroundLanding";
import CardPromoLanding from "../card/CardPromoLanding";
import TextLanding from "../text/TextLanding";
import CardThirdLanding from "../card/CardThirdLanding";
import ImageEndLanding from "../image/ImageEndLanding";

function Card(props) {
    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false
    });

    function handleDragEnd(event, info) {
        if (info.offset.x < -100) {
            props.setExitX(-250);
            props.setIndex(props.index + 1);
        }
        if (info.offset.x > 100) {
            props.setExitX(250);
            props.setIndex(props.index + 1);
        }
    }

    return (
        <motion.div
            style={{
                width: 150,
                height: 150,
                position: "absolute",
                top: 0,
                x: x,
                rotate: rotate,
                cursor: "grab"
            }}
            whileTap={{ cursor: "grabbing" }}
            drag={props.drag}
            dragConstraints={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }}
            onDragEnd={handleDragEnd}
            initial={props.initial}
            animate={props.animate}
            transition={props.transition}
            exit={{
                x: props.exitX,
                opacity: 0,
                scale: 0.5,
                transition: { duration: 0.2 }
            }}
        >
            <motion.div
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "#fff",
                    borderRadius: 30,
                    scale: scale
                }}>
                {props.text}
            </motion.div>
        </motion.div>
    );
}

const Landing = ({ imageSrc, imageSrc2, imageSrc3 }) => {


    const [index, setIndex] = useState(0);
    const [exitX, setExitX] = useState("100%");

    ///States
    const [replay, setReplay] = useState(true);


    ///Scrolling
    const firstScroll = useRef(null);
    const executeScroll = () => firstScroll.current.scrollIntoView({ behavior: "smooth" });



    ///Second div motion
    const controlsImageBackground = useAnimation();
    const controlsCards = useAnimation();


    const controlsGridImages = useAnimation();

    function executeReplay() {
        setReplay(!replay);
    }

    ///Intersection observer (element visible ou non)
    ///Second image background
    const [refImageBackground, inViewImageBackground] = useInView();
    ///both cards second page
    const [refCards, inViewCard] = useInView();


    const [refGridImages, inViewGridImages] = useInView();

    const [isSignedIn, setIsSigned] = useState(false);
    const [userState, setUser] = useState(null);

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsSigned(true);
                setUser(auth.currentUser.displayName);
                console.log(user);
            } else {
                setIsSigned(false);
            }
        });
        if (inViewImageBackground) {
            controlsImageBackground.start("animate");
        }
        if (inViewCard) {
            controlsCards.start("animate");
        }
        if (inViewGridImages) {
            controlsGridImages.start("show");
        }
    });


    return (
        <>
            {
                isSignedIn ?
                    (
                        <FirstBackgroundLanding
                            firstTitle="Bienvenue sur"
                            functionOnClick={executeScroll}
                            imageSrc={imageSrc}
                            secondTitle="Todax"
                            userState={userState}

                        />
                    )
                    :
                    (
                        <FirstBackgroundLanding
                            firstTitle="Bienvenue sur"
                            functionOnClick={executeScroll}
                            imageSrc={imageSrc}
                            secondTitle="Todax"
                        />
                    )
            }
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
                    <CardPromoLanding
                        refCards={refCards}
                        classImg="absolute inset-0 w-full h-full object-cover object-right-top"
                        controlsCards={controlsCards}
                        firstClass="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl ml-10"
                        href="#"
                        variants={firstCardLanding}
                        firstTitle="Personnalisez le maillot de votre club favori"
                        secondTitle="Personnalisez vos maillots"
                        imageSrc="https://i.goopics.net/a39jmq.jpg"
                    />
                </div>

                <div className="w-1/2 h-1/2 absolute top-1/3 right-1/2">
                    <CardPromoLanding
                        refCards={refCards}
                        classImg="absolute inset-0 w-full h-full object-cover object-top"
                        controlsCards={controlsCards}
                        firstClass="relative flex-shrink-0 overflow-hidden rounded-3xl mr-10"
                        href={Constant.PATHS.HOME}
                        variants={secondCardLanding}
                        firstTitle="Retrouvez tous les maillots de football de vos stars préférées"
                        secondTitle="Recherchez votre maillot favori"
                        imageSrc="https://i.goopics.net/6e9375.png"
                    />
                </div>
            </div>

            <div class="w-full h-screen relative">
                <img src="https://i.goopics.net/k3yy5g.jpg" alt="" class="w-full h-full object-cover" />
                <div className="w-auto h-auto absolute top-9 max-w-full">
                    <TextLanding text="EXPERIENCE" />
                </div>
                <div className="w-auto h-auto absolute top-52 right-0 max-w-full">
                    <motion.p
                        className="text-center text-white italic font-mono md:text-8xl lg:text-10xl"
                        variants={titleLanding}
                        animate="animate"
                    >
                        SHOPPING
                    </motion.p>
                </div>
                <div className="w-auto h-auto absolute top-96 max-w-full">
                    <TextLanding text="INOUBLIABLE" />
                </div>
                <div className="w-auto h-auto absolute bottom-11 right-9">
                    <div class="w-full max-w-lg relative mx-auto my-auto rounded-xl shadow-lg  bg-red-900 ">

                        {
                            isSignedIn ? (
                                <CardThirdLanding
                                    firstText="Profitez de vos avantages exclusifs"
                                    href={Constant.PATHS.ACCOUNT}
                                    secondText="En profiter"
                                />
                            )
                                :
                                (

                                    <CardThirdLanding
                                        firstText="Connectez vous pour profiter d'avantages exclusifs"
                                        href={Constant.PATHS.SIGNIN}
                                        secondText="Se connecter"
                                    />
                                )

                        }
                    </div>
                </div>
            </div>
            {
                replay ? (
                    <motion.div
                        className="w-full h-screen relative"
                        ref={refGridImages}
                        variants={containerGridImages}
                        initial="hidden"
                        animate={controlsGridImages}
                    >
                        <motion.img
                            src={imageSrc3}
                            alt="fans"
                            className="w-full h-full object-cover"
                            variants={imageBgLanding}
                        >
                        </motion.img>
                        <div className="w-auto h-auto absolute top-1/4 left-28 max-w-full">
                            <motion.img
                                variants={firstImageGridLanding}
                                className="sm:flex-row flex-col sm:w-36 md:w-48 lg:w-full h-auto max-w-sm rounded-3xl object-cover"
                                src="https://i.goopics.net/1yvks1.jpg"
                            />
                            <div className="grid place-items-center">
                                <motion.button
                                    onClick={executeReplay}
                                    class="inline-flex items-center justify-center w-1/2 h-10 mr-2 transition-colors duration-150 bg-blue-900 rounded-full focus:shadow-outline hover:bg-blue-700"
                                    variants={buttonGridImages}
                                >
                                    <MdOutlineReplay size={25} color="white" />
                                </motion.button>
                            </div>
                        </div>
                        <ImageEndLanding 
                            className="w-auto h-auto absolute bottom-14 right-48 max-w-full"
                            imageSrc="https://i.goopics.net/sb7lsy.jpg"
                            secondClassName="sm:flex-row flex-col sm:w-36 md:w-48 lg:w-full h-auto max-w-md rounded-3xl object-cover"
                            variants={secondImageGridLanding}
                        />
                        <ImageEndLanding 
                            className="w-auto h-auto absolute top-11 left-1/3 flex items-center justify-center max-w-full"
                            imageSrc="https://i.goopics.net/4kk652.jpg"
                            secondClassName="sm:flex-row flex-col sm:w-36 md:w-48 lg:w-full h-auto max-w-lg rounded-3xl object-cover"
                            variants={gridImagesLanding}
                        />
                        <ImageEndLanding 
                            className="w-auto h-auto absolute top-14 right-28 max-w-full"
                            imageSrc="https://i.goopics.net/0n0ifp.jpg"
                            secondClassName="sm:flex-row flex-col sm:w-36 md:w-48 lg:w-full h-auto max-w-xs rounded-3xl object-cover"
                            variants={gridImagesLanding}
                        />
                        <ImageEndLanding 
                            className="w-auto h-auto absolute bottom-0 right-1/2 max-w-full"
                            imageSrc="https://i.goopics.net/bfneyl.jpg"
                            secondClassName="sm:flex-row flex-col sm:w-36 md:w-48 lg:w-full h-auto max-w-xs rounded-3xl object-cover"
                            variants={gridImagesLanding}
                        />
                    </motion.div>
                )

                    :
                    (
                        <div
                            className="w-full h-screen relative"
                        >
                            <motion.img
                                src={imageSrc3}
                                alt="fans"
                                className="w-full h-full object-cover"
                                variants={imageBgLanding}
                            >
                            </motion.img>

                            <div className="w-auto h-auto absolute top-1/4 left-1/2 flex items-center justify-center max-w-full">

                                <motion.div
                                    style={{
                                        width: 150,
                                        height: 150,
                                        position: "relative"
                                    }}
                                >
                                    <AnimatePresence initial={false}>
                                        <Card
                                            key={index + 1}
                                            initial={{ scale: 0, y: 105, opacity: 0 }}
                                            animate={{ scale: 0.75, y: 30, opacity: 0.5 }}
                                            transition={{
                                                scale: { duration: 0.2 },
                                                opacity: { duration: 0.4 }
                                            }}
                                            text="oui"
                                        />
                                        <Card
                                            key={index}
                                            animate={{ scale: 1, y: 0, opacity: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20,
                                                opacity: { duration: 0.2 }
                                            }}
                                            exitX={exitX}
                                            setExitX={setExitX}
                                            index={index}
                                            setIndex={setIndex}
                                            drag="x"
                                            text="OUIIII"
                                        />
                                    </AnimatePresence>
                                </motion.div>
                            </div>

                            <div className="w-auto h-auto left-1/2 absolute flex items-center justify-center bottom-1/4 ">
                                <motion.button
                                    onClick={executeReplay}
                                    class="inline-flex items-center justify-center w-40 h-10 mr-2 transition-colors duration-150 bg-blue-900 rounded-full focus:shadow-outline hover:bg-blue-700"
                                    variants={buttonGridImages}
                                >
                                    <MdOutlineReplay size={25} color="white" />
                                </motion.button>
                            </div>



                        </div>)
            }


        </>
    )
}

export default Landing;