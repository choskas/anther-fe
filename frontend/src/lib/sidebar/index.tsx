import { AreaChartIcon, BookAIcon, DownloadCloudIcon, LogOutIcon, PlaneIcon, UserIcon } from "lucide-react";

export const SIDEBAR = [
  {
    name: "Inicio",
    linkTo: "/dashboard",
    roles: ["super_admin", "operative_admin"],
    icon: <AreaChartIcon className="h-4 w-4 mr-[8px]" />
  },
  {
    name: "Vuelos",
    linkTo: "/dashboard/flights",
    roles: ["super_admin", "operative_admin", "product_generator"],
    icon:  <PlaneIcon className="h-4 w-4 mr-[8px]" />
  },
  {
    name: "Mi cuenta",
    linkTo: "/dashboard/profile",
    roles: ["super_admin", "operative_admin"],
    icon:  <UserIcon className="h-4 w-4 mr-[8px]" />
  },
  {
    name: "Descargas",
    linkTo: "/dashboard/downloads",
    roles: ["super_admin"],
    icon:  <DownloadCloudIcon className="h-4 w-4 mr-[8px]" />
  },
  {
    name: "Alumnos",
    linkTo: "/dashboard/students",
    roles: ["super_admin", "teacher"],
    icon:  <BookAIcon className="h-4 w-4 mr-[8px]" />
  },
  {
    name: "Cerrar sesión",
    linkTo: "/dashboard/logout",
    roles: ["super_admin", "operative_admin", "product_generator"],
    icon:  <LogOutIcon className="h-4 w-4 mr-[8px]" />
  },
];

export const getSideBar = (role: string) => {
  const sidebar = SIDEBAR.filter((item) => item.roles.includes(role));
  return sidebar
}