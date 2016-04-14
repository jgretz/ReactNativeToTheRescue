// import
import Http from './http';
import { BASE_URL, apiVersion, wrapApiKey } from './constants';

// export
export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';

const action = (type, payload) => ({ type, payload });

// class
export const apiExecutor = apiStruct =>
  (dispatch, getState) => {
    const http = new Http(BASE_URL);
    let request = null;

    const relativeUrl = `${apiStruct.url}/${apiVersion}?wrapAPIKey=${wrapApiKey}`;

    switch (apiStruct.verb) {
      case GET:
        request = http.get(relativeUrl, apiStruct.data);
        break;

      case POST:
        request = http.post(relativeUrl, apiStruct.data);
        break;

      case PUT:
        request = http.put(relativeUrl, apiStruct.data);
        break;

      case DELETE:
        request = http.delete(relativeUrl, apiStruct.data);
        break;

      default:
        throw new Error(`Verb: ${apiStruct.verb} not known`);
    }

    return request
      .then(response => {
        if (dispatch && apiStruct.successType) {
          dispatch(action(apiStruct.successType, response));
        }

        return response;
      })
      .catch(err => {
        if (dispatch && apiStruct.failureType) {
          dispatch(action(apiStruct.failureType, err));
        }

        throw err;
      });
  };
