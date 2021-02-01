I have managed to finish the task, displayed a video player, click anywhere to play and pause and for each frame the ball and players are marked with rectangles. You can see the screen recording attached with the email.

The current problem is after pause and replay, the overlay bounding boxes paused but if play again not sync with the video. The bounding boxes start to move from beginning again. (spend lots of time on this, but still can't solve it)

Another problem is there are different number of players in different frames. I haven't figure out how to solve this problem. I have to only choose the first 22 data of each frame.

I resized the pixels in the data in order to see the effect in my 13 inch laptop screen. And manually adjusted pixels position for the starting frame in CSS file(it just gives a nicer look, wasted a lot of time on it). I assume that the data offered is for bigger screen. The data of the ball have some problems, some with null and the frames in the end seems not correct, they are far from the place the ball should be.

I tried to use canvas, p5.js to draw the rectangles at first, but change to CSS again after I find a way to only draw four corners of rectangle

I also tried to use some libraries such as video.js(to add different playback speed, but this need to configure different bounding boxes speed, didn't get enough time to test), and bideo.js(play video as background, it's responsive to different devices, but the data pixels positions are fixed)

It's a very interesting task! Lots of fun and learnings! A lot of time also goes to the AI object detection research and I find lots of similar interesting projects. I tried to use Svelte first, but get stuck with an error "[svelte-preprocess] Encountered type error". Don't know how to fix it, then have to move to React. In total, I spent 3 days for this task, including all the researches, Svelte tutorials, TypeScript tutorials and unsolved problems. Could you please give me some solutions about how did you and other candidates do with this task? Thanks!

