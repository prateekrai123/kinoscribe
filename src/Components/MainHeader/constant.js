const userToken = localStorage.getItem("token");

const dashboard = {
  name: "Dashboard",
  link: "/dashboard",
};

export const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Admin",
    link: "/pendingOrders",
  },
  // {
  // name: "Services",
  // link: "/services",

  // subRoutes: [
  //   {
  //     name: "Web Development",
  //     link: "/service/web-development",
  //   },
  //   {
  //     name: "Mobile Development",
  //     link: "/service/mobile-development",
  //   },
  //   {
  //     name: "UI/UX Design",
  //     link: "/service/ui-ux-design",
  //   },
  // ],
  // },

  {
    name: "Contact Us",
    link: "/contact",
  },
];

if (userToken !== null) {
  routes.push(dashboard);
}
