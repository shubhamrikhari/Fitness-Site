import {Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './Pages/Home';
import Navbar from './components/Navbar'
import ExerciseDetail from './Pages/ExerciseDetail'
import Footer from './components/Footer'
const App = () => {
    return (
        <Box width = "400px" m = "auto" sx={{ width : {xl : "1488px"}}}> 
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
            </Routes>
            <Footer/>
        </Box>
    )
}

export default App;