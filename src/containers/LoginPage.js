import { Formik } from "formik";
import jwtDecode from "jwt-decode";
import { setIsAuthenticated, setIsAdmin } from '../slices/authSlice';
import { useDispatch } from "react-redux";
import { Fade } from "react-reveal";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { useLoginUserMutation } from '../apis/authApi';
import LoginForm from "../components/LoginForm";

function LoginPage(){
    const [login] = useLoginUserMutation();
    const dispatch = useDispatch();

    const validator = Yup.object().shape({
        email: Yup.string().required('Required').email('Invalid email'),
        password: Yup.string().required('Required')
    });

    const loginHandler = model => {
        login(model).then(result => {
            dispatch(setIsAuthenticated(true));
            dispatch(setIsAdmin(jwtDecode(result.data.token).role === 'admin'));
            localStorage.setItem('token', result.data.token);
            toast.success('Successfully signed in');
        }).catch(error => {
            toast.error('Wrong email or password');
        });
    }

    return(
        <div className="login-page bg-cover bg-no-repeat bg-bg-image">
            <div className="container mx-auto">
                <Formik initialValues={{
                    email: '',
                    password: ''
                }} validateOnBlur validationSchema={validator} onSubmit={values => loginHandler(values)}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        isValid,
                        handleSubmit,
                        dirty
                    }) => (
                        <div className="grid grid-cols-2 gap-20 min-h-screen py-36 items-center">
                            <div className="col-span-1">
                                <Fade delay={500} left>
                                    <p className="mb-5 text-white text-7xl font-bold">Comfortable</p>
                                    <p className="mb-5 text-white text-6xl font-bold">Reliable</p>
                                    <p className="mb-5 text-white text-5xl font-bold">Simple</p>
                                    <p className="text-white text-2xl font-light">
                                        Keep connected with your educational processes 
                                        and people through instant schedule manager system.
                                    </p>
                                </Fade>
                            </div>      
                            <LoginForm values={values}
                                       touched={touched}
                                       handleBlur={handleBlur} 
                                       handleChange={handleChange} 
                                       handleSubmit={handleSubmit} 
                                       errors={errors} 
                                       isValid={isValid} 
                                       dirty={dirty}
                            />
                        </div>
                        
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default LoginPage;