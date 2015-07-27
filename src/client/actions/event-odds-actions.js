import Reflux from 'reflux';

export default Reflux.createActions([
  'startOddsStream',
  'restartOddsStream',
  'stopOddsStream',
  'oddsInitialLoad',
  'eventOverviewReady',
  'sortProviderRows',
  'selectedParameterChanged'
])
