import {Card} from "primereact/card";
import {useState} from "react";

function References() {
    const [Concs] = useState(` Hannan PA, Khan JA, Khan A, Safiullah S. Oral dispersible system: a new approach in drug delivery syste. Indian J Pharm Sci 2016;78:2-7.
    Bhowmik D, Chiranjib B, Krishnakanth, Pankaj, Chandira RM. Fast dissolving tablet: an overview. J Chem Pharm Res 2009;1:163-77.
    Siddiqui N, Garg G, Sharma PK. Fast dissolving tablets: preparation, characterization and evaluation: an overview. Int J Pharm Sci Rev Res 2010;2:87-96.
    Gupta DK, Bajpai M, Chatterjee DP. Fast mouth is dissolving disintegrating tablet and patient counselling points for FDDTSa review. Int J Res Dev Pharm L Sci 2014;3:949-58.
    Nautiyal U, Singh S, Singh R, Gopal, Kakar S. Fast dissolving tablets as a novel boon: a review. J Pharm Chem Biol Sci 2014;2:5-26.
    Kaur T, Gill B, Kumar S, Gupta GD. Mouth dissolving tablets: a novel approach to drug delivery. Int J Curr Pharm Res 2011;1:1-7.
    Patel TS, Sengupta M. Fast dissolving tablet technology. World J Pharm Sci 2013;2:485-508.
    Ashish P, Harsoliya MS, Pathan JK, Shruti S. A review: formulation of mouth dissolving tablet. Int J Pharm Res 2011;1:1-8.
    Ashish Masih, Amar Kumar, Shivam Singh, Ajay Kumar Tiwari. Fast dissolving tablets: a review. Int J Curr Pharm Res 2017;9(2):8 18.
    IRC FDA - Drug Information - ODT
    Predicting oral disintegrating tablet formulations by neural network techniques - DOI : 10.1016/j.ajps.2018.01.003`.split("\n"));

    return (
        <div style={{'maxHeight':400,'overflow':'scroll'}}>
            <Card className={'text-left'} title={"References"}>
                {Concs.map((value,k)=>{
                    return <p key={k} className={"font-bold"}><i className='pi pi-check'></i>{value}</p>
                })}
            </Card>
        </div>
    )

}

export default References;
