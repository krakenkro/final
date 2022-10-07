import React, {useState} from 'react';
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import { Card, Col, Row } from 'antd';

const SearchUni = () => {
    const params = useParams("query");
    const [unis, setUnis] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        fetch("http://universities.hipolabs.com/search?name=" + params.query)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUnis(data);
                setLoaded(true);
            })
    }, [params.query]);
    
    return (
        <div>
            {
                !loaded ? <h3>Loading...</h3> :
                    <Row gutter={[16, 24]}>
                        {
                            unis.map((uni) => 
                                <Col className="gutter-row" span={6}>
                                    <Card title={uni.name} style={{ width: 300 }}>
                                        <p>{uni.country}</p>
                                        <a href={uni.web_pages[0]} target="blank">{uni.web_pages[0]}</a>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
            }
        </div>
    );
};

export default SearchUni;