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
    path: "/contact",
    allowType: AllowType.All,
  },
  {
    path: "/privacy-policy",
    allowType: AllowType.All,
  },
  {
    path: "/terms",
    allowType: AllowType.All,
  },
  // GuestOnly
  {
    path: "/signin",
    allowType: AllowType.GuestOnly,
  },
  // AdminOnly
];
