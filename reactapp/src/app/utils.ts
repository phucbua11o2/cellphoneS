import Swal from "sweetalert2";
import numeral from "numeral";
//import { MessageModel } from "../models/commonModel";
import moment from "moment";
import { CurrencyListModel } from "../models/commonModel";

export async function UseSwal(
    msg: string,
    callback: any,
    cancelCallBack: any = null
) {
    Swal.fire({
        allowOutsideClick: false,
        html: `<p align="left">${msg}</p>`,
        showCancelButton: true,
        confirmButtonColor: "#0f0d6a",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes",
    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        } else {
            if (cancelCallBack) cancelCallBack();
        }
    });
}

export async function UseSwalError(msg: string | undefined) {
    //Swal.fire("", message,);

    Swal.fire({
        html: `<p align="left">${msg}</p>`,
        allowOutsideClick: false,
        showCancelButton: false,
        confirmButtonColor: "#0f0d6a",
        //cancelButtonColor: "#6c757d",
        confirmButtonText: "OK",
        //cancelButtonText: "No",
    });
}

export async function UseSwalInfo(msg: string | undefined, callback: any) {
    //Swal.fire("", message,);

    Swal.fire({
        html: `<p align="left">${msg}</p>`,
        allowOutsideClick: false,
        showCancelButton: false,
        confirmButtonColor: "#0f0d6a",
        //cancelButtonColor: "#6c757d",
        confirmButtonText: "OK",
        //cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        }
    });
}

export function FixCodeShow(code: string, lenght: number) {
    var reg = /^\d+$/;
    if (reg.test(code)) {
        return code.padStart(lenght, "0");
    }
    return code;
}

export function cal(val1: string, val2: string, digit: number) { }

export function formatNumber(val: number, digit: number) {
    // if (val) {
    //   if (digit == 0) {
    //     return numeral(val).format("0,000");
    //   } else if (digit == 1) {
    //     return numeral(val).format("0,000.0");
    //   } else {
    //     return numeral(val).format("0,000.00");
    //   }
    // }
    // return "";
    if (digit == 0) {
        return numeral(val).format("0,000");
    } else if (digit == 1) {
        return numeral(val).format("0,000.0");
    } else {
        return numeral(val).format("0,000.00");
    }
}

export function formatDate(val: string) {
    if (val) {
        return val.slice(6, 8) + "/" + val.slice(4, 6) + "/" + val.slice(0, 4);
    }
    return "";
}

export function formatYearMonth(val: string) {
    if (val) {
        return val.slice(4, 6) + "/" + val.slice(0, 4);
    }
    return "";
}

export function calSubTotalAndVat(
    quantity: string,
    unitPrice: string,
    ratio: string,
    vatFlag: string,
    digit: number
) {
    let subTotal = 0;
    let vat = 0;

    let price = numeral(unitPrice).value() as number;
    let qty = numeral(quantity).value() as number;
    let rat: number = 0;
    if (ratio) {
        rat = numeral(ratio).value() as number;
    }

    if (quantity && unitPrice) {
        subTotal = price * qty;
    }

    //Exclude
    if (vatFlag === "0") {
        if (ratio) {
            vat = (subTotal * rat) / 100;
        }
    }

    return [formatNumber(subTotal, digit), formatNumber(vat, digit)];
}

export function calVat(
    subTotal: string,
    ratio: string,
    vatFlag: string,
    digit: number
) {
    let subTotal1 = 0;
    let vat = 0;

    let rat: number = 0;
    if (ratio) {
        rat = numeral(ratio).value() as number;
    }

    if (subTotal) {
        subTotal1 = numeral(subTotal).value() as number;
    }

    //Exclude
    if (vatFlag === "0") {
        if (ratio) {
            vat = (subTotal1 * rat) / 100;
        }
    }

    return formatNumber(vat, digit);
}

export function getExchangeRate(
    id: string,
    currencyList: CurrencyListModel[] | undefined,
    date: string
) {
    let exchangeRate = 1;
    if (currencyList) {
        currencyList.forEach((val) => {
            if (
                val.id === id &&
                ((!date && val.isNow) ||
                    (date && val.effectDate <= date && val.expireDate >= date))
            )
                exchangeRate = val.exchangeRate;
        });
    }
    return exchangeRate;
}

