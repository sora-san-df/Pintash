import {Routes, Route, HashRouter} from 'react-router-dom';
import App from '../App';
import { Profile } from './Profile';


const Rutas = ()=>{
    return(
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path="*" element={<p>ZA wurodo</p>}/>
            </Routes>
    );
}

export {Rutas}