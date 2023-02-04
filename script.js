let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
	.to('.icon', 3, {y: -600})

let scene = new ScrollMagic.Scene({
	triggerElement: "section",
	duration: "100%"
	triggerHook: 0,
})
	.setTween(timeline)
	.setPin("section")
	.addTo(controller);