import { Constant } from "../../Constant";
import Tableur from "../bout/Tableur";

const Card = ({ imgSrc, Firstexte}) => {
    return (
        <>
            <div class="pt-28">
                <div class="relative flex-shrink-0 overflow-hidden w-1/2 rounded-3xl ml-96 ">
                    <img
                        src={imgSrc}
                        alt=""
                        class="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    <div class="relative h-96 w-70 p-12 flex flex-col justify-between items-start">
                        <div>
                            <h2 class="mt-3 w-2/3 text-3xl font-semibold tracking-tight text-white">
                                {Firstexte}
                            </h2>
                        </div>
                        <Tableur Firstpan="Facebook "  lien="https://fr-fr.facebook.com/login.php/" />
                        <Tableur Firstpan="Instagram" lien="https://www.instagram.com/accounts/login/"  />
                        <div>
                            <Tableur Firstpan="Youtube" lien="https://www.youtube.com/channel/UC0FiteeUtoMK2mNinV8WMtQ" />
                            <Tableur Firstpan="Twitter" lien="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZnIifQ%3D%3D%22%7D" />
                            <Tableur Firstpan="Linkedin" lien="https://fr.linkedin.com/" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;