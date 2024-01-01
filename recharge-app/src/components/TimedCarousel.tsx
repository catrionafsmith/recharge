// import { useState, useEffect } from 'react';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import exercises from "../exercises.json";
import { useStopwatch } from "react-timer-hook";
// import useSound from 'use-sound';
// import whoosh from "/whoosh.mp3"

function TimedCarousel() {
  const { seconds, reset } = useStopwatch({ autoStart: true });
  const handleSlideChange = (_eventKey: number, _direction: "end" | "start") => {
    // You can use eventKey and direction if needed, or just ignore them
    reset();
  };
  // const [play, { stop }] = useSound(whoosh);
  // const [userHasInteracted, setUserHasInteracted] = useState(false);

  // useEffect(() => {
  //   const unlockAudio = () => {
  //     play();
  //     stop();
  //     setUserHasInteracted(true);
  //     window.removeEventListener('click', unlockAudio);
  //   };

  //   window.addEventListener('click', unlockAudio);
  //   return () => {
  //     window.removeEventListener('click', unlockAudio);
  //   };
  // }, [play, stop]);

  // const handleSlideChange = () => {
  //   reset();
  //   if (userHasInteracted) {
  //     play();
  //   }
  // };

  return (
    <>
      <Carousel onSlide={handleSlideChange}>
        {exercises.exercises.map((exercise, index) => (
          <Carousel.Item key={index} interval={exercise.interval}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={exercise.image} />
              <Card.Body>
                <Card.Title>{exercise.name}</Card.Title>
                <Card.Text>{exercise.about}</Card.Text>
                <Card.Subtitle>0:{seconds}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default TimedCarousel;
