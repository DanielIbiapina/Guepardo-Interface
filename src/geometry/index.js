import {
  Header,
  BackButton,
  NextButton,
  DataItem,
  PageContainer,
  Logo,
  ContentContainer,
  MotoMetrics,
  MotoMetric,
  SituationContainer,
  SituationOptions,
  SituationBackButton,
  SituationTitle,
  SituationOption,
  SituationNextButton,
  SituationDiv,
} from "./styles";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Geometry() {
  const navigate = useNavigate();

  const [isGeometryTrue, setIsGeometryTrue] = useState(true);
  const [isSituationTrue, setIsSituationTrue] = useState(true);
  const [isDifficultyTrue, setIsDifficultyTrue] = useState(true);
  const [isSolutionTrue, setIsSolutionTrue] = useState(true);

  const [situationIndex, setSituationIndex] = useState(0);
  const [difficultyIndex, setDifficultyIndex] = useState(0);
  const [solutionIndex, setSolutionIndex] = useState(0);

  const increaseOrDecrease = ["Increase", "Decrease"];
  const [increaseOrDecreaseVector, setIncreaseOrDecreaseVector] = useState("");
  const [levelOfDifficultyVector, setLevelOfDifficultyVector] = useState("");

  const [wheelbase, setWheelbase] = useState(1380);
  const [caster, setCaster] = useState(23);
  const [forward, setForward] = useState(29.7);
  const [front, setFront] = useState(560);
  const [rear, setRear] = useState(602);
  const [frontwheel, setFrontwheel] = useState(602);
  const [rearwheel, setRearwheel] = useState(602);

  const [metricaAntigaWheel, setMetricaAntigaWheel] = useState("");
  const [metricaAntigaCaster, setMetricaAntigaCaster] = useState("");
  const [metricaAntigaForward, setMetricaAntigaForward] = useState("");

  const [isSelectedSituation, setIsSelectedSituation] = useState(-1);
  const [isSelectedDifficulty, setIsSelectedDifficulty] = useState(-1);
  const [isSelectedSolution, setIsSelectedSolution] = useState(-1);

  const motometrics = [
    {
      name: "Wheelbase (mm)",
      metric: `${wheelbase} mm`,
      metricKey: wheelbase,
    },
    {
      name: "Caster (°)",
      metric: `${caster} °`,
      metricKey: caster,
    },
    {
      name: "Forward Offset (mm)",
      metric: `${forward} mm`,
      metricKey: forward,
    },
    {
      name: "Front Tyre Diameter (mm)",
      metric: `${front} mm`,
      metricKey: front,
    },
    {
      name: "Rear Tyre Diameter (mm)",
      metric: `${rear} mm`,
      metricKey: rear,
    },
    {
      name: "Front Wheel (mm)",
      metric: `${frontwheel} mm`,
      metricKey: frontwheel,
    },
    {
      name: "Rear Wheel (mm)",
      metric: `${rearwheel} mm`,
      metricKey: rearwheel,
    },
  ];

  function setMetricKey(evento, metricName) {
    switch (metricName) {
      case "Wheelbase (mm)":
        setWheelbase(evento);
        break;
      case "Caster (°)":
        setCaster(evento);
        break;
      case "Forward Offset (mm)":
        setForward(evento);
        break;
      case "Front Tyre Diameter (mm)":
        setFront(evento);
        break;
      case "Rear Tyre Diameter (mm)":
        setRear(evento);
        break;
      case "Front Wheel (mm)":
        setFrontwheel(evento);
        break;
      case "Rear Wheel (mm)":
        setRearwheel(evento);
        break;

      default:
        break;
    }
  }

  function saveSituationData(index) {
    switch (index) {
      case 1:
        setIncreaseOrDecreaseVector([0, 1, 0]);
        break;
      case 2:
        setIncreaseOrDecreaseVector([1, 1, 0]);
        break;
      case 3:
        setIncreaseOrDecreaseVector([0, 1, 0]);
        break;
      case 4:
        setIncreaseOrDecreaseVector([0, 1, 0]);
        break;
      case 5:
        setIncreaseOrDecreaseVector([1, 0, 1]);
        break;
    }
    console.log(index);
    setIsSituationTrue(false);
  }

  function saveDifficultyData(index) {
    switch (index) {
      case 1:
        setLevelOfDifficultyVector(1);
        break;
      case 3:
        setLevelOfDifficultyVector(3);
        break;
      case 5:
        setLevelOfDifficultyVector(5);
        break;
    }

    setIsDifficultyTrue(false);
  }

  function apply(index) {
    if (index === 1) {
      setMetricaAntigaWheel(wheelbase);
      increaseOrDecrease[increaseOrDecreaseVector[0]].includes("Increase")
        ? setWheelbase(Number(wheelbase) + 10 * levelOfDifficultyVector)
        : setWheelbase(Number(wheelbase) - 10 * levelOfDifficultyVector);
    }
    if (index === 2) {
      setMetricaAntigaCaster(caster);
      increaseOrDecrease[increaseOrDecreaseVector[1]].includes("Increase")
        ? setCaster(Number(caster) + 1 * levelOfDifficultyVector)
        : setCaster(Number(caster) - 1 * levelOfDifficultyVector);
    }
    if (index === 3) {
      setMetricaAntigaForward(forward);
      increaseOrDecrease[increaseOrDecreaseVector[2]].includes("Increase")
        ? setForward(Number(forward) + 0.3 * levelOfDifficultyVector)
        : setForward(Number(forward) - 0.3 * levelOfDifficultyVector);
    }
    setIsGeometryTrue(true);
    setIsSituationTrue(true);
    setIsDifficultyTrue(true);
    setIsSolutionTrue(true);
    selectSituation(0);
    selectDifficulty(0);
    selectSolution(0);
  }

  function selectSituation(index) {
    setSituationIndex(index);
    setIsSelectedSituation(index - 1);
  }
  function selectDifficulty(index) {
    setDifficultyIndex(index);
    setIsSelectedDifficulty(index - 1);
  }
  function selectSolution(index) {
    setSolutionIndex(index);
    setIsSelectedSolution(index - 1);
  }

  function navegar() {
    navigate(`/`);
  }
  if (metricaAntigaWheel || metricaAntigaCaster || metricaAntigaForward) {
    if (metricaAntigaWheel) {
      alert(`Wheelbase changed from ${metricaAntigaWheel}mm to ${wheelbase}mm`);
      setMetricaAntigaWheel("");
    }
    if (metricaAntigaCaster) {
      alert(`Caster changed from ${metricaAntigaCaster}° to ${caster}°`);
      setMetricaAntigaCaster("");
    }
    if (metricaAntigaForward) {
      alert(
        `Forward Offset changed from ${metricaAntigaForward}mm to ${forward}mm`
      );
      setMetricaAntigaForward("");
    }
  }
  return (
    <PageContainer>
      <Header>
        <Logo>GUEPARDO</Logo>
        <BackButton onClick={navegar}>Home</BackButton>
      </Header>
      {isGeometryTrue ? (
        <ContentContainer>
          <>
            <SituationTitle>Please set your metrics</SituationTitle>
            <MotoMetrics>
              {motometrics.map((motometric) => {
                return (
                  <MotoMetric>
                    <h1>{motometric.name}</h1>
                    <input
                      type="number"
                      placeholder=""
                      value={motometric.metricKey}
                      onChange={(e) =>
                        setMetricKey(e.target.value, motometric.name)
                      }
                    />
                  </MotoMetric>
                );
              })}
            </MotoMetrics>
            <NextButton onClick={() => setIsGeometryTrue(false)}>
              Next
            </NextButton>
          </>
        </ContentContainer>
      ) : isSituationTrue ? (
        <>
          <SituationContainer>
            <SituationTitle>Please select the situation</SituationTitle>
            <SituationOptions>
              <SituationOption
                onClick={() => selectSituation(1)}
                isSelected={isSelectedSituation === 0}
              >
                Instability on the turns
              </SituationOption>
              <SituationOption
                onClick={() => selectSituation(2)}
                isSelected={isSelectedSituation === 1}
              >
                Difficulty to turn
              </SituationOption>
              <SituationOption
                onClick={() => selectSituation(3)}
                isSelected={isSelectedSituation === 2}
              >
                Instability on the straights
              </SituationOption>
              <SituationOption
                onClick={() => selectSituation(4)}
                isSelected={isSelectedSituation === 3}
              >
                Instability at braking
              </SituationOption>
              <SituationOption
                onClick={() => selectSituation(5)}
                isSelected={isSelectedSituation === 4}
              >
                Instability at accelerating
              </SituationOption>
            </SituationOptions>
            <SituationDiv>
              <SituationBackButton onClick={() => setIsGeometryTrue(true)}>
                Back
              </SituationBackButton>
              <SituationNextButton
                onClick={() => saveSituationData(situationIndex)}
              >
                Next
              </SituationNextButton>
            </SituationDiv>
          </SituationContainer>
        </>
      ) : isDifficultyTrue ? (
        <>
          <SituationContainer>
            <SituationTitle>
              What is the level of difficulty you are facing?
            </SituationTitle>
            <SituationOptions>
              <SituationOption
                onClick={() => selectDifficulty(5)}
                isSelected={isSelectedDifficulty === 4}
              >
                High
              </SituationOption>
              <SituationOption
                onClick={() => selectDifficulty(3)}
                isSelected={isSelectedDifficulty === 2}
              >
                Medium
              </SituationOption>
              <SituationOption
                onClick={() => selectDifficulty(1)}
                isSelected={isSelectedDifficulty === 0}
              >
                Low
              </SituationOption>
            </SituationOptions>
            <SituationDiv>
              <SituationBackButton onClick={() => setIsSituationTrue(true)}>
                Back
              </SituationBackButton>
              <SituationNextButton
                onClick={() => saveDifficultyData(difficultyIndex)}
              >
                Next
              </SituationNextButton>
            </SituationDiv>
          </SituationContainer>
        </>
      ) : isSolutionTrue ? (
        <SituationContainer>
          <SituationTitle>Please choose a solution</SituationTitle>
          <SituationOptions>
            <SituationOption
              onClick={() => selectSolution(1)}
              isSelected={isSelectedSolution === 0}
            >
              {increaseOrDecrease[increaseOrDecreaseVector[0]]} wheelbase from{" "}
              {wheelbase} mm to{" "}
              {increaseOrDecrease[increaseOrDecreaseVector[0]].includes(
                "Increase"
              )
                ? Number(wheelbase) + 10 * levelOfDifficultyVector
                : Number(wheelbase) - 10 * levelOfDifficultyVector}
              mm
            </SituationOption>
            <SituationOption
              onClick={() => selectSolution(2)}
              isSelected={isSelectedSolution === 1}
            >
              {increaseOrDecrease[increaseOrDecreaseVector[1]]} caster from{" "}
              {caster}° to{" "}
              {increaseOrDecrease[increaseOrDecreaseVector[1]].includes(
                "Increase"
              )
                ? Number(caster) + 1 * levelOfDifficultyVector
                : Number(caster) - 1 * levelOfDifficultyVector}
              °{" "}
            </SituationOption>
            <SituationOption
              onClick={() => selectSolution(3)}
              isSelected={isSelectedSolution === 2}
            >
              {increaseOrDecrease[increaseOrDecreaseVector[2]]} offset from{" "}
              {forward} mm to{" "}
              {increaseOrDecrease[increaseOrDecreaseVector[2]].includes(
                "Increase"
              )
                ? Number(forward) + 0.3 * levelOfDifficultyVector
                : Number(forward) - 0.3 * levelOfDifficultyVector}{" "}
              mm
            </SituationOption>
          </SituationOptions>
          <SituationDiv>
            <SituationBackButton onClick={() => setIsDifficultyTrue(true)}>
              Back
            </SituationBackButton>
            <SituationNextButton onClick={() => apply(solutionIndex)}>
              Apply
            </SituationNextButton>
          </SituationDiv>
        </SituationContainer>
      ) : (
        ""
      )}
    </PageContainer>
  );
}
