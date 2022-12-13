import { uiActions } from './ui-slice';
import { reptileActions } from './reptile-slice';


export const fetchSelectedReptile = (reptileId) => {
    return async (dispatch) => {
        const fetchIndividualReptile = async (id) => {
            const response = await fetch(`heetp://localhost:5001/${id}`);

            if (!response.ok) {
                throw new Error('Could not fetch reptile data!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const selectedReptile = await fetchIndividualReptile(reptileId);
            dispatch(reptileActions.populateIndividualReptile({
                individualSelectedReptile: selectedReptile
            }));
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Fetching reptile data failed!',
                })
              );
        }
    }
};

export const populateAllReptilesList = (allReptiles) => {
    return async (dispatch) => {
        dispatch(reptileActions.populateAllReptiles({
            allReptiles: allReptiles
        }));
    }
}
