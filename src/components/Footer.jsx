import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import WavesIcon from '@mui/icons-material/Waves';

function Footer(){  
    return(
        <>
            <footer className="bg-[#F4F4F6] py-16 text-center">
                <h1 className="text-xl pb-6 text-teal-600 font-semibold"><WavesIcon/> Logoipsum</h1>
                <p className="w-[36%] mx-auto pb-12 text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                <ul className="flex gap-12 justify-center">
                    <li><a href="" className="text-gray-700 hover:text-gray-700/75">About</a></li>
                    <li><a href="" className="text-gray-700 hover:text-gray-700/75">Careers</a></li>
                    <li><a href="" className="text-gray-700 hover:text-gray-700/75">History</a></li>
                    <li><a href="" className="text-gray-700 hover:text-gray-700/75">Services</a></li>
                    <li><a href="" className="text-gray-700 hover:text-gray-700/75">Projects</a></li>
                    <li><a href="" className="text-gray-700 hover:text-gray-700/75">Blog</a></li>
                </ul>
                <div className="flex justify-center pt-12 text-gray-700">
                    <a href="" className="mr-8 hover:text-gray-500"><FacebookOutlinedIcon /></a>
                    <a href="" className="mr-8 hover:text-gray-500"><InstagramIcon/></a> 
                    <a href="" className="mr-8 hover:text-gray-500"><TwitterIcon/></a>    
                    <a href="" className="mr-8 hover:text-gray-500"><GitHubIcon/></a>    
                    <a href="" className=" hover:text-gray-500"><SportsBasketballIcon/></a>    
                </div>
            </footer>
        </>
    )
}
export default Footer;