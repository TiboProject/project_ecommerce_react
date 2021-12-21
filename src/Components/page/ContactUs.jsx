import { BsInstagram,BsFacebook,BsYoutube,BsLinkedin,BsTwitter } from "react-icons/bs";

const ContactUs = () => {
    return (
        <>
            <div class="bg-gradient-to-b from-gray-800 to-gray-400 h-screen">

                <p class="text-2xl flex justify-center items-center font-mono text-white">Contactez Nous!</p>
                <h2>01-34-61-68-92</h2>

            </div>
            <div class="bg-gradient-to-b from-gray-400 to-white-400 h-screen">

                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p class="text-gray-700 text-base">
                            Ajoutez nos réseaux!
                        </p>
                    </div>

                    <div class="px-6 pt-4 pb-2">
                    
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"><BsFacebook/>-Todax</span>
                        
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"> < BsInstagram /> -TodaxOfficial</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"> <BsYoutube/>-Youtube</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"> <BsTwitter/>-Twitter</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 inline-flex items-center"> <BsLinkedin/>-Linkedin</span>

                       
                    </div>
                </div>
            </div>
        </>

    )
}
export default ContactUs; 