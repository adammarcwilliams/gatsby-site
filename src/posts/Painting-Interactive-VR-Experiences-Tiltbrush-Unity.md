---
title: Painting Interactive VR Experiences with TiltBrush & Unity
date: "2017-03-02"
---

Google’s Tilt Brush finally came to the Oculus Rift recently, optimized for Oculus’s Touch Controllers.

If you’ve not had a chance to play with this yet, I highly recommend giving it a whirl. The experience of painting/illustrating 3D scenes in VR is really something, and Tilt Brush makes the process extremely intuitive.

What really piqued my interest though is learning that the developers also open sourced a Tilt Brush Tool Kit. This takes the hassle out of exporting your creations into the Unity 3D game engine, including many of their SFX and Audio Reactive Brushes.

I’ve seen some interesting discussion on weather VR creation tools like Tilt Brush, Quill & Medium could become part of a professional development pipeline and so I decided to investigate.

This isn’t going to be a step by step tutorial but along the way I will link to any resources I used to learn the various technologies so you can tackle similar projects yourself.

As well as being my first time using a Tilt Brush creation in VR, this was also my first time creating a VR application with Oculus Touch Support, so the objectives for this project were as followed.
- Create a scene in Tilt Brush that included elements that react to music.
- Set-Up a Unity VR project using the Oculus, Oculus Avatar & Oculus Platform SDK’s.
- Import the Tilt Brush models into my scene and configure Audio Reactivity.
- Create an interactive object that toggles the music on/off and responds to touch.

[Oculus have some great developer documentation](https://developer.oculus.com/) that will give you detailed information on each of their SDK's but for the sake of this article, here is a quick overview of what we'll be using each for.

#### Oculus SDK
This is the starting point for developing with Unity and gives you their OVRCamera prefab which represents the headset in VR and gives you access to the touch controllers inputs.

#### Oculus Avatar SDK
This takes the touch controllers one step further and brings proper models that represent your hands in VR (as well as the rest of your avatar should you have a mirror in your scene or multiple players).

#### Oculus Platform SDK
Finally, if you want to replace the default blue Avatar with your users custom one from Oculus Home then this enables you to do just that.

With that out of the way, lets get started.

### Tilt Brush Scene

Suprisingly, I've not found very many detailed guides on using Tilt Brush and the in-app tutorial is just a series of tool tips. This isn't much of a sticking point though as the process is very intuitive so my best advice would be to just get stuck in and see what all the different tools do.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Well... first attemp with <a href="https://twitter.com/hashtag/TiltBrush?src=hash">#TiltBrush</a> and I&#39;ve managed to make a psychedelic mess 🤣 <a href="https://t.co/iGzaDxqklS">pic.twitter.com/iGzaDxqklS</a></p>&mdash; Adam Marc Williams (@amwcodes) <a href="https://twitter.com/amwcodes/status/834886932651986944">February 23, 2017</a></blockquote>

Luckily my second attempt went better and that is what we will be using for this project.

![Tilt Brush Groot](/static/images/tilt-brush-groot.gif)

One tip I can give is that Tilt Brush allows you to bring in reference material such as images or plain 3D models for you to use as guides. Big thank you to Corentin who made this model of [Dancing Groot](https://sketchfab.com/models/90fe6093ac5747b9a59c0b3317f5808c) available to download on SketchFab.

### Setting-Up Oculus SDK's

Included with the Oculus SDK is a Unity Package that makes getting started a breeze. Import this asset into your project, check "Virtual Reality Supported" in the Player settings and choose the Oculus SDK, then drag the OVRCamera prefab into your scene and click play. Hey presto, you're in VR!

The Avatar SDK however is a different story. Especially when we want to be able to set colliders for each of our fingers rather than just one big collider for your hand.

After banging my head a little I happened upon this fantastic tutorial by Gerald McAlister which explains how the Avatars actually work and takes you through the modifications we'll need to make to the SDK to dynamically apply colliders that track with our fingers.

[Oculus Touch and Finger Stuff](http://www.rgbschemes.com/blog/oculus-touch-and-finger-stuff-part-1/)

### Importing our Tilt Brush Scene

Once you've got that out the way and you've completed your Tilt Brush you need to export this as a 3D object and then import it into Unity. 

    To export a sketch:
    Open Tilt Brush, load your sketch
    Click the [...] icon in the settings area of your hand menu
    Click the Labs icon
    Hit Export in the floating window that pops up

    To import a sketch into your scene:
    Copy the .FBX file (in My Documents/Tilt Brush/Exports on Windows or Documents/Tilt Brush/Exports in Mac) into your Unity project
    Drag the file from the Project window into the Hierarchy
    
[Tilt Brush Unity SDK: Using Tilt Brush with Unity](https://docs.google.com/document/d/1YID89te9oDjinCkJ9R65bLZ3PpJk1W4S1SM2Ccc6-9w)

I placed this on top of a large cube in my scene so that it was at a decent height and then added a simple cylinder object ready for us to use as a button.

First though we needed to enable Audio Reactivity in the scene by adding an AudioSource and then including the TiltBrush Audio Reactivty prefab that comes with their tool kit.

### Scripting our Button

I removed the default collider on our button and replaced it with a mesh collider for accuracy and checked *Is Trigger*.

This gives us access to Unity's OnTrigger methods when we create our Button script and attach it to the Button Game Object.

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Button : MonoBehaviour {

	[SerializeField] AudioSource audioSource;
	[SerializeField] GameObject electricity;
	private Renderer electricRender;

	private bool isOn = false;

	// Use this for initialization
	void Start () {
		audioSource.GetComponent<AudioSource>();
		electricRender = electricity.GetComponent<Renderer>();
		electricRender.enabled = false;
	}

	void OnTriggerEnter (Collider other) {
		if (other.gameObject.name.Contains("index3") || other.gameObject.name.Contains("HandAnchor")) {
			if (isOn == false) {
				audioSource.Play();
				this.electricRender.enabled = true;
				isOn = true;
			} else {
				audioSource.Pause();
				electricRender.enabled = false;
				isOn = false;
			}
		}
	}

}

```
Let's quickly run through this script from the top so you can understand exactly what's going on.

The first thing we do is grab access to our AudioSource and the electric rainbow that arcs behind our Dancing Groot so that they can be accessed from this script.

Then we use the OnTriggerEnter method that we exposed, toggling them on and off when our finger collider touches the button collider.

One thing to note is the extra conditional logic I added before checking the buttons isOn state.

```
if (other.gameObject.name.Contains("index3") || other.gameObject.name.Contains("HandAnchor"))
```

This checks that the hand is either the whole controller itself (no buttons pressed) or that the collider triggering the button is the tip of the index finger. At first I had ommitted this but found when I pressed it using a pointed finger, I would trigger multiple colliders at once, often negating the effect of the trigger by turning it on and off again instantaniously. This happened because the finger contains three different colliders.

This can still happend if we were to push our finger too far *through* the button. 
The finger tip ("index3") leaves the buttons collider zone (OnTriggerExit) and then when we pull the finger back out it retriggers it again.

This is a bug I still need to fix but I will probably solve it by adding some sort of a cooling off period to the button so it can't be triggered repeatedly within milliseconds of each collide.

And here are the results...

<iframe width="640" height="360" src="https://www.youtube.com/embed/IkXbWpx-4us?rel=0" frameborder="0" allowfullscreen></iframe>



