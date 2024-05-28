import { AxeIcon, CircleUserIcon, ScanBarcodeIcon, UserIcon } from "lucide-react";

export const SIDEBAR = [
  {
    name: "Comunidades",
    linkTo: "/dashboard/communities",
    roles: ["super_admin", "operative_admin"],
    icon: <CircleUserIcon className="h-4 w-4 mr-[8px]" />
  },
  {
    name: "Productos",
    linkTo: "/dashboard/product",
    roles: ["super_admin", "operative_admin", "product_generator"],
    icon:  <ScanBarcodeIcon className="h-4 w-4 mr-[8px]" />
  },
  {
    name: "Permisos",
    linkTo: "/dashboard/permissions",
    roles: ["super_admin", "operative_admin"],
    icon:  <UserIcon className="h-4 w-4 mr-[8px]" />
  },
  {
    name: "Registro",
    linkTo: "/dashboard/register",
    roles: ["super_admin"],
    icon:  <AxeIcon className="h-4 w-4 mr-[8px]" />
  },
];

export const getSideBar = (role: string) => {
  const sidebar = SIDEBAR.filter((item) => item.roles.includes(role));
  return sidebar
}