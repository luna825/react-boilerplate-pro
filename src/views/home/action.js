import createAsyncAction from 'utils/createAsyncAction';

function getMessage() {
  return createAsyncAction('HOME_GET_MESSAGE', () =>
    Promise.resolve({
      data: 'This is Home Page.',
    }),
  );
}

export default {
  getMessage,
};
