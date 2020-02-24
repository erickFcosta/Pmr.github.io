document.querySelector('div.a1').addEventListener('mouseover', () => {
    document.querySelector('div.i1').style.display = 'block';
        document.querySelector('div.a1').style.backgroundColor = 'yellow'; 
    document.querySelector('div.i2').style.display = 'none';
        document.querySelector('div.a2').style.backgroundColor = 'rgb(202, 202, 202)';
    document.querySelector('div.i3').style.display = 'none';
        document.querySelector('div.a3').style.backgroundColor = 'rgb(202, 202, 202)';
});

document.querySelector('div.a2').addEventListener('mouseover', () => {
    document.querySelector('div.i1').style.display = 'none';
        document.querySelector('div.a1').style.backgroundColor = 'rgb(202, 202, 202)';
    document.querySelector('div.i2').style.display = 'block';
        document.querySelector('div.a2').style.backgroundColor = 'yellow';
    document.querySelector('div.i3').style.display = 'none';
        document.querySelector('div.a3').style.backgroundColor = 'rgb(202, 202, 202)';
});

document.querySelector('div.a3').addEventListener('mouseover', () => {
    document.querySelector('div.i1').style.display = 'none';
        document.querySelector('div.a1').style.backgroundColor = 'rgb(202, 202, 202)';
    document.querySelector('div.i2').style.display = 'none';
        document.querySelector('div.a2').style.backgroundColor = 'rgb(202, 202, 202)';
    document.querySelector('div.i3').style.display = 'block';
        document.querySelector('div.a3').style.backgroundColor = 'yellow';
});
