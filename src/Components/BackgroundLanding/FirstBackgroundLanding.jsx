import { motion } from "framer-motion";
import { buttonArrowLanding, buttonArrowWithoutUserLanding, imageLanding, secondTextFirstImageLanding, textFirstImageLanding, thirdTextFirstImageLanding } from "../../VariantsForMotion";
import { RiArrowDownSLine } from "react-icons/ri";

const FirstBackgroundLanding = ({ imageSrc, functionOnClick, userState, firstTitle, secondTitle }) => {
    return (
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
                        {firstTitle}
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
                        {secondTitle}
                    </motion.p>
                </motion.div>
                {
                    userState && (
                        <motion.div
                            variants={thirdTextFirstImageLanding}
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
                                {userState}
                            </motion.p>
                        </motion.div>
                    )
                }
                <div className="grid place-items-center">
                    {
                        userState!==null ? (
                            <motion.div
                                variants={buttonArrowLanding}
                                initial="initial"
                                animate="animate"

                            >
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    onClick={functionOnClick}
                                >
                                    <RiArrowDownSLine size={90} color="#8A0C0C" />
                                </motion.button>
                            </motion.div>
                        )
                            :
                            (
                                <motion.div
                                    variants={buttonArrowWithoutUserLanding}
                                    initial="initial"
                                    animate="animate"

                                >
                                    <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        onClick={functionOnClick}
                                    >
                                        <RiArrowDownSLine size={90} color="#8A0C0C" />
                                    </motion.button>
                                </motion.div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default FirstBackgroundLanding;