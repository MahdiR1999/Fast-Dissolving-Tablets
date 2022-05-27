//React
import React,{useState,useEffect} from 'react';

//React Router
import { Routes, Route,useNavigate,useLocation,Navigate} from "react-router-dom";

//Prime React
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

//Components
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import Presenters from './Components/Presenters';
import Menu from './Components/Menu';

//Pages
import Home from './Pages/Home/Home';
import Introduction from './Pages/Introduction/Introduction';
import Excipients from './Pages/Formulation/Exipients/Excipients';
import PatientFactors from './Pages/Patient Factors/Patient Factors';
import Advantages from './Pages/Advantages/Advantages';
import SalientFeatures from './Pages/Salient Features/Salient Features';
import Challenges from './Pages/Challenges/Challenges';
import CriteriaForExcipients from "./Pages/Formulation/Criteria For Excipients";
import Superdisintegrants from "./Pages/Formulation/Exipients/Superdisintegrants/Superdisintegrants";
import Data from './Pages/AI/Data';
import Model from './Pages/AI/Model';
import Corr from './Pages/AI/Corr';
import CottonCandyProcess from './Pages/Formulation/Techniques For Preparing/Cotton Candy Process';
import DirectCompression from "./Pages/Formulation/Techniques For Preparing/Direct Compression";
import FreezeDryingOrLyophilization from "./Pages/Formulation/Techniques For Preparing/Freeze Drying Or Lyophilization";
import MeltGranulation from "./Pages/Formulation/Techniques For Preparing/Melt Granulation";
import Molding from "./Pages/Formulation/Techniques For Preparing/Molding";
import NanoIonization from "./Pages/Formulation/Techniques For Preparing/Nano Ionization";
import SprayDrying from "./Pages/Formulation/Techniques For Preparing/Spray Drying";
import Sublimation from "./Pages/Formulation/Techniques For Preparing/Sublimation";
import Patents from "./Pages/Market/Patents";
import Brands from "./Pages/Market/Brands";
import Conclusion from "./Pages/AI/Conclusion";
import References from "./Pages/AI/References";



