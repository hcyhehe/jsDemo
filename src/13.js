var startTime = new Date().getTime()
var count = 0
//耗时任务
setInterval(function(){
    var i = 0;
    while(i++ < 100000000);
}, 0)
function handle() {
    count++
    var offset = new Date().getTime() - (startTime + count * 1000)
    var nextTime = 1000 - offset
    if (nextTime < 0) nextTime = 0
    console.log(nextTime)
    setTimeout(handle, nextTime)
    console.log(count + ' --- ' + offset)
}
setTimeout(handle, 1000)

