"use client";
import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";

export default function page() {
  const router = useRouter();
  const { data } = useSession();
  useEffect(() => {
      if (data) {
        signOut({ callbackUrl: "/login" })
      } else if (!data) {
        router.push("/login");
      }
  }, [data, router]);
  return <div></div>;
}
