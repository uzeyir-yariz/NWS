const countdown = new Date('2024-03-01T08:30:00.000Z');


const days = document.querySelector(".days").querySelector(".flip-card");
const hours = document.querySelector(".hours").querySelector(".flip-card");
const minutes = document.querySelector(".minutes").querySelector(".flip-card");
const seconds = document.querySelector(".seconds").querySelector(".flip-card");

// ** get the time totals, return them
function getTimeRemaining(countdown) {
	const now = new Date();
	const diff = countdown - now;

	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((diff / 1000 / 60) % 60);
	const seconds = Math.floor((diff / 1000) % 60);

	return {
		diff,
		days,
		hours,
		minutes,
		seconds
	};
}

function initializeClock(countdown) {
	function updateClock() {
		const t = getTimeRemaining(countdown);
		addFlip(days, t.days);
		addFlip(hours, t.hours);
		addFlip(minutes, t.minutes);
		addFlip(seconds, t.seconds);

		if (t.diff <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	const timeinterval = setInterval(updateClock, 1000);
}

const addFlip = (card, time) => {
	// ** confirm time has changed
	const currTime = card.querySelector(".top-half").innerText;
	if (time == currTime) return;

	let t = time <= 9 ? `0${time}` : time;
	const topHalf = card.querySelector(".top-half");
	const bottomHalf = card.querySelector(".bottom-half");
	const topFlip = document.createElement("div");
	const bottomFlip = document.createElement("div");

	// ** add animation, populate with current time
	topFlip.classList.add("top-flip");
	topFlip.innerText = currTime;

	bottomFlip.classList.add("bottom-flip");

	// ** animation begins, update top-half to new time
	topFlip.addEventListener("animationstart", () => {
		topHalf.innerText = t;
	});

	// ** animation ends, remove animated div, update bottom animation to new time
	topFlip.addEventListener("animationend", () => {
		topFlip.remove();
		bottomFlip.innerText = t;
	});

	// ** animation ends, update bottom-half to new time, remove animated div
	bottomFlip.addEventListener("animationend", () => {
		bottomHalf.innerText = t;
		bottomFlip.remove();
	});

	card.appendChild(topFlip);
	card.appendChild(bottomFlip);
};

initializeClock(countdown);
