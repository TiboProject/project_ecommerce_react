import { motion } from "framer-motion";

const CardPromoLanding = ({refCards, variants, controlsCards, firstClass, classImg, href, firstTitle, secondTitle, imageSrc}) => {

    return (
        <motion.div
            ref={refCards}
            variants={variants}
            initial="initial"
            animate={controlsCards}
        >
            <div class={firstClass}>

                <img
                    src={imageSrc}
                    alt=""
                    class={classImg}
                />
                <div class="relative h-96 w-full p-12 flex flex-col justify-between items-start">
                    <div>
                        <h2 class="mt-3 w-2/3 text-3xl font-semibold tracking-tight text-white">
                            {firstTitle}
                        </h2>
                    </div>
                    <a href={href} class="px-4 py-3 rounded-lg bg-white text-slate-900 text-sm font-medium">
                        {secondTitle}
                    </a>
                </div>
            </div>
        </motion.div>
    )

}

export default CardPromoLanding;