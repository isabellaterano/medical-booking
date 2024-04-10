import "reactjs-popup/dist/index.css";
import { useState } from "react";

export default function ReportsLayout() {
  const [report, setReport] = useState("");

  const handleReport = function (report) {
    setReport(report);
  };

  const openReportInNewTab = () => {
    const reportUrl = "/public/pdf/StayHealthyReport.pdf";
    window.open(reportUrl, "_blank");
  };

  const downloadReport = () => {
    const reportUrl = "/public/pdf/StayHealthyReport.pdf";

    const link = document.createElement("a");
    link.href = reportUrl;
    link.download = "patient_report.pdf";

    // Auto-click on the <a> element to trigger the download
    link.click();
  };

  return (
    <section className="min-h-dvh">
      <div className="m-12">
        <h1 className="text-center font-bold text-3xl">Reports</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Doctor Name</th>
                <th>Doctor Speciality</th>
                <th>View Report</th>
                <th>Download Report</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr. John Doe</td>
                <td>Cardiology</td>
                <td>
                  <button size="sm" onClick={openReportInNewTab}>
                    View Report
                  </button>
                </td>
                <td>
                  <button size="sm" onClick={downloadReport}>
                    Download Report
                  </button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Dr. Paula Boe</td>
                <td>Dermatology</td>
                <td>
                  <button disabled size="sm">
                    Report Unavailable
                  </button>
                </td>
                <td>
                  <button disabled size="sm">
                    Download Unavailable
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
