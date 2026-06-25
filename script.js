// ============================================================
// QUESTION BANK  (JAMB & WAEC 1999–2025)
// ============================================================
const QB = {
  Physics: {
    topics: [
      "Mechanics",
      "Waves & Sound",
      "Optics & Light",
      "Electricity & Magnetism",
      "Heat & Thermodynamics",
      "Modern Physics",
      "Measurement & Units",
    ],
    questions: [
      {
        topic: "Mechanics",
        year: 1999,
        exam: "JAMB",
        q: "A body of mass 10 kg is acted upon by 50 N force. Acceleration?",
        opts: ["A) 0.2 m/s²", "B) 5 m/s²", "C) 50 m/s²", "D) 500 m/s²"],
        ans: 1,
        exp: "a=F/m=50/10=5 m/s²",
      },
      {
        topic: "Mechanics",
        year: 2001,
        exam: "JAMB",
        q: "Ball thrown up at 20 m/s. Max height? (g=10)",
        opts: ["A) 10 m", "B) 20 m", "C) 40 m", "D) 200 m"],
        ans: 1,
        exp: "v²=u²−2gh→h=400/20=20 m",
      },
      {
        topic: "Mechanics",
        year: 2003,
        exam: "JAMB",
        q: "Momentum equals:",
        opts: [
          "A) Force×time",
          "B) Mass×velocity",
          "C) Mass×acceleration",
          "D) Force×distance",
        ],
        ans: 1,
        exp: "p=mv",
      },
      {
        topic: "Mechanics",
        year: 2005,
        exam: "JAMB",
        q: "Car 1000 kg at 20 m/s. Kinetic energy:",
        opts: ["A) 100 kJ", "B) 200 kJ", "C) 400 kJ", "D) 20 kJ"],
        ans: 1,
        exp: "KE=½mv²=½×1000×400=200 kJ",
      },
      {
        topic: "Mechanics",
        year: 2007,
        exam: "JAMB",
        q: "Newton's first law is the law of:",
        opts: [
          "A) Conservation of energy",
          "B) Inertia",
          "C) Action and reaction",
          "D) Gravitation",
        ],
        ans: 1,
        exp: "Newton's 1st law = Law of Inertia",
      },
      {
        topic: "Mechanics",
        year: 2009,
        exam: "JAMB",
        q: "5 kg body falls freely for 3 s. Momentum on impact (g=10):",
        opts: ["A) 75 kg·m/s", "B) 150 kg·m/s", "C) 30 kg·m/s", "D) 15 kg·m/s"],
        ans: 1,
        exp: "v=30 m/s; p=mv=150 kg·m/s",
      },
      {
        topic: "Mechanics",
        year: 2011,
        exam: "JAMB",
        q: "Force 60 N acts 5 s. Impulse:",
        opts: ["A) 12 N·s", "B) 300 N·s", "C) 65 N·s", "D) 55 N·s"],
        ans: 1,
        exp: "Impulse=F×t=60×5=300 N·s",
      },
      {
        topic: "Mechanics",
        year: 2013,
        exam: "JAMB",
        q: "Work lifting 20 kg through 5 m (g=10):",
        opts: ["A) 1000 J", "B) 100 J", "C) 250 J", "D) 500 J"],
        ans: 0,
        exp: "W=mgh=20×10×5=1000 J",
      },
      {
        topic: "Mechanics",
        year: 2015,
        exam: "JAMB",
        q: "Pendulum length quadrupled. New period:",
        opts: ["A) T/2", "B) T", "C) 2T", "D) 4T"],
        ans: 2,
        exp: "T∝√L; L→4L gives T→2T",
      },
      {
        topic: "Mechanics",
        year: 2017,
        exam: "JAMB",
        q: "Which is a vector quantity?",
        opts: ["A) Speed", "B) Mass", "C) Temperature", "D) Force"],
        ans: 3,
        exp: "Force has magnitude and direction — it is a vector.",
      },
      {
        topic: "Mechanics",
        year: 2019,
        exam: "JAMB",
        q: "5 kg body at 3 m/s. Kinetic energy:",
        opts: ["A) 22.5 J", "B) 45 J", "C) 7.5 J", "D) 15 J"],
        ans: 0,
        exp: "KE=½mv²=½×5×9=22.5 J",
      },
      {
        topic: "Mechanics",
        year: 2021,
        exam: "JAMB",
        q: "Component of 100 N weight along 30° incline:",
        opts: ["A) 50 N", "B) 86.6 N", "C) 100 N", "D) 57.7 N"],
        ans: 0,
        exp: "W sin30°=100×0.5=50 N",
      },
      {
        topic: "Mechanics",
        year: 2023,
        exam: "JAMB",
        q: "Unit of power equivalent to:",
        opts: ["A) J/s", "B) N·m", "C) kg·m²", "D) J·s"],
        ans: 0,
        exp: "Power=Work/Time=J/s=Watt",
      },
      {
        topic: "Mechanics",
        year: 2000,
        exam: "WAEC",
        q: "Object in circle r=5 m at 10 m/s. Centripetal acceleration:",
        opts: ["A) 2 m/s²", "B) 20 m/s²", "C) 50 m/s²", "D) 0.5 m/s²"],
        ans: 1,
        exp: "a=v²/r=100/5=20 m/s²",
      },
      {
        topic: "Mechanics",
        year: 2002,
        exam: "WAEC",
        q: "Bullet 50 g at 400 m/s from 2 kg gun. Gun recoil velocity:",
        opts: ["A) 10 m/s", "B) 8 m/s", "C) 20 m/s", "D) 16 m/s"],
        ans: 0,
        exp: "Conservation of momentum: 0=0.05×400+2v → v=10 m/s",
      },
      {
        topic: "Mechanics",
        year: 2004,
        exam: "WAEC",
        q: "Work by force F at angle θ over displacement s:",
        opts: ["A) Fs", "B) F/s", "C) Fs cosθ", "D) Fs sinθ"],
        ans: 2,
        exp: "W=Fs cosθ",
      },
      {
        topic: "Mechanics",
        year: 2006,
        exam: "WAEC",
        q: "Friction always acts:",
        opts: [
          "A) Perpendicular to motion",
          "B) In direction of motion",
          "C) Opposite to motion",
          "D) Vertically downward",
        ],
        ans: 2,
        exp: "Friction opposes relative motion.",
      },
      {
        topic: "Mechanics",
        year: 2008,
        exam: "WAEC",
        q: "Machine: VR=5, efficiency=80%. Mechanical advantage:",
        opts: ["A) 6.25", "B) 4", "C) 1", "D) 0.16"],
        ans: 1,
        exp: "MA=Efficiency×VR=0.80×5=4",
      },
      {
        topic: "Mechanics",
        year: 2010,
        exam: "WAEC",
        q: "Hooke's law: extension within elastic limit is _____ load:",
        opts: [
          "A) Inversely proportional to",
          "B) Directly proportional to",
          "C) Equal to",
          "D) Independent of",
        ],
        ans: 1,
        exp: "F=ke; extension directly proportional to force.",
      },
      {
        topic: "Mechanics",
        year: 2012,
        exam: "WAEC",
        q: "Stone 0.5 kg at 10 m/s horizontal. Distance after 2 s:",
        opts: ["A) 10 m", "B) 20 m", "C) 5 m", "D) 40 m"],
        ans: 1,
        exp: "Horizontal: d=speed×time=10×2=20 m",
      },
      {
        topic: "Mechanics",
        year: 2014,
        exam: "WAEC",
        q: "Centre of gravity of uniform circular lamina:",
        opts: [
          "A) At rim",
          "B) At centre",
          "C) Below centre",
          "D) Above centre",
        ],
        ans: 1,
        exp: "CG at geometric centre for uniform lamina.",
      },
      {
        topic: "Mechanics",
        year: 2016,
        exam: "WAEC",
        q: "Archimedes: upthrust equals weight of:",
        opts: [
          "A) Object",
          "B) Volume of fluid",
          "C) Fluid displaced",
          "D) Mass of fluid",
        ],
        ans: 2,
        exp: "Upthrust=weight of fluid displaced.",
      },
      {
        topic: "Mechanics",
        year: 2018,
        exam: "WAEC",
        q: "Car at 30 m/s brakes to rest in 6 s. Deceleration:",
        opts: ["A) 5 m/s²", "B) 180 m/s²", "C) 0.2 m/s²", "D) 24 m/s²"],
        ans: 0,
        exp: "a=(0−30)/6=−5 m/s²",
      },
      {
        topic: "Mechanics",
        year: 2020,
        exam: "WAEC",
        q: "Power=",
        opts: [
          "A) Work×time",
          "B) Force×velocity",
          "C) Mass×acceleration",
          "D) Energy/mass",
        ],
        ans: 1,
        exp: "P=W/t=F×v",
      },
      {
        topic: "Mechanics",
        year: 2022,
        exam: "WAEC",
        q: "Satellite height h increases. Orbital speed:",
        opts: ["A) Increases", "B) Decreases", "C) Same", "D) Zero"],
        ans: 1,
        exp: "v=√(GM/(R+h)); speed decreases as h increases.",
      },
      {
        topic: "Waves & Sound",
        year: 1999,
        exam: "JAMB",
        q: "Speed of sound in air at 0°C:",
        opts: ["A) 300 m/s", "B) 330 m/s", "C) 1500 m/s", "D) 3×10⁸ m/s"],
        ans: 1,
        exp: "Sound in air ≈ 330 m/s at 0°C.",
      },
      {
        topic: "Waves & Sound",
        year: 2002,
        exam: "JAMB",
        q: "Wave: f=440 Hz, λ=0.75 m. Speed:",
        opts: ["A) 330 m/s", "B) 440 m/s", "C) 587 m/s", "D) 293 m/s"],
        ans: 0,
        exp: "v=fλ=440×0.75=330 m/s",
      },
      {
        topic: "Waves & Sound",
        year: 2004,
        exam: "JAMB",
        q: "Longitudinal wave:",
        opts: ["A) Light", "B) Water waves", "C) Sound", "D) Radio"],
        ans: 2,
        exp: "Sound: particles vibrate parallel to propagation.",
      },
      {
        topic: "Waves & Sound",
        year: 2006,
        exam: "JAMB",
        q: "Superposition of two coherent waves:",
        opts: [
          "A) Reflection",
          "B) Refraction",
          "C) Interference",
          "D) Polarization",
        ],
        ans: 2,
        exp: "Interference = superposition of two coherent waves.",
      },
      {
        topic: "Waves & Sound",
        year: 2008,
        exam: "JAMB",
        q: "Resonance occurs when driving frequency equals the:",
        opts: [
          "A) Amplitude",
          "B) Natural frequency",
          "C) Wavelength",
          "D) Wave speed",
        ],
        ans: 1,
        exp: "Resonance: driving frequency = natural frequency.",
      },
      {
        topic: "Waves & Sound",
        year: 2010,
        exam: "JAMB",
        q: "Doppler effect: change in frequency due to:",
        opts: [
          "A) Bending around obstacles",
          "B) Relative motion source/observer",
          "C) Reflection",
          "D) Absorption",
        ],
        ans: 1,
        exp: "Doppler: frequency higher approaching, lower receding.",
      },
      {
        topic: "Waves & Sound",
        year: 2012,
        exam: "JAMB",
        q: "Sound 200 Hz, λ=1.65 m. Speed:",
        opts: ["A) 121 m/s", "B) 330 m/s", "C) 200 m/s", "D) 165 m/s"],
        ans: 1,
        exp: "v=fλ=200×1.65=330 m/s",
      },
      {
        topic: "Waves & Sound",
        year: 2014,
        exam: "JAMB",
        q: "Points of zero displacement in standing wave:",
        opts: ["A) Antinodes", "B) Crests", "C) Nodes", "D) Troughs"],
        ans: 2,
        exp: "Nodes = zero displacement; antinodes = max displacement.",
      },
      {
        topic: "Waves & Sound",
        year: 2016,
        exam: "JAMB",
        q: "String vibrates 256 Hz. Tension quadrupled. New frequency:",
        opts: ["A) 128 Hz", "B) 512 Hz", "C) 1024 Hz", "D) 64 Hz"],
        ans: 1,
        exp: "f∝√T; T→4T gives f→512 Hz.",
      },
      {
        topic: "Waves & Sound",
        year: 2018,
        exam: "JAMB",
        q: "Pitch of sound determined by:",
        opts: ["A) Amplitude", "B) Frequency", "C) Wavelength", "D) Speed"],
        ans: 1,
        exp: "Pitch determined by frequency.",
      },
      {
        topic: "Waves & Sound",
        year: 2020,
        exam: "JAMB",
        q: "Ultrasound: frequency above:",
        opts: ["A) 20 Hz", "B) 2000 Hz", "C) 20,000 Hz", "D) 200,000 Hz"],
        ans: 2,
        exp: "Ultrasound > 20,000 Hz (above human hearing).",
      },
      {
        topic: "Waves & Sound",
        year: 2022,
        exam: "JAMB",
        q: "Distance between successive nodes in standing wave:",
        opts: ["A) λ/4", "B) λ/2", "C) λ", "D) 2λ"],
        ans: 1,
        exp: "Adjacent nodes separated by λ/2.",
      },
      {
        topic: "Waves & Sound",
        year: 2001,
        exam: "WAEC",
        q: "Echo caused by:",
        opts: [
          "A) Refraction",
          "B) Reflection",
          "C) Diffraction",
          "D) Interference",
        ],
        ans: 1,
        exp: "Echo = reflection of sound from hard surface.",
      },
      {
        topic: "Waves & Sound",
        year: 2003,
        exam: "WAEC",
        q: "Transverse waves can be:",
        opts: [
          "A) Refracted only",
          "B) Polarized",
          "C) Longitudinal",
          "D) Compressional",
        ],
        ans: 1,
        exp: "Transverse waves can be polarized.",
      },
      {
        topic: "Waves & Sound",
        year: 2007,
        exam: "WAEC",
        q: "Loudness of sound depends on:",
        opts: ["A) Frequency", "B) Wavelength", "C) Amplitude", "D) Speed"],
        ans: 2,
        exp: "Loudness ∝ amplitude (energy).",
      },
      {
        topic: "Waves & Sound",
        year: 2011,
        exam: "WAEC",
        q: "Person 165 m from wall. Echo after 1 s. Speed of sound:",
        opts: ["A) 165 m/s", "B) 330 m/s", "C) 660 m/s", "D) 82.5 m/s"],
        ans: 1,
        exp: "d=2×165=330 m; v=330/1=330 m/s",
      },
      {
        topic: "Waves & Sound",
        year: 2015,
        exam: "WAEC",
        q: "Highest frequency EM wave:",
        opts: ["A) Radio", "B) Infrared", "C) X-rays", "D) Gamma rays"],
        ans: 3,
        exp: "Gamma rays have highest frequency.",
      },
      {
        topic: "Waves & Sound",
        year: 2019,
        exam: "WAEC",
        q: "Diffraction most noticeable when:",
        opts: [
          "A) λ << obstacle",
          "B) λ ≈ obstacle size",
          "C) λ very large",
          "D) f very high",
        ],
        ans: 1,
        exp: "Diffraction most significant when λ ≈ obstacle/gap size.",
      },
      {
        topic: "Optics & Light",
        year: 1999,
        exam: "JAMB",
        q: "Glass n=1.5 to air. Critical angle:",
        opts: ["A) 41.8°", "B) 48.2°", "C) 30°", "D) 60°"],
        ans: 0,
        exp: "sin c=1/n=1/1.5=0.667; c≈41.8°",
      },
      {
        topic: "Optics & Light",
        year: 2001,
        exam: "JAMB",
        q: "Concave mirror f=10 cm, object 30 cm. Image at:",
        opts: ["A) 15 cm", "B) 20 cm", "C) 10 cm", "D) 30 cm"],
        ans: 0,
        exp: "1/v=1/f−1/u=1/10−1/30=2/30; v=15 cm",
      },
      {
        topic: "Optics & Light",
        year: 2003,
        exam: "JAMB",
        q: "Total internal reflection occurs when angle of incidence is:",
        opts: [
          "A) Less than critical angle",
          "B) Equal to 90°",
          "C) ≥ critical angle",
          "D) 45°",
        ],
        ans: 2,
        exp: "TIR when angle of incidence ≥ critical angle in dense medium.",
      },
      {
        topic: "Optics & Light",
        year: 2005,
        exam: "JAMB",
        q: "Convex lens: virtual erect magnified image when object is:",
        opts: ["A) Beyond 2F", "B) At F", "C) Between F and lens", "D) At 2F"],
        ans: 2,
        exp: "Object inside focal length → virtual, erect, magnified.",
      },
      {
        topic: "Optics & Light",
        year: 2007,
        exam: "JAMB",
        q: "Refractive index n=",
        opts: [
          "A) Speed in medium/vacuum",
          "B) Speed in vacuum/medium",
          "C) λ in medium/vacuum",
          "D) f in medium/vacuum",
        ],
        ans: 1,
        exp: "n=c/v (vacuum/medium speed ratio).",
      },
      {
        topic: "Optics & Light",
        year: 2009,
        exam: "JAMB",
        q: "Shortest wavelength visible light:",
        opts: ["A) Red", "B) Green", "C) Yellow", "D) Violet"],
        ans: 3,
        exp: "Violet: shortest wavelength (~380–420 nm).",
      },
      {
        topic: "Optics & Light",
        year: 2011,
        exam: "JAMB",
        q: "Plane mirror image:",
        opts: [
          "A) Real, inverted",
          "B) Virtual, upright",
          "C) Real, upright",
          "D) Virtual, inverted",
        ],
        ans: 1,
        exp: "Plane mirror: virtual, upright, same size, laterally inverted.",
      },
      {
        topic: "Optics & Light",
        year: 2013,
        exam: "JAMB",
        q: "Rear-view mirror in vehicles:",
        opts: ["A) Concave", "B) Plane", "C) Convex", "D) Parabolic"],
        ans: 2,
        exp: "Convex mirrors give wide field of view.",
      },
      {
        topic: "Optics & Light",
        year: 2015,
        exam: "JAMB",
        q: "Optical fibres use principle of:",
        opts: [
          "A) Refraction",
          "B) Reflection",
          "C) Total internal reflection",
          "D) Diffraction",
        ],
        ans: 2,
        exp: "Optical fibres: total internal reflection.",
      },
      {
        topic: "Optics & Light",
        year: 2017,
        exam: "JAMB",
        q: "Splitting white light into colours:",
        opts: [
          "A) Interference",
          "B) Diffraction",
          "C) Dispersion",
          "D) Polarization",
        ],
        ans: 2,
        exp: "Dispersion: prism splits white light into spectrum.",
      },
      {
        topic: "Optics & Light",
        year: 2019,
        exam: "JAMB",
        q: "Magnifying glass f=5 cm. Magnification at near point 25 cm:",
        opts: ["A) 4", "B) 5", "C) 6", "D) 3"],
        ans: 2,
        exp: "M=1+D/f=1+25/5=6",
      },
      {
        topic: "Optics & Light",
        year: 2000,
        exam: "WAEC",
        q: "Light air→glass. Speed:",
        opts: ["A) Increases", "B) Decreases", "C) Same", "D) Doubles"],
        ans: 1,
        exp: "Light slows in denser medium; n=c/v.",
      },
      {
        topic: "Optics & Light",
        year: 2004,
        exam: "WAEC",
        q: "Concave (diverging) lens image always:",
        opts: [
          "A) Real, magnified",
          "B) Virtual, magnified",
          "C) Virtual, diminished",
          "D) Real, diminished",
        ],
        ans: 2,
        exp: "Concave lens: always virtual, upright, diminished.",
      },
      {
        topic: "Optics & Light",
        year: 2012,
        exam: "WAEC",
        q: "Critical angle 42°. Refractive index:",
        opts: ["A) sin42°", "B) 1/sin42°", "C) cos42°", "D) tan42°"],
        ans: 1,
        exp: "n=1/sin c=1/sin42°≈1.49",
      },
      {
        topic: "Optics & Light",
        year: 2020,
        exam: "WAEC",
        q: "Ray on plane mirror at 30° to surface. Angle of reflection:",
        opts: ["A) 30°", "B) 60°", "C) 90°", "D) 45°"],
        ans: 1,
        exp: "Angle to surface=30°; angle of incidence=60°; angle of reflection=60°.",
      },
      {
        topic: "Optics & Light",
        year: 2024,
        exam: "WAEC",
        q: "Lens focal length 25 cm. Power:",
        opts: ["A) 0.25 D", "B) 4 D", "C) 25 D", "D) 2.5 D"],
        ans: 1,
        exp: "P=1/f(m)=1/0.25=4 D",
      },
      {
        topic: "Electricity & Magnetism",
        year: 1999,
        exam: "JAMB",
        q: "Resistors 2Ω, 3Ω, 6Ω in parallel. Effective resistance:",
        opts: ["A) 1 Ω", "B) 11 Ω", "C) 3.67 Ω", "D) 2 Ω"],
        ans: 0,
        exp: "1/R=1/2+1/3+1/6=1; R=1 Ω",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2001,
        exam: "JAMB",
        q: "SI unit of electric charge:",
        opts: ["A) Ampere", "B) Volt", "C) Coulomb", "D) Ohm"],
        ans: 2,
        exp: "Coulomb (C) is SI unit of charge.",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2003,
        exam: "JAMB",
        q: "Ohm's law:",
        opts: ["A) V=I²R", "B) V=IR", "C) I=VR", "D) R=VI"],
        ans: 1,
        exp: "V=IR at constant temperature.",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2005,
        exam: "JAMB",
        q: "Transformer: Np=100, Ns=500, Vp=20V. Vs=",
        opts: ["A) 4 V", "B) 100 V", "C) 50 V", "D) 200 V"],
        ans: 1,
        exp: "Vs=Vp×(Ns/Np)=20×5=100 V",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2007,
        exam: "JAMB",
        q: "Electromagnetic induction discovered by:",
        opts: ["A) Coulomb", "B) Ampere", "C) Faraday", "D) Maxwell"],
        ans: 2,
        exp: "Faraday discovered electromagnetic induction 1831.",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2009,
        exam: "JAMB",
        q: "Force on current-carrying conductor in B field: principle of:",
        opts: [
          "A) Generator",
          "B) Transformer",
          "C) Electric motor",
          "D) Inductor",
        ],
        ans: 2,
        exp: "Electric motor uses force on current in magnetic field.",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2011,
        exam: "JAMB",
        q: "R=5Ω, V=10V. Current:",
        opts: ["A) 50 A", "B) 0.5 A", "C) 2 A", "D) 5 A"],
        ans: 2,
        exp: "I=V/R=10/5=2 A",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2013,
        exam: "JAMB",
        q: "Heater 20Ω, 5A for 60s. Energy:",
        opts: ["A) 100 J", "B) 30,000 J", "C) 500 J", "D) 6000 J"],
        ans: 1,
        exp: "E=I²Rt=25×20×60=30,000 J",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2015,
        exam: "JAMB",
        q: "In series circuit, same _____ through all components:",
        opts: ["A) Voltage", "B) Resistance", "C) Current", "D) Power"],
        ans: 2,
        exp: "Series circuit: same current through all.",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2017,
        exam: "JAMB",
        q: "Capacitance measured in:",
        opts: ["A) Ohm", "B) Henry", "C) Farad", "D) Weber"],
        ans: 2,
        exp: "Capacitance in Farads (F). 1F=1C/V.",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2019,
        exam: "JAMB",
        q: "A fuse protects against:",
        opts: [
          "A) Increased current",
          "B) Charge storage",
          "C) Excessive current",
          "D) Reduced voltage",
        ],
        ans: 2,
        exp: "Fuse melts when current exceeds safe limit.",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2000,
        exam: "WAEC",
        q: "4Ω and 12Ω in parallel. Combined R:",
        opts: ["A) 16 Ω", "B) 3 Ω", "C) 8 Ω", "D) 48 Ω"],
        ans: 1,
        exp: "1/R=1/4+1/12=4/12; R=3 Ω",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2008,
        exam: "WAEC",
        q: "Lenz's law: induced current opposes:",
        opts: [
          "A) Flow of charge",
          "B) Change in flux",
          "C) Source EMF",
          "D) Resistance",
        ],
        ans: 1,
        exp: "Lenz: induced current opposes change in flux causing it.",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2016,
        exam: "WAEC",
        q: "60W bulb at 240V. Current:",
        opts: ["A) 0.25 A", "B) 4 A", "C) 14,400 A", "D) 0.5 A"],
        ans: 0,
        exp: "I=P/V=60/240=0.25 A",
      },
      {
        topic: "Electricity & Magnetism",
        year: 2020,
        exam: "WAEC",
        q: "Direction B field around current: given by:",
        opts: [
          "A) Fleming's left-hand rule",
          "B) Lenz's law",
          "C) Right-hand grip rule",
          "D) Faraday's law",
        ],
        ans: 2,
        exp: "Right-hand grip rule: thumb=current; fingers=field direction.",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 1999,
        exam: "JAMB",
        q: "c(water)=4200 J/kg/K. Heat to raise 2 kg by 5°C:",
        opts: ["A) 42,000 J", "B) 4,200 J", "C) 840 J", "D) 21,000 J"],
        ans: 0,
        exp: "Q=mcΔT=2×4200×5=42,000 J",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2002,
        exam: "JAMB",
        q: "Boyle's law: at constant T, P and V are:",
        opts: [
          "A) Directly proportional",
          "B) Equal",
          "C) Inversely proportional",
          "D) Independent",
        ],
        ans: 2,
        exp: "Boyle: PV=const; P∝1/V.",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2004,
        exam: "JAMB",
        q: "Temperature at which gas has zero volume:",
        opts: [
          "A) Standard temperature",
          "B) Absolute zero",
          "C) Triple point",
          "D) Freezing point",
        ],
        ans: 1,
        exp: "Absolute zero=−273.15°C=0 K.",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2006,
        exam: "JAMB",
        q: "Heat transfer by EM waves without medium:",
        opts: [
          "A) Conduction",
          "B) Convection",
          "C) Radiation",
          "D) Absorption",
        ],
        ans: 2,
        exp: "Radiation needs no medium.",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2008,
        exam: "JAMB",
        q: "When ice melts at 0°C its temperature:",
        opts: [
          "A) Rises to 100°C",
          "B) Stays at 0°C",
          "C) Falls below 0°C",
          "D) Rises to 4°C",
        ],
        ans: 1,
        exp: "Temperature constant during change of state (latent heat).",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2010,
        exam: "JAMB",
        q: "Charles' law: at constant P, volume is _____ absolute T:",
        opts: [
          "A) Inversely proportional to",
          "B) Directly proportional to",
          "C) Equal to",
          "D) Independent of",
        ],
        ans: 1,
        exp: "V/T=constant.",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2012,
        exam: "JAMB",
        q: "Latent heat of fusion converts substance from:",
        opts: [
          "A) Raises T by 1°C",
          "B) Solid to liquid at constant T",
          "C) Liquid to gas",
          "D) Cools by 1°C",
        ],
        ans: 1,
        exp: "Fusion: solid→liquid at melting point without T change.",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2014,
        exam: "JAMB",
        q: "Good heat conductors are generally also:",
        opts: [
          "A) Electrical insulators",
          "B) Electrical conductors",
          "C) Reflectors",
          "D) Absorbers",
        ],
        ans: 1,
        exp: "Metals: good conductors of both heat and electricity.",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2016,
        exam: "JAMB",
        q: "Gay-Lussac: at constant V, pressure is _____ to absolute T:",
        opts: [
          "A) Inversely proportional",
          "B) Not related",
          "C) Directly proportional",
          "D) Equal",
        ],
        ans: 2,
        exp: "P/T=constant at constant V.",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2018,
        exam: "JAMB",
        q: "98.6°F in Celsius:",
        opts: ["A) 37°C", "B) 36°C", "C) 38°C", "D) 35°C"],
        ans: 0,
        exp: "C=(F−32)×5/9=(98.6−32)×5/9=37°C",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2020,
        exam: "JAMB",
        q: "Evaporation causes cooling because liquid:",
        opts: [
          "A) Absorbs heat from surroundings",
          "B) Releases heat",
          "C) T increases",
          "D) P increases",
        ],
        ans: 0,
        exp: "Evaporating molecules carry away kinetic energy.",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2001,
        exam: "WAEC",
        q: "Instrument measuring atmospheric pressure:",
        opts: [
          "A) Thermometer",
          "B) Manometer",
          "C) Barometer",
          "D) Hydrometer",
        ],
        ans: 2,
        exp: "Barometer measures atmospheric pressure.",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2005,
        exam: "WAEC",
        q: "L(vap,water)=2.26×10⁶ J/kg. Heat to vaporize 0.5 kg:",
        opts: [
          "A) 1.13×10⁶ J",
          "B) 2.26×10⁶ J",
          "C) 4.52×10⁶ J",
          "D) 0.5×10⁶ J",
        ],
        ans: 0,
        exp: "Q=mL=0.5×2.26×10⁶=1.13×10⁶ J",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2009,
        exam: "WAEC",
        q: "Heat conduction best in:",
        opts: ["A) Gases", "B) Liquids", "C) Vacuum", "D) Solids"],
        ans: 3,
        exp: "Solids: closely packed molecules + free electrons in metals.",
      },
      {
        topic: "Heat & Thermodynamics",
        year: 2017,
        exam: "WAEC",
        q: "Bimetallic strip works because metals have different:",
        opts: [
          "A) Densities",
          "B) Boiling points",
          "C) Linear expansivities",
          "D) Specific heats",
        ],
        ans: 2,
        exp: "Different linear expansivities → strip curves on heating.",
      },
      {
        topic: "Modern Physics",
        year: 2000,
        exam: "JAMB",
        q: "Half-life: time for _____ nuclei to decay:",
        opts: ["A) All", "B) Half", "C) One", "D) Double activity"],
        ans: 1,
        exp: "Half-life = time for half the nuclei to decay.",
      },
      {
        topic: "Modern Physics",
        year: 2003,
        exam: "JAMB",
        q: "Alpha particles identical to:",
        opts: [
          "A) Helium-4 nuclei",
          "B) Electrons",
          "C) Protons",
          "D) Neutrons",
        ],
        ans: 0,
        exp: "Alpha = 2 protons + 2 neutrons = ⁴He nucleus.",
      },
      {
        topic: "Modern Physics",
        year: 2005,
        exam: "JAMB",
        q: "Radiation with greatest penetrating power:",
        opts: ["A) Alpha", "B) Beta", "C) Gamma", "D) X-ray"],
        ans: 2,
        exp: "Gamma rays have highest penetrating power.",
      },
      {
        topic: "Modern Physics",
        year: 2007,
        exam: "JAMB",
        q: "Photoelectric effect shows light behaves as:",
        opts: ["A) Wave", "B) Particle (photon)", "C) Both", "D) Electron"],
        ans: 1,
        exp: "Photoelectric effect demonstrates particle nature of light.",
      },
      {
        topic: "Modern Physics",
        year: 2009,
        exam: "JAMB",
        q: "Nuclear fission involves:",
        opts: [
          "A) Combining light nuclei",
          "B) Splitting heavy nucleus",
          "C) Alpha emission",
          "D) Gamma absorption",
        ],
        ans: 1,
        exp: "Fission: heavy nucleus splits → smaller fragments + energy.",
      },
      {
        topic: "Modern Physics",
        year: 2011,
        exam: "JAMB",
        q: "Mass number = total number of:",
        opts: [
          "A) Protons",
          "B) Neutrons",
          "C) Protons + neutrons",
          "D) Electrons",
        ],
        ans: 2,
        exp: "Mass number = protons + neutrons.",
      },
      {
        topic: "Modern Physics",
        year: 2013,
        exam: "JAMB",
        q: "In β⁻ decay, nucleus emits:",
        opts: ["A) Proton", "B) Neutron", "C) Electron", "D) Helium nucleus"],
        ans: 2,
        exp: "β⁻: neutron→proton+electron+antineutrino.",
      },
      {
        topic: "Modern Physics",
        year: 2015,
        exam: "JAMB",
        q: "X-rays and γ-rays belong to the:",
        opts: [
          "A) Ultrasound spectrum",
          "B) Electromagnetic spectrum",
          "C) Mechanical wave spectrum",
          "D) Radio spectrum",
        ],
        ans: 1,
        exp: "Both are electromagnetic radiation.",
      },
      {
        topic: "Modern Physics",
        year: 2017,
        exam: "JAMB",
        q: "Nuclear reactor moderator is used to:",
        opts: [
          "A) Speed up neutrons",
          "B) Slow down neutrons",
          "C) Absorb all neutrons",
          "D) Split uranium",
        ],
        ans: 1,
        exp: "Moderators slow neutrons to thermal speeds for efficient fission.",
      },
      {
        topic: "Modern Physics",
        year: 2019,
        exam: "JAMB",
        q: "In E=hf, h is:",
        opts: [
          "A) Boltzmann's constant",
          "B) Planck's constant",
          "C) Avogadro's number",
          "D) Gas constant",
        ],
        ans: 1,
        exp: "h=Planck's constant=6.63×10⁻³⁴ J·s.",
      },
      {
        topic: "Modern Physics",
        year: 2002,
        exam: "WAEC",
        q: "Isotopes have same number of:",
        opts: ["A) Neutrons", "B) Mass number", "C) Protons", "D) Nucleons"],
        ans: 2,
        exp: "Isotopes: same protons (Z), different mass numbers.",
      },
      {
        topic: "Modern Physics",
        year: 2006,
        exam: "WAEC",
        q: "Radiation not deflected by electric/magnetic fields:",
        opts: ["A) Alpha", "B) Beta", "C) Gamma", "D) Both A&B"],
        ans: 2,
        exp: "Gamma rays have no charge → not deflected.",
      },
      {
        topic: "Modern Physics",
        year: 2010,
        exam: "WAEC",
        q: "Two light nuclei combining to form heavier nucleus:",
        opts: ["A) Fission", "B) Fusion", "C) Radioactivity", "D) Ionization"],
        ans: 1,
        exp: "Fusion: light nuclei combine → heavier nucleus + energy.",
      },
      {
        topic: "Modern Physics",
        year: 2014,
        exam: "WAEC",
        q: "Increasing light intensity in photoelectric effect (same f):",
        opts: [
          "A) Increases electron KE",
          "B) Increases number of electrons",
          "C) Decreases electron KE",
          "D) Stops emission",
        ],
        ans: 1,
        exp: "More intensity = more photons = more electrons; KE depends on f.",
      },
      {
        topic: "Measurement & Units",
        year: 1999,
        exam: "JAMB",
        q: "SI unit of length:",
        opts: ["A) Centimetre", "B) Metre", "C) Kilometre", "D) Foot"],
        ans: 1,
        exp: "Metre (m) is the SI base unit of length.",
      },
      {
        topic: "Measurement & Units",
        year: 2003,
        exam: "JAMB",
        q: "Best instrument to measure wire diameter:",
        opts: [
          "A) Metre rule",
          "B) Vernier caliper",
          "C) Micrometer",
          "D) Tape measure",
        ],
        ans: 2,
        exp: "Micrometer: accurate to 0.01 mm.",
      },
      {
        topic: "Measurement & Units",
        year: 2007,
        exam: "JAMB",
        q: "Density=",
        opts: [
          "A) Mass×Volume",
          "B) Mass/Volume",
          "C) Volume/Mass",
          "D) Weight/Volume",
        ],
        ans: 1,
        exp: "ρ=m/V (SI unit: kg/m³).",
      },
      {
        topic: "Measurement & Units",
        year: 2011,
        exam: "JAMB",
        q: "Dimension of pressure:",
        opts: ["A) MLT⁻²", "B) ML⁻¹T⁻²", "C) ML²T⁻²", "D) ML⁻²T⁻¹"],
        ans: 1,
        exp: "P=F/A=MLT⁻²/L²=ML⁻¹T⁻²",
      },
      {
        topic: "Measurement & Units",
        year: 2015,
        exam: "JAMB",
        q: "Vernier caliper precision:",
        opts: ["A) 1 mm", "B) 0.1 mm", "C) 0.01 mm", "D) 0.001 mm"],
        ans: 1,
        exp: "Standard vernier caliper reads to 0.1 mm.",
      },
      {
        topic: "Measurement & Units",
        year: 2001,
        exam: "WAEC",
        q: "Which is a derived SI unit?",
        opts: ["A) Kilogram", "B) Second", "C) Ampere", "D) Newton"],
        ans: 3,
        exp: "Newton=kg·m/s² is derived; kg,s,A are base units.",
      },
      {
        topic: "Measurement & Units",
        year: 2009,
        exam: "WAEC",
        q: "Scalar quantities have:",
        opts: [
          "A) Magnitude and direction",
          "B) Direction only",
          "C) Magnitude only",
          "D) Neither",
        ],
        ans: 2,
        exp: "Scalars: magnitude only (speed, mass, temperature).",
      },
      {
        topic: "Measurement & Units",
        year: 2013,
        exam: "WAEC",
        q: "Dimension of velocity:",
        opts: ["A) LT", "B) LT⁻¹", "C) MLT⁻¹", "D) LT⁻²"],
        ans: 1,
        exp: "v=displacement/time=L/T=LT⁻¹",
      },
    ],
  },
  Chemistry: {
    topics: [
      "Atomic Structure",
      "Chemical Bonding",
      "Chemical Reactions & Equations",
      "Acids, Bases & Salts",
      "Organic Chemistry",
      "Electrochemistry",
      "Gases & Kinetic Theory",
      "Periodicity & Elements",
    ],
    questions: [
      {
        topic: "Atomic Structure",
        year: 1999,
        exam: "JAMB",
        q: "Neutrons in ¹⁴₆C:",
        opts: ["A) 6", "B) 8", "C) 14", "D) 20"],
        ans: 1,
        exp: "Neutrons=14−6=8",
      },
      {
        topic: "Atomic Structure",
        year: 2001,
        exam: "JAMB",
        q: "Isotopes have same:",
        opts: [
          "A) Mass number",
          "B) Neutrons",
          "C) Atomic number",
          "D) Nucleons",
        ],
        ans: 2,
        exp: "Isotopes: same Z (protons), different mass numbers.",
      },
      {
        topic: "Atomic Structure",
        year: 2003,
        exam: "JAMB",
        q: "Element Z=20. Electronic configuration:",
        opts: ["A) 2,8,10", "B) 2,8,8,2", "C) 2,10,8", "D) 2,8,4,6"],
        ans: 1,
        exp: "Calcium Z=20: 2,8,8,2",
      },
      {
        topic: "Atomic Structure",
        year: 2005,
        exam: "JAMB",
        q: "Avogadro's number:",
        opts: ["A) 6.02×10²³", "B) 3.0×10²³", "C) 1.6×10¹⁹", "D) 9.1×10³¹"],
        ans: 0,
        exp: "6.02×10²³ particles per mole.",
      },
      {
        topic: "Atomic Structure",
        year: 2007,
        exam: "JAMB",
        q: "Z=17. Electrons in outermost shell:",
        opts: ["A) 7", "B) 3", "C) 5", "D) 1"],
        ans: 0,
        exp: "Cl: 2,8,7 → 7 valence electrons.",
      },
      {
        topic: "Atomic Structure",
        year: 2009,
        exam: "JAMB",
        q: "Relative atomic mass defined as:",
        opts: [
          "A) Number of protons",
          "B) Average mass relative to 1/12 of C-12",
          "C) Number of neutrons",
          "D) Mass in grams",
        ],
        ans: 1,
        exp: "RAM = average atomic mass / (1/12 mass of C-12).",
      },
      {
        topic: "Atomic Structure",
        year: 2011,
        exam: "JAMB",
        q: "Subatomic particle with no charge:",
        opts: ["A) Proton", "B) Electron", "C) Neutron", "D) Alpha"],
        ans: 2,
        exp: "Neutron: neutral, no charge.",
      },
      {
        topic: "Atomic Structure",
        year: 2013,
        exam: "JAMB",
        q: "One mole of C-12 has mass:",
        opts: ["A) 6 g", "B) 12 g", "C) 24 g", "D) 1 g"],
        ans: 1,
        exp: "Molar mass of C-12 = 12 g/mol.",
      },
      {
        topic: "Atomic Structure",
        year: 2015,
        exam: "JAMB",
        q: "Electrons in fixed orbits model by:",
        opts: ["A) Dalton", "B) Thomson", "C) Rutherford", "D) Bohr"],
        ans: 3,
        exp: "Niels Bohr proposed fixed electron orbits (1913).",
      },
      {
        topic: "Atomic Structure",
        year: 2017,
        exam: "JAMB",
        q: "Moles in 44 g CO₂ (C=12,O=16):",
        opts: ["A) 0.5", "B) 1", "C) 2", "D) 44"],
        ans: 1,
        exp: "M(CO₂)=44; n=44/44=1 mol",
      },
      {
        topic: "Atomic Structure",
        year: 2019,
        exam: "JAMB",
        q: "First ionization energy increases across period because:",
        opts: [
          "A) Atomic radius increases",
          "B) Nuclear charge increases",
          "C) Neutrons increase",
          "D) Shells increase",
        ],
        ans: 1,
        exp: "Increasing nuclear charge → stronger electron attraction → higher IE.",
      },
      {
        topic: "Atomic Structure",
        year: 2000,
        exam: "WAEC",
        q: "Electron config of Na⁺:",
        opts: ["A) 2,8,1", "B) 2,8", "C) 2,7", "D) 2,8,2"],
        ans: 1,
        exp: "Na(Z=11)=2,8,1. Na⁺ loses 1e⁻: 2,8.",
      },
      {
        topic: "Atomic Structure",
        year: 2004,
        exam: "WAEC",
        q: "Thomson's cathode ray experiment proved:",
        opts: ["A) Protons", "B) Neutrons", "C) Electrons", "D) Nuclei"],
        ans: 2,
        exp: "J.J. Thomson proved existence of electron 1897.",
      },
      {
        topic: "Atomic Structure",
        year: 2008,
        exam: "WAEC",
        q: "Atom gaining electrons becomes:",
        opts: ["A) Cation", "B) Anion", "C) Molecule", "D) Isotope"],
        ans: 1,
        exp: "Anion: negatively charged ion.",
      },
      {
        topic: "Atomic Structure",
        year: 2012,
        exam: "WAEC",
        q: "Rutherford's gold foil experiment showed:",
        opts: [
          "A) Electrons orbit nucleus",
          "B) Atom mostly empty space, small dense nucleus",
          "C) Atoms contain neutrons",
          "D) Electrons are negative",
        ],
        ans: 1,
        exp: "Most α-particles pass through → atom mostly empty space.",
      },
      {
        topic: "Atomic Structure",
        year: 2024,
        exam: "JAMB",
        q: "Quantum number specifying orbital shape:",
        opts: [
          "A) Principal n",
          "B) Azimuthal l",
          "C) Magnetic m",
          "D) Spin s",
        ],
        ans: 1,
        exp: "Azimuthal (angular momentum) quantum number l determines orbital shape.",
      },
      {
        topic: "Chemical Bonding",
        year: 1999,
        exam: "JAMB",
        q: "NaCl held together by:",
        opts: ["A) Covalent", "B) Metallic", "C) Ionic", "D) Hydrogen bond"],
        ans: 2,
        exp: "NaCl: ionic bond between Na⁺ and Cl⁻.",
      },
      {
        topic: "Chemical Bonding",
        year: 2002,
        exam: "JAMB",
        q: "Bond in H₂O:",
        opts: ["A) Ionic", "B) Metallic", "C) Covalent", "D) Van der Waals"],
        ans: 2,
        exp: "O-H covalent bonds. Molecules linked by H-bonds.",
      },
      {
        topic: "Chemical Bonding",
        year: 2004,
        exam: "JAMB",
        q: "Molecule with double bond:",
        opts: ["A) H₂", "B) N₂", "C) O₂", "D) HCl"],
        ans: 2,
        exp: "O₂ has O=O double bond.",
      },
      {
        topic: "Chemical Bonding",
        year: 2008,
        exam: "JAMB",
        q: "Shape of CH₄:",
        opts: [
          "A) Linear",
          "B) Tetrahedral",
          "C) Trigonal planar",
          "D) Pyramidal",
        ],
        ans: 1,
        exp: "4 bonding pairs, no lone pairs → tetrahedral, 109.5°",
      },
      {
        topic: "Chemical Bonding",
        year: 2010,
        exam: "JAMB",
        q: "Hydrogen bonding strongest in:",
        opts: ["A) H₂S", "B) HCl", "C) HF", "D) HBr"],
        ans: 2,
        exp: "HF has strongest H-bonds; F is most electronegative.",
      },
      {
        topic: "Chemical Bonding",
        year: 2012,
        exam: "JAMB",
        q: "Coordinate bond: both electrons come from:",
        opts: [
          "A) Both atoms",
          "B) Neither",
          "C) One donor atom",
          "D) Solvent",
        ],
        ans: 2,
        exp: "Dative covalent: both electrons donated by one atom.",
      },
      {
        topic: "Chemical Bonding",
        year: 2014,
        exam: "JAMB",
        q: "Diamond hardness due to:",
        opts: [
          "A) Ionic bonds",
          "B) Metallic bonds",
          "C) Weak van der Waals",
          "D) Giant covalent network",
        ],
        ans: 3,
        exp: "C forms 4 covalent bonds in 3D network → extremely hard.",
      },
      {
        topic: "Chemical Bonding",
        year: 2009,
        exam: "WAEC",
        q: "Bond angle in H₂O:",
        opts: ["A) 180°", "B) 120°", "C) 109.5°", "D) 104.5°"],
        ans: 3,
        exp: "2 lone pairs repel more → angle reduces to 104.5°",
      },
      {
        topic: "Chemical Bonding",
        year: 2013,
        exam: "WAEC",
        q: "Graphite conducts electricity due to:",
        opts: [
          "A) Ionic bonds",
          "B) Delocalized electrons",
          "C) Metallic bonds",
          "D) Free protons",
        ],
        ans: 1,
        exp: "Each C: 3 bonds + 1 delocalized electron → conducts.",
      },
      {
        topic: "Chemical Bonding",
        year: 2021,
        exam: "WAEC",
        q: "VSEPR predicts shape based on:",
        opts: [
          "A) Bond length",
          "B) Electron pair repulsion",
          "C) Atomic radius",
          "D) Molar mass",
        ],
        ans: 1,
        exp: "VSEPR: electron pairs minimize repulsion.",
      },
      {
        topic: "Chemical Reactions & Equations",
        year: 1999,
        exam: "JAMB",
        q: "Reaction releasing heat:",
        opts: [
          "A) Endothermic",
          "B) Exothermic",
          "C) Isothermal",
          "D) Neutralization",
        ],
        ans: 1,
        exp: "Exothermic: ΔH<0; releases heat.",
      },
      {
        topic: "Chemical Reactions & Equations",
        year: 2001,
        exam: "JAMB",
        q: "2H₂+O₂→2H₂O. Mole ratio H₂:O₂:",
        opts: ["A) 1:1", "B) 2:1", "C) 1:2", "D) 3:1"],
        ans: 1,
        exp: "2 mol H₂ per 1 mol O₂ = 2:1",
      },
      {
        topic: "Chemical Reactions & Equations",
        year: 2003,
        exam: "JAMB",
        q: "A catalyst:",
        opts: [
          "A) Is consumed",
          "B) Changes equilibrium position",
          "C) Increases rate, not consumed",
          "D) Decreases activation energy and consumed",
        ],
        ans: 2,
        exp: "Catalyst: speeds up reaction; not consumed.",
      },
      {
        topic: "Chemical Reactions & Equations",
        year: 2007,
        exam: "JAMB",
        q: "Oxidation defined as:",
        opts: [
          "A) Gain of electrons",
          "B) Loss of hydrogen",
          "C) Loss of electrons",
          "D) Gain of oxygen",
        ],
        ans: 2,
        exp: "OIL: Oxidation Is Loss of electrons.",
      },
      {
        topic: "Chemical Reactions & Equations",
        year: 2009,
        exam: "JAMB",
        q: "Rate increases with temperature because:",
        opts: [
          "A) Activation energy decreases",
          "B) More frequent energetic collisions",
          "C) Products used faster",
          "D) Concentration increases",
        ],
        ans: 1,
        exp: "Higher T → faster molecules → more energetic collisions.",
      },
      {
        topic: "Chemical Reactions & Equations",
        year: 2011,
        exam: "JAMB",
        q: "Le Chatelier: disturbed equilibrium:",
        opts: [
          "A) Always shifts right",
          "B) Opposes the change",
          "C) Stops reacting",
          "D) Speeds up indefinitely",
        ],
        ans: 1,
        exp: "System shifts to counteract the imposed change.",
      },
      {
        topic: "Chemical Reactions & Equations",
        year: 2013,
        exam: "JAMB",
        q: "Oxidation state of Mn in KMnO₄:",
        opts: ["A) +2", "B) +4", "C) +6", "D) +7"],
        ans: 3,
        exp: "K=+1,O₄=−8; Mn=+7.",
      },
      {
        topic: "Chemical Reactions & Equations",
        year: 2017,
        exam: "JAMB",
        q: "Haber process NH₃ yield increased by:",
        opts: [
          "A) High T, low P",
          "B) Low T, high P",
          "C) High T, high P",
          "D) Catalyst alone",
        ],
        ans: 1,
        exp: "Low T (exothermic) + high P (4 mol→2 mol) favors NH₃.",
      },
      {
        topic: "Chemical Reactions & Equations",
        year: 2000,
        exam: "WAEC",
        q: "Activation energy is:",
        opts: [
          "A) Heat released",
          "B) Minimum energy needed for reaction",
          "C) Energy of products",
          "D) Bond energy of reactants",
        ],
        ans: 1,
        exp: "Ea = minimum energy reactant molecules need to react.",
      },
      {
        topic: "Chemical Reactions & Equations",
        year: 2004,
        exam: "WAEC",
        q: "Zn + dilute HCl gas produced:",
        opts: ["A) Oxygen", "B) Chlorine", "C) Hydrogen", "D) Zinc chloride"],
        ans: 2,
        exp: "Zn+2HCl→ZnCl₂+H₂↑",
      },
      {
        topic: "Chemical Reactions & Equations",
        year: 2008,
        exam: "WAEC",
        q: "Haber process manufactures:",
        opts: ["A) H₂SO₄", "B) Ammonia", "C) NaOH", "D) HNO₃"],
        ans: 1,
        exp: "Haber: N₂+3H₂⇌2NH₃",
      },
      {
        topic: "Chemical Reactions & Equations",
        year: 2020,
        exam: "WAEC",
        q: "Fe²⁺ oxidation half-equation:",
        opts: [
          "A) Fe²⁺+2e⁻→Fe",
          "B) Fe²⁺→Fe³⁺+e⁻",
          "C) Fe³⁺+e⁻→Fe²⁺",
          "D) Fe→Fe²⁺+2e⁻",
        ],
        ans: 1,
        exp: "Oxidation=loss of electrons: Fe²⁺→Fe³⁺+e⁻",
      },
      {
        topic: "Acids, Bases & Salts",
        year: 1999,
        exam: "JAMB",
        q: "pH neutral solution:",
        opts: ["A) 0", "B) 7", "C) 14", "D) 1"],
        ans: 1,
        exp: "pH 7=neutral.",
      },
      {
        topic: "Acids, Bases & Salts",
        year: 2002,
        exam: "JAMB",
        q: "Acid+base→salt+water called:",
        opts: [
          "A) Hydrolysis",
          "B) Neutralization",
          "C) Saponification",
          "D) Precipitation",
        ],
        ans: 1,
        exp: "Neutralization reaction.",
      },
      {
        topic: "Acids, Bases & Salts",
        year: 2004,
        exam: "JAMB",
        q: "Strong acid:",
        opts: ["A) Ethanoic", "B) Carbonic", "C) Hydrochloric", "D) Citric"],
        ans: 2,
        exp: "HCl fully dissociates → strong acid.",
      },
      {
        topic: "Acids, Bases & Salts",
        year: 2006,
        exam: "JAMB",
        q: "Turns red to blue in alkali:",
        opts: [
          "A) Methyl orange",
          "B) Phenolphthalein",
          "C) Litmus",
          "D) Screened methyl orange",
        ],
        ans: 2,
        exp: "Litmus: red in acid, blue in alkali.",
      },
      {
        topic: "Acids, Bases & Salts",
        year: 2008,
        exam: "JAMB",
        q: "CaCO₃+HCl products:",
        opts: [
          "A) CaCl₂,H₂O,SO₂",
          "B) CaCl₂,H₂O,CO₂",
          "C) Ca(OH)₂,CO₂",
          "D) CaO,HCl",
        ],
        ans: 1,
        exp: "CaCO₃+2HCl→CaCl₂+H₂O+CO₂↑",
      },
      {
        topic: "Acids, Bases & Salts",
        year: 2010,
        exam: "JAMB",
        q: "H₂SO₄+2NaOH→",
        opts: [
          "A) Na₂SO₃+H₂O",
          "B) NaHSO₄+H₂O",
          "C) Na₂SO₄+2H₂O",
          "D) NaHSO₃+H₂O",
        ],
        ans: 2,
        exp: "→Na₂SO₄+2H₂O",
      },
      {
        topic: "Acids, Bases & Salts",
        year: 2014,
        exam: "JAMB",
        q: "Acid in vinegar:",
        opts: ["A) Citric", "B) Lactic", "C) Ethanoic", "D) Tartaric"],
        ans: 2,
        exp: "Vinegar=ethanoic (acetic) acid CH₃COOH.",
      },
      {
        topic: "Acids, Bases & Salts",
        year: 2018,
        exam: "JAMB",
        q: "pH of 0.01 mol/L HCl:",
        opts: ["A) 1", "B) 2", "C) 12", "D) 0.01"],
        ans: 1,
        exp: "pH=−log(0.01)=2",
      },
      {
        topic: "Acids, Bases & Salts",
        year: 2001,
        exam: "WAEC",
        q: "Zn+H₂SO₄ salt produced:",
        opts: ["A) ZnCO₃", "B) ZnSO₄", "C) ZnCl₂", "D) ZnO"],
        ans: 1,
        exp: "Zn+H₂SO₄→ZnSO₄+H₂↑",
      },
      {
        topic: "Acids, Bases & Salts",
        year: 2005,
        exam: "WAEC",
        q: "pH 9 solution is:",
        opts: [
          "A) Strongly acidic",
          "B) Weakly acidic",
          "C) Neutral",
          "D) Alkaline",
        ],
        ans: 3,
        exp: "pH>7 = alkaline.",
      },
      {
        topic: "Acids, Bases & Salts",
        year: 2009,
        exam: "WAEC",
        q: "Making soap from fats+alkali:",
        opts: [
          "A) Esterification",
          "B) Saponification",
          "C) Hydrogenation",
          "D) Fermentation",
        ],
        ans: 1,
        exp: "Saponification: fats+NaOH→soap+glycerol.",
      },
      {
        topic: "Acids, Bases & Salts",
        year: 2017,
        exam: "WAEC",
        q: "Phenolphthalein colour in alkali:",
        opts: ["A) Yellow", "B) Red", "C) Pink/magenta", "D) Blue"],
        ans: 2,
        exp: "Phenolphthalein: colourless(acid), pink(alkali).",
      },
      {
        topic: "Organic Chemistry",
        year: 1999,
        exam: "JAMB",
        q: "General formula alkanes:",
        opts: ["A) CₙH₂ₙ", "B) CₙH₂ₙ₊₂", "C) CₙH₂ₙ₋₂", "D) CₙHₙ"],
        ans: 1,
        exp: "Alkanes: CₙH₂ₙ₊₂",
      },
      {
        topic: "Organic Chemistry",
        year: 2001,
        exam: "JAMB",
        q: "Fermentation of glucose:",
        opts: [
          "A) Methanol+CO₂",
          "B) Ethanol+CO₂",
          "C) Ethanoic acid+H₂",
          "D) Ethene+water",
        ],
        ans: 1,
        exp: "C₆H₁₂O₆→2C₂H₅OH+2CO₂",
      },
      {
        topic: "Organic Chemistry",
        year: 2003,
        exam: "JAMB",
        q: "Functional group in alcohols:",
        opts: ["A) –COOH", "B) –CHO", "C) –OH", "D) –NH₂"],
        ans: 2,
        exp: "Alcohol functional group: –OH",
      },
      {
        topic: "Organic Chemistry",
        year: 2005,
        exam: "JAMB",
        q: "Polymerization of ethene gives:",
        opts: ["A) Polystyrene", "B) Polythene", "C) PVC", "D) Nylon"],
        ans: 1,
        exp: "Ethene→poly(ethene)/polythene",
      },
      {
        topic: "Organic Chemistry",
        year: 2007,
        exam: "JAMB",
        q: "Main component of natural gas:",
        opts: ["A) Ethane", "B) Butane", "C) Methane", "D) Propane"],
        ans: 2,
        exp: "Natural gas mostly methane (70–90%).",
      },
      {
        topic: "Organic Chemistry",
        year: 2011,
        exam: "JAMB",
        q: "Which is an ester?",
        opts: ["A) CH₃OH", "B) CH₃COOH", "C) CH₃COOC₂H₅", "D) C₂H₅OH"],
        ans: 2,
        exp: "CH₃COOC₂H₅ = ethyl ethanoate (ester).",
      },
      {
        topic: "Organic Chemistry",
        year: 2013,
        exam: "JAMB",
        q: "IUPAC name of CH₃CH₂CH₂OH:",
        opts: ["A) Ethanol", "B) Methanol", "C) Propan-1-ol", "D) Butan-1-ol"],
        ans: 2,
        exp: "3C + OH at C1 = propan-1-ol.",
      },
      {
        topic: "Organic Chemistry",
        year: 2015,
        exam: "JAMB",
        q: "Benzene preferentially undergoes:",
        opts: [
          "A) Addition",
          "B) Elimination",
          "C) Substitution",
          "D) Polymerization",
        ],
        ans: 2,
        exp: "Benzene: electrophilic substitution to preserve aromaticity.",
      },
      {
        topic: "Organic Chemistry",
        year: 2006,
        exam: "WAEC",
        q: "Test for alkene:",
        opts: [
          "A) Blue flame",
          "B) Decolorize bromine water",
          "C) React with Na",
          "D) Dissolve in water",
        ],
        ans: 1,
        exp: "Alkenes decolorize Br₂/H₂O by addition to C=C.",
      },
      {
        topic: "Organic Chemistry",
        year: 2010,
        exam: "WAEC",
        q: "Carbohydrate H:O ratio:",
        opts: ["A) 1:1", "B) 2:1", "C) 1:2", "D) 3:1"],
        ans: 1,
        exp: "Carbs: Cₙ(H₂O)ₘ; H:O=2:1.",
      },
      {
        topic: "Organic Chemistry",
        year: 2014,
        exam: "WAEC",
        q: "Which is a polymer?",
        opts: ["A) Glucose", "B) Amino acid", "C) Cellulose", "D) Fatty acid"],
        ans: 2,
        exp: "Cellulose = polysaccharide polymer.",
      },
      {
        topic: "Organic Chemistry",
        year: 2018,
        exam: "WAEC",
        q: "Converting oil to margarine:",
        opts: [
          "A) Esterification",
          "B) Hydrogenation",
          "C) Saponification",
          "D) Fermentation",
        ],
        ans: 1,
        exp: "Hydrogenation: H₂ added across C=C (Ni catalyst).",
      },
      {
        topic: "Organic Chemistry",
        year: 2022,
        exam: "WAEC",
        q: "Empirical formula: 40%C, 6.67%H, 53.33%O:",
        opts: ["A) CH₂O", "B) C₂H₄O₂", "C) CH₄O", "D) C₂H₂O"],
        ans: 0,
        exp: "C:40/12=3.33; H:6.67; O:53.33/16=3.33. Ratio 1:2:1=CH₂O",
      },
      {
        topic: "Electrochemistry",
        year: 1999,
        exam: "JAMB",
        q: "Reduction in electrolysis at:",
        opts: ["A) Anode", "B) Cathode", "C) Electrolyte", "D) Salt bridge"],
        ans: 1,
        exp: "Cathode=reduction (gain e⁻). Anode=oxidation.",
      },
      {
        topic: "Electrochemistry",
        year: 2003,
        exam: "JAMB",
        q: "Electrolysis of brine at cathode:",
        opts: ["A) Cl₂", "B) O₂", "C) H₂", "D) Na"],
        ans: 2,
        exp: "Cathode: 2H⁺+2e⁻→H₂↑",
      },
      {
        topic: "Electrochemistry",
        year: 2007,
        exam: "JAMB",
        q: "Faraday's 1st law: mass deposited ∝",
        opts: [
          "A) Voltage",
          "B) Charge passed",
          "C) Temperature",
          "D) Electrode size",
        ],
        ans: 1,
        exp: "m∝Q (total charge passed).",
      },
      {
        topic: "Electrochemistry",
        year: 2011,
        exam: "JAMB",
        q: "Voltaic cell converts:",
        opts: [
          "A) Electrical→chemical",
          "B) Chemical→electrical",
          "C) Heat→electricity",
          "D) Light→electricity",
        ],
        ans: 1,
        exp: "Voltaic cell: chemical energy→electrical.",
      },
      {
        topic: "Electrochemistry",
        year: 2015,
        exam: "JAMB",
        q: "Car battery electrolyte:",
        opts: ["A) NaOH", "B) Dilute H₂SO₄", "C) NaCl", "D) KOH"],
        ans: 1,
        exp: "Lead-acid battery uses dilute H₂SO₄.",
      },
      {
        topic: "Electrochemistry",
        year: 2001,
        exam: "WAEC",
        q: "Electroplating deposits metal onto:",
        opts: [
          "A) Remove from cathode",
          "B) Cathode",
          "C) Dissolve electrolyte",
          "D) Produce gases",
        ],
        ans: 1,
        exp: "Metal deposits from anode onto cathode.",
      },
      {
        topic: "Electrochemistry",
        year: 2009,
        exam: "WAEC",
        q: "Electrolyte must be:",
        opts: [
          "A) Solid",
          "B) Liquid/solution conducting electricity",
          "C) Gas",
          "D) Non-conductor",
        ],
        ans: 1,
        exp: "Electrolyte: molten ionic compound or ionic solution.",
      },
      {
        topic: "Electrochemistry",
        year: 2017,
        exam: "WAEC",
        q: "Rusting is an example of:",
        opts: [
          "A) Electroplating",
          "B) Electrolysis",
          "C) Electrochemical corrosion",
          "D) Galvanizing",
        ],
        ans: 2,
        exp: "Rusting: electrochemical corrosion of iron.",
      },
      {
        topic: "Gases & Kinetic Theory",
        year: 2000,
        exam: "JAMB",
        q: "1 mole of gas at STP occupies:",
        opts: ["A) 22.4 L", "B) 24 L", "C) 11.2 L", "D) 44.8 L"],
        ans: 0,
        exp: "Molar volume at STP=22.4 L/mol.",
      },
      {
        topic: "Gases & Kinetic Theory",
        year: 2004,
        exam: "JAMB",
        q: "Graham's law: rate of diffusion ∝ 1/",
        opts: ["A) M", "B) √M", "C) density", "D) T"],
        ans: 1,
        exp: "r∝1/√M",
      },
      {
        topic: "Gases & Kinetic Theory",
        year: 2008,
        exam: "JAMB",
        q: "Dalton's law of partial pressures:",
        opts: [
          "A) PV=nRT",
          "B) P_total=ΣPᵢ",
          "C) P∝T const V",
          "D) V∝T const P",
        ],
        ans: 1,
        exp: "P_total=P₁+P₂+...",
      },
      {
        topic: "Gases & Kinetic Theory",
        year: 2012,
        exam: "JAMB",
        q: "Ideal gas equation:",
        opts: ["A) PV=nRT", "B) P=ρgh", "C) PV=RT", "D) P₁V₁=P₂V₂"],
        ans: 0,
        exp: "PV=nRT",
      },
      {
        topic: "Gases & Kinetic Theory",
        year: 2007,
        exam: "WAEC",
        q: "Const T, P doubles. Volume:",
        opts: ["A) Doubles", "B) Halves", "C) Same", "D) Quadruples"],
        ans: 1,
        exp: "Boyle: PV=const; P×2→V÷2.",
      },
      {
        topic: "Gases & Kinetic Theory",
        year: 2011,
        exam: "WAEC",
        q: "Gas pressure due to:",
        opts: [
          "A) Weight of molecules",
          "B) Molecular collisions on walls",
          "C) Temperature",
          "D) Volume",
        ],
        ans: 1,
        exp: "Pressure=force from molecular collisions on container walls.",
      },
      {
        topic: "Gases & Kinetic Theory",
        year: 2015,
        exam: "WAEC",
        q: "Real gases deviate most at:",
        opts: [
          "A) Low P, high T",
          "B) High P, low T",
          "C) Standard conditions",
          "D) All conditions",
        ],
        ans: 1,
        exp: "High P (volume matters) + low T (intermolecular forces).",
      },
      {
        topic: "Periodicity & Elements",
        year: 1999,
        exam: "JAMB",
        q: "Same group elements have same:",
        opts: [
          "A) Neutrons",
          "B) Protons",
          "C) Valence electrons",
          "D) Mass number",
        ],
        ans: 2,
        exp: "Same group=same valence electrons→similar properties.",
      },
      {
        topic: "Periodicity & Elements",
        year: 2002,
        exam: "JAMB",
        q: "Metallic character across period:",
        opts: ["A) Increases", "B) Decreases", "C) Same", "D) Varies"],
        ans: 1,
        exp: "Metallic character decreases left to right across period.",
      },
      {
        topic: "Periodicity & Elements",
        year: 2006,
        exam: "JAMB",
        q: "Noble gases unreactive because:",
        opts: [
          "A) They are gases",
          "B) Complete outer electron shells",
          "C) Small radii",
          "D) Radioactive",
        ],
        ans: 1,
        exp: "Full outer shells→very stable, chemically inert.",
      },
      {
        topic: "Periodicity & Elements",
        year: 2010,
        exam: "JAMB",
        q: "Chlorine (Group 17) forms ion:",
        opts: ["A) +1", "B) −1", "C) +2", "D) −2"],
        ans: 1,
        exp: "Cl gains 1e⁻→Cl⁻",
      },
      {
        topic: "Periodicity & Elements",
        year: 2013,
        exam: "WAEC",
        q: "Most electronegative element:",
        opts: ["A) Oxygen", "B) Chlorine", "C) Nitrogen", "D) Fluorine"],
        ans: 3,
        exp: "Fluorine: highest electronegativity (Pauling 4.0).",
      },
      {
        topic: "Periodicity & Elements",
        year: 2017,
        exam: "WAEC",
        q: "Amphoteric hydroxide:",
        opts: ["A) NaOH", "B) Ca(OH)₂", "C) Al(OH)₃", "D) KOH"],
        ans: 2,
        exp: "Al(OH)₃ reacts with both acids and bases.",
      },
      {
        topic: "Periodicity & Elements",
        year: 2021,
        exam: "WAEC",
        q: "Period 3 element reacting most vigorously with cold water:",
        opts: ["A) Mg", "B) Al", "C) Na", "D) Si"],
        ans: 2,
        exp: "2Na+2H₂O→2NaOH+H₂ (vigorous)",
      },
    ],
  },
  Biology: {
    topics: [
      "Cell Biology",
      "Genetics & Evolution",
      "Human Physiology",
      "Plant Biology",
      "Ecology & Environment",
      "Reproduction",
      "Classification of Organisms",
    ],
    questions: [
      {
        topic: "Cell Biology",
        year: 1999,
        exam: "JAMB",
        q: "Organelle responsible for energy production:",
        opts: ["A) Nucleus", "B) Ribosome", "C) Mitochondria", "D) Golgi body"],
        ans: 2,
        exp: "Mitochondria: powerhouse of cell, produces ATP via aerobic respiration.",
      },
      {
        topic: "Cell Biology",
        year: 2001,
        exam: "JAMB",
        q: "Osmosis: water moves from _____ water potential to _____:",
        opts: [
          "A) Low to high",
          "B) High solute to low",
          "C) High to low water potential",
          "D) High pressure only",
        ],
        ans: 2,
        exp: "Osmosis: water moves from high to low water potential through semipermeable membrane.",
      },
      {
        topic: "Cell Biology",
        year: 2003,
        exam: "JAMB",
        q: "DNA mainly found in:",
        opts: ["A) Ribosome", "B) Cytoplasm", "C) Nucleus", "D) Cell membrane"],
        ans: 2,
        exp: "DNA in nucleus (chromosomes) and also mitochondria/chloroplasts.",
      },
      {
        topic: "Cell Biology",
        year: 2005,
        exam: "JAMB",
        q: "Found in plant cells but NOT animal cells:",
        opts: [
          "A) Nucleus",
          "B) Cell membrane",
          "C) Cell wall",
          "D) Mitochondria",
        ],
        ans: 2,
        exp: "Plant: cell wall (cellulose), chloroplasts, large vacuole — absent in animal cells.",
      },
      {
        topic: "Cell Biology",
        year: 2007,
        exam: "JAMB",
        q: "Cell division producing gametes:",
        opts: ["A) Mitosis", "B) Binary fission", "C) Meiosis", "D) Budding"],
        ans: 2,
        exp: "Meiosis produces haploid gametes (sperm, eggs).",
      },
      {
        topic: "Cell Biology",
        year: 2009,
        exam: "JAMB",
        q: "Enzymes are biological catalysts made of:",
        opts: [
          "A) Carbohydrates",
          "B) Lipids",
          "C) Proteins",
          "D) Nucleic acids",
        ],
        ans: 2,
        exp: "Enzymes are proteins (or RNA ribozymes).",
      },
      {
        topic: "Cell Biology",
        year: 2011,
        exam: "JAMB",
        q: "First stage of mitosis:",
        opts: ["A) Metaphase", "B) Anaphase", "C) Telophase", "D) Prophase"],
        ans: 3,
        exp: "PMAT: Prophase is first stage.",
      },
      {
        topic: "Cell Biology",
        year: 2013,
        exam: "JAMB",
        q: "Diffusion: molecules move from _____ concentration:",
        opts: [
          "A) Low to high",
          "B) High to low",
          "C) Equal",
          "D) High pressure only",
        ],
        ans: 1,
        exp: "Diffusion: high→low concentration (down gradient).",
      },
      {
        topic: "Cell Biology",
        year: 2015,
        exam: "JAMB",
        q: "Cell's energy currency:",
        opts: ["A) DNA", "B) ATP", "C) ADP", "D) RNA"],
        ans: 1,
        exp: "ATP (adenosine triphosphate) powers cellular processes.",
      },
      {
        topic: "Cell Biology",
        year: 2017,
        exam: "JAMB",
        q: "Ribosome is site of:",
        opts: [
          "A) DNA replication",
          "B) Photosynthesis",
          "C) Protein synthesis",
          "D) Lipid metabolism",
        ],
        ans: 2,
        exp: "Ribosomes: translation of mRNA into protein.",
      },
      {
        topic: "Cell Biology",
        year: 2019,
        exam: "JAMB",
        q: "Active transport requires:",
        opts: [
          "A) No energy",
          "B) ATP",
          "C) Only water",
          "D) Concentration gradient",
        ],
        ans: 1,
        exp: "Active transport moves against gradient using ATP.",
      },
      {
        topic: "Cell Biology",
        year: 2000,
        exam: "WAEC",
        q: "Lysosomes contain:",
        opts: [
          "A) Digestive enzymes",
          "B) DNA",
          "C) Chlorophyll",
          "D) Ribosomes",
        ],
        ans: 0,
        exp: "Lysosomes: hydrolytic enzymes break down materials.",
      },
      {
        topic: "Cell Biology",
        year: 2004,
        exam: "WAEC",
        q: "Highest resolution microscope:",
        opts: [
          "A) Light microscope",
          "B) Electron microscope",
          "C) Phase-contrast",
          "D) Fluorescence",
        ],
        ans: 1,
        exp: "Electron microscope: shorter wavelength → much higher resolution.",
      },
      {
        topic: "Cell Biology",
        year: 2008,
        exam: "WAEC",
        q: "Golgi apparatus responsible for:",
        opts: [
          "A) Energy production",
          "B) Protein modification and packaging",
          "C) DNA storage",
          "D) Photosynthesis",
        ],
        ans: 1,
        exp: "Golgi: processes, modifies, sorts and packages proteins.",
      },
      {
        topic: "Cell Biology",
        year: 2012,
        exam: "WAEC",
        q: "Plasmolysis occurs when plant cell placed in:",
        opts: [
          "A) Distilled water",
          "B) Hypotonic solution",
          "C) Hypertonic solution",
          "D) Isotonic solution",
        ],
        ans: 2,
        exp: "Hypertonic: water leaves cell by osmosis → plasmolysis.",
      },
      {
        topic: "Cell Biology",
        year: 2016,
        exam: "WAEC",
        q: "Fluid-mosaic model describes:",
        opts: ["A) Cell wall", "B) Nucleus", "C) Plasma membrane", "D) ER"],
        ans: 2,
        exp: "Singer & Nicolson (1972): plasma membrane = fluid phospholipid bilayer + embedded proteins.",
      },
      {
        topic: "Cell Biology",
        year: 2020,
        exam: "WAEC",
        q: "Eukaryotic cell characteristic NOT found in prokaryotes:",
        opts: [
          "A) Cell membrane",
          "B) No membrane-bound organelles",
          "C) Mitochondria",
          "D) Ribosomes",
        ],
        ans: 2,
        exp: "Prokaryotes lack membrane-bound organelles like mitochondria.",
      },
      {
        topic: "Cell Biology",
        year: 2024,
        exam: "JAMB",
        q: "Chloroplast is site of:",
        opts: [
          "A) Aerobic respiration",
          "B) Protein synthesis",
          "C) Photosynthesis",
          "D) Cell division",
        ],
        ans: 2,
        exp: "Chloroplasts contain chlorophyll; site of photosynthesis.",
      },
      {
        topic: "Genetics & Evolution",
        year: 1999,
        exam: "JAMB",
        q: "Mendel's law of segregation states:",
        opts: [
          "A) Traits blend",
          "B) Alleles separate during gamete formation",
          "C) Dominant traits more common",
          "D) All offspring identical",
        ],
        ans: 1,
        exp: "Segregation: alleles separate during meiosis; each gamete carries one allele.",
      },
      {
        topic: "Genetics & Evolution",
        year: 2001,
        exam: "JAMB",
        q: "Blood group AB genotype:",
        opts: ["A) I^AI^A or I^Ai", "B) I^BI^B or I^Bi", "C) I^AI^B", "D) ii"],
        ans: 2,
        exp: "AB: codominance I^AI^B; both A and B antigens expressed.",
      },
      {
        topic: "Genetics & Evolution",
        year: 2003,
        exam: "JAMB",
        q: "Sickle-cell anaemia caused by:",
        opts: [
          "A) A virus",
          "B) Chromosomal mutation",
          "C) Point mutation in haemoglobin gene",
          "D) Nutritional deficiency",
        ],
        ans: 2,
        exp: "Single base substitution: glutamic acid→valine in β-globin gene.",
      },
      {
        topic: "Genetics & Evolution",
        year: 2005,
        exam: "JAMB",
        q: "Theory of evolution by natural selection proposed by:",
        opts: ["A) Mendel", "B) Pasteur", "C) Darwin", "D) Lamarck"],
        ans: 2,
        exp: "Charles Darwin: 'On the Origin of Species' (1859).",
      },
      {
        topic: "Genetics & Evolution",
        year: 2007,
        exam: "JAMB",
        q: "Tt × Tt. Probability of tall offspring (T dominant):",
        opts: ["A) 25%", "B) 50%", "C) 75%", "D) 100%"],
        ans: 2,
        exp: "Tt×Tt: TT:Tt:tt=1:2:1. Tall=3/4=75%.",
      },
      {
        topic: "Genetics & Evolution",
        year: 2009,
        exam: "JAMB",
        q: "Sex-linked traits carried on:",
        opts: [
          "A) Autosomes",
          "B) Sex chromosomes",
          "C) Mitochondria",
          "D) Ribosomes",
        ],
        ans: 1,
        exp: "Sex-linked genes on X (or Y) chromosomes, e.g. haemophilia, colour blindness.",
      },
      {
        topic: "Genetics & Evolution",
        year: 2011,
        exam: "JAMB",
        q: "Mutation is a change in the:",
        opts: [
          "A) Environment",
          "B) Phenotype only",
          "C) DNA sequence",
          "D) Cell membrane",
        ],
        ans: 2,
        exp: "Mutation: heritable change in DNA sequence.",
      },
      {
        topic: "Genetics & Evolution",
        year: 2015,
        exam: "JAMB",
        q: "Evidence for evolution:",
        opts: [
          "A) Vestigial structures",
          "B) Cell membrane structure",
          "C) Enzyme activity",
          "D) Osmosis",
        ],
        ans: 0,
        exp: "Vestigial structures (e.g. human coccyx) are remnants from ancestors — evidence for evolution.",
      },
      {
        topic: "Genetics & Evolution",
        year: 2002,
        exam: "WAEC",
        q: "Carrier of malaria parasite:",
        opts: [
          "A) Male Anopheles",
          "B) Female Anopheles",
          "C) Culex mosquito",
          "D) Aedes mosquito",
        ],
        ans: 1,
        exp: "Female Anopheles transmits Plasmodium (malaria).",
      },
      {
        topic: "Genetics & Evolution",
        year: 2006,
        exam: "WAEC",
        q: "Down syndrome caused by:",
        opts: [
          "A) Single gene mutation",
          "B) Trisomy 21",
          "C) X chromosome deletion",
          "D) Environment",
        ],
        ans: 1,
        exp: "Down syndrome: trisomy 21 (nondisjunction during meiosis).",
      },
      {
        topic: "Genetics & Evolution",
        year: 2010,
        exam: "WAEC",
        q: "Molecular basis of Mendelian genetics:",
        opts: ["A) Proteins", "B) Lipids", "C) DNA", "D) Carbohydrates"],
        ans: 2,
        exp: "Genes are DNA segments; Mendel's factors correspond to DNA sequences.",
      },
      {
        topic: "Genetics & Evolution",
        year: 2014,
        exam: "WAEC",
        q: "Analogous structures have same _____ but different _____:",
        opts: [
          "A) Structure and origin",
          "B) Function; origin",
          "C) DNA sequence",
          "D) Found in vertebrates only",
        ],
        ans: 1,
        exp: "Analogous: same function, different evolutionary origin (e.g. bird wing vs insect wing).",
      },
      {
        topic: "Genetics & Evolution",
        year: 2018,
        exam: "WAEC",
        q: "X-linked recessive condition:",
        opts: [
          "A) Down syndrome",
          "B) Colour blindness",
          "C) Sickle-cell anaemia",
          "D) Turner syndrome",
        ],
        ans: 1,
        exp: "Colour blindness: X-linked recessive; males more affected (XY only one X).",
      },
      {
        topic: "Human Physiology",
        year: 1999,
        exam: "JAMB",
        q: "Blood group O is universal donor because:",
        opts: [
          "A) No antibodies",
          "B) No A or B antigens on RBCs",
          "C) Both A and B antigens",
          "D) All clotting factors",
        ],
        ans: 1,
        exp: "Group O: no A or B antigens → no agglutination in recipients.",
      },
      {
        topic: "Human Physiology",
        year: 2001,
        exam: "JAMB",
        q: "Functional unit of the kidney:",
        opts: ["A) Alveolus", "B) Nephron", "C) Neuron", "D) Villus"],
        ans: 1,
        exp: "Nephron: structural and functional unit of kidney.",
      },
      {
        topic: "Human Physiology",
        year: 2003,
        exam: "JAMB",
        q: "Brain part controlling balance and coordination:",
        opts: [
          "A) Cerebrum",
          "B) Medulla oblongata",
          "C) Hypothalamus",
          "D) Cerebellum",
        ],
        ans: 3,
        exp: "Cerebellum: balance, coordination, fine motor skills.",
      },
      {
        topic: "Human Physiology",
        year: 2005,
        exam: "JAMB",
        q: "Insulin produced by:",
        opts: ["A) Liver", "B) Pancreas", "C) Thyroid", "D) Adrenal gland"],
        ans: 1,
        exp: "Beta cells of islets of Langerhans in pancreas secrete insulin.",
      },
      {
        topic: "Human Physiology",
        year: 2007,
        exam: "JAMB",
        q: "Enzyme beginning starch digestion in mouth:",
        opts: ["A) Lipase", "B) Pepsin", "C) Salivary amylase", "D) Trypsin"],
        ans: 2,
        exp: "Salivary amylase (ptyalin) hydrolyses starch to maltose.",
      },
      {
        topic: "Human Physiology",
        year: 2009,
        exam: "JAMB",
        q: "Haemoglobin found in:",
        opts: [
          "A) White blood cells",
          "B) Plasma",
          "C) Platelets",
          "D) Red blood cells",
        ],
        ans: 3,
        exp: "Haemoglobin in red blood cells (erythrocytes) carries oxygen.",
      },
      {
        topic: "Human Physiology",
        year: 2011,
        exam: "JAMB",
        q: "Site of gaseous exchange in lungs:",
        opts: ["A) Bronchi", "B) Trachea", "C) Alveoli", "D) Bronchioles"],
        ans: 2,
        exp: "Alveoli: thin walls, large surface area for O₂/CO₂ exchange.",
      },
      {
        topic: "Human Physiology",
        year: 2013,
        exam: "JAMB",
        q: "Peristalsis occurs in the:",
        opts: ["A) Heart", "B) Lungs", "C) Alimentary canal", "D) Brain"],
        ans: 2,
        exp: "Peristalsis: wave-like muscular contractions move food along gut.",
      },
      {
        topic: "Human Physiology",
        year: 2015,
        exam: "JAMB",
        q: "Neurotransmitter at neuromuscular junction:",
        opts: [
          "A) Dopamine",
          "B) Serotonin",
          "C) Acetylcholine",
          "D) Adrenaline",
        ],
        ans: 2,
        exp: "Acetylcholine released at neuromuscular junction to stimulate muscle.",
      },
      {
        topic: "Human Physiology",
        year: 2017,
        exam: "JAMB",
        q: "Hormone for 'fight or flight' response:",
        opts: ["A) Insulin", "B) Thyroxine", "C) Adrenaline", "D) Glucagon"],
        ans: 2,
        exp: "Adrenaline (adrenal medulla): increases heart rate, blood glucose, alertness.",
      },
      {
        topic: "Human Physiology",
        year: 2000,
        exam: "WAEC",
        q: "Bile produced by _____, stored in _____:",
        opts: [
          "A) Pancreas; stomach",
          "B) Liver; gall bladder",
          "C) Stomach; liver",
          "D) Gall bladder; liver",
        ],
        ans: 1,
        exp: "Liver produces bile; gall bladder stores it before release into duodenum.",
      },
      {
        topic: "Human Physiology",
        year: 2004,
        exam: "WAEC",
        q: "Immune memory cells are:",
        opts: [
          "A) Neutrophils",
          "B) B and T lymphocytes",
          "C) Red blood cells",
          "D) Platelets",
        ],
        ans: 1,
        exp: "Memory B and T lymphocytes persist after infection for rapid response.",
      },
      {
        topic: "Human Physiology",
        year: 2008,
        exam: "WAEC",
        q: "Urea produced in liver from:",
        opts: [
          "A) Fatty acid breakdown",
          "B) Amino acid deamination",
          "C) Glucose metabolism",
          "D) Glycogen storage",
        ],
        ans: 1,
        exp: "Deamination: amino acids lose –NH₂ → ammonia → urea cycle → urea.",
      },
      {
        topic: "Human Physiology",
        year: 2012,
        exam: "WAEC",
        q: "Systole refers to:",
        opts: [
          "A) Relaxation of heart",
          "B) Contraction of heart chambers",
          "C) Blood pressure in veins",
          "D) Oxygen uptake",
        ],
        ans: 1,
        exp: "Systole: ventricles contract, pushing blood out. Diastole: relaxation/filling.",
      },
      {
        topic: "Human Physiology",
        year: 2016,
        exam: "WAEC",
        q: "ADH promotes water reabsorption in:",
        opts: [
          "A) Loop of Henle",
          "B) Collecting duct",
          "C) Glomerulus",
          "D) Bowman's capsule",
        ],
        ans: 1,
        exp: "ADH (antidiuretic hormone) acts on collecting duct to concentrate urine.",
      },
      {
        topic: "Human Physiology",
        year: 2020,
        exam: "WAEC",
        q: "Arteries differ from veins in having:",
        opts: [
          "A) Deoxygenated blood",
          "B) Valves",
          "C) Thicker muscular walls",
          "D) Narrower lumen",
        ],
        ans: 2,
        exp: "Arteries: thick muscular walls for high blood pressure. Veins: valves prevent backflow.",
      },
      {
        topic: "Plant Biology",
        year: 1999,
        exam: "JAMB",
        q: "Raw materials for photosynthesis:",
        opts: [
          "A) Glucose and oxygen",
          "B) CO₂ and water",
          "C) Starch and chlorophyll",
          "D) Oxygen and water",
        ],
        ans: 1,
        exp: "Photosynthesis: 6CO₂+6H₂O→C₆H₁₂O₆+6O₂",
      },
      {
        topic: "Plant Biology",
        year: 2001,
        exam: "JAMB",
        q: "Transpiration: water lost through:",
        opts: [
          "A) Roots",
          "B) Stomata",
          "C) Lenticels",
          "D) Stomata and lenticels",
        ],
        ans: 3,
        exp: "~90% through stomata, ~10% through lenticels.",
      },
      {
        topic: "Plant Biology",
        year: 2003,
        exam: "JAMB",
        q: "Chlorophyll found in:",
        opts: [
          "A) Mitochondria",
          "B) Nucleus",
          "C) Chloroplast",
          "D) Golgi body",
        ],
        ans: 2,
        exp: "Chlorophyll in thylakoid membranes of chloroplast.",
      },
      {
        topic: "Plant Biology",
        year: 2005,
        exam: "JAMB",
        q: "Guard cells control opening of:",
        opts: [
          "A) Lenticels",
          "B) Stomata",
          "C) Xylem vessels",
          "D) Root hairs",
        ],
        ans: 1,
        exp: "Guard cells regulate stomatal opening for gas exchange.",
      },
      {
        topic: "Plant Biology",
        year: 2007,
        exam: "JAMB",
        q: "Vascular tissue transporting water in plants:",
        opts: ["A) Phloem", "B) Xylem", "C) Cambium", "D) Cortex"],
        ans: 1,
        exp: "Xylem: water/minerals from roots to leaves (transpiration stream).",
      },
      {
        topic: "Plant Biology",
        year: 2009,
        exam: "JAMB",
        q: "Calvin cycle (dark reaction) occurs in:",
        opts: [
          "A) Stroma of chloroplast",
          "B) Mitochondria",
          "C) Cytoplasm",
          "D) Thylakoid",
        ],
        ans: 0,
        exp: "Calvin cycle in stroma; light reactions in thylakoids.",
      },
      {
        topic: "Plant Biology",
        year: 2011,
        exam: "JAMB",
        q: "Auxin promotes plant growth by:",
        opts: [
          "A) Inhibiting cell elongation",
          "B) Promoting cell elongation on shaded side",
          "C) Reducing water uptake",
          "D) Closing stomata",
        ],
        ans: 1,
        exp: "Auxin accumulates on shaded side → cells elongate → bending toward light.",
      },
      {
        topic: "Plant Biology",
        year: 2000,
        exam: "WAEC",
        q: "Process by which green plants make food:",
        opts: [
          "A) Respiration",
          "B) Digestion",
          "C) Photosynthesis",
          "D) Transpiration",
        ],
        ans: 2,
        exp: "Photosynthesis: light+CO₂+H₂O→glucose+O₂",
      },
      {
        topic: "Plant Biology",
        year: 2004,
        exam: "WAEC",
        q: "Tap-root system example:",
        opts: ["A) Maize", "B) Grass", "C) Carrot", "D) Sugarcane"],
        ans: 2,
        exp: "Carrot has tap root (one main primary root + lateral roots).",
      },
      {
        topic: "Plant Biology",
        year: 2008,
        exam: "WAEC",
        q: "Legumes fix nitrogen through:",
        opts: [
          "A) Photosynthesis",
          "B) Rhizobium in root nodules",
          "C) Denitrification",
          "D) Soil absorption only",
        ],
        ans: 1,
        exp: "Rhizobium in root nodules: N₂→NH₃ (mutualism with legume).",
      },
      {
        topic: "Plant Biology",
        year: 2020,
        exam: "WAEC",
        q: "Xylem characterised by:",
        opts: [
          "A) Living cells with companion cells",
          "B) Dead hollow lignified tubes",
          "C) Living sieve tubes",
          "D) Active sugar transport",
        ],
        ans: 1,
        exp: "Mature xylem: dead hollow lignified tubes; passive water transport.",
      },
      {
        topic: "Ecology & Environment",
        year: 1999,
        exam: "JAMB",
        q: "Food chain begins with:",
        opts: ["A) Consumer", "B) Decomposer", "C) Producer", "D) Herbivore"],
        ans: 2,
        exp: "Food chains start with producer (autotroph) capturing light energy.",
      },
      {
        topic: "Ecology & Environment",
        year: 2002,
        exam: "JAMB",
        q: "Decomposers role:",
        opts: [
          "A) Produce food",
          "B) Break down dead organic matter",
          "C) Eat primary consumers",
          "D) Fix nitrogen",
        ],
        ans: 1,
        exp: "Decomposers (bacteria, fungi) recycle nutrients from dead matter.",
      },
      {
        topic: "Ecology & Environment",
        year: 2005,
        exam: "JAMB",
        q: "Biodiversity refers to:",
        opts: [
          "A) Number of individuals",
          "B) Variety of life forms",
          "C) Rate of evolution",
          "D) Energy flow",
        ],
        ans: 1,
        exp: "Biodiversity: variety of life (genes, species, ecosystems).",
      },
      {
        topic: "Ecology & Environment",
        year: 2008,
        exam: "JAMB",
        q: "Example of mutualism:",
        opts: [
          "A) Tapeworm in human",
          "B) Rhizobium in legume roots",
          "C) Mistletoe on tree",
          "D) Mosquito on human",
        ],
        ans: 1,
        exp: "Mutualism: both benefit. Rhizobium fixes N₂ for plant; plant provides carbon.",
      },
      {
        topic: "Ecology & Environment",
        year: 2011,
        exam: "JAMB",
        q: "Greenhouse effect: gases trap:",
        opts: [
          "A) Sunlight",
          "B) Infrared radiation",
          "C) Ozone",
          "D) Acid rain",
        ],
        ans: 1,
        exp: "CO₂, CH₄ absorb and re-emit infrared, warming Earth.",
      },
      {
        topic: "Ecology & Environment",
        year: 2014,
        exam: "JAMB",
        q: "Primary consumer:",
        opts: ["A) Hawk", "B) Grass", "C) Grasshopper", "D) Frog"],
        ans: 2,
        exp: "Grasshoppers eat grass (producers) → primary consumers.",
      },
      {
        topic: "Ecology & Environment",
        year: 2017,
        exam: "JAMB",
        q: "Ozone layer protects from:",
        opts: ["A) Infrared", "B) Ultraviolet", "C) Gamma", "D) Radio waves"],
        ans: 1,
        exp: "Ozone absorbs harmful UV radiation from sun.",
      },
      {
        topic: "Ecology & Environment",
        year: 2001,
        exam: "WAEC",
        q: "Eutrophication caused by excess:",
        opts: ["A) Oxygen", "B) CO₂", "C) Nitrogen and phosphorus", "D) Iron"],
        ans: 2,
        exp: "Excess N and P → algal blooms → oxygen depletion.",
      },
      {
        topic: "Ecology & Environment",
        year: 2009,
        exam: "WAEC",
        q: "Pyramid of numbers shows:",
        opts: [
          "A) Energy per trophic level",
          "B) Biomass per trophic level",
          "C) Number of organisms per trophic level",
          "D) Energy loss rate",
        ],
        ans: 2,
        exp: "Pyramid of numbers: organism count at each trophic level.",
      },
      {
        topic: "Ecology & Environment",
        year: 2013,
        exam: "WAEC",
        q: "Acid rain caused by:",
        opts: [
          "A) CO₂ and water",
          "B) SO₂ and NO₂",
          "C) Ozone depletion",
          "D) Methane",
        ],
        ans: 1,
        exp: "SO₂+NO₂ dissolve in rain → H₂SO₄+HNO₃ (acid rain).",
      },
      {
        topic: "Reproduction",
        year: 2000,
        exam: "JAMB",
        q: "Fertilization defined as:",
        opts: [
          "A) Embryo development",
          "B) Fusion of sperm and egg nuclei",
          "C) Implantation",
          "D) Egg release",
        ],
        ans: 1,
        exp: "Fertilization: male+female gamete nuclei fuse → zygote.",
      },
      {
        topic: "Reproduction",
        year: 2003,
        exam: "JAMB",
        q: "Placenta functions to:",
        opts: [
          "A) Produce fetal urine",
          "B) Exchange nutrients/gases mother↔fetus",
          "C) Produce sperm",
          "D) Cover ovary",
        ],
        ans: 1,
        exp: "Placenta: exchanges O₂, nutrients, waste between maternal and fetal blood.",
      },
      {
        topic: "Reproduction",
        year: 2007,
        exam: "JAMB",
        q: "Ovulation refers to:",
        opts: [
          "A) Fertilization",
          "B) Release of mature egg from ovary",
          "C) Implantation",
          "D) Menstruation",
        ],
        ans: 1,
        exp: "Ovulation: release of secondary oocyte from Graafian follicle (~day 14).",
      },
      {
        topic: "Reproduction",
        year: 2011,
        exam: "JAMB",
        q: "Human sex determined by:",
        opts: [
          "A) Mother's chromosomes",
          "B) Father's sperm (X or Y)",
          "C) Environment",
          "D) Hormones at birth",
        ],
        ans: 1,
        exp: "X-sperm→girl(XX); Y-sperm→boy(XY). Father determines sex.",
      },
      {
        topic: "Reproduction",
        year: 2002,
        exam: "WAEC",
        q: "Pollination is transfer of pollen from:",
        opts: [
          "A) Stigma to anther",
          "B) Anther to stigma",
          "C) Petal to sepal",
          "D) Ovary to stigma",
        ],
        ans: 1,
        exp: "Pollination: pollen from anther (male) → stigma (female).",
      },
      {
        topic: "Reproduction",
        year: 2006,
        exam: "WAEC",
        q: "Menstrual cycle controlled by:",
        opts: [
          "A) Insulin and glucagon",
          "B) FSH, LH, oestrogen, progesterone",
          "C) Adrenaline and cortisol",
          "D) Thyroid hormones",
        ],
        ans: 1,
        exp: "FSH/LH (pituitary) + oestrogen/progesterone (ovaries) control cycle.",
      },
      {
        topic: "Reproduction",
        year: 2010,
        exam: "WAEC",
        q: "Identical twins result from:",
        opts: [
          "A) Two eggs+two sperm",
          "B) One zygote splitting",
          "C) Parthenogenesis",
          "D) Fraternal fertilization",
        ],
        ans: 1,
        exp: "Monozygotic (identical) twins: one zygote splits into two identical embryos.",
      },
      {
        topic: "Reproduction",
        year: 2014,
        exam: "WAEC",
        q: "Gametes produced by:",
        opts: ["A) Mitosis", "B) Binary fission", "C) Meiosis", "D) Budding"],
        ans: 2,
        exp: "Meiosis produces haploid gametes.",
      },
      {
        topic: "Reproduction",
        year: 2018,
        exam: "WAEC",
        q: "Hormone maintaining pregnancy:",
        opts: ["A) Oestrogen", "B) FSH", "C) LH", "D) Progesterone"],
        ans: 3,
        exp: "Progesterone maintains uterine lining and prevents further ovulation.",
      },
      {
        topic: "Classification of Organisms",
        year: 1999,
        exam: "JAMB",
        q: "Five-kingdom classification proposed by:",
        opts: ["A) Linnaeus", "B) Whittaker", "C) Darwin", "D) Woese"],
        ans: 1,
        exp: "Robert Whittaker (1969): Monera, Protista, Fungi, Plantae, Animalia.",
      },
      {
        topic: "Classification of Organisms",
        year: 2003,
        exam: "JAMB",
        q: "Viruses differ from bacteria because viruses:",
        opts: [
          "A) Are larger",
          "B) Reproduce independently",
          "C) Are non-cellular, need host to replicate",
          "D) Have cell walls",
        ],
        ans: 2,
        exp: "Viruses: acellular, lack organelles, replicate only inside host cells.",
      },
      {
        topic: "Classification of Organisms",
        year: 2007,
        exam: "JAMB",
        q: "Mammals characterised by:",
        opts: [
          "A) Laying eggs",
          "B) Having scales",
          "C) Suckling young with milk",
          "D) Three-chambered heart",
        ],
        ans: 2,
        exp: "Mammals: warm-blooded, hair/fur, feed young with milk from mammary glands.",
      },
      {
        topic: "Classification of Organisms",
        year: 2011,
        exam: "JAMB",
        q: "Flatworm (Platyhelminthes) example:",
        opts: ["A) Earthworm", "B) Tapeworm", "C) Roundworm", "D) Leech"],
        ans: 1,
        exp: "Tapeworm=Platyhelminthes; earthworm/leech=Annelida; roundworm=Nematoda.",
      },
      {
        topic: "Classification of Organisms",
        year: 2001,
        exam: "WAEC",
        q: "Basic unit of classification:",
        opts: ["A) Family", "B) Genus", "C) Species", "D) Order"],
        ans: 2,
        exp: "Species: members can interbreed to produce fertile offspring.",
      },
      {
        topic: "Classification of Organisms",
        year: 2005,
        exam: "WAEC",
        q: "Arthropods characterised by:",
        opts: [
          "A) Radial symmetry",
          "B) Jointed appendages and exoskeleton",
          "C) Notochord",
          "D) Five-part body plan",
        ],
        ans: 1,
        exp: "Arthropoda: jointed legs, chitin exoskeleton, segmented body.",
      },
      {
        topic: "Classification of Organisms",
        year: 2009,
        exam: "WAEC",
        q: "Binomial nomenclature uses:",
        opts: [
          "A) Class and order",
          "B) Family and genus",
          "C) Genus and species",
          "D) Kingdom and phylum",
        ],
        ans: 2,
        exp: "Binomial (Linnaeus): Genus+species (e.g. Homo sapiens).",
      },
      {
        topic: "Classification of Organisms",
        year: 2013,
        exam: "WAEC",
        q: "Vertebrates living in water as larvae and land as adults:",
        opts: ["A) Reptilia", "B) Aves", "C) Amphibia", "D) Mammalia"],
        ans: 2,
        exp: "Amphibians: water (larvae) + land (adults), e.g. frogs, toads.",
      },
      {
        topic: "Classification of Organisms",
        year: 2017,
        exam: "WAEC",
        q: "Prokaryotes lack:",
        opts: [
          "A) Membrane-bound organelles and defined nucleus",
          "B) Cell membrane",
          "C) Ribosomes",
          "D) DNA",
        ],
        ans: 0,
        exp: "Prokaryotes: no membrane-bound nucleus; DNA in cytoplasm (nucleoid).",
      },
    ],
  },
  Mathematics: {
    topics: [
      "Number & Numeration",
      "Algebra",
      "Geometry & Trigonometry",
      "Statistics & Probability",
      "Calculus",
      "Sequences & Series",
      "Matrices & Determinants",
    ],
    questions: [
      {
        topic: "Number & Numeration",
        year: 1999,
        exam: "JAMB",
        q: "Evaluate log₁₀ 1000:",
        opts: ["A) 2", "B) 3", "C) 100", "D) 10"],
        ans: 1,
        exp: "log₁₀ 10³ = 3",
      },
      {
        topic: "Number & Numeration",
        year: 2001,
        exam: "JAMB",
        q: "Convert 110₂ to base 10:",
        opts: ["A) 5", "B) 6", "C) 7", "D) 4"],
        ans: 1,
        exp: "1×4+1×2+0=6",
      },
      {
        topic: "Number & Numeration",
        year: 2003,
        exam: "JAMB",
        q: "Simplify 3¼ – 1⅔ + 2⅓:",
        opts: ["A) 3 11/12", "B) 4 1/12", "C) 3 5/6", "D) 4 5/12"],
        ans: 0,
        exp: "13/4–5/3+7/3=39/12–20/12+28/12=47/12=3 11/12",
      },
      {
        topic: "Number & Numeration",
        year: 2005,
        exam: "JAMB",
        q: "LCM of 12, 18 and 24:",
        opts: ["A) 36", "B) 72", "C) 144", "D) 48"],
        ans: 1,
        exp: "12=2²×3; 18=2×3²; 24=2³×3. LCM=2³×3²=72",
      },
      {
        topic: "Number & Numeration",
        year: 2007,
        exam: "JAMB",
        q: "If 3x+5=2x–3, find x:",
        opts: ["A) 8", "B) −8", "C) 2", "D) −2"],
        ans: 1,
        exp: "3x−2x=−3−5; x=−8",
      },
      {
        topic: "Number & Numeration",
        year: 2009,
        exam: "JAMB",
        q: "0.00275 in standard form:",
        opts: ["A) 2.75×10⁻²", "B) 2.75×10⁻³", "C) 27.5×10⁻³", "D) 2.75×10⁻⁴"],
        ans: 1,
        exp: "0.00275=2.75×10⁻³",
      },
      {
        topic: "Number & Numeration",
        year: 2011,
        exam: "JAMB",
        q: "Trader buys at ₦500, sells at ₦650. Profit%:",
        opts: ["A) 25%", "B) 30%", "C) 15%", "D) 23%"],
        ans: 1,
        exp: "(150/500)×100=30%",
      },
      {
        topic: "Number & Numeration",
        year: 2013,
        exam: "JAMB",
        q: "Simplify √48+√75–√27:",
        opts: ["A) 4√3", "B) 6√3", "C) 8√3", "D) 5√3"],
        ans: 1,
        exp: "4√3+5√3–3√3=6√3",
      },
      {
        topic: "Number & Numeration",
        year: 2015,
        exam: "JAMB",
        q: "250 m to 2 km in simplest ratio:",
        opts: ["A) 1:8", "B) 1:4", "C) 125:1000", "D) 1:16"],
        ans: 0,
        exp: "250:2000=1:8",
      },
      {
        topic: "Number & Numeration",
        year: 2017,
        exam: "JAMB",
        q: "If 2^x=16, find x:",
        opts: ["A) 2", "B) 4", "C) 8", "D) 6"],
        ans: 1,
        exp: "2^x=2⁴; x=4",
      },
      {
        topic: "Number & Numeration",
        year: 2019,
        exam: "JAMB",
        q: "Evaluate (27)^(−2/3):",
        opts: ["A) 1/9", "B) 9", "C) 1/3", "D) −9"],
        ans: 0,
        exp: "27^(2/3)=(3³)^(2/3)=3²=9; so (27)^(−2/3)=1/9",
      },
      {
        topic: "Number & Numeration",
        year: 2021,
        exam: "JAMB",
        q: "Simple interest on ₦12,000 for 3 years at 5%:",
        opts: ["A) ₦1,800", "B) ₦600", "C) ₦1,500", "D) ₦900"],
        ans: 0,
        exp: "SI=PRT/100=12000×5×3/100=₦1,800",
      },
      {
        topic: "Number & Numeration",
        year: 2023,
        exam: "JAMB",
        q: "log₂8+log₂4–log₂2:",
        opts: ["A) 3", "B) 4", "C) 5", "D) 6"],
        ans: 1,
        exp: "3+2–1=4 (or log₂(8×4/2)=log₂16=4)",
      },
      {
        topic: "Number & Numeration",
        year: 2000,
        exam: "WAEC",
        q: "If 2^(3x)=64, find x:",
        opts: ["A) 1", "B) 2", "C) 3", "D) 4"],
        ans: 1,
        exp: "2^(3x)=2⁶; 3x=6; x=2",
      },
      {
        topic: "Number & Numeration",
        year: 2008,
        exam: "WAEC",
        q: "Simplify (2³×4²)/2⁴:",
        opts: ["A) 8", "B) 4", "C) 16", "D) 2"],
        ans: 0,
        exp: "=2³×2⁴/2⁴=2³=8",
      },
      {
        topic: "Number & Numeration",
        year: 2016,
        exam: "WAEC",
        q: "Salary ₦80,000 reduced by 15%. New salary:",
        opts: ["A) ₦68,000", "B) ₦12,000", "C) ₦65,000", "D) ₦70,000"],
        ans: 0,
        exp: "80,000−(0.15×80,000)=80,000−12,000=68,000",
      },
      {
        topic: "Number & Numeration",
        year: 2020,
        exam: "WAEC",
        q: "Evaluate (0.25)²÷(0.5)³:",
        opts: ["A) 0.5", "B) 2", "C) 0.125", "D) 0.25"],
        ans: 0,
        exp: "0.0625/0.125=0.5",
      },
      {
        topic: "Number & Numeration",
        year: 2004,
        exam: "WAEC",
        q: "Evaluate 3²+4²–2(3)(4)cos60°:",
        opts: ["A) 13", "B) 15", "C) 10", "D) 12"],
        ans: 0,
        exp: "9+16–24(0.5)=25–12=13",
      },
      {
        topic: "Algebra",
        year: 1999,
        exam: "JAMB",
        q: "Factorize x²–5x+6:",
        opts: [
          "A) (x−2)(x−3)",
          "B) (x+2)(x+3)",
          "C) (x−1)(x−6)",
          "D) (x−2)(x+3)",
        ],
        ans: 0,
        exp: "Two numbers multiply to 6, add to −5: −2,−3. (x−2)(x−3).",
      },
      {
        topic: "Algebra",
        year: 2001,
        exam: "JAMB",
        q: "Solve x²–x–6=0:",
        opts: ["A) x=3,−2", "B) x=−3,2", "C) x=6,−1", "D) x=−6,1"],
        ans: 0,
        exp: "(x−3)(x+2)=0; x=3 or x=−2",
      },
      {
        topic: "Algebra",
        year: 2003,
        exam: "JAMB",
        q: "f(x)=2x²–3x+1. Find f(−1):",
        opts: ["A) 6", "B) 4", "C) 0", "D) −4"],
        ans: 0,
        exp: "2(1)+3+1=6",
      },
      {
        topic: "Algebra",
        year: 2005,
        exam: "JAMB",
        q: "Sum of roots of 2x²–5x+3=0:",
        opts: ["A) 5/2", "B) 3/2", "C) −5/2", "D) 2/5"],
        ans: 0,
        exp: "Sum=−b/a=5/2",
      },
      {
        topic: "Algebra",
        year: 2007,
        exam: "JAMB",
        q: "Simplify (x²−9)/(x+3):",
        opts: ["A) x−3", "B) x+3", "C) x²−3", "D) x"],
        ans: 0,
        exp: "x²−9=(x−3)(x+3); divide by (x+3)=x−3",
      },
      {
        topic: "Algebra",
        year: 2009,
        exam: "JAMB",
        q: "Gradient of line 2y−4x=6:",
        opts: ["A) 4", "B) −4", "C) 2", "D) −2"],
        ans: 2,
        exp: "y=2x+3; gradient m=2",
      },
      {
        topic: "Algebra",
        year: 2011,
        exam: "JAMB",
        q: "log x=2, log y=3. Find log(x²y³):",
        opts: ["A) 13", "B) 5", "C) 6", "D) 72"],
        ans: 0,
        exp: "2(2)+3(3)=4+9=13",
      },
      {
        topic: "Algebra",
        year: 2013,
        exam: "JAMB",
        q: "x−2 factor of x²+kx−6. Find k:",
        opts: ["A) −1", "B) 1", "C) 2", "D) −2"],
        ans: 1,
        exp: "x=2: 4+2k−6=0; k=1",
      },
      {
        topic: "Algebra",
        year: 2015,
        exam: "JAMB",
        q: "P={1,2,3,4,5}, Q={3,4,5,6,7}. P∩Q:",
        opts: ["A) {1,2}", "B) {3,4,5}", "C) {6,7}", "D) {1,2,3,4,5,6,7}"],
        ans: 1,
        exp: "Intersection={3,4,5}",
      },
      {
        topic: "Algebra",
        year: 2017,
        exam: "JAMB",
        q: "Solve 3x−2>x+4:",
        opts: ["A) x>3", "B) x<3", "C) x>1", "D) x<1"],
        ans: 0,
        exp: "2x>6; x>3",
      },
      {
        topic: "Algebra",
        year: 2021,
        exam: "JAMB",
        q: "Evaluate ∫₀²(2x+3)dx:",
        opts: ["A) 10", "B) 8", "C) 6", "D) 12"],
        ans: 0,
        exp: "[x²+3x]₀²=(4+6)−0=10",
      },
      {
        topic: "Algebra",
        year: 2000,
        exam: "WAEC",
        q: "Make r subject: A=πr²:",
        opts: ["A) r=A/π", "B) r=√(A/π)", "C) r=A²/π", "D) r=π/A"],
        ans: 1,
        exp: "r²=A/π; r=√(A/π)",
      },
      {
        topic: "Algebra",
        year: 2004,
        exam: "WAEC",
        q: "Simplify (a²−b²)/(a−b):",
        opts: ["A) a−b", "B) a+b", "C) a²+b²", "D) a/b"],
        ans: 1,
        exp: "(a+b)(a−b)/(a−b)=a+b",
      },
      {
        topic: "Algebra",
        year: 2008,
        exam: "WAEC",
        q: "Solve: x+y=7, x−y=3:",
        opts: ["A) x=5,y=2", "B) x=4,y=3", "C) x=3,y=4", "D) x=6,y=1"],
        ans: 0,
        exp: "Add: 2x=10; x=5; y=2",
      },
      {
        topic: "Algebra",
        year: 2012,
        exam: "WAEC",
        q: "Remainder: 3x³−2x²+x−5 divided by (x−1):",
        opts: ["A) −3", "B) −5", "C) −2", "D) 3"],
        ans: 0,
        exp: "f(1)=3−2+1−5=−3",
      },
      {
        topic: "Algebra",
        year: 2020,
        exam: "WAEC",
        q: "Solve |2x−3|=7:",
        opts: ["A) x=5 or x=−2", "B) x=5 or 2", "C) x=−5 or 2", "D) x=5 only"],
        ans: 0,
        exp: "2x−3=7→x=5; 2x−3=−7→x=−2",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 1999,
        exam: "JAMB",
        q: "Sum of interior angles of hexagon:",
        opts: ["A) 540°", "B) 720°", "C) 900°", "D) 1080°"],
        ans: 1,
        exp: "(n−2)×180°=(6−2)×180°=720°",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2001,
        exam: "JAMB",
        q: "Circle radius 7 cm. Area (π=22/7):",
        opts: ["A) 44 cm²", "B) 154 cm²", "C) 22 cm²", "D) 308 cm²"],
        ans: 1,
        exp: "A=πr²=(22/7)×49=154 cm²",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2003,
        exam: "JAMB",
        q: "Find sin 45°:",
        opts: ["A) √3/2", "B) 1/2", "C) √2/2", "D) 1"],
        ans: 2,
        exp: "sin 45°=cos 45°=√2/2≈0.707",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2005,
        exam: "JAMB",
        q: "Triangle angles 50° and 70°. Third angle:",
        opts: ["A) 50°", "B) 60°", "C) 70°", "D) 40°"],
        ans: 1,
        exp: "180−50−70=60°",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2007,
        exam: "JAMB",
        q: "Bearing of B from A is 045°. Bearing of A from B:",
        opts: ["A) 135°", "B) 225°", "C) 315°", "D) 090°"],
        ans: 1,
        exp: "Back bearing=045+180=225°",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2009,
        exam: "JAMB",
        q: "Triangle sides 3,4,5. Type:",
        opts: ["A) Obtuse", "B) Acute", "C) Right", "D) Equilateral"],
        ans: 2,
        exp: "3²+4²=5²; Pythagorean triple → right triangle.",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2011,
        exam: "JAMB",
        q: "Volume of cone: h=9 cm, r=4 cm (π=22/7):",
        opts: [
          "A) 150.86 cm³",
          "B) 100.57 cm³",
          "C) 452.57 cm³",
          "D) 75.43 cm³",
        ],
        ans: 0,
        exp: "V=⅓πr²h=⅓×(22/7)×16×9≈150.86 cm³",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2013,
        exam: "JAMB",
        q: "Line gradient 2 through (1,3). Equation:",
        opts: ["A) y=2x+1", "B) y=2x−1", "C) y=2x+3", "D) y=x+2"],
        ans: 0,
        exp: "y−3=2(x−1); y=2x+1",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2015,
        exam: "JAMB",
        q: "Locus equidistant from two fixed points:",
        opts: [
          "A) Circle",
          "B) Perpendicular bisector",
          "C) Angle bisector",
          "D) Parallel line",
        ],
        ans: 1,
        exp: "Perpendicular bisector of segment joining the two points.",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2017,
        exam: "JAMB",
        q: "tan θ=3/4, θ acute. sin θ:",
        opts: ["A) 3/5", "B) 4/5", "C) 3/4", "D) 4/3"],
        ans: 0,
        exp: "opp=3,adj=4,hyp=5; sinθ=3/5",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2019,
        exam: "JAMB",
        q: "Chord 6 cm from centre of circle r=10 cm. Chord length:",
        opts: ["A) 8 cm", "B) 16 cm", "C) 4 cm", "D) 12 cm"],
        ans: 1,
        exp: "Half chord=√(100−36)=8; full chord=16 cm",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2000,
        exam: "WAEC",
        q: "Total surface area of cylinder r=3,h=7 (π=22/7):",
        opts: ["A) 188.57 cm²", "B) 132 cm²", "C) 66 cm²", "D) 376 cm²"],
        ans: 0,
        exp: "TSA=2πr(h+r)=2×(22/7)×3×10≈188.57 cm²",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2016,
        exam: "WAEC",
        q: "Man walks 3 km North, then 4 km East. Distance from start:",
        opts: ["A) 5 km", "B) 7 km", "C) 3.5 km", "D) 4.5 km"],
        ans: 0,
        exp: "d=√(9+16)=5 km",
      },
      {
        topic: "Geometry & Trigonometry",
        year: 2020,
        exam: "WAEC",
        q: "Angles on a straight line sum to:",
        opts: ["A) 90°", "B) 270°", "C) 360°", "D) 180°"],
        ans: 3,
        exp: "Angles on straight line sum to 180°.",
      },
      {
        topic: "Statistics & Probability",
        year: 1999,
        exam: "JAMB",
        q: "Mean of 5,8,12,15,10:",
        opts: ["A) 8", "B) 10", "C) 12", "D) 11"],
        ans: 1,
        exp: "(5+8+12+15+10)/5=50/5=10",
      },
      {
        topic: "Statistics & Probability",
        year: 2002,
        exam: "JAMB",
        q: "Bag: 4 red, 6 blue. P(red):",
        opts: ["A) 2/5", "B) 3/5", "C) 4/6", "D) 1/2"],
        ans: 0,
        exp: "P=4/10=2/5",
      },
      {
        topic: "Statistics & Probability",
        year: 2005,
        exam: "JAMB",
        q: "Median of 3,7,9,12,15,18,21:",
        opts: ["A) 9", "B) 12", "C) 15", "D) 14.5"],
        ans: 1,
        exp: "7 values; median=4th=12",
      },
      {
        topic: "Statistics & Probability",
        year: 2008,
        exam: "JAMB",
        q: "Standard deviation measures:",
        opts: [
          "A) Central tendency",
          "B) Spread around mean",
          "C) Most frequent value",
          "D) Range",
        ],
        ans: 1,
        exp: "SD: spread/dispersion about the mean.",
      },
      {
        topic: "Statistics & Probability",
        year: 2011,
        exam: "JAMB",
        q: "P(A)=0.4, P(B)=0.3, independent. P(A∩B):",
        opts: ["A) 0.12", "B) 0.7", "C) 0.1", "D) 0.58"],
        ans: 0,
        exp: "P(A∩B)=P(A)×P(B)=0.4×0.3=0.12",
      },
      {
        topic: "Statistics & Probability",
        year: 2014,
        exam: "JAMB",
        q: "Mode of 2,3,3,5,6,6,6,7,8:",
        opts: ["A) 5", "B) 3", "C) 6", "D) 7"],
        ans: 2,
        exp: "6 appears 3 times → mode=6",
      },
      {
        topic: "Statistics & Probability",
        year: 2017,
        exam: "JAMB",
        q: "Probability of certain event:",
        opts: ["A) 0", "B) 0.5", "C) 1", "D) −1"],
        ans: 2,
        exp: "P(certain)=1",
      },
      {
        topic: "Statistics & Probability",
        year: 2020,
        exam: "JAMB",
        q: "Variance of 2,4,4,4,5,5,7,9:",
        opts: ["A) 4", "B) 2", "C) 3", "D) 5"],
        ans: 0,
        exp: "Mean=5; sum of sq. deviations=9+1+1+1+0+0+4+16=32; variance=32/8=4",
      },
      {
        topic: "Statistics & Probability",
        year: 2001,
        exam: "WAEC",
        q: "Die rolled. P(number>4):",
        opts: ["A) 1/6", "B) 2/6", "C) 3/6", "D) 4/6"],
        ans: 1,
        exp: "{5,6}=2 outcomes; P=2/6=1/3",
      },
      {
        topic: "Statistics & Probability",
        year: 2005,
        exam: "WAEC",
        q: "Range of 12,4,8,3,17,14,9:",
        opts: ["A) 12", "B) 14", "C) 13", "D) 9"],
        ans: 1,
        exp: "max−min=17−3=14",
      },
      {
        topic: "Statistics & Probability",
        year: 2009,
        exam: "WAEC",
        q: "5 people in a row. Number of arrangements:",
        opts: ["A) 24", "B) 60", "C) 120", "D) 720"],
        ans: 2,
        exp: "5!=120",
      },
      {
        topic: "Statistics & Probability",
        year: 2013,
        exam: "WAEC",
        q: "Mean=10, variance=4. Standard deviation:",
        opts: ["A) 2", "B) 4", "C) 16", "D) 0.4"],
        ans: 0,
        exp: "SD=√variance=√4=2",
      },
      {
        topic: "Statistics & Probability",
        year: 2021,
        exam: "WAEC",
        q: "Interquartile range equals:",
        opts: ["A) Q3−Q1", "B) Q2−Q1", "C) Q3−Q2", "D) (Q3+Q1)/2"],
        ans: 0,
        exp: "IQR=Q3−Q1 (middle 50%).",
      },
      {
        topic: "Calculus",
        year: 1999,
        exam: "JAMB",
        q: "Differentiate y=x³+2x²−5x+3:",
        opts: ["A) 3x²+4x−5", "B) x²+2x−5", "C) 3x+4", "D) 6x+4"],
        ans: 0,
        exp: "dy/dx=3x²+4x−5",
      },
      {
        topic: "Calculus",
        year: 2002,
        exam: "JAMB",
        q: "dy/dx if y=sin3x:",
        opts: ["A) cos3x", "B) −cos3x", "C) 3cos3x", "D) −3cos3x"],
        ans: 2,
        exp: "Chain rule: 3cos3x",
      },
      {
        topic: "Calculus",
        year: 2005,
        exam: "JAMB",
        q: "Evaluate ∫₀² x² dx:",
        opts: ["A) 8/3", "B) 4", "C) 8", "D) 2"],
        ans: 0,
        exp: "[x³/3]₀²=8/3",
      },
      {
        topic: "Calculus",
        year: 2008,
        exam: "JAMB",
        q: "Gradient of y=x²−3x at x=2:",
        opts: ["A) 1", "B) −1", "C) 4", "D) −2"],
        ans: 0,
        exp: "dy/dx=2x−3; at x=2: 4−3=1",
      },
      {
        topic: "Calculus",
        year: 2011,
        exam: "JAMB",
        q: "y=3x²−12x has minimum at:",
        opts: ["A) x=2", "B) x=−2", "C) x=3", "D) x=0"],
        ans: 0,
        exp: "dy/dx=6x−12=0; x=2; d²y/dx²=6>0 → minimum",
      },
      {
        topic: "Calculus",
        year: 2014,
        exam: "JAMB",
        q: "∫cos x dx=",
        opts: ["A) sinx+c", "B) −sinx+c", "C) tanx+c", "D) secx+c"],
        ans: 0,
        exp: "∫cosx dx=sinx+c",
      },
      {
        topic: "Calculus",
        year: 2017,
        exam: "JAMB",
        q: "Derivative of y=e^(2x):",
        opts: ["A) e^(2x)", "B) 2e^(2x)", "C) e^x", "D) 2xe^x"],
        ans: 1,
        exp: "Chain rule: 2e^(2x)",
      },
      {
        topic: "Calculus",
        year: 2003,
        exam: "WAEC",
        q: "dV/dr if V=4/3πr³:",
        opts: ["A) 4πr", "B) 4πr²", "C) 8πr", "D) 4/3πr²"],
        ans: 1,
        exp: "dV/dr=4πr²",
      },
      {
        topic: "Calculus",
        year: 2011,
        exam: "WAEC",
        q: "Maximum value of y=−x²+4x−1:",
        opts: ["A) 3", "B) 4", "C) 2", "D) 1"],
        ans: 0,
        exp: "dy/dx=−2x+4=0; x=2; y=−4+8−1=3",
      },
      {
        topic: "Calculus",
        year: 2015,
        exam: "WAEC",
        q: "Differentiate y=(2x+1)⁵:",
        opts: ["A) 5(2x+1)⁴", "B) 10(2x+1)⁴", "C) (2x+1)⁴", "D) 2(2x+1)⁵"],
        ans: 1,
        exp: "Chain rule: 5(2x+1)⁴×2=10(2x+1)⁴",
      },
      {
        topic: "Calculus",
        year: 2019,
        exam: "WAEC",
        q: "Area under y=x² from x=0 to x=3:",
        opts: ["A) 9", "B) 3", "C) 27", "D) 6"],
        ans: 0,
        exp: "[x³/3]₀³=27/3=9",
      },
      {
        topic: "Sequences & Series",
        year: 2000,
        exam: "JAMB",
        q: "10th term of AP 3,7,11,15,...:",
        opts: ["A) 39", "B) 41", "C) 43", "D) 45"],
        ans: 0,
        exp: "a=3,d=4; T₁₀=3+9×4=39",
      },
      {
        topic: "Sequences & Series",
        year: 2003,
        exam: "JAMB",
        q: "Sum of first 10 terms of 2,4,6,8,...:",
        opts: ["A) 100", "B) 110", "C) 90", "D) 120"],
        ans: 1,
        exp: "S₁₀=(10/2)(4+18)=5×22=110",
      },
      {
        topic: "Sequences & Series",
        year: 2006,
        exam: "JAMB",
        q: "Common ratio of GP 2,6,18,54,...:",
        opts: ["A) 2", "B) 3", "C) 4", "D) 6"],
        ans: 1,
        exp: "r=6/2=3",
      },
      {
        topic: "Sequences & Series",
        year: 2009,
        exam: "JAMB",
        q: "Sum of infinite GP: a=4, r=1/2:",
        opts: ["A) 8", "B) 6", "C) 4", "D) 16"],
        ans: 0,
        exp: "S∞=a/(1−r)=4/0.5=8",
      },
      {
        topic: "Sequences & Series",
        year: 2013,
        exam: "JAMB",
        q: "7th term of GP 3,6,12,24,...:",
        opts: ["A) 96", "B) 192", "C) 384", "D) 48"],
        ans: 1,
        exp: "T₇=3×2⁶=192",
      },
      {
        topic: "Sequences & Series",
        year: 2005,
        exam: "WAEC",
        q: "AP: 5th term=21, 10th term=41. Common difference:",
        opts: ["A) 3", "B) 4", "C) 5", "D) 6"],
        ans: 1,
        exp: "T₁₀−T₅=5d=20; d=4",
      },
      {
        topic: "Sequences & Series",
        year: 2009,
        exam: "WAEC",
        q: "Sum to infinity of GP exists only when:",
        opts: ["A) |r|>1", "B) |r|=1", "C) |r|<1", "D) r>0"],
        ans: 2,
        exp: "Converges only when |r|<1.",
      },
      {
        topic: "Sequences & Series",
        year: 2013,
        exam: "WAEC",
        q: "GP: T₄=54, T₇=1458. Common ratio:",
        opts: ["A) 3", "B) 2", "C) 4", "D) 6"],
        ans: 0,
        exp: "r³=T₇/T₄=1458/54=27; r=3",
      },
      {
        topic: "Matrices & Determinants",
        year: 2000,
        exam: "JAMB",
        q: "det|2 1; 3 4|:",
        opts: ["A) 5", "B) 11", "C) −5", "D) 8"],
        ans: 0,
        exp: "2×4−1×3=8−3=5",
      },
      {
        topic: "Matrices & Determinants",
        year: 2004,
        exam: "JAMB",
        q: "Transpose of A=[1 2; 3 4]:",
        opts: [
          "A) [1 3; 2 4]",
          "B) [4 2; 3 1]",
          "C) [1 2; 3 4]",
          "D) [4 3; 2 1]",
        ],
        ans: 0,
        exp: "Transpose: rows→columns. Aᵀ=[1 3; 2 4]",
      },
      {
        topic: "Matrices & Determinants",
        year: 2012,
        exam: "JAMB",
        q: "Inverse of A=[2 1; 5 3]:",
        opts: [
          "A) [3 −1; −5 2]",
          "B) [3 1; 5 2]",
          "C) [−3 1; 5 −2]",
          "D) [2 5; 1 3]",
        ],
        ans: 0,
        exp: "det=6−5=1; A⁻¹=[3 −1; −5 2]",
      },
      {
        topic: "Matrices & Determinants",
        year: 2003,
        exam: "WAEC",
        q: "det|3 2; 1 4|:",
        opts: ["A) 10", "B) 14", "C) −10", "D) 12"],
        ans: 0,
        exp: "3×4−2×1=12−2=10",
      },
      {
        topic: "Matrices & Determinants",
        year: 2007,
        exam: "WAEC",
        q: "A=[1 2; 3 4]. Find 2A:",
        opts: [
          "A) [2 4; 6 8]",
          "B) [1 2; 6 8]",
          "C) [2 4; 3 8]",
          "D) [2 2; 6 4]",
        ],
        ans: 0,
        exp: "Multiply each element by 2.",
      },
      {
        topic: "Matrices & Determinants",
        year: 2011,
        exam: "WAEC",
        q: "Matrix with equal rows and columns:",
        opts: [
          "A) Row matrix",
          "B) Column matrix",
          "C) Square matrix",
          "D) Identity matrix",
        ],
        ans: 2,
        exp: "Square matrix: n×n (same number of rows and columns).",
      },
      {
        topic: "Matrices & Determinants",
        year: 2015,
        exam: "WAEC",
        q: "Identity matrix I satisfies:",
        opts: ["A) AI=0", "B) AI=A", "C) AI=I", "D) AI=A+I"],
        ans: 1,
        exp: "AI=IA=A for any compatible matrix A.",
      },
    ],
  },
  English: {
    topics: [
      "Grammar & Syntax",
      "Comprehension & Vocabulary",
      "Oral English & Phonology",
      "Figures of Speech & Literary Devices",
      "Essay Writing & Register",
      "Lexis & Structure",
    ],
    questions: [
      {
        topic: "Grammar & Syntax",
        year: 1999,
        exam: "JAMB",
        q: "The committee _____ reached a decision.",
        opts: ["A) have", "B) has", "C) were", "D) are"],
        ans: 1,
        exp: "Collective noun 'committee' treated as singular → 'has'.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2001,
        exam: "JAMB",
        q: "Correct sentence with 'neither...nor':",
        opts: [
          "A) Neither boys nor father are here",
          "B) Neither boys nor father is here",
          "C) Neither boys nor father were here",
          "D) Neither boys nor father have been here",
        ],
        ans: 1,
        exp: "Verb agrees with nearest noun ('father'—singular) → 'is'.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2003,
        exam: "JAMB",
        q: "In 'She runs fast', 'fast' is:",
        opts: ["A) Adjective", "B) Noun", "C) Adverb", "D) Verb"],
        ans: 2,
        exp: "'Fast' modifies verb 'runs' → adverb.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2005,
        exam: "JAMB",
        q: "'She is one of the girls who _____ always late':",
        opts: ["A) is", "B) are", "C) was", "D) has been"],
        ans: 1,
        exp: "Relative clause refers to 'girls' (plural) → 'are'.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2007,
        exam: "JAMB",
        q: "Passive of 'John wrote the letter':",
        opts: [
          "A) Letter is written by John",
          "B) Letter was written by John",
          "C) John has written letter",
          "D) Letter had been written by John",
        ],
        ans: 1,
        exp: "Past tense passive: 'was written'.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2009,
        exam: "JAMB",
        q: "Subjunctive mood example:",
        opts: [
          "A) He goes to school",
          "B) If I were rich, I would help",
          "C) She is running late",
          "D) They have left",
        ],
        ans: 1,
        exp: "'If I were rich': subjunctive—contrary-to-fact condition.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2011,
        exam: "JAMB",
        q: "Direct speech of 'He said he was tired':",
        opts: [
          "A) He said 'I am tired'",
          "B) He said 'He was tired'",
          "C) He said 'I was tired'",
          "D) He said 'I will be tired'",
        ],
        ans: 0,
        exp: "Reported→direct: backshift reverses → 'I am tired'.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2013,
        exam: "JAMB",
        q: "'When she arrived, the party had started.' Clause type:",
        opts: ["A) Relative", "B) Noun", "C) Adverbial", "D) Coordinate"],
        ans: 2,
        exp: "'When she arrived' = adverbial clause of time.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2015,
        exam: "JAMB",
        q: "Compound sentence:",
        opts: [
          "A) She sang a song",
          "B) Although tired, she danced",
          "C) She sang and he danced",
          "D) She sang while he played",
        ],
        ans: 2,
        exp: "Two independent clauses joined by coordinator 'and'.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2017,
        exam: "JAMB",
        q: "Correctly punctuated:",
        opts: [
          "A) Its a hot day",
          "B) It's a hot day",
          "C) Its' a hot day",
          "D) It is' a hot day",
        ],
        ans: 1,
        exp: "'It's'=it is (contraction); 'its'=possessive (no apostrophe).",
      },
      {
        topic: "Grammar & Syntax",
        year: 2019,
        exam: "JAMB",
        q: "Gerund in 'Swimming is my favourite sport':",
        opts: ["A) is", "B) favourite", "C) Swimming", "D) sport"],
        ans: 2,
        exp: "'Swimming' = gerund (verb used as noun—subject of sentence).",
      },
      {
        topic: "Grammar & Syntax",
        year: 2021,
        exam: "JAMB",
        q: "Plural of 'phenomenon':",
        opts: [
          "A) Phenomenons",
          "B) Phenomenas",
          "C) Phenomenes",
          "D) Phenomena",
        ],
        ans: 3,
        exp: "Correct plural (from Greek) = phenomena.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2023,
        exam: "JAMB",
        q: "'_____ of the contestants have submitted their forms':",
        opts: ["A) All", "B) Each", "C) Every", "D) Either"],
        ans: 0,
        exp: "'All' takes plural verb 'have'; each/every/either take singular.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2000,
        exam: "WAEC",
        q: "Appositive in 'My brother Emeka is a doctor':",
        opts: ["A) My brother", "B) Emeka", "C) is", "D) doctor"],
        ans: 1,
        exp: "'Emeka' renames/identifies 'My brother' — appositive.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2008,
        exam: "WAEC",
        q: "Example of a participial phrase:",
        opts: [
          "A) Running quickly",
          "B) That he ran",
          "C) To run fast",
          "D) He ran",
        ],
        ans: 0,
        exp: "'Running quickly' = participial phrase (present participle).",
      },
      {
        topic: "Grammar & Syntax",
        year: 2012,
        exam: "WAEC",
        q: "'The book which I borrowed' is a:",
        opts: [
          "A) Adverbial clause",
          "B) Noun clause",
          "C) Relative clause",
          "D) Conditional clause",
        ],
        ans: 2,
        exp: "'Which I borrowed' = relative clause modifying 'book'.",
      },
      {
        topic: "Grammar & Syntax",
        year: 2016,
        exam: "WAEC",
        q: "'I wish I knew the answer' — verb form is:",
        opts: [
          "A) Indicative",
          "B) Imperative",
          "C) Subjunctive",
          "D) Interrogative",
        ],
        ans: 2,
        exp: "'I wish I knew': subjunctive mood (wish contrary to fact).",
      },
      {
        topic: "Grammar & Syntax",
        year: 2020,
        exam: "WAEC",
        q: "Dangling modifier:",
        opts: [
          "A) She ran quickly",
          "B) Walking to school, my hat blew off",
          "C) He read carefully",
          "D) After eating, we rested",
        ],
        ans: 1,
        exp: "The hat was not walking → dangling modifier; subject of modifier missing.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 1999,
        exam: "JAMB",
        q: "Synonym for 'benevolent':",
        opts: ["A) Cruel", "B) Generous", "C) Selfish", "D) Strict"],
        ans: 1,
        exp: "Benevolent=kind, generous, charitable.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2002,
        exam: "JAMB",
        q: "Antonym of 'transparent':",
        opts: ["A) Clear", "B) Bright", "C) Opaque", "D) Vivid"],
        ans: 2,
        exp: "Opaque = not allowing light through; antonym of transparent.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2004,
        exam: "JAMB",
        q: "'Ubiquitous' means:",
        opts: ["A) Rare", "B) Absent", "C) Unique", "D) Present everywhere"],
        ans: 3,
        exp: "Ubiquitous = present, appearing everywhere.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2006,
        exam: "JAMB",
        q: "Correct spelling:",
        opts: [
          "A) Accomodation",
          "B) Accommadation",
          "C) Accommodation",
          "D) Accomodattion",
        ],
        ans: 2,
        exp: "Accommodation: double 'c' and double 'm'.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2008,
        exam: "JAMB",
        q: "'A blessing in disguise' means:",
        opts: [
          "A) A hidden curse",
          "B) A religious ceremony",
          "C) Something good appearing bad at first",
          "D) A deceptive person",
        ],
        ans: 2,
        exp: "Something seemingly bad that turns out good.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2010,
        exam: "JAMB",
        q: "'The pen is mightier than the sword' is a:",
        opts: ["A) Simile", "B) Metaphor", "C) Proverb", "D) Paradox"],
        ans: 2,
        exp: "Well-known proverb expressing a general truth.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2014,
        exam: "JAMB",
        q: "Synonym of 'loquacious':",
        opts: ["A) Quiet", "B) Talkative", "C) Intelligent", "D) Generous"],
        ans: 1,
        exp: "Loquacious=excessively talkative.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2016,
        exam: "JAMB",
        q: "'He kicked the bucket' means:",
        opts: [
          "A) Kicked a bucket",
          "B) Won a prize",
          "C) Died",
          "D) Lost job",
        ],
        ans: 2,
        exp: "'Kicked the bucket': idiom for died.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2018,
        exam: "JAMB",
        q: "'Ephemeral' means:",
        opts: [
          "A) Lasting forever",
          "B) Short-lived",
          "C) Very loud",
          "D) Very beautiful",
        ],
        ans: 1,
        exp: "Ephemeral=short-lived, transitory.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2001,
        exam: "WAEC",
        q: "Synonym of 'audacious':",
        opts: ["A) Timid", "B) Bold", "C) Lazy", "D) Careful"],
        ans: 1,
        exp: "Audacious=bold, daring, fearless.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2005,
        exam: "WAEC",
        q: "'To burn the midnight oil' means:",
        opts: [
          "A) Start a fire",
          "B) Work/study late at night",
          "C) Waste resources",
          "D) Cook at midnight",
        ],
        ans: 1,
        exp: "Study or work very late into the night.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2009,
        exam: "WAEC",
        q: "'She was _____ for the position': correct word:",
        opts: ["A) eligible", "B) illegible", "C) electable", "D) qualified"],
        ans: 0,
        exp: "Eligible=satisfying conditions required to be chosen.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2013,
        exam: "WAEC",
        q: "'Ambiguous' means:",
        opts: [
          "A) Clear and definite",
          "B) Open to more than one interpretation",
          "C) Very ambitious",
          "D) Having two faces",
        ],
        ans: 1,
        exp: "Ambiguous=open to more than one meaning.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2017,
        exam: "WAEC",
        q: "Collective noun for fish:",
        opts: ["A) Flock", "B) Pack", "C) Herd", "D) Shoal"],
        ans: 3,
        exp: "Shoal (or school) of fish.",
      },
      {
        topic: "Comprehension & Vocabulary",
        year: 2021,
        exam: "WAEC",
        q: "'Taciturn' means:",
        opts: [
          "A) Very talkative",
          "B) Reserved; saying little",
          "C) Very fast",
          "D) Confused",
        ],
        ans: 1,
        exp: "Taciturn=reserved, saying little. Antonym: loquacious.",
      },
      {
        topic: "Oral English & Phonology",
        year: 1999,
        exam: "JAMB",
        q: "'photograph' stressed on which syllable?",
        opts: [
          "A) First (PHO-to-graph)",
          "B) Second (pho-TO-graph)",
          "C) Third (pho-to-GRAPH)",
          "D) Equal",
        ],
        ans: 0,
        exp: "PHO-to-graph: stress on first syllable.",
      },
      {
        topic: "Oral English & Phonology",
        year: 2002,
        exam: "JAMB",
        q: "Syllables in 'independence':",
        opts: ["A) 3", "B) 4", "C) 5", "D) 6"],
        ans: 1,
        exp: "in-de-pen-dence=4 syllables",
      },
      {
        topic: "Oral English & Phonology",
        year: 2005,
        exam: "JAMB",
        q: "Word with vowel sound /ɪ/ as in 'sit':",
        opts: ["A) See", "B) Seat", "C) Ship", "D) She"],
        ans: 2,
        exp: "'Ship' has short /ɪ/ vowel sound.",
      },
      {
        topic: "Oral English & Phonology",
        year: 2008,
        exam: "JAMB",
        q: "Consonant sound at beginning of 'thin':",
        opts: ["A) /t/", "B) /d/", "C) /s/", "D) /θ/"],
        ans: 3,
        exp: "/θ/ = voiceless interdental fricative (th in thin).",
      },
      {
        topic: "Oral English & Phonology",
        year: 2011,
        exam: "JAMB",
        q: "Word with silent letter:",
        opts: ["A) Cat", "B) Knife", "C) Ship", "D) Top"],
        ans: 1,
        exp: "'Knife': 'k' is silent. /naɪf/",
      },
      {
        topic: "Oral English & Phonology",
        year: 2014,
        exam: "JAMB",
        q: "Plural 's' in 'cats' pronounced:",
        opts: ["A) /s/", "B) /z/", "C) /ɪz/", "D) /es/"],
        ans: 0,
        exp: "After voiceless consonant /t/ → plural 's' = /s/.",
      },
      {
        topic: "Oral English & Phonology",
        year: 2017,
        exam: "JAMB",
        q: "'Record' as noun stressed on:",
        opts: [
          "A) Second syllable",
          "B) First syllable",
          "C) Third syllable",
          "D) Both equally",
        ],
        ans: 1,
        exp: "REcord(noun) vs reCORD(verb).",
      },
      {
        topic: "Oral English & Phonology",
        year: 2005,
        exam: "WAEC",
        q: "Intonation refers to:",
        opts: [
          "A) Stress pattern",
          "B) Rise and fall of pitch",
          "C) Speaking speed",
          "D) Volume",
        ],
        ans: 1,
        exp: "Intonation: variation of pitch across sentences.",
      },
      {
        topic: "Oral English & Phonology",
        year: 2013,
        exam: "WAEC",
        q: "Minimal pair: two words differing by:",
        opts: [
          "A) Same spelling",
          "B) One phoneme",
          "C) Same meaning",
          "D) Rhyming",
        ],
        ans: 1,
        exp: "Minimal pair: differ by exactly one phoneme (e.g. pat/bat).",
      },
      {
        topic: "Figures of Speech & Literary Devices",
        year: 1999,
        exam: "JAMB",
        q: "'The wind whispered through the trees' is:",
        opts: [
          "A) Simile",
          "B) Metaphor",
          "C) Personification",
          "D) Hyperbole",
        ],
        ans: 2,
        exp: "Personification: 'whispered' gives wind a human quality.",
      },
      {
        topic: "Figures of Speech & Literary Devices",
        year: 2002,
        exam: "JAMB",
        q: "'As brave as a lion' is:",
        opts: ["A) Metaphor", "B) Simile", "C) Personification", "D) Irony"],
        ans: 1,
        exp: "Simile: comparison using 'as'.",
      },
      {
        topic: "Figures of Speech & Literary Devices",
        year: 2005,
        exam: "JAMB",
        q: "'Life is a journey' is:",
        opts: [
          "A) Simile",
          "B) Metaphor",
          "C) Alliteration",
          "D) Onomatopoeia",
        ],
        ans: 1,
        exp: "Metaphor: direct comparison without 'like' or 'as'.",
      },
      {
        topic: "Figures of Speech & Literary Devices",
        year: 2007,
        exam: "JAMB",
        q: "'I told you a million times' is:",
        opts: ["A) Simile", "B) Metaphor", "C) Euphemism", "D) Hyperbole"],
        ans: 3,
        exp: "Hyperbole: deliberate exaggeration for effect.",
      },
      {
        topic: "Figures of Speech & Literary Devices",
        year: 2009,
        exam: "JAMB",
        q: "'Peter Piper picked a peck of pickled peppers' is:",
        opts: [
          "A) Assonance",
          "B) Onomatopoeia",
          "C) Alliteration",
          "D) Rhyme",
        ],
        ans: 2,
        exp: "Alliteration: repetition of initial /p/ consonant sound.",
      },
      {
        topic: "Figures of Speech & Literary Devices",
        year: 2011,
        exam: "JAMB",
        q: "'The buzz of bees' is:",
        opts: [
          "A) Alliteration",
          "B) Onomatopoeia",
          "C) Assonance",
          "D) Simile",
        ],
        ans: 1,
        exp: "Onomatopoeia: 'buzz' imitates the sound of bees.",
      },
      {
        topic: "Figures of Speech & Literary Devices",
        year: 2013,
        exam: "JAMB",
        q: "An oxymoron combines:",
        opts: [
          "A) Two synonyms",
          "B) Two contradictory words",
          "C) Sound and meaning",
          "D) Two similes",
        ],
        ans: 1,
        exp: "Oxymoron: contradictory terms together, e.g. 'deafening silence'.",
      },
      {
        topic: "Figures of Speech & Literary Devices",
        year: 2000,
        exam: "WAEC",
        q: "'The sun smiled on the couple' is:",
        opts: ["A) Simile", "B) Personification", "C) Euphemism", "D) Irony"],
        ans: 1,
        exp: "Personification: 'smiled' gives sun a human quality.",
      },
      {
        topic: "Figures of Speech & Literary Devices",
        year: 2004,
        exam: "WAEC",
        q: "Euphemism is:",
        opts: [
          "A) Exaggeration",
          "B) Mild expression for blunt one",
          "C) Comparison using 'like'/'as'",
          "D) Contradiction in terms",
        ],
        ans: 1,
        exp: "Euphemism: gentle substitute for harsh expression (e.g. 'passed away').",
      },
      {
        topic: "Figures of Speech & Literary Devices",
        year: 2008,
        exam: "WAEC",
        q: "'He is as old as Methuselah' is:",
        opts: ["A) Metaphor", "B) Allusion", "C) Simile", "D) Irony"],
        ans: 1,
        exp: "Allusion: indirect reference to biblical Methuselah (known for great age).",
      },
      {
        topic: "Figures of Speech & Literary Devices",
        year: 2016,
        exam: "WAEC",
        q: "Dramatic irony occurs when:",
        opts: [
          "A) Author contradicts himself",
          "B) Audience knows more than character",
          "C) Characters speak in riddles",
          "D) Character lies to another",
        ],
        ans: 1,
        exp: "Dramatic irony: audience has more knowledge than the character.",
      },
      {
        topic: "Essay Writing & Register",
        year: 2000,
        exam: "JAMB",
        q: "Expository essay aims to:",
        opts: [
          "A) Entertain",
          "B) Persuade emotionally",
          "C) Explain/inform objectively",
          "D) Describe personal experience",
        ],
        ans: 2,
        exp: "Expository: explains or informs about a topic clearly and objectively.",
      },
      {
        topic: "Essay Writing & Register",
        year: 2004,
        exam: "JAMB",
        q: "Appropriate formal letter salutation:",
        opts: [
          "A) 'Hi there!'",
          "B) 'Dear Sir/Madam'",
          "C) 'Yo, what's up'",
          "D) 'Hey friend'",
        ],
        ans: 1,
        exp: "Formal letters use 'Dear Sir', 'Dear Madam', 'Dear Mr/Ms Name'.",
      },
      {
        topic: "Essay Writing & Register",
        year: 2008,
        exam: "JAMB",
        q: "Narrative essay includes:",
        opts: [
          "A) Statistical data",
          "B) Definitions and explanations",
          "C) Characters, setting, plot",
          "D) Arguments and counter-arguments",
        ],
        ans: 2,
        exp: "Narrative essays: characters, setting, conflict, and plot.",
      },
      {
        topic: "Essay Writing & Register",
        year: 2016,
        exam: "JAMB",
        q: "Descriptive essay mainly uses:",
        opts: [
          "A) Arguments and evidence",
          "B) Sensory details",
          "C) Statistical analysis",
          "D) Chronological narrative",
        ],
        ans: 1,
        exp: "Descriptive essays: vivid sensory details to paint a picture.",
      },
      {
        topic: "Essay Writing & Register",
        year: 2005,
        exam: "WAEC",
        q: "Introductory paragraph should contain:",
        opts: [
          "A) The conclusion",
          "B) All supporting details",
          "C) Hook and thesis statement",
          "D) Definitions of all terms",
        ],
        ans: 2,
        exp: "Effective intro: hook (captures attention) + thesis statement (main argument).",
      },
      {
        topic: "Essay Writing & Register",
        year: 2009,
        exam: "WAEC",
        q: "Cohesion in writing refers to:",
        opts: [
          "A) Vocabulary variety",
          "B) Logical connection between sentences/paragraphs",
          "C) Correct spelling",
          "D) Sentence length",
        ],
        ans: 1,
        exp: "Cohesion: logical linking using transitions, pronouns, connectors.",
      },
      {
        topic: "Essay Writing & Register",
        year: 2017,
        exam: "WAEC",
        q: "Appropriate close for formal business letter:",
        opts: [
          "A) 'Yours forever'",
          "B) 'Yours sincerely'",
          "C) 'Later!'",
          "D) 'Love, Jane'",
        ],
        ans: 1,
        exp: "'Yours sincerely' = standard close when you know recipient's name.",
      },
      {
        topic: "Lexis & Structure",
        year: 1999,
        exam: "JAMB",
        q: "'She _____ to market yesterday': correct form:",
        opts: ["A) goes", "B) has gone", "C) went", "D) is going"],
        ans: 2,
        exp: "'Yesterday' → simple past → 'went'.",
      },
      {
        topic: "Lexis & Structure",
        year: 2003,
        exam: "JAMB",
        q: "'To run out of' means:",
        opts: [
          "A) Escape quickly",
          "B) Exhaust the supply of something",
          "C) Run in a race",
          "D) Avoid someone",
        ],
        ans: 1,
        exp: "'Run out of': use up all of something.",
      },
      {
        topic: "Lexis & Structure",
        year: 2009,
        exam: "JAMB",
        q: "Concord refers to:",
        opts: [
          "A) Subject-verb agreement in number",
          "B) Vocabulary choice",
          "C) Punctuation rules",
          "D) Sentence type",
        ],
        ans: 0,
        exp: "Concord: subject and verb agree in number (singular/plural).",
      },
      {
        topic: "Lexis & Structure",
        year: 2015,
        exam: "JAMB",
        q: "'Fewer' used for _____ nouns:",
        opts: ["A) Uncountable", "B) Countable", "C) Both", "D) Abstract only"],
        ans: 1,
        exp: "'Fewer' for countable nouns; 'less' for uncountable.",
      },
      {
        topic: "Lexis & Structure",
        year: 2018,
        exam: "JAMB",
        q: "'The data _____ been analysed':",
        opts: ["A) has", "B) have", "C) is", "D) was"],
        ans: 1,
        exp: "'Data' is plural (datum=singular); traditionally 'have' is correct.",
      },
      {
        topic: "Lexis & Structure",
        year: 2006,
        exam: "WAEC",
        q: "Preposition in 'She sat beside the window':",
        opts: ["A) sat", "B) beside", "C) window", "D) She"],
        ans: 1,
        exp: "'Beside' = preposition indicating position.",
      },
      {
        topic: "Lexis & Structure",
        year: 2010,
        exam: "WAEC",
        q: "'The doctor _____ the patient yesterday':",
        opts: [
          "A) examines",
          "B) will examine",
          "C) examined",
          "D) has examined",
        ],
        ans: 2,
        exp: "'Yesterday' → simple past → 'examined'.",
      },
      {
        topic: "Lexis & Structure",
        year: 2014,
        exam: "WAEC",
        q: "A clause must contain:",
        opts: [
          "A) Subject and object",
          "B) Subject and predicate (verb)",
          "C) Noun only",
          "D) Verb and object",
        ],
        ans: 1,
        exp: "Clause must have at minimum a subject + finite verb.",
      },
      {
        topic: "Lexis & Structure",
        year: 2022,
        exam: "WAEC",
        q: "'Heavy ___': correct collocation:",
        opts: ["A) paper", "B) rain", "C) tree", "D) book"],
        ans: 1,
        exp: "'Heavy rain' is a standard collocation.",
      },
    ],
  },
};
// End of question bank

