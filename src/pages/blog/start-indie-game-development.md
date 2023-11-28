---
layout: '../../layouts/BlogLayout.astro'
---

# How to Start as an Indie Game Developer

## What I've learnt of the industry, tools, resources and best practices to actually finish your ideas and make progress

![Zablek’s Path, one of the games I am making.](https://miro.medium.com/v2/resize:fit:720/format:webp/1*uQ0m3aB9k6xg6bdJ1hi0mg.png)

Hi, I am Armando, a 33 years old web developer, and I am learning to make a game in Unity.

The objective of this and other future posts is to record my path and have a place to save and share what I learn on the way, so I don’t forget it 😅, and perhaps it will be useful to others in a similar position.

### My first game attempt

![My first attempt to make a game.](https://miro.medium.com/v2/resize:fit:720/format:webp/1*ZtXgdfliRrz1jDtTffwfuQ.png)

The first game I tried to make was due to me running into a JavaScript based engine, [Phaser](https://phaser.io/), which is a small web based game engine and since JavaScript is my main programming language I tried to make something using it.

My first attempt was a multiplayer pixel art RPG, if you have ever made a game or tried to make one you already know the issue with this, the SCOPE was to freaking big. Specially taking into account that making games was and still is just a hobby to me, and I can only dedicate a couple of hours a day to it. But I didn’t knew that at the time, so I started learning the engine and creating the game at the same time. I made a backend using express and used sockets to keep all the frontend instances updated using events back and forth. I managed to create several playable characters and items using free Assets and a basic scene where you would spawn, find a random weapon on the ground and try to kill other players. But soon the things that I didn’t knew how to do started to pile up until it became impossible to continue, also I entered in a very complicated project at my job at the time and I didn’t had any free time. But the idea and the desire to make games remained in my head.

During that process I met a few other people who liked to make games and even one who had published a mobile game that was a national success, all of them recommended me to change to [Unity](https://unity.com/) and gave me examples of how to easily solve in Unity some of the biggest issues I had with Phaser, even when moving to a new and more complex Engine, and also learning a different language, since almost all the tutorial and documents are written in C#, was intimidating I decided to give it a shot.

### Starting in Unity

My first impression of Unity was that there was a HUGE amount of information and tutorials, so learning and solving doubts and bugs 🐞would be so much easier. First I started by the classic YouTube channel [Brackeys](https://www.youtube.com/@Brackeys).

<!-- ![alt](https://) -->

The amazing and easy to understand content taught me the basics and soon started repeating many of the channel projects, learning how to make different things and getting to know the engine. At the same time I also tried to do a few original small projects since to me it’s better to learn by necessity than just repeating tutorials, so I started some idea and searched in Brackeys how to do what I didn’t knew, many times copying full scripts and changing them to my necessity, thankfully C# it’s quite similar to TypeScript so the change wasn’t huge.

After a while I found out that I needed other sources of information if I wanted to be more than just a copy of Brackeys tutorials, in this process I followed Unity Learning Path and found many other amazing YouTube channels full of amazing creators who would teach you how to make almost anything you needed.

### First projects in Unity

The first idea I had was to make a “simpler” mobile game, it would be a 3D game about finding objects, different foods that you would have to drag to your digital pet in a given time. The idea seemed fun and simple in my mind but the 3D dragging mechanics, make that the objects were impossible to drag out of the screen and mobile specifics materials and performance issues were too advanced to me and ended in a pool of bugs too difficult to solve at the time I had. In the end the SCOPE of the game was again too big since I had to learn too many new things in order to make the game in a reasonable time.

I decided to take some time to learn more about the engine and prepare the bases for the types of games I wanted to make, during this time I learned about the importance of making a prototype to test mechanics and see if your game was fun before investing too much time in it, and so I decided to make a bunch of small prototypes, just single scenes where I tested features I found interesting, tried out assets and effects and learned new things without the pressure of making a game out of it or adapting it to the game I was working on. I tried to do at least one hour a day of this and after a few months I felt confident enough to start another idea I had.

![My game Zablek’s Path in the Unity Editor.](https://miro.medium.com/v2/resize:fit:720/format:webp/1*wA4zqw8AcU7hg4emyBKxvw.png)

This would be a 2D metroidvania inspired in many classics like Hollow Knight, Salt and Sanctuary and Feudal Alloy, of course my idea was to make something way smaller with just a few levels. The idea is about a young demon whose family gets killed by the human hero and decides to get revenge, the game would give the player moral decisions that would affect the demon’s skills and game end.

![Sword attack effect.](https://miro.medium.com/v2/resize:fit:720/format:webp/1*pqPO5ulaSZl5xNwIlPCOnA.gif)

I started working on it on February of 2023 and in a couple of months I already had many of the more important features working, I had skeletal animations, I had an inventory, I had a working UI with stats about the player I had a saving system that saved the data into a binary file, the player had items and equipment that changed the demons stats and appearance without affecting the animations, I had a mission system, rewards system, basic economy, npc and enemies, and even a couple of levels, I started adding post-processing to the scenes and visual effects since I wanted to have a good working scene to then extend that into more scenes. Everything was going really well and fast. Until, “content happened”.

Even when I really like to draw and paint I am definitely not an artist, so the art was a huge burden in the creation of this game every character, every item, every icon in the UI had to be hand drawn by me, even when I decided to use several methods to save time, like skeletal animations instead of frame by frame animation, making the characters by parts so in game I could change parts and create various characters with the same parts, using free assets for backgrounds etc, the amount of things I had to draw, import, rig and animate kept growing and growing. I couldn’t hire an artist or buy assets since that is not available in my country, so as a solo indie developer I had to do everything. Again SCOPE was an issue.

Now, I decided to don’t abandon this game, since I really love the genre and I’ am really pleased with what I have done and I think that with more time it’s something I really can develop, but I decided to put it to a pause until I have the TIME or resources to continue it.

### My actual project

I decided to make a very small Bullet Hell, the player would only need to move to avoid bullets and attack the enemies, I would make 5 different enemy types, and a final boss after 5 levels, a very short game! Minimal simple art and sounds. This would make it way easier to actually finish it.

So to make things more fun I decided to challenge myself and finish this game in one month, from beginning to publishing it in itch.io.

So I started the game and then the same day there was a huge blackout and I didn’t had electricity for the entire day …

Well, I am not ready for game jams yet, but I almost have the prototype finished now.

I have player movement, enemies with different behaviors and attacks, procedural level generation, pathfinding, and a simple UI.

![My bullet hell game prototype](https://miro.medium.com/v2/resize:fit:720/format:webp/1*hBsMd95DAR0n62d7YOL3Mg.png)

This time does seems like I’ll be able to do it with the free time I have. And playing it, at least to me is really fun.

### What I’ve learned

- MAKING GAMES TAKES TIME, a lot of time, sometimes more than what you can put to it or more than what you can stay motivated.
- You need to really reduce the SCOPE of the game and really think about it before even starting the prototype.
- Reduce the idea to one single main mechanic to ensure that you can do it in the desired time.
- The art and sounds takes a lot of time so before starting it is necessary to make sure that the art quality you are able to produce in a quick enough time is going to match the game style you are making.
- Create a prototype and test that your idea is FUN before even starting adding more mechanics and art, you can use simple shapes for this.
- Use assets, adapt them to your project, art, sounds, scripts and tools, you don’t need to reinvent the wheel.
- It is a good idea to finish some really small games before thinking about making a “serious” bigger games to learn to SCOPE properly.
- Unity learning path it’s amazing, it teaches you all the basics you need to understand almost all the tutorials and engine related concepts.
- DON’T GIVE UP! “Making games makes making more games easier”, with each game I have intended to do I have ended up with a bunch of useful scripts, assets and tools that I can reuse and adapt for my next games and make development faster. Which is really cool.

### Amazing sources

- Essential: [Brackeys](https://www.youtube.com/@Brackeys)
- 2D and general development: [Blackthornprod](https://www.youtube.com/@Blackthornprod) & [Jonas Tyroller](https://www.youtube.com/@JonasTyroller)
- Clean code and good development practices : [Code Monkey](https://www.youtube.com/@CodeMonkeyUnity)
- Advanced development and “coding adventures”: [Sebastian Lague](https://www.youtube.com/@SebastianLague)
- Game Design : [Game Maker’s Toolkit](https://www.youtube.com/@GMTK)
- Business side and publishing : [Thomas Brush](https://www.youtube.com/@thomasbrush) & [Game Dev Unlocked](https://www.youtube.com/@DavidWehleGames)