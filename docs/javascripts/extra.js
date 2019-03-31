document.getElementById("select-docs-version").onchange = function (event) {
    let currentValue = document.getElementById("select-docs-version").value;
    if (currentValue === '2.x') {
        window.location.href = 'https://docs.gl-inet.com/en/2/';
    }
    else if (currentValue === '3.x') {
        window.location.href = 'https://docs.gl-inet.com/en/3/';
    }
};

document.getElementById("select-docs-language").onchange = function (event) {
    let currentValue = document.getElementById("select-docs-language").value;
    if (currentValue === 'en') {
        window.location.href = 'https://docs.gl-inet.com/en/3/';
    }
    else if (currentValue === 'jp') {
        window.location.href = 'https://docs.gl-inet.com/jp/3/';
    }
};
