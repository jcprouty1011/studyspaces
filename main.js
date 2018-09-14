const query = window.location.search.substring(1);

const initialScript = document.getElementById("handlebars-script").innerHTML;
const template = Handlebars.compile(initialScript);

const context = {
  barker: {
    spaceName: "Barker Library",
    spacePath: "./barker.jpg",
    spaceInfo: "Built into and around MIT's iconic dome, Barker Library hosts great work-spaces. The interior of the dome is filled with power-equipped desks and many comfortable chairs. My personal favorite places to go, however, are the nooks hiding desks among the stacks on the higher floors. This library can become pretty crowded around exam time but for most of the year has plenty of space available."
  },
  hayden: {
    spaceName: "Hayden Library",
    spacePath: "./hayden.jpg",
    spaceInfo: "Hayden Library offers a lovely view of the Charles River with comfortable chairs by wide windows, along with many long tables, so that there is always space available. The greenery right outside gives the place a peaceful mood, perfect for both studying and curling up with a book. Being the humanities library, it's also a great place to pick up a book to enjoy on the way home from a work session."
  },
  stratton: {
    spaceName: "Stratton Student Center",
    spacePath: "./stratton.jpg",
    spaceInfo: "MIT's student center is generally bustling with activity on school days, though on weekends and in the summer it quiets down. Though it doesn't have the accommadations of the libraries, such as desks and plentiful outlets, it has lots of food options and serves as a great place to pause and get some work done while transitioning between different tasks. The fifth floor offers a quieter commonspace, while the lower floors allow one to feel a part of the buzz of activity and discussion happening at the institute."
  },
  macgregor: {
    spaceName: "MacGregor",
    spacePath: "./macgregor.jpg",
    spaceInfo: "In my current residence I'm blessed with a great view of the Charles right in front of my desk and a dual-moniter setup, which makes programming and design tasks more efficient. The building has common study spaces for when I need a change of pace without venturing far from home as well. "
  },
  armory: {
    spaceName: "Arts at the Armory Cafe",
    spacePath: "./armory.jpg",
    spaceInfo: "I tend not to rely on cafes as workspaces, as seating availability can be unpredictable. A bit off the beaten path in Somerville, this cafe has delighted me with ample space and a cute interior. It's a great place to work while grabbing coffee and a bite to eat, and I must confess there's a bit of romantic appeal to working in a building full of artists engaged in a variety of different projects."
  },
};

const compiledHTML = template(context[query]);
document.getElementById("insert-handlebars-output").innerHTML = compiledHTML;
