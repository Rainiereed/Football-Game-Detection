import "./Video.css";
// @ts-ignore
import left from "../assets/left.mp4";
import data from '../assets/data.json';

function Video() {
	var timerID: any;
	
	function play(e: any) {
		// set the overlay same size as the video 
		const mydiv = e.target.parentNode.querySelector("div");
		mydiv.style.width = e.target.clientWidth + "px";
		mydiv.style.height = e.target.clientHeight + "px";
		let frame = 0;
		//let index = 0;
		const ball = mydiv.querySelector(".ball");
		const player0 = mydiv.querySelector(".player0");
		const player1 = mydiv.querySelector(".player1");
		const player2 = mydiv.querySelector(".player2");
		const player3 = mydiv.querySelector(".player3");
		const player4 = mydiv.querySelector(".player4");
		const player5 = mydiv.querySelector(".player5");
		const player6 = mydiv.querySelector(".player6");
		const player7 = mydiv.querySelector(".player7");
		const player8 = mydiv.querySelector(".player8");
		const player9 = mydiv.querySelector(".player9");
		const player10 = mydiv.querySelector(".player10");
		const player11 = mydiv.querySelector(".player11");
		const player12 = mydiv.querySelector(".player12");
		const player13 = mydiv.querySelector(".player13");
		const player14 = mydiv.querySelector(".player14");
		const player15 = mydiv.querySelector(".player15");
		const player16 = mydiv.querySelector(".player16");
		const player17 = mydiv.querySelector(".player17");
		const player18 = mydiv.querySelector(".player18");
		const player19 = mydiv.querySelector(".player19");
		const player20 = mydiv.querySelector(".player20");
		const player21 = mydiv.querySelector(".player21");
		//const player22 = mydiv.querySelector(".player22");
		var video = document.createElement("video");
		video.currentTime = 0;

		const step = () => {
			
			if (frame < data.length && data[frame].ball) {
				// @ts-ignore
				ball.style.left = data[frame].ball[0] / 2.7 + "px";
				// @ts-ignore
				ball.style.top = data[frame].ball[1] / 3.1 + "px";
				player0.style.left = data[frame].detections[0][0] / 2.67 + "px";
				player0.style.top = data[frame].detections[0][1] / 3 + "px";
				player0.style.width = data[frame].detections[0][2] / 3 + "px";
				player0.style.height = data[frame].detections[0][3] / 3.2 + "px";
				player1.style.left = data[frame].detections[1][0] / 2.75 + "px";
				player1.style.top = data[frame].detections[1][1] / 3 + "px";
				player1.style.width = data[frame].detections[1][2] / 3 + "px";
				player1.style.height = data[frame].detections[1][3] / 3.2 + "px";
				player2.style.left = data[frame].detections[2][0] / 2.5 + "px";
				player2.style.top = data[frame].detections[2][1] / 3 + "px";
				player2.style.width = data[frame].detections[2][2] / 3 + "px";
				player2.style.height = data[frame].detections[2][3] / 3.2 + "px";
				player3.style.left = data[frame].detections[3][0] / 2.75 + "px";
				player3.style.top = data[frame].detections[3][1] / 3 + "px";
				player3.style.width = data[frame].detections[3][2] / 3 + "px";
				player3.style.height = data[frame].detections[3][3] / 3.2 + "px";
				player4.style.left = data[frame].detections[4][0] / 2.75 + "px";
				player4.style.top = data[frame].detections[4][1] / 3 + "px";
				player4.style.width = data[frame].detections[4][2] / 3 + "px";
				player4.style.height = data[frame].detections[4][3] / 3.2 + "px";
				player5.style.left = data[frame].detections[5][0] / 2.55 + "px";
				player5.style.top = data[frame].detections[5][1] / 3 + "px";
				player5.style.width = data[frame].detections[5][2] / 3 + "px";
				player5.style.height = data[frame].detections[5][3] / 3.2 + "px";
				player6.style.left = data[frame].detections[6][0] / 2.55 + "px";
				player6.style.top = data[frame].detections[6][1] / 3 + "px";
				player6.style.width = data[frame].detections[6][2] / 3 + "px";
				player6.style.height = data[frame].detections[6][3] / 3.2 + "px";
				player7.style.left = data[frame].detections[7][0] / 2.7 + "px";
				player7.style.top = data[frame].detections[7][1] / 3 + "px";
				player7.style.width = data[frame].detections[7][2] / 3 + "px";
				player7.style.height = data[frame].detections[7][3] / 3.2 + "px";
				player8.style.left = data[frame].detections[8][0] / 2.7 + "px";
				player8.style.top = data[frame].detections[8][1] / 3 + "px";
				player8.style.width = data[frame].detections[8][2] / 3 + "px";
				player8.style.height = data[frame].detections[8][3] / 3.2 + "px";
				player9.style.left = data[frame].detections[9][0] / 2.7 + "px";
				player9.style.top = data[frame].detections[9][1] / 3 + "px";
				player9.style.width = data[frame].detections[9][2] / 3 + "px";
				player9.style.height = data[frame].detections[9][3] / 3.2 + "px";
				player10.style.left = data[frame].detections[10][0] / 2.6 + "px";
				player10.style.top = data[frame].detections[10][1] / 3 + "px";
				player10.style.width = data[frame].detections[10][2] / 3 + "px";
				player10.style.height = data[frame].detections[10][3] / 3.2 + "px";
				player11.style.left = data[frame].detections[11][0] / 2.7 + "px";
				player11.style.top = data[frame].detections[11][1] / 3 + "px";
				player11.style.width = data[frame].detections[11][2] / 3 + "px";
				player11.style.height = data[frame].detections[11][3] / 3.2 + "px";
				player12.style.left = data[frame].detections[12][0] / 2.7 + "px";
				player12.style.top = data[frame].detections[12][1] / 3 + "px";
				player12.style.width = data[frame].detections[12][2] / 3 + "px";
				player12.style.height = data[frame].detections[12][3] / 3.2 + "px";
				player13.style.left = data[frame].detections[13][0] / 2.8 + "px";
				player13.style.top = data[frame].detections[13][1] / 3 + "px";
				player13.style.width = data[frame].detections[13][2] / 3 + "px";
				player13.style.height = data[frame].detections[13][3] / 3.2 + "px";
				player14.style.left = data[frame].detections[14][0] / 2.8 + "px";
				player14.style.top = data[frame].detections[14][1] / 3 + "px";
				player14.style.width = data[frame].detections[14][2] / 3 + "px";
				player14.style.height = data[frame].detections[14][3] / 3.2 + "px";
				player15.style.left = data[frame].detections[15][0] / 2.75 + "px";
				player15.style.top = data[frame].detections[15][1] / 3 + "px";
				player15.style.width = data[frame].detections[15][2] / 3 + "px";
				player15.style.height = data[frame].detections[15][3] / 3.2 + "px";
				player16.style.left = data[frame].detections[16][0] / 2.8 + "px";
				player16.style.top = data[frame].detections[16][1] / 3 + "px";
				player16.style.width = data[frame].detections[16][2] / 3 + "px";
				player16.style.height = data[frame].detections[16][3] / 3.2 + "px";
				player17.style.left = data[frame].detections[17][0] / 2.8 + "px";
				player17.style.top = data[frame].detections[17][1] / 3 + "px";
				player17.style.width = data[frame].detections[17][2] / 3 + "px";
				player17.style.height = data[frame].detections[17][3] / 3.2 + "px";
				player18.style.left = data[frame].detections[18][0] / 2.8 + "px";
				player18.style.top = data[frame].detections[18][1] / 3 + "px";
				player18.style.width = data[frame].detections[18][2] / 3 + "px";
				player18.style.height = data[frame].detections[18][3] / 3.2 + "px";
				player19.style.left = data[frame].detections[19][0] / 2.8 + "px";
				player19.style.top = data[frame].detections[19][1] / 3 + "px";
				player19.style.width = data[frame].detections[19][2] / 3 + "px";
				player19.style.height = data[frame].detections[19][3] / 3.2 + "px";
				player20.style.left = data[frame].detections[20][0] / 2.8 + "px";
				player20.style.top = data[frame].detections[20][1] / 3 + "px";
				player20.style.width = data[frame].detections[20][2] / 3 + "px";
				player20.style.height = data[frame].detections[20][3] / 3.2 + "px";
				player21.style.left = data[frame].detections[21][0] / 2.8 + "px";
				player21.style.top = data[frame].detections[21][1] / 3 + "px";
				player21.style.width = data[frame].detections[21][2] / 3 + "px";
				player21.style.height = data[frame].detections[21][3] / 3.2 + "px";
				//player22.style.left = data[frame].detections[22][0] / 2.5 + "px";
				//player22.style.top = data[frame].detections[22][1] / 3 + "px";
				//player22.style.width = data[frame].detections[22][2] / 3 + "px";
				//player22.style.height = data[frame].detections[22][3] / 3.2 + "px";

				//console.log(data[frame].detections[21]);
				//console.log(data[frame].detections[22]);
				
				video.currentTime += 0.04;	
				console.log(video.currentTime);							
			}
			frame++;

			/*if(index<24) {
				player0.style.left = data[frame].detections[index][0] / 3 + "px";
				player0.style.top = data[frame].detections[index][1] / 3 + "px";
				player0.style.width = data[frame].detections[index][2]  + "px";
				player0.style.height = data[frame].detections[index][3]  + "px";
				console.log(data[frame].detections);
			}
			index++;*/

		}
		
		// according to the data.json, the fps is 25, so run it every 40 milliseconds
		timerID = setInterval(step, 40);
		
	}

	function pause() {
		stopTimer();
	
	}

	function stopTimer() {
		clearInterval(timerID);
		
	}

	return (
		<div className="videoContainer">

			<div className="drawbox">

				<div className="ball"></div>
				<div className="player0"></div>
				<div className="player1"></div>
				<div className="player2"></div>
				<div className="player3"></div>
				<div className="player4"></div>
				<div className="player5"></div>
				<div className="player6"></div>
				<div className="player7"></div>
				<div className="player8"></div>
				<div className="player9"></div>
				<div className="player10"></div>
				<div className="player11"></div>
				<div className="player12"></div>
				<div className="player13"></div>
				<div className="player14"></div>
				<div className="player15"></div>
				<div className="player16"></div>
				<div className="player17"></div>
				<div className="player18"></div>
				<div className="player19"></div>
				<div className="player20"></div>
				<div className="player21"></div>

			</div>

			<video className="videoPosition"
				src={left} controls 
				onPlay={play} onPause={pause}
			>
			</video>

		</div>

	);
}

export default Video;