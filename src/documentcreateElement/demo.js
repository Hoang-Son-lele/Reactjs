// 1.document.createElement()
// 2. document.body.appendChild()
// 3. console.dir()
// 4. innerText,id,className,style

//vd1 thêm thẻ h1

const h1 = document.createElement("h1");
h1.innerText = "Hello World";
document.body.appendChild(h1);

// thêm id cho h1 
h1.id = "heading";
console.log(h1);
// thêm class

h1.className = "test-class"

// thêm style

h1.style.color = "red";

