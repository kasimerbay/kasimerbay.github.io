function toUTC(date){
    const param = {
        lang: 'tr-TR',
        timeZone: 'Asia/Istanbul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      };

    return date.toLocaleString(param.lang, {
                                timeZone: param.timeZone,
                                year: param.year,
                                month: param.month,
                                day: param.day,
                                hour: param.hour,
                                minute: param.minute,
                                second: param.second,
                                timeZoneName: param.timeZoneName,
    })
}

function dateDiff(date1, date2){
    let result = []
    let clocks = [[1000,60], [60,60], [60,24], [24,365]];

    var miliDiff = Math.abs(date1 - date2);
    let iters = parseInt(miliDiff);

    for(let i of clocks){
        iters /= i[0];
        result.push(parseInt(iters%i[1]));
    }

    return result.reverse();
}

const wedding_ist = new Date(
        2023,
        10, 
        28,
        20,
        0,
        0
).getTime();

const wedding_ant = new Date(
        2023,
        10, 
        21,
        17,
        0,
        0
).getTime();

var now = new Date().getTime();

console.log(dateDiff(now, wedding_ist));