import { Table } from 'antd'
import { FC } from 'react'
import { columns } from './constants';
import { useGetUsers } from '../../services/api/get-users';
import { Link } from 'react-router-dom';

const DataList : FC = () => {
    const {userList} = useGetUsers ();

return (
    <>
    <Link to="/add">Add User</Link>
<Table 
columns = {columns} 
dataSource={userList?.map((
    {userId, id, title, body}) => ({
        key: userId, 
        id, 
        title, 
        body }))} />
        </>
)
};

export default DataList