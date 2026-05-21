const API_HOST = 'http://127.0.0.1:8000/api'

function kirimAsesmen(){
    return null
}

function statsAntrian(){
    const apiPath = API_HOST + '/antrian'
    const total = document.getElementById('total-antrian')
    const menunggu = document.getElementById('menunggu')

    fetch(apiPath).then(res => res.json()).then(
        data => data.statistik).then(stats => {
            total.innerText = stats.total
            menunggu.innerText = stats.menunggu
    })
}

function detailAntrian(){
    const nama = document.getElementById('nama-dipanggil')
    const nomorAntrian = document.getElementById('nomor-dipanggil')

    const apiPath = API_HOST + '/antrian'
    fetch(apiPath).then(res => res.json()).then(
        data => data.data["pemeriksaan_awal"][0]).then(antrian => {
            console.log(antrian)
            nomorAntrian.innerText = antrian.kode_antrian
            nama.innerText = antrian.pendaftaran["pasien"]["nama_lengkap"]})
}

statsAntrian()
detailAntrian()