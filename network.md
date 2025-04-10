---
title: Diode Network
layout: page
class: header--white
permalink: /products/network/
redirect_from:
- /products/diode-network/
- /solutions/network/


### Hero
hero:
  animated: true
  class: hero--rounded
  heading: Build on top&nbsp;of&nbsp;Diode Network
  subheading: Expand your team’s security perimeter
  buttons:
  - title: SEE THE NETWORK
    url: "https://diodenetwork.io"
    target: _blank
  image: hero/network.webp


### Story: Security and Access.
story:
  animated: false
  class: story--dash
  title: Zero trust data fabric
  heading: Security and Access
  content: |
    The Diode Network is the world’s most advanced Smart Network. It is an open-source web3 communications network that combines the highest security with the best accessibility. And it’s available off-the-shelf as a service to the world.
  
    We believe the Diode Network is the beginning of great things for the future of the Internet.
  buttons:
  - title: See how teams are using Diode
    class: btn--blank btn--arrow
    url: "/usecases/"
  image:
    src: story/network-full.webp
    alt: Network
    class: network-full


### Features
features:
  animated: false
  list:
  - title: Automated Security
    content: |
      The Diode Network uses hardened smart contracts running on a blockchain network to automate provisioning and to guarantee security. This means you can use it like a SaaS product and operate your application like an air-gapped security environment.

  - title: Use for
    content: |
      Custom apps, private networks, fleet sponsorship
  
      Use the public network off the shelf, extend with your own relay node, or connect with us about private network options.
    buttons:
    - title: SEE THE NETWORK
      url: "https://diodenetwork.io"
      target: _blank
    - title: RUN A NODE
      url: "https://network.docs.diode.io/docs/"
      target: _blank
    - title: HOW IT WORKS
      class: btn--blank btn--arrow
      url: "/how-it-works/"

  - title: Your Own Relay Node
    content: |
      You can host your own Diode Network relay node (aka PoP Node) to expand the reach of the Diode Network. As a node host, you can also direct your assets to prioritize the use of your own nodes to further isolate your traffic, reduce your cost, and to integrate with enterprise tools.

  -

  - title: Private Networks
    content: |
      Connect with us to learn about how you can deploy and use a fully private Diode Network to enable your Enterprise.


### Box: Our solutions
solutions:
  animated: false
  class: box--orange
  title: No third parties means Zero&nbsp;Leakage&trade;
  heading: Our products
  solutions:
  - title: App
    icon: "icons/app.svg"
    content: Diode Collab&trade; is for your team. Whether replacing a leaky chat app, sharing files E2EE, securing a server dashboard, or deploying advanced OT assets, our app unlocks the power of Diode for people.
    button:
      title: Find Out More
      class: "btn--blank btn--arrow"
      url: "/products/collab/"
  - title: CLI
    icon: "icons/cli.svg"
    content: The Diode CLI is a headless tool for OT, IT, and IoT devices. It can be used stand-alone to secure autonomous systems, and/or in concert with team members using Diode Collab.
    button:
      title: Find Out More
      class: "btn--blank btn--arrow"
      url: "/products/cli/"
  - title: Vault
    icon: "icons/vault.svg"
    content: The Diode Vault is an autonomous tool that combines both App and CLI features in a small box or cloud appliance. 24-7 availability, backup, and geo-access for your team and assets.
    button:
      title: Find Out More
      class: "btn--blank btn--arrow"
      url: "/products/vault/"

---

{%- include hero.liquid -%}

{%- include story.liquid -%}

{%- include features.liquid -%}

{%- include box.liquid data="solutions" -%}
