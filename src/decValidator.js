export default function decValidator(num) {
    return /^-?\d*\.?\d+$/.test(num);
}