// ============================================================
// APP STATE
// ============================================================
let currentUser = null;
let users = JSON.parse(localStorage.getItem("ep_users") || "{}");
let appState = {
  xp: 0,
  totalQ: 0,
  correct: 0,
  streak: 0,
  activity: [],
  topScores: {},
};
let quizState = {
  questions: [],
  idx: 0,
  score: 0,
  correct: 0,
  wrong: 0,
  skipped: 0,
  sel: null,
  answered: false,
  cfg: null,
  results: [],
};
let timerInt = null;
let timeLeft = 60;
const ARC = 131.9;
let quizMode = "JAMB";
let lastCfg = null;

const SUBJ_CFG = [
  {
    id: "Physics",
    icon: "⚛️",
    cls: "ph",
    desc: "Forces, Energy, Waves, Optics, Electricity",
    color: "#4F8EF7",
  },
  {
    id: "Chemistry",
    icon: "🧪",
    cls: "ch",
    desc: "Atoms, Bonds, Reactions, Organic Chemistry",
    color: "#2DD4A0",
  },
  {
    id: "Biology",
    icon: "🧬",
    cls: "bi",
    desc: "Cells, Genetics, Physiology, Ecology",
    color: "#A78BFA",
  },
  {
    id: "Mathematics",
    icon: "📐",
    cls: "ma",
    desc: "Algebra, Calculus, Geometry, Statistics",
    color: "#FB923C",
  },
  {
    id: "English",
    icon: "📚",
    cls: "en",
    desc: "Grammar, Vocabulary, Literature, Writing",
    color: "#F5C842",
  },
];

