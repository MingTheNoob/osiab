// wait for document to load
window.addEventListener('load', () => {

    // Find top bar by id and add a container child element to it
    const topBar = document.getElementById('topBar');
    topBar.appendChild(document.createElement('div')).id = 'tb-container';

    // Find the top bar container element by id and add children
    const tbContainer = document.getElementById('tb-container');
    tbContainer.appendChild(document.createElement('div')).id = 'tb-settings';
    tbContainer.appendChild(document.createElement('div')).id = 'tb-sp';
    tbContainer.appendChild(document.createElement('div')).id = 'tb-calclock';
    tbContainer.appendChild(document.createElement('div')).id = 'tb-ccpanel'
    tbContainer.appendChild(document.createElement('div')).id = 'tb-notifs';

    // Settings code

    // Get the settings panel element created above, style it and add children
    const spanel = document.getElementById('tb-sp');
    spanel.style.display = 'none';
    spanel.appendChild(document.createElement('div')).id = 'tb-spcontent';

    // Find container child of spanel and add children
    const spcontent = document.getElementById('tb-spcontent');
    spcontent.appendChild(document.createElement('div')).id = 'tb-spoCwp';
    spcontent.appendChild(document.createElement('div')).id = 'tb-spoOt';
    spcontent.appendChild(document.createElement('div')).id = 'tb-spoOas';

    // Option to change wallpaper
    const spoCwp = document.getElementById('tb-spoCwp');
    spoCwp.innerHTML = `<i class="ri-image-fill"></i>&nbsp;Change Wallpaper`;

    // Option to open terminal
    const spoOt = document.getElementById('tb-spoOt');
    spoOt.innerHTML = `<i class="ri-terminal-fill"></i>&nbsp;Open Terminal`;

    // Option to open all settings
    const spoOas = document.getElementById('tb-spoOas');
    spoOas.innerHTML = `<i class="ri-settings-3-fill"></i>&nbsp;Open All Settings`;

    // Calendar and clock code

    // Get the calclock panel element created above, style it and add children
    const ccpanel = document.getElementById('tb-ccpanel');
    ccpanel.style.display = 'none';
    ccpanel.appendChild(document.createElement('div')).id = 'tb-cccontent';

    // Find container child of ccpanel and add children
    const cccontent = document.getElementById('tb-cccontent');
    cccontent.appendChild(document.createElement('div')).id = 'tb-ccpCal';
    cccontent.appendChild(document.createElement('div')).id = 'tb-ccpClock';
    cccontent.appendChild(document.createElement('div')).id = 'tb-ccpSet';

    // Section for calendar

    // Get the calendar element created above, style it and add children
    const ccpCal = document.getElementById('tb-ccpCal');
    ccpCal.appendChild(document.createElement('div')).id = 'tb-ccpCalC';

    // Find container child of ccpCal and add children
    const ccpCalC = document.getElementById('tb-ccpCalC');
    ccpCalC.appendChild(document.createElement('div')).id = 'tb-ccpCalMoSel';
    ccpCalC.appendChild(document.createElement('div')).id = 'tb-ccpCalMoDays';
    ccpCalC.appendChild(document.createElement('div')).id = 'tb-ccpCalWkNum';

    // Section for calendar month and year selection
    const calMoSel = document.getElementById('tb-ccpCalMoSel');

    // Section for calendar day and week labels
    const calMoDays = document.getElementById('tb-ccpCalMoDays');
    const calWkNum = document.getElementById('tb-ccpCalWkNum');

    // Add children to month selection
    calMoSel.appendChild(document.createElement('div')).id = 'tb-ccpCalMoPrev';
    calMoSel.appendChild(document.createElement('div')).id = 'tb-ccpCalMo';
    calMoSel.appendChild(document.createElement('div')).id = 'tb-ccpCalMoNext';

    // Add children to week numbers
    calWkNum.appendChild(document.createElement('div')).id = 'tb-ccpCalWkNumOne';
    calWkNum.appendChild(document.createElement('div')).id = 'tb-ccpCalWkNumTwo';
    calWkNum.appendChild(document.createElement('div')).id = 'tb-ccpCalWkNumThree';
    calWkNum.appendChild(document.createElement('div')).id = 'tb-ccpCalWkNumFour';
    calWkNum.appendChild(document.createElement('div')).id = 'tb-ccpCalWkNumFive';
    calWkNum.appendChild(document.createElement('div')).id = 'tb-ccpCalWkNumSix';

    // Variables to get current month and year
    var date = new Date();
    var mo = date.getMonth();
    var moName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var yr = date.getFullYear();

    // Get the month selection elements by id
    const calMoPrev = document.getElementById('tb-ccpCalMoPrev');
    const calMo = document.getElementById('tb-ccpCalMo');
    const calMoNext = document.getElementById('tb-ccpCalMoNext');

    // Add html to elements
    calMoPrev.innerHTML = `<i class="ri-arrow-left-s-line"></i>`;
    calMo.innerHTML = `${moName[mo]}&nbsp;${yr}`;
    calMoNext.innerHTML = `<i class="ri-arrow-right-s-line"></i>`;

    function calDays(selector, events) {
        this.el = document.querySelector(selector);
        this.events = events;
        this.maxEvents = this.events.reduce(function (a, b) {
            if(b.events.length > a) {
                return b.events.length;
            } else {
                return a;
            }
        }, 0);
        this.current = moment().date(1);
        this.draw();

        var current = document.querySelector('#tb-calCurrentDay');
        if (current) {
            var self = this;
            window.setTimeout(function() {
                self.openDay(current);
            }, 500);
        }
    }

    calDays.prototype.draw = function() {
        this.drawMonth();
    }

    // Get the week number elements by id
    const calWkNumOne = document.getElementById('tb-ccpCalWkNumOne');
    const calWkNumTwo = document.getElementById('tb-ccpCalWkNumTwo');
    const calWkNumThree = document.getElementById('tb-ccpCalWkNumThree');
    const calWkNumFour = document.getElementById('tb-ccpCalWkNumFour');
    const calWkNumFive = document.getElementById('tb-ccpCalWkNumFive');
    const calWkNumSix = document.getElementById('tb-ccpCalWkNumSix');

    // Section for clock
    const ccpClock = document.getElementById('tb-ccpClock');
    ccpClock.appendChild(document.createElement('div')).id = 'tb-ccpClockC';

    const ccpClockC = document.getElementById('tb-ccpClockC');
    ccpClockC.appendChild(document.createElement('div')).id = 'tb-ccpClockH';
    ccpClockC.appendChild(document.createElement('div')).id = 'tb-ccpClockM';
    ccpClockC.appendChild(document.createElement('div')).id = 'tb-ccpClockS';

    const clockH = document.getElementById('tb-ccpClockH');
    const clockM = document.getElementById('tb-ccpClockM');
    const clockS = document.getElementById('tb-ccpClockS');

    // Section for settings
    const ccpSet = document.getElementById('tb-ccpSet');
    ccpSet.appendChild(document.createElement('div')).id = 'tb-ccpSetC';

    const ccpSetC = document.getElementById('tb-ccpSetC');
    ccpSetC.appendChild(document.createElement('div')).id = 'tb-ccpSetClkFmt';
    ccpSetC.appendChild(document.createElement('div')).id = 'tb-ccpSetShwSec';

    const setClkFmt = document.getElementById('tb-ccpSetClkFmt');
    const setShwSec = document.getElementById('tb-ccpSetShwSec');

})