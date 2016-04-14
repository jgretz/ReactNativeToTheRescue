import { GET_SESSION_INFO_SUCCESS, GET_SESSION_INFO_FAIL } from '../actions';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SESSION_INFO_SUCCESS:
      const rawData = action.payload.data.data;

      const data = [];
      for (let i = 0; i < rawData.Sessions.length; i++) {
        const session = rawData.Sessions[i];
        const speaker = rawData.Speakers[i];

        data.push({ index:i, speaker, session });
      }

      return data;
  }

  return state;
};
