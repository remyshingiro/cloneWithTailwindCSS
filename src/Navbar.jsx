function Navbar() {
    return(
        <>
            <div class=" w-37 h-9 absolute top-12 left-12">
                <img src="/1.png" class="w-9 h-9 absolute top-12 left-"></img>
                <h5 class="w-26 h-6 absolute top-4 left-11 font-['Rubik'] font-medium text-xl leading-[100px] tracking-normal">Lasle <span class="font-['Rubik'] font-bold text-xl leading-[100px] tracking-normal">VPN</span></h5>
            </div>
            <div className="">
                <a href="#" class="w-11 h-5 absolute top-14 left-114 font-['Rubik'] font-normal text-base leading-[100px] tracking-normal text-gray-500">About</a>
                <a href="#" class="w-11 h-5 absolute top-14 left-135 font-['Rubik'] font-normal text-base leading-[100px] tracking-normal text-gray-500">Features</a>
                <a href="#" class="w-11 h-5 absolute top-14 left-162 font-['Rubik'] font-normal text-base leading-[100px] tracking-normal text-gray-500">Testimonials</a>
                <a href="#" class="w-11 h-5 absolute top-14 left-185 font-['Rubik'] font-normal text-base leading-[100px] tracking-normal text-gray-500">Pricing</a>
                <a href="#" class="w-11 h-5 absolute top-14 left-218 font-['Rubik'] font-normal text-base leading-[100px] tracking-normal text-gray-500">Help</a>
                <a href="#" class="w-13 h-5 absolute top-14 left-264 font-['Rubik'] font-bold text-base leading-[100px] tracking-normal ">Sign In</a>
                <button class="w-38 h-11 absolute top-20 left-285  rounded-[50px]  border-red-500 border-2 font-bold text-red-500">Sign Up</button>
            </div>
                
            
        </>
    )
}
export default Navbar;