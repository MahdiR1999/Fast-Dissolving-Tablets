import { useEffect, useState } from "react";
import { ListBox } from 'primereact/listbox';
import { Image } from "primereact/image";

function Data({mobile}){
    const [Features] = useState(
        "Cross Carmellose Sodium	Cross Povidone	Sodium Starch Glycolate	Low-Substituted Hydroxypropyl Cellulose	Pregelatinized Starch	MCC	Mannitol	Lactose	Di Calcium Phosphate	Sucrose	Sugartab	Eudragit EPO 	Precirol A TO 5 	Kyron T-114	Aspartame 	Sodium Saccharin	Sucralose	Sodium Stearyl Fumarate	Magnesium Stearate 	Talc	Aerosil 	Polyvinylpyrrolidone (PVP) K- 30 	Sodium Lauryl Sulphate	Flavour / Mint"
    .split("	"));
    const [Labels] = useState(
        ["D Time"]
    );
    const [Groups,setGroups] = useState();
    useEffect(()=>{
        const Feats = {
            label: 'Features', code: 'FF',
            items:Features.map((item)=>{
                return { label: item, value: item };
            })
        }
        const Labs = {
            label: 'Labels', code: 'LL',
            items:Labels.map((item)=>{
                return { label: item, value: item };
            })
        }
        
        setGroups([Feats,Labs]);
    },[Labels,Features]);
    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center country-item">
                <div>{option.label}</div>
            </div>
        );
    }
    return (
        <div className="mx-auto justify-content-center grid grid-nogutter">
            <h4 className="text mt-0 mb-0 p-0">Data</h4>
            {(mobile!==true)?<div className="mx-auto col-12 md:col-12 lg:col-12 xl:col-12 sm:col-12">
                <Image width="100%" src={require("./Images/Data.jpg")}></Image>
            </div>:null}
            <div className="mt-5 mx-auto col-12 md:col-12 lg:col-12 xl:col-12 sm:col-12">
                <ListBox className="mx-auto text-left" optionGroupTemplate={groupedItemTemplate} options={Groups}  optionLabel="label" optionGroupLabel="label" optionGroupChildren="items"
                    style={{ width: '100%' }} listStyle={{ maxHeight: '250px' }}/>
            </div>
        </div>
    )

}
export default Data;