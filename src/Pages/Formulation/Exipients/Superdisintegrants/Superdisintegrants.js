import {useEffect, useState} from "react";
import { Tree } from 'primereact/tree';
import {Link} from 'react-router-dom';
function Superdisintegrants(){
    const [items] = useState([
        {name:'Croscarmellose Sodium',mechanism:'Swells 4-8 folds in <10 s. Swelling and wicking action',property:'Effective in concentration (0.5-2%), high swelling'},
        {name:'Crospovidone',mechanism:'Combination of swelling and wicking action. Swells 7-12 folds in <30s',property:'Effective in concentration (0.5-2%), high swelling'},
        {name:'Cross-linked alginic acid',mechanism:'Hydrophilic colloidal substance which has high sorption capacity',property:'Effective in concentration (0.5-2%), high swelling'},
        {name:'Gellan gum',mechanism:'Strong swelling properties upon contact with water.',property:'Effective in concentration (0.5-2%), high swelling'},
        {name:'Sodium starch glycolate',mechanism:'Strong swelling properties upon contact with water. Swells 7-12 folds in < 30s',property:'Effective in concentration (0.5-2%), high swelling'},
        {name:'Soy polysaccharide',mechanism:'Rapid dissolving',property:'Effective in concentration (0.5-2%), high swelling'},
        {name:'Xanthan gum ',mechanism:'Extensive swelling properties for faster disintegration',property:'Effective in concentration (0.5-2%), high swelling'},
    ]);
    const [data,setData] = useState([]);
    useEffect(()=>{
        let new_data = [];
        items.map((value,key)=>{
            new_data.push(
                {
                    "key": `${(new Date().getTime()+key)*(key+1)}`,
                    "label": value.name,
                    "data": value.name,
                    "icon": "pi pi-fw pi-sitemap",
                    "children": [
                        {
                            "key": `${(new Date().getTime()+key)*(key+1)}-${key}`,
                            "label": "Mechanism of action",
                            "data": "Mechanism of action",
                            "icon": "pi pi-fw pi-sitemap",
                            "children":[
                                {
                                    "key": `${(new Date().getTime()+key)*(key+1)}-${key}-${key}`,
                                    "label": value.mechanism,
                                    "data": value.mechanism,
                                    "icon": "pi pi-fw pi-box",
                                }
                            ]
                        },
                        {
                            "key": `${key}-${(new Date().getTime()+key)*(key+1)}`,
                            "label": "Specific properties",
                            "data": "Specific properties",
                            "icon": "pi pi-fw pi-sitemap",
                            "children":[
                                {
                                    "key": `${key}-${key}-${(new Date().getTime()+key)*(key+1)}`,
                                    "label": value.property,
                                    "data": value.property,
                                    "icon": "pi pi-fw pi-box",
                                }
                            ]
                        }
                    ]
                }
            );
        });
        setData(new_data);
    },[]);
    return (
        <div className="p-0">
            <p className="text-green-800 mb-0 mt-0 font-bold"><Link className="text-blue-800 mb-0 font-bold" to={"/Excipients"}>Excipients</Link> / Superdisintegrants</p>
            <Tree className='mt-2' style={{'maxHeight':410,'overflow':'auto'}} value={data} />
        </div>
    )
}
export default Superdisintegrants;