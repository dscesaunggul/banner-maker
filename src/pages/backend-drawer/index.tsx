import * as React from 'react';
import Canvas from './components/canvas';

const BackendDrawer : React.SFC<{}> = () => (
    <div className="columns">
        <div className="column is-half-desktop is-full-mobile is-half-tablet">Hello world</div>
        <div className="column is-half-desktop is-full-mobile is-half-tablet">
           <Canvas/>
        </div>
    </div>
)

export default BackendDrawer