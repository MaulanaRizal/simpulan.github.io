// Deklarasi variable

let commentList = [];
let commentShow = document.querySelector("#comment-list")

const date  = new Date();
const hari   = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu']
const bulan  = ['Januari','Februari','Maret','April','Maret','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember']
const sendButton = document.querySelector('#send')
// Mengambil format Hari, tanggal Bulan Tahun
const time  = hari[date.getDay()]+', '+bulan[date.getMonth()]+' '+date.getFullYear();


// fungsi untuk menampilkan comment yang sudah disimpan dalam object commentList
function renderComment() {    
    for(i = 0; i < commentList.length; i++ ){
        let row = document.createElement('div');
        row.innerHTML = "<img class='comment-img' src='assets/image/users/avatar.png' alt='sender image'>";
        row.innerHTML += "<div class='comment-content'><span class='comment-sender'>"+commentList[i].sender+"</span><span class='comment-time'>"+commentList[i].time+"</span><p>"+commentList[i].comment+"</p></div>";
        console.log(commentList[i]);
        commentShow.appendChild(row);
    }
}

// fungsi unguk menghapus text pada form komentar
function clearInput(){
    document.querySelector('#sender').value = "";
    document.querySelector('#comment').value= '';
}

// Memberikan Event ketika tomoel kirim
sendButton.addEventListener('click',function(){
    // deklarasi objek bernama newComment untuk di tambahkan kedalam objek array commentList
    const newComment= { 
        sender  : document.querySelector('#sender').value,
        time    : time,
        comment : document.querySelector('#comment').value
    }

    if(commentList.length==0){
        //  Kondisi jika commentList kosong, maka objek newComment dimasukan ke index awal commentList
        commentList[0] = newComment;
    }else{
        // Jika kondisi commentList sudah memiliki isi maka Element comment-list dihapus lalu di tampilkan ulang bersama comment yang baeu
        commentShow.innerHTML = '';
        commentList.unshift(newComment)
    }
    clearInput();
    renderComment();
});
renderComment();