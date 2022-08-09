import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { formatTime } from "../utilities/Converter";

export function Countdown() {
  type times = {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
  };

  const [countDown, setCountDown] = useState<times>();

  useEffect(() => {
    const interval = setInterval(() => {
      const newyear: Date = new Date("1 Jan 2023");
      const datenow: Number = Date.now();
      const diff: number = (newyear - datenow) / 1000;
      setCountDown({
        seconds: Math.floor(diff) % 60,
        minutes: Math.floor(diff / 60) % 60,
        hours: Math.floor(diff / 3600) % 24,
        days: Math.floor(diff / 3600 / 24),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="p-4 d-flex align-center justify-content-center cover img-fluid"
      style={{
        backgroundImage: "url(/imgs/BG_IMAGE.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Card
        className="text-center"
        style={{
          width: "25rem",
          height: "250px",
          padding: "50px 10px",
          background: "rgb(255 255 255 / 25%)",
        }}
        body
      >
        <h1>NEW YEARS EVE</h1>
        <Row
          gap={5}
          md={4}
          lg={4}
          sm={2}
          xs={2}
          className="mx-auto"
          direction="horizontal"
        >
          <Col className="fs-2 d-flex flex-column align-items-center">
            <span>{formatTime(countDown?.days)}</span>
            <span className="fs-6">Days</span>
          </Col>
          <Col className="fs-2 d-flex flex-column align-items-center ">
            <span>{formatTime(countDown?.hours)}</span>
            <span className="fs-6">Hours</span>
          </Col>
          <Col className="fs-2 d-flex flex-column align-items-center">
            <span>{formatTime(countDown?.minutes)}</span>
            <span className="fs-6">Minutes</span>
          </Col>
          <Col className="fs-2 d-flex flex-column align-items-center ">
            <span>{formatTime(countDown?.seconds)}</span>
            <span className="fs-6">Seconds</span>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
