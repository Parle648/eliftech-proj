import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { format, parseISO } from 'date-fns';
import styles from './styles/lineBar.module.scss';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineBar = () => {
  const users = useSelector((store: any) => store.Users.value);

  const registrationsByDate = users.reduce((acc: any, user: any) => {
    const date = format(parseISO(user.created_at), 'yyyy-MM-dd');
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(registrationsByDate);
  const data = Object.values(registrationsByDate);

  return (
    <div className={styles.block}>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Registrations per Day',
              data: data,
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
            },
          ],
        }}
      />
    </div>
  );
};

export default LineBar;
