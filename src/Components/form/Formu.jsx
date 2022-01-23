import Debouz from "../debouz/Debouz";

const Formu = ({ imageSrc }) => {

    return (
        <>
            <div class="py-6 ...">
                <p class="text-2xl flex justify-center items-center font-mono text-white">Contactez Nous!</p>
            </div>
            <div class="grid place-items-center">
                <div>
                    <p> <img src="https://i.goopics.net/rzx0vd.png" alt="Example1" width="100" height="100" /> </p>
                </div>
                <form class="w-full max-w-lg pt-20">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <Debouz Nom="Prénom" Place="Jane" />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <Debouz Nom="Nom" Place="Doe" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <Debouz Nom="Mail" Place="exemple@hotmail.fr" />
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <Debouz Nom="Objet" Place="Commande" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-password" >
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
                                required
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Votre message"
                            />
                            <p class="text-gray-600 text-xs italic">Veuillez remplir tous les champs.</p>
                            <p class="text-gray-600 text-xs italic">Votre message ne sera pas pris en compte le cas échéant</p>
                            <div class="py-8">
                                <div class="grid place-items-center">
                                    <button type="submit" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                                        Envoyer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formu; 