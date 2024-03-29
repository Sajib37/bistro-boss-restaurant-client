import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = (category) => {
    const axiosPublic = useAxiosPublic();

    const {
        refetch,
        loading,
        data: menu,
    } = useQuery({
        queryKey: ["menu", { category }],
        queryFn: async () => {
            const result = await axiosPublic.get(`/get/${category}`);
            return result.data;
        },
    });

    return [menu, loading, refetch];
};

export default useMenu;
