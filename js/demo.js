function KiemTraTenDN() {
    var re = /^[a-z]\w*/;
    if (re.test(document.getElementById('txtDN').value.trim()) == false) {
        tendn.innerText = "*bắt buộc, bắc đầu bằng ký tự";
        return false;
    } else {
        tendn.innerText = "*";
        return true;
    }
}

function KiemTraPassWord() {
    var re = /(?=.*\d).{6,}/;
    if (re.test(document.getElementById('txtMK').value.trim()) == false) {
        tendn.innerText = "* phải có chữ, số, ít nhất 6 ký tự";
        return false;
    } else {
        tendn.innerText = "*";
        return true;
    }
}

function KiemTraXacNhanPassWord() {
    if (document.getElementById('txtNMK').value != document.getElementById('txtMK').value) {
        xnmk.innerText = "* phải giống ô mật khẩu";
        return false;
    } else {
        tendn.innerText = "*";
        return true;
    }
}

function KiemTraNgaySinh() {
    var ns = Date(document.getElementById('txtNS').value);
    var today = new Date();
    if (eval(today.getFullYear() - ns.getFullYear()) <= 10) {
        ngaysinh.innerText = "tuổi phải lớn hơn 10";
        return false;
    } else {
        tendn.innerText = "*";
        return true;
    }
}

function SubmitForm() {
    if (KiemTraTenDN() == false || KiemTraPassWord() == false || KiemTraXacNhanPassWord() == false) {
        alert('Bạn chưa nhập đầy đủ thông tin!');
        return false;
    }
    return true;
}