alert ("Подтвердите, что вы не робот");

function onlynumbers (phone) {
    let str = phone.value;
    str = str.replace(/\D/g, "");
    phone.value = "+" + str;
}