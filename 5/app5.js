#home {
    background-image: url('https://raw.githubusercontent.com/azmideliaslan/Uikit-Portfolio-Website/main/images/bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}

#home::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* adjust the opacity and color as needed */
}
.uk-navbar-item.uk-logo {
    width: 200px;
    height: 50px;
}
/* Add a background color to the navbar when it's sticky */
.uk-navbar-sticky {
    background-color: #341e4bf8;
}

/* Change the background color of the navbar when the user scrolls down */
.uk-navbar-container.uk-sticky {
    transition: background-color 0.3s ease;
}

.uk-navbar-container.uk-sticky .uk-navbar-sticky {
    background-color: #341e4bc2;
}

/* Change the color of the active navbar link to white, and the color of the other links to a different color */
.uk-navbar-container.uk-sticky .uk-navbar-nav>li>a:active {
    color: #fff;
}

.uk-navbar-container.uk-sticky .uk-navbar-nav>li>a:not(:active) {
    color: #ccc;
}
#portfolio{
    background-color: #ffffff;
}
#services {
    background-color: #341E4B;
}

#services h2 {
    margin-top: 0;
}

#services .uk-card {
    padding: 50px 20px;
}

#services .uk-card-title {
    margin-top: 20px;
}

#services .uk-text-muted {
    margin-top: 0;
}

#services .uk-margin-bottom {
    display: inline-block;
    color: #0077be;
}

#services .uk-margin-bottom svg {
    stroke-width: 2;
}

#contact {
    background-color: #ffffff;
}

#contact h2 {
    margin-top: 0;
}

#contact form {
    margin-top: 20px;
}

#contact .uk-margin {
    margin-bottom: 20px;
}

#contact .uk-button {
    background-color: #0077be;
    border-color: #0077be;
}

#contact .uk-button:hover {
    background-color: #005ea8;
    border-color: #005ea8;
    color: #fff;
}

#footer{
    background-color: #341E4B;
}

@media (max-width: 960px) {
    #services .uk-child-width-1-3@m {
        margin-top: 40px;
    }

    #contact .uk-child-width-1-2@m {
        margin-top: 40px;
    }
    #about img{
        display: block;
        margin: 0 auto;

    }
    #about h2,p{
        text-align: center;
    }
}

@media (max-width: 768px) {
    .uk-navbar-item.uk-logo {
        width: 150px;
        height: 25px;
    }
    #services .uk-child-width-1-3@m {
        margin-top: 20px;
    }

    #contact .uk-child-width-1-2@m {
        margin-top: 20px;
    }

    #contact form {
        margin-top: 0;
    }
    #about img,h2,p{
        text-align: center;
        display: block;
        margin: 0 auto;
    }
}

@media (max-width: 480px) {
    .uk-navbar-item.uk-logo {
        width: 100px;
        height: 20px;
    }
    #services .uk-card {
        padding: 30px 15px;
    }

    #services .uk-card-title {
        font-size: 1.2rem;
    }

    #services .uk-margin-bottom svg {
        width: 40px;
        height: 40px;
    }

    #contact .uk-child-width-1-2@m {
        flex-direction: column;
    }
    #about img,h2,p{
        text-align: center;
        display: block;
        margin: 0 auto;
    }
}
