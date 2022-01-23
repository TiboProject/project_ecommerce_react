import Formu from "../form/Formu";
import Card from "../card/Card";

const ContactUs = () => {
    return (
        <>
            <div class="bg-gradient-to-b from-gray-800 to-gray-400 h-screen">
                <Formu  />
            </div>
            <div class=" bg-gradient-to-b from-gray-400 to-white-400 h-screen">
                <Card Firstexte="Suivez nous sur nos réseaux" Fipan="-Linkedin" Fpan="-Twitter" Firstpan="Facebook" Span="-Instagram" Tpan="-Youtube" imgSrc="https://i.goopics.net/7z34yb.jpg"/>
            </div>
        </>
    )
}
export default ContactUs; 