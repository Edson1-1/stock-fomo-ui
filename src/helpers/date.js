const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



export function convertDateToString(date_str) {
    const temp_date = date_str.split("-");
    let numberSuffix = '';
    if (temp_date[2][temp_date[2].length - 1] === "1" && temp_date[2] !== "11") {
        numberSuffix = 'st'
    } else if (temp_date[2][temp_date[2].length - 1] === "2" && temp_date[2] !== "12") {
        numberSuffix = 'nd'
    }
    else if (temp_date[2][temp_date[2].length - 1] === "3" && temp_date[2] !== "13") {
        numberSuffix = 'rd'
    }
    else {
        numberSuffix = 'th'
    }
    return temp_date[2] + numberSuffix + " " + months[Number(temp_date[1]) - 1] + ", " + temp_date[0];
};

export function convertDate(_date) {
    let date
    if(_date){
        date = new Date(_date).toLocaleString("en-IN");
    } else {
        date = new Date().toLocaleString("en-IN");
    }

    const splitDate = date.substring(0, date.indexOf(','))

    const dateFormat = splitDate.split('/');

    let finalDate = ''
    for (const [index, date] of dateFormat.entries()) {
        finalDate = date + finalDate
        if (index !== dateFormat.length - 1) {
            finalDate = '-' + finalDate
        }
    }

    return finalDate;

}