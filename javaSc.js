function checkCounties(userCounty){
  const counties = [
    "SINOE COUNTY",
    "MARYLAND COUNTY",
    "GRAND KRU COUNTY",
    "RIVER GEE COUNTY",
    "NIMBA COUNTY"
  ];

  if(counties.includes(userCounty)){
    return (userCounty + " is part of the list");
  }
 else
 {
  return (userCounty + " does not exist yet ");
 }
}

console.log(checkCounties("NIMBA COUNT"))