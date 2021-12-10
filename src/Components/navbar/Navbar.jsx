import { useState } from "react";
import { Constant } from "../../Constant";
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    var location = document.location.href;
    var lastSlash = location.substring(location.lastIndexOf("/"));

    function cart() {
        alert("panier");
    }

    return (
        <>
            <nav className="bg-gray-800">
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
                                        href="https://github.com/TiboProject/project_ecommerce_react"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-serif "
                                    >
                                        Contactez nous
                                    </a>

                                    <a
                                        href="https://github.com/TiboProject/project_ecommerce_react"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-serif  "
                                    >
                                        A propos de nous
                                    </a>
                                    <button>
                                        <FaOpencart color="white" size={25} onClick={cart} />
                                    </button>
                                    <button
                                        type="button"
                                        className="text-gray-300 font-mono rounded border-2 hover:bg-white hover:text-gray-800"
                                    >
                                        Se connecter
                                    </button>
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
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
export default Navbar;