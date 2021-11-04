const express = require('express')
const router = express.Router()

// Route for private or communal area - v4
router.post("/alpha/v4/private-or-communal-answer", function(req, res) {
    if (req.session.data["private-communal"] === "communal") {
      res.redirect("/alpha/v4/communal-address");
    } else {
      res.redirect("/alpha/v4/postcode");
    }
  });

  // for version 2
  router.post("/alpha/v2/prior-repair-answer", function(req, res) {
    if (req.session.data["/alpha/v2/prior-repair"] === "Yes") {
      res.redirect("/alpha/v2/last-report");
    } else {
      res.redirect("/alpha/v2/repair-type");
    }
  });


// Route for following up prior repairs
router.post("/alpha/v1/prior-repair-answer", function(req, res) {
    if (req.session.data["/alpha/v1/prior-repair"] === "Yes") {
      res.redirect("/alpha/v1/last-report");
    } else {
      res.redirect("/alpha/v1/repair-location");
    }
  });

  // for version 2
  router.post("/alpha/v2/prior-repair-answer", function(req, res) {
    if (req.session.data["/alpha/v2/prior-repair"] === "Yes") {
      res.redirect("/alpha/v2/last-report");
    } else {
      res.redirect("/alpha/v2/repair-type");
    }
  });

  // for version 3
router.post("/alpha/v3/prior-repair-answer", function(req, res) {
    if (req.session.data["/alpha/v3/prior-repair"] === "Yes") {
      res.redirect("/alpha/v3/last-report");
    } else {
      res.redirect("/alpha/v3/repair-location");
    }
  });

  // for version 4
router.post("/alpha/v4/prior-repair-answer", function(req, res) {
    if (req.session.data["/alpha/v4/prior-repair"] === "Yes") {
      res.redirect("/alpha/v4/last-report");
    } else {
      res.redirect("/alpha/v4/repair-location");
    }
  });


  // Routes for emergency repairs
router.post("/alpha/v1/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/alpha/v1/prior-repair");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/alpha/v1/smell-gas");
    } else {
        res.redirect("/alpha/v1/emergency-repair");

    }
  });

  // for version 3
router.post("/alpha/v3/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/alpha/v3/prior-repair");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/alpha/v3/smell-gas");
    } else {
        res.redirect("/alpha/v3/emergency-repair");

    }
  });


  // for version 4
router.post("/alpha/v4/priority-repair-answer", function(req, res) {
    if (req.session.data["repair-emergency"] === "none-of-these") {
      res.redirect("/alpha/v4/prior-repair");
    } else if (req.session.data["repair-emergency"] === "gas")  {
      res.redirect("/alpha/v4/smell-gas");
    } else {
        res.redirect("/alpha/v4/emergency-repair");

    }
  });

//Routes for leaseholder
router.post("/alpha/v2/leaseholder-answer", function(req, res) {
  if (req.session.data["is-leaseholder"] === "yes") {
    res.redirect("/alpha/v2/repairs-leaseholder");
  } else  {
    res.redirect("/alpha/v2/postcode");
  }
});


// Routes for repair location
router.post("/alpha/v3/repair-location-answer", function(req, res) {
    if (req.session.data["/alpha/v3/repair-location"] === "Bathroom") {
      res.redirect("/alpha/v3/repair-type-bathroom");
    } else {
      res.redirect("/alpha/v3/repair-type");
    }
  });

//// Routes for repair descriptions drilldowns

 /// for version 1

    router.post("/alpha/v1/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/alpha/v1/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/alpha/v1/repair-description-leak");
    } else {
      res.redirect("/alpha/v1/repair-description");
    }
  });

  // V1: Damp or mould
    router.post("/alpha/v1/repair-description-damp-answer", function(req, res) {
    if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/alpha/v1/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/alpha/v1/repair-description-damp-mold");
    } else {
      res.redirect("/alpha/v1/repair-description")
    }
  });

  // V1: Drip or leak
    router.post("/alpha/v1/repair-description-leak-answer", function(req, res) {
    if (req.session.data["repair-leak"] === "dripping-from-wall") {
      res.redirect("/alpha/v1/repair-description-leak-electrics");
    } else if (req.session.data["repair-leak"] === "tap-broken"){
      res.redirect("/alpha/v1/emergency-repair");
    } else {
      res.redirect("/alpha/v1/repair-description")
    }
  });

    router.post("/alpha/v1/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/alpha/v1/emergency-repair");
    } else if (req.session.data["repair-leak-electrics"] ===  "not-containable"){
      res.redirect("/alpha/v1/emergency-repair");
    } else {
      res.redirect("/alpha/v1/repair-description-leak-inside")
    }
  });

    router.post("/repair-description-leak-source-answer", function(req, res) {
     if (req.session.data["repair-leak-source"] === "condensation") {
      res.redirect("/alpha/v1/repair-damp");
    } else {
      res.redirect("/alpha/v1/repair-description")
    }
  });

 /// for version 2

    router.post("/alpha/v2/repair-location-answer", function(req, res) {
     if (req.session.data["repair-location"] === "External repair") {
      res.redirect("/alpha/v2/repair-description");
    } else {
      res.redirect("/alpha/v2/repair-type");
      }
    });

 /// for version 3

    router.post("/alpha/v3/repair-description-answer", function(req, res) {
     if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/alpha/v3/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/alpha/v3/repair-description-leak");
    } else {
      res.redirect("/alpha/v3/repair-description");
    }
  });

  // V3: Damp or mould
    router.post("/alpha/v3/repair-description-damp-answer", function(req, res) {
     if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/alpha/v3/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/alpha/v3/repair-description-damp-mold");
    } else {
      res.redirect("/alpha/v3/repair-description")
    }
  });

  // V3: Drip or leak
   router.post("/alpha/v3/repair-description-leak-answer", function(req, res) {
    if (req.session.data["repair-leak"] === "dripping-from-wall") {
      res.redirect("/alpha/v3/repair-description-leak-electrics");
    } else if (req.session.data["repair-leak"] === "tap-broken"){
      res.redirect("/alpha/v3/emergency-repair");
    } else {
      res.redirect("/alpha/v3/repair-description")
    }
  });


  router.post("/alpha/v3/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/alpha/v3/repair-leak-description-electrics-emergency");
    } else if (req.session.data["repair-leak-electrics"] === "non-containable"){
      res.redirect("/alpha/v3/repair-leak-description-electrics-emergency");
    } else {
      res.redirect("/alpha/v3/repair-description-leak-inside")
    }
  });

  router.post("/alpha/v3/repair-description-leak-source-answer", function(req, res) {
    if (req.session.data["repair-leak-source"] === "pipe") {
      res.redirect("/alpha/v3/repair-description");
    } else {
      res.redirect("/alpha/v3/repair-description")
    }
  });

 /// for version 4

   router.post("/alpha/v4/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/alpha/v4/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/alpha/v4/repair-description-leak");
    } else if (req.session.data["repair-location-kitchen"] === "Cupboards") {
      res.redirect("/alpha/v4/repair-cupboard-type");
    } else if (req.session.data["repair-location-kitchen"] === "Electrical") {
      res.redirect("/alpha/v4/repair-description-electrical");
    } else if (req.session.data["repair-location-kitchen"] === "Heating") {
      res.redirect("/alpha/v4/repair-description-heating-water");
    } else {
      res.redirect("/alpha/v4/repair-description");
    }
  });

  // V4: Cupboard or worktop
   router.post("/alpha/v4/repair-description-cupboard-answer", function(req, res) {
    if (req.session.data["repair-description"] === "other-cupboard") {
      res.redirect("/alpha/v4/repair-description-cupboard");
    } else {
      res.redirect("/alpha/v4/repair-description")
    }
  });

  // V4: Electrical
   router.post("/alpha/v4/repair-description-electrical-answer", function(req, res) {
     if (req.session.data["repair-description"] === "carbon-monoxide") {
      res.redirect("/alpha/v4/repair-description-electrical-carbon-monoxide-alarm");
    } else if (req.session.data["repair-description"] === "smoke-detector") {
      res.redirect("/alpha/v4/repair-description-electrical-smoke-alarm");
    } else {
      res.redirect("/alpha/v4/repair-description")
    }
  });

  // V4: Heating or hot water
   router.post("/alpha/v4/repair-description-heating-water-answer", function(req, res) {
    if (req.session.data["repair-description"] === "no-heating-or-hot-water") {
      res.redirect("/alpha/v4/repair-description-heating-water-emergency");
    } else {
      res.redirect("/alpha/v4/repair-description")
    }
  });

