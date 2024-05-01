import { Button, Form, Input } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom';

type OnSubmit = {
    Id: number; Title: string; Body: string;
}

const UserDetailPage: FC<{ 
    onSubmit?: (values: OnSubmit) => void;
    initialValues?: object; 
}> = ({ onSubmit, initialValues }) => {
    const navigate =useNavigate();

    const onFinish = (values: OnSubmit) => {
        if (onSubmit) onSubmit(values);
        navigate("/");
    };

    return (
        <Form onFinish={onFinish} initialValues={initialValues}>
            <Form.Item label="Id" name="id">
                <Input />
            </Form.Item>
            <Form.Item label="Title" name="title">
                <Input />
            </Form.Item>
            <Form.Item label="Body" name="body">
                <Input />
            </Form.Item>

            <Button htmlType="submit">Submit</Button>
        </Form>
    );
}

export default UserDetailPage