import { motion } from "framer-motion";
import { BiPurchaseTag } from "react-icons/bi";


const CardThirdLanding = ({firstText, secondText, href}) => {
    return (
        <div class="">
            <div class="text-center p-1 flex-auto justify-center">
                <BiPurchaseTag className="w-16 h-16 flex items-center mx-auto" color="white" />
                <h2 class="text-xl font-bold text-white">{firstText}</h2>
            </div>
            <div class="p-3  mt-2 text-center space-x-4 md:block">
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={href}
                    className="mb-2 md:mb-0 bg-red-800 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
                >
                    {secondText}
                </motion.a>
            </div>
        </div>
    )
}

export default CardThirdLanding;