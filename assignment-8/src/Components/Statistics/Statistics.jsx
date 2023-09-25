
import { PieChart, Pie, Cell,} from 'recharts';
import {getStoredDonationData} from "../Utility/localStorage";



const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const statistics = () => {
 
        const storedDonationIds = getStoredDonationData();
        const storedDataLength = (storedDonationIds.length);
   console.log(typeof(storedDataLength))

    const data = [
        { name: 'Group A', value: 12 },
        { name: 'Group B', value: storedDataLength},
      ];



    return (
        <div>
        <div className="flex flex-row justify-center mb-0 pb-0">
            <PieChart width={500} height={500}>
      <Pie
        data={data}
        // cx={250}
        // cy={250}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
        </div>
        <div className="flex flex-row justify-center gap-6 -mt-14 items-center align-middle">
        <div className="flex flex-row justify-center gap-3 items-center"> 
        <p>Your Donation </p> <div style={{height:"12px", background:"#00C49F", width:"80px"}}><hr style={{height:"3px", borderColor:"#00C49F"}} /></div> 
        <br />
    </div>
    <div className="flex flex-row justify-center gap-3 items-center"> 
        <p>Total Donation </p> <div style={{height:"12px", background:"#FF444A", width:"80px"}}><hr style={{height:"3px", borderColor:"#FF444A"}} /></div> 
        <br />
    </div>
    </div> 
</div>
        
    );

    
};

export default statistics;


