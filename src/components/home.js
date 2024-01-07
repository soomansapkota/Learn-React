import Image from '../images/profile.png'
const Homepage = () => {


    return (
        <div className="flex items-center justify-center bg-gray-300 lg:h-[calc(100vh-9.6vh)] h-[calc(100vh-10.5vh)]">
      <div className="flex items-center justify-center max-w-full-lg mx-auto p-8 bg-white rounded-lg shadow-lg ">
       
        <div className="flex flex-col w-1/2 pr-5">
          <h1 className="text-gray-600 text-4xl font-bold mb-4">HELLO!</h1>
          <p className="container text-black text-2xl font-bold">
           Suman Sapkota
          </p>
          <p>
            I am an IT enthusiast.
          </p>
        </div>
        
        
        <div>
            <img src={Image}></img>
        </div>
      </div>
    </div>
    )

}
export default Homepage