// ============================================================
// AUTH
// ============================================================
function doLogin() {
  const u = id("liUser").value.trim();
  const p = id("liPass").value;
  const err = id("loginErr");
  if (!u || !p) {
    showErr(err, "Please fill in all fields");
    return;
  }
  if (!users[u] || users[u].password !== p) {
    showErr(err, "Invalid username or password");
    return;
  }
  err.style.display = "none";
  bootApp(users[u]);
}
function doRegister() {
  const nm = id("rgName").value.trim();
  const u = id("rgUser").value.trim();
  const p = id("rgPass").value;
  const ex = id("rgExam").value;
  const err = id("regErr");
  if (!nm || !u || !p) {
    showErr(err, "Please fill all fields");
    return;
  }
  if (u.length < 3) {
    showErr(err, "Username must be at least 3 characters");
    return;
  }
  if (p.length < 4) {
    showErr(err, "Password must be at least 4 characters");
    return;
  }
  if (users[u]) {
    showErr(err, "Username already taken");
    return;
  }
  const data = {
    name: nm,
    username: u,
    password: p,
    exam: ex,
    xp: 0,
    totalQ: 0,
    correct: 0,
    streak: 0,
    activity: [],
    topScores: {},
    created: Date.now(),
  };
  users[u] = data;
  saveUsers();
  toast("Account created! Welcome, " + nm + "!", "ok");
  bootApp(data);
}
function guestLogin() {
  bootApp({
    name: "Guest Student",
    username: "guest",
    exam: "Both",
    xp: 0,
    totalQ: 0,
    correct: 0,
    streak: 0,
    activity: [],
    topScores: {},
  });
}
function bootApp(userData) {
  currentUser = userData;
  appState = {
    xp: userData.xp || 0,
    totalQ: userData.totalQ || 0,
    correct: userData.correct || 0,
    streak: userData.streak || 0,
    activity: userData.activity || [],
    topScores: userData.topScores || {},
  };
  const lp = id("pgLogin");
  lp.style.transition = "opacity .35s ease,transform .35s ease";
  lp.style.opacity = "0";
  lp.style.transform = "scale(1.03)";
  setTimeout(() => {
    lp.classList.remove("active");
    lp.style.display = "none";
    lp.style.opacity = "";
    lp.style.transform = "";
    lp.style.transition = "";
    initApp();
    id("pgApp").style.display = "";
    id("pgApp").classList.add("active");
    toast("Welcome, " + userData.name.split(" ")[0] + "! 👋", "ok");
  }, 360);
}
function doLogout() {
  saveState();
  currentUser = null;
  const ap = id("pgApp");
  ap.style.transition = "opacity .3s ease";
  ap.style.opacity = "0";
  setTimeout(() => {
    ap.classList.remove("active");
    ap.style.display = "none";
    ap.style.opacity = "";
    ap.style.transition = "";
    showLogin();
    id("pgLogin").style.display = "";
    id("pgLogin").classList.add("active");
  }, 310);
}
function showLogin() {
  id("formLogin").style.display = "block";
  id("formReg").style.display = "none";
}
function showReg() {
  id("formLogin").style.display = "none";
  id("formReg").style.display = "block";
}
function showErr(el, msg) {
  el.textContent = msg;
  el.style.display = "block";
}

