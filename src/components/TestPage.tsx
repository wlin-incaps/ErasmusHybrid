import * as Ons from 'react-onsenui';
import * as React from 'react';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

export class TestPage extends React.Component {
  _renderTabs() {
    return [
      {
        content: <Ons.Page key="profile-page"><div>Profile</div></Ons.Page>,
        tab: <Ons.Tab key="profile-tab" label="Profile" icon="md-account" />
      },
      {
        content: <Ons.Page key="browse-page"><div>Browse</div></Ons.Page>,
        tab: <Ons.Tab key="browse-tab" label="Browse" icon="md-view-dashboard" />
      }
    ];
  }

  render() {
    return (
      <Ons.Page>
        <Ons.Tabbar index={0} renderTabs={this._renderTabs} />
      </Ons.Page>
    );
  }
}