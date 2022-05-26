import { Chip } from 'primereact/chip';
import {Card} from "primereact/card";

function Sublimation({mobile}){
    return (
        <Card title={`${(mobile === true)?"":"Sublimation"}`} subTitle={`${(mobile === true)?"Sublimation":""}`} className='text-center'>
            <p>Rapid disintegration and dissolution is acquired by formulating into porous mass</p>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='The volatile material is evolved by reduced pressure and applying slight temperature leaving the mass'></Chip>
        </Card>
    )
}

export default Sublimation;
