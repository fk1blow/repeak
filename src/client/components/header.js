import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {

  render() {
    return (
      <div id="header" className="w-100 pvm bb b--light-gray">
        <header className="mw9 center phm phl-ns">

          <menu className="fr">
            <li><Link className="link book dib ttu plm" to="stage">Stage</Link></li>
          </menu>

          <Link to="home" className="logo teal none f2 dib">Repeak</Link>
        </header>
      </div>
    );
  }

}
