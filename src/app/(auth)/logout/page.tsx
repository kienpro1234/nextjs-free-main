"use client";
import authApiRequest from "@/apiRequests/auth.api";
import { clientSessionToken } from "@/lib/http";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Logout() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const sessionToken = searchParams.get("sessionToken");

  useEffect(() => {
    console.log("logout");
    if (sessionToken === clientSessionToken.value) {
      authApiRequest.logoutFromnextClientToNextServer(true).then(() => {
        console.log("pathname", pathName);
        router.push(`/login?redirectFrom=${pathName}`);
      });
      router.push("/");
    }
  }, [sessionToken, router, pathName]);
  return <div>logout</div>;
}
