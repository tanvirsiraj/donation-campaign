import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { getStoredCard } from "../../utility/localStorage";

const Statistics = () => {
  const donatedCard = getStoredCard();
  const donatedCardLength = donatedCard.length;
  // console.log(donatedCardLength);
  const yourDonations = parseFloat(((donatedCardLength / 12) * 100).toFixed(1));
  const totalDonatinos = 100 - yourDonations;
  // console.log(yourDonations, totalDonatinos);

  const data = [
    { name: "Total Donation", value: totalDonatinos },
    { name: "Your Donation", value: yourDonations },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="lg:max-w-7xl mx-auto  h-[100vh] lg:h-[82vh] ">
      <ResponsiveContainer width="100%" height="60%">
        <PieChart className="lg:max-w-7xl mx-auto md:text-lg md:font-bold">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.reverse().map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {/* Custom Legend */}
      <div className="flex justify-center items-center flex-row-reverse">
        {data.reverse().map((entry, index) => (
          <div className="flex items-center gap-2" key={index}>
            <div className="md:mr-2 whitespace-nowrap text-sm md:text-lg text-black ">
              {entry.name}
            </div>
            <div
              className="w-6 md:w-14 h-2 mr-3 md:mr-6"
              style={{
                backgroundColor: COLORS[index],
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
