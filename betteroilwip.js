elements.oil = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: [
        "XX|XX|XX",
        "XX|CH:crudegasoline,crudenaphtha,crudeparaffin,crudediesel,crudekerosene,crudelubricant,crudebitumen,alkane|XX",
        "XX|XX|XX",
    ],
    state: "liquid",
    category: "betteroil",
},
elements.crudepropane = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: behaviors.LIQUID,
    tick: function(pixel) {
        if (pixel.temp > -42 && Math.random() < 0.0002) { changePixel(pixel,"propane") }
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
    hidden: true,
},
elements.alkane = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: [
        "XX|XX|XX",
        "XX|CH:crudemethane,crudeethane,crudepropane,crudebutane|XX",
        "XX|XX|XX",
    ],
    state: "liquid",
    category: "betteroil",
    hidden:true
},
elements.crudemethane = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: behaviors.LIQUID,
    tick: function(pixel) {
        if (pixel.temp > -161 && Math.random() < 0.0002) { changePixel(pixel,"methane") }
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
    hidden: true,
},
elements.crudeethane = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: behaviors.LIQUID,
    tick: function(pixel) {
        if (pixel.temp > -88.5 && Math.random() < 0.0002) { changePixel(pixel,"ethane") }
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
    hidden: true,
},
elements.crudebutane = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: behaviors.LIQUID,
    tick: function(pixel) {
        if (pixel.temp > 0.5 && Math.random() < 0.001) { changePixel(pixel,"butane") }
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
    hidden: true,
},
elements.crudegasoline = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: behaviors.LIQUID,
    tick: function(pixel) {
        if (pixel.temp > 40 && Math.random() < 0.001) { changePixel(pixel,"gasolinefumes") }
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
    hidden: true,
},
elements.crudenaphtha = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: behaviors.LIQUID,
    tick: function(pixel) {
        if (pixel.temp > 80 && Math.random() < 0.001) { changePixel(pixel,"naphtha") }
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
    hidden: true,
},
elements.crudeparaffin = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: behaviors.LIQUID,
    tick: function(pixel) {
        if (pixel.temp > 180 && Math.random() < 0.001) { changePixel(pixel,"liquidparaffin") }
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
    hidden: true,
},
elements.crudediesel = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: behaviors.LIQUID,
    tick: function(pixel) {
        if (pixel.temp > 220 && Math.random() < 0.001) { changePixel(pixel,"dieselgas") }
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
    hidden: true,
},
elements.crudekerosene = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: behaviors.LIQUID,
    tick: function(pixel) {
        if (pixel.temp > 250 && Math.random() < 0.001) { changePixel(pixel,"kerosenegas") }
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
    hidden: true,
},
elements.crudelubricant = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: behaviors.LIQUID,
    tick: function(pixel) {
        if (pixel.temp > 300 && Math.random() < 0.001) { changePixel(pixel,"lubricant") }
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
    burnInto: ["carbon_dioxide","lubricantgas", "lubricantgas", "lubricantgas","lubricantgas", "smoke","fire"],
    viscosity: 250,
    state: "liquid",
    density: 825,
    stain: 0.05,
    alias: "petroleum",
    hidden: true,
},
elements.crudebitumen = {
    name: "CrudeOil",
    color: "#470e00",
    behavior: behaviors.LIQUID,
    tick: function(pixel) {
        if (pixel.temp > 350 && Math.random() < 0.001) { changePixel(pixel,"bitumen") }
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
    burnInto: ["carbon_dioxide","smoke", "bitumengas", "bitumengas","bitumengas", "bitumengas","fire"],
    viscosity: 250,
    state: "liquid",
    density: 825,
    stain: 0.05,
    alias: "petroleum",
    hidden: true,
},
elements.gasoline = {
    behavior: behaviors.LIQUID,
    color: "#e6d78e",
    reactions: {
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
        "polystyrene": { elem1: null, elem2: "napalmb" },
    },
    category: "betteroil",
    tick: function(pixel) {
        if (pixel.temp > -35 && !pixel.burning) {
            if (Math.random() < 0.0005) { changePixel(pixel,"gasolinefumes") }
        }
        if (pixel.temp > 15 && !pixel.burning) {
            if (Math.random() < 0.0001) { changePixel(pixel,"gasolinefumes") }
        }
        if (pixel.temp > 50 && !pixel.burning) {
            if (Math.random() < 0.0001) { changePixel(pixel,"gasolinefumes") }
        }
        if (pixel.temp > 100 && !pixel.burning) {
            if (Math.random() < 0.0001) { changePixel(pixel,"gasolinefumes") }
        }
        if (pixel.temp > 150 && !pixel.burning) {
            if (Math.random() < 0.0005) { changePixel(pixel,"gasolinefumes") }
        }
        if (pixel.temp > 200 && !pixel.burning) {
            if (Math.random() < 0.02) { changePixel(pixel,"gasolinefumes") }
        }
    },
    tempLow: -40,
    stateLow: "gasolineice",
    viscosity: 2,
    state: "liquid",
    density: 730,
    alias: "petrol",
    burn: 5,
    burnTime: 800,
    burnInto: "gasolinefumes",
},
elements.napalmb = {
    behavior: behaviors.STICKY,
    tick: function(pixel) {
        if (pixel.temp > 25 && Math.random() < 0.0005) {
            for (var i = 0; i < adjacentCoords.length; i++) {
                var coords = adjacentCoords[i];
                var x = pixel.x + coords[0];
                var y = pixel.y + coords[1];
                if (isEmpty(x,y)) {
                    createPixel("gasolinefumes",x,y);
                    changePixel(pixel, "polystyrene");
                }
                if (pixelMap[x,y].element == "polystyrene") {
                    changePixel(pixelMap[x,y],"napalmb");
                    changePixel(pixel, "polystyrene");
                }
            }
        }
    },
    burn: 80,
    burnTime: 1000,
    name: "Napalm",
    alias: "Napalm B",
    category: "weapons",
    burnInto: ["carbon_dioxide", "fire", "smoke"],
},
elements.gasolineice = {
    behavior: behaviors.SOLID,
    color: "#ebe1b2",
    category: "betteroil",
    temp: -60,
    tempHigh: -35,
    stateHigh: "gasoline",
    state: "solid",
    density: 800,
    alias: "petrol",
},
elements.gasolinefumes = {
    behavior: behaviors.GAS,
    color: "#cfcfcf",
    category: "betteroil",
    temp: 70,
    tempHigh: 500,
    stateHigh: "fire",
    tick: function(pixel) {
        if (pixel.temp < 40) {
            if (Math.random() < 0.0005) { changePixel(pixel,"gasoline") }
        }
        if (pixel.temp < 20) {
            if (Math.random() < 0.0005) { changePixel(pixel,"gasoline") }
        }
        if (pixel.temp < 0) {
            if (Math.random() < 0.00025) { changePixel(pixel,"gasoline") }
        }
        if (pixel.temp < -15) {
            if (Math.random() < 0.00025) { changePixel(pixel,"gasoline") }
        }
        if (pixel.temp < -35) {
            if (Math.random() < 0.02) { changePixel(pixel,"gasoline") }
        }
    },
    burn: 100,
    burnTime: 40,
    tempLow: -40,
    stateLow: "gasolineice",
    burnInto: ["carbon_dioxide", "smoke", "smoke", "fire", "fire", "smoke", "smoke", "fire", "fire"],
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
            if (Math.random() < 0.001) { changePixel(pixel,"liquidnaphtha") }
        }
        if (pixel.temp < 50) {
            if (Math.random() < 0.02) { changePixel(pixel,"liquidnaphtha") }
        }
    },
    temp: 90,
    state: "gas",
    density: 3,
    burnInto: ["smoke", "carbon_dioxide", "nitrogen", "fire", "smoke", "carbon_dioxide", "smoke", "smoke"],
    burn: 10,
    burnTime: 30,
},
elements.ethylene = {
    color: "#d4d0c7",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    tempHigh: 1200,
    stateHigh: "fire",
    reactions: {
        "titaniumpowder": { elem1:"polyethylene", elem2:"titaniumpowder" },
    },
    burn: 100,
    burnTime: 15,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    density: 1.26,
    tick: function(pixel) {
        if (pixel.temp < -103) {
            if (Math.random() < 0.0005) { changePixel(pixel,"liquidethylene") }
        }
        if (pixel.temp < -130) {
            if (Math.random() < 0.001) { changePixel(pixel,"liquidethylene") }
        }
        if (pixel.temp < -169) {
            if (Math.random() < 0.02) { changePixel(pixel,"liquidethylene") }
        }
    },
},
elements.liquidethylene = {
    color: "#d4d0c7",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    tempLow: -169,
    stateLow: "ethyleneice",
    temp: -102,
    reactions: {
        "titaniumpowder": { elem1:"polyethylene", elem2:"titaniumpowder" },
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    state: "liquid",
    density: 567.65,
    tick: function(pixel) {
        if (pixel.temp > -136 && !pixel.burning) {
            if (Math.random() < 0.0005) { changePixel(pixel,"ethylene") }
        }
        if (pixel.temp > -120 && !pixel.burning) {
            if (Math.random() < 0.001) { changePixel(pixel,"ethylene") }
        }
        if (pixel.temp > -100 && !pixel.burning) {
            if (Math.random() < 0.001) { changePixel(pixel,"ethylene") }
        }
        if (pixel.temp > -80 && !pixel.burning) {
            if (Math.random() < 0.02) { changePixel(pixel,"ethylene") }
        }
    },
    burn: 5,
    burnTime: 800,
    burnInto: "ethylene",
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
        if (pixel.temp > 34 && !pixel.burning) {
            if (Math.random() < 0.0002) { changePixel(pixel,"kerosenegas") }
        }
        if (pixel.temp > 56 && !pixel.burning) {
            if (Math.random() < 0.0002) { changePixel(pixel,"kerosenegas") }
        }
        if (pixel.temp > 90 && !pixel.burning) {
            if (Math.random() < 0.0002) { changePixel(pixel,"kerosenegas") }
        }
        if (pixel.temp > 180 && !pixel.burning) {
            if (Math.random() < 0.0002) { changePixel(pixel,"kerosenegas") }
        }
        if (pixel.temp > 240 && !pixel.burning) {
            if (Math.random() < 0.0005) { changePixel(pixel,"kerosenegas") }
        }
        if (pixel.temp > 300 && !pixel.burning) {
            if (Math.random() < 0.015) { changePixel(pixel,"kerosenegas") }
        }
    },
    category: "betteroil",
    tempLow: -40,
    stateLow: "keroseneice",
    viscosity: 3,
    state: "liquid",
    density: 800,
    alias: "lamp_oil",
    burn: 5,
    burnTime: 800,
    burnInto: "kerosenegas",
},
elements.diesel = {
    color: "#d6d651",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    density: 840,
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
        if (pixel.temp > 60 && !pixel.burning) {
            if (Math.random() < 0.00025) { changePixel(pixel,"dieselgas") }
        }
        if (pixel.temp > 100 && !pixel.burning) {
            if (Math.random() < 0.00025) { changePixel(pixel,"dieselgas") }
        }
        if (pixel.temp > 120 && !pixel.burning) {
            if (Math.random() < 0.001) { changePixel(pixel,"dieselgas") }
        }
        if (pixel.temp > 150 && !pixel.burning) {
            if (Math.random() < 0.02) { changePixel(pixel,"dieselgas") }
        }
    },
    tempLow: -10,
    stateLow: "dieselice",
    burn: 5,
    burnTime: 800,
    burnInto: "dieselgas",
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
    reactions: {
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
    burn: 5,
    burnTime: 800,
    burnInto: "bitumengas"
},
elements.asphalt = {
    color: "#0f0f0e",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "betteroil",
    density: 1020,
    tempHigh: 135,
    stateHigh: "bitumen",
    noMix: true,
},
elements.bitumengas = {
    color: "#696962",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    temp: 525,
    tempLow: 515,
    stateLow: "bitumen",
    density: 4.3,
    burn: 100,
    burnTime: 40,
    burnInto: ["smoke", "smoke", "smoke", "fire", "fire", "carbon_dioxide"],
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
    burn: 100,
    burnTime: 40,
    burnInto: ["smoke", "smoke", "smoke", "fire", "fire", "carbon_dioxide"],
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
        if (pixel.temp > 51 && !pixel.burning) {
            if (Math.random() < 0.0003) { changePixel(pixel,"naphtha") }
        }
        if (pixel.temp > 65 && !pixel.burning) {
            if (Math.random() < 0.00025) { changePixel(pixel,"naphtha") }
        }
        if (pixel.temp > 80 && !pixel.burning) {
            if (Math.random() < 0.02) { changePixel(pixel,"naphtha") }
        }
    },
},
elements.naphthaice = {
    color: "#f0ebbb",
    behavior: behaviors.SOLID,
    state: "solid",
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
    burnTime: 15,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    reactions: {
        "titaniumpowder": { elem1:"polypropylene", elem2:"titaniumpowder" },
    },
    tick: function(pixel) {
        if (pixel.temp < -46) {
            if (Math.random() < 0.00025) { changePixel(pixel,"liquidpropylene") }
        }
        if (pixel.temp < -60) {
            if (Math.random() < 0.00025) { changePixel(pixel,"liquidpropylene") }
        }
        if (pixel.temp < -80) {
            if (Math.random() < 0.0005) { changePixel(pixel,"liquidpropylene") }
        }
        if (pixel.temp < -108) {
            if (Math.random() < 0.01) { changePixel(pixel,"liquidpropylene") }
        }
    },
},
elements.liquidpropylene = {
    color: "#d4d0c7",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    tempLow: -169,
    stateLow: "propyleneice",
    temp: -130,
    reactions: {
        "titaniumpowder": { elem1:"polypropylene", elem2:"titaniumpowder" },
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    state: "liquid",
    density: 567.65,
    tick: function(pixel) {
        if (pixel.temp > -108 && !pixel.burning) {
            if (Math.random() < 0.00025) { changePixel(pixel,"propylene") }
        }
        if (pixel.temp > -80 && !pixel.burning) {
            if (Math.random() < 0.00025) { changePixel(pixel,"propylene") }
        }
        if (pixel.temp > -60 && !pixel.burning) {
            if (Math.random() < 0.0005) { changePixel(pixel,"propylene") }
        }
        if (pixel.temp > -46 && !pixel.burning) {
            if (Math.random() < 0.02) { changePixel(pixel,"propylene") }
        }
    },
    burn: 5,
    burnTime: 800,
    burnInto: "propylene",
},
elements.benzenegas = {
    color: "#e3e2c1",
    name: "BenzeneGas",
    behavior: behaviors.GAS,
    state: "gas",
    temp: 120,
    tempHigh: 1000,
    stateHigh: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    category: "betteroil",
    density: 3.483,
    burn: 100,
    burnTime: 30,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    reactions: {
        "aluminiumchloride": { elem1:"abenzenegas", elem2:"aluminiumchloride", tempMin:90 },
    },
    tick: function(pixel) {
        if (pixel.temp < 80) {
            if (Math.random() < 0.00025) { changePixel(pixel,"benzene") }
        }
        if (pixel.temp < 60) {
            if (Math.random() < 0.00025) { changePixel(pixel,"benzene") }
        }
        if (pixel.temp < 40) {
            if (Math.random() < 0.00025) { changePixel(pixel,"benzene") }
        }
        if (pixel.temp < 20) {
            if (Math.random() < 0.0005) { changePixel(pixel,"benzene") }
        }
        if (pixel.temp < 0) {
            if (Math.random() < 0.001) { changePixel(pixel,"benzene") }
        }
        if (pixel.temp < -11) {
            if (Math.random() < 0.01) { changePixel(pixel,"benzene") }
        }
    },
},
elements.abenzenegas = {
    color: "#e3e2c1",
    name: "BenzeneGas",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    density: 3.483,
    burn: 100,
    burnTime: 30,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    tick: function(pixel) {
        changePixel(pixel,"benzenegas")
    },
    reactions: {
        "ethylene": { elem1:"ethylbenzene", elem2:"ethylbenzene", tempMin:90 },
        "liquidethylene": { elem1:"ethylbenzene", elem2:"ethylbenzene", tempMin:90 },
    },
    hidden: true,
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
        if (pixel.temp > -11 && !pixel.burning) {
            if (Math.random() < 0.00005) { changePixel(pixel,"benzenegas") }
        }
        if (pixel.temp > 20 && !pixel.burning) {
            if (Math.random() < 0.00005) { changePixel(pixel,"benzenegas") }
        }
        if (pixel.temp > 50 && !pixel.burning) {
            if (Math.random() < 0.0005) { changePixel(pixel,"benzenegas") }
        }
        if (pixel.temp > 80 && !pixel.burning) {
            if (Math.random() < 0.002) { changePixel(pixel,"benzenegas") }
        }
    },
    reactions: {
        "aluminiumchloride": { elem1:"abenzene", elem2:"aluminiumchloride", minTemp:90 },
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
    stateLow: "benzeneice",
    tempLow: 4,
    burn: 5,
    burnTime: 800,
    burnInto: "benzenegas",
},
elements.abenzene = {
    color: "#edecce",
    name: "Benzene",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    density: 876,
    tick: function(pixel) {
        if (pixel.temp > -11 && !pixel.burning) {
            if (Math.random() < 0.002) { changePixel(pixel,"benzenegas") }
        }
    },
    reactions: {
        "ethylene": { elem1:"ethylbenzene", elem2:"ethylbenzene", tempMin:90 },
        "liquidethylene": { elem1:"ethylbenzene", elem2:"ethylbenzene", tempMin:90 },
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
    stateLow: "benzeneice",
    tempLow: 4,
    burn: 5,
    burnTime: 800,
    burnInto: "benzenegas",
},
elements.dieselgas = {
    color: "#b0aea7",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    tempLow: -40,
    stateLow: "dieselice",
    density: 4,
    burn: 100,
    burnTime: 30,
    tick: function(pixel) {
        if (pixel.temp < 200) {
            if (Math.random() < 0.0003) { changePixel(pixel,"diesel") }
        }
        if (pixel.temp < 160) {
            if (Math.random() < 0.0005) { changePixel(pixel,"diesel") }
        }
        if (pixel.temp < 120) {
            if (Math.random() < 0.0005) { changePixel(pixel,"diesel") }
        }
        if (pixel.temp < 90) {
            if (Math.random() < 0.001) { changePixel(pixel,"diesel") }
        }
        if (pixel.temp < 60) {
            if (Math.random() < 0.02) { changePixel(pixel,"diesel") }
        }
    },
    burnInto: ["carbon_dioxide,", "carbon_dioxide,", "fire", "nitrogen", "smoke", "fire", "smoke"],
},
elements.kerosenegas = {
    color: "#b5b591",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    density: 5.8,
    burn: 100,
    temp: 270,
    burnTime: 40,
    tempLow: -40,
    stateLow: "keroseneice",
    burnInto: ["carbon_dioxide","fire","fire","smoke","smoke","smoke"],
    tick: function(pixel) {
        if (pixel.temp < 245) {
            if (Math.random() < 0.0003) { changePixel(pixel,"lamp_oil") }
        }
        if (pixel.temp < 190) {
            if (Math.random() < 0.0006) { changePixel(pixel,"lamp_oil") }
        }
        if (pixel.temp < 150) {
            if (Math.random() < 0.0009) { changePixel(pixel,"lamp_oil") }
        }
        if (pixel.temp < 100) {
            if (Math.random() < 0.001) { changePixel(pixel,"lamp_oil") }
        }
        if (pixel.temp < 70) {
            if (Math.random() < 0.002) { changePixel(pixel,"lamp_oil") }
        }
        if (pixel.temp < 34) {
            if (Math.random() < 0.02) { changePixel(pixel,"lamp_oil") }
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
    burnTime: 15,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    tempLow: -5,
    stateLow: "liquidbutadiene",
    reactions: {
        "styrene": { elem1: "rubber", elem2: null },
    },
},
elements.rubber = {
    color: "#333333",
    alias: "styrene butadiene rubber",
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
    alias: "styrene butadiene rubber",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    density: 900,
    burn: 30,
    burnTime: 180,
    burnInto: ["carbon_dioxide", "fire", "smoke"],
    temp: 300,
    tempLow: 250,
    stateLow: "rubber",
    reactions: {
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
},
elements.liquidbutadiene = {
    color: "#bfbfbf",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    density: 614,
    tempLow: -109,
    stateLow: "butadieneice",
    temp: -10,
    tempHigh: -6,
    stateHigh: "butadiene",
    reactions: {
        "styrene": { elem1: "rubber", elem2: null },
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
},
elements.butadieneice = {
    color: "#d1d1d1",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "betteroil",
    density: 700,
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
    burnTime: 25,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    tick: function(pixel) {
        if (pixel.temp < 111) {
            if (Math.random() < 0.0001) { changePixel(pixel,"toluene") }
        }
        if (pixel.temp < 70) {
            if (Math.random() < 0.0003) { changePixel(pixel,"toluene") }
        }
        if (pixel.temp < 40) {
            if (Math.random() < 0.0005) { changePixel(pixel,"toluene") }
        }
        if (pixel.temp < 20) {
            if (Math.random() < 0.0015) { changePixel(pixel,"toluene") }
        }
        if (pixel.temp < 4) {
            if (Math.random() < 0.01) { changePixel(pixel,"toluene") }
        }
    },
    tempLow: 4,
    stateLow: "toluene",
    temp: 130,
},
elements.toluene = {
    color: "#adadad",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    density: 900,
    tempLow: -95,
    stateLow: "tolueneice",
    tick: function(pixel) {
        if (pixel.temp > 4 && !pixel.burning) {
            if (Math.random() < 0.0003) { changePixel(pixel,"toluenegas") }
        }
        if (pixel.temp > 20 && !pixel.burning) {
            if (Math.random() < 0.00025) { changePixel(pixel,"toluenegas") }
        }
        if (pixel.temp > 40 && !pixel.burning) {
            if (Math.random() < 0.0004) { changePixel(pixel,"toluenegas") }
        }
        if (pixel.temp > 70 && !pixel.burning) {
            if (Math.random() < 0.0006) { changePixel(pixel,"toluenegas") }
        }
        if (pixel.temp > 111 && !pixel.burning) {
            if (Math.random() < 0.02) { changePixel(pixel,"toluenegas") }
        }
    },
    reactions: {
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
    burn: 5,
    burnTime: 800,
    burnInto: "toluenegas",
},
elements.tolueneice = {
    color: "#adadad",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "betteroil",
    density: 3,
    burn: 30,
    temp: 0,
    burnTime: 400,
    stateHigh: "toluene",
    tempHigh: -93,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    tick: function(pixel) {
        if (pixel.temp > 4 && !pixel.burning) {
            if (Math.random() < 0.0005) { changePixel(pixel,"toluenegas") }
        }
    },
},
elements.butane = {
    color: "#d1d1d1",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    density: 2.703,
    burn: 100,
    burnTime: 15,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
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
    burnTime: 15,
    density: 3.7,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    stateLow: "xylene",
    tempLow: 29,
    tick: function(pixel) {
        if (pixel.temp < 194) {
            if (Math.random() < 0.0001) { changePixel(pixel,"xylene") }
        }
        if (pixel.temp < 194) {
            if (Math.random() < 0.0003) { changePixel(pixel,"xylene") }
        }
        if (pixel.temp < 194) {
            if (Math.random() < 0.0005) { changePixel(pixel,"xylene") }
        }
        if (pixel.temp < 194) {
            if (Math.random() < 0.001) { changePixel(pixel,"xylene") }
        }
        if (pixel.temp < 194) {
            if (Math.random() < 0.002) { changePixel(pixel,"xylene") }
        }
        if (pixel.temp < 29) {
            if (Math.random() < 0.02) { changePixel(pixel,"xylene") }
        }
    },
},
elements.xylene = {
    color: "#bababa",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    density: 3.7,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
    tempHigh: 194,
    density: 865,
    stateHigh: "xylenegas",
    tick: function(pixel) {
        if (pixel.temp > 29) {
            if (Math.random() < 0.002) { changePixel(pixel,"xylenegas") }
        }
    },
    burn: 5,
    burnTime: 800,
    burnInto: "xylenegas",
},
elements.paraffingas = {
    color: "#f5f2eb",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    temp: 370,
    tempLow: 365,
    stateLow: "liquidparaffin",
    density: 1.934,
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
    burnInto: ["toluenegas", "benzenegas", "carbon_dioxide"]
},
elements.paraffin = {
    color: "#d9d5ca",
    behavior: behaviors.SOLID,
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
    burn: 5,
    burnTime: 800,
    burnInto: "lubricantgas"
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
    color: "#8c8ca3",
    name: "TitaniumPowder",
    behavior: behaviors.SUPPORT,
    state: "solid",
    category: "powders",
    tempHigh: 1670,
    stateHigh: "moltentitanium",
},
elements.moltentitanium = {
    color: "#ff9b35",
    behavior: behaviors.MOLTEN,
    state: "liquid",
    category: "liquids",
    hidden: true,
    tempLow: 1665,
    stateLow: "titanium",
    temp: 1670,
    density: 4000,
},
elements.titanium = {
    color: "#797982",
    behavior: behaviors.WALL,
    state: "solid",
    category: "solids",
    tempHigh: 1670,
    stateHigh: "moltentitanium",
    breakInto: "titaniumpowder",
    conduct: 0.4,
    hardness: 0.3,
    density: 4420,
},
elements.polyethylene = {
    color: "#c5dede",
    behavior: behaviors.SOLID,
    tempHigh: 120,
    stateHigh: "liquidpolyethylene",
    burn: 10,
    burnTime: 200,
    burnInto: ["dioxin","smoke","dioxin","smoke","stench"],
    breakInto: "plastic",
    category: "betteroil",
    state: "solid",
    density: 950,
    burn: 30,
    burnTime: 150,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
},
elements.polystyrene = {
    color: "#dce8e8",
    behavior: behaviors.POWDER,
    tempHigh: 120,
    stateHigh: "liquidpolystyrene",
    burn: 70,
    burnTime: 100,
    burnInto: ["dioxin","smoke","dioxin","smoke","stench"],
    breakInto: "plastic",
    category: "betteroil",
    state: "solid",
    density: 500,
    alias: "Styrofoam",
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
    density: 842,
    burn: 60,
    burnTime: 150,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
},
elements.liquidpolystyrene = {
    color: "#b5bdbd",
    name: "LiquidPolystyrene",
    behavior: behaviors.LIQUID,
    category: "betteroil",
    viscosity: 20,
    tempHigh: 600,
    density: 900,
    tempLow: 105,
    stateLow: "polystyrene",
    temp: 110,
    stateHigh: ["dioxin","smoke","dioxin","smoke","stench"],
    reactions: {
        "magnesiumoxide": { elem1:"styrenegas", elem2:"magnesiumoxide", tempMin: 400 }
    },
    burn: 80,
    burnTime: 100,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire", "smoke"],
},
elements.ethylbenzene = {
    color: "#d1d1d1",
    behavior: behaviors.LIQUID,
    category: "betteroil",
    state: "liquid",
    tick: function(pixel) {
        if (pixel.temp > 18 && !pixel.burning) {
            if (Math.random() < 0.0001) { changePixel(pixel,"ethylbenzenegas") }
        }
        if (pixel.temp > 35 && !pixel.burning) {
            if (Math.random() < 0.0003) { changePixel(pixel,"ethylbenzenegas") }
        }
        if (pixel.temp > 60 && !pixel.burning) {
            if (Math.random() < 0.0005) { changePixel(pixel,"ethylbenzenegas") }
        }
        if (pixel.temp > 85 && !pixel.burning) {
            if (Math.random() < 0.001) { changePixel(pixel,"ethylbenzenegas") }
        }
        if (pixel.temp > 136 && !pixel.burning) {
            if (Math.random() < 0.01) { changePixel(pixel,"ethylbenzenegas") }
        }
    },
    tempLow: -95,
    stateLow: "ethylbenzeneice",
    density: 867,
    burn: 35,
    burnTime: 500,
    reactions: {
        "rust": { elem1: "styrene", elem2: "rust" },
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
    burn: 5,
    burnTime: 800,
    burnInto: "ethylbenzenegas",
},
elements.ethylbenzenegas = {
    color: "#dedede",
    behavior: behaviors.GAS,
    category: "betteroil",
    state: "gas",
    tick: function(pixel) {
        if (pixel.temp < 136) {
            if (Math.random() < 0.0001) { changePixel(pixel,"ethylbenzenegas") }
        }
        if (pixel.temp < 85) {
            if (Math.random() < 0.0003) { changePixel(pixel,"ethylbenzenegas") }
        }
        if (pixel.temp < 60) {
            if (Math.random() < 0.0005) { changePixel(pixel,"ethylbenzenegas") }
        }
        if (pixel.temp < 35) {
            if (Math.random() < 0.001) { changePixel(pixel,"ethylbenzenegas") }
        }
        if (pixel.temp < 18) {
            if (Math.random() < 0.01) { changePixel(pixel,"ethylbenzenegas") }
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
elements.styreneice = {
    color: "#dedede",
    behavior: behaviors.SOLID,
    state: "solid",
    category: "betteroil",
    stateHigh: "styrene",
    tempHigh: -30,
    temp: -35,
},
elements.styrene = {
    colour: "#d1d1d1",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "betteroil",
    stateLow: "styreneice",
    tempLow: -30.6,
    tick: function(pixel) {
        if (pixel.temp > 31 && !pixel.burning) {
            if (Math.random() < 0.0001) { changePixel(pixel,"styrenegas") }
        }
        if (pixel.temp > 55 && !pixel.burning) {
            if (Math.random() < 0.0003) { changePixel(pixel,"styrenegas") }
        }
        if (pixel.temp > 85 && !pixel.burning) {
            if (Math.random() < 0.0005) { changePixel(pixel,"styrenegas") }
        }
        if (pixel.temp > 115 && !pixel.burning) {
            if (Math.random() < 0.001) { changePixel(pixel,"styrenegas") }
        }
        if (pixel.temp > 145 && !pixel.burning) {
            if (Math.random() < 0.01) { changePixel(pixel,"styrenegas") }
        }
    },
    burn: 50,
    burnTime: 150,
    burnInto: ["dioxin", "smoke", "fire"],
    density: 906,
    reactions: {
        "steam": { elem1: "polystyrene", elem2: null },
        "dirt": { elem1:null, elem2:"mud" },
        "sand": { elem1:null, elem2:"wet_sand" },
    },
},
elements.styrenegas = {
    colour: "#dedede",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    stateHigh: ["dioxin", "smoke", "fire", "smoke", "fire", "smoke", "fire"],
    tempHigh: 490,
    temp: 150,
    stateLow: "styrene",
    tempLow: 30,
    tick: function(pixel) {
        if (pixel.temp < 145) {
            if (Math.random() < 0.0001) { changePixel(pixel,"styrenegas") }
        }
        if (pixel.temp < 115) {
            if (Math.random() < 0.0003) { changePixel(pixel,"styrenegas") }
        }
        if (pixel.temp < 85) {
            if (Math.random() < 0.0005) { changePixel(pixel,"styrenegas") }
        }
        if (pixel.temp < 55) {
            if (Math.random() < 0.001) { changePixel(pixel,"styrenegas") }
        }
        if (pixel.temp < 31) {
            if (Math.random() < 0.01) { changePixel(pixel,"styrenegas") }
        }
    },
    burn: 100,
    burnTime: 5,
    burnInto: ["dioxin", "smoke", "fire", "smoke", "fire", "smoke", "fire"],
    density: 4.6,
},
elements.LPG = {
    color: "#ebebeb",
    behavior: behaviors.GAS,
    state: "gas",
    category: "betteroil",
    density: 1.9,
    burn: 100,
    burnTime: 10,
    burnInto: ["carbon_dioxide", "fire", "smoke", "carbon_dioxide", "fire"],
    reactions: {
        "propane": { elem1: "LPG", elem2: null },
    },
    fireColor: ["#00ffff","#00ffdd"],
},
elements.aluminiumchloride = {
    color: "#dbdbdb",
    behavior: behaviors.POWDER,
    state: "solid",
    category: "powders",
    density: 2480,
    tempHigh: 190,
    stateHigh: "aluminiumchloridegas",
    conduct: 0,
},
elements.aluminiumchloridegas = {
    color: "#dbdbdb",
    behavior: behaviors.GAS,
    state: "gas",
    category: "gas",
    hidden: true,
    density: 2300,
    temp: 200,
    tempLow: 187,
    stateLow: "aluminiumchloride",
},
elements.molten_aluminum = {
    reactions: {
        "rust": { elem1:null, elem2:"thermite" },
        "oxidized_copper": { elem1:null, elem2:"thermite" },
        "chlorine": { elem1:null, elem2:"moltenaluminiumchloride" }
    },
    density: 2375
},
elements.propane.category = "betteroil",
elements.propane.burnTime = 10,
elements.water.reactions = {
        "salt": { elem1: "salt_water", elem2: null, temp1:-20 },
        "sugar": { elem1: "sugar_water", elem2: null },
        "honey": { elem1: "sugar_water" },
        "caramel": { elem1: "sugar_water", elem2: null },
        "molasses": { elem1: "sugar_water" },
        "dust": { elem1: "dirty_water", elem2: null },
        "ash": { elem1: "dirty_water", elem2: null },
        "cyanide": { elem1: "dirty_water", elem2: null },
        "cyanide_gas": { elem1: "dirty_water", elem2: null },
        "carbon_dioxide": { elem1: "seltzer", elem2: null, oneway:true },
        "sulfur": { elem1: "dirty_water", elem2: null },
        "rat": { elem1: "dirty_water", chance:0.005 },
        "infection": { elem1: "dirty_water", elem2: null },
        "plague": { elem1: "dirty_water", elem2: null },
        "rust": { elem1: "dirty_water", chance:0.005 },
        "lead": { elem1: "dirty_water", chance:0.005 },
        "solder": { elem1: "dirty_water", chance:0.005 },
        "fallout": { elem1: "dirty_water", chance:0.25 },
        "radiation": { elem1: "dirty_water", chance:0.25 },
        "uranium": { elem1: "dirty_water", chance:0.25 },
        "rad_steam": { elem1: "dirty_water", chance:0.02 },
        "rad_glass": { elem1: "dirty_water", chance:0.005 },
        "rad_shard": { elem1: "dirty_water", chance:0.01 },
        "rotten_meat": { elem1: "dirty_water", chance:0.25 },
        "rotten_cheese": { elem1: "dirty_water", chance:0.25 },
        "cancer": { elem1: "dirty_water", chance:0.25 },
        "oil": { elem1: "dirty_water", chance:0.005 },
        "crudepropane": { elem1: "dirty_water", chance:0.005 },
        "crudegasoline": { elem1: "dirty_water", chance:0.005 },
        "crudenaphtha": { elem1: "dirty_water", chance:0.005 },
        "crudeparaffin": { elem1: "dirty_water", chance:0.005 },
        "crudediesel": { elem1: "dirty_water", chance:0.005 },
        "crudekerosene": { elem1: "dirty_water", chance:0.005 },
        "crudebitumen": { elem1: "dirty_water", chance:0.005 },
        "crudelubricant": { elem1: "dirty_water", chance:0.005 },
        "dioxin": { elem1: "dirty_water", chance:0.1 },
        "neutron": { elem1: ["dirty_water","dirty_water","dirty_water","rad_steam"], elem2:null, chance:0.1 },
        "rock": { elem2: "wet_sand", chance: 0.00035 },
        "limestone": { elem2: "wet_sand", chance: 0.00035 },
        "tuff": { elem2: "wet_sand", color2:"#7a6b5c", chance: 0.00035 },
        "ruins": { elem2: "rock", chance: 0.00035 },
        "mudstone": { elem2: "mud", chance: 0.00035 },
        "methane": { elem1:"primordial_soup", elem2:"primordial_soup", tempMin:60, charged:true },
        "ammonia": { elem1:"primordial_soup", elem2:"primordial_soup", tempMin:60, charged:true },
        "fly": { elem2:"dead_bug", chance:0.1, oneway:true },
        "firefly": { elem2:"dead_bug", chance:0.1, oneway:true },
        "bee": { elem2:"dead_bug", chance:0.05, oneway:true },
        "stink_bug": { elem2:"dead_bug", chance:0.1, oneway:true },
        "cured_meat": { elem1:"salt_water", elem2:"meat" },
        "water": { elem2:"bubble", attr2:{"clone":"water"}, chance:0.001, tempMin:85 },
        // electrolysis:
        "aluminum": { elem1:["hydrogen","hydrogen","oxygen"], charged:true, chance:0.0025 },
        "zinc": { elem1:["hydrogen","hydrogen","oxygen"], charged:true, chance:0.015 },
        "steel": { elem1:["hydrogen","hydrogen","oxygen"], charged:true, chance:0.0125 },
        "iron": { elem1:["hydrogen","hydrogen","oxygen"], charged:true, chance:0.0125 },
        "tin": { elem1:["hydrogen","hydrogen","oxygen"], charged:true, chance:0.01 },
        "brass": { elem1:["hydrogen","hydrogen","oxygen"], charged:true, chance:0.001 },
        "bronze": { elem1:["hydrogen","hydrogen","oxygen"], charged:true, chance:0.001 },
        "copper": { elem1:["hydrogen","hydrogen","oxygen"], charged:true, chance:0.0075 },
        "silver": { elem1:["hydrogen","hydrogen","oxygen"], charged:true, chance:0.0075 },
        "gold": { elem1:["hydrogen","hydrogen","oxygen"], charged:true, chance:0.0075 },
},
elements.magnesiumoxide = {
    color:"#e3e3e3",
    behavior: behaviors.POWDER,
    state: "solid",
    category: "powders",
    density: 3580,
    tempHigh: 2852,
    stateHigh: "molten_magnesiumoxide",
},
elements.magnesium = {
    color: ["#D0D0D0","#A8A8A8","#ADADAD"],
    behavior: behaviors.POWDER,
    tempHigh: 63.5,
    category: "powders",
    state: "solid",
    density: 890,
    conduct: 0.05,
    hardness: 0.5,
    burn: 20,
    fireColor: "#f9ebff",
    fireElement: "flash",
    burnInto: "magnesiumoxide"
},
elements.methane = {
    color: "#e3e3e3",
    behavior: behaviors.GAS,
    tempHigh: 537,
    stateHigh: "fire",
    category: "betteroil",
    state: "gas",
    density: 0.657,
    burn: 90,
    burnTime: 5,
    fireColor: "0000FF",
    temp: 20,
    burnInto: ["fire", "fire", "fire", "carbon_dioxide", "smoke", "smoke", "smoke"],
    tempLow: -161,
    stateLow: "liquidmethane"
},
elements.liquidmethane = {
    color: "#e3e3e3",
    behavior: behaviors.LIQUID,
    tempHigh: -161,
    stateHigh: "methane",
    category: "betteroil",
    state: "liquid",
    density: 422,
    temp: -95,
    tempLow: -182,
    stateLow: "methaneice"
},
elements.methaneice = {
    color: "#e3e3e3",
    behavior: behaviors.SOLID,
    tempHigh: -182,
    stateHigh: "liquidmethane",
    category: "betteroil",
    state: "solid",
    density: 433,
    temp: -200,
},
elements.ethane = {
    color: "#e3e3e3",
    behavior: behaviors.GAS,
    tempHigh: 472,
    stateHigh: "fire",
    category: "betteroil",
    state: "gas",
    density: 1.3562,
    burn: 90,
    burnTime: 5,
    fireColor: "0000FF",
    temp: 20,
    burnInto: ["fire", "fire", "fire", "carbon_dioxide", "smoke", "smoke", "smoke"],
    tempLow: -89,
    stateLow: "liquidethane"
},
elements.liquidethane = {
    color: "#e3e3e3",
    behavior: behaviors.LIQUID,
    tempHigh: -89,
    stateHigh: "ethane",
    category: "betteroil",
    state: "liquid",
    density: 546,
    temp: -95,
    tempLow: -182,
    stateLow: "ethaneice"
},
elements.ethaneice = {
    color: "#e3e3e3",
    behavior: behaviors.SOLID,
    tempHigh: -182,
    stateHigh: "liquidethane",
    category: "betteroil",
    state: "solid",
    density: 550,
    temp: -200,
}
//https://www.youtube.com/watch?v=IhRAjrF3WcE
