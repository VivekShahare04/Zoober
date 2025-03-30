import React from 'react'

const LocationSearchPanel = (props) => {
    //console.log(props);
    const Locations = [
        'vivek coding school',
        'pushkar coding school',
        'suyash coding school',
        'prasad coding school'

    ]
    return (
        
        <div>
            {
            Locations.map(function(elem,index){
                return  <div key={index} onClick={()=>{
                    props.setVehiclePanel(true);
                    props.setPanel(false);
                }}className='flex gap-4 border-2 border-white rounded-xl active:border-black items-center my-2 p-2 justify-start'>
                <h4 className='bg-[#eee]  flex items-center justify-center rounded-2xl h-8 w-8'><i className="ri-map-pin-line"></i></h4>
                <h5 className='font-medium'>{elem}</h5>
            </div>
            })
        }
        </div>
    )
}

export default LocationSearchPanel
