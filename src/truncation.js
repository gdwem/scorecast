//Contains functions which will limit the values returned by the weather API

export const truncate = {

  tempValue(tempVal) {;
    if(tempVal > 25) {
      tempVal = 25;
    } else if (tempVal < 0) {
      tempVal = 0;
    } else {
      return tempVal;
    }
    return tempVal;
  },

  rainValue(rainVal) {
    if (rainVal > 25) {
      rainVal = 25;
    } else {
      return rainVal;
    }
    return rainVal;
  },

  windValue(windVal) {
    if(windVal > 40) {
      windVal = 40;
    } else {
      return windVal;
    }
    return windVal;
  }

}
