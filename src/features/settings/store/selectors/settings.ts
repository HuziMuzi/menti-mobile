import {RootState} from '@app/redux/store';

const selectSettings = (state: RootState) => state.settings;

export default selectSettings;
