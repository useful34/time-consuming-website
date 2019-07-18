
  var select = function(s) {
  return document.querySelector(s);
},
selectAll = function(s) {
  return document.querySelectorAll(s);
},
  colorArray = ["#FFE74C", "#FF5964", "#6BF178", "#35A7FF"],
  offset = 0.165,
  workCount = 0


TweenMax.set('svg', {
visibility: 'visible'
})

var bezier = MorphSVGPlugin.pathDataToBezier('.myPath', {
offsetX: -0,
offsetY: -0
})

TweenMax.set('text', {
transformOrigin: '50% 100%'
})

TweenMax.set('.hard text', {
fill: function (i) {
return colorArray[i]
}
})
TweenMax.set('.work text', {
fill: function (i) {
return colorArray[i]
}
})

var workTl = new TimelineMax();
workTl.staggerTo('.work text', 2, {
  bezier: {
    type: "cubic",
    values: bezier,
    autoRotate: true
  },
repeat: -1,
  ease: Linear.easeNone
}, offset)

var hardTl = new TimelineMax();
hardTl.staggerTo('.hard text', 2, {
  bezier: {
    type: "cubic",
    values: bezier,
    autoRotate: true
  },
repeat: -1,
  ease: Linear.easeNone
}, offset)


var mainTl = new TimelineMax({paused: true});
mainTl.add(workTl, 0)
.add(hardTl, 1)

var seqTl = new TimelineMax({repeat: -1});
seqTl.fromTo(mainTl, 2, {
time: 2.52
}, {
time: 3.52,
ease: Expo.easeInOut
})
.fromTo(mainTl, 2, {
time: 3.52
}, {
time: 4.52,
immediateRender: false,
ease: Expo.easeInOut
})

//ScrubGSAPTimeline(seqTl);

//TweenMax.globalTimeScale(0.25)
