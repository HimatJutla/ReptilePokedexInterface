import ReptileListCard from '../reptileListCard/reptileListCard';

const ReptileListView = ({
    allReptiles
  }) => {
    return (
      <>
        {allReptiles.map((reptile)=> {
            return (
                <ReptileListCard key={reptile.reptile_id} passedReptile={reptile}/>
            );
        })}
      </>
    );
  };
  
  export default ReptileListView;