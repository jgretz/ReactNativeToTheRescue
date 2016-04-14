import store from 'react-native-simple-store';

const action = (type, payload) => {
  return {
    type: type,
    payload: payload
  };
};

export const loadFromStorage = (storageRequest) => {
  return (dispatch) => {
    return store.get(storageRequest.key).then((value) => {
      dispatch(action(storageRequest.successType, value));

      return value;
    }).catch((err) => {
      dispatch(action(storageRequest.failureType, err));

      return err;
    });
  };
};

export const saveToStorage = (storageRequest) => {
  return (dispatch) => {
    return store.save(storageRequest.key, storageRequest.value).then(() => {
      dispatch(action(storageRequest.successType, storageRequest.value));

      return storageRequest.value;
    }).catch((err) => {
      dispatch(action(storageRequest.failureType, err));

      return err;
    });
  };
};
