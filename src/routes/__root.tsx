import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Navbar } from "../components/navbar/Navbar";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const activeProps = {
  style: {
    fontWeight: "bold",
  },
};

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="">
        <Link to="/" activeProps={activeProps}>
          Home
        </Link>{" "}
        <Link to="/about" activeProps={activeProps}>
          About
        </Link>
        <Link to="/info" activeProps={activeProps}>
          Info
        </Link>
        <Link to="/search" activeProps={activeProps}>
          search
        </Link>
      </div>
      <Navbar />
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
