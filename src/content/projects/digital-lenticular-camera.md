---
title: Digital Lenticular Camera
year: 2023
tags: [Hardware, Computer Vision, Python]
summary: A digital take on lenticular photography, built around a Raspberry Pi and four cameras.
---

This project explores the development of a digital lenticular camera, inspired by vintage film cameras like the Nimslo 3D and Nishika N8000. These film cameras use lenticular lenses to capture a parallax effect known as a "wigglegram," which takes simultaneous images from slightly different angles. The digital camera aims to replicate this effect using a Raspberry Pi and four cameras. It captures four pictures at once, which can be manipulated with python code in post-production to create a lenticular image. The project leverages the Raspberry Pi's processing power and involves both hardware assembly and software development for the project to work. The final goal is to provide an accessible, efficient tool for creating parallaxed images which merges old photographic techniques with modern digital technology.

![Four frames of the same scene captured at once by the camera array, numbered 1 to 4](/projects/digital-lenticular-camera/frames.png)

## 3D Models

![Technical drawing of the camera, model view 1](/projects/digital-lenticular-camera/model-1.png)
![Technical drawing of the camera, model view 2](/projects/digital-lenticular-camera/model-2.png)
![Technical drawing of the camera, model view 4](/projects/digital-lenticular-camera/model-4.png)
![Technical drawing of the camera, model view 3](/projects/digital-lenticular-camera/model-3.png)

## Wigglegram

![Animated wigglegram made from the four camera frames](/projects/digital-lenticular-camera/wigglegram.gif)

## Schematics

![System diagram: a Raspberry Pi connected to power, a shutter button, a four-camera array through a Pi HAT and an LCD screen, running a web server on a Wi-Fi hotspot that a browser on a user device connects to](/projects/digital-lenticular-camera/schematic.png)
