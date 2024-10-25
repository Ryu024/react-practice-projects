import Image1 from "../../assets/3.png";
import Image2 from "../../assets/4.png";
import Image3 from "../../assets/5.png";

const FoodData = [
  {
    id : 1,
    image : Image1,
    rating : "⭐⭐⭐⭐⭐",
    price : 10.99,
    name : "Paneer Tikka",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ",
  },
  {
    id : 2,
    image : Image2,
    rating : "⭐⭐⭐⭐⭐",
    price : 10.99,
    name : "Fish salad",
    desc : "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ",
  },
  { 
    id : 3,
    image : Image3,
    rating : "⭐⭐⭐⭐⭐",
    price : 10.99,
    name : "Salty Salad",
    desc : "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ",
  }
]



const TopList = () => {
  return (
    <div className="container">
      {/* header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our Toplist</p>
      </div>
      {/* card section  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-15  ">
        {FoodData.map((item) => (<div key={item.id} className="bg-white/50 p-5 rounded-3xl gap-3 items-center hover:scale-105 sm:hover:scale-110 transition transform duration-300">
          <img 
            src={item.image} 
            alt=""
            className="mx-auto w-40 h-40 object-cover rounded-lg img-shadow max-w-[500px]"
            />
          <div>
          <p>{item.rating}</p>
          <p className="text-lg font-semibold">{item.name}</p>
          <p>{item.desc}</p>
          <p className="text-lg font-semibold">{item.price}</p>
          </div>
        </div>))} 
      </div>
    </div>
  );
};

export default TopList;
