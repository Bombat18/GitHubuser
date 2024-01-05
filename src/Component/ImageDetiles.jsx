import axios from "axios";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ImageDetils({ userName }) {

    const { username } = useParams();

    const [image, setimage] = useState({});


    async function downloadImage() {
        let response;
        if (userName) {

            response = await axios.get(`https://api.github.com/users/${userName}`);
            console.log(response);
            setimage({
                image: response.data.avatar_url,
                name: response.data.name,
                bio: response.data.bio,
                joinDate: response.data.created_at,
                url: response.data.html_url,

            })

        }
        response = await axios.get(`https://api.github.com/users/${username}`);


        console.log(response);
        setimage({
            userpame:response.data.login,
            image: response.data.avatar_url,
            name: response.data.name,
            bio: response.data.bio,
            joinDate: response.data.created_at,
            url: response.data.html_url,
        })

    }

    useEffect(() => {
        downloadImage();
    }, []);
    // Assuming image.joinDate is a Date object or a valid date string
    const joinDate = new Date(image.joinDate);

    // Format the date to display only date, month, and year
    const formattedDate = joinDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });


    return (
        <div className="relative bg-blue-950">


            <div className=" h-[100vh]  flex w-full flex-wrap content-center justify-center items-cente text-black gap-10  " >
                <div className="rounded-full  bg-white p-5" >
                    <img src={image.image} className="w-60 h-60   rounded-full border-2 border-black    " />
                </div>
                <div className="flex flex-col flex-wrap  justify-center items-center">
                    <h1 className="text-4xl text-white" > {image.name} </h1>
                    <h1 className=" py-5 text-gray-50"> {image.bio}  </h1>
                    <h1 className="text-gray-100">Join: {formattedDate}</h1>
                    
                    <Link className="bg-yellow-400 px-3 py-1 rounded-md m-2 hover:bg-yellow-600 hover:text-white font-semibold" to={image.url} >Visit</Link>
                
                   
                </div>

            </div>

        </div>
    );
}
export default ImageDetils;