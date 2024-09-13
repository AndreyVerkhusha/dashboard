import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const OrdersPieChart = () => {
  const data = [
    { value: 110, name: "Skatebnoard" },
    { value: 72, name: "Language courses" },
    { value: 70, name: "Office Collaboration" },
    { value: 35, name: "Robot" }
  ];
  const option = {
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#1158E2"
        },
        {
          offset: 1,
          color: "#42B5F2"
        }
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#BC1FD7"
        },
        {
          offset: 1,
          color: "#7F1DD1"
        }
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#E8A618"
        },
        {
          offset: 1,
          color: "#EB6B36"
        }
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: "#D131BE"
        },
        {
          offset: 1,
          color: "#BF1575"
        }
      ])
    ],
    tooltip: {
      backgroundColor: "rgba(34, 34, 34, 0.8)",
      textStyle: {
        color: "#fff"
      },
      trigger: "item",
      formatter: (params: { name: string; value: string }) => {
        console.log(params, "params");
        return `<div class='exp-charts-tooltip'>
               <span>${params.name + ": "}</span>
               <span>${params.value + "$"}</span>
            </div>`;
      }
    },
    series: [
      {
        data,
        name: "Item",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 50,
          borderColor: "black",
          borderWidth: 5
        },
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          /* label: {
                         show: true,
                         fontSize: 20,
                         fontWeight: "bold"
                     },*/
        }
      }
    ]
  };

  return (
    <ReactECharts style={{ height: 140, marginTop: "1rem" }} option={option} />
  );
};

export default OrdersPieChart;
