//informasi tentang diri kita
//descruc painting, education name [0]

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
}

const {skills: [_,skill] } = profile
const {education : [{name}]} = profile
console.log(skill)
console.log(name)
