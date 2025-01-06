import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; 
import PropTypes from 'prop-types'; 

const Graficos = ({ data }) => (
  <ResponsiveContainer width="100%" height={223}>
    <AreaChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="" />
    </AreaChart>
  </ResponsiveContainer>
);

Graficos.propTypes = {
  data: PropTypes.array.isRequired, // Definimos que 'data' debe ser un array
};

export default Graficos;
