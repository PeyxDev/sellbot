const axios = require('axios');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./sellvpn.db');

async function deletessh(username, serverId) {
  console.log(`Deleting SSH account for ${username} on server ${serverId}`);
  
  if (/\s/.test(username) || /[^a-zA-Z0-9]/.test(username)) {
    return '❌ Username tidak valid. Mohon gunakan hanya huruf dan angka tanpa spasi.';
  }

  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM Server WHERE id = ?', [serverId], (err, server) => {
      if (err) {
        console.error('Error fetching server:', err.message);
        return resolve('❌ Gagal: Server tidak ditemukan. Silakan coba lagi.');
      }

      if (!server) return resolve('❌ Gagal: Server tidak ditemukan. Silakan coba lagi.');

      const domain = server.domain;
      const auth = server.auth;
      const param = `:5888/deletessh?user=${username}&auth=${auth}`;
      const url = `http://${domain}${param}`;
      axios.get(url)
        .then(response => {
          if (response.data.status === "success") {
            const msg = `
────────────────────
❌ *DELETE SSH ACCOUNT* ❌
────────────────────
┌───────────────────
│ Username: \`${username}\`
└───────────────────
✅ *Akun berhasil dihapus* 
*Terima kasih telah menggunakan layanan kami*
`;
            console.log('SSH account deleted successfully');
            return resolve(msg);
          } else {
            console.log('Error deleting SSH account');
            return resolve(`❌ Gagal: ${response.data.message}`);
          }
        })
        .catch(error => {
          console.error('Error saat menghapus SSH:', error);
          return resolve('❌ Gagal menghapus SSH. Silakan coba lagi nanti.');
        });
    });
  });
}

async function deletevmess(username, serverId) {
  console.log(`Deleting VMess account for ${username} on server ${serverId}`);
  
  if (/\s/.test(username) || /[^a-zA-Z0-9]/.test(username)) {
    return '❌ Username tidak valid. Mohon gunakan hanya huruf dan angka tanpa spasi.';
  }

  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM Server WHERE id = ?', [serverId], (err, server) => {
      if (err) {
        console.error('Error fetching server:', err.message);
        return resolve('❌ Gagal: Server tidak ditemukan. Silakan coba lagi.');
      }

      if (!server) return resolve('❌ Gagal: Server tidak ditemukan. Silakan coba lagi.');

      const domain = server.domain;
      const auth = server.auth;
      const param = `:5888/deletevmess?user=${username}&auth=${auth}`;
      const url = `http://${domain}${param}`;
      axios.get(url)
        .then(response => {
          if (response.data.status === "success") {
            const msg = `
─────────────────────
❌ *DELETE VMESS ACCOUNT* ❌
─────────────────────
┌────────────────────
│ Username: \`${username}\`
└────────────────────
✅ *Akun berhasil dihapus* 
*Terima kasih telah menggunakan layanan kami*
`;
            console.log('VMess account deleted successfully');
            return resolve(msg);
          } else {
            console.log('Error deleting VMess account');
            return resolve(`❌ Gagal: ${response.data.message}`);
          }
        })
        .catch(error => {
          console.error('Error saat menghapus VMess:', error);
          return resolve('❌ Gagal menghapus VMess. Silakan coba lagi nanti.');
        });
    });
  });
}

async function deletevless(username, serverId) {
  console.log(`Deleting VLess account for ${username} on server ${serverId}`);
  
  if (/\s/.test(username) || /[^a-zA-Z0-9]/.test(username)) {
    return '❌ Username tidak valid. Mohon gunakan hanya huruf dan angka tanpa spasi.';
  }

  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM Server WHERE id = ?', [serverId], (err, server) => {
      if (err) {
        console.error('Error fetching server:', err.message);
        return resolve('❌ Gagal: Server tidak ditemukan. Silakan coba lagi.');
      }

      if (!server) return resolve('❌ Gagal: Server tidak ditemukan. Silakan coba lagi.');

      const domain = server.domain;
      const auth = server.auth;
      const param = `:5888/deletevless?user=${username}&auth=${auth}`;
      const url = `http://${domain}${param}`;
      axios.get(url)
        .then(response => {
          if (response.data.status === "success") {
            const msg = `
─────────────────────
❌ *DELETE VLESS ACCOUNT* ❌
─────────────────────
┌────────────────────
│ Username: \`${username}\`
└────────────────────
✅ *Akun berhasil dihapus* 
*Terima kasih telah menggunakan layanan kami*
`;
            console.log('VLess account deleted successfully');
            return resolve(msg);
          } else {
            console.log('Error deleting VLess account');
            return resolve(`❌ Gagal: ${response.data.message}`);
          }
        })
        .catch(error => {
          console.error('Error saat menghapus VLess:', error);
          return resolve('❌ Gagal menghapus VLess. Silakan coba lagi nanti.');
        });
    });
  });
}