// ============================================================
// APP INIT
// ============================================================
function initApp() {
  const n = currentUser.name.split(" ")[0];
  id("wName").textContent = n;
  id("navAv").textContent = n[0].toUpperCase();
  updateStats();
  renderSubjGrid();
  renderActivity();
  renderBest();
  loadTopicChips("Physics");
}

// ============================================================
// STATS & DASHBOARD
// ============================================================
function updateStats() {
  id("navXP").textContent = appState.xp.toLocaleString();
  id("stTotal").textContent = appState.totalQ;
  const acc =
    appState.totalQ > 0
      ? Math.round((appState.correct / appState.totalQ) * 100)
      : 0;
  id("stAcc").textContent = acc + "%";
  id("stXP").textContent = appState.xp.toLocaleString();
  id("wStreak").textContent = appState.streak;
  const lb = lbData();
  const rank = lb.findIndex((u) => u.username === currentUser.username) + 1;
  id("stRank").textContent = rank > 0 ? "#" + rank : "#—";
}
function renderSubjGrid() {
  const g = id("subjGrid");
  g.innerHTML = "";
  SUBJ_CFG.forEach((s) => {
    const ts = appState.topScores[s.id] || { pct: 0, count: 0 };
    const pct = ts.pct || 0;
    const d = document.createElement("div");
    d.className = "subj-card " + s.cls;
    d.innerHTML = `<div class="subj-icon">${s.icon}</div>
      <div class="subj-name" style="color:${s.color}">${s.id}</div>
      <div class="subj-desc">${s.desc}</div>
      <div class="subj-bar"><div class="subj-fill" style="width:${pct}%;background:${s.color}"></div></div>
      <div class="subj-prog">${pct}% mastery · ${ts.count || 0} questions</div>`;
    d.onclick = () => {
      pickSubjById(s.id);
      goTab("qs");
    };
    g.appendChild(d);
  });
}
function renderActivity() {
  const el = id("actList");
  if (!appState.activity.length) {
    el.innerHTML =
      '<div style="color:var(--text3);font-size:12px;text-align:center;padding:1rem">No activity yet</div>';
    return;
  }
  el.innerHTML = [...appState.activity]
    .reverse()
    .slice(0, 5)
    .map((a) => {
      const s = SUBJ_CFG.find((x) => x.id === a.subject) || SUBJ_CFG[0];
      return `<div class="act-item">
      <div class="act-dot" style="background:${s.color}"></div>
      <div class="act-info"><div class="a-title">${a.mode} ${a.subject}</div><div class="a-sub">${a.questions}q · ${a.date}</div></div>
      <div class="act-score" style="color:${s.color}">${a.score}%</div></div>`;
    })
    .join("");
}
function renderBest() {
  const el = id("bestList");
  const scores = Object.entries(appState.topScores);
  if (!scores.length) {
    el.innerHTML =
      '<div style="color:var(--text3);font-size:12px;text-align:center;padding:1rem">Complete a quiz to see scores</div>';
    return;
  }
  el.innerHTML = scores
    .map(([sub, d]) => {
      const s = SUBJ_CFG.find((x) => x.id === sub) || SUBJ_CFG[0];
      return `<div class="act-item">
      <div style="font-size:18px">${s.icon}</div>
      <div class="act-info"><div class="a-title">${sub}</div><div class="a-sub">Best: ${d.pct}% · ${d.count} attempted</div></div>
      <div class="act-score" style="color:${s.color}">${d.pct}%</div></div>`;
    })
    .join("");
}

