import { RiArrowDownSLine } from "react-icons/ri";

const LandingImage = ({ imageSrc }) => {
    return (
        <div className="flex-auto w-full h-screen ">
            <img src={imageSrc} alt="stadium" className="w-full h-full object-cover"></img>
            <div className="absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full ">
                <h1 className="text-center text-blue-800 italic font-mono font-semibold text-7xl">Bienvenue sur</h1>
                <h1 className="text-center text-blue-900 italic font-mono  text-7xl">Todax</h1>
                <div className="grid place-items-center">
                    <button onClick={() => { console.log("clicked") }}><RiArrowDownSLine size={90} color="#0C0A86" /></button>
                </div>
            </div>
        </div>
    )
}

export default LandingImage