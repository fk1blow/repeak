import Reflux from 'reflux';

export default Reflux.createActions([
  'streamCreate',
  'streamInitialize',
  'streamKill',

  'overviewReady',

  'eventUpdate',
  'bettingTypeUpdate',
  'providerEventRelationUpdate',
  'eventParticipantRelationUpdate'
]);
