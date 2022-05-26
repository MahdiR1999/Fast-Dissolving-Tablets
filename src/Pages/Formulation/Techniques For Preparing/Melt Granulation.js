import { Chip } from 'primereact/chip';
import {Card} from "primereact/card";

function MeltGranulation({mobile}){
    return (
        <Card title={`${(mobile === true)?"":"Melt Granulation"}`} subTitle={`${(mobile === true)?"Melt Granulation":""}`} className='text-center'>
            <p>the pharmaceutical powders are capably agglomerated by a meltable binder</p>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='No water or organic solvents is required'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Less time consuming and requires less energy (Since there is no drying step)'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Useful to enhance the dissolution rate of poorly water-soluble drugs, such as Griseofulvin'></Chip>
        </Card>
    )
}

export default MeltGranulation;
