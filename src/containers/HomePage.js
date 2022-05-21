import Spline from "@splinetool/react-spline";
import Fade from 'react-reveal/Fade';
import {observer} from "mobx-react-lite";

const HomePage = observer(() => {
    return(
        <div className="home-page min-h-screen bg-gray-900">
            <div className="grid grid-cols-2 h-screen items-center container mx-auto">
                <div className="grid grid-cols-1">
                    <Fade left delay={1400}>
                        <h1 className="text-white text-left text-3xl mb-10">Welcome to schedule manager</h1>
                    </Fade>
                    <Fade left delay={1500}>
                        <p className="text-white text-left w-3/4 text-5xl mb-10">
                            Journey into comfortable timetables
                        </p>
                    </Fade>
                    <Fade left delay={1600}>
                        <div className="w-full">
                            <button className="float-left text-white text-lg border-2 px-5 py-3 rounded-lg">Get started</button>
                        </div>
                    </Fade>
                </div>
                <Fade delay={1300}>
                    <Spline scene="https://prod.spline.design/sfnraVlBAMhqGxdl/scene.splinecode"/>
                </Fade>
            </div>
        </div>
    );
});

export default HomePage;