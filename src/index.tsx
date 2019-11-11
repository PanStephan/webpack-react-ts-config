import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/Hello';

ReactDOM.render(
    <React.Fragment>
        <Hello compiler='TypeScript' framework='React' />,
        <div>Hello World</div>
    </React.Fragment>,
    document.getElementById('app')
);