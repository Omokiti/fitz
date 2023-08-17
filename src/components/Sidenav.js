import Link from 'next/link';
import Image from 'next/image';
import { RxHome,RxPerson } from 'react-icons/rx';
import { HiOutlineLogout } from 'react-icons/hi';
import { CgCalculator } from 'react-icons/cg';
import {CiApple} from 'react-icons/ci'
import{ useRouter } from "next/router"


const Sidenav = ({ children }) => {

const router = useRouter()

const logout = async(e)=>{
    e.preventDefault()
    try {
        await account.deleteSession(ID.unique())
        router.push("/")
    } catch (error) {
}
 
 }

  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-red-100 text-white p-3 rounded-lg inline-block'>
            <RxHome size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/exercise'>
            <div className='bg-red-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            <RxPerson  size={20} />
            </div>
          </Link>
        
            <Link href ="/recipe" target="_self"> 
            <div className='bg-red-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            <CiApple size={20} />
            </div>
            </Link>
          
          <Link href='/bmi'>
            <div className='bg-red-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            <CgCalculator size={20} />
            </div>
          </Link>
          <button onClick={()=>logout}>
            <div className='bg-red-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            <HiOutlineLogout size={20} />
            </div>
          </button>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidenav;