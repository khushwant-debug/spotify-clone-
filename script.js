   const filmySongs = [
      { name: "SAIYAARA", filePath: "assets/songs/song1.mp3", img: "assets/playlist1.jpg" },
      { name: "HUMSAFAR", filePath: "assets/songs/song2.mp3", img: "assets/playlist2.webp" },
      { name: "SIDDAT", filePath: "assets/songs/song3.mp3", img: "assets/playlist3.jpg" },
      { name: "BARBAAD", filePath: "assets/songs/song4.mp3", img: "assets/playlist4.webp" },
      { name: "AE DIL HAI MUSHKIL", filePath: "assets/songs/song5.mp3", img: "assets/playlist5.webp" },
      { name: "JEE KERR DAA", filePath: "assets/songs/song11.mp3", img: "assets/playlist11.webp" },
      { name: "THUG LOVE", filePath: "assets/songs/song13.mp3", img: "assets/playlist13.webp" },
      { name: "SHIKARI", filePath: "assets/songs/song14.mp3", img: "assets/playlist14.webp" },
      { name: "SAHIBA", filePath: "assets/songs/song15.mp3", img: "assets/playlist15.JPG" },
      { name: "NOT SURE", filePath: "assets/songs/song16.mp3", img: "assets/playlist16.webp" },
      { name: "DEEWANA", filePath: "assets/songs/song17.mp3", img: "assets/playlist17.jpg" },
      { name: "POLICE", filePath: "assets/songs/song18.mp3", img: "assets/playlist18.webp" },
      { name: "HIGH ON YOU", filePath: "assets/songs/song19.mp3", img: "assets/playlist19.webp" },
      { name: "UNFORGETABLE", filePath: "assets/songs/song20.mp3", img: "assets/playlist20.webp" },
    ];

    const romanticSongs = [
      { name: "HUMARI ADHURI KAHANI", filePath: "assets/songs/song6.mp3", img: "assets/playlist6.webp" },
      { name: "RAHOGI MERI", filePath: "assets/songs/song7.mp3", img: "assets/playlist7.webp" },
      { name: "TU MERA NAHI", filePath: "assets/songs/song8.mp3", img: "assets/playlist8.webp" },
      { name: "TERA ZIKR", filePath: "assets/songs/song9.mp3", img: "assets/playlist9.webp" },
      { name: "HEARTLESS", filePath: "assets/songs/song10.mp3", img: "assets/playlist10.webp" },
      { name: "HASI", filePath: "assets/songs/song12.mp3", img: "assets/playlist12.webp" },
      { name: "SIRRA", filePath: "assets/songs/song21.mp3", img: "assets/playlist21.jpg" },
      { name: "CREAM POSE", filePath: "assets/songs/song22.mp3", img: "assets/playlist22.webp" },
      { name: "DONALI", filePath: "assets/songs/song23.mp3", img: "assets/playlist23.webp" },
      { name: "ONE REPUBLIC", filePath: "assets/songs/song24.mp3", img: "assets/playlist24.jpg" },
      { name: "HIGHWAY", filePath: "assets/songs/song25.mp3", img: "assets/playlist25.jpg" },
      { name: "CHURAKE", filePath: "assets/songs/song26.mp3", img: "assets/playlist26.jpg" },
      { name: "AKHIYAN", filePath: "assets/songs/song27.mp3", img: "assets/playlist27.webp" },
      { name: "tollywood 2", filePath: "assets/songs/tollywood.mp3", img: "assets/tollywood.webp" },
    ];

    let currentSongIndex = 0;
    let audio = new Audio(filmySongs[currentSongIndex].filePath);
    let isPlaying = false;

    const playBtn = document.getElementById("playPauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const songInfo = document.querySelector(".songinfo");
    const currentTime = document.getElementById("currentTime");
    const totalTime = document.getElementById("totalTime");
    const seekBar = document.getElementById("seekBar");
    const volume = document.getElementById("volume");

    function loadSong(index) {
      audio.src = filmySongs[index].filePath;
      songInfo.textContent = filmySongs[index].name;
      audio.load();
    }

    function playSong() {
      audio.play();
      isPlaying = true;
      playBtn.classList.remove("fa-play");
      playBtn.classList.add("fa-pause");
    }

    function pauseSong() {
      audio.pause();
      isPlaying = false;
      playBtn.classList.remove("fa-pause");
      playBtn.classList.add("fa-play");
    }

    loadSong(currentSongIndex);

    playBtn.addEventListener("click", () => {
      isPlaying ? pauseSong() : playSong();
    });

    nextBtn.addEventListener("click", () => {
      currentSongIndex = (currentSongIndex + 1) % filmySongs.length;
      loadSong(currentSongIndex);
      playSong();
    });

    prevBtn.addEventListener("click", () => {
      currentSongIndex = (currentSongIndex - 1 + filmySongs.length) % filmySongs.length;
      loadSong(currentSongIndex);
      playSong();
    });

    audio.addEventListener("timeupdate", () => {
      seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;
      currentTime.textContent = formatTime(audio.currentTime);
      totalTime.textContent = formatTime(audio.duration || 0);
    });

    seekBar.addEventListener("input", () => {
      audio.currentTime = (seekBar.value / 100) * audio.duration;
    });

    volume.addEventListener("input", () => {
      audio.volume = volume.value;
    });

    audio.addEventListener("ended", () => {
      nextBtn.click();
    });

    function formatTime(sec) {
      let min = Math.floor(sec / 60);
      let secLeft = Math.floor(sec % 60);
      return `${min}:${secLeft < 10 ? "0" + secLeft : secLeft}`;
    }

    function generatePlaylist(songsArray, containerId) {
      const container = document.getElementById(containerId);
      songsArray.forEach((song, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img src="${song.img}" alt="${song.name}" /><p>${song.name}</p>`;
        card.addEventListener("click", () => {
          audio.src = song.filePath;
          songInfo.textContent = song.name;
          audio.load();
          playSong();
        });
        container.appendChild(card);
      });
    }

    generatePlaylist(filmySongs, "playlist-filmy");
    generatePlaylist(romanticSongs, "playlist-romantic");

    /* left container */
const songs = [...filmySongs, ...romanticSongs];

const libraryList = document.getElementById("librarySongsList");

songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.style.color = "white";
  li.style.cursor = "pointer";
  li.style.marginBottom = "10px";
  li.textContent = song.name;

  li.addEventListener("click", () => {
    audio.src = song.filePath;
    songInfo.textContent = song.name;
    audio.load();
    playSong();
  });

  libraryList.appendChild(li);
});
