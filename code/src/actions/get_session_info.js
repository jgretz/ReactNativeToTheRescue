// import
import { apiExecutor, GET } from '../support';

// export
export const GET_SESSION_INFO_SUCCESS = 'GET_SESSION_INFO_SUCCESS';
export const GET_SESSION_INFO_FAIL = 'GET_SESSION_INFO_FAIL';

export const getSessionInfo = () => apiExecutor({
  verb: GET,
  url: '/conf/pghtechfest',
  successType: GET_SESSION_INFO_SUCCESS,
  failureType: GET_SESSION_INFO_FAIL,
});