// V4: Damp or mould
   router.post("/alpha/v4/repair-description-answer", function(req, res) {
    if (req.session.data["repair-location-kitchen"] === "Damp or mould") {
      res.redirect("/alpha/v4/repair-description-damp");
    } else if (req.session.data["repair-location-kitchen"] === "Drip") {
      res.redirect("/alpha/v4/repair-description-leak");
    } else if (req.session.data["repair-location-kitchen"] === "Cupboards") {
      res.redirect("/alpha/v4/repair-cupboard-type");
    } else {
      res.redirect("/alpha/v4/repair-description");
    }
  });


  router.post("/alpha/v4/repair-description-damp-answer", function(req, res) {
    if (req.session.data["repair-description"] === "Damp") {
      res.redirect("/alpha/v4/repair-damp");
    } else if (req.session.data["repair-description"] === "Mold"){
      res.redirect("/alpha/v4/repair-description-damp-mold");
    } else {
      res.redirect("/alpha/v4/repair-description")
    }
  });


  // V4: Drip or leak
   router.post("/alpha/v4/repair-description-leak-answer", function(req, res) {
    if (req.session.data["repair-leak"] === "dripping-from-wall") {
      res.redirect("/alpha/v4/repair-description-leak-electrics");
    } else if (req.session.data["repair-leak"] === "tap-broken"){
      res.redirect("/alpha/v4/emergency-repair");
    } else {
      res.redirect("/alpha/v4/repair-description")
    }
  });


  router.post("/alpha/v4/repair-description-leak-electrics-answer", function(req, res) {
    if (req.session.data["repair-leak-electrics"] === "dripping-on-electrics") {
      res.redirect("/alpha/v4/repair-leak-description-electrics-emergency");
    } else if (req.session.data["repair-leak-electrics"] === "non-containable"){
      res.redirect("/alpha/v4/repair-leak-description-electrics-emergency");
    } else {
      res.redirect("/alpha/v4/repair-description-leak-inside")
    }
  });

  router.post("/alpha/v4/repair-description-leak-source-answer", function(req, res) {
    if (req.session.data["repair-leak-source"] === "pipe") {
      res.redirect("/alpha/v4/repair-description");
    } else {
      res.redirect("/alpha/v4/repair-description")
    }
  });

//// Routes for communal repair description drilldowns

/// for version 4

    router.post("/alpha/v4/communal-repair-description-answer", function(req, res) {
    if (req.session.data["communal-repair-description"] === "lights") {
      res.redirect("/alpha/v4/communal-repair-description-lights");
    } else {
      res.redirect("/alpha/v4/communal-repair-description");
    }
  });

// BETA VERSION 1

router.post("/beta/v1/communal-or-private-property-answer", function(req, res) {
  if (req.session.data["communal"] === "yes") {
    res.redirect("/beta/v1/communal-repair-postcode");
  } else {
    res.redirect("/beta/v1/postcode")
  }
});

// BETA VERSION 2

router.post('/beta/v2/priority-list', function (req, res) {
    var repairEmergency = req.session.data['repair-emergency'];
    switch (repairEmergency) {
        case undefined:
            res.redirect('/beta/v2/emergency');
            break;
            case "gas":
            res.redirect('/beta/v2/smell-gas');
            break;
            case "heating":
            res.redirect('/beta/v2/emergency');
            break;
            case "water":
            res.redirect('/beta/v2/emergency');
            break;
            case "electricity":
            res.redirect('/beta/v2/emergency');
            break;
            case "leak":
            res.redirect('/beta/v2/emergency');
            break;
            case "security":
            res.redirect('/beta/v2/emergency');
            break;
            case "wiring":
            res.redirect('/beta/v2/emergency');
            break;
            case "carbon-monoxide":
            res.redirect('/beta/v2/emergency');
            break;
            case "something-else":
            res.redirect('/beta/v2/communal-or-private-property');
            break;
    };
});

router.post("/beta/v2/communal-or-private-property", function(req, res) {
  if (req.session.data["communal"] === "yes") {
    res.redirect("/beta/v2/not-eligible-communal-repairs");
  } else {
    res.redirect("/beta/v2/postcode")
  }
});

router.post("/beta/v2/resident-type", function(req, res) {
  if (req.session.data["resident"] === "yes") {
    res.redirect("/beta/v2/not-eligible");
  } else {
    res.redirect("/beta/v2/postcode")
  }
});

router.post('/beta/v2/repair-location', function (req, res) {
    var repairLocation = req.session.data['repair-location'];
    switch (repairLocation) {
        case undefined:
            res.redirect('/beta/v2/repair-kitchen');
            break;
            case "Kitchen":
            res.redirect('/beta/v2/repair-kitchen');
            break;
            case "Bathroom":
            res.redirect('/beta/v2/repair-bathroom');
            break;
            case "Bedroom":
            res.redirect('/beta/v2/repair-bedroom');
            break;
            case "Living areas":
            res.redirect('/beta/v2/repair-living-areas');
            break;
            case "Outside":
            res.redirect('/beta/v2/repair-outside');
            break;
    };
});

router.post('/beta/v2/repair-kitchen', function (req, res) {
    var repairKitchen = req.session.data['repair-area'];
    switch (repairKitchen) {
        case undefined:
            res.redirect('/beta/v2/repair-description');
            break;
            case "Cupboards":
            res.redirect('/beta/v2/repair-cupboards');
            break;
            case "Damaged worktop":
            res.redirect('/beta/v2/repair-description');
            break;
            case "Damp or mould":
            res.redirect('/beta/v2/repair-damp-or-mould');
            break;
            case "Electrical":
            res.redirect('/beta/v2/repair-electrical');
            break;
            case "Heating or hot water":
            res.redirect('/beta/v2/repair-heating');
            break;
            case "Sink":
            res.redirect('/beta/v2/repair-sink');
            break;
            case "Walls, floor or ceiling":
            res.redirect('/beta/v2/repair-walls');
            break;
            case "Window":
            res.redirect('/beta/v2/repair-window');
            break;
            case "Door":
            res.redirect('/beta/v2/repair-door');
            break;
    };
});

router.post('/beta/v2/repair-bathroom', function (req, res) {
    var repairBathroom = req.session.data['repair-area'];
    switch (repairBathroom) {
        case undefined:
            res.redirect('/beta/v2/repair-description');
            break;
            case "bath":
            res.redirect('/beta/v2/repair-bath');
            break;
            case "shower":
            res.redirect('/beta/v2/repair-shower');
            break;
            case "sink":
            res.redirect('/beta/v2/repair-sink');
            break;
            case "toilet":
            res.redirect('/beta/v2/repair-toilet');
            break;
            case "door":
            res.redirect('/beta/v2/repair-door-bathroom');
            break;
            case "lighting":
            res.redirect('/beta/v2/repair-bathroom-lighting');
            break;
            case "walls-floor-ceiling":
            res.redirect('/beta/v2/repair-bathroom-wall');
            break;
            case "window":
            res.redirect('/beta/v2/repair-bathroom-window');
            break;
            case "radiator":
            res.redirect('/beta/v2/repair-description');
            break;
    };
});

router.post("/beta/v2/repair-damp-or-mould", function(req, res) {
  if (req.session.data["repair-damp-or-mould"] === "yes") {
    res.redirect("/beta/v2/not-eligible");
  } else {
    res.redirect("/beta/v2/repair-description")
  }
});

router.post('/beta/v2/repair-window', function (req, res) {
    var repairWindow = req.session.data['repair-type-window'];
    switch (repairWindow) {
        case undefined:
            res.redirect('/beta/v2/repair-description');
            break;
            case "broken-glass":
            res.redirect('/beta/v2/not-eligible');
            break;
            case "downstairs-open":
            res.redirect('/beta/v2/not-eligible');
            break;
            case "upstairs-open":
            res.redirect('/beta/v2/repair-description');
            break;
            case "condensation":
            res.redirect('/beta/v2/repair-description');
            break;
    };
});

router.post('/beta/v2/repair-bedroom', function (req, res) {
    var repairBedroom = req.session.data['repair-area'];
    switch (repairBedroom) {
        case undefined:
            res.redirect('/beta/v2/repair-description');
            break;
            case "lighting-or-sockets":
            res.redirect('/beta/v2/repair-lighting-bedroom');
            break;
            case "walls":
            res.redirect('/beta/v2/repair-walls-bedroom');
            break;
            case "window":
            res.redirect('/beta/v2/repair-window');
            break;
            case "damp":
            res.redirect('/beta/v2/repair-description');
            break;
            case "radiator":
            res.redirect('/beta/v2/repair-description');
            break;
    };
});

router.post('/beta/v2/repair-living-areas', function (req, res) {
    var repairBedroom = req.session.data['repair-area'];
    switch (repairBedroom) {
        case undefined:
            res.redirect('/beta/v2/repair-description');
            break;
            case "door":
            res.redirect('/beta/v2/repair-description');
            break;
            case "electrical":
            res.redirect('/beta/v2/repair-living-areas-lighting');
            break;
            case "heating":
            res.redirect('/beta/v2/repair-living-areas-heating');
            break;
            case "walls":
            res.redirect('/beta/v2/repair-living-areas-walls');
            break;
            case "water":
            res.redirect('/beta/v2/repair-living-areas-water');
            break;
            case "window":
            res.redirect('/beta/v2/repair-living-areas-window');
            break;
            case "damp-or-mould":
            res.redirect('/beta/v2/repair-living-areas-damp');
            break;
            case "stairs":
            res.redirect('/beta/v2/repair-living-areas-stairs');
            break;
    };
});

router.post('/beta/v2/repair-living-areas-water', function (req, res) {
    var repairLivingAreasWater = req.session.data['living-areas-water'];
    switch (repairLivingAreasWater) {
        case undefined:
            res.redirect('/beta/v2/not-eligible');
            break;
            case "damp":
            res.redirect('/beta/v2/repair-description');
            break;
            case "leak":
            res.redirect('/beta/v2/not-eligible-non-emergency');
            break;
            case "condensation":
            res.redirect('/beta/v2/not-eligible-non-emergency');
            break;

    };
});

router.post('/beta/v2/repair-living-areas-window', function (req, res) {
    var repairLivingAreasWindow = req.session.data['living-areas-window'];
    switch (repairLivingAreasWindow) {
        case undefined:
            res.redirect('/beta/v2/not-eligible');
            break;
            case "smashed":
            res.redirect('/beta/v2/not-eligible');
            break;
            case "downstairs-open":
            res.redirect('/beta/v2/not-eligible');
            break;
            case "upstairs-open":
            res.redirect('/beta/v2/repair-description');
            break;
            case "stuck-shut":
            res.redirect('/beta/v2/repair-description');
            break;
            case "condensation":
            res.redirect('/beta/v2/not-eligible-non-emergency');
            break;

    };
});

router.post('/beta/v2/repair-living-areas-damp', function (req, res) {
    var repairLivingAreasDamp = req.session.data['living-areas-damp'];
    switch (repairLivingAreasDamp) {
        case undefined:
            res.redirect('/beta/v2/not-eligible');
            break;
            case "yes":
            res.redirect('/beta/v2/not-eligible');
            break;
            case "no":
            res.redirect('/beta/v2/repair-description');
            break;

    };
});

router.post('/beta/v2/repair-outside', function (req, res) {
    var repairOutside = req.session.data['repair-area'];
    switch (repairOutside) {
        case undefined:
            res.redirect('/beta/v2/not-eligible');
            break;
            case "doors":
            res.redirect('/beta/v2/outside-doors');
            break;
            case "electrical":
            res.redirect('/beta/v2/outside-electrical');
            break;
            case "garage":
            res.redirect('/beta/v2/outside-garage');
            break;
            case "gates-pathways":
            res.redirect('/beta/v2/outside-gates-pathways');
            break;
            case "gutters-drains":
            res.redirect('/beta/v2/outside-gutters-drains');
            break;
            case "locks-fittings":
            res.redirect('/beta/v2/repair-description');
            break;
            case "roof":
            res.redirect('/beta/v2/outside-roof');
            break;
            case "external-drainage":
            res.redirect('/beta/v2/not-eligible');
            break;
            case "external-tap":
            res.redirect('/beta/v2/not-eligible');
            break;
            case "fencing":
            res.redirect('/beta/v2/outside-fencing');
            break;
            case "washing-lines":
            res.redirect('/beta/v2/repair-description');
            break;
            case "graffiti":
            res.redirect('/beta/v2/repair-description');
            break;
            case "fly-tipping":
            res.redirect('/beta/v2/outside-fly-tipping');
            break;
            case "brickwork":
            res.redirect('/beta/v2/repair-description');
            break;
            case "manhole-covers":
            res.redirect('/beta/v2/not-eligible');
            break;
    };
});

router.post('/beta/v2/outside-garage', function (req, res) {
    var repairOutsideGarage = req.session.data['outside-garage'];
    switch (repairOutsideGarage) {
        case undefined:
            res.redirect('/beta/v2/repair-description');
            break;
            case "door":
            res.redirect('/beta/v2/repair-description');
            break;
            case "lock":
            res.redirect('/beta/v2/repair-description');
            break;
            case "broken-in":
            res.redirect('/beta/v2/not-eligible');
            break;
            case "roof":
            res.redirect('/beta/v2/repair-description');
            break;
    };
});

router.post('/beta/v2/outside-fly-tipping', function (req, res) {
    var repairOutsideFlyTipping = req.session.data['outside-fly-tipping'];
    switch (repairOutsideFlyTipping) {
        case undefined:
            res.redirect('/beta/v2/repair-description');
            break;
            case "yes":
            res.redirect('/beta/v2/not-eligible');
            break;
            case "no":
            res.redirect('/beta/v2/repair-description');
            break;
    };
});

// BETA VERSION 3 // BETA VERSION 3 // BETA VERSION 3 // BETA VERSION 3 // BETA VERSION 3 // BETA VERSION 3 // BETA VERSION 3 // BETA VERSION 3 // BETA VERSION 3 //

router.post('/beta/v3/priority-list', function (req, res) {
    var repairEmergency = req.session.data['repair-emergency'];
    switch (repairEmergency) {
        case undefined:
            res.redirect('/beta/v3/emergency');
            break;
            case "gas":
            res.redirect('/beta/v3/smell-gas');
            break;
            case "heating":
            res.redirect('/beta/v3/emergency');
            break;
            case "water":
            res.redirect('/beta/v3/emergency');
            break;
            case "electricity":
            res.redirect('/beta/v3/emergency');
            break;
            case "leak":
            res.redirect('/beta/v3/emergency');
            break;
            case "security":
            res.redirect('/beta/v3/emergency');
            break;
            case "wiring":
            res.redirect('/beta/v3/emergency');
            break;
            case "carbon-monoxide":
            res.redirect('/beta/v3/emergency');
            break;
            case "something-else":
            res.redirect('/beta/v3/communal-or-private-property');
            break;
    };
});

router.post("/beta/v3/communal-or-private-property", function(req, res) {
  if (req.session.data["communal"] === "yes") {
    res.redirect("/beta/v3/not-eligible-communal-repairs");
  } else {
    res.redirect("/beta/v3/postcode")
  }
});

router.post("/beta/v3/resident-type", function(req, res) {
  if (req.session.data["resident"] === "yes") {
    res.redirect("/beta/v3/not-eligible");
  } else {
    res.redirect("/beta/v3/postcode")
  }
});

router.post('/beta/v3/repair-location', function (req, res) {
    var repairLocation = req.session.data['repair-location'];
    switch (repairLocation) {
        case undefined:
            res.redirect('/beta/v3/repair-kitchen');
            break;
            case "Kitchen":
            res.redirect('/beta/v3/repair-kitchen');
            break;
            case "Bathroom":
            res.redirect('/beta/v3/repair-bathroom');
            break;
            case "Bedroom":
            res.redirect('/beta/v3/repair-bedroom');
            break;
            case "Living areas":
            res.redirect('/beta/v3/repair-living-areas');
            break;
            case "Outside":
            res.redirect('/beta/v3/repair-outside');
            break;
    };
});

router.post('/beta/v3/repair-kitchen', function (req, res) {
    var repairKitchen = req.session.data['repair-area'];
    switch (repairKitchen) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "Cupboards":
            res.redirect('/beta/v3/repair-cupboards');
            break;
            case "Damaged worktop":
            res.redirect('/beta/v3/repair-description');
            break;
            case "Damp or mould":
            res.redirect('/beta/v3/repair-damp-or-mould');
            break;
            case "Electrical":
            res.redirect('/beta/v3/repair-electrical');
            break;
            case "Heating or hot water":
            res.redirect('/beta/v3/repair-heating');
            break;
            case "Sink":
            res.redirect('/beta/v3/repair-sink');
            break;
            case "Walls, floor or ceiling":
            res.redirect('/beta/v3/repair-walls');
            break;
            case "Window":
            res.redirect('/beta/v3/repair-window');
            break;
            case "Door":
            res.redirect('/beta/v3/repair-door');
            break;
    };
});

router.post('/beta/v3/repair-bathroom', function (req, res) {
    var repairBathroom = req.session.data['repair-area'];
    switch (repairBathroom) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "bath":
            res.redirect('/beta/v3/repair-bath');
            break;
            case "shower":
            res.redirect('/beta/v3/repair-shower');
            break;
            case "sink":
            res.redirect('/beta/v3/repair-sink');
            break;
            case "toilet":
            res.redirect('/beta/v3/repair-toilet');
            break;
            case "damp-or-mould":
            res.redirect('/beta/v3/repair-damp-or-mould');
            break;
            case "door":
            res.redirect('/beta/v3/repair-door-bathroom');
            break;
            case "lighting":
            res.redirect('/beta/v3/repair-bathroom-lighting');
            break;
            case "walls-floor-ceiling":
            res.redirect('/beta/v3/repair-bathroom-wall');
            break;
            case "window":
            res.redirect('/beta/v3/repair-bathroom-window');
            break;
            case "something-else":
            res.redirect('/beta/v3/repair-description');
            break;
    };
});

router.post('/beta/v3/repair-bathroom-window', function (req, res) {
    var repairBathroomWindow = req.session.data['repair-type-bathroom-window'];
    switch (repairBathroomWindow) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "smashed":
            res.redirect('/beta/v3/emergency');
            break;
            case "open":
            res.redirect('/beta/v3/emergency');
            break;
            case "shut":
            res.redirect('/beta/v3/repair-description');
            break;
            case "condensation":
            res.redirect('/beta/v3/repair-description');
            break;
    };
});

router.post("/beta/v3/repair-damp-or-mould", function(req, res) {
  if (req.session.data["repair-damp-or-mould"] === "yes") {
    res.redirect("/beta/v3/not-eligible");
  } else {
    res.redirect("/beta/v3/repair-description")
  }
});

router.post('/beta/v3/repair-shower', function (req, res) {
    var repairShower = req.session.data['repair-type-shower'];
    switch (repairShower) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "electric":
            res.redirect('/beta/v3/repair-description');
            break;
            case "tap-shower":
            res.redirect('/beta/v3/repair-description');
            break;
            case "shower-hose":
            res.redirect('/beta/v3/repair-description');
            break;
            case "shower-head":
            res.redirect('/beta/v3/repair-description');
            break;
            case "tray-broken":
            res.redirect('/beta/v3/repair-description');
            break;
            case "door-broken":
            res.redirect('/beta/v3/repair-description');
            break;
            case "blockage":
            res.redirect('/beta/v3/emergency');
            break;
    };
});

router.post('/beta/v3/repair-window', function (req, res) {
    var repairWindow = req.session.data['repair-type-window'];
    switch (repairWindow) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "broken-glass":
            res.redirect('/beta/v3/emergency');
            break;
            case "window-open":
            res.redirect('/beta/v3/emergency');
            break;
            case "window-shut":
            res.redirect('/beta/v3/repair-description');
            break;
            case "condensation":
            res.redirect('/beta/v3/repair-description');
            break;
    };
});

router.post('/beta/v3/repair-bedroom', function (req, res) {
    var repairBedroom = req.session.data['repair-area-bedroom'];
    switch (repairBedroom) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "door":
            res.redirect('/beta/v3/repair-door-bedroom');
            break;
            case "lighting-or-sockets":
            res.redirect('/beta/v3/repair-lighting-bedroom');
            break;
            case "walls":
            res.redirect('/beta/v3/repair-walls');
            break;
            case "window":
            res.redirect('/beta/v3/repair-window');
            break;
            case "damp":
            res.redirect('/beta/v3/repair-damp-or-mould');
            break;
            case "radiator":
            res.redirect('/beta/v3/repair-description');
            break;
    };
});

router.post('/beta/v3/repair-living-areas', function (req, res) {
    var repairBedroom = req.session.data['repair-area'];
    switch (repairBedroom) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "door":
            res.redirect('/beta/v3/repair-door-living-areas');
            break;
            case "electrical":
            res.redirect('/beta/v3/repair-living-areas-lighting');
            break;
            case "walls":
            res.redirect('/beta/v3/repair-walls');
            break;
            case "window":
            res.redirect('/beta/v3/repair-window');
            break;
            case "damp-or-mould":
            res.redirect('/beta/v3/repair-damp-or-mould');
            break;
            case "stairs":
            res.redirect('/beta/v3/repair-living-areas-stairs');
            break;
    };
});

router.post('/beta/v3/repair-living-areas-window', function (req, res) {
    var repairLivingAreasWindow = req.session.data['living-areas-window'];
    switch (repairLivingAreasWindow) {
        case undefined:
            res.redirect('/beta/v3/not-eligible');
            break;
            case "smashed":
            res.redirect('/beta/v3/not-eligible');
            break;
            case "downstairs-open":
            res.redirect('/beta/v3/not-eligible');
            break;
            case "upstairs-open":
            res.redirect('/beta/v3/repair-description');
            break;
            case "stuck-shut":
            res.redirect('/beta/v3/repair-description');
            break;
            case "condensation":
            res.redirect('/beta/v3/not-eligible-non-emergency');
            break;

    };
});

router.post('/beta/v3/repair-living-areas-damp', function (req, res) {
    var repairLivingAreasDamp = req.session.data['living-areas-damp'];
    switch (repairLivingAreasDamp) {
        case undefined:
            res.redirect('/beta/v3/not-eligible');
            break;
            case "yes":
            res.redirect('/beta/v3/not-eligible');
            break;
            case "no":
            res.redirect('/beta/v3/repair-description');
            break;

    };
});

router.post('/beta/v3/repair-outside', function (req, res) {
    var repairOutside = req.session.data['repair-area'];
    switch (repairOutside) {
        case undefined:
            res.redirect('/beta/v3/not-eligible');
            break;
            case "doors":
            res.redirect('/beta/v3/outside-doors');
            break;
            case "outdoor-security-lights":
            res.redirect('/beta/v3/repair-description');
            break;
            case "garage":
            res.redirect('/beta/v3/outside-garage');
            break;
            case "gates-pathways":
            res.redirect('/beta/v3/outside-gates-pathways');
            break;
            case "roof":
            res.redirect('/beta/v3/outside-roof');
            break;
    };
});

router.post('/beta/v3/outside-garage', function (req, res) {
    var repairOutsideGarage = req.session.data['outside-garage'];
    switch (repairOutsideGarage) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "door":
            res.redirect('/beta/v3/repair-description');
            break;
            case "lock":
            res.redirect('/beta/v3/repair-description');
            break;
            case "broken-in":
            res.redirect('/beta/v3/not-eligible');
            break;
            case "roof":
            res.redirect('/beta/v3/repair-description');
            break;
    };
});

router.post('/beta/v3/outside-water', function (req, res) {
    var repairOutsideWater = req.session.data['outside-water'];
    switch (repairOutsideWater) {
        case undefined:
            res.redirect('/beta/v3/not-eligible-non-emergency');
            break;
            case "drainage":
            res.redirect('/beta/v3/not-eligible-non-emergency');
            break;
            case "tap":
            res.redirect('/beta/v3/not-eligible-non-emergency');
            break;
    };
});
router.post('/beta/v3/outside-graffiti', function (req, res) {
    var repairOutsideGraffiti = req.session.data['outside-graffiti'];
    switch (repairOutsideGraffiti) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "yes":
            res.redirect('/beta/v3/not-eligible-non-emergency');
            break;
            case "no":
            res.redirect('/beta/v3/repair-description');
            break;
    };
});

router.post('/beta/v3/outside-fly-tipping', function (req, res) {
    var repairOutsideFlyTipping = req.session.data['outside-fly-tipping'];
    switch (repairOutsideFlyTipping) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "yes":
            res.redirect('/beta/v3/not-eligible');
            break;
            case "no":
            res.redirect('/beta/v3/repair-description');
            break;
    };
});


router.post('/beta/v3/repair-toilet', function (req, res) {
    var repairToilet = req.session.data['repair-type-toilet'];
    switch (repairToilet) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "not-flushing":
            res.redirect('/beta/v3/repair-description');
            break;
            case "overflowing":
            res.redirect('/beta/v3/repair-description');
            break;
            case "coming-loose":
            res.redirect('/beta/v3/repair-description');
            break;
            case "cracked":
            res.redirect('/beta/v3/repair-description');
            break;
            case "seat":
            res.redirect('/beta/v3/not-eligible-non-emergency');
            break;
    };
});

router.post('/beta/v3/repair-door-bathroom', function (req, res) {
    var repairDoorBathroom = req.session.data['repair-type-door-bathroom'];
    switch (repairDoorBathroom) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "sticking":
            res.redirect('/beta/v3/repair-description');
            break;
            case "lock":
            res.redirect('/beta/v3/repair-description');
            break;
            case "adjust":
            res.redirect('/beta/v3/not-eligible-non-emergency');
            break;
    };
});

router.post('/beta/v3/repair-door-bedroom', function (req, res) {
    var repairDoorBedroom = req.session.data['repair-type-door-bedroom'];
    switch (repairDoorBedroom) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "sticking":
            res.redirect('/beta/v3/repair-description');
            break;
            case "lock":
            res.redirect('/beta/v3/repair-description');
            break;
            case "adjust":
            res.redirect('/beta/v3/not-eligible-non-emergency');
            break;
    };
});

router.post('/beta/v3/repair-door-living-areas', function (req, res) {
    var repairDoorLivingAreas = req.session.data['repair-type-door-living-areas'];
    switch (repairDoorLivingAreas) {
        case undefined:
            res.redirect('/beta/v3/repair-description');
            break;
            case "sticking":
            res.redirect('/beta/v3/repair-description');
            break;
            case "lock":
            res.redirect('/beta/v3/repair-description');
            break;
            case "adjust":
            res.redirect('/beta/v3/not-eligible-non-emergency');
            break;
    };
});

router.post('/beta/v3/repair-description', function (req, res) {
  var repairDescription = ['repair-description']

  for (let key in req.body) {
    //this tests for basic "has the user entered data here"
    if (req.body[key] === '' || req.body[key] === undefined) {
      repairDescription.push(req.body[key])
    }
  }

  if(repairDescription.length != 0) {
    res.render('/beta/v3/repair-description-error', {errors: repairDescription})
  }
  else {
    res.redirect('/beta/v3/contact-person')
  }

});


// BETA VERSION 4 // BETA VERSION 4 // BETA VERSION 4 // BETA VERSION 4 // BETA VERSION 4 // BETA VERSION 4 // BETA VERSION 4 // BETA VERSION 4 // BETA VERSION 4 //

router.post('/beta/v4/priority-list', function (req, res) {
    var repairEmergency = req.session.data['repair-emergency'];
    switch (repairEmergency) {
        case undefined:
            res.redirect('/beta/v4/emergency');
            break;
            case "gas":
            res.redirect('/beta/v4/smell-gas');
            break;
            case "heating":
            res.redirect('/beta/v4/emergency');
            break;
            case "water":
            res.redirect('/beta/v4/emergency');
            break;
            case "electricity":
            res.redirect('/beta/v4/emergency');
            break;
            case "leak":
            res.redirect('/beta/v4/emergency');
            break;
            case "security":
            res.redirect('/beta/v4/emergency');
            break;
            case "wiring":
            res.redirect('/beta/v4/emergency');
            break;
            case "carbon-monoxide":
            res.redirect('/beta/v4/emergency');
            break;
            case "something-else":
            res.redirect('/beta/v4/communal-or-private-property');
            break;
    };
});

router.post("/beta/v4/communal-or-private-property", function(req, res) {
  if (req.session.data["communal"] === "yes") {
    res.redirect("/beta/v4/not-eligible-communal-repairs");
  } else {
    res.redirect("/beta/v4/postcode")
  }
});

router.post('/beta/v4/repair-location', function (req, res) {
    var repairLocation = req.session.data['repair-location'];
    switch (repairLocation) {
        case undefined:
            res.redirect('/beta/v4/repair-kitchen');
            break;
            case "Kitchen":
            res.redirect('/beta/v4/repair-kitchen');
            break;
            case "Bathroom":
            res.redirect('/beta/v4/repair-bathroom');
            break;
            case "Bedroom":
            res.redirect('/beta/v4/repair-bedroom');
            break;
            case "Living areas":
            res.redirect('/beta/v4/repair-living-areas');
            break;
            case "Outside":
            res.redirect('/beta/v4/repair-outside');
            break;
    };
});

router.post('/beta/v4/repair-kitchen', function (req, res) {
    var repairKitchen = req.session.data['repair-area'];
    switch (repairKitchen) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "Cupboards":
            res.redirect('/beta/v4/repair-cupboards');
            break;
            case "Damaged worktop":
            res.redirect('/beta/v4/repair-description');
            break;
            case "Damp or mould":
            res.redirect('/beta/v4/repair-damp-or-mould');
            break;
            case "Electrical":
            res.redirect('/beta/v4/repair-electrical');
            break;
            case "Heating or hot water":
            res.redirect('/beta/v4/repair-heating');
            break;
            case "Sink":
            res.redirect('/beta/v4/repair-sink');
            break;
            case "Walls, floor or ceiling":
            res.redirect('/beta/v4/repair-walls');
            break;
            case "Window":
            res.redirect('/beta/v4/repair-window');
            break;
            case "Door":
            res.redirect('/beta/v4/repair-door');
            break;
    };
});

router.post('/beta/v4/repair-bathroom', function (req, res) {
    var repairBathroom = req.session.data['repair-area'];
    switch (repairBathroom) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "bath":
            res.redirect('/beta/v4/repair-bath');
            break;
            case "shower":
            res.redirect('/beta/v4/repair-shower');
            break;
            case "sink":
            res.redirect('/beta/v4/repair-sink');
            break;
            case "toilet":
            res.redirect('/beta/v4/repair-toilet');
            break;
            case "damp-or-mould":
            res.redirect('/beta/v4/repair-damp-or-mould');
            break;
            case "door":
            res.redirect('/beta/v4/repair-door-bathroom');
            break;
            case "lighting":
            res.redirect('/beta/v4/repair-bathroom-lighting');
            break;
            case "walls-floor-ceiling":
            res.redirect('/beta/v4/repair-bathroom-wall');
            break;
            case "window":
            res.redirect('/beta/v4/repair-bathroom-window');
            break;
            case "something-else":
            res.redirect('/beta/v4/repair-description');
            break;
    };
});

router.post('/beta/v4/repair-bathroom-window', function (req, res) {
    var repairBathroomWindow = req.session.data['repair-type-bathroom-window'];
    switch (repairBathroomWindow) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "smashed":
            res.redirect('/beta/v4/emergency');
            break;
            case "open":
            res.redirect('/beta/v4/emergency');
            break;
            case "shut":
            res.redirect('/beta/v4/repair-description');
            break;
            case "condensation":
            res.redirect('/beta/v4/repair-description');
            break;
    };
});

router.post("/beta/v4/repair-damp-or-mould", function(req, res) {
  if (req.session.data["repair-damp-or-mould"] === "yes") {
    res.redirect("/beta/v4/not-eligible");
  } else {
    res.redirect("/beta/v4/repair-description")
  }
});

router.post('/beta/v4/repair-shower', function (req, res) {
    var repairShower = req.session.data['repair-type-shower'];
    switch (repairShower) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "electric":
            res.redirect('/beta/v4/repair-description');
            break;
            case "tap-shower":
            res.redirect('/beta/v4/repair-description');
            break;
            case "shower-hose":
            res.redirect('/beta/v4/repair-description');
            break;
            case "shower-head":
            res.redirect('/beta/v4/repair-description');
            break;
            case "tray-broken":
            res.redirect('/beta/v4/repair-description');
            break;
            case "door-broken":
            res.redirect('/beta/v4/repair-description');
            break;
            case "blockage":
            res.redirect('/beta/v4/emergency');
            break;
    };
});

router.post('/beta/v4/repair-window', function (req, res) {
    var repairWindow = req.session.data['repair-type-window'];
    switch (repairWindow) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "broken-glass":
            res.redirect('/beta/v4/emergency');
            break;
            case "window-open":
            res.redirect('/beta/v4/emergency');
            break;
            case "window-shut":
            res.redirect('/beta/v4/repair-description');
            break;
            case "condensation":
            res.redirect('/beta/v4/repair-description');
            break;
    };
});

router.post('/beta/v4/repair-bedroom', function (req, res) {
    var repairBedroom = req.session.data['repair-area-bedroom'];
    switch (repairBedroom) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "door":
            res.redirect('/beta/v4/repair-door-bedroom');
            break;
            case "lighting-or-sockets":
            res.redirect('/beta/v4/repair-lighting-bedroom');
            break;
            case "walls":
            res.redirect('/beta/v4/repair-walls');
            break;
            case "window":
            res.redirect('/beta/v4/repair-window');
            break;
            case "damp":
            res.redirect('/beta/v4/repair-damp-or-mould');
            break;
            case "radiator":
            res.redirect('/beta/v4/repair-description');
            break;
    };
});

router.post('/beta/v4/repair-living-areas', function (req, res) {
    var repairBedroom = req.session.data['repair-area'];
    switch (repairBedroom) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "door":
            res.redirect('/beta/v4/repair-door-living-areas');
            break;
            case "electrical":
            res.redirect('/beta/v4/repair-living-areas-lighting');
            break;
            case "walls":
            res.redirect('/beta/v4/repair-walls');
            break;
            case "window":
            res.redirect('/beta/v4/repair-window');
            break;
            case "damp-or-mould":
            res.redirect('/beta/v4/repair-damp-or-mould');
            break;
            case "stairs":
            res.redirect('/beta/v4/repair-living-areas-stairs');
            break;
    };
});

router.post('/beta/v4/repair-living-areas-window', function (req, res) {
    var repairLivingAreasWindow = req.session.data['living-areas-window'];
    switch (repairLivingAreasWindow) {
        case undefined:
            res.redirect('/beta/v4/not-eligible');
            break;
            case "smashed":
            res.redirect('/beta/v4/not-eligible');
            break;
            case "downstairs-open":
            res.redirect('/beta/v4/not-eligible');
            break;
            case "upstairs-open":
            res.redirect('/beta/v4/repair-description');
            break;
            case "stuck-shut":
            res.redirect('/beta/v4/repair-description');
            break;
            case "condensation":
            res.redirect('/beta/v4/not-eligible-non-emergency');
            break;

    };
});

router.post('/beta/v4/repair-living-areas-damp', function (req, res) {
    var repairLivingAreasDamp = req.session.data['living-areas-damp'];
    switch (repairLivingAreasDamp) {
        case undefined:
            res.redirect('/beta/v4/not-eligible');
            break;
            case "yes":
            res.redirect('/beta/v4/not-eligible');
            break;
            case "no":
            res.redirect('/beta/v4/repair-description');
            break;

    };
});

router.post('/beta/v4/repair-outside', function (req, res) {
    var repairOutside = req.session.data['repair-area'];
    switch (repairOutside) {
        case undefined:
            res.redirect('/beta/v4/not-eligible');
            break;
            case "doors":
            res.redirect('/beta/v4/outside-doors');
            break;
            case "outdoor-security-lights":
            res.redirect('/beta/v4/repair-description');
            break;
            case "garage":
            res.redirect('/beta/v4/outside-garage');
            break;
            case "gates-pathways":
            res.redirect('/beta/v4/outside-gates-pathways');
            break;
            case "gutters-drains":
            res.redirect('/beta/v4/outside-gutters-drains');
            break;
            case "locks-fittings":
            res.redirect('/beta/v4/repair-description');
            break;
            case "roof":
            res.redirect('/beta/v4/outside-roof');
            break;
            case "water":
            res.redirect('/beta/v4/outside-water');
            break;
            case "fencing":
            res.redirect('/beta/v4/outside-fencing');
            break;
            case "washing-lines":
            res.redirect('/beta/v4/repair-description');
            break;
            case "graffiti":
            res.redirect('/beta/v4/outside-graffiti');
            break;
            case "fly-tipping":
            res.redirect('/beta/v4/outside-fly-tipping');
            break;
            case "brickwork":
            res.redirect('/beta/v4/repair-description');
            break;
            case "manhole-covers":
            res.redirect('/beta/v4/not-eligible');
            break;
    };
});

router.post('/beta/v4/outside-garage', function (req, res) {
    var repairOutsideGarage = req.session.data['outside-garage'];
    switch (repairOutsideGarage) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "door":
            res.redirect('/beta/v4/repair-description');
            break;
            case "lock":
            res.redirect('/beta/v4/repair-description');
            break;
            case "broken-in":
            res.redirect('/beta/v4/not-eligible');
            break;
            case "roof":
            res.redirect('/beta/v4/repair-description');
            break;
    };
});

router.post('/beta/v4/outside-water', function (req, res) {
    var repairOutsideWater = req.session.data['outside-water'];
    switch (repairOutsideWater) {
        case undefined:
            res.redirect('/beta/v4/not-eligible-non-emergency');
            break;
            case "drainage":
            res.redirect('/beta/v4/not-eligible-non-emergency');
            break;
            case "tap":
            res.redirect('/beta/v4/not-eligible-non-emergency');
            break;
    };
});
router.post('/beta/v4/outside-graffiti', function (req, res) {
    var repairOutsideGraffiti = req.session.data['outside-graffiti'];
    switch (repairOutsideGraffiti) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "yes":
            res.redirect('/beta/v4/not-eligible-non-emergency');
            break;
            case "no":
            res.redirect('/beta/v4/repair-description');
            break;
    };
});

router.post('/beta/v4/outside-fly-tipping', function (req, res) {
    var repairOutsideFlyTipping = req.session.data['outside-fly-tipping'];
    switch (repairOutsideFlyTipping) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "yes":
            res.redirect('/beta/v4/not-eligible');
            break;
            case "no":
            res.redirect('/beta/v4/repair-description');
            break;
    };
});


router.post('/beta/v4/repair-toilet', function (req, res) {
    var repairToilet = req.session.data['repair-type-toilet'];
    switch (repairToilet) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "not-flushing":
            res.redirect('/beta/v4/repair-description');
            break;
            case "overflowing":
            res.redirect('/beta/v4/repair-description');
            break;
            case "coming-loose":
            res.redirect('/beta/v4/repair-description');
            break;
            case "cracked":
            res.redirect('/beta/v4/repair-description');
            break;
            case "seat":
            res.redirect('/beta/v4/not-eligible-non-emergency');
            break;
    };
});

router.post('/beta/v4/repair-door-bathroom', function (req, res) {
    var repairDoorBathroom = req.session.data['repair-type-door-bathroom'];
    switch (repairDoorBathroom) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "sticking":
            res.redirect('/beta/v4/repair-description');
            break;
            case "lock":
            res.redirect('/beta/v4/repair-description');
            break;
            case "adjust":
            res.redirect('/beta/v4/not-eligible-non-emergency');
            break;
    };
});

router.post('/beta/v4/repair-door-bedroom', function (req, res) {
    var repairDoorBedroom = req.session.data['repair-type-door-bedroom'];
    switch (repairDoorBedroom) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "sticking":
            res.redirect('/beta/v4/repair-description');
            break;
            case "lock":
            res.redirect('/beta/v4/repair-description');
            break;
            case "adjust":
            res.redirect('/beta/v4/not-eligible-non-emergency');
            break;
    };
});

router.post('/beta/v4/repair-door-living-areas', function (req, res) {
    var repairDoorLivingAreas = req.session.data['repair-type-door-living-areas'];
    switch (repairDoorLivingAreas) {
        case undefined:
            res.redirect('/beta/v4/repair-description');
            break;
            case "sticking":
            res.redirect('/beta/v4/repair-description');
            break;
            case "lock":
            res.redirect('/beta/v4/repair-description');
            break;
            case "adjust":
            res.redirect('/beta/v4/not-eligible-non-emergency');
            break;
    };
});

module.exports = router
