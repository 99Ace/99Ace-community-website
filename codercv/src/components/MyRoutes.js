// import react router stuff
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import components
import Landing from './Landing';
import Profile2 from './Profile2';
import Navbar from "./Navbar";

export default function MyRoutes() {
    return <>
        {/* Router  */}
        <Router>
            <Navbar/>
            
            <Routes>
                {/* Home route */}
                <Route path="/" element={<Landing />} />

                {/* About Us route */}
                <Route path="/profile/:id" element={<Profile2 />} />
            </Routes>
            
        </Router >
    </>
}