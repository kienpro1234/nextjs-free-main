"use client";
import accountApiRequest from "@/apiRequests/account.api";
import { clientSessionToken } from "@/lib/http";
import React, { useEffect } from "react";

export default function Profile() {
  console.log("session token", clientSessionToken.value);
  useEffect(() => {
    console.log("session token", clientSessionToken.value);
    const fetchRequest = async () => {
      const result = await accountApiRequest.me(clientSessionToken.value);
      console.log("result", result);
    };
    fetchRequest();
  }, []);
  return <div>Profile</div>;
}
