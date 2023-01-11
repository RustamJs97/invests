import React, { useReducer, useContext, useState } from 'react'
import Header from '../../components/Maxsulotlar/Navbar'
import Main from '../../components/Maxsulotlar/Main'
import uuid from 'react-uuid';
import { Container } from '../style'
import { ProductCreate } from '../../context/products/productsContex'
import { productMock } from '../../mock/product'


import {
  SEND_ID,
  EDIT,
  CLICK_CANCEL,
  MODAL_DELETED_OK,
  MODAL_CANCEL,
  SEARCH_INPUT,
  SEARCH_BUTTON,
  ADD_BUTTON,
  OPEN_DRAVER,
  OPEN_DRAVER_CANCEL,
  Edits
}
  from '../../context/products/index'

const MaxsulotlarPage = () => {

  const allFunction = (state, action) => {
    switch (action.type) {
      case SEND_ID: return { ...state, selects: state.selects = action.payload.mock, modals: state.modals = true, }; break
      case EDIT: return { ...state, click: state.click = action.payload.click, }; break
      case CLICK_CANCEL: return { ...state, click: state.click = null, }; break
      case MODAL_DELETED_OK: return { ...state, data: state.data = state.data.filter(v => v.id != state.selects), modals: state.modals = false, }; break
      case MODAL_CANCEL: return { ...state, modals: state.modals = false, }; break
      case OPEN_DRAVER: return { ...state, open: state.open = true, }; break
      case OPEN_DRAVER_CANCEL: return { ...state, open: state.open = false, }; break
      case SEARCH_INPUT: return { ...state, handleValue: state.handleValue = action.payload.e.target.value.toLowerCase() }; break
      case SEARCH_BUTTON: return { ...state, data: state.data = productMock.filter(v => v.title.toLowerCase().includes(state.handleValue)) }; break
      case ADD_BUTTON: return {
        ...state, data: state.data = [...state.data,
        {
          id: uuid(),
          title: state.ref.img,
          type: 'dfgh',
          how: 'dfgh',
          price: 'dfgh',
          bonus: 'dfgh',
        }], open: state.open = false,
      }; break
      case Edits: return {
        ...state, ref: state.ref = {
          img: action.payload.changes,
          title: 'title',
          how: 'how',
          type: 'type',
          price: 'price',
          bonus: 'bonus',
        }
      }; break
    }
  }
  const [data] = useContext(ProductCreate)


  const [state, dispatch] = useReducer(allFunction, {
    data,
    selects: null,
    click: null,
    open: false,
    modals: false,
    modalTitle: "Malumotni yo'q qilish",
    handleValue: '',
    addImg: '',
    addTitle: '',
    addHow: '',
    addType: '',
    addPrice: '',
    addBonus: '',
    ref: {
      img: 'du',
      title: 'title',
      how: 'how',
      type: 'type',
      price: 'price',
      bonus: 'bonus',
    }
  }
  )

  return (
    <Container state={state}>
      <Header state={state} dispatch={dispatch} />
      <Main state={state} dispatch={dispatch} />
    </Container>

  )
}


export default MaxsulotlarPage