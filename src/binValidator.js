export default function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== "0" && num[i] !== "1") {
            return false;
        }
    }
    return true;
}