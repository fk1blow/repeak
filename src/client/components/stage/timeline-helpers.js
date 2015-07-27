import React from 'react';

require('./timeline.scss');

export default class TimelineHelpers extends React.Component {

  render() {
    return (
      <div className="timeline-helpers">
        <ol className="timeline-position cf">
          {this.props.timelineList.map((item, idx) => {
            return <li key={idx}>{item}</li>
          })}
        </ol>


        <ul className="timeline-grid cf">
          {this.props.timelineList.map((item, idx) => {
            return <li key={idx}><div>&nbsp;</div></li>
          })}
        </ul>
      </div>
    )
  }

}
