// wait for document to load
window.addEventListener('load', () => {
    // Get the calclock element and add children and get the ccpanel
    const calclock = document.getElementById('tb-calclock');
    const ccpanel = document.getElementById('tb-ccpanel');
    calclock.appendChild(document.createElement('div')).id = 'calendar';
    calclock.appendChild(document.createElement('div')).id = 'clock';

    // Function to update the calendar
    function calendarFunc() {
        // Get the calendar
        const calendar = document.getElementById('calendar');

        // Get the current date
        var d = new Date();
        var y = d.getFullYear();
        var mo = d.getMonth() + 1;
        var dy = d.getDate();
        var wkdy = d.getDay();

        // Format wkdy and mo to show 3 letter name instead of number
        wkdy = wkdy === 0 ? 'Sun' : wkdy === 1 ? 'Mon' : wkdy === 2 ? 'Tue' : wkdy === 3 ? 'Wed' : wkdy === 4 ? 'Thu' : wkdy === 5 ? 'Fri' : 'Sat';
        mo = mo === 1 ? 'Jan' : mo === 2 ? 'Feb' : mo === 3 ? 'Mar' : mo === 4 ? 'Apr' : mo === 5 ? 'May' : mo === 6 ? 'Jun' : mo === 7 ? 'Jul' : mo === 8 ? 'Aug' : mo === 9 ? 'Sep' : mo === 10 ? 'Oct' : mo === 11 ? 'Nov' : 'Dec';

        // Update the calendar
        calendar.innerHTML = wkdy + '&nbsp;' + dy + '&nbsp;' + mo + '&nbsp;' + y;

        // Call the function again in 1 second
        setTimeout(calendarFunc, 1000);
    }

    // Function to update the clock
    function clockFunc() {
        // Get the clock
        const clock = document.getElementById('clock');

        // Get the current time
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();

        // Format h, m, and s to show 2 digit numbers
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        ampm = h >= 12 ? 'PM' : 'AM';

        // Update the time variable depending on the clock format
        if (localStorage.getItem('clockFormat') === '12' && localStorage.getItem('showSec') === 'true') {
            if (h === 0) {
                h = 12;
            } else if (h > 12) {
                h = h - 12;
                ampm = 'PM';
            }

            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            ampm = ampm === 'AM' ? 'AM' : 'PM';
            var t = h + ':' + m + ':' + s + ' ' + ampm;
        } else if ((localStorage.getItem('clockFormat') === '12') && (localStorage.getItem('showSec') === 'false')) {
            if (h === 0) {
                h = 12;
            } else if (h > 12) {
                h = h - 12;
                ampm = 'PM';
            }

            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            var t = h + ':' + m + ' ' + ampm;
        } else if ((localStorage.getItem('clockFormat') === '24') && (localStorage.getItem('showSec') === 'true')) {
            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            var t = h + ':' + m + ':' + s;
        } else if ((localStorage.getItem('clockFormat') === '24') && (localStorage.getItem('showSec') === 'false')) {
            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            var t = h + ':' + m;
        } else {
            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            var t = h + ':' + m;
        }

        // Update the clock and call the function again in 1 second
        clock.innerHTML = t;
        setTimeout(clockFunc, 1000);
    }

    // Call the functions
    calendarFunc();
    clockFunc();

    // get calendar and clock elements
    const calendar = document.getElementById('calendar');
    const clock = document.getElementById('clock');

    // Add click event listener for calendar and clock
    document.addEventListener('click' , (e) => {
        if ((calendar.contains(e.target) && ccpanel.style.display === 'none') || (clock.contains(e.target) && ccpanel.style.display === 'none')) {
            ccpanel.style.display = 'block';
            calclock.classList.add('cc-open');
        } else if ((calendar.contains(e.target) && ccpanel.style.display === 'block') || (clock.contains(e.target) && ccpanel.style.display === 'block')) {
            ccpanel.style.display = 'none';
            calclock.classList.remove('cc-open');
        } else if ((!calendar.contains(e.target) && ccpanel.style.display === 'none') || (!clock.contains(e.target) && ccpanel.style.display === 'none')) {
            return;
        } else if ((!calendar.contains(e.target) && ccpanel.style.display === 'block') || (!clock.contains(e.target) && ccpanel.style.display === 'block')) {
            ccpanel.style.display = 'none';
            calclock.classList.remove('cc-open');
        }
    });
})