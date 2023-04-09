import {RootState} from '@app/redux/store';

const selectProfile = (state: RootState) => state.profile;

export default selectProfile;
