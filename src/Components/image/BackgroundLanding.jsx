import { Constant } from "../../Constant";

const BackgroundLanding = ({ imageSrc, firstText, secondText }) => {
    return (
        <div class="w-full h-screen relative">
            <img src={imageSrc} alt="Dortmund fans" className="w-full h-full object-cover object-bottom" />
            <div className="w-1/2 h-1/2 absolute top-1/3 left-1/2 ">
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
                                Personnalisez votre maillot de votre club favori
                            </h2>
                        </div>
                        <a href="#" class="px-4 py-3 rounded-lg bg-white text-slate-900 text-sm font-medium">
                            Personnalisez vos maillots
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-1/2 h-1/2 absolute top-1/3 right-1/2">
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
            </div>
        </div>
    )
}

export default BackgroundLanding;