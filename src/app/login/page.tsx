"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login successful ", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed ", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">{loading ? "loading" : "login"}</h1>
      <hr className="my-4 w-1/3" />
      <label htmlFor="email">Email</label>
      <input
        className="border border-gray-300 rounded p-1 text-black"
        id="email"
        type="email"
        value={user.email}
        placeholder="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="border border-gray-300 rounded p-1 text-black"
        id="password"
        type="text"
        value={user.password}
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        className="bg-blue-500 text-white p-2 m-4 rounded text-black"
        onClick={onLogin}
      >
        Login
      </button>
      <Link href="/signup">Visit Signup Page</Link>
    </div>
  );
}