// ============================================================
// NAVIGATION
// ============================================================
function goTab(tab) {
  document
    .querySelectorAll(".sub")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".nav-tab")
    .forEach((t) => t.classList.remove("active"));
  const map = { dash: 0, qs: 1, lb: 2 };
  const subMap = {
    dash: "subDash",
    qs: "subQS",
    qa: "subQA",
    res: "subRes",
    lb: "subLB",
  };
  if (subMap[tab]) id(subMap[tab]).classList.add("active");
  if (map[tab] !== undefined)
    document.querySelectorAll(".nav-tab")[map[tab]]?.classList.add("active");
  if (tab === "lb") renderLB();
  if (tab === "dash") {
    updateStats();
    renderSubjGrid();
    renderActivity();
    renderBest();
  }
  if (tab === "qs") {
    const s =
      document.querySelector("#subjChips .chip.on")?.dataset.sub || "Physics";
    loadTopicChips(s);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// QUIZ CONFIG
// ============================================================
function pickMode(el, mode) {
  document
    .querySelectorAll(".mtab")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  quizMode = mode;
}
function pickSubj(el) {
  document
    .querySelectorAll("#subjChips .chip")
    .forEach((c) => c.classList.remove("on"));
  el.classList.add("on");
  loadTopicChips(el.dataset.sub);
}
function pickSubjById(id_) {
  document.querySelectorAll("#subjChips .chip").forEach((c) => {
    c.classList.toggle("on", c.dataset.sub === id_);
  });
  loadTopicChips(id_);
}
function pickChip(el, groupId) {
  document
    .querySelectorAll("#" + groupId + " .chip")
    .forEach((c) => c.classList.remove("on"));
  el.classList.add("on");
}
function loadTopicChips(subject) {
  const wrap = id("topicChips");
  const topics = QB[subject]?.topics || [];
  wrap.innerHTML =
    '<div class="chip on" data-topic="All" onclick="pickChip(this,\'topicChips\')">All Topics</div>' +
    topics
      .map(
        (t) =>
          `<div class="chip" data-topic="${t}" onclick="pickChip(this,'topicChips')">${t}</div>`,
      )
      .join("");
}
function getCfg() {
  const subject =
    document.querySelector("#subjChips .chip.on")?.dataset.sub || "Physics";
  const topic =
    document.querySelector("#topicChips .chip.on")?.dataset.topic || "All";
  const diff =
    document.querySelector("#diffChips .chip.on")?.dataset.diff || "All";
  const cnt = parseInt(
    document.querySelector("#cntChips .chip.on")?.dataset.cnt || "10",
  );
  const time = parseInt(
    document.querySelector("#timeChips .chip.on")?.dataset.time || "60",
  );
  const yr = document.querySelector("#yearChips .chip.on")?.dataset.yr || "all";
  return { subject, topic, diff, cnt, time, yr, mode: quizMode };
}

// ============================================================
// START QUIZ
// ============================================================
async function startQuiz() {
  const cfg = getCfg();
  lastCfg = cfg;

  if (cfg.mode === "AI") {
    await aiQuiz(cfg);
    return;
  }

  let pool = QB[cfg.subject]?.questions || [];

  // Exam filter
  if (cfg.mode === "JAMB") pool = pool.filter((q) => q.exam === "JAMB");
  else if (cfg.mode === "WAEC") pool = pool.filter((q) => q.exam === "WAEC");
  // Both = all

  // Topic filter
  if (cfg.topic && cfg.topic !== "All")
    pool = pool.filter((q) => q.topic === cfg.topic);

  // Year filter
  if (cfg.yr === "old") pool = pool.filter((q) => q.year <= 2009);
  else if (cfg.yr === "mid")
    pool = pool.filter((q) => q.year >= 2010 && q.year <= 2018);
  else if (cfg.yr === "new") pool = pool.filter((q) => q.year >= 2019);

  // Difficulty mapped to year bands for simplicity
  if (cfg.diff === "Easy") pool = pool.filter((q) => q.year <= 2009);
  else if (cfg.diff === "Medium")
    pool = pool.filter((q) => q.year >= 2010 && q.year <= 2018);
  else if (cfg.diff === "Hard") pool = pool.filter((q) => q.year >= 2019);

  if (!pool.length) {
    toast(
      "No questions match those filters. Try changing topic, year, or exam type.",
      "err",
    );
    return;
  }

  pool = [...pool].sort(() => Math.random() - 0.5);
  if (cfg.cnt > 0) pool = pool.slice(0, cfg.cnt);

  beginQuiz(pool, cfg);
}

async function aiQuiz(cfg) {
  showOverlay("Generating AI questions...");
  const topicLine =
    cfg.topic && cfg.topic !== "All" ? ` on the topic "${cfg.topic}"` : "";
  const prompt = `Generate exactly ${cfg.cnt || 10} multiple-choice questions about ${cfg.subject}${topicLine} for Nigerian JAMB/WAEC students.
Return ONLY a valid JSON array, no markdown. Each item: {"q":"question","opts":["A) ...","B) ...","C) ...","D) ..."],"ans":0,"exp":"explanation","year":"AI","topic":"${cfg.topic || cfg.subject}"}
ans = 0-based index of correct answer.`;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const data = await res.json();
    let raw = (data.content || [])
      .map((i) => i.text || "")
      .join("")
      .replace(/```json|```/g, "")
      .trim();
    const m = raw.match(/\[[\s\S]*\]/);
    const qs = m ? JSON.parse(m[0]) : [];
    hideOverlay();
    if (!qs.length) throw new Error("empty");
    beginQuiz(qs, cfg);
  } catch (e) {
    hideOverlay();
    toast("AI unavailable. Try JAMB, WAEC, or Practice mode.", "err");
  }
}

