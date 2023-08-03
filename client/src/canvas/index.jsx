import { Canvas } from '@react-three/fiber'
import {Environment , Center } from '@react-three/drei'

import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'


const Canvas = () => {
return (
    <Canvas>
        <ambientLight intensity={0.5}/>
    </Canvas>
    )
}

export default Canvas ;