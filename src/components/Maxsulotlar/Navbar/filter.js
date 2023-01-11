import React, { useState } from 'react'
import { Cascader } from 'antd';
const options = [
  {
    value: 'Ichimliklar',
    label: 'Ichimliklar',

  },
  {
    value: 'Yemak',
    label: 'Yemak',

  },
  {
    value: 'Shirinlik',
    label: 'Shirinlik',

  },
  {
    value: 'Ichimlik',
    label: 'Ichimlik',

  },

];
const Filter = () => {
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <div >
      <Cascader options={options} onChange={onChange} placeholder="Please select" />
      <span>
        <p><input id="contactChoice1" type='checkbox' /> Narx bo’yicha (O’sish tartibida) </p>
        <p><input id="contactChoice2" type='checkbox' /> Narx bo’yicha (kamayish tartibida) </p>
        <p><input id="contactChoice3" type='checkbox' /> Sana bo’yicha (O’sish tartibida) </p>
        <p><input id="contactChoice4" type='checkbox' /> Sana bo’yicha (kamayish tartibida) </p>
      </span>
    </div >
  )
}

export default Filter