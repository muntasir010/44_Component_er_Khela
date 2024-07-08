// import PropTypes from 'prop-types';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const gymStudentsData = [
        { id: 1, name: 'Alice', marks: 95 },
        { id: 2, name: 'Bob, ', marks: 89 },
        { id: 3, name: 'Charlie', marks: 96 },
        { id: 4, name: 'Diana', marks: 90 },
        { id: 5, name: 'Ethan', marks: 85 },
        { id: 6, name: 'Fiona', marks: 97 },
        { id: 7, name: 'George', marks: 88 },
        { id: 8, name: 'Hannah', marks: 98 },
        { id: 9, name: 'Ivan,', marks: 80 },
        { id: 10, name: ' Jane', marks: 94 }
    ]
    return (
        <div>
            <LChart width={800} height={400} data={gymStudentsData}>
                <XAxis dataKey="name"/>
                <YAxis></YAxis>
                <Line dataKey="marks" stroke='green'></Line>
            </LChart>
        </div>
    );
};

LineChart.propTypes = {
};

export default LineChart;