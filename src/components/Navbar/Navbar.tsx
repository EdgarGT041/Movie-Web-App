
function Navbar() {
  return (
    <nav className="bg-[#121212] py-2">
        <div className="items-center justify-between flex w-[80%] mx-auto">
            <div className="flex space-x-16">
                <div className="flex flex-col text-yellow-500">
                    <h1 className="text-[18px] leading-4">ALLABOUT</h1>
                    <h1 className="text-[24px] leading-5 font-semibold">MOVIES</h1>

                </div>
                <button className="text-yellow-500 text-[18px]  hover:underline ">
                    EXPLORE
                </button>
            </div>
            <div className=" ">
                <input 
                placeholder="Search"
                className="bg-[#1e1e1e] w-[500px] h-10 text-[#c2c2c2] text-lg outline-none px-4 placeholder:text-[#646464] rounded-xl" 
                type="text" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar