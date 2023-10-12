setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    hrotation = 30 * hTime + mTime / 2;
    mrotation = 6 * mTime;
    srotation = 6 * sTime;

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000);

// to set transport point to bottom set it's origin to bottom
// in css