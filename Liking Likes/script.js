function add1(element) {
    var id = element.id;
    var countElement = document.getElementById(id).innerHTML;
    var count = countElement.substring(0,countElement.indexOf(" "));
    count = parseInt(count) + 1;
    document.getElementById(id).innerHTML = count + countElement.substring(countElement.indexOf(" "));
}