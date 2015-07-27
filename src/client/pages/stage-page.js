import React from 'react';
import TimelineHelpers from '../components/stage/timeline-helpers';
import TimelineStage from '../components/stage/timeline-stage';

require('../../../assets/styles/foo.scss');

export default class StagePage extends React.Component {

  render() {
    return (
      <div id="stage-page" className="mw9 center phl-ns ptm">

        <div className="stage-container">
          <div className="scroller">
            <TimelineHelpers timelineList={this.props.timelineList} />
            <TimelineStage />
          </div>
        </div>
      </div>
    )
  }

}

StagePage.defaultProps = {
  timelineList: Array.from(new Array(220).keys())
}