async function deletetrojan(username, serverId) {
  console.log(`Deleting Trojan account for ${username} on server ${serverId}`);
  
  if (/\s/.test(username) || /[^a-zA-Z0-9]/.test(username)) {
    return '❌ Username tidak valid. Mohon gunakan hanya huruf dan angka tanpa spasi.';
  }

  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM Server WHERE id = ?', [serverId], (err, server) => {
      if (err) {
        console.error('Error fetching server:', err.message);
        return resolve('❌ Gagal: Server tidak ditemukan. Silakan coba lagi.');
      }

      if (!server) return resolve('❌ Gagal: Server tidak ditemukan. Silakan coba lagi.');

      const domain = server.domain;
      const auth = server.auth;
      const param = `:5888/deletetrojan?user=${username}&auth=${auth}`;
      const url = `http://${domain}${param}`;
      axios.get(url)
        .then(response => {
          if (response.data.status === "success") {
            const msg = `
─────────────────────
❌ *DELETE TROJAN ACCOUNT* ❌
─────────────────────
┌────────────────────
│ Username: \`${username}\`
└────────────────────
✅ *Akun berhasil dihapus* 
*Terima kasih telah menggunakan layanan kami*
`;
            console.log('Trojan account deleted successfully');
            return resolve(msg);
          } else {
            console.log('Error deleting Trojan account');
            return resolve(`❌ Gagal: ${response.data.message}`);
          }
        })
        .catch(error => {
          console.error('Error saat menghapus Trojan:', error);
          return resolve('❌ Gagal menghapus Trojan. Silakan coba lagi nanti.');
        });
    });
  });
}

async function deleteshadowsocks(username, serverId) {
  console.log(`Deleting Shadowsocks account for ${username} on server ${serverId}`);
  
  if (/\s/.test(username) || /[^a-zA-Z0-9]/.test(username)) {
    return '❌ Username tidak valid. Mohon gunakan hanya huruf dan angka tanpa spasi.';
  }

  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM Server WHERE id = ?', [serverId], (err, server) => {
      if (err) {
        console.error('Error fetching server:', err.message);
        return resolve('❌ Gagal: Server tidak ditemukan. Silakan coba lagi.');
      }

      if (!server) return resolve('❌ Gagal: Server tidak ditemukan. Silakan coba lagi.');

      const domain = server.domain;
      const auth = server.auth;
      const param = `:5888/deleteshadowsocks?user=${username}&auth=${auth}`;
      const url = `http://${domain}${param}`;
      axios.get(url)
        .then(response => {
          if (response.data.status === "success") {
            const msg = `
─────────────────────
❌ *DELETE SHADOWSOCKS ACCOUNT* ❌
─────────────────────
┌────────────────────
│ Username: \`${username}\`
└────────────────────
✅ *Akun berhasil dihapus* 
*Terima kasih telah menggunakan layanan kami*
`;
            console.log('Shadowsocks account deleted successfully');
            return resolve(msg);
          } else {
            console.log('Error deleting Shadowsocks account');
            return resolve(`❌ Gagal: ${response.data.message}`);
          }
        })
        .catch(error => {
          console.error('Error saat menghapus Shadowsocks:', error);
          return resolve('❌ Gagal menghapus Shadowsocks. Silakan coba lagi nanti.');
        });
    });
  });
}

module.exports = { deleteshadowsocks, deletetrojan, deletevless, deletevmess, deletessh };