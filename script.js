
const url = "PASTE_URL_WEB_APP_DISINI"

document.getElementById("formKegiatan")
.addEventListener("submit",function(e){

e.preventDefault()

let data = {

tanggal: document.getElementById("tanggal").value,
kegiatan: document.getElementById("kegiatan").value,
lokasi: document.getElementById("lokasi").value,
keterangan: document.getElementById("keterangan").value

}

fetch(url,{
method:"POST",
body:JSON.stringify(data)
})
.then(res=>res.json())
.then(res=>{

document.getElementById("notif").innerHTML="Data berhasil tersimpan"

document.getElementById("formKegiatan").reset()

})

})
