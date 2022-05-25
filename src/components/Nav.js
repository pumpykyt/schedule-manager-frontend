import { CgProfile } from 'react-icons/cg';
import { MdLeaderboard } from 'react-icons/md';
import { MdGrid4X4 } from 'react-icons/md';
import { MdLogout } from 'react-icons/md';
import { MdLogin } from 'react-icons/md';
import {useState} from "react";
import {Modal} from "antd";
import { useLoginUserMutation } from "../apis/authApi";

const Nav = props => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [loginModel, setLoginModel] = useState(null);
    const [login, { isLoading, isSuccess }] = useLoginUserMutation();


    const handleLogin = () => {
        login(loginModel)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }


    return(
        <div className="nav w-full fixed">
            <Modal footer={null} bodyStyle={{background: '#131313'}} visible={showLoginModal} onCancel={() => setShowLoginModal(false)}>
                <div className="px-12 py-6 rounded">
                    <h1 className="text-2xl font-semibold text-white mb-5">Sign-in</h1>
                    <input placeholder="Email"
                           onChange={e => setLoginModel({...loginModel, email: e.target.value})}
                           type="text"
                           className="bg-gray-300 mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <input placeholder="Password"
                           onChange={e => setLoginModel({...loginModel, password: e.target.value})}
                           type="password"
                           className="bg-gray-300 mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button onClick={handleLogin} className="px-5 py-2 drop-shadow-2xl rounded-lg bg-indigo-900 text-white">Submit</button>
                </div>
            </Modal>
            <div className="grid grid-cols-10 py-3 container mx-auto items-center">
                <div className="col-span-2 text-white text-2xl font-semibold cursor-pointer">Schedule manager</div>
                <div className="col-span-4"></div>
                <div className="text-white text-2xl mx-auto text-center cursor-pointer">
                    <CgProfile/>
                    <span/>
                </div>
                <div className="text-white text-2xl mx-auto text-center cursor-pointer">
                    <MdGrid4X4/>
                </div>
                <div className="text-white text-2xl mx-auto text-center cursor-pointer">
                    <MdLeaderboard/>
                </div>
                <div className="text-white text-2xl mx-auto text-center cursor-pointer">
                    <MdLogout/>
                    <MdLogin onClick={() => setShowLoginModal(true)}/>
                </div>
            </div>
        </div>
    );
};

export default Nav;