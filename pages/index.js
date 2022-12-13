import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ReptileListView from '../components/reptileListView/ReptileListView';
import EmptyReptileState from '../components/emptyState/emptyState';
import { useEffect } from 'react';
import populateAllReptilesList from '../store/reptile-actions';

export default function Home({ allReptiles }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(populateAllReptilesList(allReptiles));
  }, [dispatch]);

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
        <button>
          ADD REPTILE
        </button>
        </div>
        <div className={styles.listContainer}>
        {allReptiles?.length > 0 ? <ReptileListView allReptiles={allReptiles}/> : <EmptyReptileState/>}
        </div>
      </main>

      <footer className={styles.footer}>
        <div>HIMMY J CREATIONS</div>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:5001/reptiles');
  const allReptiles = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      allReptiles,
    },
    // revalidate: 10,
  }
}
