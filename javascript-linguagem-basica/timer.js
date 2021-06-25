const seconds = new Date().getSeconds();

const timer = {
	seconds: seconds - seconds - 1,
	minutes: 0,
	hours: 0,
	zerado: 0,
	_seconds: '0',
	_minutes: '0',
	_hours: '0',
	interval: 1
}

configureDigito = (tempo, digito) =>{
  tempo >= 9 ? digito = '' : digito = '0';
  return digito;
}

setInterval(() => {
	timer._seconds = configureDigito(timer.seconds);
	timer._minutes = configureDigito(timer.minutes);
	timer._hours = configureDigito(timer.hours);
    if(timer.seconds === 59) {
		timer.seconds = -1;
		++timer.minutes;
		if(timer.minutes === 59) {
			timer.minutes = timer.zerado;
			++timer.hours;
		}
	}
	timer.seconds++;
	console.log(`${timer._hours}${timer.hours}:${timer._minutes}${timer.minutes}:${timer._seconds}${timer.seconds}`);
}, timer.interval);