import { BsPersonLinesFill } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { MdOutlineRestaurant } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

function OurServices() {
  return (
    <>
      <div className="container">
        <div >
          {/* heading */}

          <div>
            <h1 className="text-4xl font-semibold text-center pb-14">Our Services</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pb-10 gap-8 ">
            <div className="flex items-center justify-center gap-3" >
              <BsPersonLinesFill className="text-3xl"/>
              <p className="text-2xl font-semibold">Online Booking</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <IoFastFood className="text-3xl"/>
                <p className="text-2xl font-semibold">Fast Food</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MdOutlineRestaurant className="text-3xl"/>
              <p className="text-2xl font-semibold">Healthy Food</p>
            </div>
            <div className="flex items-center gap-2">
              <TbTruckDelivery className="text-3xl"/>
              <p className="text-2xl font-semibold">Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
