import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../../../n2-features/f1-auth/a1-login/Login";
import Registration from "../../../n2-features/f1-auth/a2-register/Registration";
import RestorePassword from "../../../n2-features/f1-auth/a3-restore/RestorePassword";
import NewPassword from "../../../n2-features/f1-auth/a4-newpassword/NewPassword";
import Test from "../../../n2-features/f0-test/Test";
import Profile from "../pages/p1-profile/Profile";
import Error404 from "../pages/p2-Error404/Error404";


export const PATH = {
    LOGIN: '/login',
    REGISTER: '/registration',
    PROFILE: '/profile',
    RESET_PASSWORD: '/restore',
    NEW_PASSWORD: '/newpassword',
    TEST: '/test'
}

const ProjectRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.LOGIN}  element={ <Login/> }/>
                <Route path={PATH.REGISTER} element={ <Registration/> }/>
                <Route path={PATH.PROFILE}  element={ <Profile/> }/>
                <Route path={PATH.RESET_PASSWORD}  element={ <RestorePassword/> }/>
                <Route path={PATH.NEW_PASSWORD}  element={ <NewPassword/> }/>
                <Route path={PATH.TEST}  element={ <Test/> }/>

                {/*404 PAGE*/}
                <Route path="404"  element={ <Error404/> }/>

            </Routes>
        </div>
    );
};

export default ProjectRoutes;