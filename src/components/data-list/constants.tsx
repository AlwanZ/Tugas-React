import { TableProps } from "antd";
import EditUser from "./edit-user";
import DeleteUser from "../delete-user";

export interface UserDataType {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const columns: TableProps<UserDataType>["columns"] = [
    {title: '',dataIndex: 'userId',key: 'userId'},
    {title: 'Id',dataIndex: 'id',key: 'id'},
    {title: 'Title',dataIndex: 'title',key: 'title'},
    {title: 'Body',dataIndex: 'body',key: 'body'},
    {title: 'Action',key: 'Action',
    render: (value: UserDataType) => {
        return(<div>
            <EditUser {...value}/>
            <DeleteUser id={value.id}/>
        </div>);
        },
}
];