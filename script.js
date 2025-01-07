
    // Define the sections and their corresponding colors
    const sections = document.querySelectorAll("section");
    const colors = ["#f7f7f7", "#f7f7f7", "#87ceeb"]; // Matching colors for each section
    const navbar = document.querySelector('.navbar'); // Reference to the navbar

    // Add scroll event listener
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Change body background color
                document.body.style.backgroundColor = colors[index];
                // Sync navbar background color with the body
                navbar.style.backgroundColor = colors[index];
            }
        });
    });

