---
title: Devlog Falling Arrow - Art Direction
date: "2017-12-17"
---

Whilst starting with art direction before prototyping any gameplay probably isn't the wisest, I wanted to approach this a little different since it's the area I keep getting stuck on. So I decided to create a basic scene to ensure I can create the style I have in mind before I get in too deep.

My 3D modelling and character animation skills are virtually non-existent but I can handle Google Blocks and my background before becoming a devloper was in film-making & fashion photography so I have a strong handle on lighting and atmospherics which is what I'll be leaning on for this.

#### Lovecraftian Sci-Fi

So what does Lovecraftian Sci-Fi look like? I'm picturing alien landscapes with huge monoliths and a vast godlike creature towering over our player, maybe a cybernetic Cuthulu.

I pulled some reference material together into a mood-board to start from.

![Falling Arrow Moodboard](/static/images/falling-arrow-moodboard.jpg)

#### Google Blocks
I started by taking the monolith references and creating a simple model in Google Blocks.

![Monolith](/static/images/Monolith.gif)

I made sure to use some cutout geometry to give it a distinctive silhouette that will show through the fog and created a couple of elements in a different color which I can swap out with an emissive material in Unity.

For my creature I decided not to spend ages right now creating my own eldritch horror and used [The Vacuum Bot by Danny Bittman](https://poly.google.com/view/6rUwBqoeun5) as a place holder.

#### Unity 2017

Once I imported these assets into Unity I disabled the skybox and created a large box enviroment with six planes I could use to limit the distance field which worked nicely with Unity's exponential fog.

I removed the directional light from the scene and replaced it with a red point light that highlights the play area and appears to come from the creature.

![Point Light](/static/images/point-light.jpg)

The rest of the scenes illumination comes from the fog which I tinted cyan and emissive materials on the models and vertical planes which along with some dust particles gives the scene the moody astmospherics I was after.

Finally I added a couple of emissive cubes to visualise how the game play might look.

<iframe width="640" height="360" src="https://www.youtube.com/embed/Q9hOjhfQ-IQ?rel=0" frameborder="0" allowfullscreen></iframe>

There is obviously tons more I will have to do with this scene but as a proof of concept for the art direction I felt this was a good base to work from for now and has satisfied me that the style will work with my limited art skills.
