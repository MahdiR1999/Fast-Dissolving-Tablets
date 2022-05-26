import { Chip } from 'primereact/chip';
import {Card} from "primereact/card";

function DirectCompression({mobile}){
    return (
        <Card  title={`${(mobile === true)?"":"Direct Compression"}`} subTitle={`${(mobile === true)?"Direct Compression":""}`} className='text-center'>
            <p>Most preferred technique to manufacture the tablets</p>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='High doses can be accommodated and final weight of the tablet can exceed that of other methods'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='The easiest way to manufacture the tablets'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Conventional equipment and commonly available excipients are used'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Cost effectiveness'></Chip>
            <Chip className='text-white bg-red-600 mx-1 mt-1' label='A limited no. of processing steps are involved'></Chip>
        </Card>
    )
}

export default DirectCompression;
