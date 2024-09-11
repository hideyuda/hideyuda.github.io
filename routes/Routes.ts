type RouteConfig = {
  path: string;
  allowType: AllowType;
};

export enum AllowType {
  All,
  GuestOnly,
  AdminOnly,
}

export const Routes: RouteConfig[] = [
  // All
  {
    path: "/",
    allowType: AllowType.All,
  },
  {
    path: "/intern",
    allowType: AllowType.All,
  },
  // {
  //   path: "/contact",
  //   allowType: AllowType.All,
  // },
  // AdminOnly
];
