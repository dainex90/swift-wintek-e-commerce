const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const print_promo_text = async (msg) => {
    for (let index = 0; index < msg.length; index++) {
        const char = msg[index];
        console.log(char);
        await sleep(100)
    }
}

let text = "30 days of withdrawal_";
print_promo_text(text);