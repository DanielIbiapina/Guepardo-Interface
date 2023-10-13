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
  GraphicsButton,
  GraphicsNumberButton,
} from "./styles";
import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Geometry() {
  const navigate = useNavigate();

  const chartRef = useRef(null);
  const pitchAngleCanvasRef = useRef(null);
  const lateralPositionCanvasRef = useRef(null);
  const longitudinalPositionCanvasRef = useRef(null);
  const kinematicSteeringAngleCanvasRef = useRef(null);
  const pathCurvatureCanvasRef = useRef(null);

  const chartRef2 = useRef(null);
  const pitchAngleCanvasRef2 = useRef(null);
  const lateralPositionCanvasRef2 = useRef(null);
  const longitudinalPositionCanvasRef2 = useRef(null);
  const kinematicSteeringAngleCanvasRef2 = useRef(null);
  const pathCurvatureCanvasRef2 = useRef(null);

  const [isGeometryTrue, setIsGeometryTrue] = useState(true);
  const [isSituationTrue, setIsSituationTrue] = useState(true);
  const [isDifficultyTrue, setIsDifficultyTrue] = useState(true);
  const [isSolutionTrue, setIsSolutionTrue] = useState(true);

  const [lig, setLig] = useState(false);

  const [situationIndex, setSituationIndex] = useState(0);
  const [difficultyIndex, setDifficultyIndex] = useState(0);
  const [solutionIndex, setSolutionIndex] = useState(0);

  const increaseOrDecrease = ["Increase", "Decrease"];
  const [increaseOrDecreaseVector, setIncreaseOrDecreaseVector] = useState("");
  const [levelOfDifficultyVector, setLevelOfDifficultyVector] = useState("");

  const [okk, setOkk] = useState(true);

  const [wheelbase, setWheelbase] = useState(1380);
  const [caster, setCaster] = useState(23);
  const [forward, setForward] = useState(29.7);
  const [front, setFront] = useState(560);
  const [rear, setRear] = useState(602);
  const [frontwheel, setFrontwheel] = useState(431.8);
  const [rearwheel, setRearwheel] = useState(431.8);

  const [metricaAntigaWheel, setMetricaAntigaWheel] = useState("");
  const [metricaAntigaCaster, setMetricaAntigaCaster] = useState("");
  const [metricaAntigaForward, setMetricaAntigaForward] = useState("");

  const [isSelectedSituation, setIsSelectedSituation] = useState(-1);
  const [isSelectedDifficulty, setIsSelectedDifficulty] = useState(-1);
  const [isSelectedSolution, setIsSelectedSolution] = useState(-1);

  const [showMetrics, setShowMetrics] = useState(true);

  const [chartInstance, setChartInstance] = useState(null);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [g, setG] = useState("");
  const [e, setE] = useState("");
  const [f, setF] = useState("");
  const [a2, setA2] = useState("");
  const [b2, setB2] = useState("");
  const [c2, setC2] = useState("");
  const [g2, setG2] = useState("");
  const [e2, setE2] = useState("");
  const [f2, setF2] = useState("");

  const [originalData, setOriginalData] = useState({
    wheelbase,
    caster,
    forward,
    angles: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
    anglesRoll: [
      0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 27.5, 30, 32.5, 35,
      37.5, 40, 42.5, 45,
    ],
    a,
    b,
    c,
    g,
    e,
    f,
    a2,
    b2,
    c2,
    g2,
    e2,
    f2,
  });
  const [updatedData, setUpdatedData] = useState({
    wheelbase,
    caster,
    forward,
    angles: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
    anglesRoll: [
      0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 27.5, 30, 32.5, 35,
      37.5, 40, 42.5,
    ],
    a,
    b,
    c,
    g,
    e,
    f,
    a2,
    b2,
    c2,
    g2,
    e2,
    f2,
  });

  const [currentChartIndex, setCurrentChartIndex] = useState(0);

  const δ = 20;
  const p = wheelbase;
  const ε = caster;
  const d = forward;
  const D_f = front;
  const D_r = rear;
  const d_f = frontwheel;
  const d_r = rearwheel;
  const φ = Math.PI / 4;

  const R_f = D_f / 2;
  const R_r = D_r / 2;
  const r_f = d_f / 2;
  const r_r = d_r / 2;
  const t_f = (R_f - r_f) / 2;
  const t_r = (R_r - r_r) / 2;
  const ρ_f = R_f - t_f;
  const ρ_r = R_r - t_r;

  const [dhValuesData, setDhValuesData] = useState([]);
  const [pitchAngleData, setPitchAngleData] = useState([]);
  const [lateralPositionData, setLateralPositionData] = useState([]);
  const [longitudinalPositionData, setLongitudinalPositionData] = useState([]);
  const [kinematicSteeringAngleData, setKinematicSteeringAngleData] = useState(
    []
  );
  const [pathCurvatureData, setPathCurvatureData] = useState([]);

  const [dhValuesData2, setDhValuesData2] = useState([]);
  const [pitchAngleData2, setPitchAngleData2] = useState([]);
  const [lateralPositionData2, setLateralPositionData2] = useState([]);
  const [longitudinalPositionData2, setLongitudinalPositionData2] = useState(
    []
  );
  const [kinematicSteeringAngleData2, setKinematicSteeringAngleData2] =
    useState([]);
  const [pathCurvatureData2, setPathCurvatureData2] = useState([]);

  function calculateSteeringHeadLowering(R_f, δ, ε, d) {
    const dhValues = [];

    originalData.angles.forEach((angle) => {
      const radians = (Math.PI / 180) * angle;
      const sinδ = Math.sin(radians);
      const sinε = Math.sin(ε);
      const cosδ = Math.cos(radians);

      const dh =
        R_f * (1 - Math.sqrt(1 - sinδ ** 2 * sinε ** 2)) -
        d * sinε * (1 - cosδ);

      dhValues.push(dh);
    });

    return dhValues;
  }

  function calculateSteeringHeadLowering2(R_f, δ, ε, d) {
    const dhValues2 = [];

    originalData.anglesRoll.forEach((angle) => {
      const radians = (Math.PI / 180) * angle;
      const sinδ = Math.sin(δ);
      const sinε = Math.sin(ε);
      const cosδ = Math.cos(δ);

      const dh =
        R_f * (1 - Math.sqrt(1 - sinδ ** 2 * sinε ** 2)) -
        d * sinε * (1 - cosδ);

      dhValues2.push(dh);
    });

    return dhValues2;
  }

  function calculatePitchAngle(angles, ε, δ, φ, p, d, t_f, t_r, ρ_f) {
    const pitchAngles = [];

    angles.forEach((angle) => {
      const radians = (Math.PI / 180) * angle;

      const c1 = d * Math.sin(ε) * (1 - Math.cos(radians)) + t_r - t_f;

      const β_ =
        ε +
        Math.atan(
          (Math.sin(radians) * Math.tan(φ) - Math.sin(ε) * Math.cos(radians)) /
            Math.cos(ε)
        );

      const c2 =
        ρ_f *
        (Math.cos(ε) * Math.cos(β_ - ε) -
          Math.cos(radians) * Math.sin(ε) * Math.sin(β_ - ε) -
          1);

      const c3 =
        d * Math.sin(radians) + ρ_f * Math.sin(radians) * Math.sin(β_ - ε);

      const c4 = p - d * Math.cos(ε) * (1 - Math.cos(radians));

      const c5 =
        ρ_f *
        (Math.sin(ε) * Math.cos(β_ - ε) +
          Math.cos(radians) * Math.cos(ε) * Math.sin(β_ - ε));

      const μ =
        ((c1 + c2) * Math.cos(φ) + c3 * Math.sin(φ) + t_f - t_r) /
        ((c4 + c5) * Math.cos(φ));

      pitchAngles.push(μ);
    });

    return pitchAngles;
  }

  function calculatePitchAngle2(angles, ε, δ, φ, p, d, t_f, t_r, ρ_f) {
    const pitchAngles2 = [];

    angles.forEach((angle) => {
      const radians = (Math.PI / 180) * angle;

      const c1 = d * Math.sin(ε) * (1 - Math.cos(δ)) + t_r - t_f;

      const β_ =
        ε +
        Math.atan(
          (Math.sin(δ) * Math.tan(radians) - Math.sin(ε) * Math.cos(δ)) /
            Math.cos(ε)
        );

      const c2 =
        ρ_f *
        (Math.cos(ε) * Math.cos(β_ - ε) -
          Math.cos(δ) * Math.sin(ε) * Math.sin(β_ - ε) -
          1);

      const c3 = d * Math.sin(δ) + ρ_f * Math.sin(δ) * Math.sin(β_ - ε);

      const c4 = p - d * Math.cos(ε) * (1 - Math.cos(δ));

      const c5 =
        ρ_f *
        (Math.sin(ε) * Math.cos(β_ - ε) +
          Math.cos(δ) * Math.cos(ε) * Math.sin(β_ - ε));

      const μ =
        ((c1 + c2) * Math.cos(radians) + c3 * Math.sin(radians) + t_f - t_r) /
        ((c4 + c5) * Math.cos(radians));

      pitchAngles2.push(μ);
    });

    return pitchAngles2;
  }

  function calculateLateralPosition(angles, ε, δ, φ, p, d, t_f, t_r, ρ_f) {
    const lateralPositions = [];

    angles.forEach((angle) => {
      const radians = (Math.PI / 180) * angle;

      const c1 = d * Math.sin(ε) * (1 - Math.cos(radians)) + t_r - t_f;

      const β_ =
        ε +
        Math.atan(
          (Math.sin(radians) * Math.tan(φ) - Math.sin(ε) * Math.cos(radians)) /
            Math.cos(ε)
        );

      const c2 =
        ρ_f *
        (Math.cos(ε) * Math.cos(β_ - ε) -
          Math.cos(radians) * Math.sin(ε) * Math.sin(β_ - ε) -
          1);

      const c3 =
        d * Math.sin(radians) + ρ_f * Math.sin(radians) * Math.sin(β_ - ε);

      const c4 = p - d * Math.cos(ε) * (1 - Math.cos(radians));

      const c5 =
        ρ_f *
        (Math.sin(ε) * Math.cos(β_ - ε) +
          Math.cos(radians) * Math.cos(ε) * Math.sin(β_ - ε));

      const μ =
        ((c1 + c2) * Math.cos(φ) + c3 * Math.sin(φ) + t_f - t_r) /
        ((c4 + c5) * Math.cos(φ));

      const x_pf = (c1 + c2) * Math.sin(μ) + (c4 + c5) * Math.cos(μ);

      lateralPositions.push(x_pf);
    });

    return lateralPositions;
  }

  function calculateLateralPosition2(angles, ε, δ, φ, p, d, t_f, t_r, ρ_f) {
    const lateralPositions2 = [];

    angles.forEach((angle) => {
      const radians = (Math.PI / 180) * angle;

      const c1 = d * Math.sin(ε) * (1 - Math.cos(δ)) + t_r - t_f;

      const β_ =
        ε +
        Math.atan(
          (Math.sin(δ) * Math.tan(radians) - Math.sin(ε) * Math.cos(δ)) /
            Math.cos(ε)
        );

      const c2 =
        ρ_f *
        (Math.cos(ε) * Math.cos(β_ - ε) -
          Math.cos(δ) * Math.sin(ε) * Math.sin(β_ - ε) -
          1);

      const c3 = d * Math.sin(δ) + ρ_f * Math.sin(δ) * Math.sin(β_ - ε);

      const c4 = p - d * Math.cos(ε) * (1 - Math.cos(δ));

      const c5 =
        ρ_f *
        (Math.sin(ε) * Math.cos(β_ - ε) +
          Math.cos(δ) * Math.cos(ε) * Math.sin(β_ - ε));

      const μ =
        ((c1 + c2) * Math.cos(radians) + c3 * Math.sin(radians) + t_f - t_r) /
        ((c4 + c5) * Math.cos(radians));

      const x_pf = (c1 + c2) * Math.sin(μ) + (c4 + c5) * Math.cos(μ);

      lateralPositions2.push(x_pf);
    });

    return lateralPositions2;
  }
  function calculateLongitudinalPosition(angles, ε, δ, φ, p, d, t_f, t_r, ρ_f) {
    const longitudinalPositions = [];

    angles.forEach((angle) => {
      const radians = (Math.PI / 180) * angle;

      const c1 = d * Math.sin(ε) * (1 - Math.cos(radians)) + t_r - t_f;

      const β_ =
        ε +
        Math.atan(
          (Math.sin(radians) * Math.tan(φ) - Math.sin(ε) * Math.cos(radians)) /
            Math.cos(ε)
        );

      const c2 =
        ρ_f *
        (Math.cos(ε) * Math.cos(β_ - ε) -
          Math.cos(radians) * Math.sin(ε) * Math.sin(β_ - ε) -
          1);

      const c3 =
        d * Math.sin(radians) + ρ_f * Math.sin(radians) * Math.sin(β_ - ε);

      const c4 = p - d * Math.cos(ε) * (1 - Math.cos(radians));

      const c5 =
        ρ_f *
        (Math.sin(ε) * Math.cos(β_ - ε) +
          Math.cos(radians) * Math.cos(ε) * Math.sin(β_ - ε));

      const μ =
        ((c1 + c2) * Math.cos(φ) + c3 * Math.sin(φ) + t_f - t_r) /
        ((c4 + c5) * Math.cos(φ));

      const x_pf = (c1 + c2) * Math.cos(μ) - (c4 + c5) * Math.sin(μ);

      longitudinalPositions.push(x_pf);
    });

    return longitudinalPositions;
  }
  function calculateLongitudinalPosition2(
    angles,
    ε,
    δ,
    φ,
    p,
    d,
    t_f,
    t_r,
    ρ_f
  ) {
    const longitudinalPositions2 = [];

    angles.forEach((angle) => {
      const radians = (Math.PI / 180) * angle;

      const c1 = d * Math.sin(ε) * (1 - Math.cos(δ)) + t_r - t_f;

      const β_ =
        ε +
        Math.atan(
          (Math.sin(δ) * Math.tan(radians) - Math.sin(ε) * Math.cos(δ)) /
            Math.cos(ε)
        );

      const c2 =
        ρ_f *
        (Math.cos(ε) * Math.cos(β_ - ε) -
          Math.cos(δ) * Math.sin(ε) * Math.sin(β_ - ε) -
          1);

      const c3 = d * Math.sin(δ) + ρ_f * Math.sin(δ) * Math.sin(β_ - ε);

      const c4 = p - d * Math.cos(ε) * (1 - Math.cos(δ));

      const c5 =
        ρ_f *
        (Math.sin(ε) * Math.cos(β_ - ε) +
          Math.cos(δ) * Math.cos(ε) * Math.sin(β_ - ε));

      const μ =
        ((c1 + c2) * Math.cos(radians) + c3 * Math.sin(radians) + t_f - t_r) /
        ((c4 + c5) * Math.cos(radians));

      const x_pf = (c1 + c2) * Math.cos(μ) - (c4 + c5) * Math.sin(μ);

      longitudinalPositions2.push(x_pf);
    });

    return longitudinalPositions2;
  }

  function calculateKinematicSteeringAngle(
    angles,
    ε,
    δ,
    φ,
    p,
    d,
    t_f,
    t_r,
    ρ_f
  ) {
    const kinematicSteeringAngles = [];

    angles.forEach((angle) => {
      const radians = (Math.PI / 180) * angle;

      const β_ =
        ε +
        Math.atan(
          (Math.sin(radians) * Math.tan(φ) - Math.sin(ε) * Math.cos(radians)) /
            Math.cos(ε)
        );

      const c1 = d * Math.sin(ε) * (1 - Math.cos(radians)) + t_r - t_f;

      const c2 =
        ρ_f *
        (Math.cos(ε) * Math.cos(β_ - ε) -
          Math.cos(radians) * Math.sin(ε) * Math.sin(β_ - ε) -
          1);

      const c3 =
        d * Math.sin(radians) + ρ_f * Math.sin(radians) * Math.sin(β_ - ε);

      const c4 = p - d * Math.cos(ε) * (1 - Math.cos(radians));

      const c5 =
        ρ_f *
        (Math.sin(ε) * Math.cos(β_ - ε) +
          Math.cos(radians) * Math.cos(ε) * Math.sin(β_ - ε));

      const μ =
        ((c1 + c2) * Math.cos(φ) + c3 * Math.sin(φ) + t_f - t_r) /
        ((c4 + c5) * Math.cos(φ));

      kinematicSteeringAngles.push(μ);
    });

    return kinematicSteeringAngles;
  }
  function calculateKinematicSteeringAngle2(
    angles,
    ε,
    δ,
    φ,
    p,
    d,
    t_f,
    t_r,
    ρ_f
  ) {
    const kinematicSteeringAngles2 = [];

    angles.forEach((angle) => {
      const radians = (Math.PI / 180) * angle;

      const β_ =
        ε +
        Math.atan(
          (Math.sin(δ) * Math.tan(radians) - Math.sin(ε) * Math.cos(δ)) /
            Math.cos(ε)
        );

      const c1 = d * Math.sin(ε) * (1 - Math.cos(δ)) + t_r - t_f;

      const c2 =
        ρ_f *
        (Math.cos(ε) * Math.cos(β_ - ε) -
          Math.cos(δ) * Math.sin(ε) * Math.sin(β_ - ε) -
          1);

      const c3 = d * Math.sin(δ) + ρ_f * Math.sin(δ) * Math.sin(β_ - ε);

      const c4 = p - d * Math.cos(ε) * (1 - Math.cos(δ));

      const c5 =
        ρ_f *
        (Math.sin(ε) * Math.cos(β_ - ε) +
          Math.cos(δ) * Math.cos(ε) * Math.sin(β_ - ε));

      const μ =
        ((c1 + c2) * Math.cos(radians) + c3 * Math.sin(radians) + t_f - t_r) /
        ((c4 + c5) * Math.cos(radians));

      kinematicSteeringAngles2.push(μ);
    });

    return kinematicSteeringAngles2;
  }

  function calculatePathCurvature(angles, ε, δ, φ, p, d, t_f, t_r, ρ_f) {
    const pathCurvature = [];

    angles.forEach((angle) => {
      const radians = (Math.PI / 180) * angle;

      const β_ =
        ε +
        Math.atan(
          (Math.sin(radians) * Math.tan(φ) - Math.sin(ε) * Math.cos(radians)) /
            Math.cos(ε)
        );

      const c1 = d * Math.sin(ε) * (1 - Math.cos(radians)) + t_r - t_f;

      const c2 =
        ρ_f *
        (Math.cos(ε) * Math.cos(β_ - ε) -
          Math.cos(radians) * Math.sin(ε) * Math.sin(β_ - ε) -
          1);

      const c3 =
        d * Math.sin(radians) + ρ_f * Math.sin(radians) * Math.sin(β_ - ε);

      const c4 = p - d * Math.cos(ε) * (1 - Math.cos(radians));

      const c5 =
        ρ_f *
        (Math.sin(ε) * Math.cos(β_ - ε) +
          Math.cos(radians) * Math.cos(ε) * Math.sin(β_ - ε));

      const μ =
        ((c1 + c2) * Math.cos(φ) + c3 * Math.sin(φ) + t_f - t_r) /
        ((c4 + c5) * Math.cos(φ));

      const k = (μ * Math.sin(φ)) / p;

      pathCurvature.push(k);
    });

    return pathCurvature;
  }

  function calculatePathCurvature2(angles, ε, δ, φ, p, d, t_f, t_r, ρ_f) {
    const pathCurvature2 = [];

    angles.forEach((angle) => {
      const radians = (Math.PI / 180) * angle;

      const β_ =
        ε +
        Math.atan(
          (Math.sin(δ) * Math.tan(radians) - Math.sin(ε) * Math.cos(δ)) /
            Math.cos(ε)
        );

      const c1 = d * Math.sin(ε) * (1 - Math.cos(δ)) + t_r - t_f;

      const c2 =
        ρ_f *
        (Math.cos(ε) * Math.cos(β_ - ε) -
          Math.cos(δ) * Math.sin(ε) * Math.sin(β_ - ε) -
          1);

      const c3 = d * Math.sin(δ) + ρ_f * Math.sin(δ) * Math.sin(β_ - ε);

      const c4 = p - d * Math.cos(ε) * (1 - Math.cos(δ));

      const c5 =
        ρ_f *
        (Math.sin(ε) * Math.cos(β_ - ε) +
          Math.cos(δ) * Math.cos(ε) * Math.sin(β_ - ε));

      const μ =
        ((c1 + c2) * Math.cos(radians) + c3 * Math.sin(radians) + t_f - t_r) /
        ((c4 + c5) * Math.cos(radians));

      const k = (μ * Math.sin(radians)) / p;

      pathCurvature2.push(k);
    });

    return pathCurvature2;
  }

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

  useEffect(() => {
    // Função para calcular os dados com base nas variáveis atualizadas
    const updatedMetrics = { ...originalData };
    updatedMetrics.wheelbase = wheelbase;
    updatedMetrics.caster = caster;
    updatedMetrics.forward = forward;
    updatedMetrics.angles = originalData.angles; // Use os ângulos originais

    // Defina os dados atualizados
    console.log(updatedMetrics);
    setUpdatedData(updatedMetrics);

    console.log(caster);
    console.log(updatedData);
    function calculateData() {
      const steerings = calculateSteeringHeadLowering(R_f, δ, ε, d);
      setDhValuesData(steerings);
      updatedMetrics.a = steerings;

      const pitchAngles = calculatePitchAngle(
        originalData.angles,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setPitchAngleData(pitchAngles);
      updatedMetrics.b = pitchAngles;

      const lateralPositions = calculateLateralPosition(
        originalData.angles,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setLateralPositionData(lateralPositions);
      updatedMetrics.c = lateralPositions;

      const longitudinalPositions = calculateLongitudinalPosition(
        originalData.angles,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setLongitudinalPositionData(longitudinalPositions);
      updatedMetrics.g = longitudinalPositions;

      const kinematicSteeringAngles = calculateKinematicSteeringAngle(
        originalData.angles,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setKinematicSteeringAngleData(kinematicSteeringAngles);
      updatedMetrics.e = kinematicSteeringAngles;

      const pathCurvatures = calculatePathCurvature(
        originalData.angles,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setPathCurvatureData(pathCurvatures);
      updatedMetrics.f = pathCurvatures;

      const steerings2 = calculateSteeringHeadLowering2(R_f, δ, ε, d);
      setDhValuesData2(steerings2);
      updatedMetrics.a2 = steerings2;

      const pitchAngles2 = calculatePitchAngle2(
        originalData.anglesRoll,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setPitchAngleData2(pitchAngles2);
      updatedMetrics.b2 = pitchAngles2;

      const lateralPositions2 = calculateLateralPosition2(
        originalData.anglesRoll,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setLateralPositionData2(lateralPositions2);
      updatedMetrics.c2 = lateralPositions2;

      const longitudinalPositions2 = calculateLongitudinalPosition2(
        originalData.anglesRoll,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setLongitudinalPositionData2(longitudinalPositions2);
      updatedMetrics.g2 = longitudinalPositions2;

      const kinematicSteeringAngles2 = calculateKinematicSteeringAngle2(
        originalData.anglesRoll,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setKinematicSteeringAngleData2(kinematicSteeringAngles2);
      updatedMetrics.e2 = kinematicSteeringAngles2;

      const pathCurvatures2 = calculatePathCurvature2(
        originalData.anglesRoll,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setPathCurvatureData2(pathCurvatures2);
      updatedMetrics.f2 = pathCurvatures2;

      if (okk) {
        setOriginalData(updatedMetrics);
        console.log("deeded");
      }
      setUpdatedData(updatedMetrics);
    }

    calculateData();

    // Verifique se o gráfico deve ser atualizado (por exemplo, quando a aba atual muda)
    console.log(originalData.a);
    console.log(updatedData.a);
  }, [wheelbase, caster, forward, currentChartIndex]);

  function apply(index) {
    const updatedMetrics = { ...originalData };

    if (index === 1) {
      setMetricaAntigaWheel(wheelbase);
      increaseOrDecrease[increaseOrDecreaseVector[0]].includes("Increase")
        ? setWheelbase(Number(wheelbase) + 5 * levelOfDifficultyVector)
        : setWheelbase(Number(wheelbase) - 5 * levelOfDifficultyVector);
    }
    if (index === 2) {
      setMetricaAntigaCaster(caster);
      increaseOrDecrease[increaseOrDecreaseVector[1]].includes("Increase")
        ? setCaster(Number(caster) + 0.5 * levelOfDifficultyVector)
        : setCaster(Number(caster) - 0.5 * levelOfDifficultyVector);
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
    setOkk(false);

    if (chartInstance) {
      if (updatedMetrics.angles.length > 0) {
        chartInstance.data.labels = updatedMetrics.angles;
        chartInstance.data.datasets[1].data = updatedMetrics.dhValues;
      } else {
        chartInstance.data.labels = [];
        chartInstance.data.datasets[1].data = [];
      }
      chartInstance.update();
    }
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

  const [chartInstances, setChartInstances] = useState({
    chart: null,
    pitchAngle: null,
    lateralPosition: null,
    longitudinalPosition: null,
    kinematicSteeringAngle: null,
    pathCurvature: null,
  });

  function executa(indice) {
    setCurrentChartIndex(indice);
    console.log(`aqui esta idnicee: ${indice}`);
    const updatedMetrics = { ...originalData };
    updatedMetrics.wheelbase = wheelbase;
    updatedMetrics.caster = caster;
    updatedMetrics.forward = forward;
    updatedMetrics.angles = originalData.angles; // Use os ângulos originais
    updatedMetrics.anglesRoll = originalData.anglesRoll;

    // Defina os dados atualizados
    console.log(updatedMetrics);
    setUpdatedData(updatedMetrics);

    console.log(caster);
    console.log(updatedData);
    console.log(caster);
    function calculateData() {
      const steerings = calculateSteeringHeadLowering(R_f, δ, ε, d);
      setDhValuesData(steerings);
      updatedMetrics.a = steerings;

      const pitchAngles = calculatePitchAngle(
        originalData.angles,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setPitchAngleData(pitchAngles);
      updatedMetrics.b = pitchAngles;

      const lateralPositions = calculateLateralPosition(
        originalData.angles,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setLateralPositionData(lateralPositions);
      updatedMetrics.c = lateralPositions;

      const longitudinalPositions = calculateLongitudinalPosition(
        originalData.angles,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setLongitudinalPositionData(longitudinalPositions);
      updatedMetrics.g = longitudinalPositions;

      const kinematicSteeringAngles = calculateKinematicSteeringAngle(
        originalData.angles,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setKinematicSteeringAngleData(kinematicSteeringAngles);
      updatedMetrics.e = kinematicSteeringAngles;

      const pathCurvatures = calculatePathCurvature(
        originalData.angles,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setPathCurvatureData(pathCurvatures);
      updatedMetrics.f = pathCurvatures;

      const steerings2 = calculateSteeringHeadLowering2(R_f, δ, ε, d);
      setDhValuesData2(steerings2);
      updatedMetrics.a2 = steerings2;

      const pitchAngles2 = calculatePitchAngle2(
        originalData.anglesRoll,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setPitchAngleData2(pitchAngles2);
      updatedMetrics.b2 = pitchAngles2;

      const lateralPositions2 = calculateLateralPosition2(
        originalData.anglesRoll,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setLateralPositionData2(lateralPositions2);
      updatedMetrics.c2 = lateralPositions2;

      const longitudinalPositions2 = calculateLongitudinalPosition2(
        originalData.anglesRoll,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setLongitudinalPositionData2(longitudinalPositions2);
      updatedMetrics.g2 = longitudinalPositions2;

      const kinematicSteeringAngles2 = calculateKinematicSteeringAngle2(
        originalData.anglesRoll,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setKinematicSteeringAngleData2(kinematicSteeringAngles2);
      updatedMetrics.e2 = kinematicSteeringAngles2;

      const pathCurvatures2 = calculatePathCurvature2(
        originalData.anglesRoll,
        ε,
        δ,
        φ,
        p,
        d,
        t_f,
        t_r,
        ρ_f
      );
      setPathCurvatureData2(pathCurvatures2);
      updatedMetrics.f2 = pathCurvatures2;

      if (okk) {
        setOriginalData(updatedMetrics);
        console.log("deeded");
      }
      setUpdatedData(updatedMetrics);
      console.log("laala");
      console.log(updatedMetrics);
    }

    calculateData();

    // Verifique se o gráfico deve ser atualizado (por exemplo, quando a aba atual muda)
    console.log(originalData.a);
    console.log(updatedData.a);
    if (indice === 0) {
      if (lig && chartInstances[currentChartIndex]) {
        chartInstances[currentChartIndex].destroy();
      }
      if (chartRef.current) {
        const ctx = chartRef.current.getContext("2d");
        const ctx2 = chartRef2.current.getContext("2d");
        if (ctx) {
          // Configurar o novo gráfico
          const newChart = new Chart(ctx, {
            type: "line",
            data: {
              labels: originalData.angles,
              datasets: [
                {
                  label: "Original Data",
                  data: originalData.a,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                  fill: false,
                },
                {
                  label: "Updated Data",
                  data: updatedData.a, // Linha para os dados atualizados
                  borderColor: "rgba(255, 0, 0, 1)",
                  borderWidth: 1,
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Direction Angle (°)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Steering Head Lowering (mm)",
                  },
                },
              },
            },
          });

          const newChart2 = new Chart(ctx2, {
            type: "line",
            data: {
              labels: originalData.anglesRoll,
              datasets: [
                {
                  label: "Original Data",
                  data: originalData.a2,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                  fill: false,
                },
                {
                  label: "Updated Data",
                  data: updatedData.a2, // Linha para os dados atualizados
                  borderColor: "rgba(255, 0, 0, 1)",
                  borderWidth: 1,
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Roll Angle (°)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Steering Head Lowering (mm)",
                  },
                },
              },
            },
          });

          setChartInstances({
            ...chartInstances,
            [currentChartIndex]: newChart,
          });
          setLig(true);
        }
      }
    }

    if (indice === 1) {
      if (lig && chartInstances[currentChartIndex]) {
        chartInstances[currentChartIndex].destroy();
      }
      if (pitchAngleCanvasRef.current) {
        const ctx = pitchAngleCanvasRef.current.getContext("2d");
        const ctx2 = pitchAngleCanvasRef2.current.getContext("2d");
        if (ctx) {
          // Configurar o novo gráfico
          const newChart = new Chart(ctx, {
            type: "line",
            data: {
              labels: originalData.angles,
              datasets: [
                {
                  label: "Original Data",
                  data: originalData.b,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                  fill: false,
                },
                {
                  label: "Updated Data",
                  data: updatedData.b, // Linha para os dados atualizados
                  borderColor: "rgba(255, 0, 0, 1)",
                  borderWidth: 1,
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Direction Angle (°)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Pitch angle (°)",
                  },
                },
              },
            },
          });

          const newChart2 = new Chart(ctx2, {
            type: "line",
            data: {
              labels: originalData.anglesRoll,
              datasets: [
                {
                  label: "Original Data",
                  data: originalData.b2,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                  fill: false,
                },
                {
                  label: "Updated Data",
                  data: updatedData.b2, // Linha para os dados atualizados
                  borderColor: "rgba(255, 0, 0, 1)",
                  borderWidth: 1,
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Roll Angle (°)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Pitch angle (°)",
                  },
                },
              },
            },
          });

          setChartInstances({
            ...chartInstances,
            [currentChartIndex]: newChart,
          });
          setLig(true);
        }
      }
    }

    if (indice === 2) {
      if (lig && chartInstances[currentChartIndex]) {
        chartInstances[currentChartIndex].destroy();
      }
      if (lateralPositionCanvasRef.current) {
        const ctx = lateralPositionCanvasRef.current.getContext("2d");
        const ctx2 = lateralPositionCanvasRef2.current.getContext("2d");
        if (ctx) {
          // Configurar o novo gráfico
          const newChart = new Chart(ctx, {
            type: "line",
            data: {
              labels: originalData.angles,
              datasets: [
                {
                  label: "Original Data",
                  data: originalData.c,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                  fill: false,
                },
                {
                  label: "Updated Data",
                  data: updatedData.c, // Linha para os dados atualizados
                  borderColor: "rgba(255, 0, 0, 1)",
                  borderWidth: 1,
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Direction Angle (°)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Lateral Position (mm)",
                  },
                },
              },
            },
          });

          const newChart2 = new Chart(ctx2, {
            type: "line",
            data: {
              labels: originalData.anglesRoll,
              datasets: [
                {
                  label: "Original Data",
                  data: originalData.c2,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                  fill: false,
                },
                {
                  label: "Updated Data",
                  data: updatedData.c2, // Linha para os dados atualizados
                  borderColor: "rgba(255, 0, 0, 1)",
                  borderWidth: 1,
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Roll Angle (°)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Lateral Position (mm)",
                  },
                },
              },
            },
          });

          setChartInstances({
            ...chartInstances,
            [currentChartIndex]: newChart,
          });
          setLig(true);
        }
      }
    }

    if (indice === 3) {
      if (lig && chartInstances[currentChartIndex]) {
        chartInstances[currentChartIndex].destroy();
      }
      if (longitudinalPositionCanvasRef.current) {
        const ctx = longitudinalPositionCanvasRef.current.getContext("2d");
        const ctx2 = longitudinalPositionCanvasRef2.current.getContext("2d");
        if (ctx) {
          // Configurar o novo gráfico
          const newChart = new Chart(ctx, {
            type: "line",
            data: {
              labels: originalData.angles,
              datasets: [
                {
                  label: "Original Data",
                  data: originalData.g,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                  fill: false,
                },
                {
                  label: "Updated Data",
                  data: updatedData.g, // Linha para os dados atualizados
                  borderColor: "rgba(255, 0, 0, 1)",
                  borderWidth: 1,
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Direction Angle (°)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Longitudinal Position (mm)",
                  },
                },
              },
            },
          });

          const newChart2 = new Chart(ctx2, {
            type: "line",
            data: {
              labels: originalData.anglesRoll,
              datasets: [
                {
                  label: "Original Data",
                  data: originalData.g2,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                  fill: false,
                },
                {
                  label: "Updated Data",
                  data: updatedData.g2, // Linha para os dados atualizados
                  borderColor: "rgba(255, 0, 0, 1)",
                  borderWidth: 1,
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Rolls Angle (°)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Longitudinal Position (mm)",
                  },
                },
              },
            },
          });

          setChartInstances({
            ...chartInstances,
            [currentChartIndex]: newChart,
          });
          setLig(true);
        }
      }
    }

    if (indice === 4) {
      if (lig && chartInstances[currentChartIndex]) {
        chartInstances[currentChartIndex].destroy();
      }
      if (kinematicSteeringAngleCanvasRef.current) {
        const ctx = kinematicSteeringAngleCanvasRef.current.getContext("2d");
        const ctx2 = kinematicSteeringAngleCanvasRef2.current.getContext("2d");
        if (ctx) {
          // Configurar o novo gráfico
          const newChart = new Chart(ctx, {
            type: "line",
            data: {
              labels: originalData.angles,
              datasets: [
                {
                  label: "Original Data",
                  data: originalData.e,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                  fill: false,
                },
                {
                  label: "Updated Data",
                  data: updatedData.e, // Linha para os dados atualizados
                  borderColor: "rgba(255, 0, 0, 1)",
                  borderWidth: 1,
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Direction Angle (°)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Kinematic Steering Angle (°)",
                  },
                },
              },
            },
          });

          const newChart2 = new Chart(ctx2, {
            type: "line",
            data: {
              labels: originalData.anglesRoll,
              datasets: [
                {
                  label: "Original Data",
                  data: originalData.e2,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                  fill: false,
                },
                {
                  label: "Updated Data",
                  data: updatedData.e2, // Linha para os dados atualizados
                  borderColor: "rgba(255, 0, 0, 1)",
                  borderWidth: 1,
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Roll Angle (°)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Kinematic Steering Angle (°)",
                  },
                },
              },
            },
          });

          setChartInstances({
            ...chartInstances,
            [currentChartIndex]: newChart,
          });
          setLig(true);
        }
      }
    }

    if (indice === 5) {
      if (lig && chartInstances[currentChartIndex]) {
        chartInstances[currentChartIndex].destroy();
      }
      if (pathCurvatureCanvasRef.current) {
        const ctx = pathCurvatureCanvasRef.current.getContext("2d");
        const ctx2 = pathCurvatureCanvasRef2.current.getContext("2d");
        if (ctx) {
          // Configurar o novo gráfico
          const newChart = new Chart(ctx, {
            type: "line",
            data: {
              labels: originalData.angles,
              datasets: [
                {
                  label: "Original Data",
                  data: originalData.f,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                  fill: false,
                },
                {
                  label: "Updated Data",
                  data: updatedData.f, // Linha para os dados atualizados
                  borderColor: "rgba(255, 0, 0, 1)",
                  borderWidth: 1,
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Direction Angle (°)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Path Curvature (1/mm)",
                  },
                },
              },
            },
          });

          const newChart2 = new Chart(ctx2, {
            type: "line",
            data: {
              labels: originalData.anglesRoll,
              datasets: [
                {
                  label: "Original Data",
                  data: originalData.f2,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 1,
                  fill: false,
                },
                {
                  label: "Updated Data",
                  data: updatedData.f2, // Linha para os dados atualizados
                  borderColor: "rgba(255, 0, 0, 1)",
                  borderWidth: 1,
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Roll Angle (°)",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Path Curvature (1/mm)",
                  },
                },
              },
            },
          });

          setChartInstances({
            ...chartInstances,
            [currentChartIndex]: newChart,
          });
          setLig(true);
        }
      }
    }
    setChartInstances({ ...chartInstances });
  }

  function navegar() {
    navigate(`/`);
  }

  function toggleView() {
    setShowMetrics(!showMetrics);
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
  console.log(originalData);
  console.log(updatedData);

  return (
    <>
      <PageContainer>
        <Header>
          <Logo>GUEPARDO</Logo>
          <BackButton onClick={navegar}>Home</BackButton>
        </Header>
        {isGeometryTrue ? (
          <ContentContainer>
            {showMetrics ? (
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
            ) : (
              <>
                <div>
                  {currentChartIndex === 0 ? (
                    <>
                      <canvas ref={chartRef} />
                      <canvas ref={chartRef2} />
                    </>
                  ) : currentChartIndex === 1 ? (
                    <>
                      <canvas ref={pitchAngleCanvasRef} />
                      <canvas ref={pitchAngleCanvasRef2} />
                    </>
                  ) : currentChartIndex === 2 ? (
                    <>
                      <canvas ref={lateralPositionCanvasRef} />
                      <canvas ref={lateralPositionCanvasRef2} />
                    </>
                  ) : currentChartIndex === 3 ? (
                    <>
                      <canvas ref={longitudinalPositionCanvasRef} />
                      <canvas ref={longitudinalPositionCanvasRef2} />
                    </>
                  ) : currentChartIndex === 4 ? (
                    <>
                      <canvas ref={kinematicSteeringAngleCanvasRef} />
                      <canvas ref={kinematicSteeringAngleCanvasRef2} />
                    </>
                  ) : currentChartIndex === 5 ? (
                    <>
                      <canvas ref={pathCurvatureCanvasRef} />
                      <canvas ref={pathCurvatureCanvasRef2} />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  {/* Botões para selecionar o gráfico */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <GraphicsNumberButton onClick={() => executa(0)}>
                      Steering Head Lowering
                    </GraphicsNumberButton>
                    <GraphicsNumberButton onClick={() => executa(1)}>
                      Pitch Angle
                    </GraphicsNumberButton>
                    <GraphicsNumberButton onClick={() => executa(2)}>
                      Lateral Position
                    </GraphicsNumberButton>
                    <GraphicsNumberButton onClick={() => executa(3)}>
                      Longitudinal Position
                    </GraphicsNumberButton>
                    <GraphicsNumberButton onClick={() => executa(4)}>
                      Kinematic Steering Angle
                    </GraphicsNumberButton>
                    <GraphicsNumberButton onClick={() => executa(5)}>
                      Path Curvature
                    </GraphicsNumberButton>
                  </div>
                </div>
              </>
            )}

            <GraphicsButton onClick={toggleView}>
              {showMetrics ? "See Graphic" : "Back to Metrics"}
            </GraphicsButton>
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
                  disabled={!situationIndex}
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
                  disabled={!difficultyIndex}
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
                  ? Number(wheelbase) + 5 * levelOfDifficultyVector
                  : Number(wheelbase) - 5 * levelOfDifficultyVector}
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
                  ? Number(caster) + 0.5 * levelOfDifficultyVector
                  : Number(caster) - 0.5 * levelOfDifficultyVector}
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
              <SituationNextButton
                onClick={() => apply(solutionIndex)}
                disabled={!solutionIndex}
              >
                Apply
              </SituationNextButton>
            </SituationDiv>
          </SituationContainer>
        ) : (
          ""
        )}
      </PageContainer>
    </>
  );
}
