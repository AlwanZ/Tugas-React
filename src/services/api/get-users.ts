import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useEffect } from "react";
import { useUserStore } from "../stores/user";

export interface User{
    userId: number;
    id: number ;
    title: string;
    body: string;
}

const fetcher = async () => {
    return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.data);
};

export const useGetUsers = () => {
    const {setUsers, users} = useUserStore ()
    const result = useQuery<User[]>({queryKey: ["user-list"], queryFn: fetcher});

useEffect(() => {
if (result.data) setUsers(result.data)
}, [result.data]);


    return {...result, userList: users};
}
