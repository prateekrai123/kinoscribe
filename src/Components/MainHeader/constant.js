const userToken = localStorage.getItem("token");
const isAdmin = localStorage.getItem("isAdmin");

const dashboard = {
  name: "Dashboard",
  link: "/dashboard",
};

const admin = {
  name: "Admin",
  link: "/pendingOrders",
};

export const routes = [
  {
    name: "Home",
    link: "/",
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

if (isAdmin) {
  routes.push(admin);
}

if (userToken !== null) {
  routes.push(dashboard);
}
