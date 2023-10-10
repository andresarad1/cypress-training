
const loginPage = {
    logIn          : '#login2',
    loginUser      : '#loginusername',
    loginPassword  : '#loginpassword',
    loginRegister  : '.btn-primary',
    registerUser   : '#nameofuser'
}

const homePage = {
    categories : '.list-group-item',
    itemChoice : '.card-block',
    btnMainPage: '#nava',
    navar      : '.nav-link'

}

const cartPage = {
    titleItem  : '#tbodyid',
    btnAdd     : '.btn-success',
    btnCart    : '#cartur',
    totalPrice : '#totalp',
    listItem   : "//*[@id='tbodyid']/tr",
    placeOrder : '//*[@class="col-lg-1"]//button'
}

const fillPage = {
    name        : '#name',
    country     : '#country',
    city        : '#city',
    creditCard  : '#card',
    month       : '#month',
    year        : '#year',
    purchase    : '//button[@class="btn btn-primary"]',
    alertFill   : '.sweet-alert'
}

const sendMessage = {
    email       : '#recipient-email',
    name        : '#recipient-name',
    message     : '#message-text',
    sendMessage : '//button[@class="btn btn-primary"]',

    

}

export {loginPage,homePage,cartPage,fillPage,sendMessage}



