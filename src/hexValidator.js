export default function hexValidator(num) {
    const hexPattern = /^[0-9A-Fa-f]+$/;
    return hexPattern.test(num);
}