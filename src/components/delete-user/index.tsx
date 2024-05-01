import { Button } from 'antd'
import React, { FC } from 'react'
import { useDeleteUser } from '../../services/api/delete-user'
import { useUserStore } from '../../services/stores/user'

const DeleteUser : FC <{id:number}> = ({id}) => {
const {mutate} = useDeleteUser()
const {setUsers,users} = useUserStore()
    return <Button onClick={() => {
mutate(id, { onSuccess: () => {
setUsers(users.filter (user => user.id !== id)); 
}});
    }}>Delete</Button>
}
    

export default DeleteUser;