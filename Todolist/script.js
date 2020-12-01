document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.btn').disabled = true;

    document.querySelector('#task').onkeyup = () => {
        if(document.querySelector('#task').value.length > 0){
            document.querySelector('.btn').disabled = false;
        } else {
            document.querySelector('.btn').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
    const task = document.querySelector('#task').value;
    
    const li = document.createElement('li');
    li.innerHTML = task;
    const check = document.createElement('button');
    const bin = document.createElement('button');
    check.innerHTML = '<i>ch</i>';
    bin.innerHTML = '<i>del</i>';

    document.querySelector('#tasks').append(li);
    document.querySelector('#tasks').append(check);
    document.querySelector('#tasks').append(bin);

    document.querySelector('#task').value = '';
    document.querySelector('.btn').disabled = true;


    return false;
}
});