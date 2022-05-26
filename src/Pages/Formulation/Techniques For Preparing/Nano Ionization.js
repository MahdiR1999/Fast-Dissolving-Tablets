import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
 
function NanoIonization({mobile}){
    return (
        <Card  title={`${(mobile === true)?"":"Nano Ionization"}`} subTitle={`${(mobile === true)?"Nano Ionization":""}`} className='text-center'>
            <p>Reduction in the particle size of the drug to nano size by milling the drug using a proprietary wet-milling technique. The nanocrystals of the drug are stabilized against agglomeration by surface adsorption on selected stabilizers, which are then incorporated into MDTs.</p>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Advantageous for poorly water soluble drugs'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Fast disintegration/dissolution of nanoparticles'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Increased absorption, wide range of doses (up to 200 mg drug per unit)'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Cost effective manufacturing process'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Conventional packaging due to exceptional durability'></Chip>
            <Chip className='text-white bg-green-600 mx-1 mt-1' label='Wide range of doses (up to 200 mg drug per unit)'></Chip>
        </Card>
    )
}

export default NanoIonization;
