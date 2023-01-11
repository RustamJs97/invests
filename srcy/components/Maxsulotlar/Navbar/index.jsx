import React from 'react'
import Plus from '../../Generic/Plus'
import search from '../../../assets/svg/search.svg'
import filter from '../../../assets/svg/filter.svg'
import App from './filter'
import { Popover, Drawer, Button, Input } from 'antd';
import { Container, Wrapper, Item, InputItem } from './style'
import { SEARCH_INPUT, SEARCH_BUTTON, ADD_BUTTON, Edits, OPEN_DRAVER, OPEN_DRAVER_CANCEL } from '../../../context/products/index'

const Navbar = ({ state, dispatch }) => {


  return (
    <Container className='container'>
      <Wrapper className='wrapper'>
        <Item border='2px solid #E5E5E5' onClick={() => dispatch({ type: OPEN_DRAVER })}> <Plus width='205px' />  Yangi maxsulot qo’shish </Item>
        <Item width='100%'>
          <InputItem>
            <input onChange={(e) => dispatch({ type: SEARCH_INPUT, payload: { e: e } })} placeholder='Qidirish' type="text" />
            <img src={search} onClick={() => dispatch({ type: SEARCH_BUTTON })} />
          </InputItem>
          <Popover placement="bottomRight" width='300px' content={<App />} trigger="click">
            <img src={filter} />
          </Popover>
        </Item>

        <Drawer width={300} title="Yangi malumot qo`shish" placement="right" onClose={() => dispatch({ type: OPEN_DRAVER_CANCEL })} open={state.open}>
          {/* <Input size='large' onChange={(e) => dispatch({ type: INPUT_REF, payload: { inputImg: e.target.value } })} style={{ marginBottom: '20px' }} placeholder='rasm_url()' />
          <Input size='large' onChange={(e) => dispatch({ type: INPUT_REF, payload: { inputBonus: e.target.value } })} style={{ marginBottom: '20px' }} placeholder='bonus...' />
          <Input size='large' onChange={(e) => dispatch({ type: INPUT_REF, payload: { inputTitle: e.target.value } })} style={{ marginBottom: '20px' }} placeholder='ism...' />
          <Input size='large' onChange={(e) => dispatch({ type: INPUT_REF, payload: { inputType: e.target.value } })} style={{ marginBottom: '20px' }} placeholder='turi...' />
          <Input size='large' onChange={(e) => dispatch({ type: INPUT_REF, payload: { inputPrice: e.target.value } })} style={{ marginBottom: '20px' }} placeholder='narxi...' /> */}






          <input value={state.addImg} onChange={(e) => dispatch({ type: Edits, payload: { imgValue: e.target.value } })} />
          <input value={state.addTitle} onChange={(e) => dispatch({ type: Edits, payload: { titleValue: e.target.value } })} />
          <input value={state.addHow} onChange={(e) => dispatch({ type: Edits, payload: { howValue: e.target.value } })} />
          <input value={state.addPrice} onChange={(e) => dispatch({ type: Edits, payload: { priceValue: e.target.value } })} />
          <input value={state.addBonus} onChange={(e) => dispatch({ type: Edits, payload: { bonusValue: e.target.value } })} />






          <Button size='large' onClick={() => dispatch({ type: ADD_BUTTON })}>add Product</Button>
        </Drawer>
        {state.addTitle}
      </Wrapper>
    </Container >
  )
}

export default Navbar