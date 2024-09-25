const imgOptions = [["Cleopatra", "images/g1.png"], ["Young boy with flowers", "images/b1.png"], ["Yoda", "images/yoda.png"], ["Young lady", "images/g2.png"], ["Duet", "images/music.png"], ["Boy with blue eyes", "images/b2.png"], ["Smart dog", "images/dog.png"], ["Young girl", "images/g3.png"], ["Happy friends", "images/m1.png"], ["Happy girl", "images/m2.png"]];

var remOptions = [];

function pickImages() {
    var n = imgOptions.length;
    var fooarray = getRange(n);
    var m = 5;
    var [rand, rem] = getRandomSplit(fooarray, m);

    img1 = document.querySelector("#im1");
    img1.setAttribute("alt", imgOptions[rand[0]][0]);
    img1.setAttribute("src", imgOptions[rand[0]][1]);
    img2 = document.querySelector("#im2");
    img2.setAttribute("alt", imgOptions[rand[1]][0]);
    img2.setAttribute("src", imgOptions[rand[1]][1]);
    img3 = document.querySelector("#im3");
    img3.setAttribute("alt", imgOptions[rand[2]][0]);
    img3.setAttribute("src", imgOptions[rand[2]][1]);
    img4 = document.querySelector("#im4");
    img4.setAttribute("alt", imgOptions[rand[3]][0]);
    img4.setAttribute("src", imgOptions[rand[3]][1]);
    img5 = document.querySelector("#im5");
    img5.setAttribute("alt", imgOptions[rand[4]][0]);
    img5.setAttribute("src", imgOptions[rand[4]][1]);

    for (let i = 0; i < rem.length; i++) {
        remOptions.push(imgOptions[rem[i]]);
    }
}

function getRange(array_length) {
    var fooarray = [];
    for (var j = 0; j < array_length; j++) {
        fooarray.push(j);
    }
    return fooarray;
}

function getRandomSplit(arr, split_size) {
    arrCopy = [];
    for (i = 0; i < arr.length; i++) {
        arrCopy[i] = arr[i];
    }
    var randsample = [];
    for (var k = 1; k <= split_size; k++) {
        ind = Math.floor(Math.random() * arrCopy.length);
        randsample.push(arrCopy[ind]);
        arrCopy.splice(ind, 1);
    }
    return [randsample, arrCopy];
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > remOptions.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = remOptions.length;
    }

    const imageElement = document.getElementById("slideImage");
    const captionText = document.getElementById("caption");
    const numberText = document.getElementById("numbertext");

    var currentImg = remOptions[slideIndex - 1];
    imageElement.src = currentImg[1];
    imageElement.alt = currentImg[0];
    captionText.innerHTML = currentImg[0];
    numberText.innerHTML = `${slideIndex} / ${remOptions.length}`;

    const dots = document.getElementsByClassName("demo");
    if (dots.length > 0) {
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex - 1].className += " active";
    }
}

function createThumbnails() {
    const thumbnailContainer = document.getElementById("thumbnailContainer");
    remOptions.forEach((imgOption, index) => {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("column");

        const thumbnail = document.createElement("img");
        thumbnail.src = imgOption[1];
        thumbnail.alt = imgOption[0];
        thumbnail.style.width = "100%";
        thumbnail.classList.add("demo", "cursor");
        thumbnail.onclick = function() {
            currentSlide(index + 1);
        };

        columnDiv.appendChild(thumbnail);
        thumbnailContainer.appendChild(columnDiv);
    });
}

// Ensure pickImages runs before showSlides and createThumbnails
let slideIndex = 1;
window.onload = function () {
    pickImages();      // Ensure remOptions is populated
    createThumbnails(); // Create the thumbnails
    showSlides(slideIndex);  // Show the first slide
};

function upDate(pix) {
    const elt = document.getElementById("image");
    elt.style.backgroundImage = `url(${pix.src})`;
    elt.style.backgroundColor = "#cceecc";
    elt.innerHTML = pix.alt;
}


function unDo(){
    const elt = document.getElementById("image");
    elt.style.backgroundImage = "";
    elt.innerHTML = "Hover over an image below to display here."
}
