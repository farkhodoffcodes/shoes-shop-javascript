let sortby_btn = document.querySelector("#sortby_btn");
let sortby_opt = document.querySelector(".sortby_option");

sortby_btn.addEventListener("click", () => {
  sortby_opt.classList.toggle("sortby_option_active");
});

let newest = document.querySelector("#newest");
let all_shoes = document.querySelector("#all_shoes");
let low = document.querySelector("#low");
let high = document.querySelector("#high");

let main_shoes_bx = document.querySelector(".main_shoes_bx");

let url = "backend/shoes.json";

fetch(url)
  .then((Response) => Response.json())
  .then((data) => {
    const all_shoes_arr = [...data];
    const low_arr = [...data];
    const high_arr = [...data];
    const newest_arr = [...data].splice(0, 8);

    data.forEach((element, index) => {
      const { Img, Category, Color, Name, Price, Tag, MRP } = element;
      let card = document.createElement("a");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${Img}" alt=${Name} />
        <h5 class="card-title" title=${Name}>
          ${Name}
        </h5>
        <p>${Category}</p>
        <div class="price">
          <h5>UZS ${Price}</h5>
          <h5>UZS <del>${MRP}</del></h5>
        </div>
        <div class="color_tag">
          <h6>Color ${Color}</h6>
          <h6>${Tag}</h6>
        </div>
      `;

      main_shoes_bx.appendChild(card);
    });

    newest.addEventListener("click", () => {
      main_shoes_bx.innerHTML = "";
      sortby_btn.innerHTML = `
        <h5>Sort By: Newest</h5>
        <i class="bi bi-arrow-down-short"></i>
        `;

      sortby_opt.classList.toggle("sortby_option_active");

      newest_arr.forEach((element, index) => {
        const { Img, Category, Color, Name, Price, Tag, MRP } = element;
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${Img}" alt=${Name} />
          <h5 class="card-title" title=${Name}>
            ${Name}
          </h5>
          <p>${Category}</p>
          <div class="price">
            <h5>UZS ${Price}</h5>
            <h5>UZS <del>${MRP}</del></h5>
          </div>
          <div class="color_tag">
            <h6>Color ${Color}</h6>
            <h6>${Tag}</h6>
          </div>
        `;
        main_shoes_bx.appendChild(card);
      });
    });

    all_shoes.addEventListener("click", () => {
      main_shoes_bx.innerHTML = "";
      sortby_btn.innerHTML = `
        <h5>Sort By: All Shoes</h5>
        <i class="bi bi-arrow-down-short"></i>
        `;

      sortby_opt.classList.toggle("sortby_option_active");

      all_shoes_arr.forEach((element, index) => {
        const { Img, Category, Color, Name, Price, Tag, MRP } = element;
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${Img}" alt=${Name} />
          <h5 class="card-title" title=${Name}>
            ${Name}
          </h5>
          <p>${Category}</p>
          <div class="price">
            <h5>UZS ${Price}</h5>
            <h5>UZS <del>${MRP}</del></h5>
          </div>
          <div class="color_tag">
            <h6>Color ${Color}</h6>
            <h6>${Tag}</h6>
          </div>
        `;
        main_shoes_bx.appendChild(card);
      });
    });

    low.addEventListener("click", () => {
      main_shoes_bx.innerHTML = "";
      sortby_btn.innerHTML = `
        <h5>Sort By: Low</h5>
        <i class="bi bi-arrow-down-short"></i>
        `;

      low_arr.sort(({ Price: a }, { Price: b }) => a - b);

      sortby_opt.classList.toggle("sortby_option_active");

      low_arr.forEach((element, index) => {
        const { Img, Category, Color, Name, Price, Tag, MRP } = element;
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${Img}" alt=${Name} />
          <h5 class="card-title" title=${Name}>
            ${Name}
          </h5>
          <p>${Category}</p>
          <div class="price">
            <h5>UZS ${Price}</h5>
            <h5>UZS <del>${MRP}</del></h5>
          </div>
          <div class="color_tag">
            <h6>Color ${Color}</h6>
            <h6>${Tag}</h6>
          </div>
        `;
        main_shoes_bx.appendChild(card);
      });
    });

    high.addEventListener("click", () => {
      main_shoes_bx.innerHTML = "";
      sortby_btn.innerHTML = `
        <h5>Sort By: High</h5>
        <i class="bi bi-arrow-down-short"></i>
        `;

      high_arr.sort(({ Price: a }, { Price: b }) => a - b);
      high_arr.reverse();

      sortby_opt.classList.toggle("sortby_option_active");

      high_arr.forEach((element, index) => {
        const { Img, Category, Color, Name, Price, Tag, MRP } = element;
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${Img}" alt=${Name} />
          <h5 class="card-title" title=${Name}>
            ${Name}
          </h5>
          <p>${Category}</p>
          <div class="price">
            <h5>UZS ${Price}</h5>
            <h5>UZS <del>${MRP}</del></h5>
          </div>
          <div class="color_tag">
            <h6>Color ${Color}</h6>
            <h6>${Tag}</h6>
          </div>
        `;
        main_shoes_bx.appendChild(card);
      });
    });

    let boot_array = all_shoes_arr.filter((el) => {
      return el.Type === "Boots";
    });

    let All_Main_filter_array = [];

    let boots = document.getElementById("boots");
    let loafers = document.getElementById("loafers");

    boots.addEventListener("click", () => {
      if (boots.title === "boots_filter_on") {
        main_shoes_bx.innerHTML = "";
        boots.classList.toggle("i_active");
        boots.classList.toggle("bi-toggle2-off");
        boots.classList.toggle("bi-toggle2-on");
        boots.title = "boots_filter_off";
        All_Main_filter_array = All_Main_filter_array.concat(boot_array);

        All_Main_filter_array.forEach((element, i) => {
          const { Img, Category, Color, Name, Price, Tag, MRP } = element;
          let card = document.createElement("a");
          card.classList.add("card");
          card.innerHTML = `
              <img src="${Img}" alt=${Name} />
              <h5 class="card-title" title=${Name}>
                ${Name}
              </h5>
              <p>${Category}</p>
              <div class="price">
                <h5>UZS ${Price}</h5>
                <h5>UZS <del>${MRP}</del></h5>
              </div>
              <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
              </div>
            `;
          main_shoes_bx.appendChild(card);
        });
      } else {
        main_shoes_bx.innerHTML = "";
        boots.classList.toggle("i_active");
        boots.classList.toggle("bi-toggle2-off");
        boots.classList.toggle("bi-toggle2-on");
        boots.title = "boots_filter_on";
        All_Main_filter_array = All_Main_filter_array.filter((el) => {
          return boot_array.indexOf(el) < 0;
        });
      }
    });

    // LOAFER
    let loafers_array = all_shoes_arr.filter((el) => {
      return el.Type === "Loafer";
    });

    loafers.addEventListener("click", () => {
      if (loafers.title === "loafers_filter_on") {
        main_shoes_bx.innerHTML = "";
        loafers.classList.toggle("i_active");
        loafers.classList.toggle("bi-toggle2-off");
        loafers.classList.toggle("bi-toggle2-on");
        loafers.title = "loafers_filter_off";
        All_Main_filter_array = All_Main_filter_array.concat(loafers_array);

        All_Main_filter_array.forEach((element, i) => {
          const { Img, Category, Color, Name, Price, Tag, MRP } = element;
          let card = document.createElement("a");
          card.classList.add("card");
          card.innerHTML = `
              <img src="${Img}" alt=${Name} />
              <h5 class="card-title" title=${Name}>
                ${Name}
              </h5>
              <p>${Category}</p>
              <div class="price">
                <h5>UZS ${Price}</h5>
                <h5>UZS <del>${MRP}</del></h5>
              </div>
              <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
              </div>
            `;
          main_shoes_bx.appendChild(card);
        });
      } else {
        main_shoes_bx.innerHTML = "";
        loafers.classList.toggle("i_active");
        loafers.classList.toggle("bi-toggle2-off");
        loafers.classList.toggle("bi-toggle2-on");
        loafers.title = "loafers_filter_on";

        All_Main_filter_array = All_Main_filter_array.filter((el) => {
          return loafers_array.indexOf(el) < 0;
        });
        All_Main_filter_array.forEach((element, i) => {
          const { Img, Category, Color, Name, Price, Tag, MRP } = element;
          let card = document.createElement("a");
          card.classList.add("card");
          card.innerHTML = `
              <img src="${Img}" alt=${Name} />
              <h5 class="card-title" title=${Name}>
                ${Name}
              </h5>
              <p>${Category}</p>
              <div class="price">
                <h5>UZS ${Price}</h5>
                <h5>UZS <del>${MRP}</del></h5>
              </div>
              <div class="color_tag">
                <h6>Color ${Color}</h6>
                <h6>${Tag}</h6>
              </div>
            `;
          main_shoes_bx.appendChild(card);
        });
      }
    });
    let right_input = document.querySelector("#right_input");
    let right_input_icon = document.querySelector(".right_input_icon");
    let left_input = document.querySelector("#left_input");
    let left_input_icon = document.querySelector(".left_input_icon");

    // LEFT
    left_input.addEventListener("change", () => {
      let array__1000_5000 = all_shoes_arr.filter((el) => {
        return el.Price <= 50000;
      });

      left_input_icon.style.left = left_input.value + "%";
      let price_box_value_left = (50000 / 100) * left_input.value;

      document.querySelector(".left_price").textContent = price_box_value_left;

      let array__1000_5000_left = array__1000_5000.filter((el) => {
        return el.Price >= price_box_value_left;
      });

      main_shoes_bx.innerHTML = "";
      array__1000_5000_left.forEach((element, i) => {
        const { Img, Category, Color, Name, Price, Tag, MRP } = element;
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${Img}" alt=${Name} />
            <h5 class="card-title" title=${Name}>
              ${Name}
            </h5>
            <p>${Category}</p>
            <div class="price">
              <h5>UZS ${Price}</h5>
              <h5>UZS <del>${MRP}</del></h5>
            </div>
            <div class="color_tag">
              <h6>Color ${Color}</h6>
              <h6>${Tag}</h6>
            </div>
          `;
        main_shoes_bx.appendChild(card);
      });
    });

    // RIGHT
    right_input.addEventListener("change", () => {
      right_input_icon.style.left = right_input.value + "%";
      let price_box_value_right = (50000 / 100) * right_input.value;

      document.querySelector(".right_price").textContent =
        price_box_value_right;

      let array__50001_10000 = all_shoes_arr.filter((el) => {
        return el.Price >= 50000;
      });

      let array__1000_5000_right = array__50001_10000.filter((el) => {
        return el.Price >= price_box_value_right + 50000;
      });

      main_shoes_bx.innerHTML = "";
      array__1000_5000_right.forEach((element, i) => {
        const { Img, Category, Color, Name, Price, Tag, MRP } = element;
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${Img}" alt=${Name} />
            <h5 class="card-title" title=${Name}>
              ${Name}
            </h5>
            <p>${Category}</p>
            <div class="price">
              <h5>UZS ${Price}</h5>
              <h5>UZS <del>${MRP}</del></h5>
            </div>
            <div class="color_tag">
              <h6>Color ${Color}</h6>
              <h6>${Tag}</h6>
            </div>
          `;
        main_shoes_bx.appendChild(card);
      });
    });

    const color = [
      "white",
      "gray-white",
      "yellow",
      "yellow-black",
      "orange",
      "green",
      "sky-blue",
      "pink",
      "red",
      "blue",
      "gray-black",
      "brown",
      "black",
    ];

    Array.from(document.querySelectorAll(".color")).forEach((item, index) => {
      item.addEventListener("click", () => {
        const color_array = all_shoes_arr.filter((el) => {
          return el.ColorTag === color[index];
        });

        main_shoes_bx.innerHTML = "";

        color_array.forEach((element, i) => {
          const { Img, Category, Color, Name, Price, Tag, MRP } = element;
          let card = document.createElement("a");
          card.classList.add("card");
          card.innerHTML = `
				<img src="${Img}" alt=${Name} />
				<h5 class="card-title" title=${Name}>
				  ${Name}
				</h5>
				<p>${Category}</p>
				<div class="price">
				  <h5>UZS ${Price}</h5>
				  <h5>UZS <del>${MRP}</del></h5>
				</div>
				<div class="color_tag">
				  <h6>Color ${Color}</h6>
				  <h6>${Tag}</h6>
				</div>
			  `;
          main_shoes_bx.appendChild(card);
        });
      });
    });

    document.querySelector(".colors").addEventListener("click", () => {
      main_shoes_bx.innerHTML = "";

      all_shoes_arr.forEach((element, i) => {
        const { Img, Category, Color, Name, Price, Tag, MRP } = element;
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `
							<img src="${Img}" alt=${Name} />
							<h5 class="card-title" title=${Name}>
							  ${Name}
							</h5>
							<p>${Category}</p>
							<div class="price">
							  <h5>UZS ${Price}</h5>
							  <h5>UZS <del>${MRP}</del></h5>
							</div>
							<div class="color_tag">
							  <h6>Color ${Color}</h6>
							  <h6>${Tag}</h6>
							</div>
						  `;
        main_shoes_bx.appendChild(card);
      });
    });
  });
