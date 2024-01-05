import React, { useState, useEffect } from "react";
import Image from "./Image";
import axios from "axios";



function ImageList({UserName}) {



  const [imageList, setImageList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [imageApiUrl, setImageApiUrl] = useState(
    "https://api.github.com/users?per_page=200",
    
  );

 
  async function fetchData(url) {
    setLoading(true);
    try {
      
      let response = await axios.get(url, {
        params: {
          limits: 100,

        },
      });
      const imageResult = response.data;

      const imageListResult = imageResult.map((imageData) => {
        const image = imageData;
        console.log(image);
        return {

          image: image.avatar_url,
          username: image.login,
          key: image.id
        };
      });



      setImageList(imageListResult);
    } catch (error) {
      console.log("Error fetching data:", + error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(imageApiUrl);
  }, [imageApiUrl]);


  return (
    <div >


      <div className=" bg-white dark:bg-black flex flex-wrap w-{100%} justify-around  md:mx-16" >

        {isLoading
          ? "Loading"
          : imageList.map((image) => (
            <Image image={image.image} key={image.key} username={image.username} />
          ))}
      </div>
    </div>

  );
}

export default ImageList;
