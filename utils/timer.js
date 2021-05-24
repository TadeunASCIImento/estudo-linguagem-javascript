//Timer Javascript


function timer(){
	const date = new Date();

  seconds = date.getSeconds();
	seconds -= this.seconds;
	digiSeconds = '0';

	minutes = date.getDate();
	minutes -= minutes;
	digiMinutes = '0';

	hours = date.getHours();
	hours -= hours;
	digiHours = '0';

	setInterval(()=>{
		seconds >= 9 ? digiSeconds = '':digiSeconds = '0';
		minutes >= 9 ? digiMinutes = '':digiMinutes = '0';
		hours >= 9 ? digiHours = '':digiHours = '0';
		if(seconds === 59){
			seconds = -1;
			++minutes;
			if(minutes === 60){
                minutes = 0;
				++hours;
			}
		}
		seconds++;
		console.log(`${digiHours}${hours}:${digiMinutes}${minutes}:${digiSeconds}${seconds}`);
	},1000);
}
timer();
