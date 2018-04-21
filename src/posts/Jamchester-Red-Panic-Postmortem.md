---
title: Jamchester 2017 Red Panic Postmortem
date: "2017-06-27"
---

With the madness of this 48 hour game jam over and the sleep deprivation subsiding, I thought it was about time to take stock of what I learnt.

This was both my first game jam and the first game I've finished to a playable state that wasn't following a tutorial series (nothing like a deadline & some team mates to add the pressure to finish).

The jams theme was "Shape The Future" and inspired by some of the work SpaceX are doing to colonise Mars we decided to rif on this for a fun little sandbox game in VR.

<iframe width="640" height="360" src="https://www.youtube.com/embed/M0qqHpiucWc?rel=0" frameborder="0" allowfullscreen></iframe>

You can check out the full blurb and find my team mates over on the Devpost page here: [Red Panic](https://devpost.com/software/redpanic)

Needless to say we didn't take home any trophies but I'm very pleased with the work we did and that we managed to find a nugget of fun in our game concept.

I won't be sharing any of the code this time round as it's "game jam code" that was written so quickly that it's quite literally held together by strings :D

With that said though I'd like to share the biggest lesson I learnt from the experience... **The importance of playtesting.**

As you can see from the video of us playing the game, defending your settlement from meteorites usings sticks of dynamite can be a lot of fun but when the judges played the game, they lasted a matter of seconds once they reached this part as we had both made the skill level too difficult and not clearly conveyed what they were supposed to be doing.

#### Here is what we did wrong:
* We didn't introduce a throwing mechanic until it was needed to defend your settlement, by which point it was too late to familiarise yourself with as the meteorites were coming in fast...
* The meteorites were coming in *too* fast!!
* Small reddish meteorites against a reddish skybox makes them nearly invisible!!
* The moment one of these small meteorites hit one of your buildings, the game was over in a firey mess before you even realised what had happened.

#### Here is what we should of done:
* Start the game with a rocky terrain where you had to throw sticks of dynamite to clear an area, ready to build your base. This would introduce this game mechanic earlier and provide another layer of satisfaction to the contruction of your base which most the judges remarked was the fun part.
* Replace the skybox with a cooler hue to contrast the meteorites and red planet.
* Replace the meteorites with a single, larger meteor, travelling slowly to the planet which you needed to destroy by throwing 3-4 sticks of dynamite at it before it reached your base
* Make the lose state more forgiving by allowing up to two buildings to be destroyed and allowing you x number of seconds to replace the building, allowing for more construction fun.


I think these changes would have made the game much more enjoyable and the satisfaction of saving your settlement would have been a greater pay off.

Still, we live and learn! One thing I will remember for my next game jam (or any other projects I'm working on) is to get people using it as soon as possible so I can guage the flow of the experience and make these changes *before it's too late!*
