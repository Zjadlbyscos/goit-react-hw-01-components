import PropTypes from 'prop-types';
import st from './Statistics.module.css';

export default function Statistics({stats}) {
    return (
      <section className={st.statistics}>
        <h2 className={st.title}>Upload stats</h2>
  
        <ul className={st['stat-list']}>
          {stats.map(({id, label, percentage})=>{
            return (
              <li className={st.item}
              key={id}>
            <span className={st.label}>{label}</span>
            <span className={st.percentage}>{percentage}%</span>
          </li>
            )
          })}
          
        </ul>
      </section>
    );
  }
  
  Statistics.propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };