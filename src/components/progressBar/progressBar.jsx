import shipmentSlice from "../../redux/slices/shipmentSlice";
import { useSelector } from "react-redux";
import { t } from "i18next";

export const ProgressBar = ({
  eng,
  bgColor,
  progColor,
  barWidth,
  btn1Color,
  btn2Color,
  btn3Color,
  btn4Color,
  text1Color,
  text2Color,
  text3Color,
  text4Color,
}) => {
  const { data } = useSelector((state) => state.shipment);
  // console.log(data);
  return (
    <div className="">
      {/* ******Larger screens******* */}
      <div className={`max-md:hidden relative`}>
        {/* ********main bar******* */}
        <div className={`${bgColor} relative h-2 `}></div>
        {/* ******progress bar****** */}
        <div
          className={`${progColor} absolute z-10 top-0  h-2 ${barWidth}`}
        ></div>
        {/* progress icons */}
        {!eng ? (
          <div>
            <div
              className={`absolute z-30 -top-2 left-0   ${btn1Color} rounded-full px-1`}
            >
              <i className={`text-lg ${text1Color} bi bi-check`}></i>
            </div>
            <div
              className={`absolute z-30 -top-2   left-[33%]   ${btn2Color}  rounded-full px-1`}
            >
              <i className={`text-lg ${text2Color} bi bi-check`}></i>
            </div>
            <div
              className={` absolute z-30 -top-4    left-[66%]  ${btn3Color}  rounded-full py-1 px-2 `}
            >
              <i className={`${text3Color} text-3xl bi bi-truck`}></i>
            </div>
            <div
              className={` absolute z-30 -top-4   right-0   ${btn4Color}  rounded-full py-1 px-2`}
            >
              <i className={`${text4Color} text-3xl bi bi-box-seam`}></i>
            </div>
          </div>
        ) : (
          <div>
            <div
              className={` absolute z-30 -top-4  left-0     ${btn4Color}  rounded-full py-1 px-2`}
            >
              <i className={`${text4Color} text-3xl bi bi-box-seam`}></i>
            </div>
            <div
              className={` absolute z-30 -top-4  left-[33%]   ${btn3Color}  rounded-full py-1 px-2 `}
            >
              <i className={`${text3Color} text-3xl bi bi-truck`}></i>
            </div>
            <div
              className={`absolute z-30 -top-2   left-[66%]  ${btn1Color} rounded-full px-1`}
            >
              <i className={`text-lg ${text1Color} bi bi-check`}></i>
            </div>
            <div
              className={`absolute z-30 -top-2  right-0   ${btn2Color}  rounded-full px-1`}
            >
              <i className={`text-lg ${text2Color} bi bi-check`}></i>
            </div>
          </div>
        )}

        {/* progress text*/}
        {!eng ? (
          <div className="flex justify-between font-bold relative mt-10">
            <div className="">
              <p className="text-center">{t("progressbar.placed")}</p>
            </div>
            <div className=" ">
              <p className="text-center">{t("progressbar.sold")}</p>
            </div>
            <div className=" flex flex-col">
              <p className="text-center">{t("progressbar.out")}</p>
              <p className="text-red-500 capitalize text-center">
                {data?.CurrentStatus?.state?.toLowerCase()}
              </p>
            </div>
            <div className="">
              <p className="text-center">{t("progressbar.received")}</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-between font-bold relative mt-10">
            <div className="">
              <p className="text-center">{t("progressbar.received")}</p>
            </div>
            <div className=" flex flex-col">
              <p className="text-center">{t("progressbar.out")}</p>
              <p className="text-red-500 capitalize text-center">
                {data?.CurrentStatus?.state?.toLowerCase()}
              </p>
            </div>
            <div className=" ">
              <p className="text-center">{t("progressbar.sold")}</p>
            </div>

            <div className="">
              <p className="text-center">{t("progressbar.placed")}</p>
            </div>
          </div>
        )}
      </div>

      {/* *******MOBILE****** */}
      <div className="flex flex-col gap-10 items-center relative md:hidden mb-10">
        {/* ********main bar******* */}

        <div className={`${bgColor} h-96 relative w-2 `}></div>
        {/* ******progress bar****** */}

        <div className={`w-2  absolute z-10 ${progColor} h-full`}></div>
        {/* progress icons & text*/}

        <div className={`flex flex-col absolute z-30 top-0 items-center`}>
          <i
            className={`${btn1Color} rounded-full px-1 text-lg ${text1Color} bi bi-check`}
          ></i>
          <p className="">{t("progressbar.placed")}</p>
        </div>
        <div className={`flex flex-col absolute z-30 top-[33%] items-center`}>
          <i
            className={`${btn1Color} rounded-full px-1 text-lg ${text1Color} bi bi-check`}
          ></i>
          <p className="">{t("progressbar.sold")}</p>
        </div>
        <div className={`flex flex-col absolute z-30 top-[66%] items-center`}>
          <i
            className={`rounded-full py-1 px-2 ${text3Color} ${btn3Color} text-3xl bi bi-truck`}
          ></i>

          <p className="">{t("progressbar.out")}</p>
        </div>
        <div className={`flex flex-col absolute z-30 top-[100%] items-center`}>
          <i
            className={`${text4Color} ${btn4Color} text-3xl bi bi-box-seam rounded-full py-1 px-2`}
          ></i>

          <p className="">{t("progressbar.received")}</p>
        </div>
      </div>
    </div>
  );
};
