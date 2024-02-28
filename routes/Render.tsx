import { useRouter } from "next/router";
import { useEffect } from "react";
import { LoadingContext, useLoadingContext } from "../contexts/LoadingContext";
import {
  SnackbarContext,
  useSnackbarContext,
} from "../contexts/SnackbarContext";
// import { Routes, AllowType } from "./Routes";

interface Props {
  children: React.ReactNode;
}

export const Render: React.FC<Props> = ({ children }) => {
  // const router = useRouter();

  // redirect to hidenari-yuda.jp
  // useEffect(() => {
  //   if (
  //     !window.location.hostname.match("/hidenari-yuda.jp/") &&
  //     process.env.NEXT_PUBLIC_APP_ENV === "prod"
  //   ) {
  //     router.push(process.env.NEXT_PUBLIC_APP_URL + router.asPath);
  //   }
  // }, []);

  // const matchedRoute = Routes.filter((route) => {
  //   return router.route == route.path;
  // })[0];

  // const routeAllowType: AllowType = matchedRoute
  //   ? matchedRoute.allowType
  //   : AllowType.All;

  // switch (routeAllowType) {
  //   /**
  //    * 全利用者がアクセスできるページで
  //    * ログインしていない場合
  //    * */
  //   case AllowType.All:
  //     router.push
  //     break;

  //   /**
  //    * ゲストのみアクセスできるページで
  //    * ログイン済の場合
  //    * */
  //   case AllowType.GuestOnly:
  //     console.log("all");
  //     break;

  //   default:
  //     break;
  // }

  return (
    <>
      <LoadingContext.Provider value={useLoadingContext()}>
        <SnackbarContext.Provider value={useSnackbarContext()}>
          {children}
        </SnackbarContext.Provider>
      </LoadingContext.Provider>
    </>
  );
};
