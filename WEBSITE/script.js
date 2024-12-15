// Array of books
const books = [
    {
      title: "The Secret History",
      writer: "Donna Tartt",
      oldPrice: "2,300.00 DA",
      newPrice: "1,800.00 DA",
      imgSrc: "books/book1.jpg",
      link: "https://cdn.reader.cx/?source=a806bb70c7810a41af6936598bd39f2b8e034f9c82238cb28068cc1baee7052a&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F3898333%2Fe8d164",
    },
    {
      title: "The 48 Laws of Power",
      writer: "Robert Greene",
      oldPrice: "4,400.00 DA",
      newPrice: "3,990.00 DA",
      imgSrc: "books/book2.jpg",
      link: "https://cdn.reader.cx/?source=3ae81927158d1cfc086b190042e62373f19b20bbf52f458f83771202fa582252&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F19007570%2F97fc84",
    },
    {
      title: "Atomic Habits",
      writer: "James Clear",
      oldPrice: "3,500.00 DA",
      newPrice: "3,250.00 DA",
      imgSrc: "books/book3.jpg",
      link: "https://cdn.reader.cx/?source=5544f408495d7137264d32e1eb16dbd9eb1189b930c153eeae77b5b0daaa27e9&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F17913839%2Fa84b4f",
    },
    {
      title: "Milk and Honey",
      writer: "Rupi Kaur",
      oldPrice: "2,300.00 DA",
      newPrice: "2,250.00 DA",
      imgSrc: "books/book4.jpg",
      link: "https://cdn.reader.cx/?source=c03ecd11b9b92d8c79b6acf94692585305f7ba0edbdd4a943243e491234c4ff0&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F23711589%2Fa2daa1",
    },
    {
      title: "The Book Thief",
      writer: "Markus Zusak",
      oldPrice: "2,400.00 DA",
      newPrice: "1,990.00 DA",
      imgSrc: "books/book7.jpg",
      link: "https://cdn.reader.cx/?source=e7807eb87ddfae30b31d473adbc87be057ba9eacfa602c39e0faec5d1a266b70&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F21796959%2F8081c0%3Fdsource%3Drecommend",
    },
    {
      title: "Before the Coffee Gets Cold",
      writer: "Toshikazu Kawaguchi",
      oldPrice: "2,800.00 DA",
      newPrice: "2,600.00 DA",
      imgSrc: "books/book8.jpg",
      link: "https://cdn.reader.cx/?source=e03da0baa6c9209537b588450775b7da35f4e30376379d9ebfaca01ad410cf8d&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F24231982%2F5761d0",
    },
    {
      title: "Circe",
      writer: "Madeline Miller",
      oldPrice: "2,900.00 DA",
      newPrice: "2,700.00 DA",
      imgSrc: "books/book9.jpg",
      link: "https://cdn.reader.cx/?source=6a565e5b9d840636a9256024e5af3597ea7d82f35605488b11b1daf4de319c9d&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F5372440%2Fcea851",
    },
    {
      title: "Dune",
      writer: "Frank Herbert",
      oldPrice: "4,000.00 DA",
      newPrice: "3,600.00 DA",
      imgSrc: "books/book10.jpg",
      link: "https://cdn.reader.cx/?source=9687cd96f3c14ee76afd8e765209179b46bf60752ba288d582e4c48f85ce21be&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F1490631%2Fd87057",
    },
    {
      title: "Harry Potter Box Set",
      writer: "J. K. Rowing",
      oldPrice: "14,200.00 DA",
      newPrice: "12,800.00 DA",
      imgSrc: "books/book11.jpg",
      link: "",
    },
    {
      title: "She Comes First",
      writer: "Ian Kerner",
      oldPrice: "3,000.00 DA",
      newPrice: "2,750.00 DA",
      imgSrc: "books/book12.jpg",
      link: "https://cdn.reader.cx/?source=758bcc8576930229dc7df5a13e70f55e78e3ed3442241094b39447de60e99940&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F25440664%2F5082b1",
    },
    {
      title: "The Catcher in the Rye",
      writer: "J.D. Salinger",
      oldPrice: "2,400.00 DA",
      newPrice: "2,100.00 DA",
      imgSrc: "books/book13.jpg",
      link: "https://cdn.reader.cx/?source=758bcc8576930229dc7df5a13e70f55e78e3ed3442241094b39447de60e99940&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F25440664%2F5082b1",
    },
    {
      title: "Pride and Prejudice",
      writer: "Jane Austen",
      oldPrice: "3,500.00 DA",
      newPrice: "3,200.00 DA",
      imgSrc: "books/book14.jpg",
      link: "https://cdn.reader.cx/?source=c2d55e262d67af880884a6d45398d22bf39c5d723953d64539c3ddfac2fd335c&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F1642163%2F949c1b",
    },
    {
        title: "1984",
        writer: "George Orwell",
        oldPrice: "2,100.00 DA",
        newPrice: "1,850.00 DA",
        imgSrc: "books/book15.jpg",
        link: "https://cdn.reader.cx/?source=1b91d7d08c094dcaf27435b7f25042f66ecc709d147701ecbdff0533ea81279a&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F1773751%2Fb66b37",
      },
      {
        title: "Moby-Dick",
        writer: "Herman Melville",
        oldPrice: "2,200.00 DA",
        newPrice: "1,950.00 DA",
        imgSrc: "books/book16.jpg",
        link: "hhttps://cdn.reader.cx/?source=aa025de10e6ffd0fcc638dde38f23eeae1da64e4944be2042d134b8a94ceb738&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F22335905%2Ff4c12dttps://example.com/moby-dick",
      },
      {
        title: "The Great Gatsby",
        writer: "F. Scott Fitzgerald",
        oldPrice: "2,800.00 DA",
        newPrice: "2,400.00 DA",
        imgSrc: "books/book17.jpg",
        link: "https://cdn.reader.cx/?source=89457a1a14c204840d7cd95105f42f0a2bffc6878dc51ef9c940e92996e44012&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F1267241%2F35500a",
      },
      {
        title: "Brave New World",
        writer: "Aldous Huxley",
        oldPrice: "2,600.00 DA",
        newPrice: "2,200.00 DA",
        imgSrc: "books/book18.jpg",
        link: "https://cdn.reader.cx/?source=8996585f86fcf78fc64b7db257da2035b6ec5a51e17cea3f433df24f952abfad&download_location=https%3A%2F%2Fz-lib.gs%2Fdl%2F1439588%2Fafa390",
      },
  ];
  // WARNING : Add error handling in case the link doesn't exist or doesn't work, for example you can use ajax to check if the link still works
  // Function to create a grid item
  function createGridItem(book) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
  
    const imageSection = document.createElement("div");
    const img = document.createElement("img");
    img.src = book.imgSrc;
    img.alt = book.title;
    imageSection.appendChild(img);
  
    const textSection = document.createElement("div");
    textSection.className = "text-section";
  
    const h3Section = document.createElement("div");
    h3Section.className = "h3-section";
    const title = document.createElement("h3");
    title.textContent = book.title;
    h3Section.appendChild(title);
    const infoSection = document.createElement("div");
    infoSection.className = "info-section";
  
    const writer = document.createElement("p");
    writer.className = "writer";
    writer.textContent = `by ${book.writer}`;
  
    const oldPrice = document.createElement("p");
    oldPrice.className = "old-price";
    oldPrice.textContent = book.oldPrice;
  
    const newPrice = document.createElement("p");
    newPrice.className = "new-price";
    newPrice.textContent = book.newPrice;
  
    const button = document.createElement("a");
    button.href = book.link;
    button.target = "_blank";
    button.className = "btn";
    button.textContent = "Online Version";
   
    infoSection.append(writer, oldPrice, newPrice, button);
    textSection.append(title, infoSection , h3Section);
    gridItem.append(imageSection, textSection);
  
    return gridItem;
  }
  
  // Render books on page load
  document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector(".grid-container");
    books.forEach((book) => gridContainer.appendChild(createGridItem(book)));
  });
  
