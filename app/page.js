"use client";
import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function page() {
  const router = useRouter();
  const { data } = useSession();
  useEffect(() => {
      if (data) {
        router.push("/pHome");
      } else if (!data) {
        router.push("/login");
      }
  }, [data, router]);
  return <div></div>;
}
