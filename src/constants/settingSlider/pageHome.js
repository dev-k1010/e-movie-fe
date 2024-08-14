const bannerSettings = {
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "280px",
    slidesToShow: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    rows: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "90px",
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "0",
            },
        },
    ],
};

const movieTabsSettings = (movie) => {

    let settings = {
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 5,
        speed: 1500,
        rows: 1,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    className: "center",
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: "210px",
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    className: "center",
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: "0px",
                    slidesToScroll: 1,
                },
            },
        ]
    };
    
    if (movie >= 1 && movie < 5) {
        settings = {
            ...settings,
            className: "center",
            centerMode: true,
            slidesToShow: movie,
            centerPadding: "280px",
            rows: 1,
        };
    }

    return settings;
};

export { bannerSettings, movieTabsSettings }