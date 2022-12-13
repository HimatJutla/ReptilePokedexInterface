import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import fetchSelectedReptile from '../../../store/reptile-actions';

export default function IndividualReptile({}) {

    const dispatch = useDispatch();
    const router = useRouter();
    const { reptileId } = router.query;
    const selectedReptile = useSelector((state) => state.individualSelectedReptile);

  useEffect(() => {
    dispatch(fetchSelectedReptile(reptileId));
  }, [reptileId, dispatch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>REPTILE POKEDEX</title>
        <meta name="description" content="Reptile Pokedex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.headerBox}>
        <h1 className={styles.title}>
         REPTILE POKEDEX
        </h1>
        </div>
        <div>
            {selectedReptile?.description}
        </div>
      </main>

      <footer className={styles.footer}>
        <div>HIMMY J CREATIONS</div>
      </footer>
    </div>
  )
}
