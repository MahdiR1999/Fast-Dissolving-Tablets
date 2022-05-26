import { Chip } from 'primereact/chip';
import {Card} from "primereact/card";

function CottonCandyProcess({mobile}){
    return (
        <Card title={`${(mobile === true)?"":"Cotton Candy Process"}`} subTitle={`${(mobile === true)?"Cotton Candy Process":""}`} className='text-center'>
            <p>Formation of Matrix of polysaccharides or saccharides by the simultaneous action of flash melting and spinning</p>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Improved flow properties and compressibility (The matrix formed is partially recrystallized)'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Highly porous in nature'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Very pleasant mouth feel due to fast solubilization of sugars in the presence of saliva'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1 pre' label='Poly maltodextrins and polydextrose can be transformed into fibers at 30-40% lower temperature than sucrose. This modification permits the safe incorporation of thermolabile drugs into the formulation'></Chip>
        </Card>
    )
}

export default CottonCandyProcess;
