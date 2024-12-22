"use client";
import LoginForm from "@/app/(auth)/login/login-form";
import React from "react";

export default function LoginPage() {
  console.log("login page");
  return (
    <div>
      <h1 className="text-center text-3xl">Đăng Nhập</h1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
