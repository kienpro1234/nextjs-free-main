import {ModeToggle} from "@/components/ui/ModeToggle";
import Link from "next/link";
import React from "react";
import ButtonLogout from "@/components/ui/ButtonLogout";

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link href={"/login"}>Đăng nhập</Link>
                </li>
                <li>
                    <Link href={"register"}>Đăng kí</Link>
                </li>
                <li>
                    <ButtonLogout/>
                </li>
            </ul>
            <ModeToggle/>
        </div>
    );
}
