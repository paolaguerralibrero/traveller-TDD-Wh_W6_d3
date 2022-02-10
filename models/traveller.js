const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation
  })
  
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  byTransportJourney = this.journeys.filter((journey) => {
    return journey.transport === transport
  })
  return byTransportJourney
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  result = this.journeys.some((journey) =>{
    return journey.minDistance > minDistance
  })
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.length
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  

};


module.exports = Traveller;
