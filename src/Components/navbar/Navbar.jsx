import { useEffect, useState } from "react";
import { Constant } from "../../Constant";
import "./Navbar.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {

    ///menu ouvert
    const [isOpen, setIsOpen] = useState(false);
    ///url de la page
    var location = document.location.href;
    ///ne prend que la fin de l'url
    var lastSlash = location.substring(location.lastIndexOf("/"));

    const [isSignedIn, setIsSigned] = useState(false);
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsSigned(true);
            } else {
                setIsSigned(false);
            }
        });
    });

    var priceFinal = 0;

    const listItems = [
        {
            nameProduct: 'Maillot PSG Home',
            quantity: "1",
            price: 13
        },
        {
            nameProduct: 'Maillot PSG Away',
            quantity: "5",
            price: 18
        },
        {
            nameProduct: 'Maillot Lyon Home',
            quantity: "10",
            price: 21
        },
    ];
    return (
        <>
            {lastSlash === Constant.PATHS.LANDING
                ?
                <nav className='sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30'>
                    <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-4">
                        <div className="flex items-center justify-between h-14">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <a
                                        href={Constant.PATHS.HOME}
                                        className="text-gray-300 font-extrabold font-sans text-xl"
                                    >
                                        Accueil
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                :
                <nav className='bg-gray-800 '>
                    <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <a
                                        href={Constant.PATHS.LANDING}>
                                        <img
                                            className="h-8 w-8"
                                            src="https://i.goopics.net/lrqjuf.png"
                                            alt="Workflow"
                                        />
                                    </a>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <a
                                            href={Constant.PATHS.HOME}
                                            className={`hover:bg-gray-700 ${lastSlash === Constant.PATHS.HOME ? "text-white" : "text-gray-300"} px-3 py-2 rounded-md text-xl font-serif`}
                                        >
                                            Accueil
                                        </a>

                                        <a
                                            href={Constant.PATHS.CONTACTUS}
                                            className={`hover:bg-gray-700 ${lastSlash === Constant.PATHS.CONTACTUS ? "text-white" : "text-gray-300"} px-3 py-2 rounded-md text-xl font-serif`}
                                        >
                                            Contactez nous
                                        </a>

                                        <a
                                            href="https://github.com/TiboProject/project_ecommerce_react"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-serif  "
                                        >
                                            A propos de nous
                                        </a>
                                        {
                                            lastSlash != Constant.PATHS.LANDING && (
                                                <div class="dropdown inline-block relative">
                                                    <button class="text-gray-700 font-semibold py-2 px-4 inline-flex">
                                                        <div slot="icon" class="relative">
                                                            <div class="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">{listItems.length}</div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" color="white" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-shopping-cart w-6 h-6 mt-2">
                                                                <circle cx="9" cy="21" r="1" color="white"></circle>
                                                                <circle cx="20" cy="21" r="1" color="white"></circle>
                                                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    {
                                                        listItems.length > 0 ?
                                                            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">

                                                                {
                                                                    listItems.map((item, i) => {
                                                                        priceFinal = priceFinal + item.price;
                                                                        console.log("prix final : " + priceFinal);
                                                                        return (

                                                                            <div key={i} class="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100" >
                                                                                <div class="p-2 w-12"><img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" /></div>
                                                                                <div class="flex-auto text-sm w-32">
                                                                                    <div class="font-bold">{item.nameProduct}</div>
                                                                                    <div class="text-gray-400">En stock : {item.quantity}</div>
                                                                                </div>
                                                                                <div class="flex flex-col w-18 font-medium items-end">
                                                                                    <div class="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                                                                                        <button onClick={() => { alert("élément supprimé : " + item.nameProduct) }}>
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-trash-2 ">
                                                                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                                                                            </svg>
                                                                                        </button>
                                                                                    </div>
                                                                                    {item.price} €</div>
                                                                            </div>

                                                                        )
                                                                    }
                                                                    )
                                                                }</ul>
                                                            :
                                                            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">

                                                                <li><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Panier vide</a></li>
                                                            </ul>}

                                                </div>
                                            )
                                        }
                                        {
                                            isSignedIn ?
                                                (
                                                    <button
                                                        type="button"
                                                        className="text-gray-300 font-mono rounded border-2 px-3 py-2 hover:bg-white hover:text-gray-800"
                                                    ><a href={Constant.PATHS.ACCOUNT}>
                                                            Votre compte
                                                        </a>
                                                    </button>
                                                )
                                                :
                                                (
                                                    <button
                                                        type="button"
                                                        className="text-gray-300 font-mono rounded border-2 px-3 py-2 hover:bg-white hover:text-gray-800"
                                                    ><a href={Constant.PATHS.SIGNIN}>
                                                            Se connecter
                                                        </a>
                                                    </button>
                                                )

                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    {isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (


                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="md:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href={Constant.PATHS.HOME}
                                    className={`hover:bg-gray-700 ${lastSlash === Constant.PATHS.HOME ? "text-white" : "text-gray-300"} block px-3 py-2 rounded-md text-base font-medium`}
                                >
                                    Accueil
                                </a>

                                <a
                                    href="https://github.com/TiboProject/project_ecommerce_react"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Contactez nous
                                </a>

                                <a
                                    href="https://github.com/TiboProject/project_ecommerce_react"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    A propos de nous
                                </a>
                                <a
                                    href="https://github.com/TiboProject/project_ecommerce_react"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Voir mon panier
                                </a>
                                {
                                    isSignedIn ?
                                        (
                                            <a
                                                href={Constant.PATHS.ACCOUNT}
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            >
                                                Mon compte
                                            </a>
                                        )
                                        :
                                        (
                                            <a
                                                href={Constant.PATHS.SIGNIN}
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            >
                                                Se connecter
                                            </a>
                                        )
                                }
                            </div>
                        </div>
                    )}
                </nav>
            }

        </>
    )
}
export default Navbar;