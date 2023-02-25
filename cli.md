---
layout: new
class: header--white
permalink: /solutions/cli/
title: Diode CLI

### Hero
hero:
  class: hero--rounded
  heading: Diode <br>CLI.
  subheading: Manage your IT/OT device access and assets.
  buttons:
  - title: DOWNLOAD CLI
    url: "/download/"
  image: hero/cli.webp


### Story: For assets
story:
  title: Precise global access
  heading: For assets.
  content: |
    The Diode CLI makes your IT, OT, or IoT assets both smart and secure. Every CLI-enabled asset is globally accessible to authorized parties and is 256-bit E2EE secured.
  
    The CLI uses less resources than a VPN, requires no managed server infrastructure (VPN cloud), and is more secure - it brings the power of the Diode Network to your edge devices.
  buttons:
  - title: See How The Network Works
    class: btn--blank
    url: "#"
  image:
    src: story/cli.webp
    alt: "Network"


### Features
features:
  list:
  - title: Globally accessible
    content: |
      Every Diode client has a globally unique identifier that is used for security and routing. The Diode CLI “lights up” your device, making it accessible from anywhere in the world while securing it to only the resources you’ve authorized to access it. It becomes globally accessible while being more secure than a local network. 

  - title: Use for
    content: |
      IoT/OT data, SSH, Websites, Server Admin
  
      Connect, manage, collect, view, and administrate - everything you wish you could do with your IT and OT assets.
    buttons:
    - title: DOWNLOAD
      url: "/download/"
    - title: SCHEDULE A DEMO
      class: btn--blank btn--arrow
      url: "https://contactdiode.paperform.co/"
      target: _blank

  - title: Resource publication
    content: |
      Whether your asset is publishing an SSH port to an explicit DevOps allow-list, an IoT API in a zero trust data fabric, or a website to the world, the CLI makes it easy. Publishing a resource with the CLI allows you to isolate the rest of the system, saving IT time and resources that would otherwise be spent on system maintenance.

  -

  - title: Access management
    content: |
      Any Diode CLI client can publish a resource in private, protected, or public mode. By using the protected mode, an ad hoc zero trust perimeter is created that contains the asset, and makes it easy to manage access to it on a group level. 


### Box: Our solutions
solutions:
  class: box--orange
  title: No third parties means Zero&nbsp;Leakage&trade;
  heading: Our solutions.
  solutions:
  - title: App
    icon: "icons/app.svg"
    content: The Diode App is for all your teams. Whether replacing a leaky chat app, sharing files E2EE, securing a simple dashboard, or deploying advanced OT assets, this app unlocks the power of Diode for people.
    button:
      label: Find Out More
      class: btn--blank
      url: "/solutions/app/"
  - title: Vault
    icon: "icons/vault.svg"
    content: The Diode Vault is a Diode hardware appliance that combines both the App features and the CLI features in a small box. 24-7 availability, backup, and geo-access for your team and assets.
    button:
      label: Find Out More
      class: btn--blank
      url: "/solutions/vault/"
  - title: Network
    icon: "icons/network.svg"
    content: The Diode Network is the world’s leading Smart Network - a new generation of zero trust software defined networks based on hardened blockchain technology. Think ad hoc E2EE perimeters.
    button:
      label: Find Out More
      class: btn--blank
      url: "/solutions/network/"

---

{%- include hero.liquid -%}

{%- include story.liquid -%}

{%- include features.liquid -%}

{%- include box.liquid data="solutions" -%}