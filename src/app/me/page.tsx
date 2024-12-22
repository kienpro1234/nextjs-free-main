import React from "react";
import { cookies } from "next/headers";
import accountApiRequest from "@/apiRequests/account.api";
import Profile from "@/app/me/Profile";

export default async function MeProfile() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("sessionToken");
  console.log("session token", sessionToken);
  console.log("session token value", sessionToken?.value);

  const res = await accountApiRequest.me(sessionToken?.value || "");
  return (
    <div>
      <div>
        xin chào {res.payload.data.name}
        <Profile />
      </div>
    </div>
  );
}
