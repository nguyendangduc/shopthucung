import {DATA_FORM_SOCKET} from 'store/actions/settings';

const socketMidelware = (store, socket) => {
  socket.on("DATA_IN_SOCKET", function(data) {
    store.dispatch({
      type: DATA_FORM_SOCKET,
      payload: data
    })
  });

  return next => action => {
    return next(action);
  }
}

export default socketMidelware;