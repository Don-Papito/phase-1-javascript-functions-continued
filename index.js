function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun());

  function mondayWork(workPlace = "go to the office"){
    return `This Monday, I will ${workPlace}.`;
  }
  
  mondayWork("work from home");

  function wrapAdjective(){
    //
  }

  function wrapAdjective(spice = "*"){
    return function(description = "special"){
        return `You are ${spice}${description}${spice}!`;
    };
  }

const encouragingPromptFunction = wrapAdjective("!!!");