function beginQuiz(questions, cfg) {
  quizState = {
    questions,
    idx: 0,
    score: 0,
    correct: 0,
    wrong: 0,
    skipped: 0,
    sel: null,
    answered: false,
    cfg,
    results: [],
  };
  goTab("qa");
  renderQ();
}
function replayQuiz() {
  if (lastCfg) startQuiz();
}

// ============================================================
// QUIZ RENDER
// ============================================================
function renderQ() {
  const { questions, idx, cfg } = quizState;
  if (idx >= questions.length) {
    endQuiz();
    return;
  }
  const q = questions[idx];
  quizState.sel = null;
  quizState.answered = false;

  const s = SUBJ_CFG.find((x) => x.id === cfg.subject) || SUBJ_CFG[0];
  id("qaDot").style.background = s.color;
  id("qaSubj").textContent = cfg.subject;
  id("qaMode").textContent = cfg.mode === "AI" ? "🤖 AI" : cfg.mode;
  id("qaYtag").textContent =
    (q.exam || cfg.mode) + " " + (q.year || "Practice");
  id("qaNum").textContent = "Question " + (idx + 1) + " / " + questions.length;
  id("qaText").textContent = q.q;
  id("qaProg").style.width = (idx / questions.length) * 100 + "%";
  id("qaProg").style.background = s.color;
  id("liveScore").textContent = quizState.score;

  const letters = ["A", "B", "C", "D"];
  id("optsList").innerHTML = q.opts
    .map(
      (o, i) => `
    <button class="opt" onclick="pickOpt(${i})">
      <span class="opt-ltr">${letters[i]}</span>
      <span class="opt-txt">${o.replace(/^[A-D]\)\s*/, "")}</span>
    </button>`,
    )
    .join("");

  id("expBox").style.display = "none";
  id("btnNext").style.display = "none";
  const bs = id("btnSubmit");
  bs.style.display = "block";
  bs.textContent = "Select an answer";
  bs.className = "btn-submit";
  bs.disabled = true;

  if (cfg.time > 0) startTimer(cfg.time);
  else {
    id("timerTxt").textContent = "∞";
    id("timerArc").style.strokeDashoffset = 0;
  }
}

