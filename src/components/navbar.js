import Images from '../images/logo.png'
const Navbar = () =>
{
    return(
       
        <div className="bg-red-500 flex justify-between p-4  ">
        <div className="sm:flex"><img src={Images} className='h-8 md:h-8 lg:h-10 xl:h-10'></img></div>
        <ul className="cursor-pointer flex justify-center space-x-4">
            <li className="hover:text-white" href="#home">Home</li>
            <li className="hover:text-white" href="#gallery">Gallery</li>
            <li className="hover:text-white" href="#contact">Contact</li>
            <li className="hover:text-white" href="#career">Career</li>
            <li className="hover:text-white" href="#about">About </li>
        </ul>
        {/* <button type="submit" value="Login" className="bg-blue-500 text-white hover:bg-gray-700 hover:text-black-300 p-2 rounded-md ">Login</button> */}
        </div>
    )
}
export default Navbar