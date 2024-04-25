import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";

export const Header = ({ translateHandler, eng, translateHandlerEN }) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {/* ******Larger screens***** */}
      {!eng ? (
        <nav className="max-lg:hidden  border-b py-5 px-20 flex justify-between items-center">
          <img src={logo} className=" w-32 h-10" />
          <div className="flex gap-5 font-bold">
            <p className="">{t("nav.home")}</p>
            <p className="">{t("nav.prices")}</p>
            <p className="">{t("nav.contact")}</p>
          </div>
          <div className="flex items-center gap-5 font-bold">
            <p className="">{t("nav.track")}</p>
            <p className=" border-s ps-5">{t("nav.signin")}</p>
            <p
              onClick={translateHandler}
              className={` text-red-500 hover:cursor-pointer  ${
                eng ? `hidden` : `block`
              }`}
            >
              AR
            </p>

            <p
              onClick={translateHandlerEN}
              className={` text-red-500 hover:cursor-pointer  ${
                eng ? `block` : `hidden`
              }`}
            >
              EN
            </p>
          </div>
        </nav>
      ) : (
        <nav className="max-lg:hidden  border-b py-5 px-20 flex justify-between items-center">
          <div className="flex items-center gap-5 font-bold">
            <p
              onClick={translateHandler}
              className={` text-red-500 hover:cursor-pointer  ${
                eng ? `hidden` : `block`
              }`}
            >
              AR
            </p>

            <p
              onClick={translateHandlerEN}
              className={` text-red-500 hover:cursor-pointer  ${
                eng ? `block` : `hidden`
              }`}
            >
              EN
            </p>
            <p className="">{t("nav.track")}</p>
            <p className=" border-s ps-5">{t("nav.signin")}</p>
          </div>
          <div className="flex gap-5 font-bold">
            <p className="">{t("nav.contact")}</p>
            <p className="">{t("nav.prices")}</p>
            <p className="">{t("nav.home")}</p>
          </div>

          <img src={logo} className=" w-32 h-10" />
        </nav>
      )}

      {/* ******Mobile header********* */}
      {!eng ? (
        <nav className="max-lg:flex justify-between py-5 px-5 sm:px-10 hidden border-b">
          <img src={logo} className=" w-24 h-8" />
          <Sheet>
            <SheetTrigger>
              <i className="bi bi-list text-slate-700 text-3xl"></i>
            </SheetTrigger>
            <SheetContent className="font-bold flex flex-col   gap-10">
              <img src={logo} className=" w-24 h-8" />
              <div className="flex flex-col gap-5">
                <p className="">{t("nav.home")}</p>
                <p className="">{t("nav.prices")}</p>
                <p className="">{t("nav.contact")}</p>
              </div>

              <div className="flex flex-col gap-2 font-bold ">
                <p className="">{t("nav.track")}</p>
                <p className="border-t pt-2">{t("nav.signin")}</p>

                <p
                  onClick={translateHandler}
                  className={`text-red-500 hover:cursor-pointer mt-10 ${
                    eng ? `hidden` : `block`
                  }`}
                >
                  AR
                </p>

                <p
                  onClick={translateHandlerEN}
                  className={`text-red-500 hover:cursor-pointer mt-10 ${
                    eng ? `block` : `hidden`
                  }`}
                >
                  EN
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      ) : (
        <nav className="max-lg:flex justify-between py-5 px-5 sm:px-10 hidden border-b">
          <img src={logo} className=" w-24 h-8" />
          <Sheet>
            <SheetTrigger>
              <i className="bi bi-list text-slate-700 text-3xl"></i>
            </SheetTrigger>
            <SheetContent className="font-bold flex flex-col  items-end text-end gap-10">
              <img src={logo} className="self-start w-24 h-8" />
              <div className="flex flex-col gap-5">
                <p className="">{t("nav.home")}</p>
                <p className="">{t("nav.prices")}</p>
                <p className="">{t("nav.contact")}</p>
              </div>

              <div className="flex flex-col gap-2 font-bold ">
                <p className="">{t("nav.track")}</p>
                <p className="border-t pt-2">{t("nav.signin")}</p>

                <p
                  onClick={translateHandler}
                  className={`text-red-500 hover:cursor-pointer mt-10 ${
                    eng ? `hidden` : `block`
                  }`}
                >
                  AR
                </p>

                <p
                  onClick={translateHandlerEN}
                  className={`text-red-500 hover:cursor-pointer mt-10 ${
                    eng ? `block` : `hidden`
                  }`}
                >
                  EN
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      )}
    </div>
  );
};
