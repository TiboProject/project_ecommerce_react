import { motion } from "framer-motion";

const ImageEndLanding = ({className, variants, secondClassName, imageSrc}) => {
    return (
        <div className={className}>
            <motion.img
                variants={variants}
                className={secondClassName}
                src={imageSrc} />
        </div>
    )
}

export default ImageEndLanding;