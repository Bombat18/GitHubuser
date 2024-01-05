import Search from './Search';
import ImageList from './ImageList';
import { useEffect, useState } from "react";
import ImageDetils from './ImageDetiles';


function ImageDex() {
    const [searchTerm, setSearchterm] = useState('');

    useEffect(
        () => { }, [searchTerm]
    )
    return (
        <div>
            <Search updateSearchTerm={setSearchterm} />
            
            {(!searchTerm) ? <ImageList /> : <ImageDetils key={searchTerm} userName={searchTerm} />}


        </div>
    );
}
export default ImageDex;