import React from 'react';
import {
  Route, Switch, Redirect, BrowserRouter,
} from 'react-router-dom';
import AddCampaign from './Components/AddCampaign';
import Layout from './Components/Layout';
import Campaigns from './Components/Campaigns';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Campaigns} />
          <Route path="/create" component={AddCampaign} />
          <Redirect to="/" />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;