const Nav = props => {
    return(
        <div className="nav w-full fixed">
            <div className="flex flex-row flex-wrap-nowrap justify-between container mx-auto gap-x-20 items-center py-3">
                <p className="text-white text-2xl">Schedule manager</p>
                <div className="flex-1"></div>
                <p className="text-white font-light text-xl cursor-pointer">home</p>
                <p className="text-white font-light text-xl cursor-pointer">schedules</p>
                <p className="text-white font-light text-xl cursor-pointer">my account</p>
            </div>
        </div>
    );
};

export default Nav;