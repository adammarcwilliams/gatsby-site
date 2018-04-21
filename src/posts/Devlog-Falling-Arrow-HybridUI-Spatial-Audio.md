---
title: Devlog Falling Arrow - Hybrid UI & Spatialized Audio
date: "2018-01-06"
---

After completing my first sprint to a playable game I decided the least fun thing about it now was the fact I had to quit and reset to play another round and there was no sound.

#### Hybrid UI

To make the game repayable I needed a start button that shows when you load the game and each time you finish a round, so it was time to think about a menu screen/user interface.

Rather than having some UI panel that you point and click at I thought it would be cool to have it so you can interact with it using your bow and arrow. Aim to highlight a button and then fire an arrow at it to press it.

For this I would need a canvas that exists in world space, a means of raycasting from my bow in the direction I aim that can interact with the Unity UI system and then a collider on the button for the arrow to hit.

I quickly tested this idea out using the VRTK Console Viewer we had already been using in the scene and added a Box Collider with Rigid Body set to Kinematic/No Gravity to the "Clear Log" button.

I wrote a script so that OnCollisionEnter it calls the ClearLog function that the Unity UI button had previously called in the Console Viewer.

I knew that part would be pretty straight forward and that the next part would probably be a bit trickier until I discovered the way VRTK's existing UI pointer works doesn't require to be attached to a Controller game object and doesn’t require a visible render either.

With this knowledge I simply attached it to the centre section of my bow ensuring the pointer's direction would match that of my bow aim so that it would trigger the hover highlight that was already in place.

I set it to always on (something I might optimise later if there are no UI elements to interact with during gameplay) and had to give it a controller reference to stop it erroring in VRTK_InputModules.
I believe this is because the UI pointer expects to be attached to a controller to use its angles for scroll events but we don't need that. If we do I can write a script that injects whichever controller is current the bow hand into the UI Pointer at a later time.

<iframe width="640" height="360" src="https://www.youtube.com/embed/tgBOsJ3g0M8?rel=0" frameborder="0" allowfullscreen></iframe>

#### Start Screen

Now I knew this would work as I wanted it to, I added a Start Screen and Score Screen Canvas into world space.

For the time being I used the Unity Logo as my Start Button and imported Text Mesh Pro which is a free asset for creating text that renders extremely well in VR by using SDF fonts. The standard UI text was horrible and pixelated.

I set the Start Button to highlight red when you aim at it to give the player affordance that it is intractable and then wrote a very simple script to hook up the CurrentLevel property from the GameController instance with the TextMeshPro component on the Score Screen.

Next I refactored the Game Controller so that instead of starting a game automatically on Awake, we have to call the public method StartGame() and then hooked that up to my Start Button in the same way I did for the Clear Log button using a Box Collider/RigidBody.

Lastly I wrote a script that hid the Start Screen and disabled the Start Buttons collider during game play.

I'm starting to notice at this point I have a lot of different components referencing state and values inside my Game Controller which is the problem with this design pattern as it means everything become tightly coupled. I've made a note to address this later by looking into using Scriptable Object assets and an event system instead.

I kept the Score Screen showing as this is something I would like the player to see during game play but it will not be a big panel as it is now. When I design a futuristic bow I may even include a small screen on the raiser itself as I much prefer UI to exist in a tangible manor for VR.

#### Spatialized Audio

For the sound I use Google's [Resonance Audio SDK](https://developers.google.com/resonance-audio/).

This is a great plugin that offers spatialized audio and ambisonics which I have used several times now.

It comes with a ResonanceAudioSource prefab that I add to the BreakableCubes and give it a short laser blast SFX. Then I edit the BreakableCube script to play the sound when the cube explodes.

I also add another a couple of meters above the player’s head which is where my soundtrack plays from.

For this I added a script that changes the audio sources pitch to match the current Game Speed.

This is a very rough sound pass I will be working with a sound designer when the time comes and finding a way to increase the speed/intensity of the music without it rising in pitch but for now it does the job of breaking the silence.

#### Next Steps

<iframe width="640" height="360" src="https://www.youtube.com/embed/IGCBdfXkjgk?rel=0" frameborder="0" allowfullscreen></iframe>

The holidays are over and I'm happy that I managed to get a prototype finished. My next step is to get some people to play test the game and start refactoring the code to be a cleaner base to build upon.

I will be completely replacing the BreakableCubes with a new version I'll write from scratch that uses particle systems and can take on different properties for a variety of target types (different speeds, hit points, behaviour on explosion etc.) and creating my own futuristic bow that fires laser arrows (because why not?).
