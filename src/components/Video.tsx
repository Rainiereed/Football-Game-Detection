import "./Video.css";
// @ts-ignore
import left from "../assets/left.mp4";
import data from '../assets/data.json';

function Video() {
	var timerID: any;
	let frame = 0;
	var video = document.createElement("video");
	video.currentTime = 1600708032970;
    function play() {
	//function play(e: any) {
		// set the overlay same size as the video 
		//const mydiv = e.target.parentNode.querySelector("div");
		//mydiv.style.width = e.target.clientWidth + "px";
		//mydiv.style.height = e.target.clientHeight + "px";
		
		//let index = 0;
		const ball: any = document.querySelector(".ball");
		const players: any = [];
		let i;
		for(i=0; i<22; i++) {
                   players.push(document.querySelector(`.player${i}`)) 
		}		
		
		const step = () => {
			if (frame === 250) { frame = 0}
			if (frame < data.length && data[frame].ball) {
				// @ts-ignore
				ball.style.left = data[frame].ball[0] / 2.7 + "px";
				// @ts-ignore
				ball.style.top = data[frame].ball[1] / 3.1 + "px";
				players[0].style.left = data[frame].detections[0][0] / 2.67 + "px";
				players[0].style.top = data[frame].detections[0][1] / 3 + "px";
				players[0].style.width = data[frame].detections[0][2] / 3 + "px";
				players[0].style.height = data[frame].detections[0][3] / 3.2 + "px";
				players[1].style.left = data[frame].detections[1][0] / 2.75 + "px";
				players[1].style.top = data[frame].detections[1][1] / 3 + "px";
				players[1].style.width = data[frame].detections[1][2] / 3 + "px";
				players[1].style.height = data[frame].detections[1][3] / 3.2 + "px";
				players[2].style.left = data[frame].detections[2][0] / 2.5 + "px";
				players[2].style.top = data[frame].detections[2][1] / 3 + "px";
				players[2].style.width = data[frame].detections[2][2] / 3 + "px";
				players[2].style.height = data[frame].detections[2][3] / 3.2 + "px";
				players[3].style.left = data[frame].detections[3][0] / 2.75 + "px";
				players[3].style.top = data[frame].detections[3][1] / 3 + "px";
				players[3].style.width = data[frame].detections[3][2] / 3 + "px";
				players[3].style.height = data[frame].detections[3][3] / 3.2 + "px";
				players[4].style.left = data[frame].detections[4][0] / 2.75 + "px";
				players[4].style.top = data[frame].detections[4][1] / 3 + "px";
				players[4].style.width = data[frame].detections[4][2] / 3 + "px";
				players[4].style.height = data[frame].detections[4][3] / 3.2 + "px";
				players[5].style.left = data[frame].detections[5][0] / 2.55 + "px";
				players[5].style.top = data[frame].detections[5][1] / 3 + "px";
				players[5].style.width = data[frame].detections[5][2] / 3 + "px";
				players[5].style.height = data[frame].detections[5][3] / 3.2 + "px";
				players[6].style.left = data[frame].detections[6][0] / 2.55 + "px";
				players[6].style.top = data[frame].detections[6][1] / 3 + "px";
				players[6].style.width = data[frame].detections[6][2] / 3 + "px";
				players[6].style.height = data[frame].detections[6][3] / 3.2 + "px";
				players[7].style.left = data[frame].detections[7][0] / 2.7 + "px";
				players[7].style.top = data[frame].detections[7][1] / 3 + "px";
				players[7].style.width = data[frame].detections[7][2] / 3 + "px";
				players[7].style.height = data[frame].detections[7][3] / 3.2 + "px";
				players[8].style.left = data[frame].detections[8][0] / 2.7 + "px";
				players[8].style.top = data[frame].detections[8][1] / 3 + "px";
				players[8].style.width = data[frame].detections[8][2] / 3 + "px";
				players[8].style.height = data[frame].detections[8][3] / 3.2 + "px";
				players[9].style.left = data[frame].detections[9][0] / 2.7 + "px";
				players[9].style.top = data[frame].detections[9][1] / 3 + "px";
				players[9].style.width = data[frame].detections[9][2] / 3 + "px";
				players[9].style.height = data[frame].detections[9][3] / 3.2 + "px";
				players[10].style.left = data[frame].detections[10][0] / 2.6 + "px";
				players[10].style.top = data[frame].detections[10][1] / 3 + "px";
				players[10].style.width = data[frame].detections[10][2] / 3 + "px";
				players[10].style.height = data[frame].detections[10][3] / 3.2 + "px";
				players[11].style.left = data[frame].detections[11][0] / 2.7 + "px";
				players[11].style.top = data[frame].detections[11][1] / 3 + "px";
				players[11].style.width = data[frame].detections[11][2] / 3 + "px";
				players[11].style.height = data[frame].detections[11][3] / 3.2 + "px";
				players[12].style.left = data[frame].detections[12][0] / 2.7 + "px";
				players[12].style.top = data[frame].detections[12][1] / 3 + "px";
				players[12].style.width = data[frame].detections[12][2] / 3 + "px";
				players[12].style.height = data[frame].detections[12][3] / 3.2 + "px";
				players[13].style.left = data[frame].detections[13][0] / 2.8 + "px";
				players[13].style.top = data[frame].detections[13][1] / 3 + "px";
				players[13].style.width = data[frame].detections[13][2] / 3 + "px";
				players[13].style.height = data[frame].detections[13][3] / 3.2 + "px";
				players[14].style.left = data[frame].detections[14][0] / 2.8 + "px";
				players[14].style.top = data[frame].detections[14][1] / 3 + "px";
				players[14].style.width = data[frame].detections[14][2] / 3 + "px";
				players[14].style.height = data[frame].detections[14][3] / 3.2 + "px";
				players[15].style.left = data[frame].detections[15][0] / 2.75 + "px";
				players[15].style.top = data[frame].detections[15][1] / 3 + "px";
				players[15].style.width = data[frame].detections[15][2] / 3 + "px";
				players[15].style.height = data[frame].detections[15][3] / 3.2 + "px";
				players[16].style.left = data[frame].detections[16][0] / 2.8 + "px";
				players[16].style.top = data[frame].detections[16][1] / 3 + "px";
				players[16].style.width = data[frame].detections[16][2] / 3 + "px";
				players[16].style.height = data[frame].detections[16][3] / 3.2 + "px";
				players[17].style.left = data[frame].detections[17][0] / 2.8 + "px";
				players[17].style.top = data[frame].detections[17][1] / 3 + "px";
				players[17].style.width = data[frame].detections[17][2] / 3 + "px";
				players[17].style.height = data[frame].detections[17][3] / 3.2 + "px";
				players[18].style.left = data[frame].detections[18][0] / 2.8 + "px";
				players[18].style.top = data[frame].detections[18][1] / 3 + "px";
				players[18].style.width = data[frame].detections[18][2] / 3 + "px";
				players[18].style.height = data[frame].detections[18][3] / 3.2 + "px";
				players[19].style.left = data[frame].detections[19][0] / 2.8 + "px";
				players[19].style.top = data[frame].detections[19][1] / 3 + "px";
				players[19].style.width = data[frame].detections[19][2] / 3 + "px";
				players[19].style.height = data[frame].detections[19][3] / 3.2 + "px";
				players[20].style.left = data[frame].detections[20][0] / 2.8 + "px";
				players[20].style.top = data[frame].detections[20][1] / 3 + "px";
				players[20].style.width = data[frame].detections[20][2] / 3 + "px";
				players[20].style.height = data[frame].detections[20][3] / 3.2 + "px";
				players[21].style.left = data[frame].detections[21][0] / 2.8 + "px";
				players[21].style.top = data[frame].detections[21][1] / 3 + "px";
				players[21].style.width = data[frame].detections[21][2] / 3 + "px";
				players[21].style.height = data[frame].detections[21][3] / 3.2 + "px";
				//players[22].style.left = data[frame].detections[22][0] / 2.5 + "px";
				//players[22].style.top = data[frame].detections[22][1] / 3 + "px";
				//players[22].style.width = data[frame].detections[22][2] / 3 + "px";
				//players[22].style.height = data[frame].detections[22][3] / 3.2 + "px";

				//console.log(data[frame].detections[21]);
				//console.log(data[frame].detections[22]);
										
			}
			frame++;			
			video.currentTime += 40;

			// The setInterval accuracy problem
			/*// if it runs faster
				if (video.currentTime < data[frame].utc_time){
					frame--;
				}	
			// if it runs slowlier
				if (video.currentTime > data[frame].utc_time){					
					frame++;
				}	*/
			console.log(video.currentTime);	
			//console.log(data[frame].utc_time); 	

			/*if(index<24) {
				players[0].style.left = data[frame].detections[index][0] / 3 + "px";
				players[0].style.top = data[frame].detections[index][1] / 3 + "px";
				players[0].style.width = data[frame].detections[index][2]  + "px";
				players[0].style.height = data[frame].detections[index][3]  + "px";
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

	function replay() {
		video.currentTime = 1600708032970;
		play();
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
            {/*<button className="replay" onClick={replay}>Restart</button>*/}

			<video className="videoPosition"
				src={left} controls 
				onPlay={play} onPause={pause}
			>
			</video>

		</div>

	);
}

export default Video;
