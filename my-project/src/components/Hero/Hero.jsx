import HeroImg from "../../assets/1.png"
function Hero() {
  return (
    <div>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[800px] gap-8 b">
            <div className="flex flex-col justify-center gap-5 text-center md:text-left pt-24 pb-10 md:p-0">
            {/* Text Section */}
            <h1 className="text-6xl font-bold ">Delicious Food Is Waiting For You</h1>
            <p className="font-semibold text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta totam, assumenda consectetur autem veniam delectus magnam corrupti iure officiis est!</p>
            <div className="flex gap-5 justify-center md:justify-start">
                <button className="primary-btn hover:scale-105 transition transform duration-200 text-2xl">Food Menu</button>
                <button className="secndry-btn hover:scale-105 transition transform duration-200 text-2xl">Book Table</button>
            </div>
            </div>
            {/* image section  */}
            <div className="flex flex-col justify-center pb-10">
                <img 
                src={HeroImg} 
                alt="" 
                className="img-shadow max-w-[600px] w-[400px] mx-auto animate-spin-slow"
                />
            </div>

            
        </div>

    </div>
  )
}

export default Hero