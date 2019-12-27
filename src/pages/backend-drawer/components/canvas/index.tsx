import * as React from 'react';
import { Layer, Text, Stage } from 'react-konva';

const Canvas: React.SFC<{}> = () => (
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            <Text text="Try click on rect" />
        </Layer>
    </Stage>
)

export default Canvas