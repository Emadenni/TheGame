let kickOffBtn = document.querySelector(".kickOff");

function checkScoreAtMinute(minute) {
  let score = ""; // Variabile per memorizzare lo stato del risultato

  // Logica per determinare il risultato fino al minuto specificato
  if (minute <= 5) {
    score = "France 0 - Italy 0";
  } else if (minute <= 19) {
    score = "France 1 - Italy 0";
  } else {
    score = "France 1 - Italy 1";
  }

  return score;
}

kickOffBtn.addEventListener("click", function () {
  let confirmed = window.confirm(
    "Are you ready to experience a swing of emotions?"
  );

  if (confirmed) {
    let intro = prompt(
      "It is July 9, 2006, a hot summer day in Berlin. The FIFA World Cup Final has begun. Italy and France compete to decide who will be on top of the world. Do you want to support Italy or France?"
    ).toLowerCase();

    switch (intro) {
      case "italy":
        let chosenItaly = "";
        while (chosenItaly !== "yes" && chosenItaly !== "no") {
          chosenItaly = prompt(
            "We arrived in the 10th minute of the game. France took the lead with a penalty from Zidane. You are Marco Materazzi and there is a corner kick. Coach Lippi tells you to go into the area and jump: do you listen to him?"
          ).toLowerCase();
        }

        if (chosenItaly === "yes") {
          let goalItaly = "";
          while (goalItaly !== "yes" && goalItaly !== "no") {
            goalItaly = prompt(
              "GOOOOAL!!! Materazzi hits his head and sends the ball into the goal, evening the score. At this point, you feel pain in your leg. Lippi asks if you want a substitution. What do you answer? (yes or no?)"
            ).toLowerCase();
          }

          if (goalItaly === "no") {
            let wrangle = "";
            while (wrangle !== "stay grounded" && wrangle !== "fight back") {
              wrangle = prompt(
                "Stay in the field. At the 51st, Zidane passes you by and you say something offensive to him. He gets angry and gives you a head. Do you 'stay grounded' or do you 'fight back'?"
              ).toLowerCase();
            }

            switch (wrangle) {
              case "stay grounded":
                let redCard = prompt(
                  "RED CARD!!! Zidane is sent off, and the match goes to penalties. The coach trusts you and asks you to suggest who between Gattuso and Grosso should be the last penalty taker. Who do you suggest? (Gattuso or Grosso?)"
                ).toLowerCase();

                while (redCard !== "gattuso" && redCard !== "grosso") {
                  redCard = prompt(
                    "RED CARD!!! Zidane is sent off, and the match goes to penalties. The coach trusts you and asks you to suggest who between Gattuso and Grosso should be the last penalty taker. Who do you suggest? (Gattuso or Grosso?)"
                  ).toLowerCase();
                  break;
                  if (redCard !== "gattuso" && redCard !== "grosso") {
                    alert("Please choose between Gattuso and Grosso.");
                  }
                }

                if (redCard === "gattuso") {
                  alert(
                    "You suggest Gattuso as the last penalty taker. Unfortunately the choice is not good. Gattuso shoots the decisive penalty high and France becomes world champion! "
                  );
                } else {
                  const minuteOfInterest = prompt(
                    "Fabio Grosso takes a perfect penalty in front of Barthez and scores the winning goal. Italy becomes world champion for the fourth time. The sky is blue above Berlin.Type the minute you are interested in and you will find out what the result was at that moment."
                  );
                  const result = checkScoreAtMinute(parseInt(minuteOfInterest));
                  alert(
                    `The result at minute ${minuteOfInterest} was: ${result}`
                  );
                  /*alert(
                    "Fabio Grosso takes a perfect penalty in front of Barthez and scores the winning goal. Italy becomes world champion for the fourth time. The sky is blue above Berlin."
                  ); */
                }
                break;

              case "fight back":
                alert(
                  "Dear Materazzi, your reaction is too strong. Both you and Zidane get a red card. After 5 minutes, Trezeguet scores the winning goal for the 'blues': France champions!"
                );
                break;
              default:
                alert(
                  "You thought too much! The referee ignores the situation and pardons Zidane who scores the goal to make it 2-1. France champions!"
                );
                break;
            }
          } else {
            alert(
              "Barone goes in and your game ends here, and it will be a defeat for Italy. The final score will be 5-1 for France."
            );
          }
        } else {
          alert(
            "The coach gets furious for ignoring him and removes Materazzi in the 20th minute. Your game ends here, and it will be a defeat for Italy. The final score will be 5-0 for France."
          );
        }
        break;

      case "france":
        let chosenFrance = "";

        while (chosenFrance !== "softly" && chosenFrance !== "powerfully") {
          chosenFrance = prompt(
            "You are Zinedine Zidane, and in the sixth minute, you have the opportunity to unlock the game with a penalty. Do you kick the ball 'softly' or 'powerfully'?"
          ).toLowerCase();

          if (chosenFrance === "softly") {
            let goalFrance = confirm(
              "Goal from Zidane!!! The ball touches the crossbar and crosses the line. France 1 Italy 0. But the match is only at the beginning and there will be so many emotions. We just have to continue the adventure."
            );

            if (goalFrance) {
              let fight = "";

              while (fight !== "attack" && fight !== "ignore") {
                fight = prompt(
                  "Italy drew. Materazzi's signature who approaches you (Zidane) in the 50th minute and says not very nice words to you. Do you 'attack' him or 'ignore' him?"
                ).toLowerCase();
              }

              switch (fight) {
                case "attack":
                  const minuteOfInterest = prompt(
                    "You decided to attack Materazzi. The referee gives you a red card, and the match ends in a draw. Italy will win the world cup on penalties. Type the minute you are interested in and you will find out what the result was at that moment."
                  );
                  const result = checkScoreAtMinute(parseInt(minuteOfInterest));
                  alert(
                    `The result at minute ${minuteOfInterest} was: ${result}`
                  );
                  break;

                case "ignore":
                  alert(
                    "You decided to ignore Materazzi's provocation. The match continues. Let's see what is gonna happen!"
                  );
                  if (fight === "ignore") {
                    alert(
                      "Zidane is in a state of grace! After ignoring Materazzi's provocation, he gives Trezeguet an assist and scores from a free kick. France win 3-1 and are world champions!"
                    );
                  }
                  break;
                default:
                  alert("Invalid choice. The match continues.");
                  break;
              }
            }
          } else if (chosenFrance === "powerfully") {
            alert(
              "Zidane kicks the ball hard but not precisely, which ends up one meter wide. The game remained glued to 0-0 until in the 90th minute Del Piero scored a fantastic goal. Italy Champion!"
            );
          }
        }
        break;

      default:
        alert("Go to the pub");
    }
  }
});
