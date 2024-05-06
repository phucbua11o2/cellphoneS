export enum ModeEnum {
    none,
    new,
    copy,
    view,
    update,
    delete,
    revise,
    check,
}

export enum VatEnum {
    Excluse,
    Incluse,
    Free,
}

export interface ResponseModel {
    hasError: boolean;
    data: any;
    error: ErrorModel;
}

export interface ErrorModel {
    errorType: string;
    errors: ErrorDetail[];
}

export interface ErrorDetail {
    name: string;
    messages: string[];
}

export interface MessageModel {
    messages: { messageId: string; message: string; type: string }[];
}

export interface SearchProps {
    show: boolean;
    onHide: any;
    selectData: any;
    onChange: any;
}

export interface EndUserProps {
    show: boolean;
    onHide: any;
    getCurrentData: any;
    selectData: any;
    mode: ModeEnum;
    branchIDName: string;
    getValue: any;
}

export interface AttachedProps {
    show: boolean;
    onHide: any;
}

export interface ModeModel {
    value: ModeEnum;
}

export interface CurrencyListModel {
    id: string;
    isNow: boolean;
    effectDate: string;
    expireDate: string;
    exchangeRate: number;
}

export interface ConditionModel {
    condition: string;
    updateDate: string;
}

export interface EndUserModel {
    endUserCD: string;
    endUserName1: string;
    endUserName2: string;
    endUserAddress1: string;
    endUserAddress2: string;
    endUserAddress3: string;
    endUserTel: string;
    endUserFax: string;
    endUserEmailAddress: string;
    endUserContactPerson: string;
    endUserContactTel: string;
    branchID: string;
    updateDate: string;
}

export const EndUserDefault = {
    endUserCD: "",
    endUserName1: "",
    endUserName2: "",
    endUserAddress1: "",
    endUserAddress2: "",
    endUserAddress3: "",
    endUserTel: "",
    endUserFax: "",
    endUserEmailAddress: "",
    endUserContactPerson: "",
    endUserContactTel: "",
    branchID: "",
    updateDate: "",
};

export interface TotalMoneyDisp {
    currency: string;
    currencyName: string;
    currencyNameBtn: string;
    totalSell: string;
    totalCost: string;
    profit: string;
}

export interface ItemInitModel {
    authModel: AuthModel;
    dateFrom: string;
    dateTo: string;
    currencyData: {
        value: number;
        display: string;
        decimalDigits: number;
    }[];
    branches: {
        code: string;
        name: string;
    }[];
}

export interface BaseListModel {
    currentPage: number;
    pageSize: number;
}

export interface BaseDetailModel {
    updatedDateDisplay: string;
    updatedUserDisplay: string;
    insertedDateDisplay: string;
    insertedUserDisplay: string;
    issuedUserDisplay: string;
    issuedDateDisplay: string;
}

export interface AuthModel {
    quotation: boolean;
    accept: boolean;
    purchase: boolean;
    shipping: boolean;
    invoice: boolean;
    master: boolean;
    setting: boolean;
    exchangeRate: boolean;
    approval: boolean;
    finished: boolean;
    admin: boolean;
    xlsQuotation: boolean;
    xlsAccept: boolean;
    xlsPurchcase: boolean;
    xlsShipping: boolean;
    xlsInvoice: boolean;
    xlsMaster: boolean;
    branch: boolean;
    serviceCategory: boolean;
    isDisplayBranch: boolean;
    mustChangePassword: boolean;
}

export interface AccessLog {
    action: string;
    machineName: string;
}

export interface AdminLog {
    functionName: string;
    action: string;
    machineName: string;
}

export interface CurrencyModel {
    code: string;
    name: string;
    taxName: string;
    digit: number;
}

export interface CombboBoxModel {
    code: string;
    name: string;
}

export const MAX_ROW_FIXED_BOTTOM = 8;

export enum ApprovedType {
    Quotation = 0,
    Accept = 1,
    Purchase = 2,
    Shipping = 3,
    Invoice = 4,
}
export enum TableEnum {
    QuotationHeader = "Quotation Header",
    QuotationSell = "Quotation Sell",
    QuotationCost = "Quotation Cost",
    QuotationCondition = "Quotation Condition",
    AcceptanceHeader = "Acceptance Header",
    AcceptanceCost = "Acceptance Cost",
    AcceptanceSell = "Acceptance Sell",
    AcceptanceCondition = "Acceptance Condition",
    PurchaseHeader = "Purchase Header",
    PurchaseDetails = "Purchase Details",
    PurchaseCondition = "Purchase Condition",
    ShippingHeader = "Shipping Header",
    ShippingDetail = "Shipping Detail",
    Serial = "Serial",
    ShippingCondition = "Shipping Condition",
    InvoiceHeader = "Invoice Header",
    InvoiceDetails = "Invoice Details",
    InvoiceCondition = "Invoice Condition",
    Category = "Category",
    CategoryRate = "Category Rate",
    CategoryStruct = "Category Struct",
    Customer = "Customer",
    CustomerGroup = "Customer Group",
    Vendor = "Vendor",
    Condition = "Condition",
    Unit = "Unit",
    Team = "Team",
    Maker = "Maker",
    ServiceCategory = "Service Category",
    Project = "Project",
    Branch = "Branch",
    User = "User",
    GroupUser = "Group User",
    Configuration = "Configuration",
    ExchangeRateH = "Exchange Rate H",
    ExchangeRateM = "Exchange Rate M",
    ConfigH = "Config H",
    ConfigD = "Config D",
    EndUser = "End User",
}

export interface TableModel {
    value: TableEnum;
}
