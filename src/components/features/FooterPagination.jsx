function FooterPagination(){
    return(
        <footer className="flex justify-center items-center  gap-[8px]">
            {/*flecha izquierda */}
            <div className="w-[40px] h-[40px] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </div>
            {/* Números */}
            <div className="flex h-[40px]">
                <div className="w-[40px] flex justify-center border-black rounded-[8px] items-center text-[#fff] bg-[#181818]">1</div>
                <div className="w-[40px] flex justify-center border-none items-center rounded-[8px] hover:bg-[#eeeeee] hover:cursor-pointer">2</div>
                <div className="w-[40px] flex justify-center border-none items-center rounded-[8px] hover:bg-[#eeeeee] hover:cursor-pointer">3</div>
                <span className="w-[40px] flex justify-center items-center">...</span>
                <div className="w-[40px] flex justify-center items-center border-none rounded-[8px] hover:bg-[#eeeeee] hover:cursor-pointer">8</div>
            </div>
            {/*flecha derecha */}
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-md bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div>
            
        </footer>
    );
}

export default FooterPagination;