

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Profile() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();

  return (await isAuthenticated()) ? (
    <section className="container mx-auto min-h-screen">
        <p className="text-3xl font-semibold text-center">Welcome {user?.family_name} {user?.given_name}👋</p>
    </section>
  ) : (
    <div className="container mx-auto min-h-screen text-2xl text-center">
       This page is protected, please <LoginLink className="font-bold text-blue-800 underline">Login</LoginLink> to view it
    </div>
  );
}
