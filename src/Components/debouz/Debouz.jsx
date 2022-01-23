const Debouz = ({ Nom, Place }) => {
    return (
        <>
            <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-first-name">
                {Nom}
            </label>
            <input class="appearance-none block w-full bg-white-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={Place} required />
        </>
    )
}
export default Debouz;