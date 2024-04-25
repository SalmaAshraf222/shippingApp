import { Card, CardContent, CardHeader } from "../ui/card";
import { ProgressBar } from "../progressBar/progressBar";
import { t } from "i18next";

export const ShipmentProgress = ({ eng }) => {
  return (
    <Card className="m-5 sm:m-10 py-10">
      <CardContent className="flex flex-col gap-10">
        {!eng ? (
          <div className=" flex max-md:flex-col max-md:items-center max-md:gap-10 text-center justify-around">
            {/* ******1st col****** */}
            <div className=" flex flex-col gap-5">
              <p className="text-zinc-400">{t("progress.date")}</p>
              <p className="font-bold"> {t("progress.date2")}</p>
            </div>

            {/* ******2nd col****** */}

            <div className=" flex flex-col gap-5">
              <p className="text-zinc-400"> {t("progress.seller")}</p>
              <p className="font-bold">SOUQ.COM</p>
            </div>
            {/* ******3rd col****** */}
            <div className=" flex flex-col gap-5">
              <p className="text-zinc-400"> {t("progress.number")}</p>
              <p className="font-bold">
                {" "}
                {t("progress.day")}
                <span>24/4 at 5:55 pm</span>{" "}
              </p>
            </div>

            {/* ******4th col****** */}

            <div className=" flex flex-col gap-5 ">
              <p className="text-zinc-400">
                {t("progress.number")}
                <span className="ms-2">1234567</span>
              </p>
              <p className="text-red-500 font-bold">{t("progress.status")}</p>
            </div>
          </div>
        ) : (
          <div className=" flex max-md:flex-col max-md:items-center max-md:gap-10 text-center justify-around">
            {/* ******1st col****** */}
            <div className=" flex flex-col gap-5 ">
              <p className="text-zinc-400">
                {t("progress.number")}
                <span className="ms-2">1234567</span>
              </p>
              <p className="text-red-500 font-bold">{t("progress.status")}</p>
            </div>
            {/* ******2nd col****** */}

            <div className=" flex flex-col gap-5">
              <p className="text-zinc-400"> {t("progress.number")}</p>
              <p className="font-bold">
                {" "}
                {t("progress.day")}
                <span>24/4 at 5:55 pm</span>{" "}
              </p>
            </div>
            {/* ******3rd col****** */}

            <div className=" flex flex-col gap-5">
              <p className="text-zinc-400"> {t("progress.seller")}</p>
              <p className="font-bold">SOUQ.COM</p>
            </div>
            {/* ******4th col****** */}

            <div className=" flex flex-col gap-5">
              <p className="text-zinc-400">{t("progress.date")}</p>
              <p className="font-bold"> {t("progress.date2")}</p>
            </div>
          </div>
        )}

        <div className="border-t w-full "></div>

        {/* *****Progres Bar***** */}
        <div className="">
          <ProgressBar
            eng={eng}
            bgColor={"bg-red-200"}
            progColor={"bg-red-500"}
            barWidth={"w-[66%]"}
            btn1Color={"bg-red-500"}
            btn2Color="bg-red-500"
            btn3Color={"bg-red-500"}
            btn4Color={"border-2 bg-white"}
            text1Color={"text-white"}
            text2Color={"text-white"}
            text3Color={"text-white"}
            text4Color="text-slate-300"
          />
        </div>
      </CardContent>
    </Card>
  );
};
