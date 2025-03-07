import { useNavigate, useParams } from "react-router";
import "./App.css";
import { slides } from "./slides/slides";
import { TheEnd } from "./slides/IntroAndOutro/TheEnd";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const { currentStep } = useParams();
  let step = Number(currentStep);

  const [subStep, setSubStep] = useState<number>(0);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const numberOfSlides = Object.keys(slides).length;
      step = Math.min(numberOfSlides, step + 1);
      setSubStep(0);
      navigate(`/${step}`);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const nextStep = Math.max(0, step - 1);
      step = nextStep;
      setSubStep(0);
      navigate(`/${nextStep}`);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSubStep(subStep + 1);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSubStep(Math.max(0, subStep - 1));
    }
  });

  const Slide = slides[step] || TheEnd;
  return <Slide subStep={subStep} />;
}

export default App;
