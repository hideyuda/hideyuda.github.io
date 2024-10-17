import { useEffect } from "react";
import { LoadingContext, useLoadingContext } from "../contexts/LoadingContext";
import {
  SnackbarContext,
  useSnackbarContext,
} from "../contexts/SnackbarContext";
import { useRouter } from "next/router";
// import { Routes, AllowType } from "./Routes";

interface Props {
  children: React.ReactNode;
}

export const Render: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://spaceai.jp/hideyuda");
  }, []);

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
