// src/data/analisisAgricola.js

export const analisisAgricola = [
  {
    producto: "lechuga batavia",
    presentacion: "docena",
    diasACosecha: 60,
    mesesSiembra: [],
    mesesCosecha: [],
    temperaturaIdeal: "15-20°C",
    humedadIdeal: "70-80%",
    precios2024: {
      Enero: 20000,
      Febrero: 35000,
      Marzo: 35000,
      Abril: 45000,
      Mayo: 25000,
      Junio: 20000,
      Julio: 30000,
      Agosto: 20000,
      Septiembre: 15000,
      Octubre: 10000,
      Noviembre: 10000,
      Diciembre: 12000
    },
    analisisPrecio: {
      altos: ["Abril", "Febrero", "Marzo"],
      bajos: ["Octubre", "Noviembre", "Septiembre"],
      neutros: ["Enero", "Mayo", "Junio", "Julio", "Agosto", "Diciembre"]
    },
    recomendacion: "Según el comportamiento de precios en 2024, se estima que sembrar a finales de enero o principios de febrero permitiría cosechar en abril, cuando el precio podría alcanzar su valor más alto del año."
  },
  {
    producto: "lechuga crespa verde",
    presentacion: "bolsa",
    diasACosecha: 60,
    mesesSiembra: [],
    mesesCosecha: [],
    temperaturaIdeal: "15-20°C",
    humedadIdeal: "70-80%",
    precios2024: {
      Enero: 18000,
      Febrero: 18000,
      Marzo: 12000,
      Abril: 16000,
      Mayo: 20000,
      Junio: 24000,
      Julio: 22000,
      Agosto: 16000,
      Septiembre: 16000,
      Octubre: 16000,
      Noviembre: 16000,
      Diciembre: 18000
    },
    analisisPrecio: {
      altos: ["Junio", "Julio"],
      bajos: ["Marzo"],
      neutros: ["Enero", "Febrero", "Abril", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    },
    recomendacion: "Con base en los datos históricos de 2024, se recomienda sembrar a mediados de abril o mayo para cosechar en junio-julio, meses en los que se presentó el mayor valor."
  },
  {
    producto: "espinaca",
    presentacion: "manojo",
    diasACosecha: 50,
    mesesSiembra: [],
    mesesCosecha: [],
    temperaturaIdeal: "10-20°C",
    humedadIdeal: "70-90%",
    precios2024: {
      Enero: 25000,
      Febrero: 30000,
      Marzo: 25000,
      Abril: 25000,
      Mayo: 20000,
      Junio: 20000,
      Julio: 15000,
      Agosto: 13000,
      Septiembre: 25000,
      Octubre: 20000,
      Noviembre: 15000,
      Diciembre: 22000
    },
    analisisPrecio: {
      altos: ["Febrero"],
      bajos: ["Agosto", "Julio", "Noviembre"],
      neutros: ["Enero", "Marzo", "Abril", "Mayo", "Junio", "Septiembre", "Octubre", "Diciembre"]
    },
    recomendacion: "Basado en los valores observados en 2024, sembrar a finales de diciembre o comienzos de enero podría permitir una cosecha en febrero, mes en el que se alcanzó el precio más alto."
  },
  {
  producto: "repollo morado",
  presentacion: "bulto",
  diasACosecha: 85,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "15-20°C",
  humedadIdeal: "70-85%",
  precios2024: {
    Enero: 120000,
    Febrero: 80000,
    Marzo: 70000,
    Abril: 130000,
    Mayo: 100000,
    Junio: 100000,
    Julio: 80000,
    Agosto: 90000,
    Septiembre: 70000,
    Octubre: 70000,
    Noviembre: 70000,
    Diciembre: 60000
  },
  analisisPrecio: {
    altos: ["Abril", "Enero"],
    bajos: ["Diciembre", "Marzo", "Septiembre", "Octubre", "Noviembre"],
    neutros: ["Febrero", "Mayo", "Junio", "Julio", "Agosto"]
  },
  recomendacion: "Según los valores observados en 2024, abril mostró el precio más alto . Como el cultivo tarda aproximadamente 85 días en estar listo, se recomienda sembrar a mediados o finales de enero para aprovechar ese pico."
},
{
  producto: "repollo verde",
  presentacion: "bulto",
  diasACosecha: 85,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "15-20°C",
  humedadIdeal: "70-85%",
  precios2024: {
    Enero: 120000,
    Febrero: 80000,
    Marzo: 70000,
    Abril: 130000,
    Mayo: 120000,
    Junio: 100000,
    Julio: 70000,
    Agosto: 60000,
    Septiembre: 60000,
    Octubre: 50000,
    Noviembre: 50000,
    Diciembre: 40000
  },
  analisisPrecio: {
    altos: ["Abril", "Enero", "Mayo"],
    bajos: ["Diciembre", "Octubre", "Noviembre"],
    neutros: ["Febrero", "Marzo", "Junio", "Julio", "Agosto", "Septiembre"]
  },
  recomendacion: "Tomando como referencia los datos de 2024, abril fue el mes con el precio más alto. Se estima que sembrar a finales de enero permitiría cosechar en abril y así aprovechar este posible pico de valor."
},
{
  producto: "acelga",
  presentacion: "manojo",
  diasACosecha: 50,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "15-21°C",
  humedadIdeal: "65-85%",
  precios2024: {
    Enero: 6000,
    Febrero: 12000,
    Marzo: 4000,
    Abril: 12000,
    Mayo: 6000,
    Junio: 7000,
    Julio: 10000,
    Agosto: 10000,
    Septiembre: 12000,
    Octubre: 8000,
    Noviembre: 4000,
    Diciembre: 10000
  },
  analisisPrecio: {
    altos: ["Febrero", "Abril", "Septiembre"],
    bajos: ["Marzo", "Noviembre"],
    neutros: ["Enero", "Mayo", "Junio", "Julio", "Agosto", "Octubre", "Diciembre"]
  },
  recomendacion: "Basado en los precios del 2024, febrero, abril y septiembre mostraron los valores más altos . Como el ciclo es corto (~50 días), se sugiere sembrar a inicios de enero, marzo o julio para coincidir con esos picos."
},
{
  producto: "cebolla junca aquitania",
  presentacion: "manojo",
  diasACosecha: 90,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "14-18°C",
  humedadIdeal: "60-75%",
  precios2024: {
    Enero: 110000,
    Febrero: 70000,
    Marzo: 70000,
    Abril: 130000,
    Mayo: 65000,
    Junio: 70000,
    Julio: 50000,
    Agosto: 80000,
    Septiembre: 60000,
    Octubre: 55000,
    Noviembre: 35000,
    Diciembre: 65000
  },
  analisisPrecio: {
    altos: ["Abril", "Enero"],
    bajos: ["Noviembre", "Julio", "Octubre"],
    neutros: ["Febrero", "Marzo", "Mayo", "Junio", "Agosto", "Septiembre", "Diciembre"]
  },
  recomendacion: "En 2024, abril y enero presentaron los precios más altos. Considerando su ciclo de 90 días, una siembra en diciembre o enero podría coincidir con estos picos de cosecha estimados."
},
{
  producto: "apio",
  presentacion: "manojo",
  diasACosecha: 90,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "13-18°C",
  humedadIdeal: "80-90%",
  precios2024: {
    Enero: 6000,
    Febrero: 12000,
    Marzo: 15000,
    Abril: 15000,
    Mayo: 12000,
    Junio: 10000,
    Julio: 10000,
    Agosto: 4000,
    Septiembre: 7000,
    Octubre: 4000,
    Noviembre: 10000,
    Diciembre: 8000
  },
  analisisPrecio: {
    altos: ["Marzo", "Abril"],
    bajos: ["Agosto", "Octubre"],
    neutros: ["Enero", "Febrero", "Mayo", "Junio", "Julio", "Septiembre", "Noviembre", "Diciembre"]
  },
  recomendacion: "En marzo y abril se observaron los precios más altos de 2024 para el apio. Se estima que sembrar entre diciembre y enero permitiría cosechar justo en estos meses de mayor valor."
},
{
  producto: "fresa",
  presentacion: "kilogramo",
  diasACosecha: 75,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "13-18°C",
  humedadIdeal: "80-90%",
  precios2024: {
    Enero: 8000,
    Febrero: 7500,
    Marzo: 8000,
    Abril: 8000,
    Mayo: 7500,
    Junio: 8000,
    Julio: 7500,
    Agosto: 8500,
    Septiembre: 9000,
    Octubre: 8500,
    Noviembre: 8500,
    Diciembre: 8500
  },
  analisisPrecio: {
    altos: ["Septiembre", "Octubre", "Noviembre", "Diciembre", "Agosto"],
    bajos: ["Febrero", "Mayo", "Julio"],
    neutros: ["Enero", "Marzo", "Abril", "Junio"]
  },
  recomendacion: "Durante el segundo semestre de 2024 se registraron los precios más altos de la fresa en septiembre. Dado su ciclo de 75 días, se sugiere sembrar entre junio y julio para cosechar en ese punto óptimo."
},
{
  producto: "uchuva con cáscara",
  presentacion: "kilogramo",
  diasACosecha: 90,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "14-20°C",
  humedadIdeal: "70-80%",
  precios2024: {
    Enero: 6000,
    Febrero: 5000,
    Marzo: 4000,
    Abril: 4500,
    Mayo: 5500,
    Junio: 6000,
    Julio: 6000,
    Agosto: 6000,
    Septiembre: 4800,
    Octubre: 4500,
    Noviembre: 4500,
    Diciembre: 5000
  },
  analisisPrecio: {
    altos: ["Enero", "Junio", "Julio", "Agosto"],
    bajos: ["Marzo", "Abril", "Octubre", "Noviembre"],
    neutros: ["Febrero", "Mayo", "Septiembre", "Diciembre"]
  },
  recomendacion: "En 2024, los mejores precios para la uchuva se concentraron en enero, junio, julio y agosto. Con un ciclo de 90 días, se recomienda sembrar en abril o mayo para llegar con cosecha a esos meses de mayor valor."
},
{
  producto: "curuba",
  presentacion: "canastilla",
  diasACosecha: 90,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "12-18°C",
  humedadIdeal: "75-85%",
  precios2024: {
    Enero: 35000,
    Febrero: 35000,
    Marzo: 45000,
    Abril: 70000,
    Mayo: 65000,
    Junio: 70000,
    Julio: 60000,
    Agosto: 65000,
    Septiembre: 70000,
    Octubre: 70000,
    Noviembre: 50000,
    Diciembre: 35000
  },
  analisisPrecio: {
    altos: ["Abril", "Junio", "Septiembre", "Octubre"],
    bajos: ["Enero", "Febrero", "Diciembre"],
    neutros: ["Marzo", "Mayo", "Julio", "Agosto", "Noviembre"]
  },
  recomendacion: "En 2024, los meses con mayor precio para la curuba fueron abril, junio, septiembre y octubre. Como su ciclo es de unos 90 días, se recomienda sembrar entre enero y julio para coincidir con los mejores picos de valor."
},
{
  producto: "papa criolla limpia",
  presentacion: "bulto",
  diasACosecha: 120,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "12-18°C",
  humedadIdeal: "70-80%",
  precios2024: {
    Enero: 200000,
    Febrero: 160000,
    Marzo: 170000,
    Abril: 230000,
    Mayo: 240000,
    Junio: 360000,
    Julio: 260000,
    Agosto: 200000,
    Septiembre: 140000,
    Octubre: 200000,
    Noviembre: 240000,
    Diciembre: 260000
  },
  analisisPrecio: {
    altos: ["Junio", "Julio", "Abril"],
    bajos: ["Febrero", "Marzo", "Septiembre"],
    neutros: ["Enero", "Mayo", "Agosto", "Octubre", "Noviembre", "Diciembre"]
  },
  recomendacion: "En 2024, junio y julio marcaron los precios más altos para la papa criolla limpia. Con un ciclo largo de 120 días, se estima que sembrar entre febrero y marzo permitiría cosechar en ese momento de mayor valor."
},
{
  producto: "papa criolla sucia",
  presentacion: "bulto",
  diasACosecha: 120,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "12-18°C",
  humedadIdeal: "70-80%",
  precios2024: {
    Enero: 180000,
    Febrero: 140000,
    Marzo: 150000,
    Abril: 220000,
    Mayo: 220000,
    Junio: 340000,
    Julio: 240000,
    Agosto: 180000,
    Septiembre: 120000,
    Octubre: 180000,
    Noviembre: 220000,
    Diciembre: 240000
  },
  analisisPrecio: {
    altos: ["Junio", "Abril", "Julio"],
    bajos: ["Febrero", "Marzo", "Septiembre"],
    neutros: ["Enero", "Mayo", "Agosto", "Octubre", "Noviembre", "Diciembre"]
  },
  recomendacion: "En 2024, los mejores precios se dieron en junio. Con un ciclo de 120 días, se estima que sembrar en febrero/marzo permite cosechar en este pico."
},
{
  producto: "papa sabanera",
  presentacion: "bulto",
  diasACosecha: 120,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "12-17°C",
  humedadIdeal: "65-75%",
  precios2024: {
    Enero: 180000,
    Febrero: 150000,
    Marzo: 160000,
    Abril: 200000,
    Mayo: 220000,
    Junio: 260000,
    Julio: 290000,
    Agosto: 230000,
    Septiembre: 320000,
    Octubre: 180000,
    Noviembre: 120000,
    Diciembre: 120000
  },
  analisisPrecio: {
    altos: ["Septiembre", "Julio", "Junio"],
    bajos: ["Noviembre", "Diciembre"],
    neutros: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Agosto", "Octubre"]
  },
  recomendacion: "El mejor mes de precio fue septiembre. Con su ciclo de 120 días, lo ideal sería sembrar en mayo-junio para coincidir con ese pico."
},
{
  producto: "papa parda pastusa",
  presentacion: "bulto",
  diasACosecha: 130,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "10-15°C",
  humedadIdeal: "75-85%",
  precios2024: {
    Enero: 100000,
    Febrero: 80000,
    Marzo: 80000,
    Abril: 100000,
    Mayo: 140000,
    Junio: 140000,
    Julio: 180000,
    Agosto: 180000,
    Septiembre: 120000,
    Octubre: 90000,
    Noviembre: 75000,
    Diciembre: 80000
  },
  analisisPrecio: {
    altos: ["Julio", "Agosto", "Mayo", "Junio"],
    bajos: ["Febrero", "Marzo", "Noviembre", "Diciembre"],
    neutros: ["Enero", "Abril", "Septiembre", "Octubre"]
  },
  recomendacion: "En julio y agosto se registraron los mejores precios. Con un ciclo de 130 días, se estima que sembrar entre marzo y abril permitiría cosechar en ese pico."
},
{
  producto: "arveja verde en vaina",
  presentacion: "bulto",
  diasACosecha: 100,
  mesesSiembra: [],
  mesesCosecha: [],
  temperaturaIdeal: "13-18°C",
  humedadIdeal: "70-80%",
  precios2024: {
    Enero: 300000,
    Febrero: 290000,
    Marzo: 250000,
    Abril: 330000,
    Mayo: 360000,
    Junio: 330000,
    Julio: 320000,
    Agosto: 200000,
    Septiembre: 220000,
    Octubre: 160000,
    Noviembre: 190000,
    Diciembre: 200000
  },
  analisisPrecio: {
    altos: ["Abril", "Mayo", "Junio", "Julio"],
    bajos: ["Octubre", "Noviembre", "Diciembre"],
    neutros: ["Enero", "Febrero", "Marzo", "Agosto", "Septiembre"]
  },
  recomendacion: "En mayo se observó el valor más alto del año. Con un ciclo de 100 días, se recomienda sembrar entre enero y febrero para cosechar en ese pico."
}  
];