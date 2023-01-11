import React from 'react'
import { Drawer } from 'antd';

const Draw = ({ onClose, open }) => {
  return (
    <Drawer width='80%' title="Basic Drawer" placement="top" forceRender={true} onClose={onClose} open={open}>
      <h1>
        Yoqut Academy
      </h1>
    </Drawer>
  )
}

export default Draw