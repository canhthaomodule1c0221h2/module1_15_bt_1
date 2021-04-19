let number = +prompt("nhập số cần kiểm tra");

function isprime(num) {
    if (num <= 1) {
        return false;
    }
    else if (num === 2) {
            return true;
        }
     else if (num > 2) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}

if (isprime(number)) {
    document.write(" đây la số nguyên tố");
} else {
    document.write("đây không phải số nguyên tố")
}
