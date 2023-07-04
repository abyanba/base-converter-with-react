export default function octValidator(num) {
    for (let i = 0; i < num.length; i++) {
        if (!/[0-7]/.test(num[i])) {
            return false;
        }
    }
    return true;
}