"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function RootPage() {
  const { role, isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      router.push(`/dashboard/${role}`);
    }
  }, [role, isLoggedIn, router]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'var(--text-tertiary)' }}>
      {isLoggedIn ? `Redirecting to ${role.toUpperCase()} Dashboard...` : 'Redirecting to Security Gate...'}
    </div>
  );
}
