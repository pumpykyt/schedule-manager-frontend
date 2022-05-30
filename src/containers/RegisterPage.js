import RegisterForm from "../components/RegisterForm";
import { useGetGroupsQuery } from '../apis/groupApi';
import { Fade } from "react-reveal";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { setIsAuthenticated, setIsAdmin } from '../slices/authSlice';
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useRegisterUserMutation } from '../apis/authApi';


function RegisterPage(){
    const { data, isLoading, error } = useGetGroupsQuery({ pageSize: 100, pageNumber: 1, search: '', sort: 'name_asc' });
    const [register] = useRegisterUserMutation();
    const dispatch = useDispatch();
    const validator = Yup.object().shape({
        email: Yup.string().required('Required').email('Invalid email'),
        password: Yup.string().required('Required'),
        repeatPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
        fullName: Yup.string().required('Required'),
        group: Yup.string().required('Required')
    });

    const registerHandler = model => {
        register({
            email: model.email,
            password: model.password,
            fullName: model.fullName,
            age: model.age,
            groupId: model.group
        }).then(result => {
            dispatch(setIsAuthenticated(true));
            dispatch(setIsAdmin(jwtDecode(result.data.token).role === 'admin'));
            localStorage.setItem('token', result.data.token);
            toast.success('Successfully signed up and signed in');
        }).catch(error => {
            toast.error('Server error');
        });
    }

    return(
        <div className="register-page bg-bg-image bg-cover bg-no-repeat">
            <div className="container mx-auto">
                <Formik initialValues={{
                    email: '',
                    password: '',
                    repeatPassword: '',
                    fullName: ''
                }} validateOnBlur enableReinitialize validationSchema={validator} onSubmit={values => registerHandler(values)}
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
                        <div className="grid grid-cols-2 gap-48 min-h-screen py-36 items-center">
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
                            <RegisterForm values={values}
                                          touched={touched}
                                          handleBlur={handleBlur} 
                                          handleChange={handleChange} 
                                          handleSubmit={handleSubmit} 
                                          errors={errors} 
                                          isValid={isValid} 
                                          dirty={dirty}
                                          groupsData = {{data, isLoading, error}}
                            />
                        </div>
                        
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default RegisterPage;