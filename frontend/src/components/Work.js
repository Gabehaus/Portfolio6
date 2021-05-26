import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Button } from "react-bootstrap"
import Aos from "aos"
import "aos/dist/aos.css"
import { uuid } from "uuidv4"
import { data } from "../data"
import AppImages from "./AppImages"
import Assistance from "./Assistance"
import calculatorPNG from "../images/apps/calculatorPNG.png"
import clockBPNG from "../images/apps/clockBPNG.png"
import drumPNG from "../images/apps/drumPNG.png"
import fathackPNG from "../images/apps/fathackPNG.png"
import markownPNG from "../images/apps/markownPNG.png"
import quotesBPNG from "../images/apps/quotesBPNG.png"
import CalTekPNG from "../images/apps/CalTekPNG.png"

const Work = () => {
  const dispatch = useDispatch()
  const test = useSelector(state => state.test)
  const { testReducerItem } = test

  const [screen, setScreen] = useState("")
  const [slideImages, setSlideImages] = useState([
    fathackPNG,
    CalTekPNG,
    markownPNG,
    drumPNG,
    clockBPNG,
    calculatorPNG,
    quotesBPNG
  ])
  const [slideImagesPreloaded, setSlideImagesPreloaded] = useState([])
  const [finished, setFinished] = useState("")

  useEffect(() => {
    Aos.init({
      duration: 2000,
      disable: function() {
        var maxWidth = 800
        return window.innerWidth < maxWidth
      }
    }) // initialize animate on scroll
  }, [])

  //set screen width variable
  useEffect(() => {
    const screenSet = () => {
      if (window.innerWidth < 800 && window.innerWidth > 530) {
        setScreen("Ipad")
        return
      }

      if (window.innerWidth < 530) {
        setScreen("Mobile")
        return
      }
    }

    window.addEventListener("resize", screenSet)

    screenSet()
  }, [])

  //load images
  useEffect(() => {
    slideImages.map(elem => {
      let newImage = (new Image().src = elem)
      //   slideImagesPreloaded.push((new Image().src = elem))
      setSlideImagesPreloaded(slideImagesPreloaded => [
        ...slideImagesPreloaded,
        newImage
      ])
    })

    // setTimeout(() => {
    //   setFinished(true)
    // }, [10])
  }, [])

  return (
    <div
      style={{
        position: "relative",
        background: "#9781ff", //#9781ff
        minHeight: "90vh",
        marginTop: window.innerWidth < 950 ? "-5px" : null
        // border: "solid 3px pink"
      }}
      id='work'
    >
      <Row>
        <Col className='work-title'>Projects</Col>
      </Row>
      <Row>
        <h3
          className='project-desc1 text-center font-italic mt-3'
          style={{ color: "white" }}
        >
          Front to back coding and design
        </h3>
      </Row>
      <Row>
        {/* {finished ? <AppImages images={slideImagesPreloaded} /> : null} */}
        <AppImages images={slideImagesPreloaded} />
        {/* {slideImagesPreloaded
          ? data.properties.map((project, index) => (
              <Col lg={6} md={6} sm={5} key={uuid()}>
                <img src={slideImagesPreloaded[index]}></img>
              </Col>
            ))
          : null} */}
        <Col lg={6} md={6} sm={5}>
          {/* {slideImagesPreloaded.length > 1 ? (
            <img src={slideImagesPreloaded[3]}></img>
          ) : null} */}
        </Col>
        <Col lg={6} md={6} sm={5}></Col>
      </Row>
      <Row className='mt-5'>
        <Col className='work-title mt-5'>Dev Assistance</Col>
      </Row>
      <Row>
        <h3 className='project-desc1 text-center font-italic mt-3'>
          Assistance on large-scale projects
        </h3>
      </Row>
      <Row>
        <Assistance />
      </Row>
    </div>
  )
}

export default Work
