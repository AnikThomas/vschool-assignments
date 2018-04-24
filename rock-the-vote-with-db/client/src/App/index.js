import React from 'react';
import AllPosting from './AllPosting';
// import postingFull from './postingFull';
// import newPosting from './newPosting';
//import Header from './header'

// import { Route, Switch } from 'react-router';

const App = () => {
    return (<div>
        {/* <Header /> */}
        {/* <Switch>
            <Route exact path='/' component={allPosting} />
            <Route path='/posting/:id' component={postingFull} />
            <Route path='/new' component={newPosting} />
        </Switch> */}
            <AllPosting/>
        </div>
    )

}

export default App;