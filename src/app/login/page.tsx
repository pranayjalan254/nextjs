"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Login</h1>
      <hr className="my-4 w-1/3" />
      <label htmlFor="email">Email</label>
      <input
        className="border border-gray-300 rounded p-1"
        id="email"
        type="email"
        value={user.email}
        placeholder="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="border border-gray-300 rounded p-1"
        id="password"
        type="text"
        value={user.password}
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        className="bg-blue-500 text-white p-2 m-4 rounded"
        onClick={onLogin}
      >
        Login
      </button>
      <Link href="/signup">Visit Signup Page</Link>
    </div>
  );
}
