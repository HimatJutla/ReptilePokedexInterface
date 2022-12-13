import { useState } from 'react';
import styles from '../../styles/Home.module.css';

const ReptileListCard = ({
    passedReptile
  }) => {
    const [reptile, setReptile] = useState(passedReptile);
    return (
      <div className={styles.reptileCard}>
        <div>
            {reptile.name}
        </div>
        <br/>
        <div>
            IMAGE
        </div>
      </div>
    );
  };
  
  export default ReptileListCard;