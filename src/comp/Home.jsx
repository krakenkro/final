import React, {useState, useMemo } from 'react';
import {useNavigate} from "react-router-dom";
import { Input, Button, Alert  } from 'antd';

const Home = () => {
    const [value, setValue] = useState("");
    const [showErrors, setShowErrors] = useState(false);

    const rules = [
        'Введите что нибудь',
    ]
    
    const Errors = ({ active }) => {
        return active && (
            <>
                {rules.map((value, index) => (
                    <Alert style={{ width: 350, margin: '10px auto'}} message={value} type="error"/>
                ))}
            </>
        )
    };
    const memoizedErrors = useMemo(() => <Errors active={showErrors} />, [showErrors]);

    const onClick = (event) => {
        event.preventDefault();
        setShowErrors(!value.length);
        if(value.length) {
            navigate("/seek/" + value);
        }
        
    }
    const navigate = useNavigate();

    return (
        <>
            {memoizedErrors}
            <form style={{ width: 350, margin: '0 auto', display: 'flex'}}>
                <Input placeholder="Введите название университета" value={value} onChange={(e) => setValue(e.target.value)}/>
                <Button type="primary" onClick={onClick}>Искать</Button>
            </form>
        </>
    );
};


export default Home;