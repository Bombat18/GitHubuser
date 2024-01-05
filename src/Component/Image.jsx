
import { Link } from 'react-router-dom';
function Image({ image, username }) {

    return (
        <div className=' md:w-60 md:h-60 w-60 h-60  flex basis-1/2 md:basis-1/4 justify-center items-center p-2' >

            <Link to={`/image/${username}`}>
                <div className='hover:bg-cyan-300 p-2'>
                    <img className='md:w-36 md:h-36 w-36 h-36 hover:border-2 hover:border-black shadow-md rounded-sm ' src={image} />

                    <h1>
                        <span className='relative text-white bottom-10 tracking-wider bg-yellow-500 font-semibold  h-7  rounded-r-xl px-2  cursor-pointer bold inline-block' >
                            {username}</span></h1>
                    <div className='flex'>

                        <button className='bg-blue-800 px-3 py-1 mx-auto text-white font-semibold rounded-lg'>View</button>
                    </div>


                </div>


            </Link>

        </div>
    )
}
export default Image;