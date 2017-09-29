import React from 'react';
import ReactDOM from 'react-dom';
import Appone from './Appone';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Appone />, document.getElementById('root'));

registerServiceWorker();