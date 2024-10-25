import BannerImg from "../../assets/2.png"
function Banner() {
  return (
    <>
    <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-8">
            {/* image section  */}
            <div className="flex justify-center items-center">
                <img src={BannerImg} alt="" />
            </div>
            <div className="flex flex-col gap-3 text-left justify-center">
                <h1 className="text-4xl font-semibold">Food is always Good</h1>
                <p className="font-semibold py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quas quibusdam hic ipsam vero minima dolorum excepturi! Nihil, accusantium blanditiis!</p>
            </div>
            {/* text section  */}
        </div>

    </div>
    </>
  )
}

export default Banner