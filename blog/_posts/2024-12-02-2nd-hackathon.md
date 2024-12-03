---
 title: "A look back at the 2nd ROOT Hackathon: Python, Docs, Tutorials"
 layout: archive
 author: Monica Dessole
---


You may have heard about [the second ROOT Hackathon](https://indico.cern.ch/event/1463778/), that took place at IdeaSquare, CERN, last week! This in-person event was held on November 25-27. After a few days of recovering our energies, it's time to look back at this vibrant three days event, so let's go. 

<center>
    <img
    src="{{'/assets/images/2nd-hackathon-intro.jpg' | relative_url}}"
    alt="Hackathon opening."
    style="width: 70%" width="1600" height="749" />
</center>

### The heart: participants

This second hackathon vibrated with positive energy, fueled by a motivated group of 12 ROOT team members and 25 participants, many of which from CERN (thanks!). A standout achievement was our strides towards networking and team building, resulting in participation of people from across Europe (Italy, Czech republic, Spain...) and beyond (one participant from Qatar!), regardless of their gender, age, or background. The attendees could join three teams with different working topics, namely Python interfaces, Python Documentation and Tutorial modernisation, each guided by two coordinators from the ROOT team. This event indeed required a bit of organising and planning to put participants in condition to give their best. However, definitively worth the investment, we got a lot out of this event! 

### The venue: IdeaSquare

The hackathon took place at [IdeaSquare](https://ideasquare.cern), CERN's innovation space to foster cross-connectivity and to ideate new solutions. 
IdeaSquare aligns with and supports CERN’s mission. Its specific focus is on offering a platform for early-stage collaboration with CERN scientists. IdeaSquare offers a fully equipped kitchen and a working space consisting of 700 square meters, split into five meeting rooms in glass containers and two meeting rooms in its famous double-decker London bus. This unique setting added an unparalleled charm to our coding marathon, infusing our work with inspiration and a sense of collaboration.

### The core: projects

The core of this hackathon lies in the projects themselves. For this edition, we identified three main topics: Python interface extention, Python documentation enhancement and Tutorial modernisation. Planning, ambitions and results are publicly visible and organised in a succinct [table on GH](https://github.com/orgs/root-project/projects/18).

Modernising ROOT's **Tutorials** is indeed an intense activity: it includes  reviewing 25+ years of accumulated knowledge in the form of code examples! Here
lots of thinking was required: what's the best way to do things? The team worked on creating a new structure to make the examples more findable and to prominently present the new features, leaving the “classic” ones in the background.
The amount of work was massive and hard to finish in 3 days, but a new, modern, clear and beautiful way to present ROOT's code examples is coming soon!

Extending ROOT's **Python interface** requires advanced programming skills in action. The team worked to provide prototypes for numpy-style histogram computation (~50% of the UHI protocol for histograms is now available) and random number generation. In addition, RNTuples are now writeable from Python! This is enough material for a new round of tutorial modernisation campaign showing the new features and fostering a positive synergy between hackathon groups.

Last but not least, **Python documentation enhancement** was focused on highlighting python documentation within doxygen and providing guidelines for developers about contributing to ROOT's Pythonic documentation. The team greatly tackled an ambitious initial set of goals, almost all achieved or in progress. ROOT has already today a much better documentation thanks to these efforts!

<center>
    <img
    src="{{'/assets/images/2nd-hackathon-tutorials.jpg' | relative_url}}"
    alt="Tutorial team."
    style="width: 30%" width="1600" height="749" />
    <img
    src="{{'/assets/images/2nd-hackathon-python-docs.jpg' | relative_url}}"
    alt="Python docs team."
    style="width: 30%" width="1600" height="749" />
        <img
    src="{{'/assets/images/2nd-hackathon-pythonization.jpg' | relative_url}}"
    alt="Pythonization team."
    style="width: 30%" width="1600" height="749" />
</center>

Overall, the teams made a great job: we had [65 PRs](https://github.com/root-project/root/pulls?q=is%3Aopen+is%3Apr+label%3A%222nd+Hackathon%22) submitted to the ROOT repo, [7 PRs](https://github.com/root-project/web/pulls?q=is%3Aopen+is%3Apr+label%3A%222nd+Hackathon%22) to the ROOT website repo! This impressive amount of work kept our CI (66 Linux nodes, 8 Mac Mini, 8 Windows nodes) constantly busy, night and day.
In addition to the coding fun, home cooked italian lunches and unlimited coffee were be available! Moreover, Tuesday evening was dedicated to our social dinner in La Meyrinoise restaurant, located close to CERN.

<center>
    <img
    src="{{'/assets/images/2nd-hackathon-lunch.jpg' | relative_url}}"
    alt="Lunch."
    style="width: 45%" width="1600" height="749" />
    <img
    src="{{'/assets/images/2nd-hackathon-social-dinner.jpg' | relative_url}}"
    alt="Social dinner."
    style="width: 45%" width="1600" height="749" />
</center>

### Conclusions/What's next?

In closing, thank you to everyone who contributed their time, expertise, and passion to the 2nd ROOT Hackathon. From this event, ROOT emerges stronger, easier to use and even more powerful! Stay tuned for updates on this website and on the [ROOT forum](https://root-forum.cern.ch) as we continue to foster the ROOT library for innovation and collaboration. Here’s to continuing this journey together in 2025!

<center>
    <img
    src="{{'/assets/images/2nd-hackathon-connecting-curious-minds.jpg' | relative_url}}"
    alt="Connecting curious minds."
    style="width: 70%" width="1600" height="749" />
</center>
