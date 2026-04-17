// script.js
function copyIP() {
    // Sesuaikan IP dan Port ini
    const ip = "basic-1.alstore.space";
    const port = "25643";
    const fullAddress = ip + ":" + port;

    navigator.clipboard.writeText(fullAddress).then(() => {
        // Notifikasi ala-ala pop up simpel
        alert("Mantap! IP & Port berhasil disalin: " + fullAddress);
    }).catch(err => {
        alert("Yah, gagal menyalin teks. Silakan copy manual ya.");
    });
}
