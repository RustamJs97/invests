import React from 'react'
// import { userinfo } from '../../mock/userInfo';
// import video from '../../assets/img/video.mp4'
import img from '../../assets/img/videoimg.png'
import { Container } from './style'


const User = () => {
  return (
    <Container>
      <span className="text-name">O'zim haqimda </span>
      <div className="wrapper">
        <h3>Ingiliz tili o'rganvotman va kam code ko'p natijaga harakat. Portfolio ko'p bo'lgani bilan tozza codeda yozilganlarini saxifamga yuklash harakatidaman. Portfolio saxifamga qilgan ishlarimni qo'ysam bo'lar edi lekin yangicha exclusive g'oyalar qilish harakatidaman.</h3>
      </div>
      {/* <video poster={img} controls src={video}></video> */}
    </Container>
  )
}

export default User