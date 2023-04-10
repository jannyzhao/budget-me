import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Card from "react-bootstrap/Card";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={14}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function formatData(userTransactions) {
  const groups = {};
  userTransactions.forEach((transaction) => {
    if (transaction.type !== "Expense") {
      return;
    }
    if (!groups[transaction.category]) {
      groups[transaction.category] = 0;
    }
    groups[transaction.category] += transaction.amount;
  });
  const data = Object.keys(groups).map((category) => ({
    name: category,
    value: groups[category],
  }));
  return data;
}

function ExpenseChart({ userTransactions }) {
  const data = formatData(userTransactions);
  return (
    <div>
      <Card
        style={{ width: "15rem" }}
        border="secondary"
        className="text-center"
      >
        <Card.Body>
          <PieChart width={250} height={150}>
            <Pie
              data={data}
              cx="40%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={75}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExpenseChart;
