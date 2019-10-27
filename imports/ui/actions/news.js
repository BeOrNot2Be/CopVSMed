import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export const GET_LATESTS_GUEST_NEWS = 'GET_LATESTS_GUEST_NEWS';

export const GET_LATESTS_AUTH_NEWS = 'GET_LATESTS_AUTH_NEWS';


export const getNews = () => {
  return (dispatch) => {
    Tracker.autorun(() => {//unmount func
      let user = Meteor.user(); //test with const 
      if (user === null) {
        dispatch({
          type: GET_LATESTS_GUEST_NEWS,
          subscribe: Meteor.subscribe('newsGuest'),
        });
      } else {
        dispatch({
          type: GET_LATESTS_AUTH_NEWS,
          subscribe: Meteor.subscribe('newsAuth', user),
        });
      }
    });
  };
};
