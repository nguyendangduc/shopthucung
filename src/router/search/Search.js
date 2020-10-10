import React, {useEffect} from 'react';
import {Table, Tag, Space} from 'antd';
import FormUser from 'antd-rt/FormUser';
import withReducer from 'store/withReducer';
import {searchExcute} from 'router/search/store/actions';
import reducer from './store/reducers';
import {useDispatch, useSelector} from 'react-redux';

const keyReducerSearch = 'search';
const Search = props => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(searchExcute('long.huu.100@gmail.com', 1));
    }, []);

    const allstate = useSelector(state => state);
    console.log("store in search", allstate);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return <>
        <Table columns={columns} dataSource={data}/>
        <FormUser/>
    </>
}

export default withReducer(keyReducerSearch, reducer)(Search);
