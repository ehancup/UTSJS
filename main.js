class pendidikan {
    constructor (nama, kelas, jurusan, jenjang) {
        this.nama = nama;
        this.kelas = kelas;
        this.jurusan= jurusan;
        this.jenjang = jenjang;
        this.lulus = tes => console.log(`selamat, ananda ${this.nama} tlah menyelesaikan ${tes} dengan baik`);
    }
}

let sekolah = new pendidikan('raihan yusuf', '10', 'rpl', 'SMK');
console.table(sekolah)
console.log(sekolah.lulus('PTS'));

let hte = document.querySelector('.tex');


let tex = () => {
    
    hte.innerHTML = 'Beshasil !!!'
}

let texdb = () => {
    hte.innerHTML = 'Tombol di klik 2 kali'
}

let rpl = document.querySelector('.rpl');
let boton = document.querySelector('.boton');

rpl.style.color = 'green';

boton.addEventListener('mousemove', () => {
    rpl.style.color = 'red';
    rpl.innerHTML = 'X RPL merah !!!'
})
boton.addEventListener('mouseout', () => {
    rpl.style.color = 'green';
    rpl.innerHTML = 'X RPL hijau !!!'
})


let body = document.querySelector('#body')

let boton2 = document.querySelector('.boton2');

boton2.addEventListener('click',() => {
    body.remove()
})