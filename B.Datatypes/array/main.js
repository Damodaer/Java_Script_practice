const heading = document.getElementById("heading");

// let arr1 = [];
// console.log(arr1)

// let arr2 = new Array()
// console.log(arr2)

// let arr3 = Array()
// console.log(arr2)

// let str = 'ashok'
// let num = 5
// let bool = false

// console.log(Array.isArray(arr1))
// console.log(Array.isArray(arr2))
// console.log(Array.isArray(arr3))
// console.log(Array.isArray(str))
// console.log(Array.isArray(num))
// console.log(Array.isArray(bool))

// console.log(typeof arr1)
// console.log(typeof arr2)
// console.log(typeof arr3)

// let arr = [];
// let num = 1;
// let obj = {};
// let fn = function () {};
// let str = 'string 1'
// let bool = true

// console.log(arr.length); //0
// console.log(arr instanceof Array);
// console.log(arr instanceof Object);
// console.log(obj instanceof Object);
// console.log(fn instanceof Function); //true
// console.log(fn instanceof Object); //true
// console.log(num instanceof Number);
// console.log(str instanceof String)//false
// console.log(str instanceof Object)//false
// console.log(bool instanceof Object)//false
// console.log(bool instanceof Boolean)//false

// console.log(null instanceof Object)
// console.log(undefined instanceof Object)
// console.log(typeof null)
// console.log(typeof undefined)

/* methods and properties */
// let obj = {
//     name:'ashok sahu',//property
//     function(){}//method
// }

// let obj1 = new Object()

// console.log(typeof obj)
// console.log(typeof obj1)

// let arr = [];
// let arr1 = {};
// console.log(Array.isArray(arr))
// console.log(_.isArray(arr))
// console.log(Array.isArray(arr1))

// console.log(arr.length)
// console.log(arr)
// console.log(arr.push('ashok'))
// console.log(arr)
// console.log(arr.length)
// console.log(arr.push('sahu'))
// console.log(arr)
// console.log(arr.length)

// console.log(arr.length)
// console.log(arr)
// console.log(arr.unshift('ashok'))
// console.log(arr)
// console.log(arr.length)
// console.log(arr.unshift('sahu'))
// console.log(arr)
// console.log(arr.length)

// let arr2 = [1,2,3,4,5];
// console.log(arr2.length)
// console.log(arr2)
// console.log(arr2.shift())
// console.log(arr2)
// console.log(arr2.length)
// console.log(arr2.shift())
// console.log(arr2)
// console.log(arr2.length)

// console.log(arr2.length)
// console.log(arr2)
// console.log(arr2.pop())
// console.log(arr2)
// console.log(arr2.length)
// console.log(arr2.pop())
// console.log(arr2)
// console.log(arr2.length)


// let arr3 = ['mankada','kukura','ghusuri','damo','gai','panda'];
// console.log(arr3[0])
// console.log(arr3[1])
// console.log(arr3[2])
// console.log(arr3[3])
// console.log(arr3[4])
// console.log(arr3[5])

// console.log(arr3[-1])
// console.log(arr3[-2])
// console.log(arr3[-3])
// console.log(arr3[-4])
// console.log(arr3[-5])
// console.log(arr3[-6])

// console.log(arr3.includes())//false
// console.log(arr3.includes('kukura'))//true
// console.log(arr3.includes('mankada'))//true
// console.log(arr3.includes('jhipiti'))//false

// console.log(arr3.at(1))
// console.log(arr3.at(7))//undefined


// let arr = [1,2,3,4,5,6,7,8]
// console.log(arr.includes(1))
// console.log(arr.includes(2))
// console.log(arr.includes(00000002))
// console.log(arr.includes('x'))
// console.log(arr.includes(+'0'))
// console.log(arr.includes(+'1'))

// console.log(arr)
// console.log(arr.fill(8))

// const arr8 = [6, 3, 5, 9, 1, 2];
// console.log(arr8)

// console.log(arr8.sort())
// console.log(arr8.sort(function(a,b){
//     return b-a
// }))
// console.log(arr8.sort(function(a,b){
//     return a-b
// }))

// let arr2 = [
//   {
//     id: 1,
//     name: "ashok",
//     age: 28,
//   },
//   {
//     id: 2,
//     name: "kanha",
//     age: 29,
//   },
//   {
//     id: 3,
//     name: "hrushikesh",
//     age: 30,
//   },
// ];

// console.log({ arr2 });

// console.log(arr2.map((value, index, arr) => arr));
// console.log(
//   arr2.map(function (value, index, arr) {
//     return value.age;
//   })
// );

// function callback(value, index, arr) {
//   return value.age;
// }
// console.log(arr2.map(callback));

// let items = [
//   {
//     img: "no image",
//     Totalrating: 2.7,
//     ratings: 11,
//     reviews: 3,
//     price: 27000,
//     specifications: {
//       panel_type: "IPS Panel",
//       Screen_resolution: "quad HD",
//       brightness: 300,
//       response_time: "4ms",
//       refresh_rate: "75hz",
//       warrenty: "3 years",
//     },
//   },
//   {
//     img: "no image",
//     Totalrating: 4,
//     ratings: 11,
//     reviews: 3,
//     price: 27500,
//     specifications: {
//       panel_type: "IPS Panel",
//       Screen_resolution: "quad HD",
//       brightness: 300,
//       response_time: "4ms",
//       refresh_rate: "75hz",
//       warrenty: "3 years",
//     },
//   },
//   {
//     img: "no image",
//     Totalrating: 4.1,
//     ratings: 11,
//     reviews: 3,
//     price: 28000,
//     specifications: {
//       panel_type: "IPS Panel",
//       Screen_resolution: "quad HD",
//       brightness: 300,
//       response_time: "4ms",
//       refresh_rate: "75hz",
//       warrenty: "3 years",
//     },
//   },
// ];

// console.log({ items });
// // console.log(items.filter((elm)=>{
// //     return elm.Totalrating < 3
// // }))
// console.log(
//   items.filter((elm) => {
//     return elm.price > 27000;
//   })
// );

// console.log(
//   _.filter(items, (elm) => {
//     return elm.price > 27000;
//   })
// );

// console.log(
//   _.filter(items, (elm) => {
//     return elm.Totalrating < 3;
//   })
// );