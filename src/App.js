import "./App.css";
import { Header } from "./components/header/header";
import { ShipmentProgress } from "./components/shipmentProgress/shipmentProgress";
import { ShipmentDetails } from "./components/shipmentDetails/shipmentDetails";
import { useEffect, useState } from "react";
// import { shipmentData } from "./redux/api/shipmentData";
import { useDispatch, useSelector } from "react-redux";
import { getShipmentData, shipmentData } from "./redux/slices/shipmentSlice";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  const [eng, setEng] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      await dispatch(shipmentData()).then((response) => {
        if (response.type === "shipment/data/fulfilled") {
          dispatch(getShipmentData(response.payload));
        } else {
          console.log(response);
        }
      });
    }
    fetchData();
  }, []);
  useEffect(() => {}, []);
  return (
    <div className="">
      <Header
        eng={eng}
        translateHandler={() => {
          changeLanguage("ar");
          setEng(true);
        }}
        translateHandlerEN={() => {
          changeLanguage("en");
          setEng(false);
        }}
      />
      <ShipmentProgress eng={eng} />
      <ShipmentDetails eng={eng} />
    </div>
  );
}

export default App;
