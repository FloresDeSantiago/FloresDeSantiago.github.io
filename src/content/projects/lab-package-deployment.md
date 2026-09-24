---
title: Lab Management and Package Deployment
year: 2023
order: 1
tags: [Chocolatey, Ansible, Windows Server, Virtualization]
summary: Automated software installs for a Windows computer lab with Chocolatey, Ansible and Windows Server 2022.
---

During my IT practicum, I had the opportunity to intern under the guidance of CSUDH's system administrator. The focus of my semester-length project was to create and deploy software packages using Chocolatey for the Windows computer lab, aiming to make software installation for various classes more efficient. To set the stage for this, I was provided with a Windows computer to run virtual machines, which was crucial for creating a prototype test environment mirroring the lab conditions. Initially, I faced challenges with Virtual Box, but switching to VMware resolved the issues allowing me to move forward with the project. This led to nested virtualization by installing Windows Subsystem for Linux on the Windows Server, which allowed the installation of Ansible for managing commands to the Windows machine using Red Hat Enterprise Linux. Additionally, this setup facilitated the automation of the Chocolatey Repository needed to host the internally-made packages. Although implementing SSL certificates for secure communication presented significant challenges and delays, it provided invaluable lessons in troubleshooting and problem-solving. Overall, this experience tremendously enhanced my skills in package management, virtualization, and configuration management tools like Ansible, while also deepening my understanding of network security concepts. The internship was a challenging yet rewarding learning journey, equipping me with essential skills and knowledge crucial in the ever-evolving field of information technology.

## Virtual Network Setup

![Network diagram: the internet connects through a pfSense firewall to a switch, which links a Red Hat Enterprise Linux machine, a Windows Server 2022 machine and four Windows 11 nodes](/projects/lab-package-deployment/network.png)
