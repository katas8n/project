function encrypt(data) {
    return "Encrypted data";
}

function send(url, data) {
    const encryptedData = encrypt(data);

    return `Sending encrypted ${encryptedData} to ${url}.`;
}

module.exports = { send };