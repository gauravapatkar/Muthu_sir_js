let str = "Javascript";
console.log(str.length);
console.log(str[0]);
let g = "";
for (let i = 0; i < str.length; i++) {
  //   g = g + str[i];
  console.log(str[i]);
}
// let arr = Array.from(g);
// console.log(arr);
// for (let v of str) console.log(v);
// for (let i in str) console.log(i);

let r1 = str.slice(0, 4);
console.log(str);
console.log(r1);

let r2 = str.substring(5);
console.log(str);
console.log(r2);

let r3 = str.substr(5, 2);
console.log(r3);
console.log(str);

let st = "this is Javascript class and we learn Javascript";
let r4 = st.replace("Javascript", "React");
console.log(r4);

let r5 = st.replaceAll("Javascript", "react");
console.log(r5);

let s = "PYTHON";
let r6 = s.toLowerCase();
console.log(r6);

let v = "Java";
let r7 = v.toUpperCase();
console.log(r7);

let x = "           hellow world           ";
let r8 = x.trim();
console.log(x);
console.log(r8);
console.log(x.trimStart());
console.log(x.trimEnd());

let r9 = str.split("a");
console.log(r9);

// let str = "Javascript";

let y = "hellow world";
let r10 = y.split("");
console.log(r10);

let str2 = "javascript";
let r = str2.split("");
r.reverse();
let res = r.join("");
console.log(res);

let res1 = str.split("").reverse().join("");
console.log(res1);

let r11 = str.split("").reduceRight((acc, cv) => acc + cv, "");
console.log(r11);

// let str = "Javascript";
let r12 = str.charAt(3);
console.log(r12);

let r13 = str.charCodeAt(3);
console.log(r13);

console.log(str.includes("i"));
console.log(str.includes("a", 4));
