const dist = (choice) => { 
    let head_count = 0; tail_count = 0;
    let head, tail;
    for (let j = 0; j < choice; j++) {
        if (Math.random() < 0.5) {
            tail_count++;
        }
        else {

            head_count++;
        }
    }
    head = head_count / choice * 100;
    tail = tail_count / choice * 100;
    console.log("percentage of head " + head + "%");
    console.log("percentage of tail " + tail + "%");}
module.exports = {
    choice,

}