import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Container, Wrapper, Card, Title, Text } from './style'
import logo from '../../../assets/img/newlogo.png'

const Footer = () => {

  const [center, setCenter] = useState({
    lat: 41.3127,
    lng: 69.2785,
  });
  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4',
  });

  const onMapClick = (e) => {
    setCenter({
      lat: e?.latLng?.lat(),
      lng: e?.latLng?.lng(),
    });
  };

  return (
    <Container className='container '>
      <Wrapper className='wrapper'>
        <Card>
          <Title m='true'><img className='logofot' src={logo} />Bunker Lab?</Title>
          <Text s='true' desc='true'>
            Bunker Lab - Webbrain Academy jamoasidan yana bir ajoyib loyiha!
            Davomiyligi: 7 oy + 3 oy amaliyot
            Vaqti: har kuni 09:00~13:30 / 14:00~18:30
            Narhi: Ishga kirgandan keyin to'lanadi.
          </Text>
          <span className="span">
            <Card.Telegram />
            <Card.Tw />
            <Card.Insta />
            <Card.Ins />
          </span>
        </Card>

        <Card medium='true'>
          <Text s>Contact Us</Text>
          <Text href='tel:+998 33 576 20 20' desc='true'><Card.Maps />Chilonzor. Mo'ljal: Mirzo Ulug'bek metrosi</Text>
          <Text href='tel:+998 33 576 20 20' desc='true'>  <Card.Call />+998 33 576 20 20</Text>
          <Text href='tel:+998 33 576 20 20' desc='true'> <Card.Mail />@webbrain_admin</Text>
        </Card>

        <Card end='true'>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={17}
              onClick={onMapClick}
            >
              <></>
            </GoogleMap>
          ) : ''}
        </Card>
      </Wrapper>
    </Container>
  )
}

export default Footer