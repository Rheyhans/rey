let handler = async m => m.reply(`
╭─「 Donasi • Pulsa」
│ • Indosat [085895001126]
│ • Telkomsel [081234836748]
╰────
╭─「 Donasi • Nom Pulsa」
│ • Dana [085895001126]
╰────

╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285895001126
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
