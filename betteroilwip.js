elements.oil = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: behaviors.LIQUID,
    tick: function(pixel) {
        if (!pixel.burning && pixel.temp > 40 && Math.random() < 0.001) {
            if (pixel.temp < 60) { changePixel(pixel,"propane") }
            else if (pixel.temp < 80) { changePixel(pixel,"gasolinefumes") }
            else if (pixel.temp < 180) { changePixel(pixel,"naphtha") }
            else if (pixel.temp < 220) { changePixel(pixel,"paraffingas") }
            else if (pixel.temp < 250) { changePixel(pixel,"dieselgas") }
            else if (pixel.temp < 300) { changePixel(pixel,"kerosenegas") }
            else if (pixel.temp < 350) { changePixel(pixel,"lubricantgas") }
            else { changePixel(pixel,"bitumen") }
        }
    },
    reactions: {
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
        "sulfur": { elem1:null, elem2:"greek_fire" },
        "molten_sulfur": { elem1:"greek_fire", elem2:"greek_fire" },
        "water": { burning1:true, elem2:"explosion" },
        "steam": { burning1:true, elem2:"explosion" },
        "salt_water": { burning1:true, elem2:"explosion" },
        "sugar_water": { burning1:true, elem2:"explosion" },
        "dirty_water": { burning1:true, elem2:"explosion" },
        "pool_water": { burning1:true, elem2:"explosion" },
        "seltzer": { burning1:true, elem2:"explosion" },
        "coral": { elem2:null, chance:0.01 },
    },
    category: "oil",
    tempHigh: 500,
    stateHigh: "fire",
    burn: 5,
    burnTime: 300,
    burnInto: ["carbon_dioxide","fire"],
    viscosity: 250,
    state: "liquid",
    density: 825,
    stain: 0.05,
    alias: "petroleum",
},
elements.gasoline = {
    behavior: behaviors.LIQUID,
    color: "#e6d78e",
        reactions: {
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
        },
    category: "oil",
    tick: function(pixel) {
        if (pixel.temp > -35) {
            if (Math.random() < 0.0001) { changePixel(pixel,"gasolinefumes") }
        }
    },
    tempLow: -40,
    stateLow: "gasolineice",
    burn: 10,
    burnTime: 250,
    burnInto: ["smoke", "smoke", "carbon_dioxide", "smoke", "carbon_dioxide", "carbon_dioxide", "steam", "fire", "fire", "fire", "fire"],
    viscosity: 2,
    state: "liquid",
    density: 730,
    stain: 0.05,
    alias: "petrol",
},
elements.gasolineice = {
    behavior: behaviors.SOLID,
    color: "#ebe1b2",
    category: "oil",
    temp: -40,
    tempHigh: -35,
    stateHigh: "gasoline",
    state: "solid",
    density: 800,
    stain: 0.05,
    alias: "petrol",
},
elements.gasolinefumes = {
    behavior: behaviors.GAS,
    color: "#cfcfcf",
    category: "oil",
    temp: 40,
    tempHigh: 500,
    stateHigh: "fire",
    tick: function(pixel) {
        if (pixel.temp < 40) {
            if (Math.random() < 0.001) { changePixel(pixel,"gasoline") }
        }
    },
    burn: 10,
    burnTime: 250,
    burnInto: ["carbon_dioxide", "smoke", "steam"],
    viscosity: 150,
    state: "gas",
    density: 3.5,
},
elements.naphtha = {
    behavior: behaviors.GAS,
    color: "#fff6a3",
    reactions: {
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
        },
    category: "oil",
    temp: 90,
    tempLow: 60,
    stateLow: "liquidnaphtha",
    state: "gas",
    density: 3,
    burn: 10,
    burnTime: 250,
},
elements.lamp_oil = {
    name: "kerosene",
    color: "#b3b38b",
    behavior: behaviors.LIQUID,
    reactions: {
        "glue": {elem2:null, chance:0.05},
        "wax": {elem2:null, chance:0.005},
        "melted_wax": {elem2:null, chance:0.025},
        "dirt": { elem1:null, elem2:"mud" },
        "steam": { burning1:true, elem2:"explosion" }
    },
    tick: function(pixel) {
        if (pixel.temp > 34) {
            if (Math.random() < 0.0001) { changePixel(pixel,"kerosenegas") }
        }
    },
    category: "oil",
    tempLow: -40,
    stateLow: "keroseneice",
    burn: 30,
    burnTime: 2000,
    burnInto: ["carbon_dioxide","fire"],
    viscosity: 3,
    state: "liquid",
    density: 800,
    alias: "lamp_oil"
},
elements.diesel = {
    color: "#d6d651",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "oil",
    reactions: {
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
    tick: function(pixel) {
        if (pixel.temp > 60) {
            if (Math.random() < 0.0001) { changePixel(pixel,"dieselgas") }
        }
    },
    tempLow: -10,
    stateLow: "dieselice",
},
elements.bitumen = {
    color: "#1a1918",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "oil",
    density: 1020,
    tempLow: 130,
    stateLow: "asphalt",
    tempHigh: 520,
    stateLow: "bitumengas",
},
elements.asphalt = {
    color: "#0f0f0e",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "oil",
    density: 1020,
    tempHigh: 135,
    stateHigh: "bitumen",
},
elements.bitumengas = {
    color: "#696962",
    behavior: behaviors.GAS,
    state: "gas",
    category: "oil",
    temp: 525,
},
elements.lubricantgas = {
    color: "#f59071",
    behavior: behaviors.GAS,
    state: "gas",
    category: "oil",
    temp: 350,
    tempLow: 345,
    density: 1.5,
    stateLow: "lubricant",
},
elements.liquidnaphtha = {
    color: "#fff6a3",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "oil",
    tempHigh: 65,
    stateHigh: "naphtha",
    tempLow: -60,
    stateLow: "naphthaice",
    density: 750,
    burn: 10,
    burnTime: 250,
    reactions: {
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
},
elements.dieselgas = {
    color: "#b0aea7",
    behavior: behaviors.GAS,
    state: "gas",
    category: "oil",
    density: 4,
    tick: function(pixel) {
        if (pixel.temp < 200) {
            if (Math.random() < 0.0001) { changePixel(pixel,"diesel") }
        }
    },
},
elements.kerosenegas = {
    color: "#b5b591",
    behavior: behaviors.GAS,
    state: "gas",
    category: "oil",
    density: 5.8,
    burn: 45,
    temp: 250,
    burnTime: 200,
    burnInto: ["carbon_dioxide","fire"],
    tick: function(pixel) {
        if (pixel.temp < 245) {
            if (Math.random() < 0.001) { changePixel(pixel,"lamp_oil") }
        }
    },
},
elements.keroseneice = {
    color: "#b5b591",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "oil",
    tempHigh: -35,
    stateHigh: "lamp_oil",
},
elements.paraffingas = {
    color: "#f5f2eb",
    behavior: behaviors.GAS,
    state: "gas",
    category: "oil",
    temp: 370,
    tempLow: 365,
    stateLow: "liquidparaffin",
},
elements.liquidparaffin = {
    color: "#f2ecdc",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "oil",
    temp: 37,
    density: 450,
    tempHigh: 367,
    stateHigh: "paraffingas",
    tempLow: 35,
    stateLow: "paraffin",
    reactions: {
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
    burn: 4,
    burnTime: 500,
    burnInto: ["toluene", "benzene", "carbon_dioxide"]
},
elements.paraffin = {
    color: "#d9d5ca",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "oil",
    tempHigh: 37,
    stateHigh: "liquidparaffin",
},
elements.lubricant = {
    color: "#e04414",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "oil",
    density: 730,
    tempHigh: 350,
    stateHigh: "lubricantgas",
    tempLow: -120,
    stateLow: "lubricantice",
    reactions: {
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
},
elements.lubricantice = {
    color: "#f25c2e",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "oil",
    tempHigh: -115,
    stateHigh: "lubricant",
    temp: -120,
},
elements.dieselice = {
    color: "#f5f5c9",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "oil",
    tempHigh: -8,
    stateHigh: "diesel",
}