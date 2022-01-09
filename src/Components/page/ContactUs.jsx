import { BsInstagram, BsFacebook, BsYoutube, BsLinkedin, BsTwitter, BsAlignCenter } from "react-icons/bs";
import { Formik, Field, Form, ErrorMessage } from 'formik';



const ContactUs = () => {

    return (
        <>


            <div class="bg-gradient-to-b from-gray-800 to-gray-400 h-screen">
                <div>

                </div>
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
                                <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Prénom
                                </label>
                                <input class="appearance-none block w-full bg-white-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" required />

                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Nom
                                </label>
                                <input class="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" required />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-password">
                                    Mail
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mail" type="email" placeholder="exemple@hotmail.fr"
                                />

                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Objet
                                </label>
                                <input class="appearance-none block w-full bg-white-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-objet" type="text" placeholder="Commande" required />
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
                                ></textarea>
                                <p class="text-gray-600 text-xs italic">Veuillez remplir tous les champs.</p>
                                <p class="text-gray-600 text-xs italic">Votre message ne sera pas pris en compte le cas échéant</p>
                                <div class="py-8 ...">
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

            </div>

            <div class=" bg-gradient-to-b from-gray-400 to-white-400 h-screen">


                <div>


                </div>




                <div class="pt-28">
                    <div class="relative flex-shrink-0 overflow-hidden w-1/2 rounded-3xl ml-96 ">
                        <img
                            src="https://i.goopics.net/7z34yb.jpg"
                            alt=""
                            class="absolute inset-0 w-full h-full object-cover object-top"
                        />
                        <div class="relative h-96 w-70 p-12 flex flex-col justify-between items-start">
                            <div>
                                <h2 class="mt-3 w-2/3 text-3xl font-semibold tracking-tight text-white">
                                    Suivez nous sur nos réseaux
                                </h2>
                            </div>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"><BsFacebook /><button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = 'https://fr-fr.facebook.com/login.php/';
                                    }}
                                > -Facebook</button></span>

                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"> < BsInstagram /> <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = 'https://www.instagram.com/accounts/login/';
                                    }}
                                > -Instagram</button> </span>
                            <div>

                                
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-extrabold text-gray-700 mr-2 mb-2 inline-flex items-center"> <BsYoutube /><button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = 'https://www.youtube.com/channel/UC0FiteeUtoMK2mNinV8WMtQ';
                                    }}
                                > -Youtube</button></span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"> <BsTwitter /><button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = 'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZnIifQ%3D%3D%22%7D';
                                    }}
                                > -Twitter</button></span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"> <BsLinkedin /><button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = 'https://fr.linkedin.com/company/connecter';
                                    }}
                                > -Linkedin</button></span>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>


    )
}
export default ContactUs; 