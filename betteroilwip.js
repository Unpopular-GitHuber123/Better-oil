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
    category: "betteroil",
    tempHigh: 500,
    stateHigh: "fire",
    burn: 5,
    burnTime: 300,
    burnInto: ["carbon_dioxide","smoke", "smoke", "smoke","smoke", "smoke","fire"],
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
    category: "betteroil",
    tick: function(pixel) {
        if (pixel.temp > -35) {
            if (Math.random() < 0.0001) { changePixel(pixel,"gasolinefumes") }
        }
    },
    tempLow: -40,
    stateLow: "gasolineice",
    burn: 10,
    burnTime: 1000,
    burnInto: ["smoke", "smoke", "smoke", "smoke", "smoke", "carbon_dioxide", "steam", "fire", "fire", "fire", "fire"],
    viscosity: 2,
    state: "liquid",
    density: 730,
    stain: 0.05,
    alias: "petrol",
},
elements.gasolineice = {
    behavior: behaviors.SOLID,
    color: "#ebe1b2",
    category: "betteroil",
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
    category: "betteroil",
    temp: 45,
    tempHigh: 500,
    stateHigh: "fire",
    tick: function(pixel) {
        if (pixel.temp < 40) {
            if (Math.random() < 0.001) { changePixel(pixel,"gasoline") }
        }
    },
    burn: 100,
    burnTime: 5,
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
    category: "betteroil",
    tick: function(pixel) {
        var random = Math.random();
        if (!pixel.burning && pixel.temp > 800 && Math.random() < 0.005) {
            if (random < 0.14285714285) { changePixel(pixel,"ethylene") }
            else if (random < 0.28571428571) { changePixel(pixel,"propylene") }
            else if (random < 0.42857142857) { changePixel(pixel,"butane") }
            else if (random < 0.57142857142) { changePixel(pixel,"butadiene") }
            else if (random < 0.71428571427) { changePixel(pixel,"benzenegas") }
            else if (random < 0.85714285712) { changePixel(pixel,"toluenegas") }
            else { changePixel(pixel,"xylenegas") }
        }
        if (pixel.temp < 80) {
            if (Math.random() < 0.002) { changePixel(pixel,"liquidnaphtha") }
        }
    },
    temp: 90,
    state: "gas",
    density: 3,
    burn: 10,
    burnTime: 5,
    tempLow: 50,
    stateLow: "liquidnaphtha",
},
elements.ethylene = {
    color: "#d4d0c7",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    tempHigh: 1200,
    stateHigh: "fire",
    tempLow: -104,
    stateLow: "liquidethylene",
    burn: 100,
    burnTime: 5,
    burnTime: 5,
    reactions: {
        "titaniumpowder": { elem1:"polyethylene", elem2:"titaniumpowder" },
    },
    burnInto: ["steam", "carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    density: 1.26,
    tick: function(pixel) {
        if (pixel.temp < -103) {
            if (Math.random() < 0.001) { changePixel(pixel,"liquidethylene") }
        }
    },
},
elements.liquidethylene = {
    color: "#d4d0c7",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    tempHigh: -100,
    stateHigh: "ethylene",
    tempLow: -169,
    stateLow: "ethyleneice",
    temp: -102,
    burn: 100,
    burnTime: 500,
    reactions: {
        "titaniumpowder": { elem1:"polyethylene", elem2:"titaniumpowder" },
    },
    burnInto: ["steam", "carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    state: "liquid",
    density: 567.65,
    tick: function(pixel) {
        if (pixel.temp > -136) {
            if (Math.random() < 0.001) { changePixel(pixel,"ethylene") }
        }
    },
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
        "steam": { burning1:true, elem2:"explosion" },
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
        "water": { burning1:true, elem2:"explosion" },
        "steam": { burning1:true, elem2:"explosion" },
        "salt_water": { burning1:true, elem2:"explosion" },
        "sugar_water": { burning1:true, elem2:"explosion" },
        "dirty_water": { burning1:true, elem2:"explosion" },
        "pool_water": { burning1:true, elem2:"explosion" },
        "seltzer": { burning1:true, elem2:"explosion" },
        "coral": { elem2:null, chance:0.01 },
    },
    tick: function(pixel) {
        if (pixel.temp > 34) {
            if (Math.random() < 0.0001) { changePixel(pixel,"kerosenegas") }
        }
    },
    category: "betteroil",
    tempLow: -40,
    stateLow: "keroseneice",
    burn: 30,
    burnTime: 2000,
    burnInto: ["carbon_dioxide", "smoke", "smoke", "smoke", "fire"],
    viscosity: 3,
    state: "liquid",
    density: 800,
    alias: "lamp_oil"
},
elements.diesel = {
    color: "#d6d651",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    density: 840,
    burn: 20,
    burnTime: 1500,
    burnInto: ["smoke", "smoke", "fire", "nitrogen", "steam", "smoke", "carbon_dioxide,", "smoke", "fire", "steam", "smoke"],
    reactions: {
        "glue": {elem2:null, chance:0.05},
        "wax": {elem2:null, chance:0.005},
        "melted_wax": {elem2:null, chance:0.025},
        "dirt": { elem1:null, elem2:"mud" },
        "steam": { burning1:true, elem2:"explosion" },
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
        "water": { burning1:true, elem2:"explosion" },
        "steam": { burning1:true, elem2:"explosion" },
        "salt_water": { burning1:true, elem2:"explosion" },
        "sugar_water": { burning1:true, elem2:"explosion" },
        "dirty_water": { burning1:true, elem2:"explosion" },
        "pool_water": { burning1:true, elem2:"explosion" },
        "seltzer": { burning1:true, elem2:"explosion" },
        "coral": { elem2:null, chance:0.01 },
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
    category: "betteroil",
    density: 1020,
    tempLow: 130,
    stateLow: "asphalt",
    temp: 140,
    tempHigh: 520,
    stateHigh: "bitumengas",
},
elements.asphalt = {
    color: "#0f0f0e",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "betteroil",
    density: 1020,
    tempHigh: 135,
    stateHigh: "bitumen",
},
elements.bitumengas = {
    color: "#696962",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    temp: 525,
},
elements.lubricantgas = {
    color: "#f59071",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    temp: 350,
    tempLow: 345,
    density: 1.5,
    stateLow: "lubricant",
},
elements.liquidnaphtha = {
    color: "#fff6a3",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    tempLow: -60,
    stateLow: "naphthaice",
    density: 750,
    burn: 10,
    burnTime: 250,
    reactions: {
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
    tick: function(pixel) {
        if (pixel.temp > 51) {
            if (Math.random() < 0.0005) { changePixel(pixel,"naphtha") }
        }
    },
},
elements.naphthaice = {
    color: "#f0ebbb",
    behavior: behaviors.SOLID,
    state: "SOLID",
    category: "betteroil",
    tempHigh: -55,
    stateHigh: "liquidnaphtha",
    density: 750,
},
elements.propylene = {
    color: "#b0b0b0",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    density: 1.91,
    burn: 100,
    burnTime: 5,
    burnInto: ["steam", "carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    reactions: {
        "titaniumpowder": { elem1:"polypropylene", elem2:"titaniumpowder" },
    },
    tick: function(pixel) {
        if (pixel.temp < -46) {
            if (Math.random() < 0.001) { changePixel(pixel,"liquidpropylene") }
        }
    },
},
elements.liquidpropylene = {
    color: "#d4d0c7",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    tempHigh: -100,
    stateHigh: "propylene",
    tempLow: -169,
    stateLow: "propyleneice",
    temp: -102,
    burn: 100,
    burnTime: 500,
    reactions: {
        "titaniumpowder": { elem1:"polypropylene", elem2:"titaniumpowder" },
    },
    burnInto: ["steam", "carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    state: "liquid",
    density: 567.65,
    tick: function(pixel) {
        if (pixel.temp > -108) {
            if (Math.random() < 0.001) { changePixel(pixel,"propylene") }
        }
    },
},
elements.benzenegas = {
    color: "#e3e2c1",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    density: 3.483,
    burn: 100,
    burnTime: 5,
    burnInto: ["steam", "carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    reactions: {
        "ethylenegas": { elem1:"ethylbenzene", elem2:"ethylbenzene" },
        "ethylene": { elem1:"ethylbenzene", elem2:"ethylbenzene" },
    },
    tick: function(pixel) {
        if (pixel.temp < 80) {
            if (Math.random() < 0.001) { changePixel(pixel,"benzene") }
        }
    },
},
elements.benzeneice = {
    color: "#d4d3bc",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "betteroil",
    density: 11185,
    tick: function(pixel) {
        if (pixel.temp > -11) {
            if (Math.random() < 0.0001) { changePixel(pixel,"benzenegas") }
        }
    },
    stateHigh: "benzene",
    tempHigh: 6,
    temp: -15,
},
elements.benzene = {
    color: "#edecce",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    density: 876,
    tick: function(pixel) {
        if (pixel.temp > -11) {
            if (Math.random() < 0.001) { changePixel(pixel,"benzenegas") }
        }
    },
    reactions: {
        "ethylenegas": { elem1:"ethylbenzene", elem2:"ethylbenzene" },
        "ethylene": { elem1:"ethylbenzene", elem2:"ethylbenzene" },
    },
    stateLow: "benzeneice",
    tempLow: 4,
},
elements.dieselgas = {
    color: "#b0aea7",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    density: 4,
    burn: 100,
    burnTime: 5,
    tick: function(pixel) {
        if (pixel.temp < 200) {
            if (Math.random() < 0.001) { changePixel(pixel,"diesel") }
        }
    },
    burnInto: ["carbon_dioxide,", "carbon_dioxide,", "fire", "nitrogen", "steam", "smoke", "carbon_dioxide,", "carbon_dioxide,", "fire", "steam", "smoke"],
},
elements.kerosenegas = {
    color: "#b5b591",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    density: 5.8,
    burn: 100,
    temp: 250,
    burnTime: 5,
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
    category: "betteroil",
    tempHigh: -35,
    stateHigh: "lamp_oil",
},
elements.butadiene = {
    color: "#d1d1d1",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    density: 2.428,
    burn: 100,
    burnTime: 5,
    burnInto: ["steam", "carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    tempLow: -5,
    stateLow: "liquidbutadiene",
    reactions: {
        "styrene": { elem1: "rubber", elem2: null },
    },
},
elements.rubber = {
    color: "#333333",
    alias: "polybutadiene",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "betteroil",
    density: 910,
    burn: 20,
    burnTime: 200,
    burnInto: ["carbon_dioxide", "fire", "smoke"],
    tempHigh: 253,
    stateHigh: "molten_rubber",
},
elements.molten_rubber = {
    color: "#4a4a4a",
    alias: "polybutadiene",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    density: 900,
    burn: 30,
    burnTime: 180,
    burnInto: ["carbon_dioxide", "fire", "smoke"],
    temp: 253,
    tempLow: 250,
    stateLow: "rubber",
},
elements.liquidbutadiene = {
    color: "#bfbfbf",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    density: 614,
    burn: 35,
    burnTime: 500,
    burnInto: ["steam", "carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    tempLow: -109,
    stateLow: "butadieneice"
},
elements.butadieneice = {
    color: "#d1d1d1",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "betteroil",
    density: 700,
    burnInto: ["steam", "carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    tempHigh: -108,
    temp: -110,
    stateHigh: "liquidbutadiene"
},
elements.toluenegas = {
    color: "#d1d1d1",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    density: 3,
    burn: 100,
    burnTime: 5,
    burnInto: ["steam", "carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
},
elements.butane = {
    color: "#d1d1d1",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    density: 2.703,
    burn: 100,
    burnTime: 5,
    burnInto: ["steam", "carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    reactions: {
        "propane": { elem1: "LPG", elem2: null },
    },
},
elements.xylenegas = {
    color: "#d1d1d1",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    burn: 100,
    burnTime: 5,
    burnInto: ["steam", "carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
},
elements.paraffingas = {
    color: "#f5f2eb",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    temp: 370,
    tempLow: 365,
    stateLow: "liquidparaffin",
    burn: 100,
    burnTime: 5,
    burnInto: ["toluene", "benzene", "carbon_dioxide"]
},
elements.liquidparaffin = {
    color: "#f2ecdc",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
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
    behavior: behaviors.WALL,
    state: "solid",
    category: "betteroil",
    tempHigh: 37,
    stateHigh: "liquidparaffin",
},
elements.lubricant = {
    color: "#e04414",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
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
    category: "betteroil",
    tempHigh: -115,
    stateHigh: "lubricant",
    temp: -120,
},
elements.dieselice = {
    color: "#f5f5c9",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "betteroil",
    tempHigh: -8,
    stateHigh: "diesel",
    density: 950,
},
elements.titaniumpowder = {
    color: "#797982",
    behavior: behaviors.POWDER,
    state: "solid",
    category: "powders",
},
elements.polyethylene = {
    color: "#c5dede",
    behavior: behaviors.WALL,
    tempHigh: 120,
    burn: 10,
    burnTime: 200,
    burnInto: ["dioxin","smoke","dioxin","smoke","stench"],
    breakInto: "plastic",
    breakIntoColor: ["#d3e8e8","#afc9c9"],
    category: "betteroil",
    state: "solid",
    density: 1052
},
elements.liquidpolyethylene = {
    color: "#a4b3b3",
    name: "LiquidPolyethylene",
    behavior: behaviors.LIQUID,
    category: "betteroil",
    viscosity: 20,
    tempHigh: 600,
    tempLow: 105,
    stateLow: "polyethylene",
    temp: 110,
    stateHigh: ["dioxin","smoke","dioxin","smoke","stench"],
},
elements.ethylbenzene = {
    color: "#d1d1d1",
    behavior: behaviors.LIQUID,
    category: "betteroil",
    state: "liquid",
    tick: function(pixel) {
        if (pixel.temp > 18) {
            if (Math.random() < 0.001) { changePixel(pixel,"ethylbenzenegas") }
        }
    },
    tempLow: -95,
    stateLow: "ethylbenzeneice",
    density: 867,
    burn: 35,
    burnTime: 500,
    reactions: {
        "rust": { elem1: "styrene", elem2: "rust" }
    },
},
elements.ethylbenzenegas = {
    color: "#dedede",
    behavior: behaviors.GAS,
    category: "betteroil",
    state: "gas",
    tick: function(pixel) {
        if (pixel.temp < 136) {
            if (Math.random() < 0.001) { changePixel(pixel,"ethylbenzenegas") }
        }
    },
    tempLow: 18,
    stateLow: "ethylbenzene",
    density: 3.7,
    burn: 100,
    burnTime: 5,
},
elements.ethylbenzeneice = {
    color: "#dedede",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "betteroil",
    stateHigh: "ethylbenzene",
    tempHigh: -93,
    temp: -95,
    density: 950,
},
elements.styrene = {
    colour: "#d1d1d1",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    stateLow: "styreneice",
    tempLow: -30.6,
    tick: function(pixel) {
        if (pixel.temp > 31) {
            if (Math.random() < 0.001) { changePixel(pixel,"styrenegas") }
        }
    },
}
elements.styrenegas = {
    colour: "#dedede",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    stateLow: "styrene",
    tempLow: 30,
    tick: function(pixel) {
        if (pixel.temp < 145) {
            if (Math.random() < 0.001) { changePixel(pixel,"styrenegas") }
        }
    },
}
elements.LPG = {
    color: "#ebebeb",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    density: 1.9,
    burn: 100,
    burnTime: 10,
    burnInto: ["steam", "carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    reactions: {
        "propane": { elem1: "LPG", elem2: null },
    },
    fireColor: ["#00ffff","#00ffdd"],
},
elements.propane.category = "betteroil"
