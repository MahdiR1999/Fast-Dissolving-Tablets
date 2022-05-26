import { Timeline } from 'primereact/timeline';
import {useState} from 'react';




function PatientFactors() {
    const [items] = useState([
            { status: 'Patients who have difficulty in swallowing or chewing solid dosage forms', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Patients incompliance due to fear of choking', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Very elderly patients of depression who may not be able to swallow the solid dosage forms', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Patients who have vomiting issues', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Patients with psychological disorders', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ]
    );
    return (
        <>
            <p className='text-xl text-green-800 font-bold'>
                Patient Factors
            </p>
            <p className='text-lg text-blue-800 font-font-semibold'>
            Patients (Particulary pediatric and geriatric patients) who are not able to swallow traditional tablets and capsules :
            </p>
            <Timeline className='mt mx-auto p-0' value={items} content={(item) => <div className='text-gray-600 text font-semibold'>{item.status}</div>} align={'alternate'}/>
        </>
    )
}
export default PatientFactors;