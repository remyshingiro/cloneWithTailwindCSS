function Cards(){
    return(
        <>
        <div className="h-200 bg-gray-50 ">
            <div className="absolute top-365 left-110">
                <div className="font-bold text-3xl"><p>Choose Your Plan</p></div>
            </div>
             <div className="absolute top-379 left-85">
                    <p className="text-gray-700">Let's choose the package that is best for you and explore it happily and</p>
                    <p className="text-gray-700 absolute top-5 left-55">cheerfully.</p>
             </div>

             <div className="bg-white h-120 w-65 absolute top-400 left-30 rounded-sm border-gray-300 border-2">
                <div className="">
                    <img className="w-19 absolute top-15 left-22" src="/Free.png"/>
                    <p className="w-19 absolute top-39 left-22 font-bold">Free Plan</p>
                    
                    <div className="flex absolute top-55 left-9">
                        <img src="/jam_check.png"/>
                        <p className="text-gray-300">Unlimited Bandwitch</p>
                    </div>
                    <div className="flex absolute top-62 left-9">
                        <img src="/jam_check.png"/>
                        <p className="text-gray-300">Encrypted Connection</p>
                    </div>
                    <div className="flex absolute top-69 left-9">
                        <img src="/jam_check.png"/>
                        <p className="text-gray-300">No Traffic Logs</p>
                    </div>
                    <div className="flex absolute top-76 left-9">
                        <img src="/jam_check.png"/>
                        <p className="text-gray-300">Works on All Devices</p>
                    </div>
                    <div className="flex absolute top-92 left-26">
                        <p className="font-bold text-xl">Free</p>
                    </div>
                    <div className="flex absolute top-100 left-22  border-red-500 border-2 rounded-2xl w-19">
                        <p className="ml-4 text-red-500 font-bold">Select</p>
                    </div>
                </div>
             </div>

             <div className="bg-white h-120 w-65 absolute top-400 left-120 rounded-sm border-gray-300 border-2">
                <div className="">
                    <img className="w-19 absolute top-15 left-22" src="/Free.png"/>
                    <p className="w-19 absolute top-39 left-22 font-bold">Standard Plan</p>
                    
                    <div className="flex absolute top-55 left-9">
                        <img src="/jam_check.png"/>
                        <p className="text-gray-300">Unlimited Bandwitch</p>
                    </div>
                    <div className="flex absolute top-62 left-9">
                        <img src="/jam_check.png"/>
                        <p className="text-gray-300">Encrypted Connection</p>
                    </div>
                    <div className="flex absolute top-69 left-9">
                        <img src="/jam_check.png"/>
                        <p className="text-gray-300">Yes Traffic Logs</p>
                    </div>
                    <div className="flex absolute top-76 left-9">
                        <img src="/jam_check.png"/>
                        <p className="text-gray-300">Connect Anyware</p>
                    </div>
                    <div className="flex absolute top-92 left-26">
                        <p className="font-bold text-xl">$9</p>
                        <p className="text-gray-300">/ mo</p>
                    </div>
                    <div className="flex absolute top-100 left-22 border-2 border-red-500 rounded-2xl w-19">
                        <p className="ml-4 text-red-500 font-bold">Select</p>
                    </div>
                </div>
             </div>

             <div className="bg-white h-120 w-65 absolute top-400 left-210 rounded-sm  border-red-500 border-2 ">
                <div className="">
                    <img className="w-19 absolute top-15 left-22" src="/Free.png"/>
                    <p className="w-10 absolute top-39 left-22 font-bold">Premium Plan</p>
                    
                    <div className="flex absolute top-55 left-9">
                        <img src="/jam_check.png"/>
                        <p className="text-gray-300">Unlimited Bandwitch</p>
                    </div>
                    <div className="flex absolute top-62 left-9">
                        <img src="/jam_check.png"/>
                        <p className="text-gray-300">Encrypted Connection</p>
                    </div>
                    <div className="flex absolute top-69 left-9">
                        <img src="/jam_check.png"/>
                        <p className="text-gray-300">No Traffic Logs</p>
                    </div>
                    <div className="flex absolute top-76 left-9">
                        <img src="/jam_check.png"/>
                        <p className="text-gray-300">Works on All Devices</p>
                    </div>
                    <div className="flex absolute top-92 left-26">
                        <p className="font-bold text-xl">$12</p>
                        <p className="text-gray-300">/ mo</p>
                    </div>
                    <div className="flex absolute top-100 left-22 border border-red-500 rounded-2xl w-19 bg-red-500">
                        <p className="ml-4 text-white font-bold">Select</p>
                    </div>
                </div>
             </div>

        </div>
        </>
    )
}
export default Cards;