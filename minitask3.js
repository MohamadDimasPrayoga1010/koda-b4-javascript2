const obj = {
  str: [
    "test1",
    "test2",
    "test3",
    [
      "test4",
      [
        "test5",
        "test6",

        {
          man: [
            {
              the: {
                name: {
                  of: {
                    us: "Koda",
                  },
                },
              },
            },
          ],
        },
      ],
    ],
  ],
};


const {str: [_,__,___,[_____,[______,_______,{man:[{the:{name:{of:{us : name}}}}]}]]]} = obj
console.log(name)