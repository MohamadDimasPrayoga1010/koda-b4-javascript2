const bio = {
  name: "Mohamad Dimas Prayoga",
  age: 23,
};

const extraInfo = {
  skills: ["Web Programing", "Painting"],
  education: [
    {
      name: "SMP 1 Denpasar",
      year: 2012,
    },
  ],
};

const profile = {
  ...bio,
  ...extraInfo,
};

console.log(profile.skills[1]);
