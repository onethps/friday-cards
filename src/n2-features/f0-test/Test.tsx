import React from 'react';
import SuperButton from "../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import SuperInputText from "../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox";
import s from './Test.module.scss'

const Test = () => {
    return (
        <div className={s.rootBlock}>
            <SuperButton className={s.SuperButton}>Normal Button</SuperButton>
            <SuperButton red className={s.SuperButton}>Red Button</SuperButton>
            <SuperButton disabled className={s.SuperButton}>Disabled Button</SuperButton>
            <SuperInputText className={s.superInputText}  placeholder={'Type Text....'} />
            <SuperInputText  error={'Incorrect value. '}  placeholder={'Type Text....'} />
            <SuperCheckbox className={s.SuperCheckBox}/>
        </div>
    );
};

export default Test;