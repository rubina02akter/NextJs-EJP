import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
 
  const links = (
    <>
      <li> <Link href={"/"}>Blog</Link></li>
      <li> <Link href={"/profile"}>Profile</Link> </li>
      {isUserAuthenticated ? (
        <>
          <li><LogoutLink>Sign out</LogoutLink> </li>
        </>
      ) : (
        <>
        <li> <LoginLink>Login</LoginLink></li>
        <li> <RegisterLink>Register</RegisterLink> </li>
        </>
      )}
    </>
  );


  return (
   <section className="text-white  bg-opacity-40 bg-[#152c54]">
     <div className="navbar  container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content shadow bg-blue-900 rounded-box z-[1] mt-3 w-52 p-2"
          >
            {links}
          </ul>
        </div>
        <a className=" text-2xl font-extrabold"><span className='text-blue-900'>Blog</span>_<span className='text-blue-900'>Scape</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
   </section>
  );
};

export default Navbar;