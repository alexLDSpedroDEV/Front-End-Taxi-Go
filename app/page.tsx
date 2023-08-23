import Booking from "@/components/booking/Booking";
import Map from "@/components/map/Map";


export default function Home() {
  return (
     <div>
         
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="">
               <Booking />
            </div>
            <div className="col-span-2 order-first md:order-last">
               <Map/>
            </div>

        </div>
     </div>
  )
}
