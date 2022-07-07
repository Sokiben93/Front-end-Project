// const buttonPrev = document.querySelector(".btnPrev");
const $buttonNext = $(".button");
const $wrapper = $(".wrapper");
const $wrapper1 = $(".wrapper1");
const $wrapper2 = $(".wrapper2");

var currPage = 1;
$buttonNext.click(() => {
    $wrapper.empty();
    $wrapper1.empty();
    $wrapper2.empty();
    $.get(`https://randomuser.me/api/?page=${currPage}&results=1`, (data) => {
        console.log(data);
        // $wrapper.innerHTML = '';
        data.results.forEach((search) => {
            let div1 = $('<div class="person">');
            div1.appendTo($wrapper);
            let div2 = $('<div class="header-info">');
            div2.appendTo(div1);
            let img = $(`<img class="image" src=${search.picture.large}></img>`);
            img.appendTo(div2);
            let div3 = $(`<div class="info">`);
            div3.appendTo(div1);
            let div4 = $(`<div class="name">${search.name.title}. ${search.name.first}</div>`);
            div4.appendTo(div3);
            let div5 = $(`<div class="country">${search.location.country}</div>`);
            div5.appendTo(div3);
            let div6 = $('<div class="footer-info">');
            div6.appendTo(div1);
            let div7 = $('<div class="more">');
            div7.appendTo(div6);
            let span = $(`<span class="gender">${search.gender}</span>`);
            span.appendTo(div7);
            let span1 = $(`<span class="age">Age: ${search.registered.age}</span>`);
            span1.appendTo(div7);
            let div8 = $(`<div class="email">${search.email}</div>`);
            div8.appendTo(div6);
            console.log(div1);
        });
    });

    $.get(`https://randomuser.me/api/?page=${currPage + 1}&results=1`, (data) => {
        console.log(data);
        // $wrapper.innerHTML = '';
        data.results.forEach((search) => {
            let div1 = $('<div class="person1">');
            div1.appendTo($wrapper1);
            // div1.appendTo($wrapper1);
            // div1.appendTo($wrapper2);
            let div2 = $('<div class="header-info">');
            div2.appendTo(div1);
            let img = $(`<img class="image" src=${search.picture.large}></img>`);
            img.appendTo(div2);
            let div3 = $(`<div class="info">`);
            div3.appendTo(div1);
            let div4 = $(`<div class="name">${search.name.title}. ${search.name.first}</div>`);
            div4.appendTo(div3);
            let div5 = $(`<div class="country">${search.location.country}</div>`);
            div5.appendTo(div3);
            let div6 = $('<div class="footer-info">');
            div6.appendTo(div1);
            let div7 = $('<div class="more">');
            div7.appendTo(div6);
            let span = $(`<span class="gender">${search.gender}</span>`);
            span.appendTo(div7);
            let span1 = $(`<span class="age">Age: ${search.registered.age}</span>`);
            span1.appendTo(div7);
            let div8 = $(`<div class="email">${search.email}</div>`);
            div8.appendTo(div6);
            console.log(div1);
        });
    })

    $.get(`https://randomuser.me/api/?page=${currPage + 2}&results=1`, (data) => {
        console.log(data);
        // $wrapper.innerHTML = '';
        data.results.forEach((search) => {
            let div1 = $('<div class="person2">');
            div1.appendTo($wrapper2);
            let div2 = $('<div class="header-info">');
            div2.appendTo(div1);
            let img = $(`<img class="image" src=${search.picture.large}></img>`);
            img.appendTo(div2);
            let div3 = $(`<div class="info">`);
            div3.appendTo(div1);
            let div4 = $(`<div class="name">${search.name.title}. ${search.name.first}</div>`);
            div4.appendTo(div3);
            let div5 = $(`<div class="country">${search.location.country}</div>`);
            div5.appendTo(div3);
            let div6 = $('<div class="footer-info">');
            div6.appendTo(div1);
            let div7 = $('<div class="more">');
            div7.appendTo(div6);
            let span = $(`<span class="gender">${search.gender}</span>`);
            span.appendTo(div7);
            let span1 = $(`<span class="age">Age: ${search.registered.age}</span>`);
            span1.appendTo(div7);
            let div8 = $(`<div class="email">${search.email}</div>`);
            div8.appendTo(div6);
            console.log(div1);
        });
    })
    currPage++;
})

// hushed-position.surge.sh

//     const {
//       email,
//       gender,
//       location: { country },
//       name: { title, first },
//       picture: { large },
//       registered: { age },
//     } = info; // Destructuring assignment
    // userData += `<div class="person">
    // <div class="header-info">
    //   <img class="img" src=${large}/>
    //   <div class="info">
    //       <div class="name">${title}. ${first}</div>
    //       <div class="country">${country}</div>
    //   </div>
    // </div>
    // <div class="footer-info">
    //   <div class="more">
    //       <span>${gender}</span>
    //       <span>${age}</span>
    //   </div>
    //   <div class="email">${email}</div>
    //       </div>
    // </div>`;
//   $wrapper.innerHTML = userData;