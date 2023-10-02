import { Line } from "react-chartjs-2";
import React from "react";

function Linechart() {
  return (
    <div>
      <Line
        data={{
          labels: ["Anime", "Comics", "Pop Culture", "Video games", "Misc"],
          datasets: [
            {
              label: "Popularity of differnt services",
              data: [FormData],
              fill: false,
              borderWidth: 4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "green",
              responsive: true,
            },
          ],
        }}
      />
      ;
    </div>
  );
}
export default Linechart;
