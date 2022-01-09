import { Constant } from "../../Constant";
import { BsInstagram, BsFacebook, BsYoutube, BsLinkedin, BsTwitter, BsAlignCenter } from "react-icons/bs";
const Card = ({imageSrc, firstText, secondText }) => {

    return (
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




    )      
}
        export default Card;