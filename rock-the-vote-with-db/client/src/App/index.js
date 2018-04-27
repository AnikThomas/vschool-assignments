import React from 'react';
import AllPosting from './AllPosting';
import postingFull from './postingFull';
import newPosting from './newPosting';
import editPosting from './editPosting';
import Header from './header'

import { Route, Switch } from 'react-router';

const App = () => {
    return (<div>
        <Header />
        <Switch> 
            <Route exact path='/' component={AllPosting} />
            <Route path='/posting/:id' component={postingFull} />
            <Route path='/editPosting/:id' component={editPosting} />
            <Route path='/new' component={newPosting} />
        </Switch> 
            
        </div>
    )

}

export default App;