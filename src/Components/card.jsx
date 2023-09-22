/* eslint-disable react/prop-types */
const Card = ({title,role,names}) => {
    return ( <>
    
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:w-[500px]">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVVgWny6Wimj9rzxDt9tDeFMtxtHJr7lD6g&usqp=CAU' alt="Kevine" />
          {/* <img className="h-48 w-full object-cover md:w-48" src={image} alt="Kevine" /> */}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"> 
            {title}
          </div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {role}
          </a>
          <p className="mt-2 text-gray-500">
        {names}
          </p>
        </div>
      </div>
    </div>    
    </> );
}
 
export default Card;