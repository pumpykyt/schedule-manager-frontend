import Fade from 'react-reveal/Fade';
import girlImg from '../img/girl.png';

const HomePage = () => {
    return(
        <div className="home-page min-h-screen bg-bg-image bg-no-repeat bg-cover">
            <div className="container mx-auto grid grid-cols-2 items-center min-h-screen">
                <div className="text-content">
                    <Fade delay={500} duration={1000} left>
                        <p className="text-white text-7xl font-bold mb-5">Smart schedule manager app</p>
                        <p className="text-white text-2xl font-light">It's easy not to be late for lessons.</p>
                    </Fade>
                </div>
                <Fade delay={500} duration={1000}>
                    <img src={girlImg} alt="girl" className="justify-self-center w-3/4"/>
                </Fade>
            </div>
        </div>
    );
};

export default HomePage;