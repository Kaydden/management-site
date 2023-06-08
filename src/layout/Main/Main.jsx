import React, {Component} from 'react';
import "./Main.css";
import ApexCharts from 'apexcharts';
import { Container, Row, Col } from "reactstrap";
import Donut from '../../pages/DonutChart';

function Main() {
  return (
    <div className='main'>
        <Container>
      <Donut/>
        </Container>
    </div>
  )
}

export default Main;
