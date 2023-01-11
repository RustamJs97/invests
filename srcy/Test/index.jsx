import React from 'react'
import { Container, Wrapper } from './style'
import { text } from './text'

const Test = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper border='true'>
          <span className='span'>
            {/* {text.ibrohim34.arab} */}
            ba'zi hijob o'rgan ayollarga hayron qolaman nomaxramdan sirtlarini yopadilaru,
            lekin nomaxramlar bilan qo'l berib salomlashadilar
            <br />
            ularni go'yoki haqiqiy zinodan lazzat olib,
            <br />
            ko'z-zinosidan yiroq yurgan omilarga o'xshataman
            <hr />
            hijob ko'z bilan birga iffatni ham to'sadimi
            <br />

          </span>
          {/* {text.ibrohim34.sura} */}
          {/* salovat */}
          <span className="sp">
            {/* {text.ibrohim34.uzb} */}
            {/* ey rustam dunyoga keliboq nega bunchalar g'amga to'lib yig'lading deb so'rang, men aytay: dunyoga kelib habibimiz muhammad s.a.vni topa olmaganim uchun ularni qumsab yig'ladim deb java */}
          </span>
          <span >@reacthok</span>

        </Wrapper>
      </Wrapper>
    </Container>
  )
}

export default Test