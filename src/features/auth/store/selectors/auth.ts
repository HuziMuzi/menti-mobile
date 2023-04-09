import {RootState} from '@app/redux/store';

const selectAuth = (state: RootState) => state.auth;

export default selectAuth;
