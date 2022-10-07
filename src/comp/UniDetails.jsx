import React, {useState} from 'react';
import {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import { Spin } from 'antd';
import UniCard from './UniCard';

const UniDetails = () => {
    const [university, setUniversity] = useState();
    const params = useParams("name");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?name=${params.name}`)
            .then(res => res.json())
            .then(data => {
                setUniversity({
                    university: data[0],
                    webpage: data[0].web_pages[0],
                    domains: data[0].domains[0]
                });
                setLoaded(true);
            });
    }, [params.name]);


    return (
        <div>
            {
                (loaded && university) ?
                    <UniCard university={university.university} webpage={university.webpage} domains={university.domains}/>
                    : <Spin size="large" />
            }
        </div>
    );
};

export default UniDetails;