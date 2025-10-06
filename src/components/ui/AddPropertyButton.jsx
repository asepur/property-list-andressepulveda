function AddPropertyButton(){
    return(
        <button
            type="button"
            className="
                w-[171px] min-w-[85px] h-[32px] 
                flex items-center justify-center gap-1.5 
                px-2 py-1 
                rounded-[8px] border border-black bg-[#1b1b1b] 
                text-[white]
                cursor-pointer
                outline-none
                hover:bg-white
                flex
                gap-[4px]
                ">
            {/* Icono + */}
            <span className="font-bold text-lg text-white">+</span>
        
            {/* Texto */}
            <span className="font-inter font-medium text-[12px] leading-[18px] text-center text-white">
                Añadir nueva propiedad
            </span>
        </button>
    );

}

export default AddPropertyButton;