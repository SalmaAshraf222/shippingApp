import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import report from "../../assets/images/report.png";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const ShipmentDetails = ({ reportHandler, eng }) => {
  const { data } = useSelector((state) => state.shipment);
  const { t, i18n } = useTranslation();

  return (
    <div>
      {!eng ? (
        <div className="flex max-xl:flex-col max-xl:items-center gap-5 m-5 sm:m-10">
          {/* *******Left side******* */}
          <div className=" flex flex-col gap-5 w-full md:w-8/12 xl:w-8/12">
            <p className="text-zinc-600 text-lg"> {t("det.link")}</p>
            <Table className="font-semibold border">
              <TableHeader className="text-zinc-400 ">
                <TableRow className="bg-muted">
                  <TableCell className="text-center">
                    {t("table.branch")}
                  </TableCell>
                  <TableCell className="text-center">
                    {t("table.date")}
                  </TableCell>
                  <TableCell className="text-center">
                    {t("table.time")}
                  </TableCell>
                  <TableCell className="text-center">
                    {t("table.details")}
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">
                    {t("table.nasr")}
                  </TableCell>
                  <TableCell className="text-center">05/04/2020</TableCell>
                  <TableCell className="text-center">12:30 pm</TableCell>
                  <TableCell className="text-center">
                    <p className="text-center">{t("progressbar.placed")}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">
                    {t("table.nasr")}
                  </TableCell>
                  <TableCell className="text-center">05/04/2020</TableCell>
                  <TableCell className="text-center">12:30 pm</TableCell>
                  <TableCell className="text-center">
                    <p className="text-center">{t("progressbar.sold")}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">
                    {t("table.nasr")}
                  </TableCell>
                  <TableCell className="text-center">05/04/2020</TableCell>
                  <TableCell className="text-center">12:30 pm</TableCell>
                  <TableCell className="flex flex-col text-center">
                    <p className="text-center">{t("progressbar.out")}</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">
                    {t("table.nasr")}
                  </TableCell>
                  <TableCell className="text-center">05/04/2020</TableCell>
                  <TableCell className="text-center">12:30 pm</TableCell>
                  <TableCell className="text-center">
                    <p className="text-center">{t("progressbar.received")}</p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          {/* *******Right side******* */}
          <div className="flex flex-col gap-5 w-full md:w-8/12 xl:w-4/12">
            <p className="text-zinc-600 text-lg">{t("address.title")}</p>
            <Card className="bg-muted flex flex-wrap p-10">
              {t("address.body")}
            </Card>
            <Card className="flex flex-wrap justify-evenly p-10">
              <img src={report} className="w-20 h-20" />
              <div className="flex flex-col gap-4">
                <p className="font-semibold">{t("issue.title")}</p>
                <Button className="bg-red-600">{t("issue.btn")}</Button>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <div className="flex max-xl:flex-col max-xl:items-center gap-5 m-5 sm:m-10">
          {/* *******Right side******* */}
          <div className="flex flex-col gap-5 w-full md:w-8/12 xl:w-4/12">
            <p className="text-zinc-600 text-lg text-right">
              {t("address.title")}
            </p>
            <Card className="bg-muted flex flex-wrap p-10 text-right">
              {t("address.body")}
            </Card>
            <Card className="flex flex-wrap justify-evenly p-10">
              <div className="flex flex-col gap-4">
                <p className="font-semibold">{t("issue.title")}</p>
                <Button className="bg-red-600">{t("issue.btn")}</Button>
              </div>
              <img src={report} className="w-20 h-20" />
            </Card>
          </div>
          {/* *******Left side******* */}
          <div className="text-right flex flex-col gap-5 w-full md:w-8/12 xl:w-8/12">
            <p className="text-zinc-600 text-lg"> {t("det.link")}</p>
            <Table className="font-semibold border">
              <TableHeader className="text-zinc-400 ">
                <TableRow className="bg-muted">
                  <TableCell className="text-center">
                    {t("table.details")}
                  </TableCell>

                  <TableCell className="text-center">
                    {t("table.date")}
                  </TableCell>
                  <TableCell className="text-center">
                    {t("table.time")}
                  </TableCell>
                  <TableCell className="text-center">
                    {t("table.branch")}
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">
                    <p className="text-center">{t("progressbar.placed")}</p>
                  </TableCell>
                  <TableCell className="text-center">05/04/2020</TableCell>

                  <TableCell className="text-center">12:30 pm</TableCell>

                  <TableCell className="text-center">
                    {t("table.nasr")}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">
                    <p className="text-center">{t("progressbar.sold")}</p>
                  </TableCell>
                  <TableCell className="text-center">05/04/2020</TableCell>

                  <TableCell className="text-center">12:30 pm</TableCell>

                  <TableCell className="text-center">
                    {t("table.nasr")}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="flex flex-col text-center">
                    <p className="text-center">{t("progressbar.out")}</p>
                  </TableCell>
                  <TableCell className="text-center">05/04/2020</TableCell>

                  <TableCell className="text-center">12:30 pm</TableCell>

                  <TableCell className="text-center">
                    {t("table.nasr")}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">
                    <p className="text-center">{t("progressbar.received")}</p>
                  </TableCell>
                  <TableCell className="text-center">05/04/2020</TableCell>

                  <TableCell className="text-center">12:30 pm</TableCell>

                  <TableCell className="text-center">
                    {t("table.nasr")}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};