export function getNumber(val: string) {
    const value = numeral(val).value();
    if (value) return value;
    return 0;
}

export function toUSD(val: number, ex: number) {
    return Math.round((val / ex) * 100) / 100;
}

export function exchangeMoneyByFlg(
    val: number,
    currencyFlgFrom: string,
    currencyFlgTo: string,
    currencyList: CurrencyListModel[],
    useDate: string,
    digit: number
) {
    let fromEx = getExchangeRate(currencyFlgFrom, currencyList, useDate);

    let toEx = getExchangeRate(currencyFlgTo, currencyList, useDate);
    return exchangeMoney(val, fromEx, toEx, digit);
}

export function exchangeMoney(
    val: number,
    exFrom: number,
    exTo: number,
    digit: number
) {
    if (exFrom == exTo) {
        return val;
    }

    let usdVal = val / exFrom;
    let retVal = usdVal * exTo;

    if (digit == 0) {
        return Math.round(retVal);
    } else {
        return Math.round(retVal * 100) / 100;
    }
}

export function calProfitValue(totalSell: number, totalCost: number) {
    let ret = 0;

    // Check  total sell
    if (totalSell == 0) {
        return ret;
    }

    // calculate profit
    ret = totalSell - totalCost;

    if (ret < 0) {
        ret = 0;
    }

    return ret;
}

export function calProfit(totalSell: number, totalCost: number) {
    let ret = 0;

    // Check  total sell
    if (totalSell == 0) {
        return ret;
    }

    // calculate profit
    ret = Math.round(((totalSell - totalCost) / totalSell) * 100 * 100) / 100;

    if (ret < 0) {
        ret = 0;
    }

    return ret;
}

export function downloadExcel(data: string, fileName: string) {
    //Excel
    const pre =
        "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," +
        data;
    //resultExcel.data.data;
    const linkSource = pre;
    const downloadLink = document.createElement("a");
    //const fileName = fileName;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
}

export function getMessage(
    data: { messageId: string; message: string; type: string }[],
    messageId: string
) {
    return data.find(({ messageId }) => messageId === messageId)
        ?.message as string;
}

export async function showQuestionMessage(
    messages: { messageId: string; message: string; type: string }[],
    msgId: string,
    yesCallback: any,
    cancelCallBack: any = null
) {
    const msg = messages.find(({ messageId }) => messageId === msgId)
        ?.message as string;

    Swal.fire({
        html: `<p align="left">${msg}</p>`,
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: "#0f0d6a",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed) {
            if (yesCallback) yesCallback();
        } else {
            if (cancelCallBack) cancelCallBack();
        }
    });
}

export async function showQuestionMessageFromMsg(
    msg: string,
    yesCallback: any,
    cancelCallBack: any = null
) {
    Swal.fire({
        html: `<p align="left">${msg}</p>`,
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: "#0f0d6a",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed) {
            if (yesCallback) yesCallback();
        } else {
            if (cancelCallBack) cancelCallBack();
        }
    });
}

export function compareDateString(
    a: string,
    b: string,
    aRow: any,
    bRow: any,
    column: any,
    dir: any,
    sorterParams: any
) {
    let a1 = 0;
    let b1 = 0;

    if (a) {
        a1 = parseInt(moment(a, "DD/MM/YYYY").format("YYYYMMDD"));
    }

    if (b) {
        b1 = parseInt(moment(b, "DD/MM/YYYY").format("YYYYMMDD"));
    }
    return a1 - b1;
}

export function compareNumberString(
    a: string,
    b: string,
    aRow: any,
    bRow: any,
    column: any,
    dir: any,
    sorterParams: any
) {
    let a1 = 0;
    let b1 = 0;

    if (a) {
        a1 = getNumber(a);
    }

    if (b) {
        b1 = getNumber(b);
        // b1 = parseFloat(numeral(b).format("0,000.00"));
    }
    return a1 - b1;
}
