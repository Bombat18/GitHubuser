import { Routes, Route } from "react-router-dom";
import ImageDex from "./ImageDex";
import ImageDetils from "./ImageDetiles";
function CoustamRoutes(){
    return (
        <Routes>
            <Route path="/" element={<ImageDex/>} />
            <Route path="/image/:username" element={<ImageDetils/>} />
        </Routes>
    )
}
export default CoustamRoutes;