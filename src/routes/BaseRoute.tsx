import { Routes, Route } from "react-router-dom";
import { Landing } from '../pages';

const BaseRoute = () => {
    return (
        <Routes>
            {/*Public routes*/}
            <Route path="/" element={<Landing />} />
            {/* <Route path="/users" element={<Dashboard />} /> */}
            

            {/*Catch Errors*/}
            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    )
};

export default BaseRoute;