# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jasmine Horburapa**

Time spent: **3** hours spent in total

Link to project: [Project](https://glitch.com/edit/#!/jasper-polite-eyeliner)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

simple game play:
![](https://cdn.glitch.global/cc14a8f4-488b-4386-b9ca-da07c38281e7/ezgif.com-gif-maker-3.gif?v=1650486796637)
start and stop button functionality:
![](https://cdn.glitch.global/cc14a8f4-488b-4386-b9ca-da07c38281e7/ezgif.com-gif-maker-2.gif?v=1650486697846)
you win after repeating the pattern of 8:
![](https://cdn.glitch.global/cc14a8f4-488b-4386-b9ca-da07c38281e7/ezgif.com-gif-maker-4.gif?v=1650486927896)
three strikes until you're out:
![](https://cdn.glitch.global/cc14a8f4-488b-4386-b9ca-da07c38281e7/ezgif.com-gif-maker.gif?v=1650486590928)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

[Math.random() Help](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

[Image Button Help](https://www.delftstack.com/howto/html/html-button-with-image/)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

Whilst implementing the optional features, I had trouble figuring out how to embed an image within a button. I initially played around 
with the code, using the HTML img tag page provided as a reference, trying to see what worked and what didn't work. I eventually searched
up different ways to embed images and used the way best suited for the project. From there, I struggled to make the images only appear
when the buttons were pressed. I realized that I needed to focus on how to make something happen when the buttons were pressed.
After reading through the previous code I had written, I realized the solution was to call js functions in the html file 
for onmousedown and onmouseup, similarly to the the way startTone(int) and stopTone(int) were called. 
Now that I had one button working, I found images for the rest of them. Here is where another problem arose: while some buttons worked fine,
others, when pressed, would move undesirably for seemingly no reason. I tried to search on the internet for a reason, but I could not find
anything relevant to my issue. I realized that it was an issue with the sizing of the images I downloaded. The images that were square
caused no issues, but ones that weren't led to unwanted movement when embeded and pressed.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

In regards to the challenge I mentioned above, because I did not find a solid solution, I want to know more about image formatting 
and whether embedding images that are not the same size as the button without movement is possible. 
Do you need to crop the image beforehand or can you do so in css? 
Can you transform the image in css so that it aligns with the button instead?

Using glitch, the preview of the website is automatically created. I want to learn more about how to host a website
that is accessible by anyone at anytime and what upkeep is needed to keep a website running. I would also love to 
learn how to make a website that has multiple tabs.

With this project I learned there are so many things you can customize using a css file. I wonder whether the customizations
will stay the same no matter what web browser you use (chrome, safari, firefox, etc.) If you customize every little part of your website,
does that affect the speed in which it will load, or is that system-based? Can you import fonts? Can the color of images be adjusted in css,
and to what extent can they be?(if even possible, can you adjust pixels or just the whole image?)

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

I would make the final length of the pattern customizable instead of always 8. The website would ask and take in a user input and 
then create a pattern solution array based on the length given. The game would then play as normal, but would go up to the number of rounds
the user had inputted.

My implementation has 9 squares/buttons, but if I had more time I would want the number of squares to be customizable as well. 
There would be a minimum of 3 buttons. I am not sure if I would be able to implement an infinite number of buttons, but if not, then the
maximum would be 20. There would be buttons shaped like an up and down arrow when the game is stopped that users can press to adjust
the number of buttons they want to play with. These buttons disappear once the game starts to remove confusion.

I would also want to try making harder versions of the game that the user can choose between. For example, there could be a mode that 
has no color and only shows shapes OR one that only plays sounds and does not show the change in color. A very difficult-to-play
version of the game I could implement is one that after the game is played, requires the user to type in the entire order of shapes shown
previously in order to fully win.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1lC1z-B02R3G9Y9MMU6h3yvTh7Y7fnws3/view?usp=sharing)


## License

    Copyright Jasmine Horburapa

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
