import { Chip } from 'primereact/chip';
import {Card} from "primereact/card";

function SprayDrying({mobile}){
    return (
        <Card title={`${(mobile === true)?"":"Spray Drying"}`} subTitle={`${(mobile === true)?"Spray Drying":""}`} className='text-center'>
            <p>Producing a dry powder from a liquid or slurry by rapidly drying with a hot gas</p>
            <p><Chip className='text-white bg-green-600 mx-1 mt-1' label='Supporting agent'></Chip><i className='pi pi-check'></i>Hydrolyzed and nonhydrolyzed gelatin</p>
            <p><Chip className='text-white bg-green-600 mx-1 mt-1' label='Bulking agent'></Chip><i className='pi pi-check'></i>Mannitol</p>
            <p><Chip className='text-white bg-green-600 mx-1 mt-1' label='Disintegrating agent'></Chip><i className='pi pi-check'></i>Sodium starch glycolate <i className='pi pi-check'></i>Crosscarmellose sodium</p>
            <p><Chip className='text-white bg-green-600 mx-1 mt-1' label='Enhance disintegration and dissolution'></Chip><i className='pi pi-check'></i>Acidic material (citric acid) <i className='pi pi-check'></i>Alkali material (sodium bicarbonate)</p>
        </Card>
    )
}

export default SprayDrying;
