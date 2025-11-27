function Footer(){
    return(
        <>
        <div className="h-120 bg-pink-50 ">
            <div className="flex gap-80 bg-white w-200 ml-65 rounded-md h-30 shadow-lg ">
                <div className="ml-10 mt-3">
                    <p className="font-bold text-2xl">Subscribe Now for</p>
                    <p className="font-bold text-2xl">Get Special Features!</p>
                    <p className="text-gray-500">Let's subscribe with us and find the fun.</p>
                </div>

                <div className="mt-11 text-white bg-red-500 font-bold rounded-md h-10 w-33 shadow-xl"><button className="ml-2 mt-1">Subscribe Now</button></div>
            </div>

            <div className="">
                <div className="ml-20 mt-20">
                    <div className="flex gap-2">
                        <img className="w-5" src="/Vector.png"/>
                        <p className="font-black">Lasles<span >VPN</span></p>
                    </div>

                    <p className="text-gray-500">LaslesVPN is a private virtual network that </p>
                    <p className="text-gray-500">has unique features and has high security.</p>

                    <div className="flex ">
                        <img src="/Facebook.png"/>
                        <img src="/Twitter.png"/>
                        <img src="/Instagram.png"/>
                    </div>
                    <p className="text-gray-500">©2020LaslesVPN</p>
                </div>
            </div>

            <div className="flex gap-30 absolute left-150 top-915">
                <div>
                    <p className="font-bold">Product</p>
                    <p className="text-gray-400">Download</p>
                    <p className="text-gray-400">Pricing</p>
                    <p className="text-gray-400">Locations</p>
                    <p className="text-gray-400">Server</p>
                    <p className="text-gray-400">Countries</p>
                    <p className="text-gray-400">Blog</p>
                </div>

                <div>
                    <p className="font-bold">Engage</p>
                    <p className="text-gray-400">LaslesVPN ?</p>
                    <p className="text-gray-400">FAQ</p>
                    <p className="text-gray-400">Tutorials</p>
                    <p className="text-gray-400">About Us</p>
                    <p className="text-gray-400">Privacy Policy</p>
                    <p className="text-gray-400">Terms of Service</p>
                </div>

                <div>
                    <p className="font-bold">Earn Money</p>
                    <p className="text-gray-400">Affiliate</p>
                    <p className="text-gray-400">Become Partner</p>
                    
                </div>
            </div>

        </div>
        </>
    )
}
export default Footer;