import { Button } from "@/components/ui/button";
import { getSideBar } from "@/lib/sidebar";
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="flex flex-col md:flex-row h-[100vh]">
        <nav className="md:w-[200px] border-solid border-r-[1px] md:h-full flex md:flex-col flex-row">
        <Link to="/">
            <img
              className="md:w-[120px] w-[140px] mb-[24px]"
              alt="logo"
              src="/assets/imgs/logo.png"
            />
            </Link>
          {getSideBar('super_admin').map((item) => {
            return (
              <Link to={item.linkTo} key={item.name}>
                <Button
                  variant="ghost"
                  className="w-full text-left font-normal flex justify-start"
                >
                  {item.icon}
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </nav>
        <section className="overflow-y-auto w-full">
  
            <Outlet />
          
        </section>
      </div>
    )
}

export default Layout