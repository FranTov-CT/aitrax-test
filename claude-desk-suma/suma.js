function add(a, b) {
    return a + b;
}

if (require.main === module) {
    const [a, b] = process.argv.slice(2).map(Number);
    if (Number.isNaN(a) || Number.isNaN(b) || process.argv.length < 4) {
        console.error('Usage: node suma.js <a> <b>');
        process.exit(1);
    }
    console.log(`${a} + ${b} =`, add(a, b));
}

module.exports = { add };
