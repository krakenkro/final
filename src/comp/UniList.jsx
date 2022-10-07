import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Link } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import { fetchUnis } from '../store/actions/unis';

const UniList = () => {
    const {unis, loading, error} = useSelector(state => state.unis);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUnis())
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>ERROR</div>
    }

    const columns = [
        {
            key: '1',
            title: 'Alpha Two Code',
            dataIndex: 'alpha_two_code',
        },
        {
            key: '2',
            title: 'Country',
            dataIndex: 'country',
        },
        {
            key: '3',
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (_, record) => <Link to={`/unis/${record.name}`}>Подробнее</Link>
        },
    ]
    return (
        <>
            <Table loading={loading} columns={columns} dataSource={unis} />
        </>
    );
};


export default UniList;