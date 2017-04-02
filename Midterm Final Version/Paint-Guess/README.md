# Paint Game #

## Code Plan ##
### For the midterm project of the Dynamic Data class, I am going to a build a RealTime multiplayer game called Paint-Guess which is pretty popular multiplayer game recently. I am trying to make this game by Node.js and Socket.io framwork to enable the multiplayer function of this game. The mechanism of this game is to let one person draw something based on the word they are provided and other players are guessing the word. The more times other players guess the word correctly, the more point both the player and the drawer will get. ###

### The first version of this game after spring break is simply for multiple people to draw in the same canvas at the same time and they can chat in the message board about what they are drawing. ###

### Therefore, for the second version of this game, I added in functions like the button that decides who is the drawer, a timer in whcih the player has to finish their guessing in a certain amount of time as well as the leaderboard fucntion which stores the informagtion of who wins the game the most times. And the most important function I added in is the function that when user type in the answer which they think the drawer is drawing, the system will be able to decide if the player get the correct answer. ###

### The next step or to say the 2.0 version of this game is to fix a glitch since when players are trying to type in the answer, they have to type exactly the same as the reset of the system. For example, the system will say either "breakingbad" or "Breaking bad" is wrong but only "Breaking Bad" is  right. So for me, the next challenge of this game is to add in a mechanism that can tell if the answer is right or wrong by itself instead of having the answer to be exactly the same which seems unreasonable.  ###

[Demo]

