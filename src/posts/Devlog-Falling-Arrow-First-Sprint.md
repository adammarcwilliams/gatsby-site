---
title: Devlog Falling Arrow - First Sprint
date: "2017-12-24"
---

With art direction satisfied for now, my next step was to create a playable prototype with a complete game loop, so I set myself the following sprint.

#### First Sprint
- Cubes spawn and travel along one of four paths
- I can destroy the cubes with an arrow
- For every X number of cubes spawned, the game speeds up and logs we've reached the next level.
- If a cube hits the ground before we destroy it the game is over and it logs the level we died at.

#### VRTK
The quickest way to prototype a VR experience in Unity is by reaching for a fantastic interaction framework called [VRTK](https://github.com/thestonefox/VRTK). This abstracts a lot of the development so we can use multiple SDK's with the same code base (meaning we can develop cross-platform with ease) and it includes a lot of helper components covering basic interaction and repetitive boiler plate we'd otherwise have to re-create on every single project.

Luckily for me, the example scenes also include a basic bow and arrow demo.

The behaviour of this bow and arrow isn't exactly as I envisage for my final game but it's pretty damn close and the code is very clean/understandable making it the perfect springboard for my prototype.

I abstracted the [VRTK Scripts] from the demo and added them to my scene and then created a copy of their *breakableCube prefab* to use.

I swapped out all the materials on the prefab with an emissive red and changed the scale so it matched the placeholder cubes and then turned off gravity on their RigidBody component so I could place them in the scene without them falling and control their decent through code later.

I tested the game at this point and met one of the sprints stories.

- ~~I can destroy the cubes with an arrow~~

#### Path Tools

Next was to create four paths between the creature and the ground that the cubes could travel down.

Luckily I already had my own [Unity Path Tools](https://github.com/adammarcwilliams/unity-path-tools) on Github as a result of a fabulous [CatLikeCoding](http://catlikecoding.com/unity/tutorials/) tutorial I followed on Bezier Splines.

![Path Tools](/static/images/Path-Tools.jpg)

I used this to create four paths, each assigned to a different game object that I grouped together under the creature and added the SplineWalker component from my path tools to the breakableCube prefab. This is what controls the movement along the Bezier path and I changed it to use the current game speed to modify the speed it travels at along the path (it will read this from the Game Controller that I will be creating shortly).

#### Cube Spawner

I then created a new game object with a CubeSpawner script that took the four paths as an ordered array and a reference to the breakableCube prefab.

It is responsible for cycling through the cube paths in order and has a public method on it called SpawnCube which instantiates a new breakableCube and sets the cube path to use on its SplineWalker component.

#### Game Controller

The final step is to create a Game Controller that manages the games state.

This keeps track of the current level we have reached, the spawn interval, current game speed, number of cubes spawned this level etc...

For now I've opted for the singleton pattern and made the GameSpeed a public variable so that any other scripts that need to access it can do on the instance. I may revisit this design pattern later but it is fine for this stage.

The Game Controller starts a SpawnCubes coroutine on start which calls the public SpawnCube method on our CubeSpawner and adds to the cubesSpawnedThisLevel count.

Every time this reaches a certain number (I believe I chose five in the demo I recorded) it increases the level reached, logs it out and increases the game speed.

This game speed modifier is used to increase the speed that the SpawnCubes coroutine runs at and the speed the cubes travel at on our SplineWalker component.

When I ran the game again at this point I discovered a bug. The game started but only one cube was spawned and travelled along a path.

I traced this back to the SpawnCubes coroutine in the Game Controller which was only running once.

It turns out I misunderstood the way coroutines functioned and thought they would always run until you returned a yield null, so I had a yield waitForSeconds at the bottom. This is not correct and all it was doing was pausing for a few seconds before ending.

To fix this I added a while loop to the coroutine that checked if the gameInProgress flag was true which used the waitForSeconds(spawnInterval * GameSpeed) return and then returned a yield null once this loop breaks.

This is a step I would have needed to add anyway for the game over logic.

Now when I ran the game again at this point I met three of the sprints stories.
- ~~Cubes spawn and travel along one of four paths~~
- ~~I can destroy the cubes with an arrow~~
- ~~For every X number of cubes spawned, the game speeds up and logs we've reached the next level.~~

#### Game Over

The last thing to add was a means for the game to end.

I created a public get/set method on the Game Controller that gave us access to the gameInProgress flag and then modified the breakableCube prefab so that if it hit's the ground collider, it sets this to false.

The Game Controller then listens for this change in it's update loop and logs out that the game is over and the level we reached.

The only problem I had was that the exploded cubes were also triggering this when they hit the ground but I fixed this by making sure the breakableCube Prefab was kinematic when it exploded, so only it's childeren (the faces) triggered a collision with the ground.

We can now play the game and meet all of the sprints stories.

- ~~Cubes spawn and travel along one of four paths~~
- ~~I can destroy the cubes with an arrow~~
- ~~For every X number of cubes spawned, the game speeds up and logs we've reached the next level.~~
- ~~If a cube hits the ground before we destroy it the game is over and it logs the level we died at.~~


<iframe width="640" height="360" src="https://www.youtube.com/embed/HjQEoPdDZwU?rel=0" frameborder="0" allowfullscreen></iframe>
