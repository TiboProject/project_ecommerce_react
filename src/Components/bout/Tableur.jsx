const tableur = ({ lien, Firstpan}) => {
    return (
        <div>
           
                <div>
                    <span class=" inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-strongbold text-white mr-2 mb-2 inline-flex items-center">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = lien;
                            }}
                        > {Firstpan}</button></span>
                </div>
            </div>
    )
}
export default tableur;
