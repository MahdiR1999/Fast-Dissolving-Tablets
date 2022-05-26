import {Card} from 'primereact/card';
import {Image} from 'primereact/image';

function Introduction({mobile}){
    return (
        <div className='grid mx-auto justify-content-center gutter-1'>
            {
                (mobile!==true)
                ?
                <>
                    <div className='col-12 xl:col-6 md:col-12 lg:col-12 sm:col-12 justify-content-center'>
                        <Image width='80%' height='100%' className='mx-auto' src={require('./Images/Introduction.png')}/>
                    </div>
                    <div className='col-6 justify-content-center'>
                        <Card subTitle="First developed the late 1970s as an alternative to conventional dosage forms for the pediatric and geriatric patient" className='surface-200 my-2 mx-auto'></Card>
                        <Card subTitle="United States Food and Drug Administration definition: a solid dosage form containing a medicinal substance or active ingredient which disintegrate rapidly usually within a matter of seconds when placed upon the tongue" className='surface-200 my-2 mx-auto'></Card>
                        <Card subTitle="Known as: orally disintegrating (dispersible) tablets (ODTs) or Fast disintegrating (dissolving) tablets (FDTs) or mouth melting tablets (MMTs) or mouth dissolving tablets(MDTs)" className='surface-200 my-2 mx-auto'></Card>
                    </div>
                </>
                :
                <>
                    <div className='col-12 xl:col-12 md:col-12 lg:col-12 sm:col-12 justify-content-center'>
                        <Image width='80%' height='100%' className='mx-auto' src={require('./Images/Introduction.png')}/>
                    </div>
                    <div className='col-12 justify-content-center'>
                        <Card subTitle="First developed the late 1970s as an alternative to conventional dosage forms for the pediatric and geriatric patient" className='surface-200 my-2 mx-auto'></Card>
                        <Card subTitle="United States Food and Drug Administration definition: a solid dosage form containing a medicinal substance or active ingredient which disintegrate rapidly usually within a matter of seconds when placed upon the tongue" className='surface-200 my-2 mx-auto'></Card>
                        <Card subTitle="Known as: orally disintegrating (dispersible) tablets (ODTs) or Fast disintegrating (dissolving) tablets (FDTs) or mouth melting tablets (MMTs) or mouth dissolving tablets(MDTs)" className='surface-200 my-2 mx-auto'></Card>
                    </div>
                </>
            }
        </div>
    )
};
export default Introduction;