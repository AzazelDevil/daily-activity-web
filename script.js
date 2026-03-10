const API_URL="https://script.google.com/macros/s/AKfycbxJICpUZxKb48vySU3mP-uo0nvhgzrYsQDHWJe82maDVDNO4EO9O2sH-A_2Zf4iL3bq/exec"



function toast(msg){

let t=document.getElementById("toast")

t.innerText=msg
t.style.display="block"

setTimeout(()=>{

t.style.display="none"

},2000)

}



function tambahData(){

let data={

tanggal:document.getElementById("tanggal").value,
kegiatan:document.getElementById("kegiatan").value,
lokasi:document.getElementById("lokasi").value

}

fetch(API_URL,{

method:"POST",
body:JSON.stringify(data)

})
.then(r=>r.json())
.then(res=>{

toast("Data berhasil disimpan")

loadData()

})

}



function loadData(){

fetch(API_URL)
.then(r=>r.json())
.then(data=>{

let table=""

let today=0
let week=0
let month=0

let now=new Date()

data.forEach(d=>{

let tgl=new Date(d.tanggal)

if(tgl.toDateString()==now.toDateString()) today++

if(tgl.getMonth()==now.getMonth()) month++

let diff=(now - tgl)/(1000*60*60*24)

if(diff<=7) week++


table+=`

<tr>

<td>${d.tanggal}</td>
<td>${d.kegiatan}</td>
<td>${d.lokasi}</td>

<td>
<button onclick="hapus('${d.id}')">Delete</button>
</td>

</tr>

`

})

document.getElementById("tableData").innerHTML=table

document.getElementById("today").innerText=today
document.getElementById("week").innerText=week
document.getElementById("month").innerText=month

})

}



function hapus(id){

fetch(API_URL,{

method:"DELETE",
body:JSON.stringify({id:id})

})
.then(()=>{

toast("Data dihapus")

loadData()

})

}



loadData()
