function createCard(thumbnail, title, channel, views, monthOld, duration, bcolor) {

    let thumbnailImg = document.querySelector(".img");
    let titleElem = document.querySelector(".title");
    let channelNameElem = document.querySelector(".channel-Name");
    let viewsElem = document.querySelector(".views");
    let oldElem = document.querySelector(".old");
    let lengthElem = document.querySelector(".length");
    let boxElem = document.querySelector(".box");
  
    thumbnailImg.src = thumbnail;
    titleElem.innerText = title;
    channelNameElem.innerText = channel;
    viewsElem.innerText = views + " views";
    oldElem.innerText = monthOld;
    lengthElem.innerText = duration;
    boxElem.style.backgroundColor = bcolor; // Set background color here
  }
  
  document.getElementById("Submit").addEventListener("click", function () {
    let thumbnailImage = document.getElementById("website_url").value;
    let cardTitle = document.getElementById("website_name").value;
    let channelName = document.getElementById("channel-Name").value;
    let viewCount = document.getElementById("Views-count").value;
    let uploadTime = document.getElementById("month-old").value;
    let videoLength = document.getElementById("duration").value;
    let bgColor = document.getElementById("bgcolor").value; // Get the color value
  
    createCard(
      thumbnailImage,
      cardTitle,
      channelName,
      viewCount,
      uploadTime,
      videoLength,
      bgColor // Pass color value to the function
    );
  });
  