function pickOpt(i) {
  if (quizState.answered) return;
  quizState.sel = i;
  document.querySelectorAll(".opt").forEach((el, j) => {
    el.classList.toggle("picked", j === i);
  });
  const bs = id("btnSubmit");
  bs.className = "btn-submit ready";
  bs.textContent = "Submit Answer";
  bs.disabled = false;
}

function submitAns() {
  if (quizState.sel === null || quizState.answered) return;
  quizState.answered = true;
  clearTimer();

  const q = quizState.questions[quizState.idx];
  const isOk = quizState.sel === q.ans;
  const xpGain = isOk ? 10 : 0;

  if (isOk) {
    quizState.correct++;
    quizState.score += xpGain;
  } else {
    quizState.wrong++;
  }

  quizState.results.push({
    q: q.q,
    chosen: quizState.sel,
    correct: q.ans,
    isOk,
    opts: q.opts,
    exp: q.exp || "",
    skipped: false,
  });

  document.querySelectorAll(".opt").forEach((el, i) => {
    el.classList.add("locked");
    if (i === q.ans) el.classList.add("correct");
    else if (i === quizState.sel && !isOk) el.classList.add("wrong");
  });

  const eb = id("expBox");
  eb.style.display = "block";
  eb.className = "exp-box " + (isOk ? "ok" : "ng");
  id("expHead").textContent = isOk
    ? "✓ Correct! +" + xpGain + " XP"
    : "✗ Incorrect";
  id("expTxt").textContent = q.exp || "No explanation available.";

  id("btnSubmit").style.display = "none";
  const bn = id("btnNext");
  bn.style.display = "block";
  bn.textContent =
    quizState.idx + 1 >= quizState.questions.length
      ? "See Results →"
      : "Next Question →";
  id("liveScore").textContent = quizState.score;
}

