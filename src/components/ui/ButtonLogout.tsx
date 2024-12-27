"use client"

import React from 'react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import authApiRequest from "@/apiRequests/auth.api";
import {handlErrorApi} from "@/lib/utils";


function ButtonLogout() {
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await authApiRequest.logoutFromnextClientToNextServer()
            router.push("/login")
        } catch (error) {
            handlErrorApi({error});
        }

    }

    return (
        <Button size={"sm"} onClick={handleLogout}>
            Đăng Xuất
        </Button>
    );
}


export default ButtonLogout;