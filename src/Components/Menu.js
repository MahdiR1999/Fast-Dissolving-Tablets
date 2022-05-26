import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {SlideMenu} from 'primereact/slidemenu';
function Menu({mobile,index}){
    const [items] = useState([
        {label: 'Introduction', icon: 'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/Introduction'},
        {label: 'Patient Factors', icon: 'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/PatientFactors'},
        {label: 'Advantages', icon: 'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/Advantages'},
        {label: 'Salient Features', icon: 'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/SalientFeatures'},
        {label: 'Challenges', icon: 'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/Challenges'},
        {label: 'Formulation', icon: 'pi pi-fw pi-sitemap',items:[
          {label:'Criteria For Excipients',icon:'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/CriteriaForExcipients'},
          {label:'Excipients',icon:'pi pi-fw pi-sitemap',items:[
            {label:'Superdisintegrants',icon:'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/Superdisintegrants'}
          ],command:(e)=>{changeRoute(e)},route:'/Excipients'},
          {label:'Techniques For Preparing',icon:'pi pi-fw pi-sitemap',items: [
                  {label:'Freeze Drying Or Lyophilization',icon:'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/FDOL'},
                  {label:'Melt Granulation',icon:'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/MG'},
                  {label:'Molding',icon:'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/Molding'},
                  {label:'Sublimation',icon:'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/Sublimation'},
                  {label:'Cotton Candy Process',icon:'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/CCP'},
                  {label:'Direct Compression',icon:'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/DC'},
                  {label:'Spray Drying',icon:'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/SprayDrying'},
                  {label:'Nano Ionization',icon:'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/NanoI'},
                  {},
                  {}
              ]},
        ]},
        {label: 'Market', icon: 'pi pi-fw pi-sitemap',items:[
          {label: 'Patents', icon: 'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/Patents'},
          {label: 'Brands', icon: 'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/Brands'},
        ]},
        {label: 'AI', icon: 'pi pi-fw pi-box',items:[
          {label: 'Data', icon: 'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/DataDemo'},
          {label: 'Model', icon: 'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/Model'},
          {label: 'Correlation', icon: 'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/Correlation'},
          {label: 'Conclusion', icon: 'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/Conc'},
          {label: 'References', icon: 'pi pi-fw pi-box',command:(e)=>{changeRoute(e)},route:'/Refs'},
        ]},
    ]);
    const navigate = useNavigate();
    const changeRoute = (e)=>{
        const eRoute = e.item.route;
        navigate(eRoute,{replace:true});
      }
    return (
        <SlideMenu backLabel='' viewportHeight={360} menuWidth={190} autoZIndex={false} model={items} className={`${(index === false)?"hidden":""} max-w-full max-h-full border-0 ${(mobile)?'mx-auto':''}`}/>
    )
}
export default Menu;