function skipQ() {
  if (quizState.answered) return;
  clearTimer();
  quizState.skipped++;
  const q = quizState.questions[quizState.idx];
  quizState.results.push({
    q: q.q,
    chosen: -1,
    correct: q.ans,
    isOk: false,
    opts: q.opts,
    exp: q.exp || "",
    skipped: true,
  });
  quizState.idx++;
  renderQ();
}
function nextQ() {
  quizState.idx++;
  renderQ();
}

// ============================================================
// TIMER
// ============================================================
function startTimer(secs) {
  clearTimer();
  timeLeft = secs;
  updateTimer(secs, secs);
  timerInt = setInterval(() => {
    timeLeft--;
    updateTimer(timeLeft, secs);
    if (timeLeft <= 0) {
      clearTimer();
      if (!quizState.answered) {
        quizState.sel = -1;
        submitAns();
      }
    }
  }, 1000);
}
function clearTimer() {
  clearInterval(timerInt);
}
function updateTimer(t, total) {
  const frac = Math.max(0, t / total);
  id("timerArc").style.strokeDashoffset = ARC * (1 - frac);
  id("timerTxt").textContent = t > 0 ? t + "s" : "0s";
  id("timerArc").style.stroke =
    t <= 8 ? "var(--red)" : t <= total * 0.4 ? "var(--orange)" : "var(--gold)";
  id("timerWrap").classList.toggle("urgent", t <= 8);
}

// ============================================================
// END QUIZ
// ============================================================
function endQuiz() {
  clearTimer();
  const { correct, wrong, skipped, score, results, cfg, questions } = quizState;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);

  // Update state
  appState.xp += score;
  appState.totalQ += total;
  appState.correct += correct;
  const ts = appState.topScores[cfg.subject] || { pct: 0, count: 0 };
  ts.count += total;
  ts.pct = Math.max(ts.pct, pct);
  appState.topScores[cfg.subject] = ts;
  appState.activity.push({
    subject: cfg.subject,
    mode: cfg.mode,
    questions: total,
    score: pct,
    date: new Date().toLocaleDateString("en-NG"),
  });
  saveState();

  const trophy = pct >= 90 ? "🏆" : pct >= 70 ? "🎉" : pct >= 50 ? "👍" : "📖";
  const label =
    pct >= 90
      ? "Outstanding performance!"
      : pct >= 70
        ? "Great job!"
        : pct >= 50
          ? "Good effort, keep pushing!"
          : "Keep studying hard!";

  id("resTrophy").textContent = trophy;
  id("resScore").textContent = correct + "/" + total;
  id("resScore").style.color =
    pct >= 70 ? "var(--green)" : pct >= 50 ? "var(--gold)" : "var(--red)";
  id("resLabel").textContent =
    label + " (" + pct + "%) — " + cfg.mode + " " + cfg.subject;
  id("rsCorrect").textContent = correct;
  id("rsWrong").textContent = wrong;
  id("rsSkipped").textContent = skipped;
  id("rsXP").textContent = "+" + score;

  id("rvList").innerHTML = results
    .slice(0, 12)
    .map((r) => {
      const icon = r.skipped ? "⏭️" : r.isOk ? "✅" : "❌";
      const ans = r.skipped
        ? "Skipped"
        : r.isOk
          ? "Correct: " + r.opts[r.correct].replace(/^[A-D]\)\s*/, "")
          : "Your answer: " +
            (r.opts[r.chosen] || "—").replace(/^[A-D]\)\s*/, "") +
            "  |  Correct: " +
            r.opts[r.correct].replace(/^[A-D]\)\s*/, "");
      return `<div class="rv-item">
      <div class="rv-icon">${icon}</div>
      <div class="rv-q">${r.q}<div class="rv-ans ${r.isOk ? "ok" : "ng"}">${ans}</div></div>
    </div>`;
    })
    .join("");

  goTab("res");
  updateStats();
  renderSubjGrid();
  renderActivity();
  renderBest();
}

// ============================================================
// LEADERBOARD
// ============================================================
function lbData() {
  const data = Object.values(users)
    .filter((u) => typeof u.xp === "number")
    .map((u) => ({
      name: u.name,
      username: u.username,
      xp: u.xp || 0,
      exam: u.exam || "JAMB",
    }))
    .sort((a, b) => b.xp - a.xp);
  const samples = [
    { name: "Adaeze Okonkwo", username: "adaeze_ep", xp: 2850, exam: "WAEC" },
    { name: "Chukwuemeka Eze", username: "emeka_ep", xp: 2200, exam: "JAMB" },
    {
      name: "Fatimah Abubakar",
      username: "fatimah_ep",
      xp: 1980,
      exam: "Both",
    },
    { name: "Oluwaseun Adeyemi", username: "seun_ep", xp: 1650, exam: "JAMB" },
    { name: "Ngozi Obiechina", username: "ngozi_ep", xp: 1400, exam: "WAEC" },
  ];
  samples.forEach((s) => {
    if (!data.find((u) => u.username === s.username)) data.push(s);
  });
  // Add guest if has xp
  if (currentUser?.username === "guest" && appState.xp > 0) {
    data.push({
      name: "Guest Student",
      username: "guest",
      xp: appState.xp,
      exam: "—",
    });
  }
  return data.sort((a, b) => b.xp - a.xp).slice(0, 10);
}
function renderLB() {
  const data = lbData();
  const cols = ["#F5C842", "#9AA3C2", "#FB923C"];
  const bgs = [
    "rgba(245,200,66,.15)",
    "rgba(154,163,194,.1)",
    "rgba(251,146,60,.12)",
  ];
  const order = [data[1], data[0], data[2]].filter(Boolean);
  const heights = [52, 76, 38];
  const ranks = ["second", "first", "third"];
  id("lbPodium").innerHTML = order
    .map((u, i) => {
      const init = u.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
      return `<div class="pod-item"><div class="pod-rank ${ranks[i]}">
      <div class="pod-av" style="background:${bgs[i]};color:${cols[i]}">${init}</div>
      <div class="pod-name">${u.name.split(" ")[0]}</div>
      <div class="pod-pts">${(u.xp || 0).toLocaleString()} XP</div>
      <div class="pod-bar" style="height:${heights[i]}px;background:${bgs[i]};border:1px solid ${cols[i]}44"></div>
    </div></div>`;
    })
    .join("");
  id("lbTable").innerHTML = data
    .map((u, i) => {
      const init = u.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
      const isMe = u.username === currentUser?.username;
      return `<div class="lb-row${isMe ? " me" : ""}">
      <div class="lb-pos">${i < 3 ? ["🥇", "🥈", "🥉"][i] : i + 1}</div>
      <div class="lb-av" style="background:rgba(255,255,255,.05);color:${cols[i] || "var(--text3)"}">${init}</div>
      <div class="lb-name">${u.name}${isMe ? ' <span style="font-size:9px;color:var(--gold);margin-left:5px">YOU</span>' : ""}</div>
      <div class="lb-badge">${u.exam}</div>
      <div class="lb-pts">${(u.xp || 0).toLocaleString()} XP</div>
    </div>`;
    })
    .join("");
}

// ============================================================
// UTILS
// ============================================================
function id(x) {
  return document.getElementById(x);
}
function showOverlay(txt) {
  id("overlayTxt").textContent = txt || "Loading...";
  id("overlay").classList.add("show");
}
function hideOverlay() {
  id("overlay").classList.remove("show");
}
function toast(msg, type = "") {
  const t = id("toast");
  t.textContent = msg;
  t.className = "toast " + type + " show";
  setTimeout(() => t.classList.remove("show"), 3200);
}
function saveUsers() {
  localStorage.setItem("ep_users", JSON.stringify(users));
}
function saveState() {
  if (!currentUser || currentUser.username === "guest") return;
  currentUser.xp = appState.xp;
  currentUser.totalQ = appState.totalQ;
  currentUser.correct = appState.correct;
  currentUser.streak = appState.streak;
  currentUser.activity = appState.activity.slice(-20);
  currentUser.topScores = appState.topScores;
  users[currentUser.username] = currentUser;
  saveUsers();
}

// ============================================================
// KEYBOARD
// ============================================================
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && id("pgLogin").classList.contains("active")) {
    if (id("formLogin").style.display !== "none") doLogin();
  }
});

// ============================================================
// SPLASH BOOT
// ============================================================
function runSplash() {
  const bar = id("spBar"),
    status = id("spStatus");
  const steps = [
    { p: 15, m: "Loading question bank..." },
    { p: 30, m: "Preparing JAMB questions..." },
    { p: 50, m: "Preparing WAEC questions..." },
    { p: 65, m: "Setting up subjects..." },
    { p: 80, m: "Loading topics..." },
    { p: 95, m: "Restoring your session..." },
    { p: 100, m: "Ready!" },
  ];
  let i = 0;
  function tick() {
    if (i >= steps.length) {
      setTimeout(endSplash, 300);
      return;
    }
    const s = steps[i++];
    bar.style.width = s.p + "%";
    status.textContent = s.m;
    setTimeout(tick, 280 + Math.random() * 160);
  }
  setTimeout(tick, 300);
}
function endSplash() {
  // Seed demo account
  if (!users["demo"]) {
    users["demo"] = {
      name: "Demo Student",
      username: "demo",
      password: "demo1234",
      exam: "JAMB",
      xp: 1250,
      totalQ: 60,
      correct: 45,
      streak: 3,
      activity: [
        {
          subject: "Physics",
          mode: "JAMB",
          questions: 10,
          score: 80,
          date: "01/05/2025",
        },
        {
          subject: "Mathematics",
          mode: "WAEC",
          questions: 20,
          score: 75,
          date: "02/05/2025",
        },
      ],
      topScores: {
        Physics: { pct: 80, count: 30 },
        Mathematics: { pct: 75, count: 30 },
      },
      created: Date.now(),
    };
    saveUsers();
  }
  const sp = id("splash");
  sp.classList.add("hide");
  setTimeout(() => {
    sp.style.display = "none";
    loadTopicChips("Physics");
    id("pgLogin").style.display = "";
    id("pgLogin").classList.add("active");
  }, 640);
}
runSplash();
