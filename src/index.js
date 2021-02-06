module.exports = function toReadable (number) {
  number_new = +number;
    number_new += '';
    if (number_new.length === 1) {
        if (Number(number_new) === 0) return 'zero';
        return GetOnes(number_new);
    }
    if (number_new.length === 2) {
        if (Number(number_new) >= 11 && Number(number_new) <= 19) {
            return GetFrom11To19(number_new);
        }
        return `${GetTenner(number_new[0])} ${GetOnes(number_new[1])}`.trim()
    }
    if (number_new.length === 3) {

        if (Number(number_new[1]) === 0 && Number(number_new[2]) ===     0) {
            return `${GetOnes(number_new[0])} hundred`
        }
        return `${GetOnes(number_new[0])} hundred ${toReadable(number_new.slice(1))}`
    }


    function GetTenner(value) {
        if (value == '1') {
            return 'ten';
        }
        if (value == '2') {
            return 'twenty';
        }
        if (value == '3') {
            return 'thirty';
        }
        if (value == '4') {
            return 'forty';
        }
        if (value == '5') {
            return 'fifty';
        }
        if (value == '6') {
            return 'sixty';
        }
        if (value == '7') {
            return 'seventy';
        }
        if (value == '8') {
            return 'eighty';
        }
        if (value == '9') {
            return 'ninety';
        }
    };


    function GetFrom11To19(value) {
        if (value == '11') {
            return 'eleven';
        }
        if (value == '12') {
            return 'twelve';
        }
        if (value == '13') {
            return 'thirteen';
        }
        if (value == '14') {
            return 'fourteen';
        }
        if (value == '15') {
            return 'fifteen';
        }
        if (value == '16') {
            return 'sixteen';
        }
        if (value == '17') {
            return 'seventeen';
        }
        if (value == '18') {
            return 'eighteen';
        }
        if (value == '19') {
            return 'nineteen';
        }
    };

    function GetOnes(value) {
        if (value == 0) {
            return ''
        }
        if (value == '1') {
            return 'one';
        }
        if (value == '2') {
            return 'two';
        }
        if (value == '3') {
            return 'three';
        }
        if (value == '4') {
            return 'four';
        }
        if (value == '5') {
            return 'five';
        }
        if (value == '6') {
            return 'six';
        }
        if (value == '7') {
            return 'seven';
        }
        if (value == '8') {
            return 'eight';
        }
        if (value == '9') {
            return 'nine';
        }
    };

    return final.trim()
}
