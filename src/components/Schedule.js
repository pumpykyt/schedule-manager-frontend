import { Fade } from 'react-reveal';
import scheduleImg from '../img/schedule-img.png';

function Schedule({id, name}){
    return(
        <Fade duration={500} delay={200}>
            <div className="bg-indigo-400 pt-5 rounded-xl drop-shadow-xl grid grid-cols-1">
                <img className="w-1/3 justify-self-center mb-5" src={scheduleImg} alt="schedule-img"/>
                <div className="m-0 p-2 bg-violet-900 text-white font-semibold text-2xl text-center">
                    {name}
                </div>
            </div>
        </Fade>
    );
}

export default Schedule;