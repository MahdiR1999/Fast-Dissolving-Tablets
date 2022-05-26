import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { OrganizationChart } from 'primereact/organizationchart';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

const Excipients = ()=>{
    const [width,setWidth] = useState(true);
    const Navigate = useNavigate();
    const [Exs,setExs] = useState([{
        label: 'Excipients',
        expanded: true,
        selectable:true,
        children: [
            {
                label: 'Superdisintegrants',
                expanded: true,
                children: [
                    {
                        label: '1-15 %'
                    },
                ]
            },
            {label: 'Binders',expanded: true,
                children: [
                    {
                        label: '5-10 %'
                    },
                ]},
            {label: 'Antistatic Agents',expanded: true,
                children: [
                    {
                        label: '0-10 %'
                    },
                ]},
            {label: 'Diluents',expanded: true,
                children: [
                    {
                        label: '0-85 %'
                    },
                ]},
        ]
    }]);
    useEffect(()=>{
        updateWidth();
        window.addEventListener("resize",updateWidth);
        return _ => {
            window.removeEventListener('resize', updateWidth)};
    },[]);
    const updateWidth = ()=>{
        setWidth(window.innerWidth);
    };
    return (
        <>
            {
                (width>=693)
                    ?<OrganizationChart  value={Exs}></OrganizationChart>
                    :<>
                        <Card title={"Excipients"}>
                            <Button onClick={()=>{Navigate("/Superdisintegrants")}} className='p-button-text' label='Superdisintegrants | 1-15 %'></Button>
                            <p className='text-lg font-bold'>Binders | 5-10 %</p>
                            <p className='text-lg font-bold'>Antistatic Agents | 0-10 %</p>
                            <p className='text-lg font-bold'>Diluents | 0-85 %</p>
                        </Card>
                    </>
            }
        </>
    )
};
export default Excipients;