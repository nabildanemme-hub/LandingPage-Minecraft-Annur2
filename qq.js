// script.js
function copyIP() {
    // Sesuaikan IP dan Port ini
    const ip = "play.annur2mc.com";
    const port = "19132";
    const fullAddress = ip + ":" + port;

    navigator.clipboard.writeText(fullAddress).then(() => {
        // Notifikasi ala-ala pop up simpel
        alert("Mantap! IP & Port berhasil disalin: " + fullAddress);
    }).catch(err => {
        alert("Yah, gagal menyalin teks. Silakan copy manual ya.");
    });
}