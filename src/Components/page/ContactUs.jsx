import { BsInstagram, BsFacebook, BsYoutube, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const ContactUs = () => {
    return (
        <>

            <div class="bg-gradient-to-b from-gray-800 to-gray-400 h-screen">

                <div class="py-8 ...">
                    <p class="text-2xl flex justify-center items-center font-mono text-white">Contactez Nous!</p>
                </div>
                <div class="grid place-items-center">
                    <form class="w-full max-w-lg pt-20">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Prénom
                                </label>
                                <input class="appearance-none block w-full bg-white-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Nom
                                </label>
                                <input class="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-password">
                                    Mail
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mail" type="mail" placeholder="exemple@hotmailfr" />

                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Objet
                                </label>
                                <input class="appearance-none block w-full bg-white-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objet" type="text" placeholder="Commande" />
                            </div>
                        </div>
                    </form>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-password">
                                Message
                            </label>

                            <textarea
                                class="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Votre message"
                            ></textarea>
                            <p class="text-gray-600 text-xs italic">veuillez remplir tout les champs.</p>
                            <p class="text-gray-600 text-xs italic">Nous essayerons de vous aidez</p>
                            <div class="py-8 ...">
                                <div class="grid place-items-center">
                                    <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                                        Envoyer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="bg-gradient-to-b from-gray-400 to-white-400 h-screen">

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Nos Réseaux Sociaux</div>
                        <p class="text-gray-700 text-base">
                            Suivez nous pour avoir accès à des codes promotions exclusif!
                        </p>
                    </div>

                    <div class="px-6 pt-4 pb-2">

                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"><BsFacebook />-Todax</span>

                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"> < BsInstagram /> -TodaxOfficial</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"> <BsYoutube />-TodaxOff</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"> <BsTwitter />-TodaxOff</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"> <BsLinkedin />-Todax</span>


                    </div>
                </div>
            </div>
        </>

    )
}
export default ContactUs; 