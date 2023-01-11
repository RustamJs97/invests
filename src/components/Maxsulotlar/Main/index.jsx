import React, { useContext, useRef, useReducer } from 'react'
import logo from '../../../assets/img/logo.png'
import Karzinka from '../../Generic/Karzinka'
import Pencil from '../../Generic/Pencil'
import Done from '../../Generic/Done'
import Cancel from '../../Generic/Cancel'
import { Modal, Input } from 'antd';
import { Container, Menu, Card, Img, Button } from './style'
import { SEND_ID, EDIT, CLICK_CANCEL, MODAL_DELETED_OK, MODAL_CANCEL } from '../../../context/products/index'

const Main = ({ state, dispatch }) => {

  return (
    <Container className='container'>
      <Menu className='container'>
        <Menu.Item>
          <Card.Title >Maxsulot</Card.Title>
          <Card.Title border>Kategoriya</Card.Title>
          <Card.Title border>Narxi</Card.Title>
          <Card.Title border>Qo’shimcha</Card.Title>
          <Card.Title border>Action</Card.Title>
        </Menu.Item>
      </Menu>

      {state.data.map((v, i) => <Card key={v.id} >
        <Card.Title><Img src={logo} />{state.click == v.id ? <Input value={v.title} /> : v.title}</Card.Title>
        <Card.Title>{state.click == v.id ? < Input size='small' padding={5} value={v.how} /> : v.how}</Card.Title>
        <Card.Title>{state.click == v.id ? < Input size='small' value={v.price} /> : v.price}</Card.Title>
        <Card.Title>{state.click == v.id ? < Input size='small' value={v.bonus} /> : v.bonus}</Card.Title>

        {state.click == v.id ?
          <Card.Title action='true'>
            <Button onClick={() => dispatch({ type: CLICK_CANCEL })}> <Cancel /></Button>
            <Button > <Done /></Button>
          </Card.Title>
          :
          <Card.Title action='true'>
            <Button onClick={() => dispatch({ type: EDIT, payload: { click: v.id } })}> <Pencil /></Button>
            <Button onClick={() => dispatch({ type: SEND_ID, payload: { mock: v.id } })}> <Karzinka /></Button>
          </Card.Title>
        }
      </Card>)
      }

      <Modal title={state.modalTitle} open={state.modals} onOk={() => dispatch({ type: MODAL_DELETED_OK })} onCancel={() => dispatch({ type: MODAL_CANCEL })}>
        <h2>malumot o'chishiga rozimisiz</h2>
      </Modal>
    </Container >
  )
}

export default Main