console.log = console.warn = console.error = () => {};

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [desktop,setDesktop] = useState(true);

  useEffect(()=>{
    updateWidth();
    window.addEventListener("resize",updateWidth);
    return _ => {
      window.removeEventListener('resize', updateWidth)};
  },[]);
  const updateWidth = ()=>{
    if(window.innerWidth>=768){
      setDesktop(true);
    }else{
      setDesktop(false);
    }
  };
  return (
    <div className='align-self-center'>
      <p className='text-center mt-3 text-xl text-cyan-900 font-bold'>Fast Dissolving Tablets</p>
      <Divider />
      {
          (desktop===true)
          ?<>
          <div className=" grid grid-nogutter max-w-full flex flex-grow-1">
            <div className="text-start col-12 m-0 md:col-3 lg:col-2 xl:col-2 sm:col-12 max-w-full flex flex-grow-1 grid">
              <b className='text-start'><i className="font-bold pi pi-book mx-2 text-primary"></i>Headlines</b>
              <Menu/>
              <Presenters/>
            </div>
            <Divider layout='vertical' className='max-h-full'/>
            <div className="col-12 md:col-8 lg:col-9 xl:col-9 sm:col-12 max-w-full flex flex-grow-1">
              <div className="flex-grow-1 mx-auto text-center">
                {
                  (location.pathname!=='/')
                  ?<Button onClick={()=>{
                    navigate('/');
                  }} icon="pi pi-arrow-left" className="p-button-rounded p-button-text text-center text-black" aria-label="Back" />
                  :null
                }
                <Routes>
                  <Route index element={<Home/>}></Route>
                  <Route path='Introduction' element={<Introduction/>}></Route>
                  <Route path='Excipients' element={<Excipients/>}></Route>
                  <Route path='PatientFactors' element={<PatientFactors/>}></Route>
                  <Route path='Advantages' element={<Advantages/>}></Route>
                  <Route path='SalientFeatures' element={<SalientFeatures/>}></Route>
                  <Route path='Challenges' element={<Challenges/>}></Route>
                  <Route path='CriteriaForExcipients' element={<CriteriaForExcipients/>}></Route>
                  <Route path='Superdisintegrants' element={<Superdisintegrants/>}></Route>
                  <Route path='DataDemo' element={<Data/>}></Route>
                  <Route path='Model' element={<Model/>}></Route>
                  <Route path='Correlation' element={<Corr/>}></Route>
                  <Route path='CCP' element={<CottonCandyProcess/>}></Route>
                  <Route path='DC' element={<DirectCompression/>}></Route>
                  <Route path='FDOL' element={<FreezeDryingOrLyophilization/>}></Route>
                  <Route path='MG' element={<MeltGranulation/>}></Route>
                  <Route path='Molding' element={<Molding/>}></Route>
                  <Route path='NanoI' element={<NanoIonization/>}></Route>
                  <Route path='SprayDrying' element={<SprayDrying/>}></Route>
                  <Route path='Sublimation' element={<Sublimation/>}></Route>
                  <Route path='Patents' element={<Patents/>}></Route>
                  <Route path='Brands' element={<Brands/>}></Route>
                  <Route path='Conc' element={<Conclusion/>}></Route>
                  <Route path='Refs' element={<References/>}></Route>
                  <Route path='*' element={<Navigate to="/" replace />}></Route>
                </Routes>
              </div>
            </div>
          </div>
          </>
          :
            <>
              <Menu mobile={true} index={location.pathname==='/'}/>
              {
                (location.pathname!=='/')
                ?
                <div className='mx-auto text-center'><Button onClick={()=>{
                  navigate('/');
                }} icon="pi pi-arrow-left" className="mx-auto p-button-rounded p-button-text text-center text-black" aria-label="Back" />
                  <Routes>
                    <Route path='Introduction' element={<Introduction mobile={true}/>}></Route>
                    <Route path='Excipients' element={<Excipients/>}></Route>
                    <Route path='PatientFactors' element={<PatientFactors/>}></Route>
                    <Route path='Advantages' element={<Advantages/>}></Route>
                    <Route path='SalientFeatures' element={<SalientFeatures/>}></Route>
                    <Route path='Challenges' element={<Challenges/>}></Route>
                    <Route path='CriteriaForExcipients' element={<CriteriaForExcipients/>}></Route>
                    <Route path='Superdisintegrants' element={<Superdisintegrants/>}></Route>
                    <Route path='DataDemo' element={<Data mobile={true}/>}></Route>
                    <Route path='Model' element={<Model mobile={true}/>}></Route>
                    <Route path='Correlation' element={<Corr/>}></Route>
                    <Route path='CCP' element={<CottonCandyProcess mobile={true}/>}></Route>
                    <Route path='DC' element={<DirectCompression mobile={true}/>}></Route>
                    <Route path='FDOL' element={<FreezeDryingOrLyophilization mobile={true}/>}></Route>
                    <Route path='MG' element={<MeltGranulation mobile={true}/>}></Route>
                    <Route path='Molding' element={<Molding mobile={true}/>}></Route>
                    <Route path='NanoI' element={<NanoIonization mobile={true}/>}></Route>
                    <Route path='SprayDrying' element={<SprayDrying mobile={true}/>}></Route>
                    <Route path='Sublimation' element={<Sublimation mobile={true}/>}></Route>
                    <Route path='Patents' element={<Patents/>}></Route>
                    <Route path='Brands' element={<Brands/>}></Route>
                    <Route path='Conc' element={<Conclusion/>}></Route>
                    <Route path='Refs' element={<References/>}></Route>
                    <Route path='*' element={<Navigate to="/" replace />}></Route>
                  </Routes>
                </div>
                :null
              }
              
              <Presenters mobile={true}/>
            </>
        }
    </div>
    
  );
};
export default App;
