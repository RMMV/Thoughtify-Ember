export function initialize( container, application ) {
  application.inject('adapter', 'session', 'simple-auth-session:main');
}

export default {
  name: 'session',
  initialize: initialize
};
