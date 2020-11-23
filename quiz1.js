
var choice = [];
var bestChoice = "";
var userChoice = []
 
function getWhatIsChecked()
{
    //declaring them as global variables set to 0 so they will increase on click (when selected)
        var guitar = 0;
        var lofi = 0;
        var nine = 0;
        var film = 0;
        // loop through each question on the quiz
        for (var z = 0; z < 8; z++)
        {
            var topChoice = "choice" + z;
            var choiceAnswer = document.getElementsByName(topChoice);
              console.log(choiceAnswer);
            // grab the answer value for each quiz question and save
 
            for (var q = 0; q < choiceAnswer.length; q++)
            {
                
                if (choiceAnswer[q].checked)
                {
                    userChoice [z] = choiceAnswer[q].value;
                     console.log(userChoice);
                   
    
                     // Getting sum of numbers
                    
                     var total = userChoice.reduce(function(a, b){
                        return a + b;
                     });
                     
                     console.log(total); 
                }
                    
                
            }
                
 
        }
            
                    // add up the totals for each vibe from the answers
                    // if any selection is > 2 at any point, the best option is discovered
                    for (var z = 0; z < 7; z++)
                    {
                        switch(userChoice[z])
                        {
                            case "guitar":
                            guitar += 1;
                            if (guitar >= 3)
                            {
                                bestChoice = "guitar";
                                window.location.href="finalindex.html";
                            }
                            //return "guitar";
                            break;
                           
                            case "lofi":
                            lofi += 1;
                            if (lofi >= 3)
                            {
                                bestChoice = "lofi";
                                window.location.href="lofi.html";
                            }
                            //return "lofi";
                            break;
                           
                            case "nine":
                            nine += 1;
                            if (nine >= 3)
                            {
                                bestChoice = "nineties";
                                window.location.href="cheesyimages.html";
                            }
                            //return "nine";
                            break;
                           
                            case "film":
                            film += 1;
                            if (film >= 3)
                            {
                                bestChoice = "film";
                                window.location.href="project4.html";
                            }
                            //return "film";
                            break;
 
                    
                        }
                    }
                    // if none of the totals is > 2, a default option is chosen
                    //check the if expression, you are not checking bestChoice but all of the other vars elf, mer, hum, fae, uni
                    if(guitar < 3 && lofi < 3 && nine < 3 && film < 3)
                    {
                        bestChoice = "guitar";
                        window.location.href="finalindex.html";
                    }
                   window.alert(bestChoice);
                   
                  
 
 
}
 
