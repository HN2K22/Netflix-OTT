document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch(
      "https://repo-tech2edge.github.io/tasks/sample.json"
    );
    const data = await response.json();

    document.querySelector(".navbar-brand").textContent = `${data.series.ott}`;

    document.querySelector(
      "title"
    ).textContent = `${data.series.title} - Netflix`;

    document.querySelector("h1").textContent = `${data.series.title}`;
    document.querySelector(".series-desc").textContent = data.series.desc;

    document.querySelector(".cast h2").textContent =
      data.series.title + " Characters";

    const castSection = document.querySelector(".card-container");

    document.querySelectorAll(".card").forEach((card) => card.remove());

    data.characters.forEach((character) => {
      const cardHTML = `
          <div class="card card-character" style="border: 1px solid rgb(230, 34, 34); background-color: black; color: white; width: 20rem; flex: 0 1 auto;">
            <img
              src="${character.img}"
              class="card-img-top"
              alt="${character.name}"
            />
            <div class="card-body">
              <h5 class="card-title">
                ${character.name}, <span class="age">${character.age}</span>
              </h5>
              <p class="card-text">${character.profession}</p>
            </div>
            `;

      castSection.innerHTML += cardHTML;
    });

    document.querySelector(".episodes h2").textContent =
      data.series.title + " Episodes";

    const cardContainer = document.querySelector(".card-container2");

    data.episodes.forEach((episode) => {
      const cardHTML = `
                <div class="card card-episode" style="border: 1px solid rgb(230, 34, 34); background-color: black; color: white; width: 20rem; flex: 0 1 auto;">
                    <img src="${episode.img}" class="card-img-top" alt="${episode.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${episode.title}</h5>
                        <p class="card-text">${episode.description}</p>
                    </div>
                </div>
            `;

      cardContainer.innerHTML += cardHTML;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
