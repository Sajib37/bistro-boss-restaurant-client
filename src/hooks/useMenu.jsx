import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = (category) => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(true);

    const { refetch, data: menu=[]} = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const result = await axiosPublic.get(`/get/${category}`)
            setLoading(false)
            return result.data;
        }
    })

    return [menu,loading, refetch]
};

export default useMenu;